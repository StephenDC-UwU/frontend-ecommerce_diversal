'use server'

import { cookies } from 'next/headers'
import axios from 'axios'
import { AuthResponse, User } from '@/types/user'

const STRAPI_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:1337'

export async function loginAction(prevState: unknown, formData: FormData) {
    const identifier = formData.get('email')
    const password = formData.get('password')

    if (!identifier || !password) {
        return { error: 'Please enter both email and password.' }
    }

    try {
        const { data } = await axios.post<AuthResponse>(`${STRAPI_URL}/api/auth/local`, {
            identifier,
            password,
        })

        const cookieStore = await cookies()
        cookieStore.set('jwt', data.jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        })

        return { success: true, user: data.user }
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
        console.error('Login error:', error.response?.data?.error || error.message)
        return {
            error: error.response?.data?.error?.message || 'Invalid credentials or server error.',
        }
    }
}

export async function registerAction(prevState: unknown, formData: FormData) {
    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')

    if (!username || !email || !password) {
        return { error: 'Please fill in all fields.' }
    }

    try {
        const { data } = await axios.post<AuthResponse>(`${STRAPI_URL}/api/auth/local/register`, {
            username,
            email,
            password,
        })

        const cookieStore = await cookies()
        cookieStore.set('jwt', data.jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        })

        return { success: true, user: data.user }
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
        console.error('Register error:', error.response?.data?.error || error.message)
        return {
            error: error.response?.data?.error?.message || 'Registration failed. Please try again.',
        }
    }
}

export async function logoutAction() {
    const cookieStore = await cookies()
    cookieStore.delete('jwt')
}

export async function getSession() {
    const cookieStore = await cookies()
    const jwt = cookieStore.get('jwt')?.value

    if (!jwt) return null

    try {
        const { data } = await axios.get<User>(`${STRAPI_URL}/api/users/me`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        return data
    } catch {
        return null
    }
}
