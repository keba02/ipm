import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cotisation } from 'src/app/Models/CotisatonGlobal';
import { Employe } from 'src/app/Models/Employe';
import { DetailCotisation } from 'src/app/Models/IPM_Cotisation';
import { EmployeService } from 'src/app/Services/employe.service';
import * as xlsx from 'xlsx';
declare const $: any;
@Component({
  selector: 'app-ajout-cotisation',
  templateUrl: './ajout-cotisation.component.html',
  styleUrls: ['./ajout-cotisation.component.css']
})
export class AjoutCotisationComponent implements OnInit {

  uploadForm: FormGroup;
  wb: xlsx.WorkBook;
  ws: any[];
  listEmploye: Array<Employe> = [];
  message: Employe;
  cotisation=[];
  panier = [];
  detailCotisation:DetailCotisation={id_Det_Coti:null,montant:null,ipm_employe:new Employe(),ipm_cotisation:null}
  cotisaGlobal=new Cotisation();
  total: number;
  totalDetails: any=[];
  constructor( private router: Router,private emp_service: EmployeService, private route: ActivatedRoute,
    private toastr: ToastrService, private formbuild: FormBuilder,
    private httpClient: HttpClient,
    private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,) {
      this.dateAdapter.setLocale('en-GB');
     }

  ngOnInit(): void {
    this.uploadForm = this.formbuild.group({
      // evenement: ['', Validators.required],
      myFile: ['', Validators.required],
      montant:[''],
      matricule:[''],

    });
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // @ts-ignore
      //this.uploadForm.get('myFile').setValue();
    }
  }
  ///////////////////////RELOAD
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  ///////////////////// 
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      let bstr = e.target.result;
      this.wb = xlsx.read(bstr, { type: 'binary' });
      console.log(this.wb)
      /* grab first sheet */
      var sheetNames = this.wb.SheetNames;
      this.ws= xlsx.utils.sheet_to_json(this.wb.Sheets[sheetNames[0]])
      console.log(this.ws);
      // this.wb.SheetNames.forEach(ele => {
      //   this.ws = xlsx.utils.sheet_to_json(this.wb.Sheets[ele],{header: 1})
      //   console.log(this.ws);
      //
      // });

      for (let index = 0; index < this.ws.length; index++) {
        this.ws[index];

       
      }
     
      this.calculemontant(this.ws)
      
    };
    reader.readAsBinaryString(target.files[0]);
  }
  calculemontant(fac: any) {
    console.log(fac)

    this.total = 0;
    
    for (let element of fac) {
      this.total += element.Montant;
      console.log(element)
      console.log(this.total)


    }

  }

  onSubmit(){
    this.cotisaGlobal.montant_totals=this.total
    this.cotisaGlobal.date= new Date()
    this.cotisaGlobal.ipm_utilisateur=null
    console.log(this.cotisaGlobal)

    this.emp_service.AjoutCotisation(this.cotisaGlobal).subscribe(
      (data: string) => {
        console.log(data)
        this.cotisaGlobal.idCotisation = parseInt(data)
    for (let elemt of this.ws) {
      this.total += elemt.Montant;
      console.log( elemt.Matricule)
     this.emp_service.getEmployeByMatricules(elemt.Matricule).subscribe(
       (data) => {
         this.message = data;
         console.log(this.message)

         if (this.message) {
           this.listEmploye.push(this.message)
           console.log(this.listEmploye)
           this.detailCotisation = new DetailCotisation();
           this.detailCotisation.montant = elemt.Montant
           // this.detailCotisation.matricule=elemt.matricule
           this.detailCotisation.ipm_employe = new Employe();
           this.detailCotisation.ipm_employe.matricule = elemt.Matricule
           this.detailCotisation.ipm_cotisation = this.cotisaGlobal
           console.log(this.detailCotisation)

           this.panier.push({...this.detailCotisation});

           console.log(elemt)
           console.log(this.ws.length, this.listEmploye.length);
         }
       }
     )
         //   if (this.ws.length == this.listEmploye.length) {
             // console.log(this.listEmploye.length);
              this.emp_service.AjoutDetaCotisation(this.panier).subscribe
                (
                  (data) => {
                    this.totalDetails=data
                    console.log(data)


                  }
                );
      // console.log(this.totalDetails)
      //  var somme=this.totalDetails.reduce((sum,current)=>sum+current.ipm_employe.montant,0)
      // console.log(somme)
      //     //  }
         // }
         
          
      //  })



    this.showNotification('top', 'center', 1, '<b>cotisation ajouté avec succées!!!</b> :')
    }},error=>{
      console.log(error);
    this.showNotification('top', 'center',3, '<b>Erreur au niveau du fichier!!!</b> :');
    }

    )


  }

  ////////////fonction  Alerte
  
  showNotification(from: any, align: any, idtype: any, note) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

    // const color = Math.floor((Math.random() * 6) + 1);

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
