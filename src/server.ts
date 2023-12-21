import config from "./config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(cors());

async function bootstrap() {
	await mongoose.connect(config.database_url as string);
	console.log("Database connected successful!");

	app.listen(() => {
		console.log(`Example app listening on port ${config.port}`);
	});
}

bootstrap();

app.get("/", (req, res) => {
	res.send("Hello World!");
});
