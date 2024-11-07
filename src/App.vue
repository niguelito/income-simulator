<script lang="ts" src="./script.ts"></script>

<template>
  <div v-if="hasLoaded" id="game">
    <h1>{{ Language.translatable("game.title") }}</h1>

    <ScreenBrowser :callback="setScreen" :highlightUpgrades="highlightUpgrades" :higlightModifiers="highlightModifiers" :disableButtons="disableScreennav" />

    <MoneyScreen v-if="currentScreen == Screens.MONEY_SCREEN" />
    <UpgradesScreen v-else-if="currentScreen == Screens.UPGRADE_SCREEN" />
    <ModifiersScreen v-else-if="currentScreen == Screens.MODIFIERS_SCREEN" />
    <StatisticsScreen v-else-if="currentScreen == Screens.STATISTICS_SCREEN" />
    <CasinoScreen v-else-if="currentScreen == Screens.CASINO_SCREEN" />
    <PrestigeScreen v-else-if="currentScreen == Screens.PRESTIGE_SCREEN" />
    <SettingsScreen v-else-if="currentScreen == Screens.SETTINGS_SCREEN" />

    <div id="blockInputs" v-if="blockInputs"></div>
  </div>
  <div v-else>
    <h1>Loading...</h1>
  </div>
</template>
