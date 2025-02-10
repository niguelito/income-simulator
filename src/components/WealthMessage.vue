<script lang="ts">
import { defineComponent } from 'vue';
import Component from '../lang/Component';
import Language from '../lang/Language';
import BigNumber from 'bignumber.js';

interface Msg {
    message: Component,
    minAmount: BigNumber
}

const messages: Msg[] = [
    createMessage("wealthmessage.homeless", new BigNumber(0)),
    createMessage("wealthmessage.broke", new BigNumber(500)),
    createMessage("wealthmessage.tipi", new BigNumber(1000)),
    createMessage("wealthmessage.shack", new BigNumber(5000)),
    createMessage("wealthmessage.mrbreast", new BigNumber(10000)),
    createMessage("wealthmessage.minimumWage", new BigNumber(30000)),
    createMessage("wealthmessage.taxes", new BigNumber(50000)),
    createMessage("wealthmessage.cheapApartment", new BigNumber(70000)),
    createMessage("wealthmessage.mrbeast", new BigNumber(100000)),
    createMessage("wealthmessage.rent", new BigNumber(200000)),
    createMessage("wealthmessage.apple", new BigNumber(600000)),
    createMessage("wealthmessage.house", new BigNumber(11e5)),
    createMessage("wealthmessage.taylorswift", new BigNumber(5e6)),
    createMessage("wealthmessage.rollsroyce", new BigNumber(11e6)),
    createMessage("wealthmessage.beverlyhills", new BigNumber(23e6)),
    createMessage("wealthmessage.yacht", new BigNumber(78e6)),
    createMessage("wealthmessage.squidgames", new BigNumber(5e8)),
    createMessage("wealthmessage.monaLisa", new BigNumber(78e7)),
    createMessage("wealthmessage.grass", new BigNumber(1e9)),
    createMessage("wealthmessage.africa", new BigNumber(3e11)),
    createMessage("wealthmessage.racism", new BigNumber(12e11)),
    createMessage("wealthmessage.earth", new BigNumber(5005e11)),
    createMessage("wealthmessage.wtf", new BigNumber(1e15)),
    createMessage("wealthmessage.mars", new BigNumber(4e17)),
    createMessage('wealthmessage.solarSystem', new BigNumber(1e18)),
    createMessage('wealthmessage.zeros', new BigNumber(1e21)),
    createMessage('wealthmessage.universe', new BigNumber(1e24)),
    createMessage("wealthmessage.number", new BigNumber(1e27)),
    createMessage("wealthmessage.intlimit", new BigNumber(1e30)),
    createMessage("wealthmessage.money", new BigNumber(1e33)),
    createMessage("wealthmessage.atoms", new BigNumber(10e80)),
    createMessage("wealthmessage.neutrinos", new BigNumber(10e130)),
    createMessage("wealthmessage.quantumstates", new BigNumber("100e860")),
    createMessage("wealthmessage.infinity", new BigNumber("100e997"))
]

function createMessage(message: string, minAmount: BigNumber): Msg {
    return {
        message: Language.translatable(message),
        minAmount
    }
}

export default defineComponent({
    props: {
        amount: {
            type: BigNumber,
            required: true
        }
    },

    computed: {
        message(): Component {
            let message: Msg | null = null;
            const a = messages.reverse();
            let i = 0;

            while (message == null) {
                if (a[i].minAmount.lessThanOrEqualTo(this.amount)) message = a[i];
                i++;
            }

            messages.reverse();

            return message.message;
        }
    }
})
</script>

<template>
    <p><i>{{ message }}</i></p>
</template>
