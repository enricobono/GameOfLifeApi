import type { Request, Response } from "express";

export function usage(req: Request, res: Response): void {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Game of Life API</title>
    </head>
    <body>
      <h1>Game of Life API</h1>
      <p>This Game of Life API is REST-ful and supports CORS, so it can also be used in web browsers.</p>
      <h2>Routes</h2>
      <h3>GET / (text/html)</h3>
      <p>Returns this HTML document with API routes and usage.</p>
      <h3>POST /maps (application/json)</h3>
      <p>Returns a JSON object with a new random map.</p>
      <p>Query parameters:</p>
      <ul>
        <li><code>rows</code>: number of rows for the new map</li>
        <li><code>cols</code>: number of columns for the new map</li>
        <li><code>border</code>: lines of cells along the border with no alive cells</li>
      </ul>
    </body>
    </html>
  `);
}
