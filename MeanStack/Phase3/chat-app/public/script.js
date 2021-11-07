const userid = "Balaji Visvanathan";
const submitButton = document.querySelector(".msg_send_btn");
const inboxChat = document.querySelector(".inbox_chat");
const chatMsg = document.querySelector(".write_msg");
const msgHistory = document.querySelector(".msg_history");
const currMsgs = document.querySelectorAll(".msg_history > div");
const typeChat = document.querySelector(".type_msg");
const welcomeMsg =
  "Test, which is a new approach to have all solutions astrology under one roof.";
const convMsg =
  "Test, which is a new approach to have all solutions astrology under one roof.";
const socket = io();
let activeConversationId = "";
let recentConv = [];
let pastMessages = [];

axios.defaults.baseURL = "http://localhost:9090/api/chat";
//socket.emit("obj1","This is from Client1");
//let emp = {id:100,name:"Balaji",age:21}

const getNewConversationId = async () => {
  try {
    const response = await axios.get("/getConversationId");
    if (response.data.success === true) {
      activeConversationId = response.data.conversationId;
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};

const getMessagesByConversationId = async (id) => {
  try {
    const response = await axios.get(`/getConversationMessagesById/${id}`);
    if (response.data.success === true) {
      pastMessages = response.data.messages.messages;
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};

const getMostRecentConversations = async () => {
  try {
    const response = await axios.get("/getRecentConversations");
    if (response.data.success === true) {
      recentConv = response.data.conversations;
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};

const chatMsgDateFormat = () => {
  return moment().format("HH:mm A [|] MMM DD");
};

const currentDateFormatLLL = () => {
  return moment().format("LLL");
};

const convertDateUtcFormatLLL = (dt) => {
  return moment.utc(dt).local().format("LLL");
};

const convertDateUtcFormatChat = (dt) => {
  return moment.utc(dt).local().format("HH:mm A [|] MMM DD");
};

let scrolled = false;
const updateScroll = () => {
  if (!scrolled) {
    msgHistory.scrollTop = msgHistory.scrollHeight;
  }
};

//msg_send_btn

const conversationElementHtml = (uid, currdate, msg, isActive, cid) => {
  return ` <div class="chat_list ${
    isActive ? `active_chat` : `notactive_chat`
  }" data-cid="${cid}" data-isactive="${isActive}">
<div class="chat_people">
  <div class="chat_img">
    <img
      src="https://ptetutorials.com/images/user-profile.png"
      alt="sunil"
    />
  </div>
  <div class="chat_ib">
    <h5>
      ${uid} <span class="chat_date">${currdate}</span>
    </h5>
    <p>
      ${msg}
    </p>
  </div>
</div>
</div>`;
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const loadConversationMessagesHtml = async (e) => {
  e.stopPropagation();
  let selectedTxtElement = e.target;

  //console.log(e.target.getAttribute("data-cid"));
  let conId = "";
  let active = false;
  let els = [];
  let currentItem = null;
  while (selectedTxtElement) {
    /* if (selectedTxtElement.getAttribute("data-cid")) {
      currentItem = selectedTxtElement;
    }*/
    if (selectedTxtElement.classList != undefined) {
      if (selectedTxtElement.classList.length != 0) {
        if (selectedTxtElement.classList.contains("chat_list")) {
          conId = selectedTxtElement.dataset.cid;
          if (selectedTxtElement.dataset.isactive === "true") active = true;
          break;
        }
      }
    }
    els.unshift(selectedTxtElement);
    selectedTxtElement = selectedTxtElement.parentNode;
    //console.log(selectedTxtElement.getAttribute("data-cid"));
  }

  const chatList = document.querySelectorAll(".inbox_chat > .chat_list");
  Array.from(chatList).forEach((e) => {
    if (e.classList.contains("active_chat")) {
      e.classList.remove("active_chat");
      e.classList.add("notactive_chat");
    }
  });
  const el = document.querySelector(`div[data-cid="${conId}"]`);
  el.classList.remove("notactive_chat");
  el.classList.add("active_chat");

  let pastModifiedMessages = [];
  pastMessages = [];
  removeAllChildNodes(msgHistory);
  await getMessagesByConversationId(conId);
  pastModifiedMessages = pastMessages.map((message) => {
    let msgHtml = "";
    if (message.chatFlow === "outgoing") {
      msgHtml = incomingMsgHtml(
        message.chatContent,
        convertDateUtcFormatChat(message.timeCreated)
      );
    }
    if (message.chatFlow === "incoming") {
      msgHtml = outgoingMsgHtml(
        message.chatContent,
        convertDateUtcFormatChat(message.timeCreated)
      );
    }
    return msgHtml;
  });

  msgHistory.insertAdjacentHTML("beforeend", pastModifiedMessages.join(""));
  if (!active) {
    typeChat.style.display = "none";
  } else {
    scrolled = false;
    updateScroll();
    typeChat.style.display = "block";
  }
};

const sendOutgoingMessage = (m) => {
  msgHistory.insertAdjacentHTML(
    "beforeend",
    outgoingMsgHtml(m, chatMsgDateFormat())
  );
  scrolled = false;
  updateScroll();
};

const receiveIncomingMessage = (m) => {
  msgHistory.insertAdjacentHTML(
    "beforeend",
    incomingMsgHtml(m, chatMsgDateFormat())
  );
  scrolled = false;
  updateScroll();
};

const incomingMsgHtml = (msg, dt) => {
  const inMsgHtml = ` <div class="incoming_msg">
<div class="incoming_msg_img">
  <img
    src="https://ptetutorials.com/images/user-profile.png"
    alt="sunil"
  />
</div>
<div class="received_msg">
  <div class="received_withd_msg">
    <p>${msg}</p>
    <span class="time_date"> ${dt}</span>
  </div>
</div>
</div>`;
  return inMsgHtml;
};

const outgoingMsgHtml = (msg, dt) => {
  const outMsgHtml = `<div class="outgoing_msg">
   <div class="sent_msg">
     <p>${msg}</p>
     <span class="time_date"> ${dt}</span>
   </div>
   </div>`;
  return outMsgHtml;
};

socket.on("chatserver", (msg) => {
  receiveIncomingMessage(msg);
});

const scrollMe = () => {
  scrolled = true;
};

const dispatchMessage = (e) => {
  e.preventDefault();
  e.stopPropagation();
  socket.emit("chatclient", {
    chatMessage: chatMsg.value,
    conversationId: activeConversationId,
    sender: "Balaji Visvanathan",
  });
  sendOutgoingMessage(chatMsg.value);
  chatMsg.value = "";
};

const loadNewConversation = (load) => {
  if (load) {
    inboxChat.insertAdjacentHTML(
      "afterbegin",
      conversationElementHtml(
        userid,
        currentDateFormatLLL(),
        convMsg,
        true,
        activeConversationId
      )
    );
    msgHistory.insertAdjacentHTML(
      "beforeend",
      incomingMsgHtml(welcomeMsg, chatMsgDateFormat())
    );
  }
};

const loadPastConversations = (load) => {
  if (load) {
    const pastConv = recentConv.map((conv) => {
      return conversationElementHtml(
        userid,
        convertDateUtcFormatLLL(conv.createTime),
        convMsg,
        false,
        conv._id
      );
    });
    inboxChat.insertAdjacentHTML("beforeend", pastConv.join(""));
  }
};

(async function () {
  "use strict";
  msgHistory.addEventListener("scroll", scrollMe);
  inboxChat.addEventListener("click", loadConversationMessagesHtml);
  submitButton.addEventListener("click", dispatchMessage);
  const retConv = await getMostRecentConversations();
  const newConv = await getNewConversationId();
  loadNewConversation(newConv);
  loadPastConversations(retConv);
})();

/*
'beforebegin': Before the element itself.
'afterbegin': Just inside the element, before its first child.
'beforeend': Just inside the element, after its last child.
'afterend': After the element itself.*/
