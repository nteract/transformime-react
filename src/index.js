import TextTransform from './TextTransform';
import ImageTransform from './ImageTransform';

export class Transformime {
  constructor() {
    this.transforms = [];
    this.transforms.push(TextTransform);
    this.transforms.push(ImageTransform);
  }
}
