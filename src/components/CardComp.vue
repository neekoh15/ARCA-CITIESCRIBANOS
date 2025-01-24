// Card.vue
<template>
  <div :class="['card', tipoClass]">
    <div class="badge"></div>
    <div class="container">
      <img :src="icon" alt="" />
      <h3>{{ titulo }}</h3>
      <p>{{ descripcion }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CardComp',
  props: {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
      validator: (value) => ['primaria', 'secundaria', 'terciaria'].includes(value),
    },
    icon: {
      type: String,
      required: true,
      default: '/doc1.svg',
    },
  },

  computed: {
    tipoClass() {
      return `card--${this.tipo}`
    },
  },
}
</script>

<style>
.card {
  position: relative;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: var(--vt-c-arca-title);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  width: 100%;
  min-height: 25vh;
}

.card .badge {
  position: absolute;
  width: 100%;
  height: calc(4rem);
  background-color: var(--vt-c-arca-title);
}

.card .container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 2rem 2rem;
  padding-inline: 1rem;
  text-align: center;
  gap: 0.5rem;
}

.card h3 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}
</style>
