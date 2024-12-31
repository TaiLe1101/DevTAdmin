import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PortfolioSocial } from 'src/enities/portfolio-social.entity';
import {
  ReqCreatePortfolioSocial,
  ReqUpdatePortfolioSocial,
  ResPortfolioSocial,
} from 'src/portfolio-socials/portfolio-socials.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PortfolioSocialsService {
  constructor(
    @InjectRepository(PortfolioSocial)
    private readonly _repo: Repository<PortfolioSocial>,
  ) {}

  async index() {
    const socials = await this._repo.find();

    const result = socials.map((social) => {
      return ResPortfolioSocial.convert(social);
    });

    return result;
  }

  async create(reqBody: ReqCreatePortfolioSocial) {
    const social = await this._repo.save(reqBody);

    return ResPortfolioSocial.convert(social);
  }

  async update(id: number, reqBody: ReqUpdatePortfolioSocial) {
    const updatedResult = await this._repo.update(id, reqBody);

    if (updatedResult.affected === 0) {
      return false;
    }

    return true;
  }

  async detail(id: number) {
    const social = await this._repo.findOne({ where: { id } });

    if (!social) {
      return null;
    }

    return ResPortfolioSocial.convert(social);
  }

  async delete(id: number) {
    const deletedResult = await this._repo.delete(id);

    if (deletedResult.affected === 0) {
      return false;
    }

    return true;
  }
}
