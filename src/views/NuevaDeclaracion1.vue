<template>
  <main>
    <div class="wrapper">
      <div class="center-content content">
        <h1 class="title">Nueva declaración jurada</h1>

        <section class="otra">
          <h2>Datos Iniciales</h2>

          <div class="row">
            <div class="option">
              <div>Período fiscal</div>
              <input type="text" name="" id="" v-model="declaracionJurada.periodo" />
            </div>
          </div>
          <div class="row">
            <div class="option">
              <div>Presentacion:</div>
              <div class="radios">
                <label for="1">
                  <input
                    type="radio"
                    name="radio"
                    id="1"
                    :value="true"
                    v-model="declaracionJurada.presentacionConMovimientos"
                  />
                  Con movimientos
                </label>
                <label for="2">
                  <input
                    type="radio"
                    name="radio"
                    id="2"
                    :value="false"
                    v-model="declaracionJurada.presentacionConMovimientos"
                  />
                  Sin movimientos
                </label>
              </div>
            </div>
          </div>
        </section>

        <div class="row buttons">
          <button class="terciario">Volver</button>
          <router-link to="/nuevaDeclaracionJurada/nueva">
            <button class="primario">Continuar</button>
          </router-link>
        </div>
      </div>
    </div>
  </main>
  debug: {{ declaracionJurada }}
</template>

<script setup lang="ts">
import { declaracionJurada, escribanoTitular } from '@/stores/default'

declaracionJurada.value.titular = escribanoTitular.value

</script>

<style scoped>
.wrapper {
  gap: 2rem;
}

.content {
  display: grid;
  gap: 2rem;
}
</style>
