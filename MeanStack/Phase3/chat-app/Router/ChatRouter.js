const express = require("express");
const router = express.Router();
const chatController = require("../Controller/ChatController");

router.get("/getConversationId", chatController.retreiveConversationId);
router.get(
  "/getRecentConversations",
  chatController.retrieveRecentConversations
);
router.get(
  "/getConversationMessagesById/:id",
  chatController.retreiveConversationMessagesById
);

module.exports = router;
