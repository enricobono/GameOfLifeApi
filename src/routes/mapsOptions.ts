import type {NextFunction,  Response} from "express";
import CreateMapRequest from "../types/CreateMapRequest";

export async function mapsOptions(req: CreateMapRequest, res: Response, next: NextFunction): Promise<void> {
    // Open CORS for demo purpose on DigitalOcean App Platform
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    next()
}
