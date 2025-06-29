import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveBaremeComponent } from './save-bareme/save-bareme.component';

export const Baremeroutes: Routes = [
  {
    path: '',
    children: [ {
      path: 'SaveBareme',
      component: SaveBaremeComponent
    }]
},
];

