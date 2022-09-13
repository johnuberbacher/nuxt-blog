<template>
  <div class="newsletter mb-4">
    <div class="title bg-dark rounded-2 text-white py-2 px-3 fw-semibold mb-3">
      <i class="bi bi-newspaper me-3"></i>Newsletter
    </div>
    <div class="bg-light p-3 rounded-3 fw-semibold">
      Etiam sit amet nisl purus in mollis nunc. Sed velit duis dignissim sodales
      ut eu sem integer. Egestas dui id ornare arcu placerat.
      <form class="mt-4">
        <div class="mb-3">
          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Name"
            aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"
            aria-describedby="emailHelp" />
        </div>
        <button type="submit" class="btn btn-success w-100">
          Join Newsletter
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

export default {
  setup() {
    const store = useBlogStore()
    return {
      store,
    }
  },
}
</script>