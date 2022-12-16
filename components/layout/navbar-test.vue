<template>
    <div class="navbar relative dark:bg-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="w-full flex justify-between border-gray-100">
                <div class="flex justify-between w-1/2 md:min-w-0 py-6 pr-3">
                    <div>
                        <NuxtLink to="/" class="text-white">Home</NuxtLink>
                    </div>
                    <div>
                        <NuxtLink to="/about" class="text-white">About</NuxtLink>
                    </div>
                    <div>
                        <NuxtLink to="/login" class="text-white">login</NuxtLink>
                    </div>

                </div>
                <div class="flex justify-between w-1/2 md:min-w-0 py-6 pl-3">

                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useState } from "#app";
import { Theme } from "shiki-es";

const user = useState("user");
const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme;
}

console.log('%c Welcome!', 'background-color:green; color:#ffffff;');

</script>

<style lang="postcss">

</style>
