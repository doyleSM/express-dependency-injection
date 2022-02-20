import { Router } from "express";
import { container } from "tsyringe";
import { UsersController } from "@/modules/users";

const usersRouter = Router()
const usersController = container.resolve<UsersController>("UsersController")

usersRouter.use('/', usersController.index);
usersRouter.use('/:id', usersController.show);

export default usersRouter
