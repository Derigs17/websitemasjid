// masjid-backend/routes/financialReportRoutes.js
const express = require('express');
const FinancialReport = require('../models/FinancialReport');
const router = express.Router();

// Tambah Laporan Keuangan
router.post('/add', async (req, res) => {
  const { tanggal, keterangan, pemasukan, pengeluaran } = req.body;
  const newReport = new FinancialReport({ tanggal, keterangan, pemasukan, pengeluaran });
  await newReport.save();
  res.status(201).json({ message: 'Laporan Keuangan berhasil ditambahkan!' });
});

// Ambil Semua Laporan Keuangan
router.get('/', async (req, res) => {
  const reports = await FinancialReport.find();
  res.status(200).json(reports);
});

// Edit Laporan Keuangan
router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { tanggal, keterangan, pemasukan, pengeluaran } = req.body;
  const report = await FinancialReport.findByIdAndUpdate(id, { tanggal, keterangan, pemasukan, pengeluaran });
  res.status(200).json({ message: 'Laporan Keuangan berhasil diperbarui!' });
});

module.exports = router;
