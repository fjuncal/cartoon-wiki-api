import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import Cartoon from './cartoon.entity';

@Injectable()
export class CartoonRepository {
  constructor(private prismaService: PrismaService) {}

  async obterTodos() {
    return await this.prismaService.cartoon.findMany();
  }

  async obterPorId(id: number) {
    return await this.prismaService.cartoon.findUnique({ where: { id } });
  }

  async criar(cartoon: Cartoon) {
    return await this.prismaService.cartoon.create({ data: cartoon as any });
  }

  async atualizar(cartoon: Cartoon) {
    if (!cartoon.id) throw new Error('Cartoon não possui id');
    return await this.prismaService.cartoon.update({
      where: { id: cartoon.id },
      data: cartoon as any,
    });
  }

  async deletar(id: number) {
    return await this.prismaService.cartoon.delete({ where: { id } });
  }
}
