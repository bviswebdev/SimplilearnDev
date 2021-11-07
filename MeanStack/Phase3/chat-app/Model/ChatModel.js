const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);

const conversationSchema = Schema(
  {
    participants: [String],
    createTime: { type: Date, default: Date.now },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const messsageSchema = Schema({
  senderName: String,
  chatContent: String,
  chatFlow: String,
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

module.exports = { Conversation, Message };
