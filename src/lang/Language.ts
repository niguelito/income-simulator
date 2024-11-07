import 'string-format-ts';
import en_us from './en_us';
import es_es from './es_es';
import { LiteralText, TranslatedText } from './Component';
import { StateCache } from '../game/GameState';
import fr_fr from './fr_fr';
import ja_jp from './ja_jp';
import de_de from './de_de';
import ar_sa from './ar_sa';
import ru_ru from './ru_ru';
import zh_cn from './zh_cn';
import hi_in from './hi_in';

export default class Language {
  public static literal(text: string): LiteralText {
    return new LiteralText(text);
  }

  public static translatable(key: string, ...args: any[]): TranslatedText {
    return new TranslatedText(key, ...args);
  }
}

export class I18n {
  private allLanguages: LangLocalization[] = [
    new en_us(), 
    new es_es(),
    new fr_fr(),
    new ja_jp(),
    new de_de(),
    new ar_sa(),
    new ru_ru(),
    new zh_cn(),
    new hi_in()
  ];

  private defaultTranslation = this.allLanguages[0];
  private selectedTranslation = this.allLanguages[0];

  public translate(key: string): string {
    const s = this.selectedTranslation.translations[key];
    if (s) return s;

    const d = this.defaultTranslation.translations[key];
    if (d) return d;

    return key;
  }

  public translation(key: string, ...args: any[]): string {
    const thing = this.translate(key);

    const formatted = thing.format(...args);

    return formatted;
  }

  public refresh() {
    const state = StateCache.getState();
    
    const lang = state.lang;

    const selected = this.allLanguages.filter((l) => l.localization == lang);

    if (selected.length == 0) {
      this.selectedTranslation = this.defaultTranslation;
      console.warn('Language' + lang + ' not found, defaulting to ' + this.selectedTranslation.localization)
    }
    else {
      this.selectedTranslation = selected[0];
      console.log('Loaded language: ' + this.selectedTranslation.localization)
    };
  }

  public getLanguages(): LangLocalization[] {
    return this.allLanguages;
  }

  public getSelectedLanguage(): LangLocalization {
    return this.selectedTranslation;
  }

  static instance: I18n | null = null;

  public static getInstance(): I18n {
    if (!this.instance) {
      this.instance = new I18n();
    }

    return this.instance;
  }
}

export interface LangLocalization {
  name: string;
  localization: string;
  translations: Record<string, string>;
}
