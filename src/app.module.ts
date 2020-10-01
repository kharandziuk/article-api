import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ArticleService } from './article/article.service';
import { ArticleController } from './article/article.controller';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    HealthModule,
  ],
  controllers: [
    AppController,
    ArticleController
  ],
  providers: [ArticleService],
})
export class AppModule {}
