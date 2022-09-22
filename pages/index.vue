<template>
  <div class="gap-5 md:columns-2 xl:columns-3 px-5">
    <div class="mb-10" v-bind:key="blog.title" v-for="(blog, index) in store.blogs">
      <Card
        :index="index"
        :title="blog.title"
        :imageUrl="blog.imageUrl"
        :author="blog.author"
        :dateTime="blog.dateTime"
        :category="store.categories[store.blogs[index].category]"
      />
    </div>
  </div>
</template>

<script>
import { useBlogStore } from "@/stores/blogs";

export default {
  setup() {
    const store = useBlogStore();
    return {
      store,
    };
  },
  head() {
    return {
      title: "Home",
    };
  },
};
</script>
