const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path");
const cors = require("cors");
const chatRouter = require("./Router/ChatRouter");
const insertMessage = require("./Service/ChatService");
const connectDatabase = require("./Database/DbConnect");
const url = "mongodb://localhost:27017/chatapp";
const serverMessage =
  "This is a test message from server how can i help you with your concerns";
const serverName = "Server";
const messageFlow = { incoming: "incoming", outgoing: "outgoing" };

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());
app.use("/api/chat", chatRouter);

/*app.get("/api/chat", (req, res) => {
  //res.sendFile(__dirname + "/index.html");
  console.log("success rest api");
  res.send("this is sucessfull");
});*/

connectDatabase(url);

io.on("connection", (ws) => {
  ws.on("chatclient", (msg) => {
    console.log(msg);
    insertMessage(
      msg.sender,
      msg.conversationId,
      msg.chatMessage,
      messageFlow.incoming
    );
    insertMessage(
      serverName,
      msg.conversationId,
      serverMessage,
      messageFlow.outgoing
    );
    ws.emit("chatserver", serverMessage);
  });
});

http.listen(9090, () => {
  console.log("server running on port 9090");
});
