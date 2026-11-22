
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const movieRoutes = require("./routes/movieRoutes");

const app = express();

app.use(express.json());

// MongoDB connection
connectDB();

// Home route
app.get("/", (req, res) => {
    res.send("Mongoose Express CRUD API is running!");
});

// Movie routes
app.use("/api/movies", movieRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
