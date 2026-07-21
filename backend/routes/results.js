const express = require('express');
const router = express.Router();
const internalResults = require('../data/internal_results.json');

// GET internal assessment results
router.get('/internal', (req, res) => {
  res.json({ success: true, data: internalResults });
});

// GET university results (stub - to be connected to DB)
router.get('/university', (req, res) => {
  res.json({ success: true, data: [], message: 'University results will be available when DB is connected.' });
});

module.exports = router;
