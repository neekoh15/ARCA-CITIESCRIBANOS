<template>
  <main>
    <div class="wrapper">
      <div class="center-content content">
        <h1 class="title">Nueva escritura</h1>

        <section>
          <h3 class="title">Datos referenciales de la escritura</h3>
          <div class="row">
            <div class="option">
              <div>Número de escritura *</div>
              <input type="text" name="" id="" v-model="escritura.numeroEscritura" />
            </div>
            <div class="option">
              <div>Fecha de la escritura *</div>
              <input type="text" name="" id="" v-model="escritura.fechaEscritura" />
            </div>
          </div>

          <div class="row">
            <div class="option">
              <div>Tipos de bienes incluidos *</div>
              <input type="text" name="" id="" v-model="escritura.tipoDeBienes" />
            </div>
            <div class="option">
              <div>Importe total de la escritura *</div>
              <input type="text" name="" id="" v-model="escritura.importeTotal" />
            </div>
          </div>

          <div class="row">
            <div class="option">
              <div>¿Participa un escribano adscripto?</div>
              <div class="radios">
                <label for="1"
                  ><input
                    type="radio"
                    name="radio"
                    id="1"
                    :value="true"
                    v-model="escritura.participaEscribanoAdscripto"
                  />Sí</label
                >
                <label for="2"
                  ><input
                    type="radio"
                    name="radio"
                    id="2"
                    :value="false"
                    v-model="escritura.participaEscribanoAdscripto"
                  />No</label
                >
              </div>
            </div>
          </div>

          <div class="row">
            <div class="option">
              <div>Seleccioná la operación a realizar *</div>
              <input type="text" name="" id="" />
              <!-- AGREGAR ACA LAS OPERACIONES-->
            </div>
          </div>
        </section>

        <div class="buttons">
          <button class="terciario">Cancelar</button>
          <button @click="cargarOperaciones()">TEST</button>
          <router-link :to="$route.path + '/operaciones'">
            <button class="primario">Aceptar</button>
          </router-link>
        </div>
      </div>
    </div>
  </main>

  <div>debug escritura {{ escritura }}</div>
  <div>debug escritura {{ escritura.operaciones }}</div>
</template>

<script setup lang="ts">
import { escritura, operacion } from '@/stores/default'

function cargarOperaciones() {
  const nuevaOperacion = JSON.parse(JSON.stringify(operacion.value))
  nuevaOperacion.nombreOperacion = 'Compra - Venta'
  escritura.value.operaciones.push(nuevaOperacion)
}
</script>

<style scoped></style>
