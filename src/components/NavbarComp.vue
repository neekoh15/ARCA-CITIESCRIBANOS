<template>
  <nav>
    <div class="center-content content">
      <div class="">
        <div class="img"><img src="/ARCANavbar.svg" alt="" /></div>
        <div class="">
          <h1>{{ title }}</h1>
        </div>
      </div>
      <div class="">
        <p class="nombre">{{ nombre }}</p>
        <p class="cuit">{{ CUIT }}</p>
        <div class="iniciales">{{ iniciales }}</div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavbarComp',

  setup() {
    const title = 'CITI ESCRIBANOS'
    const CUIT = '23-11111111-4'
    const nombre = 'Juan Pérez'

    // Calculamos las iniciales del nombre
    const iniciales = nombre
      .split(' ')
      .map((palabra) => palabra[0])
      .join('')

    return {
      title,
      CUIT,
      nombre,
      iniciales,
    }
  },
}
</script>

<style scoped>
nav .content {
  padding-block: 1rem;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  background-color: white;
}

nav .content div {
  display: flex;
  flex-direction: row;
  width: fit-content;
  font-size: 16px;
  gap: 1rem;
}

nav .content > div:last-child {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

nav p.nombre {
  font-weight: bold;
}

nav p.cuit {
  color: #535353;
}

nav .iniciales {
  background-color: var(--vt-c-arca-main);
  width: 2rem !important;
  height: 2rem;
  color: white;
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>
