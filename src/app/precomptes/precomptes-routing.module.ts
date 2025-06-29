import { Routes, RouterModule } from '@angular/router';
import { ListPrecomptesMoisComponent } from './list-precomptes-mois/list-precomptes-mois.component';
import { SavePrecomptesComponent } from './save-precomptes/save-precomptes.component';
export const Preroutes: Routes = [
  {
    path: '',
    children: [ {
      path: 'Saveprecomptes',
      component: SavePrecomptesComponent
    }]
},
{
  path: '',
  children: [ {
    path: 'Listprecomptesmois',
    component: ListPrecomptesMoisComponent
  }]
},
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class PrecomptesRoutingModule { }
