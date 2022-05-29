const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/ErrorMiddleware.js");
const connectDB = require("./config/db.js");

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", require("./routes/ProductRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
