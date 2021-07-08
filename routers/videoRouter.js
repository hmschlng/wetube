import express from "express";
import { Watch, Edit, Delete } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", Watch);
videoRouter.get("/edit", Edit);
videoRouter.get("/delete", Delete);
videoRouter.get("/comments", handleComments);
videoRouter.get("/comments/delete", handleCommentsDelete);

export default videoRouter;
