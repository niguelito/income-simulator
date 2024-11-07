import { defineComponent } from 'vue';
import { GameSaveHandler, StateCache } from './game/GameState';
import Screens from './Screens';
import Language from './lang/Language';
import AppEvents from './AppEvents';
import ScreenBrowser from './components/ScreenBrowser.vue';
import MoneyScreen from './screens/MoneyScreen/MoneyScreen.vue';
import UpgradesScreen from './screens/UpgradesScreen/UpgradesScreen.vue';
import ModifiersScreen from './screens/ModifiersScreen/ModifiersScreen.vue';
import StatisticsScreen from './screens/StatisticsScreen/StatisticsScreen.vue';
import CasinoScreen from './screens/CasinoScreen/CasinoScreen.vue';
import PrestigeScreen from './screens/PrestigeScreen/PrestigeScreen.vue';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen.vue';

export default defineComponent({
  components: {
    ScreenBrowser, 
    MoneyScreen, 
    UpgradesScreen, 
    ModifiersScreen, 
    StatisticsScreen, 
    CasinoScreen, 
    PrestigeScreen,
    SettingsScreen
  },
  mounted() {
    this.$nextTick(() => {
      GameSaveHandler.load();
    
      this.hasLoaded = true;

      // save every 700 ms
      setInterval(() => {
        GameSaveHandler.save(StateCache.getState());
      }, 500);

      AppEvents.addListener('refresh', () => {
        this.$forceUpdate();
      });

      AppEvents.addListener('highlightUpgrades', (highlight: boolean) => {
        this.highlightUpgrades = highlight;
        console.log('Highlighting upgrades: ' + (highlight ? 'on' : 'off'));
      });

      AppEvents.addListener('highlightModifiers', (highlight: boolean) => {
        this.highlightModifiers = highlight;
        console.log('Highlighting modifiers: ' + (highlight ? 'on' : 'off'));
      });

      AppEvents.addListener('disable-screen-nav', (disable: boolean) => {
        this.disableScreennav = disable;
        console.log('Disabling screen navigation: ' + (disable ? 'on' : 'off'));
      });

      AppEvents.addListener('block-inputs', (block: boolean) => {
        this.blockInputs = block;
        console.log('Blocking inputs: ' + (block ? 'on' : 'off'));
      });

      AppEvents.addListener('select-block', (callback: (e: HTMLDivElement) => void) => {
        const el = document.getElementById('blockInputs');
        if (el) {
          console.log("Selecting block element")
          callback(el as HTMLDivElement);
        }
      });
    });
  },
  data() {
    return {
      StateCache: StateCache,
      hasLoaded: false,
      currentScreen: Screens.MONEY_SCREEN,
      Screens,
      Language,
      highlightUpgrades: false,
      highlightModifiers: false,
      disableScreennav: false,
      blockInputs: false,
    }
  },
  unmounted() {
    GameSaveHandler.save(StateCache.getState());
  },
  methods: {
    setScreen(screen: number) {
      this.currentScreen = screen;
    }
  }
});
