import { DatePipe } from '@angular/common';
import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { Precompte } from 'src/app/Models/Precompte';
import { PrecomptesService } from 'src/app/Services/precomptes.service';
import * as xlsx from 'xlsx';
declare var $;
@Component({
  selector: 'app-list-precomptes-mois',
  templateUrl: './list-precomptes-mois.component.html',
  styleUrls: ['./list-precomptes-mois.component.css']
})
export class ListPrecomptesMoisComponent implements OnInit {
 listPrecompte:Precompte[];
 myDate;
 dateprecompte;
 message: Precompte=new Precompte();
  datePrecompte: string;
  constructor(private precompte_service: PrecomptesService,
    private route: ActivatedRoute,private datePipe:DatePipe, private dateAdapter: DateAdapter<Date>)  { 
      this.dateAdapter.setLocale('en-GB');
    }
    
  ngOnInit(): void {
   // this.getDate();
  }


  getDate(){
     this.myDate=this.datePipe.transform(this.datePrecompte,'yyyy-MM-dd');
     console.log(this.datePrecompte);
    this.precompte_service.getAllPrecompteDate(this.myDate).subscribe(
      pres =>{
        this.listPrecompte=pres;
          this.showNotification('top', 'center', 1, '<b></b> :')
          console.log(this.listPrecompte);
        console.log(this.datePrecompte);
      },err => {
        console.log(err);
        console.log("not existe");
        this.showNotification('top', 'center', 3, "<b></b> :")}
    )
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
   /////////////////Export
   @ViewChild('TABLE', { static: false }) TABLE: ElementRef; 
   fileDownload(){
     const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(this.TABLE.nativeElement);  
     const wb: xlsx.WorkBook = xlsx.utils.book_new();  
     xlsx.utils.book_append_sheet(wb, ws, 'Fichier Precompte');  
     xlsx.writeFile(wb, 'precompte.xlsx');  
  
 }
}
