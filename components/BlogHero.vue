<template>
  <div>
    <div
      class="blog-img rounded-3xl mb-5 relative hover:shadow-lg bg-gray-800"
      :style="{
        'background-image': 'url(' + blogStore.blogs[this.$route.params.id].imageUrl + '',
      }"
    >
      <div
        class="text-xs shadow-md bg-primary px-3 py-2 rounded-full text-white font-bold uppercase absolute right-5 top-5"
      >
        {{ blogStore.categories[blogStore.blogs[this.$route.params.id].category] }}
      </div>
    </div>
    <h1 class="text-4xl dark:text-white my-10">
      {{ blogStore.blogs[this.$route.params.id].title }}
    </h1>
    <div class="flex flex-row items-center my-5">
      <div class="user-img rounded-full mr-4">
        <div class="bg-primary"></div>
      </div>
      <div>
        <div class="font-semibold dark:text-white">
          {{ blogStore.blogs[this.$route.params.id].author }}
        </div>
        <div class="text-xs text-gray-500 dark:text-gray-400">
          <i class="bi bi-calendar2-event-fill me-2 text-primary"></i
          >{{ blogStore.blogs[this.$route.params.id].dateTime }}
        </div>
      </div>
    </div>
    <hr class="my-5 dark:border-gray-700" />
  </div>
</template>

<script setup>
import { useBlogStore } from "@/stores/blogs";
const blogStore = useBlogStore();
</script>

<style lang="scss" scoped>
.blog-img {
  height: 0;
  padding-bottom: 56.25%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.user-img {
  width: 48px;
  height: 48px;
  background: url("https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
