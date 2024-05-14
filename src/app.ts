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
// const corsOptions = {
//   origin: '*'
// }
// app.use(cors(corsOptions));
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Access-Control-Expose-Headers', '*');
//   next();
// });

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
