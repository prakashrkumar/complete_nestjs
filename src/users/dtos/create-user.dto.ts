import { Optional } from "@nestjs/common";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, minLength } from "class-validator";

export class CreateUserDto{
    @IsNumber()
    id:number;
    @IsString({message:"please inter name is string formate"})
    @IsNotEmpty()
    @MinLength(3,{message:"please name enter more than 2 character"})
    name:string;
     @IsString()
     @Optional()
    gender?:string='Male';
      
     @IsEmail()
     @IsString()
    email:string;
   @IsBoolean()
    isMarried:boolean


}