import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import ResponseAPI from 'src/common/response-api';
import {
  ReqCreatePortfolioConfig,
  ReqUpdatePortfolioConfig,
} from 'src/portfolio-configs/portfolio-configs.dto';
import { PortfolioConfigsService } from 'src/portfolio-configs/portfolio-configs.service';

@Controller('portfolio-configs')
export class PortfolioConfigsController {
  constructor(private readonly _service: PortfolioConfigsService) {}

  @Get()
  async index() {
    const result = await this._service.index();

    return new ResponseAPI({
      messages: ['Get All Portfolio Configs'],
      data: result,
    });
  }

  @Post()
  async create(@Body() reqBody: ReqCreatePortfolioConfig) {
    const result = await this._service.create(reqBody);

    return new ResponseAPI({
      messages: ['Create portfolio config'],
      data: result,
    });
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const result = await this._service.delete(id);
    const res = new ResponseAPI({
      messages: ['Delete portfolio config'],
      data: result,
    });

    if (!result) {
      res.error = 'Delete Failed';
      res.statusCode = 400;
    }

    return res;
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() reqBody: ReqUpdatePortfolioConfig,
  ) {
    const result = await this._service.update(id, reqBody);

    return new ResponseAPI({
      messages: ['Update portfolio config'],
      data: result,
    });
  }

  @Get(':id')
  async detail(@Param('id', ParseIntPipe) id: number) {
    const result = await this._service.detail(id);

    return new ResponseAPI({
      messages: ['Get detail portfolio config'],
      data: result,
    });
  }
}
