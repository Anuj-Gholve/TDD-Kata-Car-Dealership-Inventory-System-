const express = require("express");
const vehicleController = require("../controllers/vehicle.controller");

const router = express.Router();
router.get("/", vehicleController.getAllVehicles);
router.post("/", vehicleController.createVehicle);

module.exports = router;