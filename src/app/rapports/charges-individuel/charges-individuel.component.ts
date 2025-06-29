import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { IPM_Details_Facture } from 'src/app/Models/IPM_Details_Factures';
import { RapportServiceService } from 'src/app/Services/rapport-service.service';
//import { RapportServiceService } from 'src/app/rapport-service.service';
declare var $:any
@Component({
  selector: 'app-charges-individuel',
  templateUrl: './charges-individuel.component.html',
  styleUrls: ['./charges-individuel.component.css']
})
export class ChargesIndividuelComponent implements OnInit {
  date1: any;
  date2: any;
  d1: string;
  d2: string;
  listCharge:IPM_Details_Facture[];

  constructor(private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,private rapportServ:RapportServiceService) { 
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
  }
  getSituation(){
    this.d1 =this.datepipe.transform(this.date1, 'dd-MM-yyyy');
    this.d2 =this.datepipe.transform(this.date2, 'dd-MM-yyyy');
this.rapportServ.getSituationIndividuel(this.d1,this.d2).subscribe(data=>{
  $(function(){
    (<any>$('#donne')).DataTable({
        "pagingType": "full_numbers",
         "lengthMenu": [
           [10, 25, 50, -1],
           [10, 25, 50, "All"]
         ],
         responsive: true,
         retreive:true,
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
  this.listCharge=data
  console.log(this.listCharge)
  if (this.listCharge.length==0) {
    this.showNotification('top','center',3,"<b> verifer la date ou l'entite</b> :")

    
  }

})
   }

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
  
  


}
