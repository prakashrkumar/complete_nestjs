import { Module } from '@nestjs/common';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module.js';
import { TweetModule } from './tweet/tweet.module.js';





@Module({
  imports: [
    
   ConfigModule.forRoot({
    isGlobal:true,
   }),
    
   UsersModule,
   TweetModule
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
