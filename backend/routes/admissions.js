const express = require('express');
const router = express.Router();
const students = require('../data/students.json');

// GET student admission list
router.get('/students', (req, res) => {
  const { year } = req.query;
  let data = students;
  if (year) data = students.filter(s => s.year === year);
  res.json({ success: true, data });
});

module.exports = router;
