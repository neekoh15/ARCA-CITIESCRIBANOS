<template>
  <main>
    <JumbotronComp />

    <div class="center-content">
      <div class="wrapper">
        <div class="cards">
          <router-link to="/nuevaDeclaracionJurada">
            <CardComp
              titulo="Nueva declaración jurada"
              descripcion="Completá y presentá la declaración jurada. Podés iniciar la carga y guardar el borrador."
              tipo="primaria"
              icon="/doc1.svg"
            />
          </router-link>

          <router-link to="/declaracionesPresentadas">
            <CardComp
              titulo="Declaraciones juradas presentadas"
              descripcion="Consultá las presentaciones realizadas, descargá los comprobantes o rectificalas si corresponde."
              tipo="secundaria"
              icon="/doc2.svg"
            />
          </router-link>

          <div class="" v-if="declaracionesJuradas.borrador.length > 0">
            <router-link to="/borrador">
              <CardComp
                titulo="Declaraciones juradas en borrador"
                descripcion="Retomá las declaraciones que dejaste en borrador, completa los datos faltantes y presentalas."
                tipo="terciaria"
                icon="/doc3.svg"
              />
            </router-link>
          </div>
        </div>

        <div class="buttons">
          <button></button>
        </div>
      </div>
    </div>
  </main>
  <div>debug declaraciones juradas {{ declaracionesJuradas }}</div>
</template>

<script setup lang="ts">
import JumbotronComp from '@/components/JumbotronComp.vue'
import CardComp from '@/components/CardComp.vue'

import { declaracionesJuradas } from '@/stores/default'
</script>

<style scoped>
main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.center-content {
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
}
.wrapper {
  height: 100%;
  width: 100%;
}
.cards {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
}
</style>
