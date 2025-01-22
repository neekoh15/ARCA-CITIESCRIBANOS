/**
 * Representa al escribano titular asociado a una declaración jurada.
 *
 * **Propiedades:**
 * - `readonly cuit: string` - CUIT del titular, e.g., 23-11222333-9.
 * - `readonly nombreApellido: string` - Nombre completo del titular, e.g., Juan Pérez.
 * - `numeroMatricula: number | null` - Número de matrícula profesional del titular.
 * - `numeroRegistro: number | null` - Número de registro asociado al titular.
 * - `codigoProvincia: number | null` - Código de la provincia donde está registrado el titular.
 * - `localidad: string | null` - Localidad donde reside o trabaja el titular.
 */
export interface EscribanoTitular {
  readonly cuit: '23-11222333-9'
  readonly nombreApellido: 'Juan Pérez'
  numeroMatricula: number | null
  numeroRegistro: number | null
  codigoProvincia: number | null
  localidad: string | null
}

/**
 * Representa a un escribano adscripto asociado a un titular.
 *
 * **Propiedades:**
 * - `cuit: string` - CUIT del escribano adscripto, e.g., 20-11111111-1.
 * - `denominacion: string` - Nombre y apellido del escribano adscripto, e.g., Juan Pérez.
 */
export interface EscribanoAdscripto {
  cuit: string
  denominacion: string
}

/**
 * Contiene el conjunto de escribanos adscriptos que declaro el Escribano Titular
 *  **Propiedades:**
 * - `escribanoTitular: EscribanoTitular` - El escribar titular de la declaracion jurada
 * - `escribanosAdscriptos: EscribanoAdscripto[]` - Array de escribanos adscriptos
 */

export interface Escribanos {
  escribanoTitular: EscribanoTitular
  escribanosAdscriptos: EscribanoAdscripto[]
}

/**
 * Representa los datos de un inmueble.
 *
 * **Propiedades:**
 * - `domicilioFiscalOReal: string | null` - Dirección fiscal o real del inmueble.
 * - `provincia: string | null` - Provincia en la que se encuentra el inmueble.
 * - `numeroPartida: string | null` - Número de partida del inmueble.
 * - `numeroSubPartida: string | null` - Número de subpartida del inmueble.
 * - `tipoInmueble: string | null` - Tipo de inmueble (e.g., casa, departamento).
 * - `nomenclaturaCatastral: string | null` - Nomenclatura catastral del inmueble.
 * - `codigoUnidadDeSuperficie: string | null` - Código de unidad de superficie del inmueble.
 * - `superficie: string | null` - Superficie total del inmueble.
 * - `valuacionFiscal: number | null` - Valuación fiscal del inmueble.
 * - `descripcionDelBien: string | null` - Descripción del bien inmueble.
 * - `importeAsignadoalInmuebleOBien: number | null` - Importe asignado al inmueble o bien.
 */
export interface DatoDelInmueble {
  domicilioFiscalOReal: null | string
  provincia: null | string
  numeroPartida: null | string
  numeroSubPartida: null | string
  tipoInmueble: null | string
  nomenclaturaCatastral: null | string
  codigoUnidadDeSuperficie: null | string
  superficie: null | string
  valuacionFiscal: null | number
  descripcionDelBien: null | string
  importeAsignadoalInmuebleOBien: null | number
}

/**
 * Representa a una persona residente en el exterior.
 *
 * **Propiedades:**
 * - `cuit: string` - CUIT de la persona residente en el exterior.
 * - `apellidoYNombre: string` - Apellido y nombre de la persona residente en el exterior.
 */
export interface ResidenteEnElExterior {
  cuit: string
  apellidoYNombre: string
}

/**
 * Representa a un vendedor en una operación.
 *
 * **Propiedades:**
 * - `tipoSujeto: 'Comprador' | 'Vendedor'` - Identifica al tipo de sujeto como vendedor o comprador
 * - `tipoDocumento: string | null` - Tipo de documento del vendedor (e.g., DNI, Pasaporte).
 * - `numeroDocumento: number | null` - Número de documento del vendedor.
 * - `apellidoYNombre: string | null` - Apellido y nombre del vendedor.
 * - `porcetajeTitularidad: number | null` - Porcentaje de titularidad del vendedor en la operación.
 * - `resideEnElExterior: boolean | null` - Indica si el vendedor reside en el exterior.
 * - `residenteEnElExterior: ResidenteEnElExterior | null` - Detalles del residente en el exterior (si aplica).
 */
export interface Sujeto {
  tipoSujeto: 'Comprador' | 'Vendedor'
  tipoDocumento: null | string
  numeroDocumento: null | number
  apellidoYNombre: null | string
  porcetajeTitularidad: null | number
  resideEnElExterior: null | boolean
  residenteEnElExterior: null | ResidenteEnElExterior
}

/**
 * Representa a un Vendedor, que extiende las propiedades de un sujeto.
 *
 * **Propiedades:**
 * - Hereda todas las propiedades de la interfaz `Sujeto`.
 */
export interface Vendedor extends Sujeto {
  tipoSujeto: 'Vendedor'
}

/**
 * Representa a un Comprador, que extiende las propiedades de un sujeto.
 *
 * **Propiedades:**
 * - Hereda todas las propiedades de la interfaz `Sujeto`.
 */
export interface Comprador extends Sujeto {
  tipoSujeto: 'Comprador'
}

/**
 * Representa un comprobante relacionado a una operación.
 *
 * **Propiedades:**
 * - `fechaComprobante: Date | null` - Fecha del comprobante.
 * - `tipoDeComprobante: string | null` - Tipo de comprobante (e.g., factura, recibo).
 * - `puntoDeVenta: string | null` - Punto de venta donde se emitió el comprobante.
 * - `numeroComprobante: number | null` - Número del comprobante.
 */
export interface ComprobanteRelacionado {
  fechaComprobante: null | Date
  tipoDeComprobante: null | string
  puntoDeVenta: null | string
  numeroComprobante: null | number
}

/**
 * Representa un conjunto de vendedores en una operación.
 *
 * **Propiedades:**
 * - `vendedores: Vendedor[]` - Lista de vendedores involucrados en la operación.
 */
export interface Vendedores {
  vendedores: Vendedor[]
}

/**
 * Representa un conjunto de compradores en una operación.
 *
 * **Propiedades:**
 * - `compradores: Comprador[]` - Lista de compradores involucrados en la operación.
 */
export interface Compradores {
  compradores: Comprador[]
}

/**
 * Representa un conjunto de comprobantes relacionados en una operación.
 *
 * **Propiedades:**
 * - `comprobantesRelacionados: ComprobanteRelacionado[]` - Lista de comprobantes relacionados con la operación.
 */
export interface ComprobantesRelacionados {
  comprobantesRelacionados: ComprobanteRelacionado[]
}

/**
 * Representa los sujetos intervinientes en una operación, incluyendo vendedores, compradores y comprobantes.
 *
 * **Propiedades:**
 * - `datosDelVendedor: Vendedores | null` - Datos de los vendedores involucrados en la operación.
 * - `datosDelComprador: Compradores | null` - Datos de los compradores involucrados en la operación.
 * - `comprobantesRelacionadoS: ComprobantesRelacionados | null` - Comprobantes relacionados con la operación.
 */
export interface SujetosIntervinientes {
  datosDelVendedor: null | Vendedores
  datosDelComprador: null | Compradores
  comprobantesRelacionadoS: null | ComprobantesRelacionados
}

/**
 * Representa los datos impositivos relacionados a una operación.
 *
 * **Propiedades:**
 * - `impuestosDeSello: number | null` - Impuestos de sello aplicables a la operación.
 * - `excencionGanancias: number | null` - Exención de impuestos sobre ganancias en la operación.
 */
export interface DatosImpositivosDeLaOperacion {
  impuestosDeSello: null | number
  excencionGanancias: null | number
}

/**
 * Representa una operación con un tipo discriminado y un estado.
 *
 * **Propiedades:**
 * - `tipoDeOperacion: string` - Tipo de operación, como 'Compra - Venta', 'Permuta', etc.
 * - `estadoCompleta: boolean` - Indica si la operación está completa o no.
 */
export interface Operacion {
  tipoDeOperacion:
    | 'Compra - Venta'
    | 'Dación de Pago'
    | 'Aporte a Sociedades'
    | 'Escisión de Sociedades'
    | 'Fusión de Sociedades'
    | 'Fideicomiso. Fiduciante - Fiduciario'
    | 'Fideicomiso. Fiduciante - Beneficiario'
    | 'Permuta - Parte 1'
    | 'Permuta - Parte 2 - Bienes Inmuebles'
    | 'Permuta - Parte 2 - Otros Bienes'
    | 'Actos Gratuitos'
    | 'Hipoteca. Constitución'
    | 'Hipoteca. Cancelación Parcial'
    | 'Hipoteca. Cancelación Total'
    | 'Cesión de Derechos'
  estadoCompleta: boolean
}

/**
 * Representa una operación de compra-venta de un inmueble.
 *
 * **Propiedades:**
 * - `tipoDeOperacion: 'Compra - Venta'` - Tipo de operación específico para compra-venta.
 * - `datoDelInmueble: DatoDelInmueble | null` - Datos relacionados al inmueble en la operación.
 * - `sujetosIntervinientes: SujetosIntervinientes | null` - Sujetos involucrados en la operación.
 * - `datosImpositivosDeLaOperacion: DatosImpositivosDeLaOperacion | null` - Información impositiva de la operación.
 */
export interface CompraVenta extends Operacion {
  tipoDeOperacion: 'Compra - Venta'
  datoDelInmueble: null | DatoDelInmueble
  sujetosIntervinientes: null | SujetosIntervinientes
  datosImpositivosDeLaOperacion: null | DatosImpositivosDeLaOperacion
}

/**
 * Representa otras operaciones que no son específicamente compra-venta.
 *
 * **Propiedades:**
 * - Hereda todas las propiedades de la interfaz `Operacion`.
 */
//export interface OtrasOperaciones extends Operacion {
//}

/**
 * Representa una escritura asociada a una operación.
 *
 * **Propiedades:**
 * - `numeroEscritura: number` - Número de la escritura.
 * - `fechaEscritura: Date` - Fecha de la escritura.
 * - `bienesIncluidos: string[]` - Bienes incluidos en la escritura.
 * - `importeTotalEscritura: number` - Importe total de la escritura.
 * - `participaEscribanoAdscripto: boolean` - Indica si el escribano adscripto está involucrado.
 * - `escribanoAbscripto: EscribanoAdscripto | null` - Escribano adscripto en la escritura.
 * - `operacion: Operacion` - Operación asociada a la escritura.
 */
export interface Escritura {
  numeroEscritura: number
  fechaEscritura: Date
  bienesIncluidos: string[]
  importeTotalEscritura: number
  participaEscribanoAdscripto: boolean
  escribanoAbscripto: null | EscribanoAdscripto
  operacion: Operacion
}

/**
 * Representa una declaración jurada, incluyendo detalles del titular y el estado.
 *
 * **Propiedades:**
 * - `id: number` - Identificador único de la declaración jurada.
 * - `periodoFiscal: Date` - Periodo al que pertenece la declaracion jurada en formato MM/YYYY.
 * - `presentacionConMovimientos: boolean` - Si la presentacion es 'con movimientos' o 'sin movimientos'
 * - `escrituras: Escritura[]` - Escrituras incluidas en la declaracion jurada
 * - `finalizada: boolean` - Estado actual de la declaración, e.g., "true" o "false".
 */
export interface DeclaracionJurada {
  id: number
  periodoFiscal: Date
  presentacionConMovimientos: boolean
  escrituras: Escritura[]
  finalizada: boolean
}

/**
 * Representa todas las declaraciones juradas presentadas, incluyendo las que estan incompletas o en proceso de completarse.
 *
 * **Propiedades:**
 * - `declaracionesJuradasFinalizadas: DeclaracionJurada[]` - Contenedor de declaraciones juradas que han sido finalizadas.
 * - `declaracionesJuradasBorrador: DeclaracionJurada[]` - Contenedor de declaraciones juradas que todavia se encuentran en construcción.
 */
export interface DeclaracionesJuradas {
  ddjjs: DeclaracionJurada[]
  declaracionesJuradasFinalizadas: DeclaracionJurada[]
  declaracionesJuradasBorrador: DeclaracionJurada[]
}
