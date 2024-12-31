import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { BaseDTO } from 'src/common/base.dto';

export class ResPortfolioTag extends BaseDTO {
  name: string;
}

export class ResCreatePortfolioTag extends BaseDTO {
  @IsString({ message: 'Trường name phải là một chuỗi' })
  @IsNotEmpty({ message: 'Trường name không được để trống' })
  @Expose()
  name: string;
}

export class ResUpdatePortfolioTag extends ResCreatePortfolioTag {}
