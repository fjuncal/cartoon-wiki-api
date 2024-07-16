import { Module } from '@nestjs/common';
import { CartoonModule } from './cartoon/cartoon.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [CartoonModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
