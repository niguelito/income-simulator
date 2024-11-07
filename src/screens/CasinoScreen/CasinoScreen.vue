<template>
    <div :hidden="isHelpOpened">
        <h2>{{ Language.translatable("screen.casino") }}</h2>
        <p>{{ Language.translatable("game.money", NumberFormatter.formatText(Math.floor(state.money.amount))) }}</p>

        <div id="casino">
            <h3 class="slot" v-text="symbol1.symbol"></h3>
            <h3 class="slot" v-text="symbol2.symbol"></h3>
            <h3 class="slot" v-text="symbol3.symbol"></h3>
        </div>

        <div id="bid">
            <input type="number" v-model="bidAmount" min="1">
            
            <br>

            <button @click="gamble" v-bind:disabled="isGambling">{{ Language.translatable("screen.casino.gamble") }}</button>
            <button @click="allIn" v-bind:disabled="isGambling">{{ Language.translatable("screen.casino.allIn") }}</button>

            <p>{{ winMessage }}</p>
        </div>

        <button @click="isHelpOpened = true" v-bind:disabled="isGambling">{{ Language.translatable("screen.casino.help") }}</button>
    </div>
    <div id="help" :hidden="!isHelpOpened">
        <div id="help-content">
            <h2>{{ Language.translatable("screen.casino.help") }}</h2>

            <p v-text="Language.translatable('screen.casino.help.description')"></p>

            <p v-text="Language.translatable('screen.casino.help.symbols', CasinoAlgorithm.casinoSymbols.length)"></p>

            <table id="symbols">
                <thead>
                    <tr>
                        <td v-text="Language.translatable('screen.casino.help.symbols.symbol')"></td>
                        <td v-text="Language.translatable('screen.casino.help.symbols.status')"></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="symbol in CasinoAlgorithm.casinoSymbols">
                        <td v-text="symbol.symbol" class="symbol"></td>
                        <td v-text="SymbolStatus.getComponent(symbol.status)"></td>
                    </tr>
                </tbody>
            </table>

            <p v-text="Language.translatable('screen.casino.help.symbols.types')"></p>

            <div id="prizes">
                <ul>
                    <li v-text="Language.translatable('screen.casino.help.symbols.types.none')"></li>
                    <li v-text="Language.translatable('screen.casino.help.symbols.types.small')"></li>
                    <li v-text="Language.translatable('screen.casino.help.symbols.types.small2')"></li>
                    <li v-text="Language.translatable('screen.casino.help.symbols.types.medium')"></li>
                    <li v-text="Language.translatable('screen.casino.help.symbols.types.medium2')"></li>
                    <li v-text="Language.translatable('screen.casino.help.symbols.types.large')"></li>
                    <li v-text="Language.translatable('screen.casino.help.symbols.types.large2')"></li>
                    <li v-text="Language.translatable('screen.casino.help.symbols.types.large3')"></li>
                    <li v-text="Language.translatable('screen.casino.help.symbols.types.jackpot')"></li>
                    <li v-text="Language.translatable('screen.casino.help.symbols.types.jackpot2')"></li>
                    <li v-text="Language.translatable('screen.casino.help.symbols.types.goldrush')"></li>
                </ul>
            </div>
        </div>

        <br>

        <button @click="isHelpOpened = false">{{ Language.translatable("screen.casino.help.close") }}</button>
    </div>
</template>

<script lang="ts" src="./CasinoScreen"></script>
<style lang="css" src="./CasinoScreen.css" scoped></style>