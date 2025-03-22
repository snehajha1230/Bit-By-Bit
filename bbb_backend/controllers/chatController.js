const asyncHandler = require("express-async-handler");

// Dummy Database (Replace with actual DB logic)
const chats = [];

// @desc   Get all chats
// @route  GET /api/chats
// @access Public
const getChats = asyncHandler(async (req, res) => {
    res.status(200).json({ 
        success: true, 
        message: "Chats retrieved successfully", 
        chats 
    });
});

// @desc   Get a single chat by ID
// @route  GET /api/chats/:id
// @access Public
const getChatById = asyncHandler(async (req, res) => {
    const chatId = req.params.id.toString();
    const chat = chats.find((c) => c.id === chatId);

    if (!chat) {
        return res.status(404).json({ success: false, message: "Chat not found" });
    }

    res.status(200).json({ success: true, chat });
});

// @desc   Create a new chat
// @route  POST /api/chats
// @access Public
const createChat = asyncHandler(async (req, res) => {
    const { userId, message } = req.body;

    if (!userId || !message) {
        return res.status(400).json({ success: false, message: "User ID and message are required" });
    }

    const newChat = { id: Date.now().toString(), userId, message, messages: [] };
    chats.push(newChat);

    res.status(201).json({ 
        success: true, 
        message: "Chat created successfully", 
        chat: newChat 
    });
});

// @desc   Send a message in an existing chat
// @route  POST /api/chats/:id/messages
// @access Public
const sendMessage = asyncHandler(async (req, res) => {
    const { message } = req.body;
    const chatId = req.params.id.toString();
    const chat = chats.find((c) => c.id === chatId);

    if (!chat) {
        return res.status(404).json({ success: false, message: "Chat not found" });
    }

    if (!message) {
        return res.status(400).json({ success: false, message: "Message is required" });
    }

    const newMessage = { message, timestamp: new Date() };
    chat.messages.push(newMessage);

    res.status(200).json({ 
        success: true, 
        message: "Message sent successfully", 
        chat 
    });
});

// @desc   Delete a chat
// @route  DELETE /api/chats/:id
// @access Public
const deleteChat = asyncHandler(async (req, res) => {
    const chatId = req.params.id.toString();
    const index = chats.findIndex((c) => c.id === chatId);

    if (index === -1) {
        return res.status(404).json({ success: false, message: "Chat not found" });
    }

    chats.splice(index, 1);
    res.status(200).json({ success: true, message: "Chat deleted successfully" });
});

module.exports = { getChats, getChatById, createChat, sendMessage, deleteChat };



