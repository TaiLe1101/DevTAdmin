import { BaseEntity } from 'src/common/base.entity';
import { PortfolioTag } from 'src/enities/portfolio-tag.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity('portfolioProjects')
export class PortfolioProject extends BaseEntity {
  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  link: string;

  @Column()
  title: string;

  @ManyToMany(() => PortfolioTag)
  @JoinTable()
  tags: PortfolioTag[];
}
