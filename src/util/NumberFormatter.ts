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
        alert(this.formatRaw(Math.pow(9999, 100)));
    }

    public static formatText(value: number): Component {
        return Language.literal(this.formatRaw(value));
    }

    public static formatRaw(value: number): string {
        this.resolveFormat();
        
        if (value < 1000000) return value.toLocaleString();

        var base = 0,
		notationValue = '';
		if (value >= 1000000)
		{
			value /= 1000;
			while(Math.round(value) >= 1000)
			{
				value /= 1000;
				base++;
			}
			if (base >= this.format.length) return "Infinity"; 
            else notationValue = this.format[base];
		}
		return ( Math.round(value * 1000) / 1000 ) + " " + notationValue;
    }
}