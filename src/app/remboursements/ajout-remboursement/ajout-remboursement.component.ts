import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Employe } from 'src/app/Models/Employe';
import { IPM_DetaRembourse } from 'src/app/Models/IPM_DetaRembourse';
import * as xlsx from 'xlsx';
import { EmployeService } from 'src/app/Services/employe.service';
import { FactureService } from 'src/app/Services/facture.service';
import { Remboursement } from '../../Models/IPM_Remboursement';
import {ToastrService} from "ngx-toastr";
import {Route, Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';
import {UtilisateurService} from '../../Services/utilisateur.service';
declare var $;
@Component({
  selector: 'app-ajout-remboursement',
  templateUrl: './ajout-remboursement.component.html',
  styleUrls: ['./ajout-remboursement.component.css']
})

export class AjoutRemboursementComponent implements OnInit {
  message;
  date:Date;
  montantR:number;
  matricule:string;
  listRembourse=[];
  date1: string;
  totalMont: number;
  cumul:number;
  rembGlobal=new Remboursement();
  wb: any;
  ws: any;
  dateRemboursement: any;
  date11: string;
  totalG: number;
  rembouGlobal=new Remboursement()
  listEmploye: Array<Employe> = [];
  pani = [];
  panier = [];
  compte=0;
  indexMatricule;
  messageErreur:any;
  desactive:boolean=false

  detailremb: IPM_DetaRembourse = { idDetail: null, matricule: null, montant: null, ipm_employe: null, ipmRemboursement: null};
  
  matri: any;
  objetEmploye: any;
  mess: any;
  user
  constructor(private emp_service:EmployeService,private datepipe: DatePipe,private dateAdapter: DateAdapter<Date>,
    private factservice:FactureService, private toastr: ToastrService, private route:Router,private keycloak:KeycloakService, private user_Service:UtilisateurService)
  {
    this.keycloak.loadUserProfile().then( res => {
      console.log(res);
      this.user = res;
      this.getUserByUsernameF(res.username);
    })
    this.dateAdapter.setLocale('en-GB');
   }

  ngOnInit(): void {
    //debugger
  }

  public getUserByUsernameF(username){
    return this.user_Service.getUserByUsername(username).subscribe(data => {
      this.user = data;
      console.log(this.user);

    })
  }
  public getMatricule(){
    console.log(this.matricule)
     this.emp_service.getEmployeByMatricule(this.matricule).subscribe(
      data=>{this.message = data;
        console.log(this.message)
        this.message.solde;
      },err=>{console.log("error")}
       )
      

  }
  public ajoutRemboursement(){
    this.date1 = this.datepipe.transform(this.date, 'dd-MM-yyyy');
    console.log(this.message,this.message.matricule)
    const jsonRembourse=new IPM_DetaRembourse();
    jsonRembourse.ipm_employe=this.message
    jsonRembourse.matricule=this.message.matricule
    jsonRembourse.montant=Number(this.montantR )
    this.rembGlobal.dateRemboursement=this.date

   if(this.message.solde <= jsonRembourse.montant)
   {
    this.desactive=true
   }
   else{
     
     this.listRembourse.push({...jsonRembourse})
     this.calculemontant()
     this.desactive= false
     this.montantR=null
   }



      this.ngOnInit()
  }
  calculemontant(){
    this.totalMont=0;
    this.cumul=0;
    for(let total of this.listRembourse){
    this.totalMont += total.montant
    this.cumul += total.ipm_employe.cumul_charge
    this.rembGlobal.montantRemboursement=this.totalMont
    console.log(this.listRembourse,this.rembGlobal)
    }

  }
  deleteDetails(index: number) {
    this.listRembourse.splice(index, 1);
    this.calculemontant();
  }
  
  ajoutRem(){
    this.rembGlobal.ipm_utilisateur = this.user
    this.factservice.AjoutRembour(this.rembGlobal).subscribe((data:string)=>{
      this.rembGlobal.idRemboursement=parseInt(data)
      //this.messageErreur=null;
    
      console.log(this.rembGlobal)
      for(let list of this.listRembourse){
        list.ipmRemboursement=JSON.parse(JSON.stringify(this.rembGlobal))

      }
      console.log(this.listRembourse)
     
      this.factservice.AjoutdetaRembour(this.listRembourse).subscribe((data)=>{
        this.showALERTE2('top', 'center');
        console.log(data)
        this.route.navigate(['/remboursements/Listremboursements'])

      })
      
     
    })
//
  }
//importation

onFileChange(evt: any) {
  this.date11 = this.datepipe.transform(this.dateRemboursement, 'dd-MM-yyyy');
  console.log(this.date11)
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
    this.calculMontant(this.ws)
    console.log(this.ws);



  };

  reader.readAsBinaryString(target.files[0]);
  if (this.date11 != null){
    this.desactive=true;
    this.toastr.success("Importation Reussi Veuillez Valider Remboursement SVP!")
  }
  this.wb==null;
  this.ngOnInit()
}

deleteDetailrembs(index: number) {
  this.ws.splice(index,1);
  this.calculMontant(this.ws);
}
  calculMontant(fac: any) {
    this.totalG = 0;
    
    for (let element of fac) {
      this.totalG += element.Montant;
      console.log(this.totalG);
     
    }

  }
  ajoutRemGlobale(fac){
    this.rembouGlobal.montantRemboursement=this.totalG
    this.rembouGlobal.dateRemboursement=this.dateRemboursement
    this.rembouGlobal.ipm_utilisateur = this.user
    this.factservice.AjoutRembour(this.rembouGlobal).subscribe((data:string)=>{
      this.rembouGlobal.idRemboursement=parseInt(data)
      console.log(this.rembouGlobal)
      // for(let list of this.listRembourse){
      //   list.ipmRemboursement=JSON.parse(JSON.stringify(this.rembouGlobal))
        
      // }
      // console.log(this.listRembourse)
      // this.factservice.AjoutdetaRembour(this.listRembourse).subscribe((data)=>{

      // })
    

    for (let index of fac) {
      console.log(index.Matricule)
          
      //break

      this.emp_service.getEmployeByMatricule(index.Matricule).subscribe(

        //() => console.log("Processing Complete."),
        (data) => {
          this.message = data;
          

          if (this.message) {
            this.listEmploye.push(this.message)
            console.log(data)
            //console.log("null"),
            //break;
            
          // else
          // console.log("pas null")


          

          //for (let i = 0; i <fac.length ; i++ {
          //console.log(this.listEmploye[0])

          //}
          this.detailremb.montant = index.Montant
          this.detailremb.matricule =index.Matricule
          this.detailremb.ipm_employe = this.message
          this.detailremb.ipmRemboursement=this.rembouGlobal;
         
         // this.detailFactur.datePrestation = new Date()
          console.log(this.detailremb);
          console.log(this.detailremb.ipm_employe);
          console.log(this.detailremb);
          this.panier.push({ ...this.detailremb });
            console.log(this.panier)
          console.log(fac.length, this.listEmploye.length);
          // while (this.panier) {


          if (fac.length == this.listEmploye.length) {
            console.log(this.listEmploye.length);
            this.factservice.AjoutdetaRembour(this.panier).subscribe
              (
                (data) => {
                  console.log(data)
                }
              );
              for (let index = 0; index < this.panier.length; index++) {
                this.objetEmploye=this.panier[index].ipm_employe
                console.log(this.objetEmploye.solde)
               // this.objetEmploye.solde-=this.panier[index].montant
                
            this.factservice.updateOnEmploye(this.objetEmploye).subscribe
              (
                (data) => {
                  console.log(this.objetEmploye.solde)
                }
              );
          }
            this.showALERTE2('top', 'center')
            this.desactive=true
          }
        }
        else if (!this.message) {
          this.compte++

          console.log("Erreur sur le fichier " +index.Matricule, index, this.compte);
          this.indexMatricule=index
          
            console.log(this.rembouGlobal,this.compte)
            if(this.compte==1) {
            this.factservice.deleterembById(this.rembouGlobal.idRemboursement).subscribe(
              (data) => {
                this.matri = index.Matricule
                this.desactive=true
                this.showALERTE('top', 'center')
                console.log(+index.Matricule)
              }
            )
          }
           // this.router.navigate(['/gestion-factures']);
          
        }
        },
        
      )
    }
  })
    

  }
  
  showALERTE(from: any, align: any) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

    // const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: 'notifications',
      message: '<b>Veuillez verifer le fichier pour le Matricule :' + this.matri + ' </b> :'
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
  showALERTE2(from: any, align: any) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

    // const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: 'notifications',
      message: '<b>Enregistrement avec succes </b> :'
    }, {
      type: type[1],
      timer: 9000,
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
  
  showALERTE3(from: any, align: any, idtype: any, note) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

    // const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: 'notifications',
      message: note
    }, {
      type: type[1],
      timer: 9000,
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
