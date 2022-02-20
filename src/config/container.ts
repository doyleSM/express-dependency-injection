import { container } from 'tsyringe';
import {
  UsersMongodbRepo, UsersMongodbRepoImpl, UsersService, UsersServiceImpl
} from '@/modules/users';
import DatabaseProvider from '@/modules/database/mikro-orm-provider';
import {UserEntity} from '@/entities'

export const setupContainer = async () => {

  const db = new DatabaseProvider()
  await db.connect()

  container.registerInstance(
    'UserModel',
    db.getEntityManager().getRepository(UserEntity),
  );

  container.registerSingleton<UsersService>(
    'UsersService',
    UsersServiceImpl,
  );

  container.registerSingleton<UsersMongodbRepo>(
    'UsersMongodbRepo',
    UsersMongodbRepoImpl,
  );

}
