const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const url = "mongodb://localhost:27017/chattestapp";

mongoose.pluralize(null);

const connectDatabase = async () => {
  try {
    await mongoose.connect(url);
    console.log("database conected");
  } catch (error) {
    console.log(error);
  }
};

connectDatabase();

const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "Person" },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: "Person" }],
});

const Story = mongoose.model("Story", storySchema);
const Person = mongoose.model("Person", personSchema);

const conversationSchema = Schema(
  {
    participants: [String],
    createTime: { type: Date, default: Date.now },
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

const messsageSchema = Schema({
  senderName: String,
  chatContent: String,
  timeCreated: { type: Date, default: Date.now },
  conversationId: { type: Schema.Types.ObjectId, ref: "Conversation" },
});

conversationSchema.virtual("messages", {
  ref: "Message",
  localField: "_id",
  foreignField: "conversationId",
});

const Conversation = mongoose.model("Conversation", conversationSchema);
const Message = mongoose.model("Message", messsageSchema);

const loadTestData = async () => {
  const resultConv = await Conversation.create({
    participants: ["Balaji Visvanathan", "Server"],
  });

  const resultMsg = await Message.create({
    senderName: "Server",
    chatContent: "howdy",
    conversationId: resultConv._id,
  });
  const vts = await Conversation.findOne({ _id: resultConv._id }).populate({
    path: "messages",
  });
  console.log("virtuals Test");
  console.log(vts);
};

loadTestData();
