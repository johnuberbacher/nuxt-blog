<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <form v-on:submit.prevent="onSubmit">
                    <h4 class="mb-4">Add New Blog</h4>
                    <div class="form-group mb-3" label="Blog Title:">
                        <label class="fs-8 mb-1 fw-semibold" for="title">Blog Title:</label>
                        <input class="form-control" v-model="title" type="text" placeholder="Blog Title" required />
                    </div>
                    <div class="form-group mb-3" label="Image Url:">
                        <label class="fs-8 mb-1 fw-semibold" for="imageUrl">Image Url:</label>
                        <input class="form-control" v-model="imageUrl" type="text"
                            placeholder="https://picsum.photos/1200/720" required />
                    </div>
                    <div class="form-group mb-3" label="Category:">
                        <label class="fs-8 mb-1 fw-semibold" for="category">Category:</label>
                        <select class="form-control" v-model="selectedCategory" required>
                            <option v-bind:key="category" v-bind:value="index" v-for="(category, index) in store.categories">
                                {{ category }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group mb-3" label="Blog Author:">
                        <label class="fs-8 mb-1 fw-semibold" for="author">Blog Author:</label>
                        <input class="form-control" v-model="author" type="text" placeholder="Enter author name"
                            required />
                    </div>
                    <div class="form-group mb-3" label="Blog Body:">
                        <label class="fs-8 mb-1 fw-semibold" for="body">Blog Content:</label>
                        <textarea class="form-control" v-model="body" rows="5" type="text"
                            placeholder="Enter blog content" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { useBlogStore } from '@/stores/blogs'

export default {
    setup() {
        const store = useBlogStore()
        return {
            store
        }
    },
    data() {
        return {
            title: '',
            imageUrl: '',
            author: '',
            selectedCategory: 0,
            body: '',
        }
    },
    head() {
        return {
            title: "Add Blog"
        };
    },
    methods: {
        onSubmit() {
            console.log(this.categoryStore)
            this.store.addBlog(this.title, this.imageUrl, this.author, this.body, this.selectedCategory)
            this.title = ''
            this.imageUrl = ''
            this.author = ''
            this.body = ''
            this.selectedCategory = 0
        }
    }
}
</script>
<style scoped>
form {
    max-width: 768px;
    margin: 0px auto;
}
</style>