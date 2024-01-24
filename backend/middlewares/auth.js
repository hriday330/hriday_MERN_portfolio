import { User } from "../model/User.js";
import jwt from "jsonwebtoken";
let jwt_secret = process.env.JWT_SECRET || "sdafjhdslfhsjhgkjshgkjsdhagkjhskgjhsjhkj";

export const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Login to Access this resource",
            });
        }
        const decoded = jwt.verify(token, jwt_secret);
        const user = await User.findById(decoded._id);
        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};
