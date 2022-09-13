<template>
    <div class="blog-comment rounded-4 border p-4 mt-3">
        <div class="d-flex flex-row align-items-start">
            <div class="user-img rounded-circle me-3">
                <div class="bg-primary"></div>
            </div>
            <div>
                <div class="fw-bold">{{props.commentAuthor}}</div>
                <div class="fw-semibold fs-10"><i
                        class="bi bi-calendar2-event-fill me-2 text-primary"></i>{{props.commentDateTime}}</div>
            
        <div class="mt-3">{{props.commentBody}}</div>
                    </div>
        </div>
    </div>
</template>
  
<script setup>
const props = defineProps(['blogIndex', 'commentAuthor', 'commentBody', 'commentDateTime'])
</script>
  
<style lang="scss" scoped>
.blog-comment {
    &:hover {
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    }

    .user-img {
        min-width: 36px;
        min-height: 36px;
        width: 36px;
        height: 36px;
        background: url('https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
}
</style>