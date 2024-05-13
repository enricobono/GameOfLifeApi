import {Request} from "express";
import CreateMapQuery from "./CreateMapQuery";

type CreateMapRequest = Request<null, null, CreateMapQuery, null>;

export default CreateMapRequest;