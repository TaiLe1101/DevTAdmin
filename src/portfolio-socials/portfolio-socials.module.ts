import { Module } from '@nestjs/common';
import { PortfolioSocialsController } from './portfolio-socials.controller';
import { PortfolioSocialsService } from './portfolio-socials.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioSocial } from 'src/enities/portfolio-social.entity';

@Module({
  controllers: [PortfolioSocialsController],
  providers: [PortfolioSocialsService],
  imports: [TypeOrmModule.forFeature([PortfolioSocial])],
})
export class PortfolioSocialsModule {}
