<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5">
    <div class="lg:col-span-2">
      <BlogHero></BlogHero>
      <p class="dark:text-white">{{ blogStore.blogs[this.$route.params.id].body }}</p>
      <hr class="mt-5 mb-10 dark:border-gray-700" />
      <div
        class="d-flex flex-row align-items-start justify-content-between dark:text-white text-xl font-semibold"
      >
        Comments
      </div>
      <div v-bind:key="index" v-for="(comment, index) in commentStore.comments">
        <BlogComment
          :commentAuthor="comment.commentAuthor"
          :commentBody="comment.commentBody"
          :commentDateTime="comment.dateTime"
          v-if="comment.blogIndex == this.$route.params.id"
        >
        </BlogComment>
      </div>
    </div>
    <BlogRightSideBar></BlogRightSideBar>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useBlogStore } from "@/stores/blogs";
import { useCommentStore } from "@/stores/comments";
const blogStore = useBlogStore();
const commentStore = useCommentStore();
</script>
