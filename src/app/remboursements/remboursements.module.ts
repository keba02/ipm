import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AjoutRemboursementComponent } from './ajout-remboursement/ajout-remboursement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { ListRemboursementsComponent } from './list-remboursements/list-remboursements.component';
import { CertificationComponent } from './certification/certification.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { rembroutes } from './remboursements-routing.module';
import { CotisationComponent } from './cotisation/cotisation.component';


@NgModule({
  declarations: [AjoutRemboursementComponent,CotisationComponent,
    ListRemboursementsComponent, CertificationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(rembroutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers:[DatePipe]
})
export class RemboursementsModule { }
