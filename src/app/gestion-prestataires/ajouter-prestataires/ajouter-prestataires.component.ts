import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Prestataire } from 'src/app/Models/Prestataire';
import { TypePrestataire } from 'src/app/Models/TypePrestataire';
import { PrestataireService } from 'src/app/Services/prestataire.service';

@Component({
  selector: 'app-ajouter-prestataires',
  templateUrl: './ajouter-prestataires.component.html',
  styleUrls: ['./ajouter-prestataires.component.css']
})
export class AjouterPrestatairesComponent implements OnInit {
  selectFormControl = new FormControl('', Validators.required);
  constructor(public pres_service:PrestataireService,
    public fb:FormBuilder,public router:Router,private toastr: ToastrService) { }
typePrestataire:TypePrestataire=new TypePrestataire();
typePrestataires:Prestataire[];
  ngOnInit(): void {
    this.initForm();
  }
initForm(){
this.pres_service.dataForm=this.fb.group({
  id_type_prestataire:null,
  libelle:['',[Validators.required]],
  nom_type_prestaire:['',[Validators.required]],

})
}
ajouterTypePres(){

  this.pres_service.AjouterTypePrestataire(this.pres_service.dataForm.value).
  subscribe(data=>{
    console.log(this.pres_service.dataForm.value)
    })
}



}
