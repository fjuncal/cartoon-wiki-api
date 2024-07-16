import { Body, Controller, Post } from '@nestjs/common';
import Cartoon from './cartoon.entity';
import { CartoonRepository } from './cartoon.repository';

@Controller('cartoon')
export class CartoonController {
  constructor(private cartoonRepository: CartoonRepository) {}

  @Post()
  async criar(@Body() cartoon: Cartoon) {
    const novoCartoon = await this.cartoonRepository.criar(cartoon);
    return novoCartoon;
  }
}
