import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('portfolioSkills')
export class PortfolioSkill extends BaseEntity {
  @Column()
  name: string;
}
