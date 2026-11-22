
const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

// CREATE - Add a new movie
router.post("/", async (req, res) => {
    try {
        const { title, category, year } = req.body;

        const movie = await Movie.create({
            title,
            category,
            year
        });

        res.status(201).json({
            success: true,
            message: "Movie added successfully",
            data: movie
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// READ - Get all movies
router.get("/", async (req, res) => {
    try {
        const movies = await Movie.find();

        res.status(200).json({
            success: true,
            count: movies.length,
            data: movies
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// READ - Get movie by ID
router.get("/:id", async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found"
            });
        }

        res.status(200).json({
            success: true,
            data: movie
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// UPDATE - Update movie by ID
router.put("/:id", async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Movie updated successfully",
            data: movie
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// DELETE - Delete movie by ID
router.delete("/:id", async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);

        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Movie deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;
