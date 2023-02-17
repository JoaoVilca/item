import { ModelExt } from '../../methods/shared.methods.class';
import { IDeletableModel } from '../IDelete/IDelete.model';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from "class-transformer";

export default class CategoryAttributes extends IDeletableModel {
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  code: String
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: String
  @ApiProperty({
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  hasSubCategory: Boolean
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  parentCode: String
  @ApiProperty({
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  isLuxury: Boolean
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  image: String
}
