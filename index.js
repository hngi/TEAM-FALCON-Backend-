require("express-async-errors");
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const port = process.env.PORT || 5555;
const fileRoutes = require("./routes/files");
const userRoutes = require("./routes/users");
const errorMiddleware = require("./middleware/error");
const initDB = require("./config/db");
const { authorize } = require("./middleware/auth");
const { updateConfig } = require("./controllers/users");
const CustomError = require("./utils/CustomError");

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "./uploads/")));


// Routes
app.use("/v1/files", authorize(), fileRoutes);
app.use("/v1/users", userRoutes);
app.get("/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.post("/v1/configure", authorize(), updateConfig);
app.get("/v1/documentation", (req, res) => {
  res.json(swaggerDocument);
});
app.get("/", (req, res) => {
  res.redirect("/v1/docs");
});


//Handle invalid api endpoints
app.get('*', function (req, res) {
  throw new CustomError("Route dosen't exist", 404);
});

// Handle server erros
app.use(errorMiddleware);

// Listen to port
app.listen(port, () => {
  console.log(`::: Server listening on port ${port}`);
  initDB();
});

app.on("error", (error) => {
  console.log("::> An error occurred in our server " + error);
});

module.exports = app;
