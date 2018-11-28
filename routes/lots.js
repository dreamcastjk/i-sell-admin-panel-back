"use strict";

const express = require('express');
const router = express.Router();

const LotController = require('../controller/LotController');
const AccessController = require( "../controller/AccessController");


router.post('/lot' ,  LotController.AddLot );
router.get('/singleLot' , LotController.GetLotById );
router.get('/lotList' , LotController.GetLotListActive );
router.delete('/deleteLot/:id' , LotController.DeleteLot );
router.put('/updateLot/:id' , LotController.UpdateLot );

//ADMIN PANEL
router.get('/lotListPanel' , LotController.GetLotListInProcess );

module.exports = router;
