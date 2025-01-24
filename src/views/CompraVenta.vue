<template>
  <main>
    <div class="wrapper">
      <div class="center-content content">
        <h1 class="title">Compra - Venta</h1>

        <div>
          <div class="dropdown">
            <input type="radio" name="checkbox" id="toogle-1" checked style="display: none" />
            <div class="nombreSeccion">
              <label for="toogle-1">Datos del inmueble o bien</label>
            </div>

            <section class="dropdownSection">
              <div class="row">
                <div class="option">
                  <div>Domicilio físico o real *</div>
                  <input type="text" name="" id="" v-model="operacion.datosInmueble.domicilio" />
                </div>
                <div class="option">
                  <div>Provincia *</div>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div class="row">
                <div class="option">
                  <div>Número de partida *</div>
                  <input type="text" name="" id="" />
                </div>
                <div class="option">
                  <div>Número de sub-partida</div>
                  <input type="text" name="" id="" />
                </div>
              </div>

              <div class="row">
                <div class="option">
                  <div class="">Tipo de inmueble</div>
                  <div class="radios">
                    <label><input type="radio" name="tipoInmueble" />Urbano</label>
                    <label><input type="radio" name="tipoInmueble" />Rural</label>
                  </div>
                </div>
                <div class="option">
                  <div class="option">
                    <div class="">Nomenclatura catastral *</div>
                    <div class="row">
                      <input type="text" name="" id="" />
                      <div class="buttons">
                        <button class="secundario" style="text-wrap: nowrap">
                          No conozco este dato
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="option">
                  <div>Código de unidad de superficie *</div>
                  <input type="text" name="" id="" />
                </div>
                <div class="option">
                  <div>Superficie *</div>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div class="row">
                <div class="option">
                  <div>Valuación fiscal *</div>
                  <input type="text" name="" id="" />
                </div>
                <div class="option">
                  <div>Descripción del bien *</div>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div class="row">
                <div class="option">
                  <div class="">Importe asignado al inmueble o bien *</div>
                  <input type="text" name="" id="" />
                </div>
              </div>
            </section>
          </div>

          <div class="dropdown">
            <input type="radio" name="checkbox" id="toogle-2" style="display: none" />
            <div class="nombreSeccion">
              <label for="toogle-2">Sujetos intervinientes</label>
            </div>

            <section class="dropdownSection">
              <!-- SECCION VENDEDOR -->
              <section>
                <h2 class="title">Datos del vendedor</h2>
                <div class="row">
                  <div class="option" style="flex: 0.4">
                    <div class="">Tipo de documento</div>
                    <input type="text" name="" id="" v-model="vendedor.tipoDocumento" />
                  </div>
                  <div class="option" style="flex: 0.6">
                    <div class="">N° de documento *</div>
                    <input type="text" name="" id="" v-model="vendedor.numeroDocumento" />
                  </div>

                  <div class="option">
                    <div class="">Apellido y nombre / Razón social</div>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="disabled"
                      v-model="vendedor.nombreApellido"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="option">
                    <div class="">Porcentaje de titularidad *</div>
                    <input type="text" name="" id="" v-model="vendedor.porcentajeTitularidad" />
                  </div>
                </div>
                <div class="row">
                  <div class="option">
                    <div class="buttons">
                      <button class="secundario" @click="agregarVendedor()">Agregar</button>
                    </div>
                  </div>
                </div>

                <div class="table" v-if="operacion.sujetos.vendedores.length > 0">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Tipo de documento</th>
                        <th scope="col">N° de documento</th>
                        <th scope="col">Denominación</th>
                        <th scope="col">Porcentaje de titularidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="vendedor in operacion.sujetos.vendedores" :key="vendedor.dni">
                        <td>{{ vendedor.tipoDocumento }}</td>
                        <td>{{ vendedor.numeroDocumento }}</td>
                        <td>{{ vendedor.nombreApellido }}</td>
                        <td>{{ vendedor.porcentajeTitularidad }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="row">
                  <div class="option">
                    <div>¿Reside en el exterior e interviene un representante?</div>
                    <div class="radios">
                      <label for="1"
                        ><input
                          type="radio"
                          name="radioVendedor"
                          id="1"
                          :value="true"
                          v-model="intervieneRepresentanteVendedor"
                        />Sí</label
                      >
                      <label
                        for="2"
                        @click="resetResidente(operacion.sujetos.representanteVendedor)"
                        ><input
                          type="radio"
                          name="radioVendedor"
                          id="2"
                          :value="false"
                          v-model="intervieneRepresentanteVendedor"
                        />No</label
                      >
                    </div>
                  </div>
                </div>

                <div class="row" v-if="intervieneRepresentanteVendedor">
                  <div class="option">
                    <div class="div">CUIT representante del exterior *</div>
                    <input
                      type="text"
                      name=""
                      id=""
                      v-model="operacion.sujetos.representanteVendedor.cuit"
                    />
                  </div>
                  <div class="option">
                    <div class="div">Apellido y nombre / Razón social</div>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="disabled"
                      v-model="operacion.sujetos.representanteVendedor.nombreApellido"
                    />
                  </div>
                </div>
              </section>

              <!-- SECCION COMPRADOR -->
              <section>
                <h2 class="title">Datos del comprador</h2>
                <div class="row">
                  <div class="option" style="flex: 0.4">
                    <div class="">Tipo de documento</div>
                    <input type="text" name="" id="" v-model="comprador.tipoDocumento" />
                  </div>
                  <div class="option" style="flex: 0.6">
                    <div class="">N° de documento *</div>
                    <input type="text" name="" id="" v-model="comprador.numeroDocumento" />
                  </div>

                  <div class="option">
                    <div class="">Apellido y nombre / Razón social</div>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="disabled"
                      v-model="comprador.nombreApellido"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="option">
                    <div class="">Porcentaje de titularidad *</div>
                    <input type="text" name="" id="" v-model="comprador.porcentajeTitularidad" />
                  </div>
                </div>
                <div class="row">
                  <div class="option">
                    <div class="buttons">
                      <button class="secundario" @click="agregarComprador()">Agregar</button>
                    </div>
                  </div>
                </div>

                <div class="table" v-if="operacion.sujetos.compradores.length > 0">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Tipo de documento</th>
                        <th scope="col">N° de documento</th>
                        <th scope="col">Denominación</th>
                        <th scope="col">Porcentaje de titularidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="comprador in operacion.sujetos.compradores" :key="comprador.dni">
                        <td>{{ comprador.tipoDocumento }}</td>
                        <td>{{ comprador.numeroDocumento }}</td>
                        <td>{{ comprador.nombreApellido }}</td>
                        <td>{{ comprador.porcentajeTitularidad }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="row">
                  <div class="option">
                    <div>¿Reside en el exterior e interviene un representante?</div>
                    <div class="radios">
                      <label for="3"
                        ><input
                          type="radio"
                          name="radioComprador"
                          id="3"
                          :value="true"
                          v-model="intervieneRepresentanteComprador"
                        />Sí</label
                      >
                      <label
                        for="4"
                        @click="resetResidente(operacion.sujetos.representanteComprador)"
                        ><input
                          type="radio"
                          name="radioComprador"
                          id="4"
                          :value="false"
                          v-model="intervieneRepresentanteComprador"
                        />No</label
                      >
                    </div>
                  </div>
                </div>

                <div class="row" v-if="intervieneRepresentanteComprador">
                  <div class="option">
                    <div class="div">CUIT representante del exterior *</div>
                    <input
                      type="text"
                      name=""
                      id=""
                      v-model="operacion.sujetos.representanteComprador.cuit"
                    />
                  </div>
                  <div class="option">
                    <div class="div">Apellido y nombre / Razón social</div>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="disabled"
                      v-model="operacion.sujetos.representanteComprador.nombreApellido"
                    />
                  </div>
                </div>
              </section>

              <!-- COMPROBATES RELACIONADOS-->
              <section>
                <h2 class="title">Comprobantes relacionados</h2>
                <div class="row">
                  <div class="option">
                    <div class="div">Fecha del comprobante</div>
                    <input type="text" name="" id="" />
                  </div>
                  <div class="option">
                    <div class="div">Tipo de comprobante *</div>
                    <input type="text" name="" id="" />
                  </div>
                </div>
                <div class="row">
                  <div class="option">
                    <div class="div">Punto de venta *</div>
                    <input type="text" name="" id="" />
                  </div>
                  <div class="option">
                    <div class="div">Número de comprobante *</div>
                    <input type="text" name="" id="" />
                  </div>
                </div>
              </section>
            </section>
          </div>

          <div class="dropdown">
            <input type="radio" name="checkbox" id="toogle-3" style="display: none" />
            <div class="nombreSeccion">
              <label for="toogle-3">Datos impositivos de la operación</label>
            </div>
            <section class="dropdownSection">
              <div class="row">
                <div class="option">
                  <div>Impuesto de sellos *</div>
                  <input type="text" name="" id="" />
                </div>
                <div class="option">
                  <div>Exención de ganancias *</div>
                  <input type="text" name="" id="" />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="buttons">
          <button class="secundario">Cancelar</button>
          <router-link :to="$route.path.split('/').slice(0, -1).join('/')">
            <button class="primario">Aceptar</button>
          </router-link>
        </div>
      </div>
    </div>
  </main>

  <div>debug operacion {{ operacion }}</div>
  <div>debug representante vendedor: {{ representanteVendedor }}</div>
  <div>debug representante comprador: {{ representanteComprador }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { operacion } from '@/stores/default'

const intervieneRepresentanteVendedor = ref(false)
const representanteVendedor = ref({
  cuit: null,
  nombreApellido: null,
})
const intervieneRepresentanteComprador = ref(false)
const representanteComprador = ref({
  cuit: null,
  nombreApellido: null,
})

const vendedor = ref({
  tipoDocumento: 'DNI',
  numeroDocumento: '',
  nombreApellido: '',
  porcentajeTitularidad: 0,
})

const comprador = ref({
  tipoDocumento: 'DNI',
  numeroDocumento: '',
  nombreApellido: '',
  porcentajeTitularidad: '',
})

function agregarVendedor() {
  const nuevoVendedor = {
    tipoDocumento: vendedor.value.tipoDocumento,
    numeroDocumento: vendedor.value.numeroDocumento,
    nombreApellido: vendedor.value.nombreApellido,
    porcentajeTitularidad: vendedor.value.porcentajeTitularidad,
  }

  vendedor.value = {
    tipoDocumento: 'DNI',
    numeroDocumento: '',
    nombreApellido: '',
    porcentajeTitularidad: '',
  }

  operacion.value.sujetos.vendedores.push(nuevoVendedor)
}

function agregarComprador() {
  const nuevoComprador = {
    tipoDocumento: comprador.value.tipoDocumento,
    numeroDocumento: comprador.value.numeroDocumento,
    nombreApellido: comprador.value.nombreApellido,
    porcentajeTitularidad: comprador.value.porcentajeTitularidad,
  }

  comprador.value = {
    tipoDocumento: 'DNI',
    numeroDocumento: '',
    nombreApellido: '',
    porcentajeTitularidad: '',
  }

  operacion.value.sujetos.compradores.push(nuevoComprador)
}

function resetResidente(residente) {
  residente.cuit = null
  residente.nombreApellido = null
}
</script>

<style scoped>
.dropdown .nombreSeccion label {
  padding-left: 1rem;
  border: 1px solid #e6e6e6;
  background-color: white;
  display: grid;
  align-items: center;
  font-weight: bold;
  padding-block: 0.5rem;
  font-size: 16px;
}

.dropdown .dropdownSection {
  height: 0;
  max-height: 0;
  padding: 0;
  overflow-y: hidden;
  border: 1px solid #e6e6e6;
  transition: max-height 1s ease-in;
}

input[type='radio']:checked ~ .dropdownSection {
  height: fit-content;
  max-height: 500vh;
  transition: max-height 1s ease-in;
  padding: 1rem;
}

input[type='radio']:checked + .nombreSeccion label {
  background-color: #e7f0f4 !important;
  border: 1px solid #e6e6e6;
}

.dropdown .nombreSeccion:active {
  appearance: none;
  background-color: red;
}

.seleccionado .nombreSeccion {
  background-color: #e7f0f4;
  border: 1px solid #e6e6e6;
}

h2 {
  font-size: 16px;
}

.table {
  width: 100%;
  overflow-x: auto; /* Para permitir desplazamiento horizontal si el contenido excede el espacio */
  margin-block: 0.5rem 1rem;
}

.table table {
  width: 100%; /* La tabla ocupará el 100% del ancho disponible */
  border-collapse: collapse; /* Elimina los espacios entre las celdas */
}

.table th {
  background-color: var(--vt-c-soft-grey);
  font-weight: bold;
}

.table th,
.table td {
  text-align: left; /* Alinea el texto a la izquierda (puedes cambiarlo si prefieres otra alineación) */
  padding: 8px 12px; /* Espaciado interno para mejor visualización */
  border: 1px solid #ddd; /* Bordes ligeros entre celdas */
  border-inline: none;
}
</style>
