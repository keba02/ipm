import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AjoutCotisationComponent } from './ajout-cotisation/ajout-cotisation.component';
import { ListeCotisationComponent } from './liste-cotisation/liste-cotisation.component';
import { RouterModule } from '@angular/router';
import { routesCotisation } from './cotisation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AjoutCotisationComponent, ListeCotisationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesCotisation),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
})
export class CotisationModule { }
