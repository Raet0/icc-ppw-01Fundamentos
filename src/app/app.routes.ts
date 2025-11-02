import { Routes } from '@angular/router';
import { HomaPage } from './features/homaPage/homaPage';
import { PerfilPage } from './features/PerfilPage/PerfilPage';

export const routes: Routes = [
  {
    path: "",
    component : HomaPage
  },
  {
    path : "perfil",
    component : PerfilPage
  }
];
