import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

// import { SortPipe } from './shared/pipes/sort.pipe';


// import { Factureroutes, GestionFacturesRoutingModule } from './gestion-factures-routing.module';
import { AjouterFacturesComponent } from './ajouter-factures/ajouter-factures.component';
import { RouterModule } from '@angular/router';
import { Factureroutes } from './gestion-factures-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../app.module';
import { FactureEmployesComponent } from './facture-employes/facture-employes.component';
import { ListeFactureComponent } from './liste-facture/liste-facture.component';
import { CertificationComponent } from './certification/certification.component';


@NgModule({
  declarations: [AjouterFacturesComponent, FactureEmployesComponent, ListeFactureComponent, CertificationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Factureroutes),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

    // GestionFacturesRoutingModule
  ],
  providers: [DatePipe],
})
export class GestionFacturesModule { }
