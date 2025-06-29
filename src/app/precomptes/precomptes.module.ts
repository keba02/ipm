import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { SavePrecomptesComponent } from './save-precomptes/save-precomptes.component';
import { Preroutes } from './precomptes-routing.module';
import { ListPrecomptesMoisComponent } from './list-precomptes-mois/list-precomptes-mois.component';



@NgModule({
  declarations: [SavePrecomptesComponent, ListPrecomptesMoisComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Preroutes),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [DatePipe]
})
export class PrecomptesModule { }
