const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({
        message: "Node.js Backend is running",
        status: "success"
    });
});

app.get("/api/students", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Rahul",
            course: "DevOps"
        },
        {
            id: 2,
            name: "Priya",
            course: "Cloud Computing"
        },
        {
            id: 3,
            name: "Amit",
            course: "Cyber Security"
        }
    ]);
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
