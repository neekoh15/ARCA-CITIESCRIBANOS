import { ref } from 'vue'

const escribanoTitular = ref({
  cuit: '23-11222333-9',
  nombre: 'Juan Pérez',
  numeroMatricula: '',
  numeroRegistro: '',
  codigoProvincia: '',
})

const escribanosAdscriptos = ref([])

const declaracionesJuradas = ref({
  ddjjs: [],
  finalizadas: [],
  borrador: [],
})

const declaracionJurada = ref({
  titular: {
    cuit: '23-11222333-9',
    nombreApellido: 'Juan Pérez',
  },
  periodo: '03/2024',
  presentacionConMovimientos: true,
  escrituras: [],
})

const escritura = ref({
  numeroEscritura: '556655656',
  fechaEscritura: '01/03/2025',
  importeTotal: 0,
  tipoDeBienes: [],
  participaEscribanoAdscripto: false,
  operaciones: [],
})

const operacion = ref({
  id: 'compraVenta',
  nombreOperacion: 'null',
  datosInmueble: {
    domicilio: 'DefaultObject',
    provincia: 'null',
    numeroPartida: 'null',
    numeroSubPartida: 'null',
    tipoInmueble: 'null',
    nomenclaturaCatastral: 'null',
    codigoSuperficie: 'null',
    superficie: 'null',
    valuacionFiscal: 'null',
    descripcionDelBien: 'null',
    importeAsignado: 'null',
  },

  datosImpositivos: {
    impuestoSellos: 'null',
    excensionGanancias: 'null',
  },

  sujetos: {
    compradores: [],
    vendedores: [],
    representanteVendedor: {
      cuit: null,
      nombreApellido: null,
    },
    representanteComprador: {
      cuit: null,
      nombreApellido: null,
    },
    comprobante: {
      fecha: '',
      tipo: '',
      puntoDeVenta: '',
      numeroComprobante: '',
    },
  },
})

export {
  declaracionesJuradas,
  declaracionJurada,
  escribanoTitular,
  escribanosAdscriptos,
  escritura,
  operacion,
}
