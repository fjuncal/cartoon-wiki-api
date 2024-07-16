import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Get()
  async obterTodos() {
    return await this.cartoonRepository.obterTodos();
  }

  @Get(':id')
  async obterPorId(@Param('id') id: string) {
    try {
      return await this.cartoonRepository.obterPorId(+id);
    } catch (e) {
      return e;
    }
  }

  @Delete(':id')
  async deletar(@Param('id') id: string) {
    try {
      return await this.cartoonRepository.deletar(+id);
    } catch (e) {
      return e;
    }
  }

  @Patch(':id')
  async atualizar(@Param('id') id: string, @Body() cartoon: Cartoon) {
    try {
      const usuarioAtualizado = await this.cartoonRepository.atualizar({
        ...cartoon,
        id: +id,
      });
      return usuarioAtualizado;
    } catch (e) {
      return e;
    }
  }
}
