import { ModelExt } from '../../methods/shared.methods.class';
import { IDeletableModel } from '../IDelete/IDelete.model';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { Type } from "class-transformer";
import CategoryAttributes from '../category/category.entity';

export default class ItemAttributes extends IDeletableModel {
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  code: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description: boolean
  @ApiProperty({
    required: true,
  })
  @Type(() => CategoryAttributes)
  @IsNotEmpty()
  category: CategoryAttributes[]
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  price: boolean
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  discount: string
  @ApiProperty({
    required: true,
  })
  @IsObject()
  @IsNotEmpty()
  packaging: object
  @ApiProperty({
    required: true,
  })
  @Type(() => Array)
  @IsNotEmpty()
  image: object[]
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  typeItem: string
  @ApiProperty({
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  useVariant: boolean
  @ApiProperty({
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  perishable: boolean
  @ApiProperty({
    required: true,
  })
  @Type(() => Array)
  @IsNotEmpty()
  variants: object[]
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  SKU: string
  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  barCode: string
  @ApiProperty({
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  stock: number
  @ApiProperty({
    required: true,
  })
  @IsObject()
  @IsNotEmpty()
  warehouse: Object
}
