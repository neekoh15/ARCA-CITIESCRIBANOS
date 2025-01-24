<template>
  <main>
    <div class="wrapper">
      <div class="center-content content">
        <div>
          <h1 class="title">Nueva declaración jurada</h1>
          <p>Período fiscal | {{ declaracionJurada.periodo }}</p>
        </div>

        <section class="empty" v-if="declaracionJurada.escrituras.length == 0">
          <img src="/empty.svg" alt="" />
          <div class="">
            <h3>No tenés escrituras declaradas</h3>
            <div>Acá aparecerán las escrituras que cargues.</div>
          </div>

          <div class="buttons">
            <button class="secundario" @click="importFile()">Importar datos</button>
            <router-link :to="$route.path + '/escritura'">
              <button class="primario">Cargar escritura</button>
            </router-link>
          </div>
        </section>

        <section class="data" v-if="declaracionJurada.escrituras.length > 0">data :3</section>

        <div class="row buttons">
          <button class="terciario">Datos iniciales</button>
          <button class="secundario" v-if="false">Borrador</button>
          <router-link to="/nuevaDeclaracionJurada/nueva">
            <button class="primario">Presentar</button>
          </router-link>
        </div>
      </div>
    </div>
  </main>

  debug decla2: {{ declaracionJurada }}
</template>

<script setup lang="ts">
import { declaracionJurada } from '@/stores/default'

function importFile() {
  // Crear un input de tipo file de forma dinámica
  const input = document.createElement('input')
  input.type = 'file' // Define el input como archivo

  // Escuchar el evento de cambio cuando se selecciona un archivo
  input.addEventListener('change', (event) => {
    const file = event.target.files[0] // Obtener el archivo seleccionado
    if (file) {
      // Mostrar información del archivo en la página
      const fileInfoDiv = document.getElementById('fileInfo')
      fileInfoDiv.textContent = `Selected file: ${file.name} (${file.type || 'Unknown type'}) - ${file.size} bytes`
    }
  })

  // Abrir el explorador de archivos
  input.click()
}

</script>

<style scoped>
.wrapper {
  gap: 2rem;
}

.content {
  display: grid;
  gap: 2rem;
}

section.empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  padding-bottom: 2rem;
  color: #666;
}

section.empty h3 {
  color: var(--vt-c-arca-title);
  font-weight: 500;
}
</style>
