<template>
    <div>
        <h2>{{ Language.translatable("screen.statistics") }}</h2>

        <div id="money">
            <h3>{{ Language.translatable('screen.money') }}</h3>
            <p>{{ Language.translatable("game.money", NumberFormatter.formatText(state.money.amount)) }}</p>
            <p>{{ Language.translatable("screen.statistics.allTime", NumberFormatter.formatText(state.money.earnedAllTime)) }}</p>
            <p>{{ Language.translatable("screen.statistics.allTimeSpent", NumberFormatter.formatText(state.money.earnedAllTime.sub(state.money.amount))) }}</p>
        </div>

        <div id="income">
            <h3>{{ Language.translatable("screen.statistics.income") }}</h3>
            <p>{{ Language.translatable("screen.money.income", NumberFormatter.formatText(state.money.income)) }}</p>
            <p>{{ Language.translatable("screen.statistics.incomeBonus", state.incomeBonus.amount, state.incomeBonus.getDisplayMultiplier()) }}</p>
            <p>{{ Language.translatable("screen.statistics.prestigePoints", state.prestige.amount, state.prestige.getDisplayMultiplier()) }}</p>
            <p>{{ Language.translatable("screen.statistics.upgrades", state.upgrades.getAllUnlocked(), state.upgrades.getList().length + 1, NumberFormatter.formatText(state.upgrades.getGlobalModifier())) }}</p>
        </div>
    </div>
</template>

<script lang="ts" src="./StatisticsScreen"></script>