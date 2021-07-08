import express from "express";
import { Edit, Delete } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", Edit);
userRouter.get("/delete", Delete);

export default userRouter;
