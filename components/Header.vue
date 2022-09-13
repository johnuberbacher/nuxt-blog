<template>
  <header class="sticky-top w-100 bg-white py-2 py-xl-3 mb-5 shadow-sm">
    <div class="container">
      <nav class="
            navbar navbar-expand navbar-light
            justify-content-between
          ">
        <NuxtLink to="/" class="my-0 me-2 fw-bold text-decoration-none">Nuxt3&nbsp;+&nbsp;Pinia</NuxtLink>
        <div class="collapse navbar-collapse ms-auto me-0 justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav me-0 mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink class="nav-link fw-bold" to="/" active-class="active">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link fw-bold" to="/add" active-class="active">Add Blog</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.navbar-nav .nav-link {
  border-radius: 2rem;
}

.navbar-nav .show>.nav-link,
.navbar-nav .nav-link.active {
  background-color: var(--bs-primary);
  color: white;
}
</style>