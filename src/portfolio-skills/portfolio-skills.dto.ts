import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { BaseDTO } from 'src/common/base.dto';

export class ResPortfolioSkill extends BaseDTO {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}

export class ReqCreatePortfolioSkill extends BaseDTO {
  @Expose()
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class ReqUpdatePortfolioSkill extends ReqCreatePortfolioSkill {}
