import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { PerfilPage } from './features/PerfilPage/PerfilPage';
import { ProyectoDosPages } from './features/proyecto-dos-pages/proyecto-dos-pages';
import { Proyectos } from './features/proyectos/proyectos';

export const routes: Routes = [
  {
    path: "",
    component : HomePage
  },
  {
    path : "perfil",
    component : PerfilPage
  },
  {
    path : "proyectos",
    component : Proyectos
  },
  {
    path : "proyecto-dos-pages",
    component : ProyectoDosPages
  },
];
