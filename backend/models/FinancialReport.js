// masjid-backend/models/FinancialReport.js
const mongoose = require('mongoose');

const financialReportSchema = new mongoose.Schema({
  tanggal: { type: Date, required: true },
  keterangan: { type: String, required: true },
  pemasukan: { type: Number, required: true },
  pengeluaran: { type: Number, required: true }
});

const FinancialReport = mongoose.model('FinancialReport', financialReportSchema);

module.exports = FinancialReport;
