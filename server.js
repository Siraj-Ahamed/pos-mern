const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { bgCyan } = require("colors");
const connectDb = require("./config/config.js");
const getItemRoutes = require("./routes/itemRoutes.js");
require("colors");
// dotenv config
dotenv.config();

// db config
connectDb();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// routes
app.use("/api/items", getItemRoutes);

// app.get("/", (req, res) => {
//     res.send("<h1>POS BACKEND</h1>");
// });

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`.bgCyan.white);
});
