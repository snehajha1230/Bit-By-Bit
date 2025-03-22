const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth'); // Middleware for authentication
const {
    getChats,
    createChat,
    getChatById,
    sendMessage,
    deleteChat
} = require('../controllers/chatController');

// Ensure all controller functions exist before using them in routes
if (!getChats || !createChat || !getChatById || !sendMessage || !deleteChat) {
    throw new Error("One or more controller functions are not defined.");
}

// ✅ Get all chats for the logged-in user
router.get('/',getChats);

// ✅ Get a single chat by ID
router.get('/:id',getChatById);

// ✅ Create a new chat
router.post('/', createChat);

// ✅ Send a message in an existing chat
router.post('/:id/messages', sendMessage);

// ✅ Delete a chat by ID
router.delete('/:id', deleteChat);

module.exports = router;



