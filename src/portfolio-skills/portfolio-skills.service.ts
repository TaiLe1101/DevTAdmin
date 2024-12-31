import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PortfolioSkill } from 'src/enities/portfolio-skill.entity';
import {
  ReqCreatePortfolioSkill,
  ReqUpdatePortfolioSkill,
  ResPortfolioSkill,
} from 'src/portfolio-skills/portfolio-skills.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PortfolioSkillsService {
  constructor(
    @InjectRepository(PortfolioSkill)
    private readonly _repo: Repository<PortfolioSkill>,
  ) {}

  async index() {
    const skills = await this._repo.find();

    const result = skills.map((skill) => {
      return ResPortfolioSkill.convert(skill);
    });

    return result;
  }

  async create(data: ReqCreatePortfolioSkill) {
    const skill = await this._repo.save(data);

    return ResPortfolioSkill.convert(skill);
  }

  async detail(id: number) {
    const skill = await this._repo.findOne({ where: { id } });

    if (!skill) {
      return null;
    }

    return ResPortfolioSkill.convert(skill);
  }

  async update(id: number, data: ReqUpdatePortfolioSkill) {
    const skill = await this._repo.update(id, data);

    if (skill.affected === 0) {
      return false;
    }

    return true;
  }

  async delete(id: number) {
    const deletedResult = await this._repo.delete(id);

    if (deletedResult.affected === 0) {
      return false;
    }

    return true;
  }
}
