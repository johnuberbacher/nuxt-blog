import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        'bootstrap/dist/css/bootstrap.min.css',
        'bootstrap-icons/font/bootstrap-icons.css',
        '@/assets/custom.scss',
        '@/assets/main.css',
    ],
    script: [
        {
            src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
        }
    ],
    modules: [
        '@pinia/nuxt',
    ],
})
