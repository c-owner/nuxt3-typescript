<template>
    <button class="btn dark:bg-slate-800 dark:text-white" @click="movePage(to)">
        <slot>{{ text }}</slot>
    </button>
</template>

<script lang="ts">

import {useState} from "#app";

export default defineComponent({
    name: "detail",
    props: {
        text: {
            type: String,
            default: "Button",
        },
        to: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const user = useState("user");
        return {
            user,
        };
    },
    methods: {
        movePage(to: string) {
            if (to) {
                this.$router.push(to);
            }
        },
    },

});
</script>

<style lang="postcss" scoped>
.btn {
    @apply font-bold py-2 px-4 rounded;

    &.btn-blue {
        @apply bg-blue-500 text-white;

        &:hover {
            @apply bg-blue-700;
        }
    }
}
</style>
