import { defineComponent } from "vue";
import { StateCache } from "../../game/GameState";
import Language from "../../lang/Language";
import NumberFormatter from "../../util/NumberFormatter";
import AppEvents from "../../AppEvents";

export default defineComponent({
    computed: {
        state() {
            return StateCache.getState();
        }
    },
    data() {
        return {
            StateCache,
            Language,
            NumberFormatter
        }
    },
    mounted() {
        AppEvents.emit("highlightModifiers", false);
    },
});