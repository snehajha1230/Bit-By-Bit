const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/auth'); // Ensure authentication

// Add feedback (Requires authentication)
router.post('/add', authMiddleware, feedbackController.addFeedback);

// Get all feedbacks (Admin access)
router.get('/', authMiddleware, feedbackController.getAllFeedbacks);

// Get feedbacks by user ID
router.get('/:userId', authMiddleware, feedbackController.getFeedbackByUser);

// Delete a feedback (Admin access)
router.delete('/:id', authMiddleware, feedbackController.deleteFeedback);

module.exports = router;



