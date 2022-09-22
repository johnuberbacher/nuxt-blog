
<template>
    <NuxtLink :to="'/blog/' + props.index" class="recent-article dark:text-white hover:text-primary flex flex-row items-center mt-5 border-bottom mb-5">
        <div class="recent-article-img rounded-lg mr-4" :style="{'background-image': 'url(' + props.imageUrl + ')'}">
            <div class="bg-primary"></div>
        </div>
        <div>
            <div class="font-bold text-base">
                {{props.title}}
            </div>
            <div class="fw-semibold text-xs">
                {{props.dateTime}}
            </div>
        </div>
    </NuxtLink>
</template>
<script setup>
const props = defineProps(['index', 'title', 'imageUrl', 'author','dateTime'])
</script>

<style lang="scss" scoped>
.recent-article {
    .recent-article-img {
        background-color: var(--bs-dark);
        width: 64px;
        min-width: 64px;
        height: 64px;
        min-height: 64px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
}
</style>
