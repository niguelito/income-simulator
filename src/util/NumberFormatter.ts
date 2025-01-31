import Component from "../lang/Component";
import Language from "../lang/Language";

export default class NumberFormatter {
    private static format = ['thousand','million','billion','trillion','quadrillion','quintillion','sextillion','septillion','octillion','nonillion'];
    private static prefixes = ['','un','duo','tre','quattuor','quin','sex','septen','octo','novem'];
    private static suffixes = ['decillion','vigintillion','trigintillion','quadragintillion','quinquagintillion','sexagintillion','septuagintillion','octogintillion','nonagintillion'];

    static resolveFormat() {
        if (this.format.length > 12) return;
        for (const i of this.suffixes) {
            for (const ii of this.prefixes) {
                this.format.push(ii + i);
            }
        }
    }

    public static formatText(value: number): Component {
        this.resolveFormat();
        
        if (value < 1000000) return Language.literal(value.toLocaleString());

        var base = 0,
		notationValue = '';
		if (!isFinite(value)) return Language.translatable("screen.money.infinity");
		if (value >= 1000000) {
            let i = 0;
			value /= 1000;
			while(Math.round(value) >= 1000 && i < this.format.length) {
				value /= 1000;
				base++;
                i++;
			}
            notationValue = this.format[Math.min(base, this.format.length - 1)];
		}
        if (value < 1000) return Language.literal(( Math.round(value * 1000) / 1000 ) + " " + notationValue);
        else return Language.literal(( this.formatText(value).resolveText() ) + " " + notationValue);
    }
}