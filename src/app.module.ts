import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { SeedModule } from './seed/seed.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    MongooseModule.forRoot('mongodb://localhost:27017/Rick_Morty_DB'),
    CharacterModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
