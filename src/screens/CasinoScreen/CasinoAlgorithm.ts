import Component from "../../lang/Component";
import Language from "../../lang/Language";

export class CasinoWin {
    public static readonly LOSE = 0;
    public static readonly SMALL = 3;
    public static readonly MEDIUM = 8;
    public static readonly LARGE = 15;
    public static readonly JACKPOT = 25;
    public static readonly GOLD_RUSH = 50;
}

export class SymbolStatus {
    public static readonly MATCHING = 0;
    public static readonly DICE = 1;
    public static readonly SEVEN = 2;

    public static getComponent(type: number): Component {
        switch (type) {
            case this.MATCHING:
                return Language.translatable("screen.casino.help.symbols.status.matching");
            
            case this.DICE:
                return Language.translatable("screen.casino.help.symbols.status.dice");
            
            case this.SEVEN:
                return Language.translatable("screen.casino.help.symbols.status.seven");

            default:
                return Language.translatable("screen.casino.help.symbols.status.unknown");
        }
    }
}

export interface CasinoSymbol {
    symbol: string;
    status: number;
    id: number;
}

export default class CasinoAlgorithm {
    static casinoSymbols: CasinoSymbol[] = [
        {
            symbol: "🍒",
            status: SymbolStatus.MATCHING,
            id: 0,
        },
        {
            symbol: "🍋",
            status: SymbolStatus.MATCHING,
            id: 1,
        },
        {
            symbol: "🍇",
            status: SymbolStatus.MATCHING,
            id: 2,
        },
        {
            symbol: "🍕",
            status: SymbolStatus.MATCHING,
            id: 3,
        },
        {
            symbol: "🍘",
            status: SymbolStatus.MATCHING,
            id: 4,
        },
        {
            symbol: "🍙",
            status: SymbolStatus.MATCHING,
            id: 5,
        },
        {
            symbol: "🍮",
            status: SymbolStatus.MATCHING,
            id: 6,
        },
        {
            symbol: "🍯",
            status: SymbolStatus.MATCHING,
            id: 7,
        },
        {
            symbol: "🍬",
            status: SymbolStatus.MATCHING,
            id: 8,
        },
        {
            symbol: "🥨",
            status: SymbolStatus.MATCHING,
            id: 9
        },
        {
            symbol: "⚀",
            status: SymbolStatus.DICE,
            id: 10,
        },
        {
            symbol: "⚁",
            status: SymbolStatus.DICE,
            id: 11,
        },
        {
            symbol: "⚂",
            status: SymbolStatus.DICE,
            id: 12,
        },
        {
            symbol: "⚃",
            status: SymbolStatus.DICE,
            id: 13,
        },
        {
            symbol: "⚄",
            status: SymbolStatus.DICE,
            id: 14,
        },
        {
            symbol: "🎰",
            status: SymbolStatus.SEVEN,
            id: 16,
        }
    ];

    static getWinningText(type: CasinoWin): Component {
        switch (type) {
            case CasinoWin.SMALL:
                return Language.translatable("screen.casino.win.small");
            case CasinoWin.MEDIUM:
                return Language.translatable("screen.casino.win.medium");
            case CasinoWin.LARGE:
                return Language.translatable("screen.casino.win.large");
            case CasinoWin.JACKPOT:
                return Language.translatable("screen.casino.win.jackpot");
            case CasinoWin.GOLD_RUSH:
                return Language.translatable("screen.casino.win.goldrush");
            default:
                return Language.translatable("screen.casino.win.lose");
        }
    }

    static generate(): CasinoSymbol[] {
        return [
            this.casinoSymbols[Math.floor(Math.random() * this.casinoSymbols.length)],
            this.casinoSymbols[Math.floor(Math.random() * this.casinoSymbols.length)],
            this.casinoSymbols[Math.floor(Math.random() * this.casinoSymbols.length)],
        ]
    }

    static generateSlotOutputs(finalSymbol: CasinoSymbol, amount: number): CasinoSymbol[] {
        const output: CasinoSymbol[] = [];
        for (let i = 0; i < amount; i++) {
            output.push(this.casinoSymbols[Math.floor(Math.random() * this.casinoSymbols.length)]);
        }
        output[output.length - 1] = finalSymbol;
        return output;
    }

    // no matching symbols = lose
    // 2 matching symbols = small win
    // 2 differing dice = small win
    // 1 7 = medium win
    // 2 matching dice = medium win
    // 3 matching symbols = large win
    // 3 differing dice = large win
    // 2 7s = jackpot
    // 3 matching dice = jackpot
    // 3 7s = gold rush

    // this function is recursive, and will check for the first win it finds
    static getWinAmount(symbols: CasinoSymbol[], currentSymbol?: number): number {
        // there should always be 3 symbols for the 3 slots
        if (symbols.length != 3) throw new Error("Invalid symbol array length!");
        
        if (currentSymbol == undefined) {
            // if we do not have a current symbol,
            // we are at the start of the array
            return this.getWinAmount(symbols, 0);
        } else if (currentSymbol >= symbols.length) {
            // if we are at the end of the array, 
            // we have not matched anything,
            // meaning we have lost
            return CasinoWin.LOSE;
        } else {
            // otherwise, we are somewhere in the middle
            const symbol = symbols[currentSymbol];

            // get all other symbols
            const others = symbols.filter((_, i) => i != currentSymbol);

            switch (symbol.status) {
                case SymbolStatus.MATCHING:
                    // if we are matching, we need to check if we have any other matching symbols
                    const matching = others.filter(s => s.status == SymbolStatus.MATCHING);
                    if (matching.length == 0) return this.getWinAmount(symbols, currentSymbol + 1);

                    // if we have matching symbols, we need to check if we have 2 or 3
                    const matched = matching.filter(s => s.id == symbol.id);

                    // if array length is 1, we have 2 matching symbols
                    if (matched.length == 1) return CasinoWin.SMALL;

                    // if array length is 2, we have 3 matching symbols
                    else if (matched.length == 2) return CasinoWin.LARGE;

                    // otherwise, we have no matching symbols
                    else return this.getWinAmount(symbols, currentSymbol + 1);

                case SymbolStatus.DICE:
                    // if we are a dice, we need to check if we have any other dice
                    const dice = others.filter(s => s.status == SymbolStatus.DICE);
                    if (dice.length == 0) return this.getWinAmount(symbols, currentSymbol + 1);

                    // if we have other dice, we need to check if any of them match
                    const matchedDice = dice.filter(s => s.id == symbol.id);

                    // if array length is 1, we have 2 matching dice
                    if (matchedDice.length == 1) return CasinoWin.MEDIUM;

                    // if array length is 2, we have 3 matching dice
                    else if (matchedDice.length == 2) return CasinoWin.JACKPOT;

                    // otherwise, we have no matching dice, and should look for differing dice
                    else {
                        // if dice array length is 1, we have 2 differing dice
                        if (dice.length == 1) return CasinoWin.SMALL;

                        // if dice array length is 2, we have 3 differing dice
                        else if (dice.length == 2) return CasinoWin.LARGE;

                        // otherwise, we have no dice
                        else return this.getWinAmount(symbols, currentSymbol + 1);
                    }
                default:
                    // if we are a 7, we need to check if we have any other 7s
                    const sevens = others.filter(s => s.status == SymbolStatus.SEVEN);

                    // if array length is 1, we have 2 7s
                    if (sevens.length == 1) return CasinoWin.JACKPOT;

                    // if array length is 2, we have 3 7s
                    else if (sevens.length == 2) return CasinoWin.GOLD_RUSH;

                    // if array length is 0, we have no other 7s
                    else return CasinoWin.MEDIUM;
            }
        }
    }
}