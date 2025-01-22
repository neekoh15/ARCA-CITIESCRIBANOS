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
                <div><input type="text" name="" id="" /></div>
              </div>
              <div class="option">
                <div>Apellido y nombre *</div>
                <div><input type="text" name="" id="" class="disabled" /></div>
              </div>
            </div>

            <div class="row">
              <div class="option">
                <div>Número de matrícula *</div>
                <div><input type="text" name="" id="" /></div>
              </div>
              <div class="option">
                <div>Número de registro *</div>
                <div><input type="text" name="" id="" /></div>
              </div>
              <div class="option">
                <div>Código de provincia *</div>
                <div><input type="text" name="" id="" /></div>
              </div>
              <div class="option">
                <div>Localidad</div>
                <div><input type="text" name="" id="" /></div>
              </div>
            </div>
          </section>
          <section>
            <h2 class="title">Escribanos adscriptos</h2>
            <div class="row">
              <div class="option">
                <div>CUIT *</div>
                <div><input type="text" name="" id="" /></div>
              </div>
              <div class="option">
                <div>Apellido y nombre *</div>
                <div><input type="text" name="" id="" class="disabled" /></div>
              </div>
            </div>

            <div class="row buttons">
              <button class="secundario">Agregar</button>
            </div>

            <div class="table">
              <table></table>
            </div>
          </section>

          <div class="buttons">
            <button class="terciario">Cancelar</button>
            <button class="primario">Guardar</button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EscribanoTitular } from '@/types/types'

function createEscribanoTitular(): EscribanoTitular {
  return {
    cuit: '23-11222333-9',
    nombreApellido: 23124, // no provoca un error
    numeroMatricula: null,
    numeroRegistro: null,
    codigoProvincia: null,
    localidad: null,
  }
}

const titular = createEscribanoTitular()

console.log(titular)
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

section {
  padding: 1rem;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

section h2 {
  border-bottom: 1px solid #ccc;
  height: 3rem;
}

.table {
  background-color: red;
  height: 1rem;
}
</style>
