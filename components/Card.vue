
<template>
    <NuxtLink class="blog bg-white dark:bg-gray-800 hover:dark:bg-gray-700 rounded-3xl overflow-hidden text-decoration-none text-dark block shadow-sm hover:shadow-xl" :to="'/blog/' + props.index">
        <div class="blog-img relative hover:bg-primary"
            :style="{'background-image': 'url(' + props.imageUrl + ')'}">
            <span
                class="blog-category text-xs shadow-md bg-primary px-3 py-2 rounded-full text-white font-bold uppercase absolute right-5 top-5">
                {{ props.category }}</span>
        </div>
        <div class="card-body p-5 h-full flex flex-col content-between">
            <div>
                <h4 class="title text-xl font-semibold mb-5 dark:text-white hover:text-primary">
                    {{props.title}}
                </h4>
                <div class="flex flex-row items-center">
                    <div class="user-img rounded-full mr-4">
                        <div class="bg-primary"></div>
                    </div>
                    <div>
                        <div class="font-semibold dark:text-white">{{props.author}}</div>
                        <div class="text-xs text-gray-500 dark:text-gray-400"><i class="bi bi-calendar2-event-fill me-2 text-primary"></i>{{props.dateTime}}</div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
<script setup>
const props = defineProps(['index', 'title', 'imageUrl', 'author', 'category', 'dateTime'])
</script>
<style lang="scss" scoped>
.blog {

    .blog-img {
        height: 0;
        padding-bottom: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
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
