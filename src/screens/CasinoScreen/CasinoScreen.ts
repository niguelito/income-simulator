import { Component, defineComponent } from "vue";
import Language from "../../lang/Language";
import { StateCache } from "../../game/GameState";
import NumberFormatter from "../../util/NumberFormatter";
import CasinoAlgorithm, { SymbolStatus } from "./CasinoAlgorithm";
import AppEvents from "../../AppEvents";

export default defineComponent({
    computed: {
        state() {
            return StateCache.getState();
        }
    },
    data() {
        return {
            Language,
            NumberFormatter,
            CasinoAlgorithm,
            SymbolStatus,
            bidAmount: 0,
            symbol1: CasinoAlgorithm.casinoSymbols[0],
            symbol2: CasinoAlgorithm.casinoSymbols[0],
            symbol3: CasinoAlgorithm.casinoSymbols[0],
            winMessage: Language.translatable("screen.casino.spin") as Component,
            
            isHelpOpened: false,
            isGambling: false,

            upgradeDelta: true,
            modifiersDelta: true,
        }
    },
    mounted() {
        this.spin();
    },
    methods: {
        spin() {
            const win = CasinoAlgorithm.generate();
            this.symbol1 = win[0];
            this.symbol2 = win[1];
            this.symbol3 = win[2];
        },
        gambleHalf() {
            this.bidAmount = Math.floor(this.state.money.amount / 2);
            this.gamble();
        },
        allIn() {
            this.bidAmount = Math.floor(this.state.money.amount);
            this.gamble();
        },
        gamble() {
            if (this.bidAmount == 0) return;
            if (this.bidAmount > this.state.money.amount) return;
            
            const bidding = Math.floor(this.bidAmount);
            
            this.state.money.spend(bidding);

            const audio = new Audio("./snd/slotmachine-63035.mp3");
            audio.play();

            const win = CasinoAlgorithm.generate();

            console.log(win);

            this.isGambling = true;

            let maxFirstSpins = 15;
            let maxSecondSpins = maxFirstSpins * 2;
            let maxThirdSpins = maxFirstSpins * 3;

            const firstSpins = CasinoAlgorithm.generateSlotOutputs(win[0], maxFirstSpins);
            const secondSpins = CasinoAlgorithm.generateSlotOutputs(win[1], maxSecondSpins);
            const thirdSpins = CasinoAlgorithm.generateSlotOutputs(win[2], maxThirdSpins);

            AppEvents.emit("disable-screen-nav", true);

            const i = setInterval(() => {
                if (maxFirstSpins != 0) {
                    maxFirstSpins--;
                    this.symbol1 = firstSpins[firstSpins.length - maxFirstSpins - 1];
                }

                if (maxSecondSpins != 0) {
                    maxSecondSpins--;
                    this.symbol2 = secondSpins[secondSpins.length - maxSecondSpins - 1];
                }

                if (maxThirdSpins != 0) {
                    maxThirdSpins--;
                    this.symbol3 = thirdSpins[thirdSpins.length - maxThirdSpins - 1];
                }

                if (maxFirstSpins == 0 && maxSecondSpins == 0 && maxThirdSpins == 0) {
                    clearInterval(i);
                    const result = CasinoAlgorithm.getWinAmount(win);
                    this.winMessage = CasinoAlgorithm.getWinningText(result);

                    const newAmount = bidding * result;

                    this.state.money.add(newAmount);

                    audio.pause();

                    const finishAudio = new Audio("./snd/slotmachine-end-63035.mp3");
                    finishAudio.play();

                    this.checkNavbar();

                    AppEvents.emit("disable-screen-nav", false);

                    this.isGambling = false;
                }
            }, 50);
        },
    
        checkNavbar() {
            if (this.state.upgrades.checkUnlocks(this.state.money.amount) && this.upgradeDelta) {
                this.upgradeDelta = false;
                
                AppEvents.emit("highlightUpgrades", true);
        
                this.playSound();
            }
        
            if (this.checkModifiers() && this.modifiersDelta) {
                this.modifiersDelta = false;
        
                AppEvents.emit("highlightModifiers", true);
        
                this.playSound();
            }
        },

        checkModifiers() {
            const b = this.state.extraClicks.canAfford(this.state.money.amount);
            const c = this.state.incomeBonus.canAfford(this.state.money.amount);
      
            return b || c;
        },
      
        playSound() {
            const a = new Audio("./snd/interface-124464.mp3");
            a.play();
        }
    }
})