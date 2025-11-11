import { effect, Injectable, signal } from '@angular/core';
import { Proyectos } from '../../proyectos/proyectos';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  constructor() {
    effect(() => {
      const data = this.proyectos();
      console.log(data);
      console.log(JSON.stringify(data));
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    });
  }
  private readonly STORAGE_KEY = 'proyectosApp';

  proyectos = signal<Proyecto[]>(this.loadProyectos());

  private loadProyectos(): Proyecto[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data
      ? JSON.parse(data)
      : [
          {
            id: 1,
            nombre: 'Proyecto A',
            descripcion: 'Descripción',
          },
        ];
  }

  // proyectos = signal<Proyecto[]>([

  // {
  // id: 1, nombre: 'Proyecto A',
  // descripcion: 'Descripción'
  // },
  // ])
  delProyecto() {
    this.proyectos.set(this.proyectos().slice(1));
  }
  addProyecto(newProyecto: Proyecto) {
    console.log("hola");
    this.proyectos.set([...this.proyectos(), newProyecto]);
  }
}
