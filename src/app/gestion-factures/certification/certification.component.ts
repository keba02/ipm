import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { sum } from 'chartist';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ObjectUnsubscribedError } from 'rxjs';
import { IPM_Details_Facture } from 'src/app/Models/IPM_Details_Factures';
import { IPM_StatutEmploye } from 'src/app/Models/IPM_StatutEmploye';
import { IPM_Statut_Facture } from 'src/app/Models/IPM_Statut_Facture';
import { Prestataire } from 'src/app/Models/Prestataire';
import { Prestation } from 'src/app/Models/Prestations';
import { FactureService } from 'src/app/Services/facture.service';
import { PrestataireService } from 'src/app/Services/prestataire.service';
import { PrestationService } from 'src/app/Services/prestation.service';
import { Employe } from '../../Models/Employe';
import { Facture } from '../../Models/IPM_Facture';
import {IPM_Suivie_Facture} from "../../Models/IPM_Suivie_Facture";
import * as net from "net";
import {KeycloakService} from 'keycloak-angular';
import {UtilisateurService} from '../../Services/utilisateur.service';

type AOA = any;
declare var $;
@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
id;
listFactures:IPM_Details_Facture[];
listFacturess;
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
  chargeEmploie=[];
  listPrestation:Prestation[];
  numFacture: any;
  detailfacture: any;
  certifier:boolean;
  list: IPM_Details_Facture[];
  isCheik:boolean=false;
  listDetail:Employe[]
  Emploie: any;
  undetailfacture: any;
  listEmploie=[];
  booleanCerti: any;
  listCertifier=[];
  liste;
  factureForm:FormGroup;
  facture=new Facture();
  elements: IPM_Details_Facture[];
  table;
  fac;
  id1: any;
  idfac:any
  listFactureCertif: IPM_Details_Facture[];
  numero: any;
  objetEmploye: Employe;
  update: Employe;
  ide: IPM_Statut_Facture;
  statfact: number;
  listPrestataire: Prestataire[];
  ipm_prestataires:Prestataire;
    prestataire_choisi: any;
    id_prest_choisi: any;
    taux_ipm;
    jsonPrest: any;
    val:any;
    prestation_choisi: any;
    id_prestation_choisi: any;
    agree: any;
    non_agree: any;
    Jsonprestations: any;
    numerofacture:number;
    ipm_prestations:Prestation;
  pre: any;
  prestationmodif: any;
  Prestation:any;
  tauxIpmPrestation: any;
  factureAmodifier: any;
  detailFactures: any;
  detailFacturess: any;
  listStatut: any;
    statutChoisi
    ipm_suivie_facture:IPM_Suivie_Facture= new IPM_Suivie_Facture();
    MonUser:any[];
    user:any
    idCertifier=3;
    idRejeter=2;
    idInstance=1;
    idReglementer=6
    idAnnul=4
    libelleRejet="Rejetée"
    libelleCert="Certifiée"
    libelleReglem="Réglementée"
    libelleAnnul="Annulée";
    libelleEnInstance="En Instance de certification"

    forfait:boolean=false;
    montant_forfait

  constructor(private fact_service:FactureService
    ,private route : ActivatedRoute,private router:Router,private prestation_service:PrestationService,
              private pres_service: PrestataireService,private keycloak:KeycloakService,private user_Service:UtilisateurService) {
    this.ide=new IPM_Statut_Facture()

      this.keycloak.loadUserProfile().then( res => {
          console.log(res);
          this.user = res;
          this.MonUser = this.user
          this.getUserByUsernameF(res.username);
      })

  }
    public getUserByUsernameF(username){
        console.log(username);
        return this.user_Service.getUserByUsername(username).subscribe(data => {
            console.log(data);
            this.user = data;
            console.log(this.user);
            console.log(this.user.nom);


        })
    }
  ngOnInit(): void {
    this.prestation_service.getAllPrestation().subscribe(
      pres => {
        // console.log(cat);
        this.listPrestation = pres;
      })
      
    this.id=this.route.snapshot.params['id'];
    console.log(this.id+'****************************')
    
   // this.id1=this.route.snapshot.params['id2'];
    //(<any>$('#datatable')).dataTable().fnDestroy(); 
    this.pres_service.getAllPrestataires().subscribe(
      pres => {
        // console.log(cat);
        this.listPrestataire = pres;
        console.log(this.listPrestataire);
        console.log('****************************')
      }
    );
 ;
    console.log(this.id)
    this.fact_service.getAllFactbyfactglobale2(this.id).subscribe(res=>{
      this.listFacturess=res;
      console.log(res)
    })
    this.fact_service.getAllFactbyfactglobale(this.id).subscribe(data=>{
      this.listFactures=data;
      console.log(data)
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
           
      }); 
         
        console.log(this.listFactures)
        for(let lf of this.listFactures){
          this.certifier=lf.ipmFacture?.certifier
          this.facture=lf.ipmFacture
          this.numero =lf.ipmFacture?.numerofacture
          this.idfac=lf.ipmFacture?.idfacture
          this.statfact=lf.ipmFacture?.ipmStatutFacture?.idStatutFacture;
          this.pre=lf.ipmFacture?.ipm_prestataire?.nom_prestataire
         this.prestationmodif=lf.ipm_prestation?.libelle
          console.log(this.statfact,this.idfac,this.pre,this.prestationmodif)



          
         
        }
        this.fact_service.listStatutFac().subscribe(
            (data)=>{
                this.listStatut=data
                console.log(this.listStatut);
                console.log(this.facture)
                console.log(this.facture.ipmStatutFacture?.statutFacture);
                if(this.facture.ipmStatutFacture?.etape0){
                    console.log(this.listStatut)
                    this.listStatut=this.listStatut.filter(lst =>lst?.etape1 )
                    console.log(this.listStatut)

                }else if (this.facture.ipmStatutFacture?.etape1){
                    this.listStatut=this.listStatut.filter(lst =>lst?.etape2 )

                }else  if (this.facture.ipmStatutFacture?.etape2){
                    this.listStatut=null

                }

            })
      }
    );
    //this.fact_service.getFactureById(this.id).subscribe((data)=>{
      
    //   this.fac=data
    //   this.certifier=this.listFactures.ipmFacture.certifier
    //   =this.fac
    // })
    
    
    
   
    //(<any>$('#datatable1')).dataTable().fnDestroy();

  }
  reglementer(){
    this.facture.reglement=true
    this.fact_service.UpdateFacture(this.facture).subscribe(
      (data)=>{
        this.ngOnInit();
          this.router.navigate(['/gestion-factures/ListeFacture']);
      }

    )

  }

  updateFact(){
      console.log(this.statutChoisi)
      console.log(this.facture)
       this.facture.ipmStatutFacture= this.statutChoisi
        this.fact_service.UpdateFacture(this.facture).subscribe(
            (data)=>{
                if(this.facture.ipmStatutFacture.statutFacture==this.libelleAnnul){
                    this.annullationfac()
                    // this. showALERTE("top","center")

                }
                if(this.facture.ipmStatutFacture.statutFacture==this.libelleCert){
                    this.CertifierEmploye()
                    // this. showALERTES("top","center")
                }
                if(this.facture.ipmStatutFacture.statutFacture==this.libelleRejet){
                    this.RejeterFacture()
                     this. showALERTEReje("top","center")
                }
                if(this.facture.ipmStatutFacture.statutFacture==this.libelleReglem){
                    this.reglementer()
                    this. showALERTESRegl("top","center")
                }
                console.log(this.user)
                console.log(this.facture)
              this.ipm_suivie_facture.ipm_facture=this.facture
                this.ipm_suivie_facture.ipm_statut_facture=this.statutChoisi
                this.ipm_suivie_facture.ipm_utilisateur=this.user
                this.fact_service.suiviFact(this.ipm_suivie_facture).subscribe({
                    next:data=>{
                        console.log(data);
                    }, error:err => {
                        console.log(err);
                    }
                    }

                )
            })


    }

  CertifierEmploye(){
    console.log(this.facture,this.certifier)
    this.listFactureCertif=this.listFacturess
    this.facture.certifier=true;
    // this.ide.idStatutFacture=3
    // console.log(this.listFactureCertif,this.listFacturess)
    // this.facture.ipmStatutFacture=JSON.parse(JSON.stringify(this.ide))
    // console.log(this.facture)
    // //a revoir apres la présentattion
    //  this.fact_service.UpdateFacture(this.facture).subscribe(
    //   (data)=>{
    //     this.ngOnInit();
    //   }
    //
    // )
    // this.fact_service.updateOnEmploye(this.chargeEmploie).subscribe(
    //  (data)=>{
        ///console.log(this.listFactureCertif)
        // for (let j = 0; j < this.listFactureCertif.length; j++) { 
          
        // }                                                                            
  for (let index = 0; index < this.listFactureCertif.length; index++) {
    this.fact_service.getEmployeById(this.listFactureCertif[index].ipm_employe.idemp).subscribe((data)=>{
      this.objetEmploye=data
     // console.log(this.listFactureCertif[index].ipm_employe.idemp,this.objetEmploye)
    // this.listFactureCertif[index]
    console.log(this.objetEmploye.solde);
      this.objetEmploye.solde+=this.listFactureCertif[index].part_patient
      this.objetEmploye.cumul_charge+=this.listFactureCertif[index].part_patient
     this.chargeEmploie.push({...this.objetEmploye})
     // //console.log(this.chargeEmploie);
     this.update=this.objetEmploye
     console.log(this.update,this.update.solde);

       this.fact_service.updateOnEmploye(this.update).subscribe(data=>
        {
          if(index+1==this.listFactureCertif.length)
           {this. showALERTES("top","center")}},
          err=>{
            if(index+1==this.listFactureCertif.length)
            this. showALERTE2("top","center")})
            
    })
    // this.fact_service.updateLemploye(this.chargeEmploie).subscribe(data=>
    //   {if(index+1==this.listFactureCertif.length)
    //   {this. showALERTE("top","center")}},
    //   err=>{
    //     if(index+1==this.listFactureCertif.length)
    //     this. showALERTE2("top","center")})
      //  (data)=>{
    //this.elements.push(element);
  }
}
  //console.log(this.elements);


  
  getFactureById(fact){
    console.log(fact)
    fact.ipmFacture.part_patient-=fact.part_patient
    fact.ipmFacture.part_ipm-=fact.part_ipm
    fact.ipmFacture.montantTotal-=fact.montant_facture
    this.detailFactures=fact
    this.detailFacturess=this.detailFactures

    console.log(fact)
    console.log(this.detailFacturess)

    this.val=fact.ipmFacture.ipm_prestataire?.code_categorie_pretataire
    console.log(fact.ipmFacture.ipm_prestataire?.code_categorie_pretataire,this.val)
    if(this.val==1){
        this.montant_forfait=fact.ipm_prestation.montant_forfait
      this.taux_ipm=fact.ipm_prestation.taux_agrees
      console.log(fact.ipm_prestation.taux_agrees,"agreer")
      //this.part_imp=(5000*this.taux_ipm)/100
     // this.part_patient=5000-(5000*this.taux_ipm)/100
      
    
    }else{
        this.montant_forfait=fact.ipm_prestation.montant_forfait
        console.log(fact.ipm_prestation.taux_non_agrees)
        this.taux_ipm=fact.ipm_prestation.taux_non_agrees
    }
      

    console.log(fact)
    this.factureAmodifier=fact
//     fact.ipm_employe.solde+=fact.part_patient
//     fact.ipm_employe.cumul_charge+=fact.part_patient

//     console.log(fact.ipm_employe.solde,fact);
     this.nom=fact.ipm_employe.nom
    this.prenom=fact.ipm_employe.prenom
     this.matricule=fact.ipm_employe.matricule
     this.prestation=fact.ipm_prestation.libelle
    this.tauxIpmPrestation=fact.ipm_prestation
   
     this.montant=fact.montant_facture
//     this.part_ipm=fact.part_ipm
//     this.part_patient=fact.part_patient
     this.dateFacture=fact.datePrestation
//     this.dateEnregistrement=fact.ipmFacture.date_saisie
//     console.log(this.dateFacture)
     this.prestataire=fact.ipmFacture.ipm_prestataire.nom_prestataire
//     this.numFacture=fact.ipmFacture.numerofacture
// this.solde=fact.ipm_employe.solde
// this.cumulCharge=fact.ipm_employe.cumul_charge
 this.detailfacture=fact
   //// this.chargeEmploie=fac.ipm_employe
    ////this.certifier=this.detailfacture.certifier

  }
 
  getCertified(certifier){
    this.booleanCerti=certifier//pour pouvoir changer le boolean certifier
    certifier.ipm_employe.solde+=certifier.part_patient
    certifier.ipm_employe.cumul_charge+=certifier.part_patient
    this.undetailfacture=certifier
    this.Emploie=certifier.ipm_employe

    this.booleanCerti.certifier=true
    this.booleanCerti.ipm_employe=certifier.ipm_employe
    this.listCertifier.push(this.booleanCerti)

    this.listDetail.push(certifier)
    console.log(this.listDetail)
    this.listEmploie.push(this.Emploie)
    //this.booleanCerti=certifier

    //console.log(this.listEmploie)

   

  }
  certifiGlobal(){
    console.log(this.listEmploie)
    this.fact_service.updateLemploye(this.listEmploie).subscribe(
      (data)=>{}
    )
    console.log(this.listCertifier)
    this.fact_service.updateLdetailFacture(this.listCertifier).subscribe(
      (data)=>{}
    )

  }
  getnomprestataire(prest){
    this.pre=null
    this.prestataire=null
    console.log(prest,prest.nom_prestataire)
    this.prestataire_choisi=prest.nom_prestataire;
    this.id_prest_choisi=prest.code_prestataire;
    this.val=prest.code_categorie_pretataire
    //this.part_imp=(5000*this.taux_ipm)/100
     this.jsonPrest=prest
     this.ipm_prestataires=prest

    console.log(this.prestataire_choisi,this.taux_ipm,"non agrreer")
    this.ipm_prestataires.code_prestataire=prest.code_prestataire;
  }
  retourner(){
    this.router.navigate(['/gestion-factures/ListeFacture']);
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
  showALERTE(from: any, align: any) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

    // const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: 'notifications',
      message: '<b> facture  est  annulée avec succès </b> :'
    }, {
      type: type[3],
      timer: 5000,
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
    showALERTEReje(from: any, align: any) {
        const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

        // const color = Math.floor((Math.random() * 6) + 1);

        $.notify({
            icon: 'notifications',
            message: '<b> facture  est  rejetée avec succès </b> :'
        }, {
            type: type[3],
            timer: 5000,
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
    showALERTES(from: any, align: any) {
        const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

        // const color = Math.floor((Math.random() * 6) + 1);

        $.notify({
            icon: 'notifications',
            message: '<b> facture  statuée avec succès </b> :'
        }, {
            type: type[1],
            timer: 5000,
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
    showALERTESRegl(from: any, align: any) {
        const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

        // const color = Math.floor((Math.random() * 6) + 1);

        $.notify({
            icon: 'notifications',
            message: '<b> facture  Réglementée avec succès </b> :'
        }, {
            type: type[1],
            timer: 5000,
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
    ///////////////////////// Imprimer Duplicata facture
  imprimerfacture(){
  console.log(this.listFactures)
  let doc=new jsPDF();
  //var imgData = '/assets/img_poste/laposte.png'
  var imgData ='/ipm-fronte/assets/img_poste/laposte.png'

  let col=[["Matricule","Prenom","Nom","Prestation","Montant Facture","Charge IPM","Charge Agent"]]
  let rows=[]
  for (let factemp of this.listFactures) {
    let tmp = [factemp.ipm_employe?.matricule, factemp.ipm_employe?.prenom, factemp.ipm_employe?.nom, factemp.ipm_prestation?.libelle, factemp.montant_facture, factemp.part_ipm, factemp.part_patient]
    rows.push(tmp)
    var prestataire=factemp.ipmFacture?.ipm_prestataire.nom_prestataire;
  
  }
  var somme=this.listFactures.reduce((sum,current)=>sum+current.montant_facture,0)
  var sommeCharagent=this.listFactures.reduce((sum,current)=>sum+current.part_ipm,0)
  var sommeChargeIPM=this.listFactures.reduce((sum,current)=>sum+current.part_patient,0)
  console.log(somme);
  let f=[["","","","Total Montants",somme,sommeCharagent,sommeChargeIPM]]
  var num=this.numero;
 
    console.log(num)
  autoTable(doc,{
    startY:75,
    head:col,
    body:rows,
    foot:f,
     margin:{ horizontal:10},
     styles:{overflow:"linebreak"},
     bodyStyles:{valign:"top"},
     theme:"striped",
     didDrawPage: function(data){
      //this.bon.ipm_employe=this.message;
      doc.addImage(imgData ,'JPEG',15,5,30,30)
     doc.setFontSize(15)
     doc.text("",72,46)
    // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
    doc.setLineWidth(2)
    doc.setDrawColor("#3A6EA5")
    doc.rect(60,30,100,15)
    doc.setFillColor(240,240,240)
    //  doc.rect(13,40,185,32,'F')
    //  doc.setFillColor(240,240,240)
     
     doc.setFontSize(15)
     doc.setTextColor("#3A6EA5")
     doc.text("Duplicata Facture",77,40)
     doc.setTextColor("")
      const date=new Date()
         doc.setFontSize(13)
          doc.text("Dakar, le :",150,18)
          doc.text("Numero Facture:",15,60)
          doc.text(''+num,50,60)
          doc.text("Prestataire:",15,72) 
          doc.text(""+prestataire,40,72)     
      doc.text(date.toLocaleDateString("fr-FR"),172,18)
         doc.setFontSize(12)

     }
  });
  
  doc.output('dataurlnewwindow');


}
/////////////////Fin Duplicata Facture 
showALERTE3(from: any, align: any) {
  const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

  // const color = Math.floor((Math.random() * 6) + 1);

  $.notify({
    icon: 'notifications',
    message: '<b>Erreur lors de la suppression </b> :'
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
showALERTE1(from: any, align: any) {
  const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

  // const color = Math.floor((Math.random() * 6) + 1);

  $.notify({
    icon: 'notifications',
    message: '<b> facture  annuller avec succès </b> :'
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
// deleteFactById(){
//   console.log(this.idfac);
//   this.fact_service.annulerfactureGlobles(this.idfac).subscribe(data=>{
//     this.listFactures=this.idfac
//     console.log(this.listFactures);
//     this.showALERTE('top', 'center')
//   },err=>{
//     this.showALERTE3('top', 'center')

//    })
// }
annullationfac(){
 // console.log(this.idfac);
  //this.ide.idStatutFacture=4
  //this.facture.ipmStatutFacture=JSON.parse(JSON.stringify(this.ide))
  // this.fact_service.annullerFacture(this.facture).subscribe(data=>{
  //   this.listFactures=this.idfac
  //   this.router.navigate(['/gestion-factures/ListeFacture']);
  //   console.log(this.listFactures);
  //   this.showALERTE('top', 'center')
  // },err=>{
  //   this.showALERTE3('top', 'center')
  //
  //  })
   this.listFactureCertif =this.listFacturess
    console.log(  this.listFactureCertif )
   for (let index = 0; index < this.listFactureCertif.length; index++) {
    this.fact_service.getEmployeById(this.listFactureCertif[index].ipm_employe.idemp).subscribe((data)=>{
      this.objetEmploye=data
     // console.log(this.listFactureCertif[index].ipm_employe.idemp,this.objetEmploye)
    // this.listFactureCertif[index]
    console.log(this.objetEmploye.solde);
      this.objetEmploye.solde-=this.listFactureCertif[index].part_patient
      this.objetEmploye.cumul_charge-=this.listFactureCertif[index].part_patient
     this.chargeEmploie.push({...this.objetEmploye})
     // //console.log(this.chargeEmploie);
     this.update=this.objetEmploye
     console.log(this.update,this.update.solde);

       this.fact_service.updateOnEmploye(this.update).subscribe(data=>
        {
          if(index+1==this.listFactureCertif.length)
           {this. showALERTE("top","center")}},
          err=>{
            if(index+1==this.listFactureCertif.length)
            this. showALERTE2("top","center")})
            
    })
    // this.fact_service.updateLemploye(this.chargeEmploie).subscribe(data=>
    //   {if(index+1==this.listFactureCertif.length)
    //   {this. showALERTE("top","center")}},
    //   err=>{
    //     if(index+1==this.listFactureCertif.length)
    //     this. showALERTE2("top","center")})
      //  (data)=>{
    //this.elements.push(element);
  }
}


RejeterFacture(){
  console.log(this.facture,this.certifier)
  this.listFactureCertif=this.listFactures
 // this.facture.certifier=true;
    console.log();
  this.ide.idStatutFacture=this.idRejeter
  this.facture.ipmStatutFacture=JSON.parse(JSON.stringify(this.ide))
  console.log(this.facture)
  //a revoir apres la présentattion
   this.fact_service.UpdateFacture(this.facture).subscribe(
    (data)=>{
      // this.ngOnInit();
      this.router.navigate(['/gestion-factures/ListeFacture']);
    }


  )
    // this.ide.idStatutFacture=1
    // this.facture.ipmStatutFacture=JSON.parse(JSON.stringify(this.ide))


}
getnom(pret){
  this.prestationmodif=null
  this.prestation=null
  console.log(pret)
  this.ipm_prestations=pret
  this.prestation_choisi=pret.libelle;
  this.id_prestation_choisi=pret.code_prestation;
  this.agree=pret.taux_agrees
  this.non_agree=pret.taux_non_agrees
    this.montant_forfait= pret.montant_forfait
    this.forfait=pret.forfait
    this.Jsonprestations=pret;
 if(this.val==1){
  this.taux_ipm=this.agree
  console.log(this.taux_ipm,"agreer")
  //this.part_imp=(5000*this.taux_ipm)/100
 // this.part_patient=5000-(5000*this.taux_ipm)/100
  

}else console.log(this.non_agree)
this.taux_ipm=this.non_agree
  console.log(this.ipm_prestations);
  console.log(this.id_prestation_choisi);
  let detailsFac =[];
  for(let i =0; i<this.id_prestation_choisi; i++){
   let DetailsePannier=this.id_prestation_choisi[i];
   //mettre les montants  dans la variable tableau avec tous les montants
   detailsFac.push(DetailsePannier);
   console.log(detailsFac);
 }
}
modifierFacture(){
  this.factureAmodifier.montant_facture=this.montant
  console.log(this.factureAmodifier)
    this.factureAmodifier.ipmFacture.ipmStatutFacture.idStatutFacture=this.idInstance
  console.log(this.taux_ipm)
  if (this.ipm_prestataires) {

    this.factureAmodifier.ipmFacture.ipm_prestataire=this.ipm_prestataires
    this.getnomprestataire(this.ipm_prestataires)
    console.log(this.taux_ipm+"--------if prestataire-----------")

   
  }
  if (this.ipm_prestations) {
      console.log('  changer');
      console.log(this.ipm_prestations);
      if(this.ipm_prestations.forfait){
          console.log('forfait');
          if (this.montant <= this.montant_forfait){
              this.factureAmodifier.part_ipm=this.montant
              this.factureAmodifier.part_patient=0


          }else {
              this.factureAmodifier.part_ipm=this.montant_forfait
              this.factureAmodifier.part_patient=this.montant-this.montant_forfait
          }

      }else {
          console.log('non forfait');
          this.factureAmodifier.part_ipm=(this.montant*this.taux_ipm)/100
          this.factureAmodifier.part_patient=this.montant-(this.montant*this.taux_ipm)/100
      }

    this.factureAmodifier.ipm_prestation=this.ipm_prestations
    this.getnom(this.ipm_prestations)


    console.log(this.taux_ipm+"--------if-----------")
  }else{
      console.log(' non changer');
      if(this.factureAmodifier.ipm_prestation.forfait){
          console.log('forfait');
          if (this.montant <= this.montant_forfait){
              this.factureAmodifier.part_ipm=this.montant
              this.factureAmodifier.part_patient=0


          }else {
              this.factureAmodifier.part_ipm=this.montant_forfait
              this.factureAmodifier.part_patient=this.montant-this.montant_forfait
          }

      }else {
          console.log('non forfait');
          this.factureAmodifier.part_ipm=(this.montant*this.taux_ipm)/100
          this.factureAmodifier.part_patient=this.montant-(this.montant*this.taux_ipm)/100
      }
  }
  console.log(this.detailFacturess)
  
  console.log(this.factureAmodifier)
  this.factureAmodifier.ipmFacture.part_patient+=this.factureAmodifier.part_patient
  this.factureAmodifier.ipmFacture.part_ipm+=this.factureAmodifier.part_ipm
  this.factureAmodifier.ipmFacture.montantTotal+=this.factureAmodifier.montant_facture
  console.log(this.factureAmodifier)  
  this.fact_service.UpdateFacture(this.factureAmodifier.ipmFacture).subscribe(data=>{

  })
  this.fact_service.updateDetailfact(this.factureAmodifier).subscribe(data=>{

      this.showNotification('top', 'center', 1, '<b>Modifiée avec succes</b> :')
      this.facture.ipmStatutFacture.statutFacture=this.libelleEnInstance
  })

}
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
}
