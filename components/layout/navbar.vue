<template>
    <div class="navbar relative dark:bg-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="lex justify-between  border-b-2 border-gray-100">
                <div class="flex justify-between min-w-full md:min-w-0">
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/about">About</NuxtLink>
                    <NuxtLink to="/login">login</NuxtLink>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import {useState} from "#app";
import {Theme} from "shiki-es";

const user = useState("user");
const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme;
}

console.log('%c Welcome!', 'background-color:green; color:#ffffff;');

</script>

<style>
</style>
