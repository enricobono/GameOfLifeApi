import express from "express";
import { maps } from "./maps";
import { mapsOptions } from "./mapsOptions";
import { usage } from "./usage";

const router = express.Router();

router.get("/", usage);
router.post("/maps", maps);
router.options("/maps", mapsOptions)

export const routes = router;
