const express = require('express')
const router = express.Router()
const AbsensiModel = require('../models/absensi')

// routing endpoint users
router.get('/', async(req, res) => {
    const absensi = await AbsensiModel.findAll()
    res.status(200).json({
        data: absensi,
        metadata: "test absensi endpoint"
    })
})

router.post('/checkin', async(req, res) => {
    const { nip } = req.body
    const absensi = await AbsensiModel.create({
        status_nip: nip, status: 'in'
    })
    res.status(200).json({
        data: absensi,
        metadata: "Check in Berhasil"
    })
})

router.post('/checkout', async(req, res) => {
    const { nip } = req.body
    const absensi = await AbsensiModel.create({
        status_nip: nip, status: 'out'
    })
    res.status(200).json({
        data: absensi,
        metadata: "Checkout Berhasil"
    })
})

module.exports = router