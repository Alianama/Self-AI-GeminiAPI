const express = require("express");
const router = express.Router();

const { APIHandler } = require("../routes/APIHandler");

router.post("/ai", APIHandler);

module.exports = router;
