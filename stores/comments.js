import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comments', {
  state: () => ({
    comments: [
      {
        "blogIndex": 0,
        "commentAuthor": "John Uberbacher",
        "commentBody": "Ut illum labore sed quibusdam possimus aut voluptate facilis. In quod neque vel quia maxime ut minus. Et esse eveniet aut aspernatur omnis exercitationem magnam. Et dolorem voluptatem qui repellat iusto ab veniam consectetur sed voluptatem quos aut neque facilis ut beatae minus.",
        "dateTime": 'Tuesday, Sep 13, 202'
      },
      {
        "blogIndex": 1,
        "commentAuthor": "Bruce Banner",
        "commentBody": "Ut illum labore sed quibusdam possimus aut voluptate facilis. In quod neque vel quia maxime ut minus. Et esse eveniet aut aspernatur omnis exercitationem magnam. Et dolorem voluptatem qui repellat iusto ab veniam consectetur sed voluptatem quos aut neque facilis ut beatae minus.",
        "dateTime": 'Tuesday, Sep 13, 2022'
      },
      {
        "blogIndex": 5,
        "commentAuthor": "Stephen Strange",
        "commentBody": "Ut illum labore sed quibusdam possimus aut voluptate facilis. In quod neque vel quia maxime ut minus. Et esse eveniet aut aspernatur omnis exercitationem magnam. Et dolorem voluptatem qui repellat iusto ab veniam consectetur sed voluptatem quos aut neque facilis ut beatae minus.",
        "dateTime": 'Tuesday, Sep 13, 2022'
      },
    ],
  }),
  actions: {
    async addComment(blogIndex, commentAuthor, commentBody, dateTime) {
      this.comments.push({blogIndex, commentAuthor, commentBody, dateTime })
    },
  },
})