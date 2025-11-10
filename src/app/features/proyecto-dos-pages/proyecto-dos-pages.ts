import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectosService } from '../module/services/proyectos-service';
import { ListadoProyectos } from "../proyectos/components/listado-proyectos/listado-proyectos";
import { AddProyecto } from "../module/components/add-proyecto/add-proyecto";

@Component({
  selector: 'app-proyecto-dos-pages',
  imports: [ListadoProyectos, AddProyecto],
  templateUrl: './proyecto-dos-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectoDosPages {

  proyectosService = inject(ProyectosService)
}
