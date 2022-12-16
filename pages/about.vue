<template>
    <div class="p-4">
        <h1 class="text-5xl">About page</h1>
        <p>
            <NuxtLink to="/" class="text-blue-500 underline">Home page</NuxtLink>
        </p>
        <h3 class="text-3xl mt-2">Tailwind config:</h3>
        <pre class="dark:text-white bg-gray-200 dark:bg-gray-700 p-3 rounded">{{ JSON.stringify(tailwindConfig, null, 2) }}
        </pre>
    </div>
</template>

<script>
import tailwindConfig from "~/tailwind.config.js";

export default {
    name: "about",
    data() {
        return {
            tailwindConfig
        }
    },
}
</script>