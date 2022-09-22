<template>
  <div
    class="blog-comment bg-white border dark:border-gray-600 dark:bg-gray-800 rounded-3xl p-5 my-5 hover:shadow-lg"
  >
    <div class="flex flex-row items-start">
      <div class="user-img rounded-circle mr-4">
        <div class="bg-primary"></div>
      </div>
      <div>
        <div class="font-bold dark:text-white">{{ props.commentAuthor }}</div>
        <div class="font-bold text-xs text-gray-500 dark:text-gray-400">
          {{ props.commentDateTime }}
        </div>
        <div class="mt-3 dark:text-white">{{ props.commentBody }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  "blogIndex",
  "commentAuthor",
  "commentBody",
  "commentDateTime",
]);
</script>

<style lang="scss" scoped>
.user-img {
  min-width: 36px;
  min-height: 36px;
  width: 36px;
  height: 36px;
  background: url("https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
