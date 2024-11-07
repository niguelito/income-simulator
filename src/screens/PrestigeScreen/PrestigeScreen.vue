<template>
    <div id="prestige">
        <h2>{{ Language.translatable('screen.prestige') }}</h2>

        <p>{{ Language.translatable("screen.prestige.prestige", state.prestige.amount, state.prestige.getDisplayMultiplier()) }}</p>

        <p v-text="Language.translatable('screen.prestige.description')"></p>
        <p v-text="Language.translatable('screen.prestige.description2')"></p>

        <button v-bind:disabled="!state.prestige.canPrestige()" @click="prestige">
            <p>{{ Language.translatable("screen.prestige.button") }}</p>
            <p id="earning">{{ Language.translatable("screen.prestige.button2", state.prestige.earning) }}</p>
        </button>
    </div>
</template>

<script lang="ts" src="./PrestigeScreen"></script>
<style lang="css" src="./PrestigeScreen.css" scoped></style>