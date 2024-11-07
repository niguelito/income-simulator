import { defineComponent } from "vue";
import { StateCache } from "../../game/GameState";
import Language from "../../lang/Language";
import AppEvents from "../../AppEvents";
import NumberFormatter from "../../util/NumberFormatter";

export default defineComponent({
    computed: {
        state() {
            return StateCache.getState();
        }
    },
    data() {
        return {
            Language,
            AppEvents,
            NumberFormatter
        }
    },
    mounted() {
        AppEvents.emit('highlightUpgrades', false);
    },
})