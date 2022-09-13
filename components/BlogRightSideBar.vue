<template>
  <div class="newsletter mb-4">
    <div class="title bg-dark rounded-2 text-white py-2 px-3 fw-semibold mb-3">
      <i class="bi bi-newspaper me-3"></i>Leave a Comment
    </div>
    <div class="bg-light p-3 rounded-3 fw-semibold">
      Etiam sit amet nisl purus in mollis nunc. Sed velit duis dignissim sodales
      ut eu sem integer. Egestas dui id ornare arcu placerat.
      <form class="mt-4" v-on:submit.prevent="onSubmit">
        <div class="mb-3">
          <input type="text" class="form-control" v-model="name" required placeholder="Your Name"
            aria-describedby="name" />
        </div>
        <div class="mb-3">
          <textarea type="text" class="form-control" rows="4" v-model="comment" required placeholder="Your Comment"
            aria-describedby="comment"></textarea>
        </div>
        <button type="submit" class="btn btn-success w-100">
          Submit
        </button>
      </form>
    </div>
  </div>
  <div class="
        bg-light
        p-4
        mb-4
        rounded-2
        fw-semibold
        d-flex
        align-items-center
        justify-content-around
      ">
    <a href="#" class="link-secondary fs-5"><i class="bi bi-facebook"></i></a>
    <a href="#" class="link-secondary fs-5"><i class="bi bi-twitter"></i></a>
    <a href="#" class="link-secondary fs-5"><i class="bi bi-instagram"></i></a>
    <a href="#" class="link-secondary fs-5"><i class="bi bi-pinterest"></i></a>
  </div>
  <div class="recent">
    <div class="title bg-primary rounded-3 text-white py-2 px-3 fw-semibold mb-3">
      <i class="bi bi-layout-text-sidebar me-3"></i>Latest Articles
    </div>
    <div>
      <div v-bind:key="blog.title" v-for="(blog, index) in store.blogs.slice(0, 3)">
        <RecentArticle :index="index" :title="blog.title" :imageUrl="blog.imageUrl" :author="blog.author" />
      </div>
    </div>
  </div>
</template>

<script >
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
  data() {
    return {
      name: '',
      comment: '',
    }
  },
  methods: {
    onSubmit() {
      this.commentStore.addComment(this.$route.params.id, this.name, this.comment, new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) )
      this.name = ''
      this.comment = ''
    }
  }
}
</script>