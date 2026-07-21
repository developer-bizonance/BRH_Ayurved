const express = require('express');
const router = express.Router();

// Sample gallery images referencing original site assets as placeholders
const galleryImages = [
  { id: 1, src: 'https://www.brharneayurved.in/uploads/gallery/s5_6887522893bda.jpg', alt: 'College Campus', category: 'campus' },
  { id: 2, src: 'https://www.brharneayurved.in/uploads/gallery/s4_6887521a21f4b.jpg', alt: 'College Activity', category: 'events' },
  { id: 3, src: 'https://www.brharneayurved.in/uploads/gallery/s3_6887520d7c678.jpg', alt: 'College Event', category: 'events' },
  { id: 4, src: 'https://www.brharneayurved.in/uploads/gallery/s2_688751fea85d4.png', alt: 'Campus View', category: 'campus' },
  { id: 5, src: 'https://www.brharneayurved.in/uploads/gallery/s1_688751f0272d4.png', alt: 'College Banner', category: 'events' }
];

router.get('/', (req, res) => {
  const { category } = req.query;
  let data = galleryImages;
  if (category && category !== 'all') {
    data = galleryImages.filter(img => img.category === category);
  }
  res.json({ success: true, data });
});

module.exports = router;
