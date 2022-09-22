<template>
  <Modal
    v-if="addBlogModalActive"></Modal>
  <header class="w-100 bg-white dark:bg-gray-800 py-3 px-5 shadow-sm hover:shadow-xl">
    <div class="w-full flex flex-row items-center justify-between">
      <NuxtLink
        class="text-sm font-bold p-3 rounded-lg dark:text-white hover:text-white hover:bg-primary"
        to="/"
        active-class="active"
        >Home</NuxtLink>
      <div
        class="text-sm font-bold p-3 cursor-pointer rounded-lg dark:text-white hover:text-white hover:bg-primary"
        @click="navigationStore.toggleAddBlogModal"
      >
        Add Blog
      </div>
    </div>
  </header>
</template>
<script setup>

import { storeToRefs } from "pinia";
import { useNavigationStore } from "@/stores/navigation";

const navigationStore = useNavigationStore();
const { addBlogModalActive } = storeToRefs(navigationStore);

</script>
<style scoped></style>
