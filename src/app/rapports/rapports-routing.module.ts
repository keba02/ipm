import { Routes, RouterModule } from '@angular/router';
import { ChargesIndividuelComponent } from './charges-individuel/charges-individuel.component';
import { CreancesGbalesComponent } from './creances-gbales/creances-gbales.component';
import { SituationAnnuelleComponent } from './situation-annuelle/situation-annuelle.component';
import { SituationDesBonsComponent } from './situation-des-bons/situation-des-bons.component';
import { SituationParPrestationComponent } from './situation-par-prestation/situation-par-prestation.component';
import { SituationPrestationComponent } from './situation-prestation/situation-prestation.component';

export const routes: Routes = [
  {
    path: '',
    children: [ {
      path: 'ChargesIndividuel',
      component: ChargesIndividuelComponent
    }]
},
{
  path: '',
  children: [ {
    path: 'CreancesGlobales',
    component: CreancesGbalesComponent
  }]
},
{
  path: '',
  children: [ {
    path: 'SituationAnnuelle',
    component: SituationAnnuelleComponent
  }]
},{
  path: '',
  children: [ {
    path: 'SituationPrestation',
    component: SituationPrestationComponent
  }]
},
{
  path: '',
  children: [ {
    path: 'situation-par-prestation',
    component: SituationParPrestationComponent
  }]
},
{
  path: '',
  children: [ {
    path: 'Situation-des-bons',
    component: SituationDesBonsComponent
  }]
}

];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class RapportsRoutingModule { }
