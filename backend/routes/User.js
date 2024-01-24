import express from "express";
import { addProject, addTimeline, addYoutube, contact, deleteProject, deleteTimeline, deleteYoutube, getUser, login, logout, myProfile, updateUser } from "../controller/User.js";
import { isAuthenticated } from "../middlewares/auth.js";


export const userRouter = express.Router();


userRouter.route("/logout").get(logout);
userRouter.route("/login").post(login);
userRouter.route("/user").get(getUser);
userRouter.route("/me").get(isAuthenticated,myProfile);
userRouter.route("/admin/update").put(isAuthenticated, updateUser);
userRouter.route("/contact").post(contact);

userRouter.route("/admin/timeline/add").post(isAuthenticated,addTimeline);
userRouter.route("/admin/youtube/add").post(isAuthenticated,addYoutube);
userRouter.route("/admin/project/add").post(isAuthenticated,addProject);

userRouter.route("/admin/timeline/:id").delete(isAuthenticated,deleteTimeline);
userRouter.route("/admin/youtube/:id").delete(isAuthenticated,deleteYoutube);
userRouter.route("/admin/project/:id").delete(isAuthenticated,deleteProject);








