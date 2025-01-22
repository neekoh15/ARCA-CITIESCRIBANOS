import { defineStore } from 'pinia';
import type { DeclaracionesJuradas, DeclaracionJurada } from '@/types/types';

export const useDDJJStore = defineStore('ddjjs', {
  state: () => ({
    declaracionesJuradas: {
      ddjjs: [] as DeclaracionJurada[],
      declaracionesJuradasFinalizadas: [] as DeclaracionJurada[],  // Declaraciones juradas finalizadas
      declaracionesJuradasBorrador: [] as DeclaracionJurada[],     // Declaraciones juradas en borrador
    } as DeclaracionesJuradas,
  }),
  actions: {
    agregarDeclaracionJurada(ddjj: DeclaracionJurada) {

          let index = this.declaracionesJuradas.ddjjs.indexOf(ddjj)

          if (index !== -1) {
            this.declaracionesJuradas.ddjjs[index] = ddjj;
          }
          else {
            this.declaracionesJuradas.ddjjs.push(ddjj)
          }


          index = this.declaracionesJuradas.declaracionesJuradasFinalizadas.indexOf(ddjj);
          if (index !== -1) {
            this.declaracionesJuradas.declaracionesJuradasFinalizadas[index] = ddjj;
            return
          }


          index = this.declaracionesJuradas.declaracionesJuradasBorrador.indexOf(ddjj);
          if (index !== -1) {
            this.declaracionesJuradas.declaracionesJuradasBorrador[index] = ddjj;
            return
          }

          if (ddjj.finalizada) {
            this.declaracionesJuradas.declaracionesJuradasFinalizadas.push(ddjj)
          }
          else {
            this.declaracionesJuradas.declaracionesJuradasBorrador.push(ddjj)
          }

        },


    // Actualizar los arrays y forzar la clasificación de las declaraciones
    updateDeclaracionesJuradas() {
      this.declaracionesJuradas.declaracionesJuradasFinalizadas = [] as DeclaracionJurada[];
      this.declaracionesJuradas.declaracionesJuradasBorrador = [] as DeclaracionJurada[];

      this.declaracionesJuradas.declaracionesJuradasFinalizadas.forEach((ddjj) => {
        if (ddjj.finalizada) {
          this.declaracionesJuradas.declaracionesJuradasFinalizadas.push(ddjj);
        } else {
          this.declaracionesJuradas.declaracionesJuradasBorrador.push(ddjj);
        }
      });
    },
  },
});
