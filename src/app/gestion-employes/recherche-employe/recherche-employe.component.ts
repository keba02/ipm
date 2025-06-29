import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { EmployeService } from 'src/app/Services/employe.service';
import { Employe } from 'src/app/Models/Employe';
import { ThrowStmt } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';
import { BonService } from 'src/app/Services/bon.service';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

declare var $:any

@Component({
  selector: 'app-recherche-employe',
  templateUrl: './recherche-employe.component.html',
  styleUrls: ['./recherche-employe.component.css']
})
export class RechercheEmployeComponent implements OnInit {

  constructor(private emp_service:EmployeService,private router: Router,private route : ActivatedRoute) { }

  employe;
  matricule:string;
  reference:string;
  message:Employe;
  id : number;
  ide : number;
 // bon:IPM_Bon=new IPM_Bon(0,"",null,"",null,null)
  ngOnInit(): void {
    
    // this.id=this.route.snapshot.params['id'];
    // this.emp_service.getEmployeById(this.id).subscribe(
    //   result => {
    //     this.employe = result;
    //   }
    // );
    this.emp_service.getEmploye().subscribe(data => {
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
      
      })
      this.employe = data;
  //      for (let index = 0; index < this.listFacture.length; index++) {
  //       //  if(this.listFacture[0].ipm_facture.certifier!=true){
  //       //    this.liste.push(this.listFacture[index].ipm_facture)
     console.log(this.employe)
   
 
     //console.log((<any>$('#datatable')).dataTable())
  //       //  }
        
  //      }

      
  // console.log(this.date1)
  //     console.log(this.listFacture);
      
    });
    
  }
  ////////////----------------//////////////////
  getEmployeById(employe){
    this.emp_service.getEmployeById(employe.idemp).subscribe(
      result => {
        this.employe = result;
   
      }
    );
  }
  

  public findByMatricule(){
    
    this.emp_service.getEmployeByMatricule(this.matricule).subscribe(
      data=>{this.message = data;
   //     console.log(this.message.idemp);
      if(this.message){
        this.showNotification('top','center',1,'<b>agent existe</b> :')
        console.log(this.message);
      }
    else if(!this.message){
        console.log("not existe");
        this.showNotification('top','center',3,"<b>agent n'existe pas</b> :")
      }
    }
      );
    
    
    
  }
  showNotification(from: any, align: any, idtype:any,note ) {
    const type = ['', 'success', 'warning', 'danger','info', 'rose', 'primary'];

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

    upload() {
        var imgData = '/assets/img_poste/laposte.png'
        let doc = new jsPDF();
        let col = [["matricule", "nom", "prenom", "adresse", "cumul_charge", "solde", "telephone", "numero_carnet",]]
        let rows = []
        for (let emp of this.employe) {
             let tmp = [emp.matricule,emp.nom,emp.prenom, emp.adresse, emp.cumul_charge, emp.solde, emp.telephone, emp.numero_carnet]
            rows.push(tmp)
        }
        autoTable(doc, {
            startY: 75,
            head: col,
            body: rows,

        });

        doc.addImage(imgData, 'JPEG', 15, 5, 25, 25)
        doc.setFontSize(20)
        doc.text("Liste Des Employes", 75, 50)
        const date = new Date()
        doc.setFontSize(10)
        doc.text("Dakar,le:", 166, 5)
        doc.text(date.toLocaleDateString("fr-FR"), 185, 5)


        doc.save("employe.pdf");
    }
}
