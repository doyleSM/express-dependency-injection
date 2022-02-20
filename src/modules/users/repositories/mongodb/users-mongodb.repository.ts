
import { UserEntity } from "@/modules/users";
import { EntityRepository, ObjectId } from "@mikro-orm/mongodb";
import { inject, injectable } from "tsyringe";
import { userCreateDto } from "../../dto/user-create.dto";

@injectable()
export class UsersMongodbRepoImpl {
  constructor(
    @inject("UserModel")
    public readonly userModel: EntityRepository<UserEntity>
  ) {}

  async show(id: ObjectId): Promise<UserEntity | undefined> {
    return this.userModel.findOne({ _id: id })
  }

  async index(): Promise<UserEntity[]> {
    return this.userModel.findAll()
  }

  async create(payload: userCreateDto): Promise<UserEntity>{
    const user = this.userModel.create(payload)
    await this.userModel.persistAndFlush(user)
    return user
  }
}
