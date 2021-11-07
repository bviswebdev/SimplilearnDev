const { Message } = require("../Model/ChatModel");

const insertMessage = async (senderName, convid, msg, chatFlow) => {
  try {
    const resultMsg = await Message.create({
      senderName: senderName,
      chatContent: msg,
      chatFlow: chatFlow,
      conversationId: convid,
    });

    return resultMsg;
  } catch (err) {
    console.log(err);
  }
};

module.exports = insertMessage;
