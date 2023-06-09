const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const KPI = require("./models/kpi");
const data = require("./data/data");
const kpiRoutes = require("./routes/kpi");

dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

/* Routes Setup*/
app.use("/api/v1/kpi", kpiRoutes);

/* Error Handling Middleware */

app.use((error, req, res, next) => {
  console.log(error, "error");
  const message =
    error.message ||
    "Something went wrong with the server, please try again later.";
  const status = error.statusCode || 500;
  res.status(status).json({ message: message });
});

/* Mongoose Setup */
const PORT = process.env.PORT || 3001;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log(`MongoDB connected`);
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
    //  Add data one time only or as needed to seed data
    // await mongoose.connection.db.dropDatabase();
    // await KPI.insertMany(data.kpis);
  })
  .catch((err) => {
    console.log(err, "error");
    process.exit();
  });
