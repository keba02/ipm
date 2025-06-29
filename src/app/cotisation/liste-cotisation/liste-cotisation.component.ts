import { Component, OnInit, NgModule } from '@angular/core';
import { CotsationExcel } from 'src/app/Models/CotsatonExcel';
import { EmployeService } from 'src/app/Services/employe.service';
import { Categorie } from '../../Models/Categorie';
import { ActivatedRoute, Router } from '@angular/router';

//import { PrecomptesRoutingModule } from '../../precomptes/precomptes-routing.module';
import { SidebarModule } from '../../sidebar/sidebar.module';
import * as FileSaver from 'file-saver';
import {FormControl} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {KeycloakService} from 'keycloak-angular';
declare var $:any
@Component({
  selector: 'app-liste-cotisation',
  templateUrl: './liste-cotisation.component.html',
  styleUrls: ['./liste-cotisation.component.css']
})
export class ListeCotisationComponent implements OnInit {
  montant;
  categorie;
  categories:Categorie[];
  modifCategorie: any;
  employe;
  CotisationExcel:CotsationExcel=new CotsationExcel();
  CotisationExcels=[];
  entite
  listEntity
  listCotisationEntity;
  nomEntity: any;
  condition: any;
  categor: string;
  totalDetail:any=[]
    DetailCoti:any=[]
    somme:any;
  trouve
    hasAccess: boolean;
  cumulCotisationEmploye
    isCotisationEffectiveLancee = false
    isCotisationEffectiveTrouvee = false
    isDetailsCotisationTrouve = true
  constructor(private emp_service: EmployeService, private toastr: ToastrService,
              public keycloak: KeycloakService,private router: Router) { }

  ngOnInit(): void {
      // this.getCumulCotisationByEmploye() --> on l'a mis dans le boutton liste coti. effectives
      this.getAllEmplyees()
    this.emp_service.getCategorie().subscribe(
      cat => {
        // console.log(cat);
        this.categories = cat;
        console.log(this.categories);
         //console.log(this.categorie)
      }
    )
    this.emp_service.getEntity().subscribe(data => { 
      this.listEntity=data
      console.log(this.listEntity)

     });

  }

  //on l'utilise pour afficher la liste des cotisations previsionnelles
  getAllEmplyees(){
      this.trouve = false
      this.emp_service.getEmploye().subscribe(data => {
          this.employe = data;
          this.trouve = true
          // console.log(this.employe)

          $(function(){
          (<any>$('#datatableCotisationPrevisionnelle')).DataTable({
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


             });

        })

      });

  }
    detailCotisation(employ){
      console.log(employ.idemp)
        this.somme=null
        this.DetailCoti=[]
        this.emp_service.getDetailsCotisationByIdEmp(employ.idemp).subscribe((data)=>{
                    this.totalDetail=data
                    console.log(data)
            if (this.totalDetail.length == 0){
                this.isDetailsCotisationTrouve = false
            }
            else if(this.totalDetail.length <=1){
                this.somme=this.totalDetail[0].montant

            }else {
            for (const detail of this.totalDetail) {
                this.DetailCoti.push(detail.montant)
                console.log(this.DetailCoti)
                 this.somme=this.DetailCoti.reduce((sum,current)=>sum+current,0)
                console.log(this.somme)


            }

           // this.ngOnInit()

            }

                })

        console.log(this.somme)
         // this.ngOnInit()


    }

  getnomEntity(prest){
    this.listCotisationEntity=null
    console.log(this.listCotisationEntity)
    console.log(prest.idEntity)
      this.listCotisationEntity= this.employe;
      console.log(this.listCotisationEntity)
    this.nomEntity=prest.nom_entity
    this.condition=prest.idEntity
      console.log(this.entite)
    this.listCotisationEntity=this.employe.filter(serv =>serv.ipmEntity.idEntity== this.entite)
    console.log(this.listCotisationEntity)
    $(function(){
      (<any>$('#datatable1')).DataTable({
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
 
    console.log(this.listCotisationEntity)
    for (let i = 0; i < this.listCotisationEntity.length; i++) {
      this.CotisationExcel.Matricule=this.listCotisationEntity[i].matricule
      this.CotisationExcel.Prenom=this.listCotisationEntity[i].prenom
      this.CotisationExcel.nom=this.listCotisationEntity[i].nom
      this.CotisationExcel.Catégorie=this.listCotisationEntity[i].ipm_categorie.libelle
      this.CotisationExcel.solde=this.listCotisationEntity[i].solde
      this.CotisationExcel.MontantAcotiser=this.listCotisationEntity[i].ipm_categorie.montant
      this.CotisationExcels.push({...this.CotisationExcel})
  
      
     }
  }
 
  getnomCategorie(prest){
    console.log(this.categorie,this.montant);
    //console.log(prest);
    this.modifCategorie=prest

  } 
  Enregistrer(){
      console.log(this.montant)
    this.modifCategorie.montant=this.montant
      this.modifCategorie.libelle=this.categorie
    this.emp_service.ModifierCategorie(this.modifCategorie).subscribe(data=>{
      console.log(data);
     // this.ngOnInit()
        this.toastr.success("Modification Montant avec Succès");
    })

  }
  fileDownloadEntity() {
    this.CotisationExcels=null
    this.CotisationExcels=[]
    
    console.log(this.CotisationExcels)
    for (let i = 0; i < this.listCotisationEntity.length; i++) {
      this.CotisationExcel.Matricule=this.listCotisationEntity[i].matricule
      this.CotisationExcel.Prenom=this.listCotisationEntity[i].prenom
      this.CotisationExcel.nom=this.listCotisationEntity[i].nom
      this.CotisationExcel.Catégorie=this.listCotisationEntity[i].ipm_categorie.libelle
      this.CotisationExcel.solde=this.listCotisationEntity[i].solde
      this.CotisationExcel.MontantAcotiser=this.listCotisationEntity[i].ipm_categorie.montant
      this.CotisationExcels.push({...this.CotisationExcel})
  
      
     }
    
    // @ts-ignore
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.CotisationExcels);
        const workbook = { Sheets: { 'fichier_excel': worksheet }, SheetNames: ['fichier_excel'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "CotisationExcel");
       // this.CotisationExcels=null
    });
  }


    exportationCotisationPrevisionnelle(){
        this.CotisationExcels=null
        this.CotisationExcels=[]
        for (let i = 0; i < this.employe.length; i++) {
            this.CotisationExcel.Matricule=this.employe[i].matricule
            this.CotisationExcel.Prenom=this.employe[i].prenom
            this.CotisationExcel.nom=this.employe[i].nom
            this.CotisationExcel.Catégorie=this.employe[i].ipm_categorie.libelle
            this.CotisationExcel.solde=this.employe[i].solde
            this.CotisationExcel.MontantAcotiser=this.employe[i].ipm_categorie.montant
            this.CotisationExcels.push({...this.CotisationExcel})
        }



        console.log(this.CotisationExcels)

        // @ts-ignore
        import("xlsx").then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(this.CotisationExcels);
            const workbook = { Sheets: { 'fichier_excel': worksheet }, SheetNames: ['fichier_excel'] };
            const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, "CotisationExcel");
            //this.CotisationExcels=null
        });
    }


    saveAsExcelFile(buffer:any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

    midif(prest) {
        this.categorie = prest.libelle
        this.montant = prest.montant
        console.log(prest)

    }

   //PARTIE COTISATION ANUELLE
    //ajout du solde global dans le tableau pour chaque employé
    // getCumulCotisationByEmploye(){
    //     this.isCotisationEffectiveLancee = true
    //   this.trouve = false
    //   this.emp_service.getCumulCotisationByEmploye().subscribe(data =>{
    //       // console.log(data);
    //       this.cumulCotisationEmploye = data;
    //       this.trouve = true
    //       if (this.cumulCotisationEmploye.length > 0){
    //           this.isCotisationEffectiveTrouvee = true
    //
    //       $(function(){
    //           (<any>$('#datatableCotisationEffective')).DataTable({
    //               "pagingType": "full_numbers",
    //               "lengthMenu": [
    //                   [10, 25, 50, -1],
    //                   [10, 25, 50, "All"]
    //               ],
    //               responsive: true,
    //               language: {
    //                   search: "_INPUT_",
    //                   searchPlaceholder: "Recherche",
    //                   info: " _START_/_END_ sur _TOTAL_ demandes",
    //                   paginate: {
    //                       "first":        "Début",
    //                       "previous":     "Précédent",
    //                       "next":         "Suivant",
    //                       "last":         "Fin"
    //                   },
    //                   lengthMenu:"Afficher par _MENU_",
    //                   infoFiltered:""
    //               },
    //
    //
    //           });
    //
    //       })
    //       }
    //       // this.employe = data;
    //
    //
    //   })
    // }
    // exportationCotisationEffective() {
    //     this.CotisationExcels=null
    //     this.CotisationExcels=[]
    //     for (let i = 0; i < this.employe.length; i++) {
    //         this.CotisationExcel.Matricule=this.cumulCotisationEmploye[i].ipm_employe.matricule
    //         this.CotisationExcel.Prenom=this.cumulCotisationEmploye[i].ipm_employe.prenom
    //         this.CotisationExcel.nom=this.cumulCotisationEmploye[i].ipm_employe.nom
    //         this.CotisationExcel.Catégorie=this.cumulCotisationEmploye[i].ipm_employe.ipm_categorie.libelle
    //         this.CotisationExcel.solde=this.cumulCotisationEmploye[i].ipm_employe.solde
    //         this.CotisationExcel.MontantAcotiser=this.cumulCotisationEmploye[i].ipm_employe.ipm_categorie.montant
    //         this.CotisationExcel.CotisationAnnuelle=this.cumulCotisationEmploye[i].montant
    //         this.CotisationExcels.push({...this.CotisationExcel})
    //     }
    //
    //
    //
    //     console.log(this.CotisationExcels)
    //
    //     // @ts-ignore
    //     import("xlsx").then(xlsx => {
    //         const worksheet = xlsx.utils.json_to_sheet(this.CotisationExcels);
    //         const workbook = { Sheets: { 'fichier_excel': worksheet }, SheetNames: ['fichier_excel'] };
    //         const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    //         this.saveAsExcelFile(excelBuffer, "CotisationExcel");
    //         //this.CotisationExcels=null
    //     });
    // }
    redirectionVersRaapportCotisationAnnuelle(){
        this.router.navigate(['/rapports/SituationAnnuelle'])
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
