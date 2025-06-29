import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/Models/Employe';
import { IPM_DetaRembourse } from 'src/app/Models/IPM_DetaRembourse';
import { FactureService } from 'src/app/Services/facture.service';
declare var $;
@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  id: any;
  listRembourse:IPM_DetaRembourse[];
  certifier;
  listeCertif:IPM_DetaRembourse[];
  global;
  objetEmploye:Employe;
  update:Employe;
  idremb: any;

  constructor(private factservice:FactureService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.idremb= this.route.snapshot.params['id'];
      console.log(this.idremb)
    this.factservice.getAllremboursbyrembourseglobale(this.idremb).subscribe(data=>{
        this.listRembourse=data;
        console.log(this.listRembourse)
      
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
             
            });
           });
           this.listRembourse=data;
      console.log(data);
           
       
     
         
        console.log(this.listRembourse)
        for(let lf of this.listRembourse){
          this.certifier=lf.ipmRemboursement.certifier
          this.global=lf.ipmRemboursement
          //this.numero =lf.ipmFacture.numerofacture
         
        }
      }
    );
  }
  CertifierEmploye(){
    console.log(this.certifier)
    console.log(this.listRembourse)
    this.listeCertif=this.listRembourse
    this.global.certifier=true;
    console.log(this.global)
     this.factservice.updateOnglobal(this.global).subscribe(
       (data)=>{}
     )
    // this.fact_service.updateOnEmploye(this.chargeEmploie).subscribe(
    //  (data)=>{
        console.log(this.listeCertif)
        // for (let index = 0; index < array.length; index++) {
        //   const element = array[index];
          
        // }                                                                            
  for (let index = 0; index < this.listeCertif.length; index++) {
    this.objetEmploye=this.listeCertif[index].ipm_employe
      
     // console.log(this.listFactureCertif[index].ipm_employe.idemp,this.objetEmploye)
    // this.listFactureCertif[index]
    console.log(this.objetEmploye.solde);
      this.objetEmploye.solde-=this.listeCertif[index].montant
     // this.objetEmploye.cumul_charge+=this.listFactureCertif[index].part_patient
     // //this.chargeEmploie.push({...index.ipm_employe})
     // //console.log(this.chargeEmploie);
     this.update=this.objetEmploye
     console.log(this.update,this.update.solde);
     // console.log(this.objetEmploye,this.objetEmploye.solde,this.update);
     // debugger
       this.factservice.updateOnEmploye(this.update).subscribe(data=>  {if(index+1==this.listRembourse.length)
        {this. showALERTE("top","center")}},
        err=>{
          if(index+1==this.listRembourse.length)
          this. showALERTE2("top","center")})
  
    //this.fact_service.updateLemploye(this.chargeEmploie).subscribe(data=>{this. showALERTE("top","center")},
      //err=>{this. showALERTE2("top","center")})
      //  (data)=>{
    //this.elements.push(element);
  }
}





  retourner(){
    this.router.navigate(['/remboursements/Listremboursements']);

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
      message: '<b> enregistrement fait avec succes  </b> :'
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


}
