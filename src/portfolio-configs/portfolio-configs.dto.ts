import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { BaseDTO } from 'src/common/base.dto';

export class ResPortfolioConfig extends BaseDTO {
  @Expose()
  id: number;

  @Expose()
  welcomeText: string;

  @Expose()
  subWelcomeText: string;

  @Expose()
  aboutText: string;

  @Expose()
  aboutText2: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}

export class ReqCreatePortfolioConfig extends BaseDTO {
  @IsNotEmpty({ message: 'Trường welcomeText không được trống' })
  @Expose()
  welcomeText: string;

  @IsNotEmpty({ message: 'Trường subWelcomeText không được trống' })
  @Expose()
  subWelcomeText: string;

  @IsNotEmpty({ message: 'Trường aboutText không được trống' })
  @Expose()
  aboutText: string;

  @IsNotEmpty({ message: 'Trường aboutText2 không được trống' })
  @Expose()
  aboutText2: string;
}

export class ReqUpdatePortfolioConfig extends ReqCreatePortfolioConfig {}
