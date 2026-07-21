const express = require('express');
const router = express.Router();

// POST /api/contact — receive and log contact form submissions
router.post('/', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  // Log submission (replace with DB insert when PostgreSQL is connected)
  console.log('📧 New Contact Submission:', { name, email, phone, subject, message, timestamp: new Date().toISOString() });

  res.json({ success: true, message: 'Thank you for contacting us. We will get back to you shortly.' });
});

module.exports = router;
