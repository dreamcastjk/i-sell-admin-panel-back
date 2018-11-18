"use strict";

const express = require('express');
const router = express.Router();

const LotTypeController = require('../controller/LotTypeController');

router.get('/lotType' , LotTypeController.LotTypeList );

module.exports = router;
