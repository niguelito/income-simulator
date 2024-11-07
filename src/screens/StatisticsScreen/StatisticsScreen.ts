import { defineComponent } from "vue";
import NumberFormatter from "../../util/NumberFormatter";
import Language from "../../lang/Language";
import { StateCache } from "../../game/GameState";

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
    }
})