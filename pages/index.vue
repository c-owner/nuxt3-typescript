<template>
    <div class="py-3 snap-x">

        <div class="snap-center">
            <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4 dark:bg-gray-900">
                <img
                    class="w-full"
                    src="https://tailwindcss.com/img/card-top.jpg"
                    alt="Sunset in the mountains"
                />
                <div class="px-6 py-4 pb-2">
                    <div class="font-bold text-xl mb-2 dark:text-white">
                        The Coldest Sunset
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                        nihil.
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="badge mr-2">#photography</span>
                    <span class="badge mr-2">#travel</span>
                    <span class="badge">#winter</span>
                </div>
            </div>
            <NuxtLink to="/about" >
                <ButtonDarkMode />
            </NuxtLink>
        </div>

        <div class="snap-x flex ...">
            <div class="snap-start ...">
                <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
            <div class="snap-start ...">
                <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
            <div class="snap-start ...">
                <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
            <div class="snap-start ...">
                <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
            <div class="snap-start ...">
                <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
            <div class="snap-start ...">
                <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style lang="postcss" scoped>
.badge {
    @apply inline-block bg-gray-200 dark:bg-gray-700  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200;
    &:hover {
        @apply bg-gray-300;
    }
}
</style>
