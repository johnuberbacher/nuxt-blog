<template>
  <div>
    <div class="newsletter mb-10">
      <div class="bg-white dark:bg-gray-700 rounded-xl overflow-hidden text-decoration-none text-dark block shadow-sm hover:shadow-xl">
        <div class="bg-gray-800 text-white py-3 px-5 font-semibold">
          Leave a Comment
        </div>
        <form class="p-5" v-on:submit.prevent="onSubmit">
          <label class="relative block mb-3">
            <span class="sr-only">Search</span>
            <input
              type="text"
              name="search"
              v-model="name"
              placeholder="Your Name"
              aria-describedby="name"
              required
              class="block w-full bg-white border border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm placeholder:text-slate-400"
            />
          </label>
          <label class="relative block mb-3">
            <span class="sr-only">Search</span>
            <textarea
              type="text"
              name="comment"
              v-model="comment"
              placeholder="Your Comment"
              aria-describedby="comment"
              rows="4"
              required
              class="block w-full bg-white border border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm placeholder:text-slate-400"
            ></textarea>
          </label>
          <button type="submit" class="bg-primary hover:bg-dark w-full py-3 text-sm text-white font-bold px-4 rounded-full">Submit</button>
        </form>
      </div>
    </div>
    <!--<div
    class="bg-light p-4 mb-4 rounded-2 fw-semibold d-flex align-items-center justify-content-around"
  >
    <a href="#" class="link-secondary fs-5"><i class="bi bi-facebook"></i></a>
    <a href="#" class="link-secondary fs-5"><i class="bi bi-twitter"></i></a>
    <a href="#" class="link-secondary fs-5"><i class="bi bi-instagram"></i></a>
    <a href="#" class="link-secondary fs-5"><i class="bi bi-pinterest"></i></a>
  </div>-->
    <div class="recent">
      <div class="title bg-primary rounded-xl text-white py-3 px-5 font-semibold mb-3">
        <i class="bi bi-layout-text-sidebar me-3"></i>Latest Articles
      </div>
      <div>
        <div v-bind:key="blog.title" v-for="(blog, index) in store.blogs.slice(0, 3)">
          <RecentArticle
            :index="index"
            :title="blog.title"
            :imageUrl="blog.imageUrl"
            :dateTime="blog.dateTime"
            :author="blog.author"
          ></RecentArticle>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useBlogStore } from "@/stores/blogs";
import { useCommentStore } from "@/stores/comments";

export default {
  setup() {
    const store = useBlogStore();
    const commentStore = useCommentStore();
    return {
      store,
      commentStore,
    };
  },
  data() {
    return {
      name: "",
      comment: "",
    };
  },
  methods: {
    onSubmit() {
      this.commentStore.addComment(
        $route.params.id,
        this.name,
        this.comment,
        new Date().toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      );
      this.name = "";
      this.comment = "";
    },
  },
};
</script>
