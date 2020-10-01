import { Controller, Get, Res} from '@nestjs/common';
import { Article } from "./article/article.entity";

@Controller()
export class AppController {

  @Get()
  redirect(@Res() res) {
    return res.redirect('/articles');
  }
}
