import { UserEntity } from '@/entities';
import { UsersService, UsersMongodbRepo } from '@/modules/users';
import { ObjectId } from '@mikro-orm/mongodb';
import { inject, injectable } from "tsyringe";
import { userCreateDto } from './dto/user-create.dto';

@injectable()
export class UsersServiceImpl implements UsersService {
  constructor(
    @inject("UsersMongodbRepo") public readonly usersMongodbRepo?: UsersMongodbRepo
  ) {
    console.log("UsersServiceImpl")
  }

  async index(): Promise<any> {
    const users = await this.usersMongodbRepo.index()
    return users
  }

  async show(id: ObjectId): Promise<any> {
    const user = await this.usersMongodbRepo.show(id)
    return user
  }

  async create(payload: userCreateDto): Promise<UserEntity> {
    const user = await this.usersMongodbRepo.create(payload)
    return user
  }
}

