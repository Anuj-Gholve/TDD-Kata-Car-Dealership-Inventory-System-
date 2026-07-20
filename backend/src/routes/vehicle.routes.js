const express = require("express");
const verifyToken = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/admin.middleware");
const vehicleController = require("../controllers/vehicle.controller");

const router = express.Router();

// Protected routes
router.get("/search", verifyToken, vehicleController.searchVehicles);
router.get("/", verifyToken, vehicleController.getAllVehicles);

router.post("/", verifyToken, vehicleController.createVehicle);

router.post("/:id/purchase", verifyToken, vehicleController.purchaseVehicle);

// Admin only
router.post(
    "/:id/restock",
    verifyToken,
    isAdmin,
    vehicleController.restockVehicle
);

router.put("/:id", verifyToken, vehicleController.updateVehicle);

// Admin only
router.delete(
    "/:id",
    verifyToken,
    isAdmin,
    vehicleController.deleteVehicle
);

module.exports = router;