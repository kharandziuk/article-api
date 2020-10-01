import {
  Controller,
  Get,
  Post,
  Body
} from '@nestjs/common';
import { ArticleDTO } from './article.dto';
import { ArticleService } from './article.service';
import { Article } from "./article.entity";

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  list(): Promise<Article[]> {
    return this.articleService.list();
  }

  @Post()
  create(@Body() data: ArticleDTO) {
     return this.articleService.create(data);
  }
}
