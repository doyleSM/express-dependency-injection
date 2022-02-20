import { UsersController } from '@/modules/users';
import usersRouter from '@/modules/users/user.routes';
import { Router, Express } from 'express'
import { container } from 'tsyringe';


export const setupRoutes = (app: Express): void => {
  const router = Router()
  router.use('/users', container.resolve(UsersController).routes());
  // router.use('/users', usersRouter);

  app.use('/api', router)
}


