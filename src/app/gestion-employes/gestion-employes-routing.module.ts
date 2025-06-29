import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterEmployesComponent } from './ajouter-employes/ajouter-employes.component';
import { CarnetEmployeComponent } from './carnet-employe/carnet-employe.component';
import { EmployerParServiceComponent } from './employer-par-service/employer-par-service.component';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';
import { ListeEmployesComponent } from './liste-employes/liste-employes.component';
import { ModifierEmployesComponent } from './modifier-employes/modifier-employes.component';
import { RechercheEmployeComponent } from './recherche-employe/recherche-employe.component';
import { SupprimerEmployesComponent } from './supprimer-employes/supprimer-employes.component';
import {ListeEmployerByIdComponent} from "./liste-employer-by-id/liste-employer-by-id.component";

export const EmployeRoutes: Routes = [

  {
    path: '',
    children: [ {
      path: 'rechercheEmploye',
      component: RechercheEmployeComponent
    }]
  },

  {
    path: '',
    children: [ {
      path: 'AjouterEmployes',
      component: AjouterEmployesComponent
    }]
  },

  {
      path: '',
      children: [ {
        path: 'Liste-des-Employes',
        component: ListeEmployeComponent
      }]
  },
  {
    path: '',
    children: [ {
      path: 'employer-par-service/:id',
      component: EmployerParServiceComponent
    }]
},

  {
    path: '',
    children: [ {
      path: 'carnetEmploye/:id',
      component: CarnetEmployeComponent
    }]
},{
  path: '',
  children: [ {
    path: 'ListeEmployes',
    component: ListeEmployesComponent
  }]
},
  {
    path: '',
    children: [ {
      path: 'ListeEmployeById/:id',
      component: ListeEmployerByIdComponent
    }]
  },


  {
        path: '',
        children: [ {
          path: 'ModifierEmployes/:id',
          component: ModifierEmployesComponent
        }]
  },

  {
    path: '',
    children: [ {
      path: 'SupprimerEmployes',
      component: SupprimerEmployesComponent
    }]
},

];


