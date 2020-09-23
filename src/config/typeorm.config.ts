import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeOrmConfig: TypeOrmModuleOptions = {

    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'fadcrepin',
    password: 'jsldfdmp',
    database: 'hackaton',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false,

};