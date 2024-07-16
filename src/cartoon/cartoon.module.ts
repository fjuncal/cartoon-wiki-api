import { Module } from '@nestjs/common';
import { CartoonController } from './cartoon.controller';
import { DbModule } from 'src/db/db.module';
import { CartoonRepository } from './cartoon.repository';

@Module({
  imports: [DbModule],
  controllers: [CartoonController],
  providers: [CartoonRepository],
})
export class CartoonModule {}
