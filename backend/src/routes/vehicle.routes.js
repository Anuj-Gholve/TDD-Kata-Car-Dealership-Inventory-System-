const express = require("express");
const verifyToken = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/admin.middleware");
const vehicleController = require("../controllers/vehicle.controller");

const router = express.Router();

router.get("/search", verifyToken, vehicleController.searchVehicles);
router.get("/", verifyToken, vehicleController.getAllVehicles);

router.post("/", verifyToken, vehicleController.createVehicle);

router.post("/:id/purchase", verifyToken, vehicleController.purchaseVehicle);

router.post(
    "/:id/restock",
    verifyToken,
    isAdmin,
    vehicleController.restockVehicle
);

router.put("/:id", verifyToken, vehicleController.updateVehicle);

router.delete(
    "/:id",
    verifyToken,
    isAdmin,
    vehicleController.deleteVehicle
);

module.exports = router;