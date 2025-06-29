import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/Models/Service';
import { EmployeService } from 'src/app/Services/employe.service';
import * as xlsx from 'xlsx';
import { BonService } from '../../Services/bon.service';
import { Entity } from 'src/app/Models/Entity';
import { Categorie } from 'src/app/Models/Categorie';
import { BezierCurve } from 'html2canvas/dist/types/render/bezier-curve';
import { Employe } from 'src/app/Models/Employe';
import { SidebarModule } from '../../sidebar/sidebar.module';
import { IPM_StatutEmploye } from 'src/app/Models/IPM_StatutEmploye';

@Component({
  selector: 'app-liste-employe',
  templateUrl: './liste-employe.component.html',
  styleUrls: ['./liste-employe.component.css']
})
export class ListeEmployeComponent implements OnInit {
listEntity;
  listService:Service[];
  nomEntity: any;
  listEmployer: Object;
  wb: xlsx.WorkBook;
  ws: unknown[];
  panier=[]
  entity:Entity;
  statu:IPM_StatutEmploye;
  jsoncategori:Categorie;
  jsonService:Service;
  
  servicePanier:Service={idService:null,type_service:null,code_service:null,ipmEntity:null}
  listS: Service[];
  categoriePanier:Categorie={code_categorie:null,libelle:null,montant:null,echalonnage:null}
  employePanier:Employe={nom:null,prenom:null,sexe:null,adresse_domicile:null,
    date_nais:null, lieu_nais:null, telephone:null,date_recrutement: null,matricule:null,reference:null, numero_carnet:null,
 situation_familial:null, cumul_charge:null,niveau_salarial:null, ipm_categorie:null,ipmService:null,ipmEntity:null,
  photo:null,statut:null,ipmStatutEmploye:null,justificatif:null,Echelonnage:null,solde:null
    }
  listC: Categorie[];

  constructor(private router:Router,private emp_service:EmployeService) { 
    this.entity = new Entity();
    this.statu=new IPM_StatutEmploye();
    this.jsoncategori=new Categorie();
    this.jsonService=new Service();
  }

  ngOnInit(): void {
    this.emp_service.getEntity().subscribe((data)=> {
      this.listEntity=data
      console.log(this.listEntity)
    })
    //service la poste
    this.emp_service.getlistService(3).subscribe((data)=>{
      this.listS=data
      console.log(this.listS)
    })
    //categorie
    this.emp_service.getlistCategorie().subscribe((data)=>{
      this.listC=data
      console.log(this.listC)
    })

  }
  getService(list){
    this.nomEntity=list.nom_entity
    this.emp_service.getlistService(list.idEntity).subscribe((data)=>{
      this.listService=data
      console.log(this.listService)
    })


  }
  getEmploye(listserv){
    this.router.navigate(['/gestion-employes/employer-par-service/'+listserv.idService]);
    console.log(listserv)
  
  }
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
      



    };
    reader.readAsBinaryString(target.files[0]);
  }
  //import service
  //  ajoutService(fac) {
  //   console.log(fac);
  //   this.entity.idEntity=3
  //   for (let index of fac) {
  //     this.servicePanier.code_service=index.CodePostale
  //     this.servicePanier.type_service=index.Service
      
  //     console.log(this.entity)
  //     this.servicePanier.ipmEntity=JSON.parse(JSON.stringify(this.entity));
  //     this.panier.push({ ...this.servicePanier })

      
  //   }
  //   console.log(this.panier)
   

  //  }
  // 
  //import Employe
  ajoutEmploye(fac) {
    console.log(fac);
    this.entity.idEntity=3
    this.statu.idStatut=1
    for (let index of fac) {
      this.employePanier.reference=index.NumRef
      this.employePanier.nom=index.NOM
      this.employePanier.prenom=index.PRENOMS
      this.employePanier.matricule=index.Matricule
      this.employePanier.sexe=index.Sexe
      this.employePanier.date_nais=index.DateNaiss
      this.employePanier.date_recrutement=index.PreEmbauche
      this.employePanier.Echelonnage=index.Echelon
      this.employePanier.solde=index.Solde
      this.employePanier.statut=true



      this.employePanier.ipmEntity=JSON.parse(JSON.stringify(this.entity));
      this.employePanier.ipmStatutEmploye=JSON.parse(JSON.stringify(this.statu));

      for (let indServ of this.listS) {
        if (index.Service==indServ.type_service) {
          this.jsonService.idService=indServ.idService
          this.jsonService.ipmEntity=this.entity
          this.employePanier.ipmService=JSON.parse(JSON.stringify(this.jsonService));
          console.log(this.employePanier)
          break
        }
        
        }
       
        for (let indCateg of this.listC) {
          if (index.Catégorie==indCateg.libelle) {
            this.jsoncategori.code_categorie=indCateg.code_categorie
            this.employePanier.ipm_categorie=JSON.parse(JSON.stringify(this.jsoncategori));
            console.log(this.employePanier)
            
            break 
          }
          
       }
      this.panier.push({ ...this.employePanier })

      
   
    
     
   

   }
   console.log(this.panier)
   this.emp_service.AjoutPanierEmploye(this.panier).subscribe(data=>{
    data
  })
  }



}
