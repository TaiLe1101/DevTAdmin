import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('portfolioSocials')
export class PortfolioSocial extends BaseEntity {
  @Column()
  icon: string;

  @Column()
  link: string;
}
