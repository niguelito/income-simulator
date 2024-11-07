import { defineComponent } from "vue";
import NumberFormatter from "../../util/NumberFormatter";
import Language from "../../lang/Language";
import { StateCache } from "../../game/GameState";
import AppEvents from "../../AppEvents";
import Screens from "../../Screens";

export default defineComponent({
    data() {
        return {
            NumberFormatter,
            Language
        }
    },
    computed: {
        state() {
            return StateCache.getState();
        }
    },
    methods: {
        prestige() {
            AppEvents.emit('block-inputs', true);

            setTimeout(() => {
                AppEvents.emit('select-block', (el: HTMLDivElement) => {
                    let opacity = 0.0;

                    el.style.background = "white";
                    el.style.opacity = opacity.toString();

                    const interval = setInterval(() => {
                        opacity += 0.01;
                        el.style.opacity = opacity.toString();

                        if (opacity >= 1.0) {
                            AppEvents.emit('block-inputs', false);
                            this.state.prestige.prestige(this.state);

                            AppEvents.emit('set-screen', Screens.MONEY_SCREEN);

                            clearInterval(interval);
                        }
                    }, 10);
                });
            }, 10);
        }
    }
})