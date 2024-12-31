import { Expose } from 'class-transformer';
import { BaseDTO } from 'src/common/base.dto';
import {
  ResCreatePortfolioTag,
  ResPortfolioTag,
} from 'src/portfolio-tags/portfolio-tags.dto';

export class ResPortfolioProject extends BaseDTO {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  imageUrl: string;

  @Expose()
  link: string;

  @Expose()
  tags: ResPortfolioTag[];

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}

export class ResCreatePortfolioProject extends BaseDTO {
  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  imageUrl: string;

  @Expose()
  link: string;

  @Expose()
  tags: ResCreatePortfolioTag[];
}

export class ResUpdatePortfolioProject extends ResCreatePortfolioProject {}
