import { Injectable } from '@nestjs/common';
import { Article } from "./article.entity";
import { ArticleDTO } from './article.dto';

@Injectable()
export class ArticleService {
  list(): Promise<Article[]> {
    return Article.find()
  }


  create({ content, title }): Promise<Article>{
    const article = new Article();
    article.content = content
    article.title = title
    return article.save()
  }
}
