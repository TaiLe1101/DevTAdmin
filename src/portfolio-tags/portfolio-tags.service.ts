import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PortfolioTag } from 'src/enities/portfolio-tag.entity';
import {
  ResCreatePortfolioTag,
  ResPortfolioTag,
  ResUpdatePortfolioTag,
} from 'src/portfolio-tags/portfolio-tags.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PortfolioTagsService {
  constructor(
    @InjectRepository(PortfolioTag)
    private readonly _repo: Repository<PortfolioTag>,
  ) {}

  async index() {
    const tags = await this._repo.find();

    const result = tags.map((tag) => ResPortfolioTag.convert(tag));

    return result;
  }

  async create(reqBody: ResCreatePortfolioTag) {
    const tag = await this._repo.save(reqBody);

    return ResPortfolioTag.convert(tag);
  }

  async update(id: string, reqBody: ResUpdatePortfolioTag) {
    const updateResult = await this._repo.update(id, reqBody);

    if (updateResult.affected === 0) {
      return false;
    }

    return true;
  }

  async delete(id: number) {
    const deleteResult = await this._repo.delete(id);

    if (deleteResult.affected === 0) {
      return false;
    }

    return true;
  }

  async detail(id: number) {
    const tag = await this._repo.findOne({ where: { id } });

    if (!tag) {
      return null;
    }

    return ResPortfolioTag.convert(tag);
  }
}
