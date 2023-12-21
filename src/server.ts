import app from "./app";
import config from "./config";
import mongoose from "mongoose";
import { logger } from "./shared/logger";

async function bootstrap() {
	try {
		await mongoose.connect(config.database_url as string);
		logger.info("Database connected successful!");

		app.listen(config.port, () => {
			console.log(`Example app listening on port ${config.port}`);
		});
	} catch (error) {
		console.log(error);
	}
}

bootstrap();
