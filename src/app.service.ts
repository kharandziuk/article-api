import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<Article[]> {
    await Article.insert({ title: 'cool', content: 'some content'})
    return Article.find()
  }
}
