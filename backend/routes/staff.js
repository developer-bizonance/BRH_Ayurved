const express = require('express');
const router = express.Router();
const teachingStaff = require('../data/teaching_staff.json');
const nonTeachingStaff = require('../data/non_teaching_staff.json');
const hospitalStaff = require('../data/hospital_staff.json');

// GET teaching staff
router.get('/teaching', (req, res) => {
  res.json({ success: true, data: teachingStaff });
});

// GET non-teaching staff
router.get('/non-teaching', (req, res) => {
  res.json({ success: true, data: nonTeachingStaff });
});

// GET hospital staff
router.get('/hospital', (req, res) => {
  res.json({ success: true, data: hospitalStaff });
});

module.exports = router;
