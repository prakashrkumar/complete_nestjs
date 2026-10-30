import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    users:{id:number,name:string,email:string,gender:string,isMarried:boolean}[]=[
   {id:1,name:"Prakash kumar",email:"prakashr17032000@gmail.com",gender:"Male",isMarried:false},
    {id:2,name:"Anupam",email:"anipam@gamil.com",gender:"female",isMarried:true},
    {id:3,name:"Anupam",email:"rk@gmail.com",gender:"female",isMarried:false},

   ]
   getAllUser(isMarried?: boolean){
    
      return    this.users.filter(user => user.isMarried === isMarried);

   }
   getUserById(id:Number){
      return this.users.find(x=>x.id==id);
   }
   createUser(@Body()user:any){

    
   }
}
