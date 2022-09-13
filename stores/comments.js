import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comments', {
  state: () => ({
    comments: [
      {
        "blogIndex": 0,
        "comment": "Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis!!!!!",
      },
      {
        "blogIndex": 1,
        "comment": "Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis!!!!!",
      },
    ],
  }),
  actions: {
    async addComment(title, comment) {
      this.blogs.push({ title, comment })
    },
  },
})