import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutCotisationComponent } from './ajout-cotisation/ajout-cotisation.component';
import { ListeCotisationComponent } from './liste-cotisation/liste-cotisation.component';

export const routesCotisation: Routes = [
  {
    path: '',
    children: [ {
      path: 'AjoutCotisation',
      component: AjoutCotisationComponent
    }]
  },
  {
    path: '',
    children: [ {
      path: 'ListeCotisation',
      component: ListeCotisationComponent
    }]
},
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class CotisationRoutingModule { }
