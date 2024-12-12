const express = require("express");
const router = express.Router();
const { createPreference } = require("../payments/mercadopago");

router.post("/create_preference", createPreference);

module.exports = router;
