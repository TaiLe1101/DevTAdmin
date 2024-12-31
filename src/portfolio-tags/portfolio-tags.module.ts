import { Module } from '@nestjs/common';
import { PortfolioTagsController } from './portfolio-tags.controller';
import { PortfolioTagsService } from './portfolio-tags.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioTag } from 'src/enities/portfolio-tag.entity';

@Module({
  controllers: [PortfolioTagsController],
  providers: [PortfolioTagsService],
  imports: [TypeOrmModule.forFeature([PortfolioTag])],
})
export class PortfolioTagsModule {}
