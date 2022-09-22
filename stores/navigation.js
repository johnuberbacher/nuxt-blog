import { defineStore } from "pinia";

export const useNavigationStore = defineStore("navigation", {
  state: () => ({
    addBlogModalActive: false,
  }),
  actions: {
    toggleAddBlogModal() {
      this.addBlogModalActive = !this.addBlogModalActive;
    }, 
  },
});
