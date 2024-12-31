import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { PortfolioConfig } from 'src/enities/portfolio-config.entity';
import {
  ReqCreatePortfolioConfig,
  ReqUpdatePortfolioConfig,
  ResPortfolioConfig,
} from 'src/portfolio-configs/portfolio-configs.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PortfolioConfigsService {
  constructor(
    @InjectRepository(PortfolioConfig)
    private readonly _repo: Repository<PortfolioConfig>,
  ) {}

  async index(): Promise<ResPortfolioConfig[]> {
    const configs = await this._repo.find();

    const result = configs.map((config) => ResPortfolioConfig.convert(config));

    return result;
  }

  async create(reqBody: ReqCreatePortfolioConfig) {
    // Chuyển từ dữ liệu DTO sang Entity
    const data = PortfolioConfig.convert(reqBody);

    const config = await this._repo.save(data);

    // Chuyển từ Entity về DTO
    const result = ResPortfolioConfig.convert(config);
    return result;
  }

  async delete(id: number) {
    const config = await this._repo.findOne({ where: { id } });

    if (!config) {
      return false;
    }

    const deletedConfig = await this._repo.remove(config);

    if (!deletedConfig) {
      return false;
    }

    return true;
  }

  async update(id: number, reqBody: ReqUpdatePortfolioConfig) {
    const data = PortfolioConfig.convert(reqBody);

    const updatedConfig = await this._repo.update(id, data);

    if (updatedConfig.affected === 0) {
      return false;
    }

    return true;
  }

  async detail(id: number) {
    const config = await this._repo.findOne({ where: { id } });

    if (!config) {
      return null;
    }

    const result = ResPortfolioConfig.convert(config);

    return result;
  }
}
