import {MigrationInterface, QueryRunner, getManager} from "typeorm";
import { Article } from "src/article.entity"

const entityManager = getManager()

export class addArticles1599499116037 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await entityManager.insert(Article, { title: 'cool', content: 'some content'})
      await entityManager.insert(Article, { title: 'bad', content: 'some content'})
      await entityManager.insert(Article, { title: 'best', content: 'some content'})
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
