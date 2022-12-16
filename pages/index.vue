<template>
    <div class="snap-x">

        <div class="snap-center text-center py-6">
            <div class="my-0 mx-auto max-w-sm rounded overflow-hidden shadow-lg mb-4 dark:bg-gray-900">
                <img
                    class="w-full"
                    src="https://tailwindcss.com/img/card-top.jpg"
                    alt="Sunset in the mountains"
                />
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
            <NuxtLink to="/about" >
                <ButtonDarkMode />
            </NuxtLink>
        </div>
        <div id="slide-wrap" class="snap-x flex ">
        </div>

    </div>
</template>

<script>
export default {
    name: "index",
    setup() {
        let images = [
            { src: "~/assets/images/1_temp.jpg", width: 320, height: 160, alt: "1.temp" },
            { src: "~/assets/images/2_temp.jpg", width: 320, height: 160, alt: "2.temp" },
            { src: "~/assets/images/3_temp.jpg", width: 320, height: 160, alt: "3.temp" },
            { src: "~/assets/images/4_temp.jpg", width: 320, height: 160, alt: "4.temp" },
            { src: "~/assets/images/5_temp.jpg", width: 320, height: 160, alt: "5.temp" },
            { src: "~/assets/images/6_temp.jpg", width: 320, height: 160, alt: "6.temp" },
            { src: "~/assets/images/7_temp.jpg", width: 320, height: 160, alt: "7.temp" },
        ];
        return {
            images
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        let slideWrap = document.getElementById("slide-wrap");
        if (this.images.length > 0) {

            this.images.forEach((item, index) => {
                let snapStart = document.createElement("div");
                snapStart.classList.add("snap-start");
                snapStart.classList.add("cursor-pointer");
                slideWrap.appendChild(snapStart);

                let img = document.createElement("img");
                img.src = item.src;
                img.width = item.width;
                img.height = item.height;
                img.alt = item.alt;
                snapStart.appendChild(img);
            });

        }

    },
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
