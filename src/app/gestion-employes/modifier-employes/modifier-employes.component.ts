import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/Models/Categorie';
import { Employe } from 'src/app/Models/Employe';
import { Service } from 'src/app/Models/Service';
import { EmployeService } from 'src/app/Services/employe.service';

@Component({
  selector: 'app-modifier-employes',
  templateUrl: './modifier-employes.component.html',
  styleUrls: ['./modifier-employes.component.css']
})
export class ModifierEmployesComponent implements OnInit {

  currentemploye: Employe= new Employe();
  id : number;
  service: any[];
  servic:any[]
  categorie: Categorie[];
  servi:number;
  cate:number;
  addService : Service;
  addCategorie : Categorie;
  type_service: string;
  type_categorie: string;
  serviceChoisi: any;
  categorieChoisi: any;
  situation_familial=[{id:1,value:"Celibataire"},
  {id:2,value:"Marier"},
  {id:3,value:"Divorce"},
  {id:4,value:"Veuf"}
  ];
  sexe=[{id:1,value:"Masculin"},
  {id:2,value:"Féminin"}
  ]
  typesituation_familial: any;
  situationChoisi: string;
  sexeChoisi: any;
  sexe_emploi: any;
  idEnt: any;
  employeRech: Employe;


  constructor(private emp_service: EmployeService,
              private router: Router,
              private route : ActivatedRoute) { 
                this.addCategorie=new Categorie();
                this.addService=new Service();
              }
              ngOnInit(): void {

                this.getCategorie();
                
            
                this.id=this.route.snapshot.params['id'];
                this.emp_service.getEmployeByIdSanstof(this.id).subscribe(
                  result => {
                    this.currentemploye = result;
                    this.employeRech =this.currentemploye
                    this.idEnt=this.currentemploye.ipmEntity?.idEntity
                    console.log(this.idEnt);

                    this.typesituation_familial=this.currentemploye.situation_familial
                    this.sexe_emploi=this.currentemploye.sexe
                    console.log(this.currentemploye);
                    this.type_service=this.currentemploye.ipmService.type_service
                    this.type_categorie=this.currentemploye.ipm_categorie.libelle
                    console.log(this.type_service,this.type_categorie);
            
                  }
                );
                this.getService();

              }
              getserv(serv){
                this.serviceChoisi=serv
                this.type_service=null
                
            
              }
              getCategor(cat){
                this.categorieChoisi=cat
                this.type_categorie=null
            
              }
              getsituation(situat){
                this.situationChoisi=situat.value
                this.typesituation_familial=null
                console.log(this.situationChoisi);
            
              }
              getSexe(sexEmploi){
                this.sexeChoisi=sexEmploi.value
                this.sexe_emploi=null
                console.log(this.sexeChoisi);
            
              }
            
              
            
                public updateEmploye(){
                  console.log(this.currentemploye);
                  this.addService.idService=this.servi;
                  if (this.serviceChoisi) {
                    this.currentemploye.ipmService= this.serviceChoisi;
                  }
                  
                  this.addCategorie.code_categorie=this.cate;
                  if (this.categorieChoisi) {
                    this.currentemploye.ipm_categorie=this.categorieChoisi;
                  }
                  if (this.situationChoisi) {
                    this.currentemploye.situation_familial=this.situationChoisi;
                  }
                  if (this.sexeChoisi) {
                    this.currentemploye.sexe=this.sexeChoisi;
                  }
                  
                
                  console.log(this.currentemploye);
                  this.emp_service.ModifierEmployeSansphoto(this.currentemploye).subscribe(
                    
                    () =>{
                      
                     // this.router.navigate(['/gestion-employes/ListeEmployes']) ;
                        this.router.navigate(['/gestion-employes/ListeEmployeById/'+this.employeRech.idemp]) ;



                    },
                    
                    (error) =>{
                      alert("Probleme lors de la modification !");
                    }
                   
                  );
            
                  //debugger;
                } 
                public retourner(){
                    this.employeRech
                    console.log(this.employeRech)
                  this.router.navigate(['/gestion-employes/ListeEmployeById/'+this.employeRech.idemp]) ;

            
                }
            
                public getService(){
                  this.emp_service.getService().subscribe(
                    serv => {
                      console.log(this.idEnt);
                      this.service = serv;
                      this.service=this.service.filter(serv =>serv.ipmEntity.idEntity==this.idEnt)
                      this.service = this.service.filter(serv => serv.ipmEntity.idEntity == this.idEnt)

                     // console.log(this.service)
                    }
                  )
                }
            
                public getCategorie(){
                  this.emp_service.getCategorie().subscribe(
                    cat => {
                     // console.log(cat);
                      this.categorie = cat;
                     // console.log(this.categorie)
                    }
                  )
                }
            

}
