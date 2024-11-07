import { defineComponent } from "vue";
import { GameSaveHandler, StateCache } from "../../game/GameState";
import Language from "../../lang/Language";
import { I18n } from "../../lang/Language";
import AppEvents from "../../AppEvents";
import Screens from "../../Screens";

export default defineComponent({
    data() {
        return {
            Language,
            I18n,

            selectedLanguage: I18n.getInstance().getSelectedLanguage().localization
        }
    },
    computed: {
        state() {
            return StateCache.getState();
        }
    },
    methods: {
        changeLanguage() {
            console.log('Changing language to ' + this.selectedLanguage);
            this.state.lang = this.selectedLanguage;
            I18n.getInstance().refresh();

            AppEvents.emit("refresh");

            this.$forceUpdate();
        },

        exportSave() {
            const exported = GameSaveHandler.export(this.state);
            const blob = new Blob([exported], {type: 'text/plain'});
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'save.txt';
            document.body.appendChild(link);
            link.click();
            link.remove();
        },

        importSave() {
            const e = (document.getElementById("import") as HTMLInputElement);

            if (e.files == null) return;

            const file = e.files[0];

            this.readFile(file);
        },

        async readFile(file: File) {
            try {
                const r = await file.text();

                const s = GameSaveHandler.parseSave(r, true);

                StateCache.updateState(s);

                AppEvents.emit('set-screen', Screens.MONEY_SCREEN);
                AppEvents.emit('refresh');
            } catch (e) {
                alert(I18n.getInstance().translate("screen.settings.parseError"));
            }
        },

        resetSave() {
            const n = GameSaveHandler.createNewSave();
            StateCache.updateState(n);

            AppEvents.emit('set-screen', Screens.MONEY_SCREEN);
            AppEvents.emit('refresh');
        }
    }
})