import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter, VERSION } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { element } from 'protractor';
import { Cotisation } from 'src/app/Models/CotisatonGlobal';
import { DetailCotisation } from 'src/app/Models/IPM_Cotisation';
import { RapportServiceService } from 'src/app/Services/rapport-service.service';
import {EmployeService} from '../../Services/employe.service';
import * as FileSaver from 'file-saver';
import {CotsationExcel} from '../../Models/CotsatonExcel';

declare var $:any


@Component({
  selector: 'app-situation-annuelle',
  templateUrl: './situation-annuelle.component.html',
  styleUrls: ['./situation-annuelle.component.css']
})
export class SituationAnnuelleComponent implements OnInit {
  detailsCotisations:DetailCotisation[];
  selectedYear: number;
  selectedY: number;
  years: number[] = [];
  mois:any;
  mois1: any;
  desactive:boolean;
  listOfMonths= [{id:1,value:'Janvier'}, {id:2, value:'Février'}, {id:3, value:'Mars'}, {id:4, value:'Avril'}, {id:5, value:'Mai'}, {id:6, value:'Juin'}
   ,{id:7, value:'Juillet'},{id:8, value:'Aout'},{id:9, value:'Septembre'},{id:10, value:'Octobre'},{id:11, value:'Novembre'},{id:12, value:'Décembre'}];
  listCotisations: DetailCotisation[];
  nomCotisation: any;

    isCotisationEffectiveLancee = false
    loading = false
    isCotisationEffectiveTrouvee = false
    cumulCotisationEmploye
    sommeDetailCotisation
    CotisationExcels=[];
    CotisationExcel:CotsationExcel=new CotsationExcel();



    constructor(private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,
                private rapportServ:RapportServiceService,private emp_service: EmployeService,) {
   this.selectedYear = new Date().getFullYear();
    let y:number=this.selectedYear-9
    console.log(this.selectedYear)
    for (let year = this.selectedYear; year >= y; year--) {
      this.years.push(year);
    }
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
  
  }
  getChoixAnne(year){
    this.selectedY=year
  }

  getCumulAnnee(){
    this.desactive=false
       this.rapportServ.getCumulCotisationAnnee(this.selectedY).subscribe(
        result=>{
        this.detailsCotisations=result
        // console.log(this.detailsCotisations);
        if (this.detailsCotisations.length==0) {
          this.desactive=true
    
          this.showNotification('top','center',3,"<b> verifer la date ou l'entite</b> :")
  
           }
        
         this.mois=new Date(this.detailsCotisations[0].ipm_cotisation?.date).getMonth()+1;
        console.log(this.mois,new Date(this.detailsCotisations[0].ipm_cotisation?.date));
        this.detailsCotisations.forEach(element => {      
          this.listOfMonths.forEach(lmt => {
            if (new Date(element.ipm_cotisation?.date).getMonth()+1==lmt.id) {
              // console.log(lmt.value,new Date(element.ipm_cotisation?.date).getMonth(),lmt.id)
            
              element.ipm_employe.justificatif=lmt.value;
              // console.log(element.ipm_employe.justificatif);

             // console.log(element.ipm_employe?.justificatif);
            }

          }) 
       });
     
        console.log(this.detailsCotisations.length);
        // console.table(this.detailsCotisations);
        
          }
       )


     


  }
  getDetailsCotisation(element){        
    console.log(element.ipm_cotisation?.idCotisation)
        this.rapportServ.getDetailsCotisationByEmploye(element.ipm_cotisation?.idCotisation).subscribe(
          result => {
            this.listCotisations= result;
            // console.log(element);
            this.mois1=element.ipm_employe.justificatif
          }
        )
  }
  
  showNotification(from: any, align: any, idtype:any,note ) {
    const type = ['', 'success', 'warning', 'danger','info', 'rose', 'primary'];

    //const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
        icon: 'notifications',
        message: note
    }, {
        type: type[idtype],
        timer: 600,
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

//Imprimer Situation Annuelle
printSituationAnnuelle(){
  let doc=new jsPDF();
  //var imgData = '/assets/img_poste/laposte.png'
  var imgData ='/ipm-fronte/assets/img_poste/laposte.png'

  let col=[["Matricule","Prenom","Nom","Montant Cotisé","Date Cotisation"]]
  let rows=[]
  for (let situAnnee of this.listCotisations) {
    let tmp = [situAnnee.ipm_employe?.matricule,situAnnee.ipm_employe?.prenom,situAnnee.ipm_employe?.nom,situAnnee.montant,situAnnee.ipm_cotisation?.date]
    rows.push(tmp);
    var montantCotisa=situAnnee.ipm_cotisation?.montant_totals;
    var mois=this.mois1;
    // console.log(this.mois1);
  }
  // var somme=this.listFactures.reduce((sum,current)=>sum+current.montant_facture,0)
  // var sommeCharagent=this.listFactures.reduce((sum,current)=>sum+current.part_ipm,0)
  // var sommeChargeIPM=this.listFactures.reduce((sum,current)=>sum+current.part_patient,0)
  // console.log(somme);
  // let f=[["","","","Total Montants",somme,sommeCharagent,sommeChargeIPM]]
   
 

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
             doc.setTextColor("")
             doc.text("Institut de Prévoyance Maladie", 50, 10);
             doc.text("du personnel de la Poste", 60, 17)
             doc.setFontSize(15)
             doc.setTextColor("#3A6EA5")
             doc.text("Rapport Situation Annuelle", 77, 40)
             doc.setTextColor("")
             const date = new Date()
             doc.setFontSize(13)
             doc.text("Dakar, le :", 150, 18)
             doc.text("Mois de:", 15, 60)
             doc.text('' + mois, 35, 60)
             doc.text("Montant Totals:", 15, 72)
             doc.text("" + montantCotisa, 50, 72)
             doc.text(date.toLocaleDateString("fr-FR"), 172, 18)
         }
         var str ="Page " + doc.getNumberOfPages();
         doc.setFontSize(12)

     }
  });
  
  doc.output('dataurlnewwindow');

}
  
  // NOUVEAU : ON RECUPERER TOUS LES CUMULS MEME POUR LES EMPLOYES QUI N'ONT PAS COTISÉ
    getCumulCotisationByEmploye(){
        // this.clearDataTable()
        this.initDataTable()
        this.cumulCotisationEmploye = null
        this.isCotisationEffectiveLancee = true
        this.loading = true
        // this.isCotisationEffectiveTrouvee = false
      this.emp_service.getCumulCotisationByEmploye(this.selectedY).subscribe(data =>{
          // console.log(data);
          this.cumulCotisationEmploye = data;
          // console.log(this.cumulCotisationEmploye);
          this.loading = false
          if (this.cumulCotisationEmploye.length > 0){
              this.isCotisationEffectiveTrouvee = true

          }else {
             this.isCotisationEffectiveTrouvee = false
          }
          // this.employe = data;


      })
    }



    detailCotisation(employ){
        console.log(employ)
        // this.somme=null
        // this.DetailCoti=[]
        this.emp_service.getDetailsCotisationByIdEmp(employ.ipm_employe.idemp,this.selectedY).subscribe((data)=>{
            this.listCotisations=data
            console.log(this.listCotisations)

            this.sommeDetailCotisation = employ.montant

        })


    }

    exportationCotisationEffective() {
        this.CotisationExcels=null
        this.CotisationExcels=[]
        for (let i = 0; i < this.cumulCotisationEmploye.length; i++) {
            this.CotisationExcel.Matricule=this.cumulCotisationEmploye[i].ipm_employe.matricule
            this.CotisationExcel.Prenom=this.cumulCotisationEmploye[i].ipm_employe.prenom
            this.CotisationExcel.nom=this.cumulCotisationEmploye[i].ipm_employe.nom
            this.CotisationExcel.Catégorie=this.cumulCotisationEmploye[i].ipm_employe.ipm_categorie.libelle
            this.CotisationExcel.solde=this.cumulCotisationEmploye[i].ipm_employe.solde
            this.CotisationExcel.MontantAcotiser=this.cumulCotisationEmploye[i].ipm_employe.ipm_categorie.montant
            this.CotisationExcel.CotisationAnnuelle=this.cumulCotisationEmploye[i].montant
            this.CotisationExcels.push({...this.CotisationExcel})
        }



        // console.log(this.CotisationExcels)

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

    clearDataTable() {
        const dataTable = (<any>$('#datatable')).DataTable();
        dataTable.destroy();
    }

    initDataTable(){
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
    }

}
