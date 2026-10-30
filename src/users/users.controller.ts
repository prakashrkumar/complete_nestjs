import { Controller, Get, Param, ParseIntPipe, Query, DefaultValuePipe, Body, Post, Patch } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { GetUserDto } from './dtos/get-user.dto.js';
import { UpdateUserDto } from './dtos/update-user.dto.js';

@Controller('users')
export class UsersController {
   constructor(private readonly userService:UsersService){}
   @Get('{/:isMarried}')
getAllUsers(
  @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  @Param() params: GetUserDto,
) {
  console.log(limit, page, params.isMarried);

  return this.userService.getAllUser(params.isMarried);
}
  // @Get(':id/:name{/:isMarried}')
  @Get(':id')
  getUser(@Param('id',ParseIntPipe) id: any) {

   console.log(typeof(id))
    

    // return this.userService.getUserById(Number(id));
    return this.userService.getUserById(id);
 

  }
 @Post()
  createUser(@Body() user:CreateUserDto){
    console.log(user)
    this.userService.createUser(user);
    return user;
  }
  @Patch()
  updateUser(@Body() user:UpdateUserDto){
       console.log(user)
       return "user update successfully"
  }

}
