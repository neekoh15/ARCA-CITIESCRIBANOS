<template>
  <div class="breadcrumb">
    <router-link to="/"><div class="center-content content">Inicio</div></router-link>
  </div>
</template>

<style>
.breadcrumb {
  background-color: var(--vt-c-arca-main);

  border-top: 3px solid #63cfe3;
}

.breadcrumb .content {
  color: white;
  height: 2rem;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  display: flex;
  align-items: center;
}
</style>
