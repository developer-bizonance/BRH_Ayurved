const express = require('express');
const router = express.Router();
const notices = require('../data/notices.json');

// GET all notices
router.get('/', (req, res) => {
  res.json({ success: true, data: notices });
});

module.exports = router;


