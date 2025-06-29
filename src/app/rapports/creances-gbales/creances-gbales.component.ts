import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { TableData } from 'src/app/md/md-table/md-table.component';

import { Entity } from 'src/app/Models/Entity';
import { IPM_Details_Facture } from 'src/app/Models/IPM_Details_Factures';
//import { EmployeService } from 'src/app/Services/employe.service';
import { RapportServiceService } from 'src/app/Services/rapport-service.service';
import { BonConsultationComponent } from '../../gestion-bons/bon-consultation/bon-consultation.component';
declare var $: any
@Component({
  selector: 'app-creances-gbales',
  templateUrl: './creances-gbales.component.html',
  styleUrls: ['./creances-gbales.component.css']
})
export class CreancesGbalesComponent implements OnInit {
  listEntiy: Entity[];
  date2: any;
  date1: any
  enti: any;
  listCreanceGlobales: IPM_Details_Facture[];
  listCreanceEntites: IPM_Details_Facture[]=[]
  list: number;
  DesatverBouton: boolean = false
  d1: string;
  d2: string;
  tout: string = "tout"
  entity:any;
  entities: any;
  attente: any;
  attente2: string;
  listCreanceParEntity: IPM_Details_Facture[];
affiche:boolean=false

  constructor(private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe, private rapportServ: RapportServiceService) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.rapportServ.getEntity().subscribe(data => {
      this.listEntiy = data
      console.log(this.listEntiy)

    })
    // this.getCreanceglobale()

  }
  getCreanceglobale() {
    this.d1 = this.datepipe.transform(this.date1, 'dd-MM-yyyy');
    this.d2 = this.datepipe.transform(this.date2, 'dd-MM-yyyy');
    
    
    if (this.enti   && this.d1 && this.d2) {
      this.rapportServ.getGlobaleParEntity(this.d1, this.d2, this.enti.idEntity).subscribe(
        result => {
          this.listCreanceEntites = result
          //this.list=this.listCreanceGlobales.length
          console.log(this.listCreanceEntites.length)
          console.log(this.listCreanceEntites)
          this.listCreanceEntites= this.listCreanceEntites.filter( (list=>list?.ipmFacture?.ipmStatutFacture?.etape0!=true))
            console.log( this.listCreanceEntites)
         this.affiche=true
          $(function () {
            (<any>$('#datatable')).DataTable({
              "pagingType": "full_numbers",
              "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
              ],
              responsive: true,
              retrieve: true,
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
        })
      if (this.listCreanceEntites.length == null) {
            this.showNotification('top', 'center',3, "<b> verifer la date ou l'entite</b> :")
        }
      
   


  }
  else 
  this.rapportServ.getSituationIndividuel(this.d1, this.d2).subscribe(
    result => {
      $(function () {
        (<any>$('#datatable')).DataTable({
          "pagingType": "full_numbers",
          "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
          ],
          responsive: true,
          retrieve: true,
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
      this.listCreanceGlobales = result
      //this.list=this.listCreanceGlobales.length
      console.log(this.listCreanceGlobales.length)

     

    })



}
  retourserach()
  {
    console.log('************************************');
    window.location.reload();
  }
  
  getEntity(ent) {
    console.log(ent)
    this.enti = ent
    this.attente = this.enti.nom_entity

  }
  getEntout() {
    this.attente = ""
  }
  imprimer() {
    let doc = new jsPDF();
    //var imgData = '/assets/img_poste/laposte.png'
    var imgData ='/ipm-fronte/assets/img_poste/laposte.png'

    let col = [["Matricule", "Nom", "Prénom", "Montant ", "Charge IPM", "Charge Agent"]]
    let rows = []

    //let tmp=[this.designation,this.nombre_article]
    for (let liste of this.listCreanceEntites) {
      let tmp = [liste.ipm_employe?.matricule, liste.ipm_employe?.nom, liste.ipm_employe?.prenom, liste.montant_facture, liste.part_ipm, liste.part_patient]
      rows.push(tmp)
      var ipm1 = liste.ipm_employe?.nom

      var ipm2 = liste.ipm_employe?.prenom
      var ipm3 = liste.ipm_employe?.matricule
    }
    var somme1 = this.listCreanceEntites.reduce((sum, current) => sum + current.part_ipm, 0);
    console.log(somme1)
    var somme2 = this.listCreanceEntites.reduce((sum, current) => sum + current.part_patient, 0);
    var somme3 = this.listCreanceEntites.reduce((sum, current) => sum + current.montant_facture, 0);
    var entite = this.attente
    var date1 = this.d1
    var date2 = this.d2

    let f = [["", "", "Total ", somme3, somme1, somme2]]




    autoTable(doc, {
      startY: 70,
      head: col,
      body: rows,
      foot: f,
      margin: { horizontal: 10 },
      styles: { overflow: "linebreak" },
      bodyStyles: { valign: "top" },
      theme: "striped",
      pageBreak:"auto",
      didDrawPage: function (data) {
        //this.bon.ipm_employe=this.message;
        if(doc.getNumberOfPages()==1) {
          doc.addImage(imgData, 'JPEG', 15, 5, 30, 30)
          doc.setFontSize(15)
          doc.text("", 72, 46)
          // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
          doc.setLineWidth(2)
          doc.setDrawColor("#3A6EA5")
          doc.rect(60, 30, 105, 20)
          //doc.setFillColor(240,240,240)
          //doc.rect(13,65,185,23,'F')
          //doc.setFillColor(240,240,240)

          doc.setFontSize(15)
          doc.setTextColor("#3A6EA5")

          doc.text("Créance globale périodique ", 85, 40)
          doc.text("de " + entite, 105, 47)
          doc.text("rapport périodique du " + date1 + " au " + date2, 20, 65)

          doc.setTextColor("")
          const date = new Date()
          doc.setFontSize(12)
          doc.text("Dakar, le :", 150, 10)
          doc.setFontSize(12)
          doc.text("Institut de Prévoyance Maladie ", 50, 10)
          doc.text("du personnel de la Poste ", 60, 17)

          doc.text(date.toLocaleDateString("fr-FR"), 172, 10)
        }
        var str ="Page " + doc.getNumberOfPages();
        doc.setFontSize(12)

      }
    });

    doc.output("dataurlnewwindow");

  }

  imprimerTout() {
    let doc = new jsPDF('p','mm','a4');
    //var imgData = '/assets/img_poste/laposte.png'
    var imgData ='/ipm-fronte/assets/img_poste/laposte.png'


    let col = [["Matricule", "Nom", "Prénom", "Montant ", "Charge IPM", "Charge Agent"]]
    let rows = []

    //let tmp=[this.designation,this.nombre_article]
    for (let liste of this.listCreanceGlobales) {
      let tmp = [liste.ipm_employe?.matricule, liste.ipm_employe?.nom, liste.ipm_employe?.prenom, liste.montant_facture, liste.part_ipm, liste.part_patient]
      rows.push(tmp)
      var ipm1 = liste.ipm_employe?.nom

      var ipm2 = liste.ipm_employe?.prenom
      var ipm3 = liste.ipm_employe?.matricule
    }
    var somme1 = this.listCreanceGlobales.reduce((sum, current) => sum + current.part_ipm, 0);
    var somme2 = this.listCreanceGlobales.reduce((sum, current) => sum + current.part_patient, 0);
    var somme3 = this.listCreanceGlobales.reduce((sum, current) => sum + current.montant_facture, 0);
    var date1 = this.d1
    var date2 = this.d2

    let f = [["", "", "Total ", somme3, somme1, somme2]]




    autoTable(doc, {
      startY: 70,
      head: col,
      body: rows,
      foot: f,
      margin: { horizontal: 10 },
      styles: { overflow: "linebreak" },
      bodyStyles: { valign: "top" },
      theme: "striped",
      didDrawPage: function (data) {
        //this.bon.ipm_employe=this.message;
        if(doc.getNumberOfPages()==1) {
          doc.addImage(imgData, 'JPEG', 15, 5, 30, 30)
          doc.setFontSize(15)
          doc.text("", 72, 46)
          // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
          doc.setLineWidth(2)
          doc.setDrawColor("#3A6EA5")
          doc.rect(60, 30, 105, 20)
          //doc.setFillColor(240,240,240)
          //doc.rect(13,65,185,23,'F')
          //doc.setFillColor(240,240,240)

          doc.setFontSize(15)
          doc.setTextColor("#3A6EA5")

          doc.text("Créance globale périodique ", 85, 42)
          doc.text("rapport périodique du " + date1 + " au " + date2, 20, 60)
          doc.setTextColor("")
          const date = new Date()
          doc.setFontSize(12)
          doc.text("Dakar, le :", 150, 10)
          doc.setFontSize(12)
          doc.text("Institut de Prévoyance Maladie ", 50, 10)
          doc.text("du personnel de la Poste ", 60, 17)

          doc.text(date.toLocaleDateString("fr-FR"), 172, 10)
        }
        var str ="Page " + doc.getNumberOfPages();
        doc.setFontSize(12)


      }
    });

    doc.output("dataurlnewwindow");

  }


  showNotification(from: any, align: any, idtype: any, note) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

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



}
