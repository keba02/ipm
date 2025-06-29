import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { Prestation } from 'src/app/Models/Prestations';
import { PrestationService } from 'src/app/Services/prestation.service';
import {KeycloakService} from 'keycloak-angular';
declare const $: any;
declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.css']
})

export class ListPrestationComponent implements OnInit {
  selectFormControl = new FormControl('', Validators.required);
 idp:number
 message: any;
 public tableData: TableData;
 prestation :Prestation=new Prestation();
 listPrestation:Prestation[];
 public dataTable: TableData;
 pres:number;
    isForfait:boolean=false;
    hasAccess: boolean;
  constructor(private prestation_service:PrestationService
    ,private router: Router, private activatedRoute: ActivatedRoute
    ,private formBuilder:FormBuilder,private toastr: ToastrService,public keycloak: KeycloakService) {
        
       }
        // Function to reload the application
  //   refreshPage() {
  //     window.location.reload();
  // }
  currentprestation:Prestation=new Prestation();
  ngOnInit(): void {
    this.initForm();
      this.getAllPrestation()
  }
  getAllPrestation(){
      this.prestation_service.listePrestation().subscribe(
          result => {
              $(function(){
                  (<any>$('#datatable')).DataTable({
                      "pagingType": "full_numbers",
                      "lengthMenu": [
                          [10, 25, 50, -1],
                          [10, 25, 50, "All"]
                      ],
                      responsive: true,
                      retrieve:true,
                      language: {
                          search: "_INPUT_",
                          searchPlaceholder: "Recherche",
                          info: " _START_/_END_ sur _TOTAL_ demandes",
                          paginate: {
                              "first":        "Début",
                              "previous":     "Précédent",
                              "next":         "Suivant",
                              "last":         "Fin"
                          },
                          lengthMenu:"Afficher par _MENU_",
                          infoFiltered:""
                      },


                  });

              })
              this.listPrestation=result;
          });

  }
  initForm(){
    this.prestation_service.dataForm=this.formBuilder.group({
      code_prestation:null,
      libelle:['',[Validators.required]],
      taux_agrees:['',[Validators.required,Validators.maxLength(8)]],
      taux_non_agrees:['',[Validators.required]],
    })
    }

     //Recuperer la prestation correspondant
getPrestationById(prestation){
  this.prestation_service.getPrestationById(prestation.code_prestation).subscribe(
    result => {
      this.currentprestation= result;
      console.log(this.currentprestation);
    }
  );
}
  public updatePrestation(){

    this.prestation_service.ModifierPrestation(this.currentprestation).subscribe(
        
      () =>{
        this.toastr.success('Modification Faite avec Success');
        this.ngOnInit();
        this.router.navigate(['/list-prestation']);
      
      },
      
      (error) =>{
        this.toastr.error("Erreur ")
      }
     
    );
}

/////////////////
ajouterPrestation(){
      this.prestation.forfait=this.isForfait
 this.prestation_service.AjoutPrestation(this.prestation).subscribe(
    (data)=>{this.message=data
    this.getAllPrestation()
        this.showNotification('top', 'center', 1, '<b>Prestation ajoutée avec Sucess</b> :')

    });
    // console.log(this.message);
      // this.ngOnInit();
    // this.router.navigate(['/list-prestation']).then(
    //   () =>{
    //     window.location.reload();
    //   }


}




///////////////////////// Notification
    showNotification(from: any, align: any, idtype: any, note) {
        const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

        //const color = Math.floor((Math.random() * 6) + 1);

        $.notify({
            icon: 'notifications',
            message: note
        }, {
            type: type[idtype],
            timer: 2000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xs-14 col-sm-6 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });


    }
    isSecretaire() {
        this.hasAccess = false
        if (this.keycloak.getUserRoles().includes("secretaire")) {
            this.hasAccess = true

        }

        return this.hasAccess


    }
    isOperateur() {
        this.hasAccess = false
        if (this.keycloak.getUserRoles().includes("operateur")) {
            this.hasAccess = true

        }

        return this.hasAccess


    }
}
