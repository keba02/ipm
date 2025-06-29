import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { Bareme } from 'src/app/Models/Bareme';
import { Employe } from 'src/app/Models/Employe';
import { Precompte } from 'src/app/Models/Precompte';
import { BaremeService } from 'src/app/Services/bareme.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { PrecomptesService } from 'src/app/Services/precomptes.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import * as xlsx from 'xlsx';
import * as FileSaver from 'file-saver';
import { DatePipe } from '@angular/common';
import { PrecompteExcel } from '../../Models/PrecompteExcel';
import { SidebarModule } from '../../sidebar/sidebar.module';
declare const $: any;
@Component({
  selector: 'app-save-precomptes',
  templateUrl: './save-precomptes.component.html',
  styleUrls: ['./save-precomptes.component.css']
})
export class SavePrecomptesComponent implements OnInit {
  precompteForm: FormGroup;
  listEmploye: Employe[];
  barem: Bareme[];
  iden: any;
  precompte: Precompte = new Precompte();
  message: number;
  baremm: Bareme = new Bareme();
  rembourse: any;
  panier: Precompte = new Precompte();
  listPanier =[];
  listPre=[];
  addEmploye:Employe;
  annny: any;
  myDate = new Date();
  dateprecompte: string;
  PrecompteExcel:PrecompteExcel=new PrecompteExcel()
  PrecompteExcels=[]

  constructor(private emp_service: EmployeService, private datePipe: DatePipe, private formbuildprecompte: FormBuilder,
    private router: Router, private bareme_service: BaremeService, private precompte_service: PrecomptesService,
    private route: ActivatedRoute) {
          this.addEmploye=new Employe();
     }

  ngOnInit(): void {
    this.dateprecompte=this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
    console.log(this.dateprecompte)

    this.emp_service.listeEmploye().subscribe(
      emps => {
        console.log(emps);
        this.listEmploye = emps;
       this.getList();
            
      });
  }
  ////////////////////Tables
  getList(){
  
    this.bareme_service.listeBareme().subscribe(
      bars => {
        this.barem = bars;
        for (let ele = 0; ele < this.listEmploye.length; ele++) {
          for (let element = 0; element < this.barem.length; element++) {
            if (this.listEmploye[ele].solde <= this.barem[element].max && 
              this.listEmploye[ele].solde > this.barem[element].min) {
                if (this.listEmploye[ele].solde > this.barem[element].montant) {
                  console.log(this.listEmploye[ele]);
              this.panier.ipm_employe = this.listEmploye[ele];
               this.panier.montantRembou = this.barem[element].montant;
              this.panier.datePrecompte=this.dateprecompte
               this.listEmploye[ele].cumul_charge = this.panier.montantRembou
              this.listPanier.push({...this.listEmploye[ele],...this.panier});
              console.log(this.listPanier);
                }
                else{
                  console.log(this.listEmploye[ele]);
                  this.panier.ipm_employe = this.listEmploye[ele];
                  this.panier.montantRembou =this.listEmploye[ele].solde;
                  this.panier.datePrecompte=this.dateprecompte
                   this.listEmploye[ele].cumul_charge = this.panier.montantRembou
                  this.listPanier.push({...this.listEmploye[ele],...this.panier});
                  console.log(this.listPanier);
                }
              
              
             // this.listPre=this.listPanier
            }
            
            console.log(this.rembourse);
          }


        }
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
        this.PrecompteExcels=[]
        console.log(this.listPanier);
        for (let i = 0; i < this.listPanier.length; i++) {
          this.PrecompteExcel.Matricule=this.listPanier[i].matricule
          this.PrecompteExcel.Prenom=this.listPanier[i].prenom
          this.PrecompteExcel.Nom=this.listPanier[i].nom
          
          this.PrecompteExcel.Solde=this.listPanier[i].solde
          this.PrecompteExcel.MontantRemboursement=this.listPanier[i].montantRembou

          this.PrecompteExcel.Date=this.listPanier[i].datePrecompte
          this.PrecompteExcels.push({...this.PrecompteExcel} )
          
          
        }
      
       
      });
      console.log(this.listPanier);
     
     
  }
  ////////////Enregistrer les précomptes 
  savePrecom(){
     this.precompte_service.SavePrecompte(this.listPanier).subscribe(
      (data) => {
        console.log(this.listPanier);
        console.log(data)
        this.showALERTE('top', 'center')
      });

  }
  ///////////////Fin/////////////////
  ////////////fonction  Alerte
  showALERTE(from: any, align: any) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

    // const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: 'notifications',
      message: '<b>Enregistrement reussi des precomptes </b> :'
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


  /////////////////Export
 // @ViewChild('TABLE', { static: false }) TABLE: ElementRef; 
  
//   fileDownload(){
//     const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(this.TABLE.nativeElement);  
//     const wb: xlsx.WorkBook = xlsx.utils.book_new();  
//     xlsx.utils.book_append_sheet(wb, ws, 'Fichier Precompte');  
//     xlsx.writeFile(wb, 'precompte.xlsx');  
 
// }
fileDownload() {
  console.log(this.PrecompteExcels)
  
  // @ts-ignore
  import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.PrecompteExcels);
      const workbook = { Sheets: { 'fichier_excel': worksheet }, SheetNames: ['fichier_excel'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "PrecompteExcel");
  });
}
saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}
}
