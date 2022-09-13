
<template>
    <NuxtLink :to="'/blog/' + props.index" class="recent-article d-flex flex-row align-items-center mt-3 border-bottom pb-3">
        <div class="recent-article-img rounded-3 me-3" :style="{'background-image': 'url(' + props.imageUrl + ')'}">
            <div class="bg-primary"></div>
        </div>
        <div>
            <div class="fw-semibold">
                {{props.title}}
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['index', 'title', 'imageUrl', 'author'])
</script>

<style lang="scss" scoped>
.recent-article {
    &:hover {
        .recent-article-img {
            box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
            background-color: var(--bs-primary);
        }

        .title {
            color: var(--bs-primary)
        }
    }

    .recent-article-img {
        background-color: var(--bs-dark);
        width: 60px;
        min-width: 60px;
        height: 60px;
        min-height: 60px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
}
</style>
