<template>
    <p>{{ Language.translatable("screen.money.income", NumberFormatter.formatText(state.money.income)) }}</p>

    <div id="amount">
        <h2>{{ Language.translatable("screen.money") }}: </h2>
        <h1>{{ Language.translatable("game.currency", NumberFormatter.formatText(state.money.amount)) }}</h1>
    </div>

    <WealthMessage :amount="state.money.amount" />

    <button id="earn" @click="earn">{{ Language.translatable("screen.money.earn") }}</button>

    <div id="extra-clicks">
        <p>{{ Language.translatable('screen.money.extra') }}</p>
        <p>{{ Language.translatable('screen.money.extra.amount', Math.round(state.extraClicks.clicks * 100) / 100, Math.round(state.extraClicks.multiplier * 10) / 10) }}</p>
        <p><button 
            id="use" 
            @click="() => { state.extraClicks.use(state); $forceUpdate() }"
            v-bind:disabled="!state.extraClicks.canUse()"
            >{{ Language.translatable("screen.money.extra.use") }}
        </button></p>
    </div>
</template>

<script lang="ts" src="./MoneyScreen.ts"></script>
<style lang="css" src="./MoneyScreen.css" scoped></style>
