const express = require('express');
const cors = require('cors');

const noticesRouter = require('./routes/notices');
const staffRouter = require('./routes/staff');
const admissionsRouter = require('./routes/admissions');
const resultsRouter = require('./routes/results');
const galleryRouter = require('./routes/gallery');
const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'B.R. Harne API running' });
});

// Routes
app.use('/api/notices', noticesRouter);
app.use('/api/staff', staffRouter);
app.use('/api/admissions', admissionsRouter);
app.use('/api/results', resultsRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`🚀 B.R. Harne API Server running on http://localhost:${PORT}`);
});
