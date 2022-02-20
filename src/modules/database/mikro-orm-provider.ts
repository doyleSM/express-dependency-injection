import config from './database.options';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { IDatabaseProvider } from './database-provider.interface';
import { MikroORM } from '@mikro-orm/core';
import { singleton } from 'tsyringe';
import { MongoDriver, MongoEntityManager } from '@mikro-orm/mongodb';

@singleton()
export default class DatabaseProvider implements IDatabaseProvider {
  private connection: MikroORM<MongoDriver>;

  public async connect(): Promise<void> {
    this.connection = await MikroORM.init<MongoDriver>(
      Object.assign({ metadataProvider: TsMorphMetadataProvider }, ...config),
    );
  }

  public close(): void {
    if (!this.connection) return;
    this.connection.close();
  }

  public getEntityManager = (): MongoEntityManager<MongoDriver> => {
    return this.connection.em.fork();
  };


}
