const Feedback = require('../models/Feedback');

// @desc: Add new feedback
exports.addFeedback = async (req, res) => {
    try {
        const { userId, freelancerId, feedback } = req.body;

        if (!userId || !feedback) {
            return res.status(400).json({ error: "User ID and feedback are required." });
        }

        const newFeedback = new Feedback({ userId, freelancerId, feedback });
        await newFeedback.save();

        res.status(201).json({ message: "Feedback submitted successfully!", newFeedback });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// @desc: Get all feedbacks
exports.getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find().populate('userId', 'name').populate('freelancerId', 'name');
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// @desc: Get feedback by User ID
exports.getFeedbackByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const feedbacks = await Feedback.find({ userId }).populate('freelancerId', 'name');

        if (!feedbacks.length) {
            return res.status(404).json({ message: "No feedback found for this user." });
        }

        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// @desc: Delete a feedback
exports.deleteFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const feedback = await Feedback.findByIdAndDelete(id);

        if (!feedback) {
            return res.status(404).json({ message: "Feedback not found." });
        }

        res.status(200).json({ message: "Feedback deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
