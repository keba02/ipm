import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutRemboursementComponent } from './ajout-remboursement/ajout-remboursement.component';
import { CertificationComponent } from './certification/certification.component';
import { CotisationComponent } from './cotisation/cotisation.component';
import { ListRemboursementsComponent } from './list-remboursements/list-remboursements.component';
export const rembroutes: Routes = [
  {
    path: '',
    children: [ {
      path: 'AjoutRemboursement',
      component: AjoutRemboursementComponent
    }]
  },
 
  {
    path: '',
    children: [ {
      path: 'certification/:id',
      component: CertificationComponent
    }]
  },
  {
    path: '',
    children: [ {
      path: 'Listremboursements',
      component: ListRemboursementsComponent
    }]
  },
  {
    path: '',
    children: [ {
      path: 'Cotisation',
      component: CotisationComponent
    }]
  },
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class RemboursementsRoutingModule { }
