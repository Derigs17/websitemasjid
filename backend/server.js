// masjid-backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const financialReportRoutes = require('./routes/financialReportRoutes'); // Rute API untuk laporan keuangan

const app = express();
app.use(cors());  // Mengizinkan komunikasi antara frontend dan backend
app.use(bodyParser.json());  // Untuk parsing data JSON dari request

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/masjid', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected!'))
.catch((err) => console.log(err));

// Gunakan route API untuk laporan keuangan
app.use('/api/financial-reports', financialReportRoutes);

// Menjalankan server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
