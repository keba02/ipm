import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { IPM_Bon } from 'src/app/Models/IPM_Bon';
import { Prestation } from 'src/app/Models/Prestations';
import { RapportServiceService } from 'src/app/Services/rapport-service.service';
import {BonService} from '../../Services/bon.service';
import {BonlettreService} from '../../Services/bonlettre.service';
import {KeycloakService} from 'keycloak-angular';
import {UtilisateurService} from '../../Services/utilisateur.service';
import {ToastrService} from 'ngx-toastr';
declare var $:any
@Component({
  selector: 'app-situation-des-bons',
  templateUrl: './situation-des-bons.component.html',
  styleUrls: ['./situation-des-bons.component.css']
})
export class SituationDesBonsComponent implements OnInit {
  listPrestation: Prestation[];
  date2: any;
  date1:any
  d1: string;
  d2: string;
  idpres:any;
  typeBons:any;
  isLinetterie:boolean=false
  listBonGlobalsPrestation:IPM_Bon[];
    strBEm
    mois
    matr
    AgeEmploye
    user: any;
    MonUser: any[];
    listDetailBon:any[];
  listypeBon=[{id:1,value:"pharmacie"},{id:2,value:"consultation"},
   {id:3,value:"lettregrantie"},{id:4,value:"lunetterie"}
  ]
  d3: any;
  constructor(private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,
    private rapportServ:RapportServiceService,private router:Router, private bon_lettreService:BonlettreService,
              private keycloak:KeycloakService,private user_Service:UtilisateurService, private bonService:BonService,
              private toastr: ToastrService) {
    this.dateAdapter.setLocale('en-GB');
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
            console.log(this.user.prenom);
            console.log(this.user.nom);


        })
    }

  ngOnInit(): void {
      console.log(this.MonUser)
    this.rapportServ.getPrestation().subscribe(data=>{
      this.listPrestation=data
      //console.log(this.prestatonChoisi,presta.code_prestation)
    })
    console.log(this.typeBons);

  }
//Prestation Choisi
  getPrestation(presta){
    console.log(presta);
    this.idpres=presta;
   }
  getBonsPeriode(){ 
    this.d1 =this.datepipe.transform(this.date1, 'dd-MM-yyyy');
    this.d2 =this.datepipe.transform(this.date2, 'dd-MM-yyyy');
    console.log(this.d1,this.d2,this.typeBons);
    this.d3=this.typeBons
      console.log(this.typeBons)
      if (this.typeBons=="lunetterie"){
          this.isLinetterie=true
      }else {
          this.isLinetterie=false

      }
    this.rapportServ.getBonByPeriodeBon(this.d1,this.d2,this.typeBons).subscribe(
      result=>{
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
        this.listBonGlobalsPrestation=result;
        console.log(this.listBonGlobalsPrestation);
        if (this.listBonGlobalsPrestation.length==0) {
          this.showNotification('top','center',3,"<b> Il n'existe pas de  bon dans cette période</b> :")         
        }
      }
    )
  }

  //Notification
  showNotification(from: any, align: any, idtype:any,note ) {
    const type = ['', 'success', 'warning', 'danger','info', 'rose', 'primary'];

    //const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
        icon: 'notifications',
        message: note
    }, {
        type: type[idtype],
        timer: 10000,
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
getDetBon(element){
  console.log(element)
}


//Imprimer Situation Annuelle
printSituationBons(){
  let doc=new jsPDF();
  //var imgData = '/assets/img_poste/laposte.png'
  var imgData ='/ipm-fronte/assets/img_poste/laposte.png'

  let col=[["Matricule","Prenom","Nom","Prestataire"]]
  let rows=[]
  for (let situBons of this.listBonGlobalsPrestation) {
    let tmp = [situBons.ipm_employe?.matricule,situBons.ipm_employe?.prenom,situBons.ipm_employe?.nom,situBons.ipm_prestataire?.nom_prestataire]
    rows.push(tmp);
     var nomP=this.d3
     var datedebut=this.d1;
     var datefin=this.d2;
  }
  autoTable(doc,{
    startY:75,
    head:col,
    body:rows,
   // foot:f,
     margin:{ horizontal:10},
     styles:{overflow:"linebreak"},
     bodyStyles:{valign:"top"},
     theme:"striped",
     didDrawPage: function(data){
      //this.bon.ipm_employe=this.message;
         if(doc.getNumberOfPages()==1) {
             doc.addImage(imgData, 'JPEG', 15, 5, 30, 30)
             doc.setFontSize(15)
             doc.text("", 72, 46)
             // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
             doc.setLineWidth(2)
             doc.setDrawColor("#3A6EA5")
             doc.rect(60, 30, 100, 15)
             doc.setFillColor(240, 240, 240)
             //  doc.rect(13,40,185,32,'F')
             //  doc.setFillColor(240,240,240)

             doc.setFontSize(20)
             doc.setTextColor("#3A6EA5")
             doc.text("Situation Bon " + nomP, 74, 40)
             // doc.text(''+nomP,106,40)
             //  doc.setTextColor("")
             const date = new Date()
             doc.setFontSize(13)
             doc.setTextColor("")
             doc.text("Institut de Prévoyance Maladie", 50, 10);
             doc.text("du personnel de la Poste", 60, 17)
             doc.text("Dakar, le :", 150, 18)
             doc.text(date.toLocaleDateString("fr-FR"), 172, 18)
             doc.setTextColor("blue")
             doc.setFontSize(15)
             doc.text("Bon de " + nomP + " du " + datedebut + " au " + datefin, 15, 60)
         }
         var str ="Page " + doc.getNumberOfPages();
         doc.setFontSize(12)

     }
  });
  
  doc.output('dataurlnewwindow');

}

certifierBon(bon){
      bon.certification=true
    console.log(bon)
    this.bon_lettreService.SaveBonLunetterie(bon).subscribe(
        (data)=>{
            console.log(data)
            this.toastr.warning('Certification Effectuée avec Succés !!!')
        }


    )};
    // let col=[["Consultation","Designation","Tarif","Montant"]]
    // let rows=[]
    imprimer(bon) {
    this.bonService.ipm_details_bon_lunetterie(bon.idbon).subscribe((data)=>{
        this.listDetailBon=data
        console.log(this.listDetailBon)
        const dayBEm=new Date();
        this.matr=bon.ipm_employe?.idemp
        const date =bon.ipm_employe?.date_nais
        //this.datePipe.transform(this.message.date_nais, "dd-MM-yyyy");
        //const date =this.message.date_nais
        console.log(date)
        const b=new Date(date)
        const ttoday=new Date();
        this.AgeEmploye = ttoday.getFullYear() - b.getFullYear();
        const m = ttoday.getMonth() - b.getMonth();
        console.log(bon.ipm_employe?.date_nais);
        console.log(m);

        if (dayBEm.getMonth()<10) {
            this.strBEm=dayBEm.getFullYear().toString()
            let m =dayBEm.getMonth()+1
            this.mois=0+''+m
            console.log('infer',this.mois, this.strBEm);


        }else if(dayBEm.getMonth()>9)

        { this.strBEm=dayBEm.getFullYear().toString()
            let m =dayBEm.getMonth()+1
            console.log('sup',this.mois);
            this.mois=m}
        let doc=new jsPDF();
        var imgData = '/ipm-fronte/assets/img_poste/header1.png'

        let colLunetterie=[["Designation","Montant"]]
        let colNonLunetterie=[["Consultation","Designation","Tarif","Montant"]]
        let rows=[]

        if(this.isLinetterie){
            for (let detailbon of this.listDetailBon) {
                let tmp=[detailbon.designation,detailbon.montant]
                rows.push(tmp)
                console.log(rows);
            }
        }else {
            for (let index = 1; index < 10; index++) {
                let tmp=[]
                rows.push(tmp)
            }
        }


        var ipm1=bon.ipm_employe?.prenom
        var ipm2=bon.ipm_employe?.nom
        console.log(ipm2);
        var prestataire=bon.ipm_prestataire?.nom_prestataire
        var Ncarnet=bon.ipm_employe?.numero_carnet
        var ipm3=bon.ipm_employe.ipmService?.type_service
        var ipm4=bon.ipm_employe?.matricule
        var ipm5=bon.ipm_employe?.reference
        var ageE=this.AgeEmploye;
        var sexe=bon.ipm_employe?.sexe
        var prenonConnec =this.user.prenom
        var nomConnec = this.user.nom
        var numBonEmp=bon?.numeroBon
           // this.mois+''+this.strBEm.charAt(2)+''+this.strBEm.charAt(3)+''+this.numero;
        autoTable(doc,{
            startY:100,
            head: this.isLinetterie ?colLunetterie:colNonLunetterie,
            body:rows,
            margin:{ horizontal:10},
            styles:{overflow:"linebreak"},
            bodyStyles:{valign:"top"},
            theme:"grid",
            didDrawPage: function(data){
                //this.bon.ipm_employe=this.message;
                doc.addImage(imgData ,'JPEG',15,5,180,20)
                doc.setFontSize(15)
                doc.text("",72,46)
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2)
                doc.setDrawColor("#3A6EA5")
                doc.rect(60,30,105,20)
                doc.setFillColor(240,240,240)
                doc.rect(13,65,185,35,'F')
                //RECTANGLE PAGE
                //doc.setLineWidth(2)
                //doc.setDrawColor("#3A6EA5")
                //doc.rect(10,100,190,170)
                doc.setFontSize(15)
                doc.setTextColor("#3A6EA5")

                doc.text("BON DE COMMANDE",85,36)
                doc.text("POUR LUNETTERIE",85,45)
                doc.setTextColor("")
                const date=new Date()
                doc.setFontSize(13)
                doc.text("Dakar, le :",150,60)
                doc.text("N° Bon:",13,60)
                doc.text(""+numBonEmp,30,60)

                doc.text(date.toLocaleDateString("fr-FR"),172,60)
                doc.setFontSize(12)
                doc.text("Malade : "+ipm1+" "+ipm2,15,75)
                //doc.text(ipm1,40,75)
                //doc.text(ipm2,80,75)
                doc.text("Matricule : "+ipm4,140,75)
                doc.text("Sexe : "+sexe,140,85)
                doc.setFontSize(12)
                doc.text("N Carnet :",15,85)
                doc.text(""+Ncarnet,40,85)
                doc.text("Age : "+ageE,80,85)

                // doc.text("Nombre D'article :",120,85)
                // doc.text(""+Narticle,160,85)
                // doc.text("Malade:",15,95)
                // doc.text(ipm5,40,95)
                // doc.text(ipm6,80,95)
                doc.text("Service :",100,100)
                doc.text(ipm3,125,100)
                doc.text("Prestataire :",15,95)
                doc.text(prestataire,40,95)
                //  doc.text("N° Ref:",15,95)
                //  doc.text(ipm5,50,95)
                // doc.setFontSize(12)
                //  doc.text("Monsieur,",15,110)
                //  doc.text("Nous avons l'honneur de vous signaler que les frais de versement sont garantis par notre ",15,125)
                // //  doc.text("de:",15,125)
                // //  doc.text("----------------------",15,130)
                //  doc.text("  institution :",15,130)
                //  doc.text("Nous vous serions reconnaissant de bien vouloir nous faire parvenir votre facture dans un délai",15,143)
                //  doc.text(" n'excédant pas deux (02) mois après la date d'établissement de la présente lettre",15,150)

                //  doc.text("Veuillez agréer ,Monsieur,l'expression de notre considération distinguée",15,168)
                doc.text("Demandeur",150,250)

                doc.text(""+prenonConnec+"   "+nomConnec,15,250)
                //  doc.setTextColor("#8C1C13")
                //  doc.text("NB:Nous retourner deux exemplaires avec la facture",15,240)
                //  doc.text("--------------------------------------------------------------------------",15,250)
                //  doc.setTextColor("")
                //  doc.setFontSize(10)
                //  doc.text("Siège Social:Immeuble Direction Générale Rez de Chaussée",100,260)
                //  doc.text("8.Rue Abd.6.M.Paraine BP:11002 Dakar (Sénégal)",100,265)

            }

        })

        doc.output('dataurlnewwindow');      // let data = document.getElementById('noticeModal');
        // const printContents = document.getElementById('noticeModal').innerHTML;
        //    const originalContents = document.body.innerHTML;
        //    document.body.innerHTML = printContents;
        //    window.print();
    })  //    document.body.innerHTML = originalContents;
    }

}
