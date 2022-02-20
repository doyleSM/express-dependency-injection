import { Request, Response, Router } from 'express';
import { UsersService } from '@/modules/users';
import { inject, injectable } from 'tsyringe';
import { ObjectId } from '@mikro-orm/mongodb';
import { userCreateDto } from './dto/user-create.dto';
import { UserEntity } from '@/entities';

@injectable()
export class UsersController {
  router: Router
  constructor(
    @inject("UsersService") public readonly usersService?: UsersService
  ) {
    this.router = Router()
    console.log("UsersController")
  }

  async index(): Promise<any> {
    const users = await this.usersService?.index();
    return users
  }

  async show(id: string): Promise<any> {
    const user = await this.usersService?.show(new ObjectId(id));
    return user
  }

  async create(payload: userCreateDto): Promise<UserEntity> {
    const user = await this.usersService.create(payload);
    return user
  }

  routes() {
    this.router.get("/", async (req: Request, res: Response) => res.send(await this.index()));
    this.router.get("/:id", async (req: Request, res: Response) => {
      const { id } = req.params;
      res.send(await this.show(id));
    });
    this.router.post("/", async (req: Request, res: Response) => {
      res.send(await this.create(req.body));
    });
    return this.router;
  }
}
