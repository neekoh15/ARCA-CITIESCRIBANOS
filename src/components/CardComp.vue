// Card.vue
<template>
  <div :class="['card', tipoClass]">
    <div class="container">
      <img src="/doc1.svg" alt="" v-if="tipo == 'primaria'" />
      <img src="/doc2.svg" alt="" v-if="tipo == 'secundaria'" />
      <img src="/doc3.svg" alt="" v-if="tipo == 'terciaria'" />
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
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card--primaria {
  background-color: #e0f7fa;
  color: #006064;
}

.card--secundaria {
  background-color: #fff9c4;
  color: #f57f17;
}

.card--terciaria {
  background-color: #f3e5f5;
  color: #6a1b9a;
}
</style>
