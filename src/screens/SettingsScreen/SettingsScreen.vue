<template>
    <div>
        <h2>{{ Language.translatable('screen.settings') }}</h2>

        <div id="lang">
            <p>{{ Language.translatable("screen.settings.language") }}</p>
            <select v-model="selectedLanguage" @change="changeLanguage">
                <option v-for="lang in I18n.getInstance().getLanguages()" :value="lang.localization">{{ lang.name }}</option>
            </select>
        </div>

        <div id="save">
            <button @click="exportSave">{{ Language.translatable("screen.settings.export") }}</button>
            
            <button><label for="import" style="cursor: pointer;">{{ Language.translatable("screen.settings.import") }}</label></button>
            <input type="file" id="import" style="display: none;" @change="importSave">

            <button @click="resetSave">{{ Language.translatable("screen.settings.reset") }}</button>
        </div>
    </div>
</template>

<script lang="ts" src="./SettingsScreen"></script>
<style lang="css" src="./SettingsScreen.css" scoped></style>