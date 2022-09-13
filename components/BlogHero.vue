<template>
  <div class="blog-img rounded-4 mb-4 position-relative" :style="{
    'background-image': 'url('+ store.blogs[this.$route.params.id].imageUrl +'',
  }">
    <span
      class="blog-category fs-10 shadow bg-primary px-3 py-2 rounded-pill text-white fw-bold text-uppercase position-absolute">
      {{store.categories[store.blogs[this.$route.params.id].category]}}</span>
  </div>
  <h1 class="m-0">{{store.blogs[this.$route.params.id].title}}
  </h1>
  <div class="d-flex flex-row align-items-center mt-4">
    <div class="user-img rounded-circle me-3">
      <div class="bg-primary"></div>
    </div>
    <div class="d-flex flex-column align-items-start justify-content-center text-left">
      <div class="fw-bold">{{ store.blogs[this.$route.params.id].author }}</div>
      <div class="fs-7">
        <i class="bi bi-calendar2-event-fill me-2 text-primary small"></i>September 24, 2022
      </div>
    </div>
  </div>
  <hr class="mt-4 mb-5" />
</template>

<script>
import { useBlogStore } from '@/stores/blogs'

export default {
  setup() {
    const store = useBlogStore()
    return {
      store,
    }
  },
}
</script>

<style lang="scss" scoped>
.blog-img {
  height: 0;
  padding-bottom: 33%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: var(--bs-secondary);

  &:hover {
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  }
}

.blog-category {
  top: 1rem;
  right: 1rem;
}

.user-img {
  width: 48px;
  height: 48px;
  background: url('https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>