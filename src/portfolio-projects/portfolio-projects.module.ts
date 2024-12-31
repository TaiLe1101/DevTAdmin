import { Module } from '@nestjs/common';
import { PortfolioProjectsController } from './portfolio-projects.controller';
import { PortfolioProjectsService } from './portfolio-projects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioProject } from 'src/enities/portfolio-project.entity';

@Module({
  controllers: [PortfolioProjectsController],
  providers: [PortfolioProjectsService],
  imports: [TypeOrmModule.forFeature([PortfolioProject])],
})
export class PortfolioProjectsModule {}
