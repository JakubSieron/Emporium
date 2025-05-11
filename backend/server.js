const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

console.log('📦 Loading productRoutes...');
const productRoutes = require('./routes/products');
console.log('🔐 Loading authRoutes...');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

// ✅ CSP logger (optional)

app.use((req, res, next) => {
  const originalSetHeader = res.setHeader;
  res.setHeader = function (name, value) {
    if (name.toLowerCase() === 'content-security-policy') {
      console.warn(`🚨 CSP SET by route: ${req.method} ${req.originalUrl}`);
      console.warn(`🚨 Value: ${value}`);
    }
    return originalSetHeader.call(this, name, value);
  };
  console.log('➡️  Adding fallback route');
  next();
});

// ✅ Set permissive CSP
console.log('➡️  Setting CSP header');
app.use((req, res, next) => {
  res.setHeader(
  'Content-Security-Policy',
  "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: http://localhost:5000; connect-src 'self' http://localhost:5000;"
);

  next();
});
console.log('➡️  Setting up CORS');
app.use(cors());
console.log('➡️  Parsing JSON');
app.use(express.json());

// ✅ Favicon route
app.get('/favicon.ico', (req, res) => {
   console.log('🧢 Favicon request intercepted');
  res.status(204).end();
});

// ✅ Routes
console.log('➡️  Mounting product routes');
app.use('/api/products', productRoutes);
console.log('➡️  Mounting auth routes');
app.use('/api', authRoutes);

// ✅ Correct fallback for unknown routes
console.log('➡️  Adding fallback route');
app.use((req, res) => {
  console.warn(`❌ 404 for: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: 'Not found' });
});


// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch(err => console.error('❌ MongoDB connection error:', err));
