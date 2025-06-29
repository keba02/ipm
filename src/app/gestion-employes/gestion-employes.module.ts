import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ListeEmployesComponent } from './liste-employes/liste-employes.component';
import { ModifierEmployesComponent } from './modifier-employes/modifier-employes.component';
import { SupprimerEmployesComponent } from './supprimer-employes/supprimer-employes.component';
import { AjouterEmployesComponent } from './ajouter-employes/ajouter-employes.component';
import { RouterModule } from '@angular/router';
import { EmployeRoutes } from './gestion-employes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import {  HttpClientModule } from '@angular/common/http';
import { EmployeService } from '../Services/employe.service';
import { CarnetEmployeComponent } from './carnet-employe/carnet-employe.component';
import { RechercheEmployeComponent } from './recherche-employe/recherche-employe.component';
import { NgxMaskModule} from 'ngx-mask';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';
import { EmployerParServiceComponent } from './employer-par-service/employer-par-service.component';
import { ListeEmployerByIdComponent } from './liste-employer-by-id/liste-employer-by-id.component';
import  { MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [ListeEmployesComponent,ListeEmployeComponent, ModifierEmployesComponent, SupprimerEmployesComponent, AjouterEmployesComponent, CarnetEmployeComponent, RechercheEmployeComponent, EmployerParServiceComponent, ListeEmployerByIdComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(EmployeRoutes),
        FormsModule,
        MaterialModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(),
        MatSnackBarModule,
    ],
  providers: [DatePipe]

})
export class GestionEmployesModule { }
