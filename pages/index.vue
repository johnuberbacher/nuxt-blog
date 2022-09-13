<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 mb-5">
                <div
                    class="bg-primary p-5 h-100 d-flex flex-column justify-content-center text-center align-items-center rounded-4">
                    <h1 class="text-white">Nuxt&nbsp;3 + Pinia + Bootstrap</h1>
                </div>
            </div>
            <div class="col-md-4 mb-5" v-bind:key="blog.title" v-for="(blog, index) in store.blogs">
                <Card 
                :index="index" 
                :title="blog.title" 
                :imageUrl="blog.imageUrl" 
                :author="blog.author"
                :category="store.categories[store.blogs[index].category]" />
            </div>
        </div>
    </div>
</template>

<script>
import { useBlogStore } from '@/stores/blogs'

export default {
    setup() {
        const store = useBlogStore()
        return {
            store,
        }
    },
    head() {
        return {
            title: "Home"
        };
    }
}

</script>