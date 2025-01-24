<script setup lang="ts">
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import BreadcrumbComp from '@/components/BreadcrumbComp.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="appWrapper">
    <header>
      <NavbarComp></NavbarComp>
      <BreadcrumbComp></BreadcrumbComp>
    </header>

    <div class="appContent">
      <RouterLink to=""></RouterLink>
      <RouterView />
    </div>

    <footer>
      <FooterComp></FooterComp>
    </footer>
  </div>
</template>

<style scoped>
/* Ensure the wrapper takes the full viewport height */
.appWrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0; /* Reset any default margin */
}

/* Header and footer with fixed heights */
header {
  flex-shrink: 0; /* Prevent shrinking */
}

footer {
  flex-shrink: 0; /* Prevent shrinking */
}

/* Content takes up remaining space */
.appContent {
  flex: 1; /* Occupies remaining space */
  display: flex;
  flex-direction: column; /* Adjust children if needed */
  background-color: var(--vt-c-soft-grey) !important;
}
</style>
