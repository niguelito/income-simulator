<script lang="ts">
import { defineComponent } from 'vue';
import Component from '../lang/Component';
import Language from '../lang/Language';

interface Msg {
    message: Component,
    minAmount: number
}

const messages: Msg[] = [
    createMessage("wealthmessage.homeless", 0),
    createMessage("wealthmessage.broke", 500),
    createMessage("wealthmessage.tipi", 1_000),
    createMessage("wealthmessage.shack", 5_000),
    createMessage("wealthmessage.mrbreast", 10_000),
    createMessage("wealthmessage.minimumWage", 30_000),
    createMessage("wealthmessage.taxes", 50_000),
    createMessage("wealthmessage.cheapApartment", 70_000),
    createMessage("wealthmessage.mrbeast", 100_000),
    createMessage("wealthmessage.rent", 200_000),
    createMessage("wealthmessage.apple", 600_000),
    createMessage("wealthmessage.house", 1_100_000),
    createMessage("wealthmessage.taylorswift", 5_000_000),
    createMessage("wealthmessage.rollsroyce", 11_000_000),
    createMessage("wealthmessage.beverlyhills", 23_500_000),
    createMessage("wealthmessage.yacht", 78_000_000),
    createMessage("wealthmessage.squidgames", 500_000_000),
    createMessage("wealthmessage.monaLisa", 780_000_000),
    createMessage("wealthmessage.grass", 1_000_000_000),
    createMessage("wealthmessage.africa", 300_000_000_000),
    createMessage("wealthmessage.racism", 1_200_000_000_000),
    createMessage("wealthmessage.earth", 500_500_000_000_000),
    createMessage("wealthmessage.wtf", 1_000_000_000_000_000),
    createMessage("wealthmessage.mars", 400_000_000_000_000_000.0),
    createMessage('wealthmessage.solarSystem', 1_000_000_000_000_000_000.0),
    createMessage('wealthmessage.zeros', 1_000_000_000_000_000_000_000.0),
    createMessage('wealthmessage.universe', 1_000_000_000_000_000_000_000_000.0),
    createMessage("wealthmessage.number", 1_000_000_000_000_000_000_000_000_000.0),
    createMessage("wealthmessage.intlimit", 1_000_000_000_000_000_000_000_000_000_000.0),
    createMessage("wealthmessage.money", 1_000_000_000_000_000_000_000_000_000_000_000.0)
]

function createMessage(message: string, minAmount: number): Msg {
    return {
        message: Language.translatable(message),
        minAmount
    }
}

export default defineComponent({
    props: {
        amount: {
            type: Number,
            required: true
        }
    },

    computed: {
        message(): Component {
            let message: Msg | null = null;
            const a = messages.reverse();
            let i = 0;

            while (message == null) {
                if (a[i].minAmount <= this.amount) message = a[i];
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
