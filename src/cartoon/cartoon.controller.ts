import { Body, Controller, Post } from '@nestjs/common';
import Cartoon from './cartoon.entity';

@Controller('cartoon')
export class CartoonController {
  @Post()
  async criar(@Body() cartoon: Cartoon) {
    return { ...cartoon, criado: new Date() };
  }
}
