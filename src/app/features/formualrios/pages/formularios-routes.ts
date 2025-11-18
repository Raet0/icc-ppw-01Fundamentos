import { FormularioPage } from './formularioPage/Formularios';
import { Routes } from '@angular/router';
import { FormularioDinamicoPage } from './formularios-dinamicos/formularios-dinamicos';
import { FormulariosMorePage } from './SwitchMas/SwitchMas';

export const formulariosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Formularios Básicos',
        component: FormularioPage,
      },
      {
        path: 'dynamic',
        title: 'Formularios Dinámicos',
        component: FormularioDinamicoPage,
      },
      {
        path: 'more',
        title: 'SwitchMas',
        component: FormulariosMorePage,
      },
    ],
  },
];

