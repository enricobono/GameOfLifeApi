import config from "config";

import { app } from "./app";
import type { ApiConfig } from "./utils/interfaces";

const { port } = config.get<ApiConfig>("api");

export const server = app.listen(port, () => {
  console.log(`API listening on host:${port}`);
  console.log(`Usage: Open host:${port} in your browser.`);
});
