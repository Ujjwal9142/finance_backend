const express = require("express");
const kpiController = require("../controllers/kpi");

const router = express.Router();

router.get("/", kpiController.fetchKpiInfo);

module.exports = router;
