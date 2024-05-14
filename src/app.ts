import cors from "cors";
import express, { Request, Response } from "express";
import HttpErrorPlugin, { HttpError } from "http-errors";
import morgan from "morgan";
const bodyParser = require('body-parser')


import { routes } from "./routes";

const app = express();
app.use(morgan("short"));
app.use(bodyParser.json() );

// Enable CORS
const corsOptions = {
  origin: 'https://seahorse-app-466t4.ondigitalocean.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// Favicon Handler
app.get("/favicon.ico", (_, res) => res.status(204).end());

// Routes
app.use(routes);

// No Route Handler
app.use((_, __, next) => next(HttpErrorPlugin(404)));

// Error Handler
app.use((err: HttpError, req: Request, res: Response) => {
  if (!err.status || err.status === 500) {
    console.error(err);
  }

  if (!res.headersSent) {
    res.status(err.status || 500).json({
      status: err.status,
      error: {
        code: err.code,
        message: err.message,
      },
    });
  }
});

export { app };
