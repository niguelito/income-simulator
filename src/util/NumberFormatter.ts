import BigNumber from "bignumber.js";
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

    public static fix(value: number): number {
        return Math.round(value * 1000) / 1000;
    }

    public static formatText(value: BigNumber, bl = true): Component {
        this.resolveFormat();
        
        if (value.lessThan(1000000) && bl) return Language.literal(value.toNumber().toLocaleString());

        var base = 0,
		notationValue = '';
        let v = value;
		if (value.greaterThanOrEqualTo(1000)) {
            let i = 0;
			v = v.div(1000);
			while(v.round().greaterThanOrEqualTo(1000) && i < this.format.length) {
				v = v.div(1000);
				base++;
                i++;
			}
            notationValue = this.format[Math.min(base, this.format.length - 1)];
		}

        if (v.greaterThanOrEqualTo(1000)) {
            return Language.literal(( this.formatText(v, false).resolveText() ) + " " + notationValue)
        }

        if (!value.isFinite()) return Language.translatable("screen.money.infinity");
        return Language.literal(( Math.round(v.toNumber() * 1000) / 1000 ) + " " + notationValue);
    }
}