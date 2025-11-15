import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ListadoProyectos } from './components/listado-proyectos/listado-proyectos';

@Component({
  selector: 'proyectos',
  imports: [ListadoProyectos],
  templateUrl: './proyectos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Proyectos {
  name = signal('');
  descripcion = signal('');
  
  proyectos = signal<Proyecto[]>([{
    id: 1, nombre: 'Proyecto A',
    descripcion: 'Descripcion'
  },
  ])
  changeName(value : string){
    this.name.set(value);
  }
  changeDescriptiona(value : string){
    this.descripcion.set(value);
  }
  delProyecto() {
    this.proyectos.set(this.proyectos().slice(1));
  }
  addProyecto() {
    const newProyecto: Proyecto = {
      id: this.proyectos().length + 1,
      nombre: this.name(),
      descripcion: this.descripcion(),
    };
    this.proyectos.set([...this.proyectos(), newProyecto]);
    this.name.set('');
    this.descripcion.set('');
  }
}
