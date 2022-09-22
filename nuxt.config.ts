import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    css: [
        '@/assets/main.scss',
    ],
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt',]
})
