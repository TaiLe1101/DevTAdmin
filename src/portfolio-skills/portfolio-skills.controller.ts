import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import ResponseAPI from 'src/common/response-api';
import { PortfolioSkillsService } from 'src/portfolio-skills/portfolio-skills.service';
import {
  ReqCreatePortfolioSkill,
  ReqUpdatePortfolioSkill,
} from './portfolio-skills.dto';

@Controller('portfolio-skills')
export class PortfolioSkillsController {
  constructor(private readonly _service: PortfolioSkillsService) {}

  @Get()
  async index() {
    const result = await this._service.index();
    return new ResponseAPI({
      messages: ['Portfolio skill list'],
      data: result,
    });
  }

  @Get(':id')
  async detail(@Param('id', ParseIntPipe) id: number) {
    const result = await this._service.detail(id);
    const res = new ResponseAPI({
      messages: ['Portfolio skill detail'],
      data: result,
    });

    if (!result) {
      res.error = 'Portfolio skill not found';
      res.statusCode = HttpStatus.NOT_FOUND;
    }

    return res;
  }

  @Post()
  async create(@Body() data: ReqCreatePortfolioSkill) {
    const result = await this._service.create(data);

    return new ResponseAPI({
      messages: ['Portfolio skill create'],
      data: result,
    });
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: ReqUpdatePortfolioSkill) {
    const result = await this._service.update(id, data);
    const res = new ResponseAPI({
      messages: ['Portfolio skill update'],
      data: result,
    });

    if (!result) {
      res.error = 'Skill not found';
      res.statusCode = HttpStatus.NOT_FOUND;
    }

    return res;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const result = await this._service.delete(id);
    const res = new ResponseAPI({
      messages: ['Portfolio skill delete'],
      data: result,
    });

    if (!result) {
      res.error = 'Delete Portfolio skill failed';
      res.statusCode = HttpStatus.BAD_REQUEST;
    }

    return res;
  }
}
