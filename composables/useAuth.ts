import {useFetch, useRouter, useState} from '#app';
import {ISession} from "~/types/ISession";

export async function registerWithEmail(
    username: string,
    name: string,
    email: string,
    password: string
): Promise<FormValidation> {

    try {

        const {data, error} = await useFetch<ISession>('/api/auth/register', {
            method: 'POST',
            body: {username, name, email, password}
        })

        if (error.value) {
            type ErrorData = {
                data: ErrorData
            }

            const errorData = error.value as unknown as ErrorData
            const errors = errorData.data.data as unknown as string
            const res = JSON.parse(errors)
            const errorMap = new Map<string, { check: InputValidation; }>(Object.entries(res));

            return {hasErrors: true, errors: errorMap}
        }

        if (data) {
            useState('user').value = data;
            await useRouter().push('/dashboard');
        }

    } catch (e) {
        console.log('error : ' + e.toString())
    }
}

export async function useUser(): Promise<void> {

}
