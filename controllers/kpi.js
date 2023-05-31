const KPI = require("../models/kpi");

exports.fetchKpiInfo = async (req, res, next) => {
  try {
    const response = await KPI.find();
    res.status(200).json({ kpis: response });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 404;
    }
    next(err);
  }
};
