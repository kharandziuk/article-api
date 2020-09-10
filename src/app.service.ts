import { Injectable } from '@nestjs/common';
import { Article } from "./article.entity";


@Injectable()
export class AppService {
  async getHello(): Promise<Article[]> {
    const article = new Article
    article.title = 'cool'
    article.content = 'some content'
    await article.save()
    return Article.find()
  }
}
