import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { BaseDTO } from 'src/common/base.dto';

export class ResPortfolioSocial extends BaseDTO {
  @Expose()
  id: number;

  @Expose()
  icon: string;

  @Expose()
  link: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}

export class ReqCreatePortfolioSocial extends BaseDTO {
  @IsNotEmpty({ message: 'Trường Icon không được để trống' })
  @IsString({ message: 'Trường Icon phải là một chuỗi' })
  icon: string;

  @IsNotEmpty({ message: 'Trường Link không được để trống' })
  @IsString({ message: 'Trường Link phải là một chuỗi' })
  link: string;
}

export class ReqUpdatePortfolioSocial extends ReqCreatePortfolioSocial {}
