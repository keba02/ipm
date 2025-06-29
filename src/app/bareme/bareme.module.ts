import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveBaremeComponent } from './save-bareme/save-bareme.component';
import { RouterModule } from '@angular/router';
import { Baremeroutes } from './bareme-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [SaveBaremeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Baremeroutes),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: []
})
export class BaremeModule { }

