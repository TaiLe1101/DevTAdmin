import { Module } from '@nestjs/common';
import { PortfolioSkillsController } from './portfolio-skills.controller';
import { PortfolioSkillsService } from './portfolio-skills.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioSkill } from 'src/enities/portfolio-skill.entity';

@Module({
  controllers: [PortfolioSkillsController],
  providers: [PortfolioSkillsService],
  imports: [TypeOrmModule.forFeature([PortfolioSkill])],
})
export class PortfolioSkillsModule {}
