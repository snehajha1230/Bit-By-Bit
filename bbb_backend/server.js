require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const loginRoutes = require("./routes/login");
const { Server } = require("socket.io");

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json()); // Parses JSON requests
app.use("/api/login", loginRoutes);

// ✅ Connect to MongoDB Atlas
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1); // Exit process with failure
    }
};
connectDB();

// ✅ Import Routes
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const jobRoutes = require("./routes/job");
const chatRoutes = require("./routes/chat");
const paymentRoutes = require("./routes/payment");
const feedbackRoutes = require("./routes/feedback");
const signupRoutes = require("./routes/signup"); // ✅ New Signup Route

// ✅ Define Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/api/signup", signupRoutes); // ✅ New Signup Route

// ✅ Root Route
app.get("/", (req, res) => {
    res.send("Welcome to the Backend API!");
});

// ✅ Setup HTTP Server for WebSocket (Socket.IO)
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Track connected users
const users = {};

io.on("connection", (socket) => {
    console.log(`✅ User Connected: ${socket.id}`);

    // When a user joins, store their userId and socketId
    socket.on("join", (userId) => {
        users[userId] = socket.id;
        console.log(`📌 User ${userId} is online with socket ID: ${socket.id}`);
    });

    // Handle sending messages
    socket.on("sendMessage", ({ sender, receiver, message }) => {
        console.log(`📨 Message from ${sender} to ${receiver}: ${message}`);

        // Check if receiver is online
        const receiverSocketId = users[receiver];
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("receiveMessage", { sender, message });
            console.log(`✅ Message delivered to ${receiver}`);
        } else {
            console.log(`⚠️ User ${receiver} is offline. Store message in DB.`);
            // Here you can store the message in the database for later retrieval
        }
    });

    // Handle user disconnection
    socket.on("disconnect", () => {
        const userId = Object.keys(users).find((key) => users[key] === socket.id);
        if (userId) {
            delete users[userId]; // Remove user from the tracking object
            console.log(`❌ User ${userId} disconnected`);
        }
    });
});

// ✅ Start Server
server.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

