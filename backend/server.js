const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const data = require("./feed/sample.json");

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
const seriesRouter = require("./routes/series");
const moviesRouter = require("./routes/movies");

app.use("/series", seriesRouter);
app.use("/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
