import express from "express";
import cors from "cors";

const app = express();

// Cors middleware
app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hello Cow!");
});

export default app;
