import { I18n } from './Language';

export default abstract class Component {
  abstract resolveText(): string;
}

export class LiteralText implements Component {
  text: string = '';

  constructor(text: string) {
    this.text = text;
  }

  resolveText() {
    return this.text;
  }

  toString(): string {
    return this.resolveText();
  }
}

export class TranslatedText implements Component {
  key: string = '';
  args: any[] = [];

  constructor(key: string, ...args: any[]) {
    this.key = key;
    this.args = args;
  }

  resolveText() {
    if (this.args.length > 0)
      return I18n.getInstance().translation(this.key, ...this.args);
    else return I18n.getInstance().translate(this.key);
  }

  toString(): string {
    return this.resolveText();
  }
}
