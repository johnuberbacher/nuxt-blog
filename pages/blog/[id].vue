
<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-9 mb-5">
                <BlogHero />
                <p>{{ store.blogs[this.$route.params.id].body }}</p>
                <hr class="my-5" />
                <h5 class="d-flex flex-row align-items-start justify-content-between">Comments</h5>
                <BlogComment />
            </div>
            <div class="col-12 col-lg-3">
                <BlogRightSideBar />
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
            title: 'Blog'
        };
    },
}
</script>