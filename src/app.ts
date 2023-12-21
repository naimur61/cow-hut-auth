import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import httpStatus from "http-status";
// import globalErrorHandler from "./app/middleware/globalErrorHandler";

const app: Application = express();

// Cors middleware
app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", router);

// app.use(globalErrorHandler);

// Api route error handler
app.use((req: Request, res: Response, next: NextFunction) => {
	res.status(httpStatus.NOT_FOUND).json({
		success: false,
		message: "Not Found!",
		errorMessage: {
			path: req.path,
			message: "Api Not Found!",
		},
	});
});

export default app;
