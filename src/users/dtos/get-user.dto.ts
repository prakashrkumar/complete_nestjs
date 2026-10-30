import { Transform } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";

export class GetUserDto{
    @IsOptional()
    @IsBoolean()
    @Transform(({ value }) => {
        if (value === 'true') return true;
        if (value === 'false') return false;
        return value;
    })
    isMarried?: boolean
}