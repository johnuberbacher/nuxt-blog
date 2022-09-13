<template>
    <div class="blog-comment rounded-4 border p-4 mt-3">
        <div class="d-flex flex-row align-items-center">
            <div class="user-img rounded-circle me-3">
                <div class="bg-primary"></div>
            </div>
            <div class="d-flex flex-column align-items-start justify-content-center text-left">
                <div class="fw-bold fs-8">{{ store.blogs[this.$route.params.id].author }}</div>
                <div class="fw-semibold fs-10">
                    <i class="bi bi-calendar2-event-fill me-2 text-primary small"></i>September 24, 2022
                </div>
            </div>
        </div>
        <div class="mt-3">Hello!</div>
    </div>
</template>
  
<script>
import { useBlogStore } from '@/stores/blogs'
import { useCommentStore } from '@/stores/comments'

export default {
    setup() {
        const commentStore = useCommentStore()
        const store = useBlogStore()
        return {
            commentStore,
            store,
        }
    },
}
</script>
  
<style lang="scss" scoped>
.blog-comment {
    &:hover {
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    }

    .user-img {
        width: 36px;
        height: 36px;
        background: url('https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
}
</style>