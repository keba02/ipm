import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { element, promise } from 'protractor';
import { ListeBonsComponent } from 'src/app/gestion-bons/liste-bons/liste-bons.component';
import { Employe } from 'src/app/Models/Employe';
import { IPM_Details_Facture } from 'src/app/Models/IPM_Details_Factures';
import { Prestataire } from 'src/app/Models/Prestataire';
import { Prestation } from 'src/app/Models/Prestations';
import { ConjointService } from 'src/app/Services/conjoint.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { EnfantService } from 'src/app/Services/enfant.service';
import { FactureService } from 'src/app/Services/facture.service';
import { PrestataireService } from 'src/app/Services/prestataire.service';
import { PrestationService } from 'src/app/Services/prestation.service';
import { environment } from 'src/environments/environment';
import * as xlsx from 'xlsx';
import { Facture } from '../../Models/IPM_Facture';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { IPM_Statut_Facture } from 'src/app/Models/IPM_Statut_Facture';
import {KeycloakService} from 'keycloak-angular';
import {UtilisateurService} from '../../Services/utilisateur.service';

type AOA = any;
declare var $;
@Component({
  selector: 'app-ajouter-factures',
  templateUrl: './ajouter-factures.component.html',
  styleUrls: ['./ajouter-factures.component.css']
})

export class AjouterFacturesComponent implements OnInit {
  worksheet: any;
  filelist: any;
  title: '';
  matr: number;
  enfant: Employe;
  enfants: any;
  conjoints: any;
  prestation_choisi: any;
  prestataire_choisi: any;
  employe_choisi: any;
  id_emp_choisi: any;
  agree: any;
  non_agree: any;
  id_prest_choisi: any;
  part_imp: number;
  part_patient: number;
  id_prestation_choisi: any;
  ipm_prestataires: Prestataire;
  ipm_prestations: Prestation;
  ipm_facturess: Facture;
  ipm_employes: Employe;
  currentfacture: Facture = new Facture();
  uploadForm: FormGroup;
  SERVER_URL = environment.URL + '/fileupload';
  facture = new Facture();
  matricules: any;
  numerFact: any;
  montfact: any;
  wb: xlsx.WorkBook;
  ws: unknown[];
  Jsonprestations: any;
  val: number;
  jsonPrest: any;
  jsonStat: IPM_Statut_Facture;
  //IPM_Statut_Facture
  Factures = new Facture();
  reception;
  factureglobal = new Facture()
  total: number;
  totalChargeIpm: number;
  totalChargeAgent: number;
  dateFacture: Date
  listEmploye: Array<Employe> = [];
  objt = new Facture();
  Facturess = new Facture();
  pani = [];
  panier = [];
  detailFactur: IPM_Details_Facture = { idDedtailsFacture: null, datePrestation: null, taux_ipm: null, montant_facture: null, part_ipm: null, part_patient: null, ipm_prestation: null, ipm_employe: null };
  date1: string;
  matri: any;
  indexMatricule;
  desactive:boolean=false
  comtper: number;
  Prestation;

  forfait:boolean=false
  montant_forfait
  //detailFacture : Array<IPM_Details_Facture> = [];
  // import("c:/Users/HP/workspace/projet_IPM/material-dashboard-pro-angular-v2.5.0/material-dashboard-pro-angular-v2.5.0/src/app/Models/Prestations").Prestation[];

  constructor(private emp_service: EmployeService, private router: Router, private route: ActivatedRoute,
    private pres_service: PrestataireService, private httpClient: HttpClient,
    private conj_service: ConjointService, private enf_service: EnfantService,
     private prestation: PrestationService,
    private formbuildFacture: FormBuilder, private fact_service: FactureService, private toastr: ToastrService,
    private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,private keycloak:KeycloakService, private user_Service:UtilisateurService)
  {
    this.keycloak.loadUserProfile().then( res => {
      console.log(res);
      this.user = res;
      this.getUserByUsernameF(res.username);
    })

    this.dateAdapter.setLocale('en-GB');
    this.ipm_prestataires = new Prestataire();
    this.ipm_prestations = new Prestation();
    this.ipm_employes = new Employe();
    this.ipm_facturess = new Facture();
    this.jsonStat=new IPM_Statut_Facture()
  }

  listemploye: Employe[];
  Employe: Employe[];
  matricule: string;
  reference: string;
  message: Employe;
  id: number;
  ide: number;
  selectedFile: any;
  userFile: any;
  imagePath: any;
  imgURL: any;
  file: any;
  listPrestataire: Prestataire[];
  listPrestation: Prestation[];
  listFacture: IPM_Details_Facture[];
  arrayBuffer: any;
  factureForm: FormGroup;
  taux_ipm;
  messagefacture: any;
  compte = 0;
  NumeroFacture;
  user:any


  ngOnInit(): void {

    this.uploadForm = this.formbuildFacture.group({
      // evenement: ['', Validators.required],
      myFile: ['', Validators.required],
      Employe: [''],
      Prestation: [''],
      Prestataires: ['']

    });
    this.initfacteurform();
    this.id = this.route.snapshot.params['id'];
    //this.emp_service.getEmployeById(this.id).subscribe(
    // result => {
    //   this.employe = result;
    //   console.log(this.employe)
    // }
    // );
    this.pres_service.getAllPrestataires().subscribe(
      pres => {
        // console.log(cat);
        this.listPrestataire = pres;
        console.log(this.listPrestataire);
      }
    );
    let AllPrestations = [];
    this.prestation.getAllPrestation().subscribe(
      pres => {
        // console.log(cat);
        this.listPrestation = pres;
        for (let i = 0; i < this.listPrestation.length; i++) {
          let emmployesdansPanier = this.listPrestation[i].code_prestation;
          //mettre les employes  dans la variable tableau avec tous les employes
          AllPrestations.push(emmployesdansPanier);
          console.log(AllPrestations);
        }
        //  this.listPrestation.forEach(element =>{
        //    element.code_prestation
        //    console.log(element.code_prestation);
        //  })
        //console.log(this.listPrestation);
      }
    );
    let MontantTotalCalcul = [];
    this.fact_service.getAllFacture().subscribe(
      fact => {
        this.listFacture = fact;
        console.log(this.listFacture);
        for (let i = 0; i < fact.length; i++) {
          let montantfacturePannier = fact[i].montant_facture;
          //  mettre les montants  dans la variable tableau avec tous les montants
          MontantTotalCalcul.push(montantfacturePannier);
          console.log(MontantTotalCalcul);
        }
        // Additionner les montants qu'il ya dans le tableau de la variable MontantTotalCalcul avec la méthode reducer
        let montantTotals = MontantTotalCalcul.reduce(function (a, b) {
          return a + b;
        });
        console.log("Le montant total  est:", montantTotals);
        // return montantTotals;
      }
    );
    let AllEmployes = [];
    this.emp_service.listeEmploye().subscribe(
      result => {
        this.listemploye = result;
        for (let i = 0; i < result.length; i++) {
          let emmployesdansPanier = result[i].idemp;
          //mettre les employes  dans la variable tableau avec tous les employes
          AllEmployes.push(emmployesdansPanier);
          // console.log(AllEmployes);
        }
      });
  }

  public getUserByUsernameF(username){
    console.log(username);
    return this.user_Service.getUserByUsername(username).subscribe(data => {
      this.user = data;
      console.log(this.user);


    })
  }
  //Recuperer le facture correspondant
  getFactureById(fac) {
    console.log(fac)
    this.fact_service.getFactureById(fac.idfacture).subscribe(
      result => {
        this.currentfacture = result;
        console.log(this.currentfacture.idfacture);
        // this.pres_service.getAllTypePrestataires().subscribe(
        //     data =>{
        //      // prestataire.ipm_type_prestataire?.nom_type_prestaire
        //       this.cur= data;
        //       console.log(this.cur);
        //     }
        // )


      }
    );
  }
  ///formulaire
  initfacteurform() {
    this.factureForm = this.formbuildFacture.group({

      idfacture: [null],
      numerofacture: [0, Validators.required],
      //prestation:[''],
      Montant: [null, Validators.required],
      // participant:[''],
      // Matricule:[null,Validators.required],
      //Taux_ipm:[null,Validators.required],
      //Charge_ipm:[null,Validators.required],
      //Charge_agent:[null,Validators.required],
      //Prestataires:['',Validators.required],
      Code_acte: [null, Validators.required],
      date_facture: [null],
      date_saisie: [null],
      date_prestation: [null],


      // libelleStructure:[''],
      // active:[false,Validators.required]

    });

  }

  public findByMatricules() {
    ///////Rechercher l'employé
    this.emp_service.getEmployeByMatricule(this.matricule).subscribe(
      data => {
        this.message = data;
        this.matr = this.message.idemp;
        console.log(this.matr);
        this.enfant = this.message;
        console.log(this.enfant);
        ///////Rechercher les enfants en fontion de l'employé
        this.enf_service.listeEnfant(this.message.idemp).subscribe(
          enfs => {
            this.enfants = enfs;
            console.log(this.enfants)
          });
        ///////Rechercher les conjoints en fontion de l'employé
        this.conj_service.listeConjoint(this.message.idemp).subscribe(
          conjs => {

            this.conjoints = conjs;
            console.log(this.conjoints)
          });

        if (this.message) {
          this.showNotification('top', 'center', 1, '<b>agent existe</b> :')
          console.log(this.message);
        }
        else if (!this.message) {
          console.log("not existe");
          this.showNotification('top', 'center', 3, "<b>agent n'existe pas</b> :")
        }
      }
    );



  }
  //Details:Details_Facture[];
  ////////////Save Facture
  // save() {
  //   console.log(this.factureForm.get('date_facture').value);
  //   this.facture.ipm_details_factures = [];
  //   let detailsFacture = new IPM_Details_Facture();
  //   this.facture.numerofacture = this.factureForm.get('numerofacture').value;
  //   detailsFacture.date_facture = this.factureForm.get('date_facture').value;
  //   detailsFacture.date_saisie = this.factureForm.get('date_saisie').value;
  //   detailsFacture.matricule = this.message.matricule;
  //   detailsFacture.montant_facture = this.factureForm.get('Montant').value;
  //   detailsFacture.ipm_employe = this.message;
  //   console.log(this.facture.ipm_details_factures.ipm_employe);
  //   this.facture.ipm_prestataire = JSON.parse(JSON.stringify(this.ipm_prestataires));
  //   detailsFacture.ipm_prestation = JSON.parse(JSON.stringify(this.ipm_prestations));
  //   detailsFacture.part_patient = (this.factureForm.get('Montant').value) - ((this.factureForm.get('Montant').value) * this.taux_ipm) / 100
  //   // facture.tarification = this.taux_ipm;
  //   console.log(detailsFacture.part_patient);
  //   detailsFacture.taux_ipm = this.taux_ipm;
  //   detailsFacture.part_ipm = ((this.factureForm.get('Montant').value) * this.taux_ipm) / 100
  //   console.log(detailsFacture.part_ipm);
  //   detailsFacture.code_acte = this.factureForm.get('Code_acte').value;
  //   this.facture.ipm_details_factures.push(detailsFacture)
  //   console.log(this.facture);
  //   console.log(this.facture.ipm_details_factures);


  //   const detailsfacture = new IPM_Details_Facture()
  //   //detailsfacture.numerofacture = this.factureForm.get('numerofacture').value;
  //   detailsfacture.date_facture = this.factureForm.get('date_facture').value;
  //   detailsfacture.date_saisie = this.factureForm.get('date_saisie').value;
  //   // detailsfacture.matricule = this.message.matricule;
  //   detailsfacture.montant_facture = this.factureForm.get('Montant').value;
  //   // detailsfacture.ipm_employe= this.message;
  //   detailsfacture.ipm_employe = JSON.parse(JSON.stringify(this.ipm_employes));
  //   //  facture.ipm_employe=JSON.parse(JSON.stringify(this.ipm_employes));
  //   console.log(detailsfacture.ipm_employe.idemp);
  //   //facture.ipm_prestataire =JSON.parse(JSON.stringify(this.ipm_prestataires));
  //   // detailsfacture.ipm_facture=JSON.parse(JSON.stringify(this.ipm_factures));
  //   detailsfacture.ipm_prestation = JSON.parse(JSON.stringify(this.ipm_prestations));
  //   detailsfacture.part_patient = (this.factureForm.get('Montant').value) - ((this.factureForm.get('Montant').value) * this.taux_ipm) / 100
  //   detailsfacture.tarification = this.taux_ipm;
  //   detailsfacture.taux_ipm = this.taux_ipm;
  //   detailsfacture.part_ipm = ((this.factureForm.get('Montant').value) * this.taux_ipm) / 100
  //   //facture.idfacture = this.factureForm.get('numero_facture').value;
  //   detailsfacture.code_acte = this.factureForm.get('Code_acte').value;
  //   console.log(detailsfacture);
  //   console.log(detailsfacture.montant_facture);
  //   //  for(let i=0;i<detailsfacture;i++){
  //   //   this.Details.push(detailsfacture[i]);
  //   //  }
  //   this.fact_service.AjoutFacture(this.facture).subscribe(
  //     result => {
  //       console.log(result);
  //       this.messagefacture = result;
  //       console.log(this.messagefacture.idfacture);
  //       let detailsFac: Array<IPM_Details_Facture> = [];
  //       for (let i = 0; i < this.facture.ipm_details_factures.length; i++) {
  //         console.log(this.facture.ipm_details_factures.length);
  //         this.facture.ipm_details_factures[i].idfacture = this.messagefacture.idfacture;
  //         console.log(this.facture.ipm_details_factures[i].idfacture);
  //         let DetailsPannier = this.facture.ipm_details_factures[i];
  //         console.log(DetailsPannier);
  //         //mettre les tous les details dans la variable tableau avec tous les details
  //         detailsFac.push(DetailsPannier);
  //         console.log(detailsFac);
  //       }
  //       this.fact_service.AjoutDetailsFacture(detailsFac).subscribe(data => {
  //         data;
  //         console.log(data);

  //       });
  //       //    let that = this;
  //       //    setTimeout(function(){
  //       //      that.reloadComponent();
  //       //    },5000);
  //       //  }, err=>{
  //       //    console.log(err);
  //       //    let that = this;
  //       //    setTimeout(function(){
  //       //     that.reloadComponent();
  //       //    },15000);

  //       this.toastr.success("Enregistrement avec succes du details ");
  //     });
  //   // this.toastr.error("Erreur d'enregistrement");
  // }
  ///////////////////////Save Details factures
  //Details =new Array();
  // saveDetailsFacture(){
  //   console.log("mon nom")
  //   const detailsfacture=new Details_Facture()
  //   detailsfacture.numerofacture=this.factureForm.get('numerofacture').value;
  //   detailsfacture.date_facture = this.factureForm.get('date_facture').value;
  //   detailsfacture.date_saisie = this.factureForm.get('date_saisie').value;
  //  // detailsfacture.matricule = this.message.matricule;
  //   detailsfacture.montant_facture= this.factureForm.get('Montant').value;
  //  // detailsfacture.ipm_employe= this.message;
  //   detailsfacture.ipm_employe=JSON.parse(JSON.stringify(this.ipm_employes));
  //   //  facture.ipm_employe=JSON.parse(JSON.stringify(this.ipm_employes));
  //   console.log(detailsfacture.ipm_employe.idemp);
  //   //facture.ipm_prestataire =JSON.parse(JSON.stringify(this.ipm_prestataires));
  //   detailsfacture.ipm_facture=JSON.parse(JSON.stringify(this.ipm_factures));
  //   detailsfacture.ipm_prestation=JSON.parse(JSON.stringify(this.ipm_prestations));
  //   detailsfacture.part_patient = (this.factureForm.get('Montant').value)-((this.factureForm.get('Montant').value)*this.taux_ipm)/100
  //   detailsfacture.tarification = this.taux_ipm;
  //   detailsfacture.taux_ipm=this.taux_ipm;
  //   detailsfacture.part_ipm =((this.factureForm.get('Montant').value)*this.taux_ipm)/100
  //   //facture.idfacture = this.factureForm.get('numero_facture').value;
  //   detailsfacture.code_acte = this.factureForm.get('Code_acte').value;
  //   console.log(detailsfacture);
  //   console.log(detailsfacture.montant_facture);
  //   this.Details.push(detailsfacture)
  //   this.fact_service.AjoutDetailsFacture(this.Details).subscribe(data=>
  //     {

  //       this.Details;
  //       console.log(this.Details);

  //       this.toastr.success("details ajouter avec success")
  //       this.ngOnInit
  //     })
  //     this.toastr.error("Erreur d'enregistrement")
  // }

  ////////////////////////Fonction qui permet de choisir plusieurs employées
  public getnomemploye(emp) {
    this.employe_choisi = emp.idemp;
    this.id_emp_choisi = emp.idemp;
    console.log(this.employe_choisi);

  }
  public findByMatricule() {

    this.emp_service.getEmployeByMatricule(this.matricule).subscribe(
      data => {
        this.message = data;
        //     console.log(this.message.idemp);
        if (this.message) {
          this.showNotification('top', 'center', 1, '<b>agent existe</b> :')
          console.log(this.message);
        }
        else if (!this.message) {
          console.log("not existe");
          this.showNotification('top', 'center', 3, "<b>agent n'existe pas</b> :")
        }
      }
    );



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

  /////////////////////////////////////////

  //   addfile(event)     
  //   {    
  //   this.file= event.target.files[0];     
  //   let fileReader = new FileReader();    
  //   fileReader.readAsArrayBuffer(this.file);     
  //   fileReader.onload = (e) => {    
  //       this.arrayBuffer = fileReader.result;    
  //       var data = new Uint8Array(this.arrayBuffer);    
  //       var arr = new Array();    
  //       for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
  //       var bstr = arr.join("");    
  //       var workbook = xlsx.read(bstr, {type:"binary"});    
  //       var first_sheet_name = workbook.SheetNames[0];    
  //       var worksheet = workbook.Sheets[first_sheet_name];    
  //       console.log(xlsx.utils.sheet_to_json(worksheet,{raw:true}));    
  //         var arraylist = xlsx.utils.sheet_to_json(worksheet,{raw:true});     
  //             this.filelist = [];    
  //             console.log(this.filelist)    

  //   }    
  // } 
  data: AOA = [[,], [,]];
  wopts: xlsx.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  getnom(pret) {
    console.log(pret)
    this.prestation_choisi = pret.libelle;
    this.id_prestation_choisi = pret.code_prestation;
    this.agree = pret.taux_agrees
    this.non_agree = pret.taux_non_agrees
    this.Jsonprestations = pret;
    this.forfait=pret.forfait
    this.montant_forfait= pret.montant_forfait
    if (this.val == 1) {
      if(!this.forfait){
        this.taux_ipm = this.agree;
        console.log(this.taux_ipm, "agreer")
      }
    } else{
      // this.taux_ipm = this.non_agree
      // console.log(this.ipm_prestations);
      if(!this.forfait){
        this.taux_ipm = this.non_agree
        // console.log(this.taux_ipm, "agreer")
      }
    }

    console.log(this.id_prestation_choisi);
    let detailsFac = [];
    for (let i = 0; i < this.id_prestation_choisi; i++) {
      let DetailsePannier = this.id_prestation_choisi[i];
      //mettre les montants  dans la variable tableau avec tous les montants
      detailsFac.push(DetailsePannier);
      console.log(detailsFac);
    }
  }
  //choixDate(){

  //}
  getnomprestataire(prest) {
    console.log(prest)
    this.prestataire_choisi = prest.nom_prestataire;
    this.id_prest_choisi = prest.code_prestataire;
    this.val = prest.code_categorie_pretataire
    //this.part_imp=(5000*this.taux_ipm)/100
    this.jsonPrest = prest

    console.log(this.taux_ipm, "non agrreer")
    this.ipm_prestataires.code_prestataire = this.id_prest_choisi;
  }
  onFileChange(evt: any) {
    this.date1 = this.datepipe.transform(this.dateFacture, 'dd-MM-yyyy');
    console.log(this.date1)
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
      this.calculemontant(this.ws)
      console.log(this.ws);



    };
    reader.readAsBinaryString(target.files[0]);
  }
  ///Calcul du total 
  calculemontant(fac: any) {
    this.total = 0;
    this.totalChargeIpm = 0;
    this.totalChargeAgent = 0;
    for (let element of fac) {

      this.total += element.Montant;
      if(this.forfait){
        if(element.Montant <= this.montant_forfait){
          this.totalChargeIpm += element.Montant;
          this.totalChargeAgent += 0;
        }else {
          this.totalChargeIpm += this.montant_forfait;
          this.totalChargeAgent += element.Montant - this.totalChargeIpm ;
        }

      }else{
        this.totalChargeIpm += (element.Montant * this.taux_ipm) / 100;
        // console.log(this.totalChargeIpm);
        this.totalChargeAgent += element.Montant - (element.Montant * this.taux_ipm) / 100;

      }
      //console.log(this.total);



    }

  }


  ajoutFacture(fac) {
    //var detailFacture=IPM_Details_Facture
    // console.log(fac.Montant)
    //for (let i = 0; i <fac.length ; i++) {
    //var detailFactur: IPM_Details_Facture;
    //new Promise(function (resolve,reject) {
    var bonmatricule: boolean = false;
    this.factureglobal.montantTotal = this.total
    this.factureglobal.part_ipm = this.totalChargeIpm
    this.factureglobal.dateSaisie
    this.factureglobal.part_patient = this.totalChargeAgent
    this.factureglobal.ipm_prestataire = JSON.parse(JSON.stringify(this.jsonPrest))
    this.factureglobal.ipm_utilisateur= this.user;

    this.factureglobal.dateFacture=this.dateFacture
    this.factureglobal.DateReception=this.reception
    this.factureglobal.numerofacture =this.NumeroFacture
    this.jsonStat.idStatutFacture=1
    this.factureglobal.ipmStatutFacture =JSON.parse(JSON.stringify(this.jsonStat))
    this.factureglobal.dateSaisie= new Date()


    this.fact_service.AjoutFacture(this.factureglobal).subscribe(
      (data: string) => {
        console.log(data)
        this.factureglobal.idfacture = parseInt(data)
        console.log(this.factureglobal.ipmStatutFacture.statutFacture)


        for (let index of fac) {

          
          //break;
                

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


              const element = index.Nfacture;
              console.log(index.Nfacture)

              //for (let i = 0; i <fac.length ; i++ {
              //console.log(this.listEmploye[0])

              //}
                if(this.forfait){
                  if (index.Montant <= this.montant_forfait ){
                    this.detailFactur.part_ipm = index.Montant
                    this.detailFactur.part_patient = 0;
                  }else {
                    this.detailFactur.part_ipm = this.montant_forfait
                    this.detailFactur.part_patient = index.Montant - this.detailFactur.part_ipm
                  }

                }else{
                  this.detailFactur.part_ipm = (index.Montant * this.taux_ipm) / 100
                  this.detailFactur.part_patient = index.Montant - (index.Montant * this.taux_ipm) / 100
                }
              this.detailFactur.montant_facture = index.Montant
              this.detailFactur.ipm_prestation = JSON.parse(JSON.stringify(this.Jsonprestations));
              this.detailFactur.ipm_employe = this.message
              this.detailFactur.ipmFacture = this.factureglobal
              this.detailFactur.datePrestation = this.dateFacture
              this.detailFactur.matricule = index.Matricule
              this.detailFactur.taux_ipm=this.taux_ipm
             // this.detailFactur.datePrestation = new Date()
              console.log(this.detailFactur.ipmFacture);
              console.log(index.Montant);
              console.log(this.detailFactur);
              this.panier.push({ ...this.detailFactur });

              console.log(fac.length, this.listEmploye.length);
              // while (this.panier) {


              if (fac.length == this.listEmploye.length) {
                console.log(this.listEmploye.length);
                this.fact_service.AjoutDetailsFacture(this.panier).subscribe
                  (
                    (data) => {
                      console.log(data)
                    }
                  );
                this.fact_service.UpdateFacture(this.factureglobal).subscribe
                  (
                    (data) => {
                      console.log(data)
                    }
                  );
                this.showALERTE2('top', 'center')
                this.desactive=true
              }
            }
            else if (!this.message && this.factureglobal.idfacture) {
              //this.compte++

              console.log("Erreur sur le fichier " +index.Matricule, index, this.compte);
              this.indexMatricule=this.compte
              
                console.log(this.factureglobal)
                this.fact_service.deleteById(this.factureglobal.idfacture).subscribe(
                  (data) => {
                    this.matri = index.Matricule
                   
                    this.showALERTE('top', 'center')
                    console.log(+index.Matricule)
                  }
                )
               // this.router.navigate(['/gestion-factures']);
              
            }
            },
            
          )
        }

      }
    );

  }

  showALERTE(from: any, align: any) {
    const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

    // const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: 'notifications',
      message: '<b>Veuillez verifer le fichier pour le Matricule :' + this.matri + ' a la ligne :' +this.indexMatricule+' </b> :'
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
  AjoutDetailsFacture(donne: IPM_Details_Facture[]) {
    this.fact_service.AjoutDetailsFacture(donne).subscribe(data => {
      data
    })


  }
  detailFact(detailFact: any) {
    throw new Error('Method not implemented.');
  }


  export(): void {
    /* generate worksheet */
    const ws: xlsx.WorkSheet = xlsx.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    xlsx.writeFile(wb, this.fileName);
  }
  ////////////////////////




  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // @ts-ignore
      this.uploadForm.get('myFile').setValue(file);
    }
  }
  ///////////////////////RELOAD
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  onSubmit() {
    const formData = new FormData();
    // @ts-ignore
    formData.append('file', this.uploadForm.get('myFile').value);
    // @ts-ignore
    // formData.append('field', this.uploadForm.get('evenement').value);

    this.httpClient.post<IPM_Details_Facture>(this.SERVER_URL, formData).subscribe(response => {
      console.log(response);
      this.toastr.info("Fichier chargé avec succes");
      let that = this;
      setTimeout(function () {
        that.reloadComponent();
      }, 5000);
    }, err => {
      console.log(err);
      let that = this;
      setTimeout(function () {
        that.reloadComponent();
      }, 15000);
    });

  }

}