import { signUp, login, logout } from '../controller/user-controller.js';
import { checkToken } from '../middlewares/user.js';
import express from 'express';

const user_router = express.Router();

user_router.post("/signUp", signUp);
user_router.post("/login", login);
user_router.post("/logout", checkToken, logout);

export default user_router;