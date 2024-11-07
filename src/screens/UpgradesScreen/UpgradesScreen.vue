<template>
    <div>
        <h2>{{ Language.translatable("screen.upgrades") }}</h2>
        <p>{{ Language.translatable("game.money", NumberFormatter.formatText(state.money.amount)) }}</p>

        <div id="upgrades">
            <div class="upgrade" v-for="(upgrade, i) in state.upgrades.getList()" :key="i">
                <div v-if="upgrade.hasUnlocked">
                    <div class="info">
                        <p><strong>{{ upgrade.name }}</strong></p>
                        <p>{{ Language.translatable("screen.upgrades.bonus", NumberFormatter.formatText(upgrade.modifier)) }}</p>
                    </div>
                    <div class="unlock">
                        <button v-if="!upgrade.hasPurchased" @click="() => {
                            upgrade.purchase(state); 
                            $forceUpdate();
                            AppEvents.emit('rerender-screenbrowser');
                        }" v-bind:disabled="!upgrade.canAfford(state.money.amount)"
                        :class="{ accent: upgrade.hasUnlocked && !upgrade.hasPurchased }"
                        >{{ Language.translatable("game.currency", NumberFormatter.formatText(upgrade.price)) }}</button>
                        <button v-else disabled>{{ Language.translatable("screen.upgrades.unlocked") }}</button>
                    </div>
                </div>
                <p v-else><i>{{ Language.translatable("screen.upgrades.locked") }}</i></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./UpgradesScreen"></script>
<style lang="css" src="./UpgradesScreen.css" scoped></style>