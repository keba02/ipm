import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjoutPrestationComponent } from './ajout-prestation/ajout-prestation.component';
import { RouterModule } from '@angular/router';
import { PrestationRoutes } from './gestion-prestations-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { ListPrestationComponent } from './list-prestation/list-prestation.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [AjoutPrestationComponent, ListPrestationComponent],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(PrestationRoutes),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule
  ]
})
export class GestionPrestationsModule { }
