import type {NextFunction, Request, Response} from "express";
import CreateMapRequest from "../types/CreateMapRequest";
import {createMap} from "../utils/createMap";

export async function maps(req: CreateMapRequest, res: Response, next: NextFunction): Promise<void> {
    const cells = createMap(req.body.rows, req.body.cols, req.body.border)

    res.status(200).json(cells);
}
