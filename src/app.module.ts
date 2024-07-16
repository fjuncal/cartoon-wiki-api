import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { CartoonModule } from './cartoon/cartoon.module';

@Module({
  imports: [UsuarioModule, CartoonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
