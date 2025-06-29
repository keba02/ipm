import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterFacturesComponent } from './ajouter-factures/ajouter-factures.component';
import { CertificationComponent } from './certification/certification.component';
import { FactureEmployesComponent } from './facture-employes/facture-employes.component';
import { ListeFactureComponent } from './liste-facture/liste-facture.component';

export const Factureroutes: Routes = [

  {
    path: '',
    children: [ {
      path: 'Ajouterfactures',
      component:AjouterFacturesComponent
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
      path: 'FactureEmployes',
      component:FactureEmployesComponent
    }]
  },
  {
    path: '',
    children: [ {
      path: 'ListeFacture',
      component:ListeFactureComponent
    }]
  },
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class GestionFacturesRoutingModule { }
