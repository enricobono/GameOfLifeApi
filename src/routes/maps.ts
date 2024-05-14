import type {NextFunction, Request, Response} from "express";
import CreateMapRequest from "../types/CreateMapRequest";
import {createMap} from "../utils/createMap";

export async function maps(req: CreateMapRequest, res: Response, next: NextFunction): Promise<void> {
    // Open CORS for demo purpose on DigitalOcean App Platform
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    const cells = createMap(req.body.rows, req.body.cols, req.body.border)

    res.status(200).json(cells);
}
