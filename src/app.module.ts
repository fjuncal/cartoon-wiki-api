import { Module } from '@nestjs/common';
import { CartoonModule } from './cartoon/cartoon.module';

@Module({
  imports: [CartoonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
