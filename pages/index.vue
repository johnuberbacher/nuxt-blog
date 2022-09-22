<template>
  <div class="gap-5 md:columns-2 xl:columns-3 px-5">
    <div class="mb-10" v-bind:key="blog.title" v-for="(blog, index) in blogStore.blogs">
      <Card
        :index="index"
        :title="blog.title"
        :imageUrl="blog.imageUrl"
        :author="blog.author"
        :dateTime="blog.dateTime"
        :category="blogStore.categories[blogStore.blogs[index].category]"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useBlogStore } from "@/stores/blogs";
const blogStore = useBlogStore();
</script>
