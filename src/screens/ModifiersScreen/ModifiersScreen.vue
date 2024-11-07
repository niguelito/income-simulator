<template>
    <div>
        <h2>{{ Language.translatable("screen.modifiers") }}</h2>
        <p v-text="Language.translatable('game.money', NumberFormatter.formatText(state.money.amount))"></p>

        <hr>

        <div class="modifier">
            <div class="info">
                <h3>{{ Language.translatable("screen.modifiers.incomeBonus") }}</h3>
                <p>{{ Language.translatable("screen.modifiers.incomeBonus.description") }}</p>
            </div>
            <div class="purchase">
                <p>{{ (state.incomeBonus.price ? Language.translatable("game.currency", NumberFormatter.formatText(state.incomeBonus.price)) : Language.translatable("screen.modifiers.maxed")) }}</p>
                <button 
                    v-bind:disabled="!state.incomeBonus.canAfford(state.money.amount)" 
                    @click="() => { state.incomeBonus.buy(state); $forceUpdate() }">
                    {{ Language.translatable("screen.modifiers.buy") }}
                </button>
            </div>
        </div>

        <hr>

        <div class="modifier">
            <div class="info">
                <h3>{{ Language.translatable("screen.modifiers.extraClicks") }}</h3>
                <p>{{ Language.translatable("screen.modifiers.extraClicks.description") }}</p>
            </div>
            <div class="purchase">
                <p>{{ (state.extraClicks.price ? Language.translatable("game.currency", NumberFormatter.formatText(state.extraClicks.price)) : Language.translatable("screen.modifiers.maxed")) }}</p>
                <button 
                    v-bind:disabled="!state.extraClicks.canAfford(state.money.amount)"
                    @click="() => { state.extraClicks.buy(state); $forceUpdate() }">
                    {{ Language.translatable("screen.modifiers.buy") }}
                </button>
            </div>
        </div>

        <hr>
    </div>
</template>

<script lang="ts" src="./ModifiersScreen"></script>
<style lang="css" src="./ModifiersScreen.css" scoped></style>