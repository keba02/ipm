import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeService } from 'src/app/Services/employe.service';

@Component({
  selector: 'app-employer-par-service',
  templateUrl: './employer-par-service.component.html',
  styleUrls: ['./employer-par-service.component.css']
})
export class EmployerParServiceComponent implements OnInit {
  id: any;
  listEmployer;
  nomService;

  constructor(private route : ActivatedRoute,private emp_service:EmployeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.emp_service.getListEmploByservice(this.id).subscribe((data)=>{
      this.listEmployer=data;
      console.log(this.listEmployer);
      (<any>$('#datatable')).dataTable().fnDestroy();
      $(function(){
      (<any>$('#datatable')).dataTable({
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
      
      for (let index = 0; index < this.listEmployer.length; index++) {
        this.nomService = this.listEmployer[index].ipmService.type_service;
        console.log(this.nomService);

        
      }

    })
  }

}
