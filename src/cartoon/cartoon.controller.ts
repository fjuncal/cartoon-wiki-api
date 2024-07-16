import { Controller, Post } from '@nestjs/common';

@Controller('cartoon')
export class CartoonController {
  @Post()
  async criar() {
    return 'Criando Cartoon';
  }
}
