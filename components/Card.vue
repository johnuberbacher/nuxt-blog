
<template>
    <NuxtLink class="blog text-decoration-none text-dark d-block" :to="'/blog/' + props.index">
        <div class="blog-img rounded-4 mb-3 position-relative"
            :style="{'background-image': 'url(' + props.imageUrl + ')'}">
            <span
                class="blog-category fs-10 shadow bg-dark px-3 py-2 rounded-pill text-white fw-bold text-uppercase position-absolute">
                {{ props.category }}</span>
        </div>
        <div class="card-body h-md-100 d-flex flex-column justify-content-between">
            <div>
                <h4 class="title mb-3">
                    {{props.title}}
                </h4>
                <div class="d-flex flex-row align-items-center mt-3">
                    <div class="user-img rounded-circle me-3">
                        <div class="bg-primary"></div>
                    </div>
                    <div>
                        <div class="fw-bold">{{props.author}}</div>
                        <div class="fs-7">September 24, 2022</div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
<script setup>
const props = defineProps(['index', 'title', 'imageUrl', 'author', 'category'])
</script>
<style lang="scss" scoped>
.blog {
    &:hover {
        >.blog-img {
            box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
            background-color: var(--bs-primary);
        }

        .title {
            color: var(--bs-primary)
        }
    }

    .blog-img {
        height: 0;
        padding-bottom: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-color: var(--bs-dark);

        .blog-category {
            top: 1rem;
            right: 1rem;
        }
    }

    .user-img {
        width: 40px;
        height: 40px;
        background: url('https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
}
</style>
