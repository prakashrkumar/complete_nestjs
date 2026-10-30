import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class TweetService {
    constructor(private readonly userSevice:UsersService){}
    tweets:{text:String,date:Date,userId:Number}[]=[
        {text:'some tweet',date:new Date('2021-03-23'),userId:1},
        {text:'some other tweet',date:new Date('2025-08-26'),userId:1},
        {text:'some other 2tweet',date:new Date('2026-06-09'),userId:2}
    ]


    getTweet(userId:Number){
        const user=this.userSevice.getUserById(userId);
        const tweets= this.tweets.filter(t=>t.userId===userId)
        const response=tweets.map(t=>{
            return {text:t.text,date:t.date,name:user?.name}
        })


        return response;
           
    }
}
