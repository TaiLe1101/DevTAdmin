import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  ParseIntPipe,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { PortfolioSocialsService } from 'src/portfolio-socials/portfolio-socials.service';
import {
  ReqCreatePortfolioSocial,
  ReqUpdatePortfolioSocial,
} from 'src/portfolio-socials/portfolio-socials.dto';
import ResponseAPI from 'src/common/response-api';

@Controller('portfolio-socials')
export class PortfolioSocialsController {
  constructor(private readonly _service: PortfolioSocialsService) {}

  @Get()
  async index() {
    const result = await this._service.index();
    return new ResponseAPI({
      messages: ['Get All Portfolio Socials'],
      data: result,
    });
  }

  @Get(':id')
  async detail(@Param('id', ParseIntPipe) id: number) {
    const result = await this._service.detail(id);

    const response = new ResponseAPI({
      messages: ['Get Portfolio Social Detail'],
      data: result,
    });

    if (!result) {
      response.statusCode = HttpStatus.NOT_FOUND;
      response.error = 'Portfolio Social Not Found';
    }

    return response;
  }

  @Post()
  async create(@Body() reqBody: ReqCreatePortfolioSocial) {
    const result = await this._service.create(reqBody);
    return new ResponseAPI({
      messages: ['Create Portfolio Social'],
      data: result,
    });
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() reqBody: ReqUpdatePortfolioSocial,
  ) {
    const result = await this._service.update(id, reqBody);

    const response = new ResponseAPI({
      messages: ['Update Portfolio Social'],
      data: result,
    });

    if (!result) {
      response.statusCode = HttpStatus.NOT_FOUND;
      response.error = 'Portfolio Social Not Found';
    }

    return response;
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const result = await this._service.delete(id);

    const response = new ResponseAPI({
      messages: ['Delete Portfolio Social'],
      data: result,
    });

    if (!result) {
      response.statusCode = HttpStatus.NOT_FOUND;
      response.error = 'Portfolio Social Not Found';
    }

    return response;
  }
}
