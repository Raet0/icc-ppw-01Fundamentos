import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

@Component({
  selector: 'add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto {
  name = signal('');
  description = signal('');

  newPoyecto = output<Proyecto>();
  removeProyecto = output<number>();

  addProyecto() {
    const newProyecto: Proyecto = {
      id: Math.floor(Math.random() * 1000),
      nombre: this.name(),
      descripcion: this.description(),
    };

    this.newPoyecto.emit(newProyecto);
    this.name.set('');
    this.description.set('');
  }

  delProyecto(id : number) {
    this.removeProyecto.emit(id);
  }

  changeName(value: string) {
    this.name.set(value);
  }

  changeDescription(value: string) {
    this.description.set(value);
  }
}
