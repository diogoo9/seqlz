import { Router } from "express";
import User from "./app/models/User";

import userController from "./app/controllers/UserController";
import UserController from "./app/controllers/UserController";

const routes = new  Router();

routes.post('/users',userController.store);
routes.put('/users/:id',UserController.update);


export default routes;