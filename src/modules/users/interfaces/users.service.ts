import { UserEntity } from "@/entities/users";
import { ObjectId } from "@mikro-orm/mongodb";
import { userCreateDto } from "../dto/user-create.dto";

export interface UsersService {
  show(id: ObjectId): Promise<UserEntity>
  index(): Promise<UserEntity[]>
  create(payload: userCreateDto): Promise<UserEntity>
}

