import { defineStore } from 'pinia';
import type { EscribanoTitular, EscribanoAdscripto, Escribanos } from '@/types/types';

export const useEscribanosStore = defineStore('escribanos', {
  state: () => ({
    escribanoTitular: {
      cuit: '23-11222333-9',
      nombreApellido: 'Juan Pérez',
      numeroMatricula: null,
      numeroRegistro: null,
      codigoProvincia: null,
      localidad: null,
    } as EscribanoTitular,
    escribanosAdscriptos: [] as EscribanoAdscripto[],
  }),
  actions: {
    guardarDatos(escribanos: Escribanos) {
      this.escribanoTitular = escribanos.escribanoTitular;
      this.escribanosAdscriptos = escribanos.escribanosAdscriptos;
    },
  },
});
