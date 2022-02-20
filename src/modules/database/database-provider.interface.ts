import { MongoDriver, MongoEntityManager } from "@mikro-orm/mongodb";

export interface IDatabaseProvider {
  connect(): Promise<void>;
  close(): void
  getEntityManager(): MongoEntityManager<MongoDriver>
}
