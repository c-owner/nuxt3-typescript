<template>
    <div class="snap-x">

        <div class="snap-center text-center py-6">
            <div class="my-0 mx-auto max-w-sm rounded overflow-hidden shadow-lg mb-4 dark:bg-gray-900">
                <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                <div class="px-6 py-4 pb-2">
                    <div class="font-bold text-xl mb-2 dark:text-white">
                        날씨가 너무 추워요
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 text-base">

                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="badge mr-2 cursor-pointer">#photography</span>
                    <span class="badge mr-2 cursor-pointer">#travel</span>
                    <span class="badge cursor-pointer">#winter</span>
                </div>
            </div>
            <NuxtLink to="/about">
                About
            </NuxtLink>
        </div>

        <div id="slide-wrap" class="snap-x flex">
            <div class="snap-start cursor-pointer">
                <img class="w-64 h-32" src="~/assets/images/1_temp.jpg" alt="Sunset in the mountains" />
            </div>
            <div class="snap-start cursor-pointer">
                <img class="w-64 h-32" src="~/assets/images/2_temp.jpg" alt="Sunset in the mountains" />
            </div>
            <div class="snap-start cursor-pointer">
                <img class="w-64 h-32" src="~/assets/images/3_temp.jpg" alt="Sunset in the mountains" />
            </div>
            <div class="snap-start cursor-pointer">
                <img class="w-64 h-32" src="~/assets/images/4_temp.jpg" alt="Sunset in the mountains" />
            </div>
            <div class="snap-start cursor-pointer">
                <img class="w-64 h-32" src="~/assets/images/5_temp.jpg" alt="Sunset in the mountains" />
            </div>
            <div class="snap-start cursor-pointer">
                <img class="w-64 h-32" src="~/assets/images/6_temp.jpg" alt="Sunset in the mountains" />
            </div>
            <div class="snap-start cursor-pointer">
                <img class="w-64 h-32" src="~/assets/images/7_temp.jpg" alt="Sunset in the mountains" />
            </div>

        </div>

    </div>
</template>

<script lang="ts">
export default {
    name: "index",
    data() {
        return {

        }
    },
    mounted() {
    },
}
</script>

<style lang="postcss" scoped>
.badge {
    @apply inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200;
    
    &:hover {
        @apply bg-gray-300;
    }
}
</style>
