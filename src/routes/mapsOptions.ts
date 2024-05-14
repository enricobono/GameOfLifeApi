import type {NextFunction, Request, Response} from "express";
import CreateMapRequest from "../types/CreateMapRequest";
import {createMap} from "../utils/createMap";

export async function mapsOptions(req: CreateMapRequest, res: Response, next: NextFunction): Promise<void> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    next()
}
