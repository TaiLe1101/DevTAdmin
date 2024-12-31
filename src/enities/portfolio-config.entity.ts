import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('portfolioConfigs')
export class PortfolioConfig extends BaseEntity {
  @Column()
  welcomeText: string;

  @Column()
  subWelcomeText: string;

  @Column()
  aboutText: string;

  @Column()
  aboutText2: string;
}
