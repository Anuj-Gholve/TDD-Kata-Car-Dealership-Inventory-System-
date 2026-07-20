const express = require("express");
const vehicleController = require("../controllers/vehicle.controller");

const router = express.Router();
router.delete("/:id", vehicleController.deleteVehicle);
router.put("/:id", vehicleController.updateVehicle);
router.get("/search", vehicleController.searchVehicles);
router.get("/", vehicleController.getAllVehicles);
router.post("/", vehicleController.createVehicle);

module.exports = router;