import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  private localStorageKey = 'listaTareas';

  getTareas():string[] { // se coloca string[] para que se sepa que lo que se obtiene es un array de strings
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || []; // se coloca as string para que no de error y se coloca JSON.parse para que lo que se obtenga sea un array
  }

  agregarTarea(tarea: string) {
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
    // JSON.stringify convierte un objeto o valor de JavaScript en una cadena de texto JSON
    // JSON.parse convierte una cadena de texto JSON en un objeto o valor de JavaScript
    // se crea la variable tareas para guardar todo lo que se obtenga de getTareas y luego se le pushea la tarea que se recibe como parametro
    // luego se guarda o se setea en el localStorage el nuevo array de tareas con la tarea que se agrego con el metodo push y se convierte a string con JSON.stringify 
  }

  eliminarTarea(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1); // el index es el indice de la tarea que se quiere eliminar y el 1 es la cantidad de elementos que se quieren eliminar
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
    // se crea la variable tareas para guardar todo lo que se obtenga de getTareas y luego se le hace un splice para eliminar la tarea que se recibe como parametro
    // luego se guarda o se setea en el localStorage el nuevo array de tareas con la tarea que se agrego con el metodo splice y se convierte a string con JSON.stringify

  }

}
