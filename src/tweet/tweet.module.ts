import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller.js';
import { TweetService } from './tweet.service.js';
import { UsersModule } from '../users/users.module.js';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports:[UsersModule]
})
export class TweetModule {}
