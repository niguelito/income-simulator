import { defineComponent } from 'vue';
import WealthMessage from "../../components/WealthMessage.vue"
import Language from '../../lang/Language';
import NumberFormatter from '../../util/NumberFormatter';
import GameState, { StateCache } from '../../game/GameState';
import AppEvents from '../../AppEvents';

export default defineComponent({
  components: { WealthMessage },
  computed: {
    state(): GameState {
      return StateCache.getState();
    }
  },
  data() {
    return {
      Language,
      NumberFormatter,

      upgradeDelta: true,
      modifiersDelta: true,
    }
  },
  methods: {
    earn() {
      this.state.money.earn();
      this.state.extraClicks.earn();

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

      this.$forceUpdate();
    },

    checkModifiers() {
      const b = this.state.extraClicks.canAfford(this.state.money.amount);
      const c = this.state.incomeBonus.canAfford(this.state.money.amount);

      return b || c;
    },

    playSound() {
      const a = new Audio("/snd/interface-124464.mp3");
      a.play();
    }
  }
});
