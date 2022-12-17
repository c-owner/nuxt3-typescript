<script setup lang="ts">

import {ref} from "@vue/reactivity";
import {registerWithEmail} from "~/composables/useAuth";

const email = ref(null);
const password = ref(null);
const username = ref(null);
const name = ref(null);
const errors = ref(new Map())
let response = ref<FormValidation>({hasErrors: false})

async function postRegisterForm() {
    response.value = await registerWithEmail(username.value, name.value, email.value, password.value);
    errors.value = response.value.errors;
};

</script>

<template>
    <div class="dark:bg-slate-800 h-screen">
        <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full">

                <div class="flex">
                    <img class="mx-auto h-24 w-auto" src="/img/logo_clear_fsj.png" alt="full stack corner logo"/>
                    <h1 class="py-9 text-center text-5xl font-extrabold text-gray-900 dark:text-gray-400">
                        Full Stack Corner
                    </h1>
                </div>
                <div>
                    <h2 class="text-center text-3xl font-extrabold mt-5 text-gray-900 dark:text-white">
                        Sign Up
                    </h2>
                </div>
                <div
                    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert">
                    <strong class="font-bold">Oops, try again! </strong>

                    <ul class="block sm:inline">
                        <li v-for="[key, value] in errors">
                            {{ value.check.errorMessage }}
                        </li>
                    </ul>


                </div>
                <form @submit.prevent class="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true"/>
                    <div class="rounded-md shadow-sm -space-y-px mb-1">
                        <div>
                            <label for="name" class="sr-only">Name</label>
                            <input v-model="name" id="name" name="name" required
                                   class="appearance-none dark:bg-slate-500 dark:text-white dark:placeholder-white rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                   :class="errors.has('name') ? ' border-red-500' : ''" placeholder="Name"/>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>
