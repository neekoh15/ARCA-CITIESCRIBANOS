<template>
  <div class="wrapper">
    <div class="center-content">
      <main class="content">
        <h1 class="title">Datos del escribano titular y adscriptos</h1>

        <div class="sections">
          <section>
            <h2 class="title">Escribano titular</h2>
            <div class="row">
              <div class="option">
                <div>CUIT *</div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    v-model="escribanoTitular.cuit"
                    class="disabled"
                  />
                </div>
              </div>
              <div class="option">
                <div>Apellido y nombre *</div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="disabled"
                    v-model="escribanoTitular.apellidoNombre"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="option">
                <div>Número de matrícula *</div>
                <div>
                  <input type="text" name="" id="" v-model="escribanoTitular.numeroMatricula" />
                </div>
              </div>
              <div class="option">
                <div>Número de registro *</div>
                <div>
                  <input type="text" name="" id="" v-model="escribanoTitular.numeroRegistro" />
                </div>
              </div>
              <div class="option">
                <div>Código de provincia *</div>
                <div>
                  <input type="text" name="" id="" v-model="escribanoTitular.codigoProvincia" />
                </div>
              </div>
              <div class="option">
                <div>Localidad</div>
                <div><input type="text" name="" id="" v-model="escribanoTitular.localidad" /></div>
              </div>
            </div>
          </section>
          <section>
            <h2 class="title">Escribanos adscriptos</h2>
            <div class="row">
              <div class="option">
                <div>CUIT *</div>
                <div><input type="text" name="" id="" v-model="escribanoAdscripto.cuit" /></div>
              </div>
              <div class="option">
                <div>Apellido y nombre *</div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    class="disabled"
                    v-model="escribanoAdscripto.denominacion"
                  />
                </div>
              </div>
            </div>

            <div class="row buttons">
              <button class="secundario" @click="agregarEscribano">Agregar</button>
            </div>

            <div class="table" v-if="escribanosAdscriptos.length > 0">
              <table>
                <!--HEADER : CUIT and DENOMINACION (font bold)

                ROWS: v.for escribano in escribanosAdscriptos:
                  escribano.cuit and escribano.denominacion in the columns-->
                <thead>
                  <tr>
                    <th>CUIT</th>
                    <th>DENOMINACIÓN</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="escribano in escribanosAdscriptos" v-bind:key="escribano.cuit">
                    <td>{{ escribano.cuit }}</td>
                    <td>{{ escribano.denominacion }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div class="buttons">
            <button class="terciario">Cancelar</button>
            <router-link to="/inicio">
              <button class="primario">Guardar</button>
            </router-link>
          </div>
        </div>
      </main>
    </div>
  </div>

  <div>debug escribano Titular {{ escribanoTitular }}</div>
  <div>debug escribanos Adscriptos {{ escribanosAdscriptos }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { escribanoTitular, escribanosAdscriptos } from '@/stores/default'

const escribanoAdscripto = ref({
  cuit: '',
  denominacion: '',
})

function agregarEscribano() {
  const escribano = {
    cuit: escribanoAdscripto.value.cuit,
    denominacion: escribanoAdscripto.value.denominacion,
  }

  escribanosAdscriptos.value.push(escribano)
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  padding-block: 2rem;
}

.content {
  display: grid;
  gap: 2rem;
}

.sections {
  display: grid;
  gap: 2rem;
}

.table {
  height: 1rem;
}
</style>
