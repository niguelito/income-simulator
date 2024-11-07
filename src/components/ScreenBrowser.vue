<template>
    <div id="selector">
        <button 
            @click="setScreen(Screens.MONEY_SCREEN)"
            v-bind:disabled="disableButtons"
            >{{ Language.translatable("screen.money") }}
        </button>
        <button 
            @click="setScreen(Screens.UPGRADE_SCREEN)" 
            :class="{ accent: highlightUpgrades }"
            v-bind:disabled="disableButtons"
            >{{ Language.translatable("screen.upgrades") }}
        </button>
        <button 
            @click="setScreen(Screens.MODIFIERS_SCREEN)" 
            :class="{ accent: higlightModifiers }"
            v-bind:disabled="disableButtons"
            >{{ Language.translatable("screen.modifiers") }}
        </button>
        <button 
            @click="setScreen(Screens.STATISTICS_SCREEN)"
            v-bind:disabled="disableButtons"
            >{{ Language.translatable("screen.statistics") }}
        </button>

        <br>

        <button 
            @click="setScreen(Screens.CASINO_SCREEN)"
            v-bind:disabled="disableButtons"
            >{{ Language.translatable("screen.casino") }}
        </button>

        <button 
            @click="setScreen(Screens.PRESTIGE_SCREEN)"
            v-bind:disabled="disableButtons"
            >{{ Language.translatable("screen.prestige") }}
        </button>

        <button 
            @click="setScreen(Screens.SETTINGS_SCREEN)"
            v-bind:disabled="disableButtons"
            >{{ Language.translatable("screen.settings") }}
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Screens from '../Screens';
import Language from '../lang/Language';
import { StateCache } from '../game/GameState';
import AppEvents from '../AppEvents';

export default defineComponent({
    props: {
        callback: {
            type: Function as PropType<(screen: Screens) => void>,
            required: true
        },
        highlightUpgrades: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        higlightModifiers: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        disableButtons: {
            type: Boolean as PropType<boolean>,
            default: false
        }
    },
    computed: {
        state() {
            return StateCache.getState();
        }
    },
    data() {
        return {
            Screens,
            Language,
        }
    },
    mounted() {
        AppEvents.addListener('set-screen', (screen: Screens) => {
            this.setScreen(screen);
        });

        AppEvents.addListener('refresh', () => {
            this.$forceUpdate();
        });
    },
    methods: {
        setScreen(screen: Screens) {
            this.callback(screen);
            this.$forceUpdate();
        }
    }
})

</script>

<style lang="css" scoped>
button {
    margin: 0.2rem;
}
</style>