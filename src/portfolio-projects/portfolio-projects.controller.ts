import { Body, Controller, Get, Post } from '@nestjs/common';
import ResponseAPI from 'src/common/response-api';
import { ResCreatePortfolioProject } from 'src/portfolio-projects/portfolio-projects.dto';
import { PortfolioProjectsService } from 'src/portfolio-projects/portfolio-projects.service';

@Controller('portfolio-projects')
export class PortfolioProjectsController {
  constructor(private readonly _service: PortfolioProjectsService) {}

  @Get()
  async index() {
    const result = await this._service.index();

    return new ResponseAPI({
      messages: ['Get All Projects'],
      data: result,
    });
  }

  @Post()
  async create(@Body() reqBody: ResCreatePortfolioProject) {
    const result = await this._service.create(reqBody);

    return new ResponseAPI({
      messages: ['Create Project'],
      data: result,
    });
  }
}
