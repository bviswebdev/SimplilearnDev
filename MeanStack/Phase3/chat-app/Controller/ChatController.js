const { Conversation, Message } = require("../Model/ChatModel");

const retreiveConversationId = async (req, res) => {
  let success = false;
  try {
    const resultConv = await Conversation.create({
      participants: ["Balaji Visvanathan", "Server"],
    });
    console.log(resultConv);
    if (resultConv) {
      const resultMsg = await Message.create({
        senderName: "Server",
        chatContent:
          "This is a test message from server how can i help you with your concerns",
        chatFlow: "outgoing",
        conversationId: resultConv._id,
      });
      if (resultMsg) {
        success = true;
      }
    }
    if (success) {
      res.status(200).json({ success: true, conversationId: resultConv._id });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Cannot retreive conversation id" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

const retrieveRecentConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find({})
      .sort({ createTime: -1 })
      .limit(10);
    if (conversations) {
      res.status(200).json({ success: true, conversations });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Cannot retreive conversations" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

const retreiveConversationMessagesById = async (req, res) => {
  const { id: convid } = req.params;

  try {
    const messages = await Conversation.findOne({ _id: convid }).populate({
      path: "messages",
    });
    if (messages) {
      res.status(200).json({ success: true, messages });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Cannot retreive messages" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};

module.exports = {
  retreiveConversationId,
  retrieveRecentConversations,
  retreiveConversationMessagesById,
};
