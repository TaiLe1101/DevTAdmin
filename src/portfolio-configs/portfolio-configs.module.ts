import { Module } from '@nestjs/common';
import { PortfolioConfigsController } from './portfolio-configs.controller';
import { PortfolioConfigsService } from './portfolio-configs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioConfig } from 'src/enities/portfolio-config.entity';

@Module({
  controllers: [PortfolioConfigsController],
  providers: [PortfolioConfigsService],
  imports: [TypeOrmModule.forFeature([PortfolioConfig])],
})
export class PortfolioConfigsModule {}
