import { TagEntity } from './tag.entity';
import { SourceEntity } from './source.entity';

export class ArticleEntity {
  id: number;
  title: string;
  url: string;
  text: string;
  index: number;
  source: SourceEntity;
  tags: TagEntity[];
}
