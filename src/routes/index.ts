import express from "express";
import { maps } from "./maps";
import { usage } from "./usage";

const router = express.Router();

router.get("/", usage);
router.post("/maps", maps);

export const routes = router;
