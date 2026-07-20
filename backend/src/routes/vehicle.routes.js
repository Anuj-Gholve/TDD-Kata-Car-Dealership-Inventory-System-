const express = require("express");
const vehicleController = require("../controllers/vehicle.controller");

const router = express.Router();

router.post("/", vehicleController.createVehicle);

module.exports = router;