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
//import { Cotisation, DetailCotisation } from 'src/app/Models/IPM_Cotisation';
import { EmployeService } from 'src/app/Services/employe.service';
import { environment } from 'src/environments/environment';
import * as xlsx from 'xlsx';
//import { CotisationGlobal } from '../../Models/CotisatonGlobal';
@Component({
  selector: 'app-cotisation',
  templateUrl: './cotisation.component.html',
  styleUrls: ['./cotisation.component.css']
})
export class CotisationComponent implements OnInit {
  //SERVER_URL = environment.URL + 'uploadCotisation';
  uploadForm: FormGroup;
  wb: xlsx.WorkBook;
  ws: any[];
  listEmploye: Array<Employe> = [];
  message: Employe;
  cotisation=[];
  panier = [];
  detailCotisation:DetailCotisation={id_Det_Coti:null,montant:null,ipm_employe:null,ipm_cotisation:null}
  cotisaGlobal=new Cotisation();
  total: number;
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

      /* grab first sheet */
      this.wb.SheetNames.forEach(ele => {
        this.ws = xlsx.utils.sheet_to_json(this.wb.Sheets[ele])
        console.log(this.ws);
       
      });
      for (let index = 0; index < this.ws.length; index++) {
        this.ws[index];                     
      }    
      this.calculemontant(this.ws);
      
    };
    reader.readAsBinaryString(target.files[0]);
  }
  calculemontant(fac: any) {
    console.log(fac)
    this.total = 0;    
    for (let element of fac) {   
      this.total += element.Montant;
    }

  }

  onSubmit(){
    this.cotisaGlobal.montant_totals=this.total
    this.cotisaGlobal.date= new Date()
    console.log(this.cotisaGlobal)

    this.emp_service.AjoutCotisation(this.cotisaGlobal).subscribe(
      (data: string) => {
        console.log(data)
        this.cotisaGlobal.idCotisation = parseInt(data)
    for (let elemt of this.ws) {
      this.total += elemt.Montant;
      this.emp_service.getEmployeByMatricule(elemt.Matricule).subscribe(

        //() => console.log("Processing Complete."),
        (data) => {
          this.message = data;
          

          if (this.message) {
            this.listEmploye.push(this.message)
            console.log(this.listEmploye)
              this.detailCotisation.montant=elemt.Montant
             // this.detailCotisation.matricule=elemt.matricule
              this.detailCotisation.ipm_employe=this.message
              this.detailCotisation.ipm_cotisation=this.cotisaGlobal
          
            this.panier.push({ ...this.detailCotisation });
             
            console.log(this.ws.length, this.listEmploye.length);
            if (this.ws.length == this.listEmploye.length) {
              console.log(this.listEmploye.length);
              this.emp_service.AjoutDetaCotisation(this.panier).subscribe
                (
                  (data) => {
                    console.log(data)
                  }
                );
              // this.fact_service.UpdateFacture(this.factureglobal).subscribe
              //   (
              //     (data) => {
              //       console.log(data)
              //     }
              //   );
              // this.showALERTE2('top', 'center')
              // this.desactive=true
            }
          }
          // else if (!this.message && this.cotisaGlobal.) {
          //   //this.compte++

          //   console.log("Erreur sur le fichier " +index.Matricule, index, this.compte);
          //   this.indexMatricule=this.compte
            
          //     console.log(this.factureglobal)
          //     this.fact_service.deleteById(this.factureglobal.idfacture).subscribe(
          //       (data) => {
          //         this.matri = index.Matricule
                 
          //         this.showALERTE('top', 'center')
          //         console.log(+index.Matricule)
          //       }
          //     )
          //    // this.router.navigate(['/gestion-factures']);
            
          // }
          
        })
      

    }
    })
  //   const formData = new FormData();
  //   // @ts-ignore
  //   formData.append('file', this.uploadForm.get('myFile').value);
  //   console.log(this.uploadForm.get('myFile').value);

  //   // @ts-ignore
  //   // formData.append('field', this.uploadForm.get('evenement').value);
  //  console.log(formData);
  //   this.httpClient.post<Cotisation>(environment.URL+'uploadCotisation', formData).subscribe(response => {
  //     console.log(response);
  //     this.toastr.info("Fichier chargé avec succès");
  //     let that = this;
  //     setTimeout(function () {
  //       that.reloadComponent();
  //     }, 5000);
  //   }, err => {
  //     console.log(err);
  //     this.toastr.error("Fichier non chargé")
  //     let that = this;
  //     setTimeout(function () {
  //       that.reloadComponent();
  //     }, 15000);
  //   });

  }
}
