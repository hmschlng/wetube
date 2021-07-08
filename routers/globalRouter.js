import express from "express";
import { Trending } from "../controllers/videoController";
import { Join, Login, Search } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", Trending);
globalRouter.get("/login", Login);
globalRouter.get("/Join", Join);
globalRouter.get("/Search", Search);

export default globalRouter;
