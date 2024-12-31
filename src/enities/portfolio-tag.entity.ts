import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('portfolioTags')
export class PortfolioTag extends BaseEntity {
  @Column()
  name: string;
}
