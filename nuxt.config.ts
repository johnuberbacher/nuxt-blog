import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    css: [
        '@/assets/main.scss',
    ],
    target: 'static',
    mode: 'universal',
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt',]
})
