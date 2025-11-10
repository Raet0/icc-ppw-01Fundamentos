import { Injectable, signal } from '@angular/core';
import { Proyectos } from '../../proyectos/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() { }
    proyectos = signal<Proyecto[]>([
      {
        id: 1, nombre: 'Proyecto A',
        descripcion: 'Descripción'
      },
    ])
  addProyecto(newProyecto: Proyecto){
    this.proyectos.set([...this.proyectos(),newProyecto])
  }

}
