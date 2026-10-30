import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service.js';

@Controller('tweet')
export class TweetController {
    constructor(private readonly tweetService:TweetService){}

   @Get("{/:userid}")
   public GetTweet(@Param('userid',ParseIntPipe) userid:number){
    return this.tweetService.getTweet(userid)
   
   }
}
