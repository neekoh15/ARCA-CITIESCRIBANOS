<template>
  <main>
    <div class="wrapper">
      <div class="center-content content">
        <h1 class="title">Operaciones involucradas</h1>

        <div class="resumen">
          <div class="row">
            <div class="option">
              <div class="title">Número de escritura</div>
              <div>{{ escritura.numeroEscritura }}</div>
            </div>
            <div class="option">
              <div class="title">Fecha de escritura</div>
              <div>{{ escritura.numeroEscritura }}</div>
            </div>
            <div class="option">
              <div class="title">Importe total</div>
              <div>{{ escritura.numeroEscritura }}</div>
            </div>
            <div class="option">
              <div class="title">Escribano interviniente</div>
              <div>{{ declaracionJurada.titular.nombreApellido }}</div>
            </div>
          </div>
        </div>

        <div class="operaciones">
          <div
            class="operacion"
            v-for="operacion in escritura.operaciones"
            v-bind:key="operacion.id"
          >
            <router-link :to="$route.path + '/' + operacion.id">
              <section>
                <h3 class="title">
                  <img src="/newDoc.svg" alt="" />{{ operacion.nombreOperacion }}
                </h3>

                <div>
                  <div class="option">
                    Domicilio físico o real: {{ operacion.datosInmueble.domicilio }}
                  </div>
                  <div class="option">
                    Sujetos Intervinientes: {{ operacion.sujetos.representanteComprador }}
                  </div>
                  <div class="option">
                    Datos impositivos de la operación: {{ operacion.datosImpositivos }}
                  </div>
                </div>
              </section>
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="option buttons">
            <router-link to="/nuevaDeclaracionJurada/nueva/escritura">
              <button class="terciario">Volver</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </main>

  {{ declaracionJurada }}
</template>

<script setup lang="ts">
import { escritura, declaracionJurada } from '@/stores/default'
</script>

<style scoped>
.resumen {
  border-block: 1px solid #ccc;
  padding-inline: 1rem;
  padding-block: 0.5rem;
}

.operacion h3 {
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 0.5rem;
}

.resumen .title {
  font-weight: normal;
}

.resumen .row .option:not(:last-child) {
  border-right: 1px solid #ccc;
}

.operaciones {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.operaciones > :only-child {
  width: 50%;
}

@media (max-width: 800px) {
  .operaciones > :only-child {
    width: 100%;
  }
}
</style>
