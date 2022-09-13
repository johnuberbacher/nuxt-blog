
<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-9 mb-5">
                <BlogHero />
                <p>{{ store.blogs[this.$route.params.id].body }}</p>
                <hr class="my-5" />
                <h5 class="d-flex flex-row align-items-start justify-content-between">Comments</h5>
                <div v-bind:key="index" v-for="(comment, index) in commentStore.comments">
                    <BlogComment 
                    :commentAuthor="comment.commentAuthor" 
                    :commentBody="comment.commentBody"
                    :commentDateTime="comment.dateTime" 
                    v-if="comment.blogIndex == this.$route.params.id">
                    </BlogComment>
                </div>
            </div>
            <div class="col-12 col-lg-3">
                <BlogRightSideBar />
            </div>
        </div>
    </div>
</template>

<script>
import { useBlogStore } from '@/stores/blogs'
import { useCommentStore } from '@/stores/comments'

export default {
    setup() {
        const store = useBlogStore()
        const commentStore = useCommentStore()
        return {
            store,
            commentStore,
        }
    },
    head() {
        return {
            title: 'Blog'
        };
    },
}
</script>