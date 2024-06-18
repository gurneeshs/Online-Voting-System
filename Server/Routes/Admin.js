const express = require('express');
const router = express.Router();
const {getDashboardData} = require("../Controller/Admin")
const {adminlogin} = require("../Controller/login")

router.get('/getDashboardData', getDashboardData);

router.post('/adminlogin',adminlogin)

module.exports = router;
