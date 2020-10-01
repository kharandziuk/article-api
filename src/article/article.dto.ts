import { IsNotEmpty } from 'class-validator';

export class ArticleDTO{
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;
}

