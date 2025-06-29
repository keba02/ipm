import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Conjoint } from 'src/app/Models/Conjoint';
import { Employe } from 'src/app/Models/Employe';
import { Enfant } from 'src/app/Models/Enfant';
import { IPM_Bon_Lunetterie } from 'src/app/Models/IPM_Bon_Lunetterie';
//import { IPM_Bon_Lunetterie } from 'src/app/Models/IPM_Bon_Lunetterie';
import { Prestataire } from 'src/app/Models/Prestataire';
import { BonlettreService } from 'src/app/Services/bonlettre.service';
import { ConjointService } from 'src/app/Services/conjoint.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { EnfantService } from 'src/app/Services/enfant.service';
import { PrestataireService } from 'src/app/Services/prestataire.service';
import {KeycloakService} from "keycloak-angular";
import {UtilisateurService} from "../../Services/utilisateur.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IPM_Details_Bon_Lunetterie} from '../../Models/IPM_Details_Bon_Lunetterie';
import {BonService} from '../../Services/bon.service';

declare var $:any
@Component({
  selector: 'app-bon-lunetterie',
  templateUrl: './bon-lunetterie.component.html',
  styleUrls: ['./bon-lunetterie.component.css']
})
export class BonLunetterieComponent implements OnInit {
  employes : Array<any>=[];
  id : number;
  desactive:boolean=false
  message:any;
  enfant: Enfant= new Enfant();
  enfants:any[]=[];
  prestataires:Prestataire[];
  conjoints : Array<any>=[];
  matr:string;
  currentemploye: Employe = new Employe();
  employe: Employe[];
  idbenf: any;
  enfChoisi: any;
  messageenfant: Enfant;
  conjChoisi: any;
  idbconj: any;
  messageconjoint: Conjoint;
  selectOrdonne: any;
  OrdonnanceURL: string | ArrayBuffer;
  p: any;
  idp: any;
  lprestataires: Prestataire[];
  addPrestataire :Prestataire;
  motif:string;
  addconjoint:Conjoint;
   addenfant:Enfant;
  prestatair;
  bonlettre:IPM_Bon_Lunetterie=new IPM_Bon_Lunetterie(0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
  matricule;
  AgeEmploye: number;
  AgeEnfant: number;
  AgeConjoint: any;
  selectOrDevit: any;
  selectOrOrdon: any;
  maDate: Date = new Date();
  mess: Employe;
  mess1: string;
  code_presta: number;
  prestat: any;
  agenft: number;
  listB;
  numero:number;
  strBEm: string;
  mois;
  user: any;
  MonUser: any[];
  montan
  designation
  bonIpmForm !: FormGroup
    bonIpmFormConjoin !: FormGroup
    bonIpmForEnfant !: FormGroup
    listDetailBon:any[]=[];
    listDetailBonConjoint:any[]=[];
    listDetailBonEnfant:any[]=[];
    factureBon:FormGroup;
    MontantBon:any
    DesignationBon:any
    MontantBonEnf:any
    DesignationBonEnf:any
    MontantBonConj:any
    DesignationBonConj:any

    idBon:IPM_Details_Bon_Lunetterie;
    BonLun:any;
    date_delivrance
    DateDelivrance
    montanConjoin
    designationConjoin
    DateDelivranc
    montanEnfant
    designationEnfant
    nomOrdon:string;
    nomOrdonConj:string;
    nomOrdonEnf:string;
    nomOrdonnance:string;
    nomOrdonnanceConj:string;
    nomOrdonnanceEnf:string;

    dernierBonLunnetterie
    dateDernierBonLunnetterie
    isDateDernierBonInferieurA2ans

    constructor(private emp_service:EmployeService,private router: Router,private pres_service:PrestataireService,
    private route : ActivatedRoute,private conj_service:ConjointService,private enf_service:EnfantService,private datePipe:DatePipe,
    private bon_lettreService:BonlettreService, private keycloak:KeycloakService, private user_Service:UtilisateurService,
              private fb:FormBuilder,private builder: FormBuilder,private builderConj: FormBuilder,private buildeEnfant: FormBuilder,
                private datepipe: DatePipe,private bonService:BonService) {
      this.idBon= new IPM_Details_Bon_Lunetterie()
      this.keycloak.loadUserProfile().then( res => {
          console.log(res);
          this.user = res;
          this.MonUser = this.user
          this.getUserByUsernameF(res.username);
      })
  }
    public getUserByUsernameF(username){
        console.log(username);
        return this.user_Service.getUserByUsername(username).subscribe(data => {
            console.log(data);
            this.user = data;
            console.log(this.user.prenom);
            console.log(this.user.nom);


        })
    }

  ngOnInit(): void {

      console.log(this.MonUser)
      this.pres_service.getAllPrestataires().subscribe(
          pres => {
              // console.log(cat);
              this.lprestataires = pres;
              console.log(this.lprestataires);
          }
      )
      this.id = this.route.snapshot.params['id'];
      this.emp_service.getEmployeById(this.id).subscribe(
          result => {

              this.currentemploye = result;
          }
      );
      this.pres_service.getBon().subscribe(
          pres => {
              // console.log(cat);
              this.listB = pres;


              console.log(this.listB[this.listB.length - 1].numeroBon.slice(4));
              this.numero = this.listB[this.listB.length - 1].numeroBon.slice(4);
              if(this.numero == null  || this.numero == undefined || this.numero == NaN || this.numero.toString() == "NaN")
              {this.numero = 1}
              this.numero++
              console.log(this.numero);


          }
      )
      this.bonIpmForm = this.fb.group({
          devit: this.fb.control(null, [Validators.required]),
          montan: this.fb.control(null),
          designation: this.fb.control(null ),
          date_delivrance:this.fb.control(null,[Validators.required])
      })
      /******** Conjoint */
      this.bonIpmFormConjoin = this.fb.group({
          // devit: this.fb.control(null, [Validators.required]),
          montanConjoin: this.builderConj.control(null),
          designationConjoin: this.builderConj.control(null ),
          // date_delivrance:this.fb.control(null,[Validators.required])
      })
      /******** Enfant */
      this.bonIpmForEnfant = this.fb.group({
          // devit: this.fb.control(null, [Validators.required]),
          montanEnfant: this.builderConj.control(null),
          designationEnfant: this.builderConj.control(null ),
          // date_delivrance:this.fb.control(null,[Validators.required])
      })

      this.factureBon = this.builder.group({
          montan:this.builder.control(null),
          designation:this.builder.control(null )

      })
  }
  ////////////////////Rechercher par matricule 
  
  public findByMatricule(){
    ///////Rechercher l'employé
  this.emp_service.getEmployeByMatricule(this.matricule).subscribe(
    data=>{
      this.mess=data;
      if (this.mess) {
        console.log(this.mess);
      }
      else {
        this.mess1="yess"
        console.log("charlessssssssssssss")
        this.showNotification('top','center',3,"<b>matricule n'existe pas</b> :")
    }    
      if(data.statut==true)
       { this.message = data;
        console.log(this.message);}
        else{
          console.log(this.message)
          this.mess1="yess"
        this.showNotification('top','center',3,"<b>agent de numero matricule "+this.matricule+" ne beneficie plus de L'IPM</b> :")
      }

        console.log("test");
        this.getLastBonLunetterieByIpm_employe(this.message.idemp)
        this.matr=this.message.idemp
      const date =this.message.date_nais
       //this.datePipe.transform(this.message.date_nais, "dd-MM-yyyy");
    //const date =this.message.date_nais
      console.log(date)
      const b=new Date(date)
      const ttoday=new Date();
    this.AgeEmploye = ttoday.getFullYear() - b.getFullYear();
 const m = ttoday.getMonth() - b.getMonth();
 console.log(this.message.date_nais);
 console.log(m);

 if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
   this.AgeEmploye--;
  // console.log(this.messageconjoint.date_naiss_conj);
 }
 console.log(this.AgeEmploye);
    ///////Rechercher les enfants en fontion de l'employé
    this.enf_service.listeEnfant(this.message.idemp).subscribe(
      enfs => {      
        this.enfants = enfs;
        
        this.enfants.forEach(ele => {
          if (ele.date_nais_enfant) {
            //convert date again to type Date
            const bdate = new Date(ele.date_nais_enfant);
            const timeDiff = Math.abs(Date.now() - bdate.getTime());
            this.agenft = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

          }
          console.log(this.agenft)
          if (this.agenft > 21) {
            console.log("Age atteinte impossible de ce beneficier à l'ipm :", this.agenft)
            ele.active = false
            console.log(ele.active);
            console.log("age depasse")
          }
          else if (this.agenft < 21) {
            console.log("Voici l'age :", this.agenft)
            ele.active = true
            console.log(ele.active);
            console.log("age non depasse")

          }
        })
        console.log(this.enfants)
      this.enfants = this.enfants.filter(serv => serv.active ==true)
        console.log(this.enfants)
      });
    ///////Rechercher les conjoints en fontion de l'employé
      this.conj_service.listeConjoint(this.message.idemp).subscribe(
        conjs => {
           
          this.conjoints = conjs;
          console.log(this.conjoints)
        });
    
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
DetailsBon_Linetterie(){
    let ipm_details_bon = new  IPM_Details_Bon_Lunetterie()
    this.MontantBon=this.bonIpmForm.get('montan').value
    this.DesignationBon=this.bonIpmForm.get('designation').value
    console.log(this.MontantBon,this.DesignationBon,this.motif);
    ipm_details_bon.montant=this.bonIpmForm.get('montan').value
    ipm_details_bon.designation=this.bonIpmForm.get('designation').value

    console.log(ipm_details_bon);
    if (this.listDetailBon.length != null){
        this.listDetailBon.push(ipm_details_bon)
        console.log(this.listDetailBon);
    }

    this.ngOnInit()


}
DetailsBon_LinetterieConjoin(){
        let ipm_details_bon = new  IPM_Details_Bon_Lunetterie()
        this.MontantBonConj=this.bonIpmFormConjoin.get('montanConjoin').value
        this.DesignationBonConj=this.bonIpmFormConjoin.get('designationConjoin').value
    ipm_details_bon.montant=this.bonIpmFormConjoin.get('montanConjoin').value
    ipm_details_bon.designation= this.bonIpmFormConjoin.get('designationConjoin').value
    console.log(ipm_details_bon);
    if (this.listDetailBonConjoint.length != null){
        this.listDetailBonConjoint.push(ipm_details_bon)
        console.log(this.listDetailBonConjoint);

    }
    //this.listDetailBonConjoint =null
    this.ngOnInit()
    //this.montanConjoin.reset()
    }
    DetailsBon_LinetterieEnfant(){

        let ipm_details_bon = new  IPM_Details_Bon_Lunetterie()
        this.MontantBonEnf=this.bonIpmForEnfant.get('montanEnfant').value
        this.DesignationBonEnf=this.bonIpmForEnfant.get('designationEnfant').value
        console.log(this.MontantBonEnf,this.DesignationBonEnf,this.motif);
        ipm_details_bon.montant=this.bonIpmForEnfant.get('montanEnfant').value
        ipm_details_bon.designation=this.bonIpmForEnfant.get('designationEnfant').value

        console.log(ipm_details_bon);
        if (this.listDetailBon.length != null){
            this.listDetailBonEnfant.push(ipm_details_bon)
            console.log(this.listDetailBonEnfant);
        }

        this.ngOnInit()


    }
  
 /////////////Recuperer un enfant pour lui choisir bon
 getenfantbon(enfant){
  this.idbenf=enfant.idenf;
  this.enfChoisi=enfant
  this.enf_service.getEnfantById(enfant.idenf).subscribe(
   data=>{this. messageenfant=data
   console.log(this. messageenfant)
   //const date = this.datePipe.transform(this.enfant.date_nais_enfant, "dd-MM-yyyy");
   const date =this.messageenfant.date_nais_enfant
      console.log(date)
      const b=new Date(date)
      const ttoday=new Date();
    this.AgeEnfant = ttoday.getFullYear() - b.getFullYear();
 const m = ttoday.getMonth() - b.getMonth();
 console.log(this.message.date_nais);
 console.log(ttoday);

 if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
   this.AgeEnfant--;
  // console.log(this.messageconjoint.date_naiss_conj);
 }
 console.log(this.AgeEnfant);
   })}
  /////////////Recuperer un coinjoint pour lui choisir bon
 getconjointbon(conjoint){
   this.conjChoisi=conjoint
   this.idbconj=conjoint.idconj
  this.conj_service.getConjointById(conjoint.idconj).subscribe(
   data=>{this.messageconjoint=data
   console.log(this.messageconjoint)
   //const date = this.datePipe.transform(this.messageconjoint.date_naiss_conj, "dd-MM-yyyy");
   const date =this.messageconjoint.date_naiss_conj
      console.log(date)
      const b=new Date(date)
      const ttoday=new Date();
    this.AgeConjoint = ttoday.getFullYear() - b.getFullYear();
 const m = ttoday.getMonth() - b.getMonth();
 console.log(this.message.date_nais);
 console.log(m);

 if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
   this.AgeConjoint--;
  // console.log(this.messageconjoint.date_naiss_conj);
 }
 console.log(this.AgeConjoint);
   })}
   getnom(prest){
    this.prestatair = prest;
    console.log(prest);
    this.prestat=prest
    this.idp=prest.code_prestataire;

    this.pres_service.getAllPrestataires().subscribe(
      pres => {
        
        console.log(prest.nom_prestataire);
       
        this.p=prest.nom_prestataire;
        
        
        

      //   this.prestataires.forEach(element => {
      //     console.log(element.code_prestataire)
      //       if (element.code_prestataire=prest)
      //           {
      //             this.nomm=element.nom_prestataire;
      //             console.log(this.nomm);
      //           }
                
      //           else
      //           this.nomm!=prest
              
           
      //   });
      //   //console.log(this.prestataires);
       }
    )

  } 
  selectDevit(event:any){
    //selectCertif
    this.selectOrDevit = event.target.files[0];
      this.nomOrdon= this.selectOrDevit.name

      let readerr = new FileReader();
    readerr.readAsDataURL(event.target.files[0]);
    readerr.onload = (event) => {
      this.OrdonnanceURL = readerr.result;
    };
  }
    selectDevitConj(event:any){
        //selectCertif
        this.selectOrDevit = event.target.files[0];
        this.nomOrdonConj= this.selectOrDevit.name

        let readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = (event) => {
            this.OrdonnanceURL = readerr.result;
        };
    }
    selectDevitEnf(event:any){
        //selectCertif
        this.selectOrDevit = event.target.files[0];
        this.nomOrdonEnf= this.selectOrDevit.name

        let readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = (event) => {
            this.OrdonnanceURL = readerr.result;
        };
    }
    selectOrdonn(event:any){
        //selectCertif
        this.selectOrOrdon = event.target.files[0];
        this.nomOrdonnance= this.selectOrOrdon.name

        let readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = (event) => {
            this.OrdonnanceURL = readerr.result;
        };
    }
    selectOrdonnConj(event:any){
        //selectCertif
        this.selectOrOrdon = event.target.files[0];
        this.nomOrdonnanceConj= this.selectOrOrdon.name
        let readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = (event) => {
            this.OrdonnanceURL = readerr.result;
        };
    }
    selectOrdonnEnf(event:any){
        //selectCertif
        this.selectOrOrdon = event.target.files[0];
        this.nomOrdonnanceEnf= this.selectOrOrdon.name

        let readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = (event) => {
            this.OrdonnanceURL = readerr.result;
        };
    }
  /////////////////////////////////Save Lettre de Garantie

public BonConsultation(){
  if (this.isDateDernierBonInferieurA2ans){
      this.bonlettre.certification=false
  }
    this.DateDelivrance=this.bonIpmForm.get('date_delivrance').value
    console.log(this.DateDelivrance);
    console.log(this.DateDelivrance);

    this.DateDelivranc =this.datepipe.transform(this.DateDelivrance, 'dd-MM-yyyy');
    console.log(this.DateDelivranc)
  const dayBEm=new Date();

  if (dayBEm.getMonth()<10) {
    this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    this.mois=0+''+m
    console.log('infer',this.mois, this.strBEm);
    
  }else if(dayBEm.getMonth()>9)
  
  { this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    console.log('sup',this.mois);
  this.mois=m}
  // this.nom=this.bon.ipm_employe.prenom
   this.bonlettre.ipm_employe=this.message;
   this.bonlettre.dateEtablissement=new Date();
   //this.addPrestataire.code_prestataire=this.idp;
   this.bonlettre.ipm_prestataire=this.prestatair;
   this.bonlettre.devit=this.selectOrDevit?.name
    this.bonlettre.ordonnance=this.selectOrOrdon?.name
    console.log(this.bonlettre.ordonnance)
   this.bonlettre.motif=this.motif
    this.bonlettre.date_delivrance= this.DateDelivranc
    this.bonlettre.ipm_utilisateur = this.user

    // this.bonlettre.montant= this.montan
    // this.bonlettre.designation=this.designation
   if (this.enfChoisi) {
    this.bonlettre.ipm_enfant=this.enfChoisi
    
  }
  if (this.conjChoisi) {
    this.bonlettre.ipm_conjoint=this.conjChoisi
    
  }
  //this.bonlettre.ordonnance=this.selectOrdonne.name
  console.log(this.bonlettre);
  this.bonlettre.numeroBon=this.mois+''+this.strBEm.charAt(2)+''+this.strBEm.charAt(3)+''+this.numero;
   if(this.bonlettre.ipm_employe && this.bonlettre.ipm_prestataire && this.bonlettre.numeroBon &&
    this.bonlettre.dateEtablissement && this.bonlettre.devit && this.bonlettre.ordonnance){
   this.bon_lettreService.SaveBonLunetterie(this.bonlettre).subscribe(
    (data)=>{
        this.BonLun = data
        this.BonLun=JSON.parse((this.BonLun));
        console.log(this.BonLun)
        console.log(this.BonLun.idbon)

        this.idBon.ipm_bon_lunetterie=this.BonLun
        console.log(this.idBon)
        this.saveDetailsBon(this.listDetailBon)
  if(!this.isDateDernierBonInferieurA2ans){
      this.upload()
  }

        ;});
    this.bon_lettreService.uploadFileDevit(this.selectOrDevit).subscribe( (data)=>{})
  this.desactive=true
 console.log(this.motif);
 this.showNotification('top', 'center', 1, '<b>bon lunetterie ajouté avec succées!!!</b> :')
   }else {

    this.showNotification('top', 'center', 3, "<b>bon lunetterie non ajouté</b> :")
   }
    this.retourserach()
}

saveDetailsBon( listDetailConj){

        console.log(this.BonLun)
     this.BonLun.ipm_bon_lunetterie=JSON.parse(JSON.stringify(this.BonLun));
        for (let ele of listDetailConj){
            ele.ipm_bon_lunetterie= this.BonLun.ipm_bon_lunetterie
            console.log(ele)
            // this.idBon.ipm_bon_lunetterie=JSON.parse(JSON.stringify(this.idBon));

            // console.log(ele)
            this.bon_lettreService.SaveDetailsBonLettre(ele).subscribe( (data)=>{
                console.log(data)

            })



        }
}
  
  /////////////////Save Bon Conjoint
public BonConjoint(){
  const dayBEm=new Date();

  if (dayBEm.getMonth()<10) {
    this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    this.mois=0+''+m
    console.log('infer',this.mois, this.strBEm);
    
  }else if(dayBEm.getMonth()>9)
  
  { this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    console.log('sup',this.mois);
  this.mois=m}
  // this.nom=this.bon.ipm_employe.prenom
   this.bonlettre.ipm_employe=this.message;
   this.bonlettre.dateEtablissement=new Date();
   // this.addPrestataire.code_prestataire=this.idp;
    this.bonlettre.ipm_prestataire =  JSON.parse(this.idp)
    console.log( this.bonlettre.ipm_prestataire)

    this.bonlettre.devit=this.selectOrDevit.name
    this.bonlettre.ordonnance=this.selectOrOrdon?.name
   this.bonlettre.motif=this.motif
   // this.bonlettre.ipm_prestataire=JSON.parse(JSON.stringify(this.addPrestataire));
   // this.addconjoint.idconj=this.idbconj
   // this.bonlettre.ipm_conjoint=JSON.parse(JSON.stringify(this.idbconj))
   this.bonlettre.ipm_conjoint=this.messageconjoint
    this.bonlettre.ipm_utilisateur = this.user

    // this.bonlettre.ipm_conjoint=JSON.parse((this.idbconj))
    console.log(this.bonlettre.ipm_conjoint)
    console.log(this.bonlettre)


    this.bonlettre.numeroBon=this.mois+''+this.strBEm.charAt(2)+''+this.strBEm.charAt(3)+''+this.numero
   console.log(this.bonlettre.ipm_conjoint);
    this.bonlettre.ipm_prestataire=this.prestatair
  // console.log( this.b.ipm_employe);
   //console.log(this.b.ipm_prestataire);
 // this.bonlettre.ordonnance=this.selectOrdonne.name
   //this.bon.prix_unitaire=this.prix_unitaire;
   if(this.bonlettre.ipm_employe && this.bonlettre.ipm_prestataire && this.bonlettre.numeroBon &&
    this.bonlettre.dateEtablissement && this.bonlettre.devit){
    this.bon_lettreService.SaveBonLunetterie(this.bonlettre).subscribe(
        (data)=>{
            this.BonLun = data
            this.BonLun=JSON.parse((this.BonLun));
            console.log(this.BonLun)
            console.log(this.BonLun.idbon)

            this.idBon.ipm_bon_lunetterie=this.BonLun
            console.log(this.idBon)
            this.saveDetailsBon(this.listDetailBonConjoint)
            this.uploadConjoint();

      });
      this.bon_lettreService.uploadFileDevit(this.selectOrDevit).subscribe( (data)=>{})
  this.desactive=true
      
        console.log(this.bonlettre.ipm_prestataire)
        console.log(this.bonlettre)

        this.showNotification('top', 'center', 1, '<b>bon lunetterie ajouté avec succées!!!</b> :')

      }else {
   
       this.showNotification('top', 'center', 3, "<b>bon lunetterie non ajouté</b> :")
      }
    this.retourserach()
       
 }

 /////////////////Save Bon Enfants
 public BonEnfant(){
  const dayBEm=new Date();

  if (dayBEm.getMonth()<10) {
    this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    this.mois=0+''+m
    console.log('infer',this.mois, this.strBEm);
    
  }else if(dayBEm.getMonth()>9)
  
  { this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    console.log('sup',this.mois);
  this.mois=m}
  // this.nom=this.bon.ipm_employe.prenom
  console.log(this.idp);
   this.bonlettre.ipm_employe=this.message;
   this.bonlettre.motif=this.motif
   this.bonlettre.dateEtablissement=new Date();
   this.bonlettre.devit=this.selectOrDevit.name
   this.bonlettre.ordonnance=this.selectOrOrdon?.name
  // this.addPrestataire.code_prestataire=this.idp;
   this.bonlettre.ipm_prestataire=this.prestat;
  // this.addenfant.idenf=this.idbenf
   this.bonlettre.ipm_enfant=this.enfChoisi
     this.bonlettre.ipm_utilisateur = this.user


     console.log(this.bonlettre);
   
   //console.log( this.b.ipm_employe);
   //console.log(this.b.ipm_prestataire);

//this.bonlettre.ordonnance=this.selectOrdonne.name
this.bonlettre.numeroBon=this.mois+''+this.strBEm.charAt(2)+''+this.strBEm.charAt(3)+''+this.numero
   if(this.bonlettre.ipm_employe && this.bonlettre.ipm_prestataire && this.bonlettre.numeroBon &&
    this.bonlettre.dateEtablissement && this.bonlettre.devit){
    this.bon_lettreService.SaveBonLunetterie(this.bonlettre).subscribe(
        (data)=>{
            this.BonLun = data
            this.BonLun=JSON.parse((this.BonLun));
            console.log(this.BonLun)
            console.log(this.BonLun.idbon)

            this.idBon.ipm_bon_lunetterie=this.BonLun
            console.log(this.idBon)
            this.saveDetailsBon(this.listDetailBon)
            this.uploadEnfant()
      });
      this.bon_lettreService.uploadFileDevit(this.selectOrDevit).subscribe( (data)=>{})

        console.log(this.bonlettre.ipm_prestataire)
        console.log(this.bonlettre)
        this.showNotification('top', 'center', 1, '<b>bon lunetterie ajouté avec succées!!!</b> :')

      }else {
   
       this.showNotification('top', 'center', 3, "<b>bon lunetterie non ajouté</b> :")
      }
     this.retourserach()
    } 
    retourserach()
{
  console.log('************************************');
  window.location.reload();
}
viderConjoint(){
  this.findByMatricule()
  

}
viderEnfant(){
  this.findByMatricule()
  

}
    upload(){
       // console.log(this.user.prenom, this.user.nom);
        const dayBEm=new Date();

  if (dayBEm.getMonth()<10) {
    this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    this.mois=0+''+m
    console.log('infer',this.mois, this.strBEm);


  }else if(dayBEm.getMonth()>9)
  
  { this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    console.log('sup',this.mois);
  this.mois=m}
      let doc=new jsPDF();
      var imgData = '/ipm-fronte/assets/img_poste/header1.png'
      
        let col=[["Designation","Montant"]]
       let rows=[]
       for (let detailbon of this.listDetailBon) {
        let tmp=[detailbon.designation,detailbon.montant]
        rows.push(tmp)
           console.log(rows);
      }
       var ipm1=this.message?.prenom
       var ipm2=this.message?.nom
       console.log(ipm2);
       var prestataire=this.p
       var Ncarnet=this.message.numero_carnet
       var ipm3=this.message.ipmService?.type_service
       var ipm4=this.message?.matricule
       var ipm5=this.message?.reference
       var ageE=this.AgeEmploye
       var sexe=this.message?.sexe
        var prenonConnec =this.user.prenom
        var nomConnec = this.user.nom
       var numBonEmp=this.mois+''+this.strBEm.charAt(2)+''+this.strBEm.charAt(3)+''+this.numero;
       autoTable(doc,{
        startY:100,
        head:col,
         body:rows,
        margin:{ horizontal:10},
        styles:{overflow:"linebreak"},
        bodyStyles:{valign:"top"},
        theme:"grid",
         didDrawPage: function(data){
          //this.bon.ipm_employe=this.message;
          doc.addImage(imgData ,'JPEG',15,5,180,20)
          doc.setFontSize(15)
          doc.text("",72,46)
         // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
         doc.setLineWidth(2)
         doc.setDrawColor("#3A6EA5")
         doc.rect(60,30,105,20)
         doc.setFillColor(240,240,240)
          doc.rect(13,65,185,35,'F')
          //RECTANGLE PAGE
          //doc.setLineWidth(2)
         //doc.setDrawColor("#3A6EA5")
         //doc.rect(10,100,190,170)
          doc.setFontSize(15)
          doc.setTextColor("#3A6EA5")
  
          doc.text("BON DE COMMANDE",85,36)
          doc.text("POUR LUNETTERIE",85,45)
          doc.setTextColor("")
           const date=new Date()
              doc.setFontSize(13)
               doc.text("Dakar, le :",150,60)
               doc.text("N° Bon:",13,60)
               doc.text(""+numBonEmp,30,60)
               
           doc.text(date.toLocaleDateString("fr-FR"),172,60)
              doc.setFontSize(12)
              doc.text("Malade : "+ipm1+" "+ipm2,15,75)
              //doc.text(ipm1,40,75)
              //doc.text(ipm2,80,75) 
              doc.text("Matricule : "+ipm4,140,75)
              doc.text("Sexe : "+sexe,140,85)
              doc.setFontSize(12)
              doc.text("N Carnet :",15,85)
              doc.text(""+Ncarnet,40,85)
              doc.text("Age : "+ageE,80,85)
        
              // doc.text("Nombre D'article :",120,85)
              // doc.text(""+Narticle,160,85)
              // doc.text("Malade:",15,95)
              // doc.text(ipm5,40,95)
              // doc.text(ipm6,80,95)
              doc.text("Service :",100,95)
              doc.text(ipm3,120,95)
              doc.text("Prestataire :",15,95)
              doc.text(prestataire,40,95)
            //  doc.text("N° Ref:",15,95)
            //  doc.text(ipm5,50,95)
            // doc.setFontSize(12)
            //  doc.text("Monsieur,",15,110)
            //  doc.text("Nous avons l'honneur de vous signaler que les frais de versement sont garantis par notre ",15,125)
            // //  doc.text("de:",15,125)
            // //  doc.text("----------------------",15,130)
            //  doc.text("  institution :",15,130)
            //  doc.text("Nous vous serions reconnaissant de bien vouloir nous faire parvenir votre facture dans un délai",15,143)
            //  doc.text(" n'excédant pas deux (02) mois après la date d'établissement de la présente lettre",15,150)
            
            //  doc.text("Veuillez agréer ,Monsieur,l'expression de notre considération distinguée",15,168)
              doc.text("Demandeur",150,250)

              doc.text(""+prenonConnec+"   "+nomConnec,15,250)
            //  doc.setTextColor("#8C1C13")
            //  doc.text("NB:Nous retourner deux exemplaires avec la facture",15,240)
            //  doc.text("--------------------------------------------------------------------------",15,250)
            //  doc.setTextColor("")
            //  doc.setFontSize(10)
            //  doc.text("Siège Social:Immeuble Direction Générale Rez de Chaussée",100,260)
            //  doc.text("8.Rue Abd.6.M.Paraine BP:11002 Dakar (Sénégal)",100,265)
             
         }
        })
      
        doc.output('dataurlnewwindow');      // let data = document.getElementById('noticeModal'); 
      // const printContents = document.getElementById('noticeModal').innerHTML;
      //    const originalContents = document.body.innerHTML;
      //    document.body.innerHTML = printContents;
      //    window.print();
      //    document.body.innerHTML = originalContents;
    }
    uploadConjoint(){
      const dayBEm=new Date();

  if (dayBEm.getMonth()<10) {
    this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    this.mois=0+''+m
    console.log('infer',this.mois, this.strBEm);
    
  }else if(dayBEm.getMonth()>9)
  
  { this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    console.log('sup',this.mois);
  this.mois=m}
      let doc=new jsPDF();
      var imgData = '/ipm-fronte/assets/img_poste/header1.png'
        let col=[["Designation","Montant"]]
       let rows=[] 
       for (let ele of this.listDetailBonConjoint) {
        let tmp=[ele.designation,ele.montant]
        rows.push(tmp)
      }
       var ipm1=this.message?.prenom
       var ipm2=this.message?.nom
    
       console.log(ipm2);
       var prestataire=this.p
       var ageC=this.AgeConjoint
       var Ncarnet=this.message.numero_carnet
       var ipm3=this.message.ipmService?.type_service
       var ipm4=this.message?.matricule
       var ipm5=this.messageconjoint?.prenom_conjoint
       var ipm6=this.messageconjoint?.nom_conjoint
       var sexe=this.messageconjoint?.sexe_conjoint
       var numBonConj= this.mois+''+this.strBEm.charAt(2)+''+this.strBEm.charAt(3)+''+this.numero;
       autoTable(doc,{
        startY:100,
        head:col,
         body:rows,
        margin:{ horizontal:10},
        styles:{overflow:"linebreak"},
        bodyStyles:{valign:"top"},
        theme:"grid",
         didDrawPage: function(data){
          //this.bon.ipm_employe=this.message;
          doc.addImage(imgData ,'JPEG',15,5,180,20)
          doc.setFontSize(15)
          doc.text("",72,46)
         // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
         doc.setLineWidth(2)
         doc.setDrawColor("#3A6EA5")
         doc.rect(60,30,105,20)
         doc.setFillColor(240,240,240)
          doc.rect(13,65,185,35,'F')
          //RECTANGLE PAGE
        //   doc.setLineWidth(2)
        //  doc.setDrawColor("#3A6EA5")
        //  doc.rect(10,100,190,170)
        //   doc.setFontSize(15)
        //   doc.setTextColor("#3A6EA5")
          
          doc.text("BON DE COMMANDE",85,36)
          doc.text("POUR LUNETTERIE",85,45)
          doc.setTextColor("")
           const date=new Date()
              doc.setFontSize(13)
               doc.text("Dakar, le :",150,60)
               doc.text("N° Bon:",13,60)
               doc.text(""+numBonConj,30,60)
               
           doc.text(date.toLocaleDateString("fr-FR"),172,60)
              doc.setFontSize(12)
              doc.text("Participant : "+ipm1+" "+ipm2,15,75)
              //doc.text(ipm1,40,75)
             // doc.text(ipm2,80,75) 
              doc.text("Matricule : "+ipm4,120,75)
              
              doc.text("Malade : " +ipm5+" "+ipm6,15,85)
              //doc.text(ipm5,40,85)
              //doc.text(ipm6,80,85) 
              doc.setFontSize(12)
              doc.text("Sexe : "+sexe,95,85)
              doc.text("N Carnet :"+" "+Ncarnet,135,85)
              doc.text("Age : "+ageC,175,85)
              //doc.text(,140,85)
              // doc.text("Nombre D'article :",120,85)
              // doc.text(""+Narticle,160,85)
              // doc.text("Malade:",15,95)
              // doc.text(ipm5,40,95)
              // doc.text(ipm6,80,95)
              doc.text("Service :",100,95)
              doc.text(ipm3,120,95)
              doc.text("Prestataire :",15,95)
              doc.text(prestataire,40,95)
            //  doc.text("N° Ref:",15,95)
            //  doc.text(ipm5,50,95)
            // doc.setFontSize(12)
            //  doc.text("Monsieur,",15,110)
            //  doc.text("Nous avons l'honneur de vous signaler que les frais de versement sont garantis par notre ",15,125)
            // //  doc.text("de:",15,125)
            // //  doc.text("----------------------",15,130)
            //  doc.text("  institution :",15,130)
            //  doc.text("Nous vous serions reconnaissant de bien vouloir nous faire parvenir votre facture dans un délai",15,143)
            //  doc.text(" n'excédant pas deux (02) mois après la date d'établissement de la présente lettre",15,150)
            
            //  doc.text("Veuillez agréer ,Monsieur,l'expression de notre considération distinguée",15,168)
            //  doc.text("Le Gérant National",150,200)
            //  doc.setTextColor("#8C1C13")
            //  doc.text("NB:Nous retourner deux exemplaires avec la facture",15,240)
            //  doc.text("--------------------------------------------------------------------------",15,250)
            //  doc.setTextColor("")
            //  doc.setFontSize(10)
            //  doc.text("Siège Social:Immeuble Direction Générale Rez de Chaussée",100,260)
            //  doc.text("8.Rue Abd.6.M.Paraine BP:11002 Dakar (Sénégal)",100,265)
             
         }
        })
      
        doc.output('dataurlnewwindow');      // let data = document.getElementById('noticeModal'); 
      // const printContents = document.getElementById('noticeModal').innerHTML;
      //    const originalContents = document.body.innerHTML;
      //    document.body.innerHTML = printContents;
      //    window.print();
      //    document.body.innerHTML = originalContents;
    }
    uploadEnfant(){
      const dayBEm=new Date();

  if (dayBEm.getMonth()<10) {
    this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    this.mois=0+''+m
    console.log('infer',this.mois, this.strBEm);
    
  }else if(dayBEm.getMonth()>9)
  
  { this.strBEm=dayBEm.getFullYear().toString()
    let m =dayBEm.getMonth()+1
    console.log('sup',this.mois);
  this.mois=m}
      let doc=new jsPDF();
      var imgData = '/ipm-fronte/assets/img_poste/header1.png'
      
        let col=[["Designation","Montant"]]
       let rows=[] 
       for(let details of this.listDetailBonEnfant) {
        let tmp=[details.designation,details.montant]
        rows.push(tmp)
      }
       var ipm1=this.message?.prenom
       var ipm2=this.message?.nom
       
       console.log(ipm2);
       var prestataire=this.p
       var ageEn=this.AgeEnfant
       var Ncarnet=this.message.numero_carnet
       var ipm3=this.message.ipmService?.type_service
       var ipm4=this.message?.matricule
       var ipm5=this.messageenfant.prenom_enfant
       var ipm6=this.messageenfant?.nom_enfant
       var sexe=this.messageenfant?.sexe_enfant
       var numBonEnf=this.mois+''+this.strBEm.charAt(2)+''+this.strBEm.charAt(3)+''+this.numero;
       autoTable(doc,{
        startY:100,
        head:col,
         body:rows,
        margin:{ horizontal:10},
        styles:{overflow:"linebreak"},
        bodyStyles:{valign:"top"},
        theme:"grid",
         didDrawPage: function(data){
          //this.bon.ipm_employe=this.message;
          doc.addImage(imgData ,'JPEG',15,5,180,20)
          doc.setFontSize(15)
          doc.text("",72,46)
         // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
         doc.setLineWidth(2)
         doc.setDrawColor("#3A6EA5")
         doc.rect(60,30,105,20)
         doc.setFillColor(240,240,240)
          doc.rect(13,65,185,35,'F')
          //RECTANGLE PAGE
        //   doc.setLineWidth(2)
        //  doc.setDrawColor("#3A6EA5")
        //  doc.rect(10,100,190,170)
        //   doc.setFontSize(15)
        //   doc.setTextColor("#3A6EA5")
          
          doc.text("BON DE COMMANDE",85,36)
          doc.text("POUR LUNETTERIE",85,45)
          doc.setTextColor("")
           const date=new Date()
              doc.setFontSize(13)
               doc.text("Dakar, le :",150,60)
               doc.text("N° Bon:",13,60)
               doc.text(""+numBonEnf,30,60)
               
           doc.text(date.toLocaleDateString("fr-FR"),172,60)
              doc.setFontSize(12)
              doc.text("Participant : "+ipm1+" "+ipm2,15,75)
              //doc.text(ipm1,40,75)
             // doc.text(ipm2,80,75) 
              doc.text("Matricule : "+ipm4,120,75)
              
              doc.text("Malade : "+ipm5+" "+ipm6,15,85)
              //doc.text(ipm5,40,85)
              //doc.text(ipm6,80,85) 
              doc.setFontSize(12)
              doc.text("Sexe : "+sexe,95,85)
              doc.text("N Carnet :"+" "+Ncarnet,135,85)
              doc.text("Age : "+ageEn,175,85)
              //doc.text(""+Ncarnet,140,85)
              // doc.text("Nombre D'article :",120,85)
              // doc.text(""+Narticle,160,85)
              // doc.text("Malade:",15,95)
              // doc.text(ipm5,40,95)
              // doc.text(ipm6,80,95)
              doc.text("Service :",100,95)
              doc.text(ipm3,120,95)
              doc.text("Prestataire :",15,95)
              doc.text(prestataire,40,95)
            //  doc.text("N° Ref:",15,95)
            //  doc.text(ipm5,50,95)
            // doc.setFontSize(12)
            //  doc.text("Monsieur,",15,110)
            //  doc.text("Nous avons l'honneur de vous signaler que les frais de versement sont garantis par notre ",15,125)
            // //  doc.text("de:",15,125)
            // //  doc.text("----------------------",15,130)
            //  doc.text("  institution :",15,130)
            //  doc.text("Nous vous serions reconnaissant de bien vouloir nous faire parvenir votre facture dans un délai",15,143)
            //  doc.text(" n'excédant pas deux (02) mois après la date d'établissement de la présente lettre",15,150)
            
            //  doc.text("Veuillez agréer ,Monsieur,l'expression de notre considération distinguée",15,168)
            //  doc.text("Le Gérant National",150,200)
            //  doc.setTextColor("#8C1C13")
            //  doc.text("NB:Nous retourner deux exemplaires avec la facture",15,240)
            //  doc.text("--------------------------------------------------------------------------",15,250)
            //  doc.setTextColor("")
            //  doc.setFontSize(10)
            //  doc.text("Siège Social:Immeuble Direction Générale Rez de Chaussée",100,260)
            //  doc.text("8.Rue Abd.6.M.Paraine BP:11002 Dakar (Sénégal)",100,265)
             
         }
        })
      
      doc.output('dataurlnewwindow');
      // let data = document.getElementById('noticeModal'); 
      // const printContents = document.getElementById('noticeModal').innerHTML;
      //    const originalContents = document.body.innerHTML;
      //    document.body.innerHTML = printContents;
      //    window.print();
      //    document.body.innerHTML = originalContents;
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

    protected readonly FormGroup = FormGroup;

//getion bon lunetterie de moins de 2 ans
    public getLastBonLunetterieByIpm_employe(idemp){
        console.log("test"+idemp);
        this.bonService.getLastBonLunetterieByIpm_employe(idemp).subscribe(res =>{

            this.dernierBonLunnetterie = res
            this.dateDernierBonLunnetterie = this.dernierBonLunnetterie?.dateEtablissement
            console.log(this.dateDernierBonLunnetterie);

            this.dateDernierBonLunnetterie = new Date(this.dateDernierBonLunnetterie)
            let aujourdhui = new Date()

           let timestamp1 = this.dateDernierBonLunnetterie.getTime();
           let aujourdhui2 = aujourdhui.getTime();
            console.log("timestamp1 : "+timestamp1);
            console.log("timestamp2 : "+aujourdhui2);



            let differenceEnMillisecondes = aujourdhui2 - timestamp1;
           let differenceEnAnnees = differenceEnMillisecondes / (365.25 * 24 * 60 * 60 * 1000);
            console.log("differenceEnAnnees : "+differenceEnAnnees);

            this.isDateDernierBonInferieurA2ans = differenceEnAnnees  < 2 ? true : false
            console.log( this.isDateDernierBonInferieurA2ans);

        })
    }
}
