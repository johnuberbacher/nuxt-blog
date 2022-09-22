<template>
  <div
    class="fixed h-full w-full top-0 left-0 right-0 bottom-0 z-10 flex items-center content-center bg-black/90"
  >
    <div class="container mx-auto py-10 px-5" style="max-width: 640px">
      <div
        class="bg-white dark:bg-gray-700 rounded-xl overflow-hidden text-decoration-none text-dark block shadow-sm hover:shadow-xl"
      >
        <div class="bg-gray-800 text-white py-3 px-5 font-semibold">Add New Blog</div>
        <form class="p-5" v-on:submit.prevent="addNewBlog">
          <label class="relative block mb-3">
            <span class="sr-only">Blog Title</span>
            <input
              type="text"
              name="title"
              v-model="title"
              placeholder="Blog Title"
              aria-describedby="title"
              required
              class="block w-full bg-white border border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm placeholder:text-slate-400"
            />
          </label>
          <label class="relative block mb-3">
            <span class="sr-only">Category</span>
            <select
              type="text"
              name="selectedCategory"
              v-model="selectedCategory"
              aria-describedby="selectedCategory"
              required
              class="block w-full bg-white border border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm placeholder:text-slate-400"
            >
              <option
                v-bind:key="category"
                v-bind:value="index"
                v-for="(category, index) in blogStore.categories"
              >
                {{ category }}
              </option>
            </select>
          </label>
          <label class="relative block mb-3">
            <span class="sr-only">Image Url</span>
            <input
              type="text"
              name="imageUrl"
              v-model="imageUrl"
              placeholder="https://picsum.photos/1200/720"
              aria-describedby="imageUrl"
              required
              class="block w-full bg-white border border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm placeholder:text-slate-400"
            />
          </label>
          <label class="relative block mb-3">
            <span class="sr-only">Blog Author</span>
            <input
              type="text"
              name="author"
              v-model="author"
              placeholder="Blog Author"
              aria-describedby="author"
              required
              class="block w-full bg-white border border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm placeholder:text-slate-400"
            />
          </label>
          <label class="relative block mb-3">
            <span class="sr-only">Blog Content</span>
            <textarea
              type="text"
              name="body"
              v-model="body"
              placeholder="Blog Content"
              aria-describedby="body"
              rows="4"
              required
              class="block w-full bg-white border border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm placeholder:text-slate-400"
            ></textarea>
          </label>
          <button
            type="submit"
            class="bg-primary hover:bg-dark w-full py-3 text-sm text-white font-bold px-4 rounded-full"
          >
            Submit</button
          ><button
            @click="navigationStore.toggleAddBlogModal"
            type="button"
            class="bg-gray-600 hover:bg-dark w-full py-3 mt-3 text-sm text-white font-bold px-4 rounded-full"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useNavigationStore } from "@/stores/navigation";
import { useBlogStore } from "@/stores/blogs";

const blogStore = useBlogStore();
const navigationStore = useNavigationStore();

let title = ref("");
let imageUrl = ref("");
let author = ref("");
let body = ref("");
let selectedCategory = ref(0);

function addNewBlog() {
  blogStore.addBlog(
    title,
    imageUrl,
    author,
    body,
    selectedCategory,
    new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  );
  title = "";
  imageUrl = "";
  author = "";
  body = "";
  selectedCategory = 0;
  navigationStore.toggleAddBlogModal();
}
</script>
