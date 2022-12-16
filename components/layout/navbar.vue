<template>
    <div class="navbar relative dark:bg-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between border-gray-100">
                <div class="flex justify-between min-w-full md:min-w-0 py-6">
                    <NuxtLink to="/" class="text-white">Home</NuxtLink>
                    <NuxtLink to="/about" class="text-white">About</NuxtLink>
                    <NuxtLink to="/login" class="text-white">login</NuxtLink>

                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useState } from "#app";
import { Theme } from "shiki-es";
import DarkModeButton from "~/components/button/DarkMode.vue";

const user = useState("user");
const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme;
}

console.log('%c Welcome!', 'background-color:green; color:#ffffff;');

</script>

<style>

</style>
