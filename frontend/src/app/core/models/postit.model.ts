import { ItemData } from './item-data';

export class PostIt extends ItemData {
  constructor() {
    super();
    this.name = 'Post it';
  }

  name: string;
}
