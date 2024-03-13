import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],// RouterOutlet es un componente que se utiliza para mostrar las rutas que se van navegando
  // CommonModule es un modulo que se utiliza para importar directivas como ngIf, ngFor, ngSwitch, ngStyle, ngClass, etc
  // FormsModule es un modulo que se utiliza para importar directivas como ngModel, ngModelGroup, ngForm, ngIf, ngFor, etc
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  listTareas: string[] = []; // se coloca string[] para que se sepa que lo que se obtiene es un array de strings

  nuevaTarea = ''; // se inicializa la variable nuevaTarea como un string vacio

  private _tareasService = inject(TareasService); // se crea una variable privada _tareasService que se inicializa con el metodo inject que recibe como parametro el nombre del servicio que se quiere inyectar


  ngOnInit(): void {
      this.listTareas = this._tareasService.getTareas(); // se inicializa la variable listTareas con el metodo getTareas que se obtiene del servicio _tareasService
  }

  deleteTarea(index: number) {
    this._tareasService.eliminarTarea(index); // se llama al metodo eliminarTarea que se obtiene del servicio _tareasService y se le pasa como parametro el index de la tarea que se quiere eliminar
    this.listTareas = this._tareasService.getTareas(); // se inicializa la variable listTareas con el metodo getTareas que se obtiene del servicio _tareasService y refresca la lista de tareas
  }

  agregarTarea() {
    this._tareasService.agregarTarea(this.nuevaTarea); // se llama al metodo agregarTarea que se obtiene del servicio _tareasService y se le pasa como parametro la nuevaTarea
    this.nuevaTarea = ''; // se inicializa la variable nuevaTarea como un string vacio
    this.listTareas = this._tareasService.getTareas(); // se inicializa la variable listTareas con el metodo getTareas que se obtiene del servicio _tareasService y refresca la lista de tareas
    console.log(this.nuevaTarea);
  }

}
