// Importación de paquetes
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");
const cors = require("cors");

// Importación de rutas
const courseRoutes = require("./routes/courseRoutes");
const instructorRoutes = require("./routes/instructorRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const paymentsRoutes = require("./routes/paymentsRoutes");

// Conectar a la base de datos
connectDB();

// Inicialización de la app
const app = express();

// Configuración de CORS
app.use(cors());

// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // Logging solo en desarrollo
}

app.use(express.json()); // Para el parseo de JSON en las solicitudes

// Rutas
app.use("/api/courses", courseRoutes);
app.use("/api/instructors", instructorRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/payments", paymentsRoutes);

// Página de inicio por defecto
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Middleware para manejar errores
app.use(errorHandler);

module.exports = app; // Exportamos la configuración de la app
