import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PortfolioProject } from 'src/enities/portfolio-project.entity';
import {
  ResCreatePortfolioProject,
  ResPortfolioProject,
  ResUpdatePortfolioProject,
} from 'src/portfolio-projects/portfolio-projects.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PortfolioProjectsService {
  constructor(
    @InjectRepository(PortfolioProject)
    private readonly _repo: Repository<PortfolioProject>,
  ) {}

  async index() {
    const projects = await this._repo.find();

    const result = projects.map((project) => {
      return ResPortfolioProject.convert(project);
    });

    return result;
  }

  async create(reqBody: ResCreatePortfolioProject) {
    const project = await this._repo.save(reqBody);

    return ResPortfolioProject.convert(project);
  }

  async update(id: number, reqBody: ResUpdatePortfolioProject) {
    const updatedResult = await this._repo.update(id, reqBody);

    if (updatedResult.affected === 0) {
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
    const project = await this._repo.findOne({ where: { id } });

    if (!project) {
      return null;
    }

    return ResPortfolioProject.convert(project);
  }
}
