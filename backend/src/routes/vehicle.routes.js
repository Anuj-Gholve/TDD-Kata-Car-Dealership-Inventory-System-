const express = require("express");
const verifyToken = require("../middlewares/auth.middleware");
const vehicleController = require("../controllers/vehicle.controller");

const router = express.Router();

// Protected Vehicle Routes
router.get("/search", verifyToken, vehicleController.searchVehicles);
router.get("/", verifyToken, vehicleController.getAllVehicles);
router.post("/", verifyToken, vehicleController.createVehicle);

router.post("/:id/purchase", verifyToken, vehicleController.purchaseVehicle);
router.post("/:id/restock", verifyToken, vehicleController.restockVehicle);

router.put("/:id", verifyToken, vehicleController.updateVehicle);
router.delete("/:id", verifyToken, vehicleController.deleteVehicle);

module.exports = router;