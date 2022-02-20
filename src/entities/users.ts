import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from ".";

@Entity()
export class UserEntity extends BaseEntity{

  @Property()
  name: string;

  @Property()
  email: string;

  @Property()
  age?: number;
}
