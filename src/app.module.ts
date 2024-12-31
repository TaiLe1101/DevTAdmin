import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { join } from 'path';
import { PortfolioConfigsModule } from './portfolio-configs/portfolio-configs.module';
import { PortfolioSkillsModule } from './portfolio-skills/portfolio-skills.module';
import { PortfolioSocialsModule } from './portfolio-socials/portfolio-socials.module';
import { PortfolioProjectsModule } from './portfolio-projects/portfolio-projects.module';
import { PortfolioTagsModule } from './portfolio-tags/portfolio-tags.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DB_HOST: Joi.string().trim(),
        DB_PORT: Joi.number(),
        DB_USER: Joi.string().trim(),
        DB_PWD: Joi.number(),
        DB_NAME: Joi.string().trim(),
      }),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: String(configService.get('DB_PWD')),
        database: configService.get('DB_NAME'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: false,
        autoLoadEntities: false,
      }),
      inject: [ConfigService],
    }),
    PortfolioConfigsModule,
    PortfolioSocialsModule,
    PortfolioSkillsModule,
    PortfolioProjectsModule,
    PortfolioTagsModule,
  ],
})
export class AppModule {}
