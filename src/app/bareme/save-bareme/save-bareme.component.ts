import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { Bareme } from 'src/app/Models/Bareme';
import { BaremeService } from 'src/app/Services/bareme.service';
declare const $: any;
declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-save-bareme',
  templateUrl: './save-bareme.component.html',
  styleUrls: ['./save-bareme.component.css']
})
export class SaveBaremeComponent implements OnInit {
  
  selectFormControl = new FormControl('', Validators.required);
  baremes :Bareme=new Bareme();
  message:any;
  listBareme:Bareme[];
  bareme:Bareme=new Bareme();
  public tableData: TableData;
  public dataTable: TableData;
  currentBareme:Bareme=new Bareme();
  constructor(private bareme_service:BaremeService
    ,private router: Router,private formBuilder:FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.bareme_service.listeBareme().subscribe(
      result => {
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
        this.listBareme=result;
      
        console.log(this.listBareme);
       });
       this.initForm();
  }

  initForm(){
    this.bareme_service.dataForm=this.formBuilder.group({
      idBareme:null,
      min:['',[Validators.required]],
      max:['',[Validators.required]],
      montant:['',[Validators.required]],
    })
    }

 /////////////////
saveBareme(){
  this.bareme_service.AjoutBareme(this.baremes).subscribe
  (()=>{
     console.log(this.baremes);
     this.toastr.success("Ajout Effectué avec succes");

       this.ngOnInit();

 });
}

/////////////////
   //Recuperer la bareme correspondant
   getBaremesById(bareme){
    console.log(bareme);
    this.bareme_service.getBaremeById(bareme.idBareme).subscribe(
      result => {
        this.currentBareme= result;
        console.log(this.currentBareme);
      } ,error=>{
        console.log(error);
      }
    );
  }
    public updateBareme(){
  
      this.bareme_service.ModifierBareme(this.currentBareme).subscribe(
          
        () =>{
         // this.toastr.success('Modification Faite avec Success');
         this.showNotification('top', 'center', 1, '<b>employé ajouté avec succées!!!</b> :')
          this.ngOnInit();
          this.router.navigate(['/list-prestation']);
        
        },
        
        (error) =>{
          this.showNotification('top', 'right', 3, "<b>Erreur de modification</b> :")
        }
       
      );
  }

  ////////////Function Notification

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
