import { BaseEntity, UserEntity } from "@/entities";
import { Options } from "@mikro-orm/core";
import { MongoHighlighter } from "@mikro-orm/mongo-highlighter";

export default [
  {
    type: process.env.DB_TYPE,
    dbName: process.env.DB_NAME,
    // host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 27018,
    entities: [BaseEntity, UserEntity],
    debug: process.env.enviroment == 'development' ? true : false,
    highlighter: new MongoHighlighter(),
    clientUrl: process.env.MONGO_URL,
  }
] as Options[];
