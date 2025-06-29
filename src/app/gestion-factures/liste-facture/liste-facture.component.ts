import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { IPM_Details_Facture } from 'src/app/Models/IPM_Details_Factures';
import { Facture } from 'src/app/Models/IPM_Facture';
import { FactureService } from 'src/app/Services/facture.service';
import { UtilisateurService } from 'src/app/Services/utilisateur.service';
import * as moment from 'moment';
// @ts-ignore
//import { SortPipe } from "./shared/pipes/sort.pipe";
declare var $;
@Component({
  selector: 'app-liste-facture',
  templateUrl: './liste-facture.component.html',
  styleUrls: ['./liste-facture.component.css']
})

export class ListeFactureComponent implements OnInit {
  listFacture:IPM_Details_Facture[];
  date1: string;
  nom: any;
  prenom: any;
  matricule: any;
  prestation: any;
  prestataire: any;
  part_ipm: any;
  montant: any;
  part_patient: any;
  dateFacture: any;
  dateEregistrement: any;
  dateEnregistrement: any;
  solde: any;
  cumulCharge: any;
  chargeEmploie: any;
  numFacture: any;
  detailfacture: any;
  certifier:boolean;
  list: IPM_Details_Facture[];
  isCheik:boolean=false;
  listDetail=[]
  Emploie: any;
  undetailfacture: any;
  listEmploie=[];
  booleanCerti: any;
  listCertifier=[];
  liste;
  listes;
    listesss:any =[];
  facture: any;
  elements: IPM_Details_Facture[];
  table;
  idfact: any;
  user: any;
  rolees: any=[]
 factur:Facture=new Facture();
  delai: any;
  nombJour: number;
    hasAccess: boolean;
  
  constructor(private fact_service:FactureService,private datepipe: DatePipe,private user_Service:UtilisateurService,
    private router:Router,private route: ActivatedRoute,public keycloak: KeycloakService)//private sortPipe:SortPipe
  {}


  ngOnInit(): void {
      this.keycloak.loadUserProfile().then( data => {
          console.log(data);
          this.user = data;
          console.log(this.user.username);

      // **********************
         this.user_Service.getUserByUsername(this.user.username).subscribe(data => {
              console.log(data);
              this.user = data;
              this.rolees.push(this.user.roles)
              console.log(this.rolees);



      console.log(this.user);
    this.idfact= this.route.snapshot.params['id'];
    if(this.user.roles[0].typeRole == "gerant" ) {
        this.fact_service.getAllFactureglobale().subscribe(data => {
            $(function () {
                (<any>$('#datatable')).DataTable({
                    "pagingType": "full_numbers",
                    "lengthMenu": [
                        [10, 25, 50, -1],
                        [10, 25, 50, "All"]
                    ],
                    responsive: true,
                    language: {
                        search: "_INPUT_",
                        searchPlaceholder: "Recherche",
                        info: " _START_/_END_ sur _TOTAL_ demandes",
                        paginate: {
                            "first": "Début",
                            "previous": "Précédent",
                            "next": "Suivant",
                            "last": "Fin"
                        },
                        lengthMenu: "Afficher par _MENU_",
                        infoFiltered: ""
                    },


                });

            })

            data.forEach(element => {
                const date = element.DateReception
                console.log(date)
                const b = new Date(date)
                // Définissez la date de référence
                //const referenceDate = moment('2023-02-01');
                const referenceDate = moment(date);


                // Définissez la date actuelle
                const currentDate = moment();

                // Calculez la différence en jours entre les deux dates
                const daysDiff = currentDate.diff(referenceDate, 'days');
                console.log('Nombre de jours écoulés depuis la date de référence : ' + daysDiff);
                element.nombJour = daysDiff
                this.liste = data;
                // this.liste= this.liste.filter(list=>list?.ipm_utilisateur?.roles?.typeRole == this.user.username)
                console.log(this.liste)


            });


            console.log(this.liste);


        });
    }
    console.log(this.user.roles[0].typeRole )
             
    if(this.user.roles[0].typeRole != "gerant" ){
      this.fact_service.getAllFactureglobaleByUser(this.user.id).subscribe(data => {
          $(function(){
              (<any>$('#datatable')).DataTable({
                  "pagingType": "full_numbers",
                  "lengthMenu": [
                      [10, 25, 50, -1],
                      [10, 25, 50, "All"]
                  ],
                  responsive: true,
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
              })

              });


          data.forEach(element => {
              const datee =element.DateReception
              console.log(datee)
              const bb=new Date(datee)
              // Définissez la date de référence
              //const referenceDate = moment('2023-02-01');
              const referenceDatee = moment(datee);

              // Définissez la date actuelle
              const currentDatee = moment();
              // Calculez la différence en jours entre les deux dates
              const daysDifff = currentDatee.diff(referenceDatee, 'days');
              console.log('Nombre de jours écoulés depuis la date de référence : ' + daysDifff);
              element.nombJour=daysDifff
              this.listes = data;
              console.log(this.listes)
              console.log(this.liste);


          });



          console.log(this.listes);


      })
    }

      });
      //const sortedArr = this.sortPipe.transform(this.liste, "desc", "Date");
      })
  }
  getDetFactById(fac){
    //location.reload();
    //(<any>$('#datatable1')).dataTable().fnDestroy();
    console.log(fac.idfacture);
    console.log(fac);
    //console.log(fac.ipmStatutFacture.statutFacture);
    this.router.navigate(['/gestion-factures/certification/'+fac.idfacture]);
    
  }

  UpdateStatutFcature(facture){
    console.log('************************Bonjour***********************');
  }
  
  deleteFactById(fac){
        this.fact_service.annulerfacture(fac.idfacture).subscribe(data=>{
          this.factur=fac.idfacture
          this.liste=fac.idDedtailsFacture;
          console.log(this.factur);
          this.showALERTE('top', 'center')
        },err=>{
          this.showALERTE2('top', 'center')
  
         })
  }

  /////////////////

  showALERTE(from: any, align: any) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

    // const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: 'notifications',
      message: '<b> facture annuler avec succès  </b> :'
    }, {
      type: type[1],
      timer: 13000,
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

  showALERTE2(from: any, align: any) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

    // const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: 'notifications',
      message: '<b>Erreure d enregistrement  </b> :'
    }, {
      type: type[3],
      timer: 13000,
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
