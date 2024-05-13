import config from "config";

import { app } from "./app";
import type { ApiConfig } from "./utils/interfaces";

const { port } = config.get<ApiConfig>("api");

export const server = app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
  console.log(`Usage: Open http://localhost:${port} in your browser.`);
});
