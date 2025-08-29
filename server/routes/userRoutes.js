import express from "express";
import { protectRoute } from "../middleware/auth.js";
import {
  checkAuth,
  login,
  signUp,
  updateProfile,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", login);
userRouter.put("/update-profile", protectRoute, updateProfile);
userRouter.get("/check", protectRoute, checkAuth);

export default userRouter;
