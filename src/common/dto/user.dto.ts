import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UserDTO {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  @Length(4, 20)
  fullname: string;

  @IsString()
  @IsNotEmpty()
  @Length(4, 20)
  login: string;

  @IsString()
  @IsNotEmpty()
  @Length(4, 20)
  password: string;
}
