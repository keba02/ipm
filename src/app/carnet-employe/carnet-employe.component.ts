import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableData } from 'src/app/md/md-table/md-table.component';
import { Categorie } from 'src/app/Models/Categorie';
import { Conjoint } from 'src/app/Models/Conjoint';
import { Employe } from 'src/app/Models/Employe';
import { Enfant } from 'src/app/Models/Enfant';
import { Service } from 'src/app/Models/Service';
import { ConjointService } from 'src/app/Services/conjoint.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { EnfantService } from 'src/app/Services/enfant.service';
import { DatePipe, formatDate } from '@angular/common';
import { Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { Entity } from 'src/app/Models/Entity';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {data, event} from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { DateAdapter } from '@angular/material/core';
import { element } from 'protractor';
import { BonService } from 'src/app/Services/bon.service';
import { IPM_Bon } from 'src/app/Models/IPM_Bon';
// @ts-ignore
import {TelechargerFichierService} from "../../Services/telecharger-fichier.service";
// @ts-ignore
import {environment} from '../../../environments/environment';
declare var $: any
@Component({
  selector: 'app-carnet-employe',
  templateUrl: './carnet-employe.component.html',
  styleUrls: ['./carnet-employe.component.css']
})
export class CarnetEmployeComponent implements OnInit {
  //Objet du Conjoint et l'enfant
  uploadProgress: number;
  uploadSub: Subscription;
  conjoint: Conjoint = new Conjoint();
  enfant: Enfant = new Enfant();
  //enfantt: Enfant= new Enfant(0,"","",null,"","",null);
  ide: number;
  employe: Employe[];
  message: any;
  //Objets lister les conjoints
  public tableData: TableData;
  conjoints: Array<any> = [];
  nom_conjoint: string;
  prenom_conjoint: string;
  currentconjoint: Conjoint = new Conjoint();
  /////Objets lister Enfants///////
  public tableDatas: TableData;
  iden: number;

  enfants: Array<any> = [];
  currentenfant: Enfant = new Enfant();
  myMessage = "Salut votre enregistrement est effectue !!! "
  myId = 0;

  /////////
  currentemploye: Employe = new Employe();
  currentBon:IPM_Bon[]
  id: number;
  service: Service[];
  categorie: Categorie[];
  servi: number;
  cate: number;
  addService: Service;
  addCategorie: Categorie;
  addEmploye: Employe;
  selectedFile: any;
  selectCertif: any;
  SelectAttest: any
  selectExtrait: any;
  selectdFile: any;
  selectedFileextrait: any;
  userFile: any;
  imagePath: any;
  imgURL: any;
  imgURL2: any;
  today = new Date();
  jstoday: string;
  datenaissance: string;
  d;
  sexM;
  sexee
  dateNaiscoinjoint: Date;
  agenfant: number;
  agemploye: number;
  entity: Entity[];
  sexe = [{ id: 1, value: "Masculin" },
    { id: 2, value: "Féminin" }
  ]
  // FormControlEnfant: FormGroup;
  sexChoisi: any;
  sexconjChoisi: any;
  CertifURL: string | ArrayBuffer;
  ExtraitURL: string | ArrayBuffer;
  AttestationChomageURL : string | ArrayBuffer;
  sexe_conjoint: string;
  date_naiss_conj: Date
  lieu_naiss_conj: string;
  telephone: string;
  nom_enfant: string;
  prenom_enfant: string;
  sexe_enfant: string;
  date_nais_enfant: Date;
  lieu_nais_enfant: string;
  adresse: string;
  imgEnfant: string;
  selectChemin: any;
  CheminURL: string | ArrayBuffer;
  selectEditphoto: any;
  selectEditJustif:any;
  fichierURL: string | ArrayBuffer;
  imgURL3: string | ArrayBuffer;
  selectEditphotoconjoint: any;
  imgURL4: string | ArrayBuffer;
  selectEditphotoenfant: any;
  imgURL5: string | ArrayBuffer;
  condition:boolean;
  controlSexe:boolean=false;
  desactive:boolean=false;
  listFactures: any;
  montant: any;
  partIpm: any;
  partPatient: any;
  //chemintelechargementFichier=location.origin+"/get/file/";
  chemintelechargementFichier=environment.URL+"get/file/";
  idempBon:any;
  nombre: number;
  date: Date;
  currentemployefichier: Employe;
  private certifica: string;
  attestationDeChomage: string;
  certificat: string;
  justificatifEmp : string;
  genreEmp: boolean=false;
  constructor(@Inject(LOCALE_ID) private locale: string, private toastr: ToastrService,
              private emp_service: EmployeService,
              private fichierTelecharger : TelechargerFichierService,
              private bonService:BonService,
              private conj_service: ConjointService,
              private enf_service: EnfantService, private datePipe: DatePipe,
              private dateAdapter: DateAdapter<Date>,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.jstoday = formatDate(Date.now(), 'dd-MM-yyyy', this.locale);
    this.addCategorie = new Categorie();
    this.addService = new Service();
    this.addEmploye = new Employe();
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    //this.initForm()
    var mainPanel = document.getElementsByClassName('main-panel')[0];
    $('.modal').on('shown.bs.modal', function () {
      mainPanel.classList.add('no-scroll');
    })
    $('.modal').on('hidden.bs.modal', function () {
      mainPanel.classList.remove('no-scroll');
    })
    this.getCategorie();
    this.getService();
    this.getEmploye();
    this.idempBon= this.route.snapshot.params['id'];
    this.id = this.route.snapshot.params['id'];
    this.emp_service.getEmployeById(this.id).subscribe(
        result => {
          this.currentemploye = result;
          console.log(result)
          this.justificatifEmp =this.currentemploye.justificatif
          this.justificatifEmp =this.justificatifEmp.split("/").pop();
          console.log(this.justificatifEmp)
          if (this.currentemploye.situation_familial=="Celibataire") {
            this.condition=true
            console.log(this.currentemploye.situation_familial,this.condition)

          }
          if(this.currentemploye.sexe=="Féminin"){
            this.genreEmp=true;

          }

          console.log(this.currentemploye.ipmEntity?.nom_entity);
          //const ttoday=new Date();
          //const birthDate = new Date(this.currentemploye.date_nais);
          if (this.currentemploye.date_nais) {
            console.log(this.currentemploye.date_nais)
            this.date = this.currentemploye.date_nais
            //convert date again to type Date
            const bdate = new Date(this.date);
            console.log(this.date)
            const ttoday = new Date();
            const timeDiff = Math.abs(Date.now() - bdate.getTime());
            this.agemploye= Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

            console.log(this.agemploye);
            this.agemploye = ttoday.getFullYear() - bdate.getFullYear();
            const m = ttoday.getMonth() - bdate.getMonth();
            console.log(bdate.getFullYear(),bdate.getMonth());

            if (m < 0 || (m === 0 && ttoday.getDate() < bdate.getDate())) {
              this.agemploye--;
            }
            console.log(this.agemploye);
          }
        }
    );
    /////
    this.emp_service.getEmployeByIdSanstof(this.id).subscribe(
        result => {
          this.currentemployefichier = result;

          console.log(this.currentemploye);


        }
    );

    ///
    //lister les conjoints en fonction de leur employe
    this.ide= this.route.snapshot.params['id'];
    console.log(this.ide)
    this.conj_service.listeConjoint(this.ide).subscribe(
        conjs => {
          console.log(conjs);
          this.conjoints = conjs;
          console.log(this.conjoints)
          this.conjoints.forEach(element=>{
            if(element.ipm_employe.sexe=="Féminin" && this.conjoints.length ==1){
              console.log(this.conjoints)
              this.controlSexe=true
              console.log(this.conjoints)
            }
          })


        });
    //lister les enfants en fonction de leur employe
    this.iden = this.route.snapshot.params['id'];
    this.enf_service.listeEnfant(this.iden).subscribe(
        enfs => {
          console.log(enfs);
          this.enfants = enfs;
          this.enfants.forEach(ele => {
            if (ele.date_nais_enfant) {
              //convert date again to type Date
              const bdate = new Date(ele.date_nais_enfant);
              const timeDiff = Math.abs(Date.now() - bdate.getTime());
              this.agenfant = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

            }
            console.log(this.agenfant)
            if (this.agenfant > 21) {
              console.log("Age atteinte impossible de ce beneficie de l'ipm :",this.agenfant)
              ele.active = false
              ele.agenfant=this.agenfant;
              console.log(ele.agenfant)
              console.log(ele.active);
              console.log("age depasse")
            }
            else if (this.agenfant < 21) {
              console.log("Voici l'age :", this.agenfant)
              ele.active = true
              ele.agenfant=this.agenfant;
              console.log(ele.active);
              console.log("age non depasse")

            }
          })
          console.log(this.enfants)
        });

  }
  routage(enfant) {
    console.log(enfant.extrait_naiss)
    location.href = 'enfant.extrait_naiss'
    let reader = new FileReader();
    reader.readAsDataURL(enfant.extrait_naiss);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
    //this.router.navigate(['enfant.extrait_naiss'])
  }
  sexeEnfant(sex) {
    console.log(sex)
    this.sexChoisi = sex.value
    this.ngOnInit()
  }
  /*sexeConjoint(sex){
    this.sexconjChoisi=sex.value

  }*/
  getConjointById(conjoint) {
    this.conj_service.getConjointById(conjoint.idconj).subscribe(
        result => {
          this.currentconjoint = result;
          this.nom_conjoint = this.currentconjoint.nom_conjoint
          this.prenom_conjoint = this.currentconjoint.prenom_conjoint
          this.sexe_conjoint = this.currentconjoint.sexe_conjoint
          this.date_naiss_conj = this.currentconjoint.date_naiss_conj
          this.lieu_naiss_conj = this.currentconjoint.lieu_naiss_conj
          this.telephone = this.currentconjoint.telephone
          // this.imgURL=this.currentconjoint.photos
          this.date_naiss_conj = this.currentconjoint.date_naiss_conj
          console.log(this.currentconjoint)


        }
    );
  }

  getConjointByIdsansPhoto(conjoint) {
    this.conj_service.getConjointByIdsansPhoto(conjoint.idconj).subscribe(
        result => {
          this.currentconjoint = result;
          this.certifica = this.currentconjoint.certificat
          this.nom_conjoint = this.currentconjoint.nom_conjoint
          this.prenom_conjoint = this.currentconjoint.prenom_conjoint
          this.sexe_conjoint = this.currentconjoint.sexe_conjoint
          this.date_naiss_conj = this.currentconjoint.date_naiss_conj
          this.lieu_naiss_conj = this.currentconjoint.lieu_naiss_conj
          this.telephone = this.currentconjoint.telephone
          this.certificat = this.currentconjoint.certificat
          this.certificat= this.certificat.split("/").pop();
          this.attestationDeChomage = this.currentconjoint.attestationDeChomage
          this.attestationDeChomage=this.attestationDeChomage.split("/").pop();
          console.log(this.attestationDeChomage)
          // this.imgURL = this.currentconjoint.photos
          this.date_naiss_conj = this.currentconjoint.date_naiss_conj
          console.log(this.currentconjoint)
          console.log(this.chemintelechargementFichier)

        }
    );
  }
  ModifConjointNow() {
    //this.currentconjoint.nom_conjoint
    console.log(this.currentconjoint.nom_conjoint)

    console.log(this.nom_conjoint)
    this.currentconjoint.nom_conjoint = this.nom_conjoint
    this.currentconjoint.prenom_conjoint = this.prenom_conjoint
    this.currentconjoint.sexe_conjoint = this.sexe_conjoint
    this.currentconjoint.date_naiss_conj = this.date_naiss_conj
    this.currentconjoint.lieu_naiss_conj = this.lieu_naiss_conj
    this.currentconjoint.telephone = this.telephone

    if(this.selectCertif){
      this.currentconjoint.certificat=this.selectCertif.name
    }
    if(this.selectedFile){
      this.currentconjoint.photos=this.selectedFile.name;
    }
    if(this.SelectAttest){
      this.currentconjoint.attestationDeChomage=this.SelectAttest.name;
    }

    console.log(this.currentconjoint)
    // this.conj_service.modifConjoint(this.currentconjoint).subscribe((data) => {
    //     this.ngOnInit();
    //     console.log(data)
    // })
    if( this.selectedFile){
      this.conj_service.uploadFile(this.selectedFile).subscribe(
          (data)=> {
            this.message=data ;
            console.log("the message ",data)

            return this.message
          })

    }
    if(this.selectCertif){
      this.conj_service.uploadFileCertif(this.selectCertif).subscribe(
          (data)=> {
            this.message=data ;
            console.log("the message ",data)

            return this.message
          })
    }
    if (this.SelectAttest){
      this.conj_service.uploadAttestationChomage(this.SelectAttest).subscribe(
          (data)=> {
            console.log("******************")
            this.message=data ;
            return this.message
          })
    }

    this.conj_service.modifConjointeAttestChomage(this.currentconjoint).subscribe((donnee)=>{
      console.log("-------------")
      console.log(donnee);
      this.ngOnInit()
    })


    // this.FormControlEmpployes.reset();
  }
  modifierPhotoConjoint() {
    this.currentconjoint.photos = this.selectEditphotoconjoint.name
    this.conj_service.modifPhotoConjoint(this.currentconjoint).subscribe(data => { this.ngOnInit() })
    this.conj_service.uploadFile(this.selectEditphotoconjoint).subscribe(
        (data) => {
          this.message = data;
          console.log("the message ", data)

          return this.message
        }), (error) => {
      console.error(error);
    }

  }

  getFichierTelecharger(fichier ){
    this.fichierTelecharger.getTelechargementFichier(fichier).subscribe(()=>{
      console.log(data)
    })
  }

  getEnfantById(enfant) {
    this.enf_service.getEnfantByIdsansPhoto(enfant.idenf).subscribe(
        result => {
          this.enfant = result;

          this.nom_enfant = this.enfant.nom_enfant
          this.prenom_enfant = this.enfant.prenom_enfant
          this.sexe_enfant = this.enfant.sexe_enfant
          this.date_nais_enfant = this.enfant.date_nais_enfant
          this.lieu_nais_enfant = this.enfant.lieu_nais_enfant
          this.adresse = this.enfant.adresse


        }
    );
  }
  getEnfantbyPhoto(enfant) {
    this.enf_service.getEnfantById(enfant.idenf).subscribe(
        result => {
          this.enfant = result;

          this.nom_enfant = this.enfant.nom_enfant
          this.prenom_enfant = this.enfant.prenom_enfant
          this.sexe_enfant = this.enfant.sexe_enfant
          this.date_nais_enfant = this.enfant.date_nais_enfant
          this.lieu_nais_enfant = this.enfant.lieu_nais_enfant
          this.adresse = this.enfant.adresse
          this.imgURL = this.enfant.chemin
          console.log(this.imgURL);

        }
    );
  }

  modifEnfant() {
    this.enfant.nom_enfant = this.nom_enfant
    this.enfant.prenom_enfant = this.prenom_enfant
    this.enfant.sexe_enfant = this.sexe_enfant
    this.enfant.date_nais_enfant = this.date_nais_enfant
    this.enfant.lieu_nais_enfant = this.lieu_nais_enfant
    this.enfant.adresse = this.adresse
    // if(this.selectedFile){
    //   this.enfant.chemin=this.selectedFile.name
    // }


    console.log(this.enfant);
    this.enf_service.modifEnfant(this.enfant).subscribe(data => {
      this.ngOnInit()
    })
    // if(this.selectedFile){
    //   this.enf_service.uploadFile(this.selectedFile).subscribe(
    //     (data)=> {

    //     })
    //     }
    //     if(this.selectExtrait){
    //       this.enf_service.uploadFileExtrait(this.selectExtrait).subscribe(
    //         (data)=> {

    //         })
    //               }


    this.FormControlEnfant.reset();

  }
  modifierPhotoEnfant() {
    this.currentenfant.chemin = this.selectEditphotoenfant.name
    this.enf_service.modifPhotoEnfant(this.currentenfant).subscribe(data => { this.ngOnInit() })
    this.enf_service.uploadFile(this.selectEditphotoenfant).subscribe(
        (data) => {
          this.message = data;
          console.log("the message ", data)
          this.toastr.info("Modification du phot avec succès");
          return this.message
        }), (error) => {
      console.error(error);
      this.toastr.error("Echec");
    }

  }
  ////////////----------------//////////////////
  getEmployeById(employe) {
    this.emp_service.getEmployeById(employe.idemp).subscribe(
        result => {
          this.currentemploye = result;
          console.log(this.currentemploye.date_nais);
        }
    );
  }
  //Recuperer les employe au niveau  des conjoints
  public getEmploye() {
    this.conj_service.getEmploye().subscribe(
        conj => {
          this.employe = conj;
        }
    )
  }

  public getService() {
    this.emp_service.getService().subscribe(
        serv => {
          // console.log(serv);
          this.service = serv;
          // console.log(this.service)
        }
    )
  }

  public getCategorie() {
    this.emp_service.getCategorie().subscribe(
        cat => {
          // console.log(cat);
          this.categorie = cat;
          // console.log(this.categorie)
        }
    )
  }
  ////// controler les champs //////

  FormControlEmpployes = this.fb.group({
    nom_conjoint: [null, Validators.required],
    prenom_conjoint: [null, Validators.required],
    sexee: [null, Validators.required],
    date_naiss_conj: [null, Validators.required],
    lieu_naiss_conj: [null, Validators.required],
    telephone: [null, Validators.required],
    certifURL: [null, Validators.required],
    AttestationChomageURL:[null, Validators.required],
    image: [null, Validators.required]

  });

  //Ajout du Conjoint de l'employé
  public ConjointNow() {
    this.conjoint.nom_conjoint=this.nom_conjoint
    this.conjoint.prenom_conjoint=this.prenom_conjoint
    this.conjoint.telephone=this.telephone
    this.conjoint.lieu_naiss_conj=this.lieu_naiss_conj
    this.conjoint.date_naiss_conj=this.date_naiss_conj
    this.conjoint.ipm_employe = JSON.parse(JSON.stringify(this.currentemploye));
    console.log(this.conjoint.ipm_employe);
    //   var date = this.datePipe.transform(this.conjoint.date_naiss_conj, "dd-MM-yyyy");
    // this.conjoint.date_naiss_conj= date;
    this.conjoint.sexe_conjoint = this.sexChoisi
    console.log(this.conjoint)
    if (this.selectedFile) {
      this.conjoint.photos = this.selectedFile.name;
    }
    if (this.selectCertif) {
      this.conjoint.certificat = this.selectCertif.name

    }
    if( this.SelectAttest){
      this.conjoint.attestationDeChomage = this.SelectAttest.name
    }
    console.log(this.conjoint)
    this.conj_service.AjoutConjoint(this.conjoint).subscribe((donnee)=>{
      console.log((donnee))

    })
    if (this.selectedFile) {
      this.conj_service.uploadFile(this.selectedFile).subscribe(
          (data) => {

            this.message = data;
            console.log("the message ", data)


            return this.message
          })}
    if (this.selectCertif) {
      this.conj_service.uploadFileCertif(this.selectCertif).subscribe(
          (data) => {
            this.message=data ;
            console.log("the message ",data)

            return this.message

          })}
    if (this.SelectAttest) {
      this.conj_service.uploadAttestationChomage(this.SelectAttest).subscribe(
          (data) => {
            this.message=data ;
            console.log("the message ",data)

            return this.message


          })}
    if (!this.message) {
      this.showNotification('top', 'center', 1, '<b>conjoint ajouté</b> :')
      console.log(this.message);
      this.router.navigate(['carnet-employe/:id']);
      this.selectCertif=null
      this.SelectAttest =null
      this.CertifURL=null
      this.conjoints.push(this.conjoint);

    }
    else if (this.message == null) {
      console.log("not existe");
      this.showNotification('top', 'center', 3, "<b>conjoint non ajouté</b> :")

    }
    this.FormControlEmpployes.reset();

    //   location.reload();

  }


  retourner() {
    this.router.navigate(['/gestion-employes/ListeEmployes']);

  }
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
  //Fin de l'ajout des Conjoints de l'employé
  //Ajout du Conjoint de l'employé
  // initForm(){
  FormControlEnfant = this.fb.group({
    nom_enfant: [null, Validators.required],
    prenom_enfant: [null, Validators.required],
    date_nais_enfant: [null, Validators.required],
    lieu_nais_enfant: [null, Validators.required],
    adresse: [null, Validators.required],
    sexM: [null, Validators.required],
    chemin: [null, Validators.required],
    image: [null, Validators.required],
    file: [null, Validators.required],

  });
  // }
  // public EnfantNow(){

  //   this.enfant.ipm_employe=JSON.parse(JSON.stringify(this.currentemploye));
  //   //console.log(this.enfant);
  //     //this.enfantt.ipm_employe=JSON.parse(JSON.stringify(this.currentemploye));
  //     console.log(this.enfant);
  //     this.enfant.chemin=this.selectedFile.name;
  //     console.log(this.enfant);
  //     var date = this.datePipe.transform(this.FormControlEnfant.get("date_nais_enfant"), "dd-MM-yyyy");
  //     this.enfant.date_nais_enfant= date;
  //     this.enfant.nom_enfant=this.FormControlEnfant.get("nom_enfant").value;
  //     this.enfant.prenom_enfant=this.FormControlEnfant.get("prenom_enfant").value;
  //     this.enfant.lieu_nais_enfant=this.FormControlEnfant.get("lieu_nais_enfant").value;
  //     this.enfant.adresse=this.FormControlEnfant.get("adresse").value;
  //     this.enfant.sexe_enfant=this.FormControlEnfant.get("sexe").value;
  //     console.log(this.enfant)
  //     //this.enfant.extrait_naiss=this.selectedFileextrait.name;
  //    this.enf_service.AjoutEnfant(this.enfant).subscribe(
  //     (data)=> {
  //       this.message=data ;
  //       console.log("the message ",data)

  //       return this.message
  //     })

  //       this.enf_service.uploadFile(this.selectedFile).subscribe(
  //         (data)=> {
  //           this.message=data ;
  //           console.log("the message",data)

  //           return this.message
  //         })
  //         // this.enf_service.uploadExtraitNaiss(this.selectedFileextrait).subscribe(
  //         //   (data)=> {
  //         //     this.message=data ;
  //         //     console.log("the message",data)

  //         //     return this.message
  //         //   })
  //         //alert('Successfully.');
  //     if(!this.message){
  //       this.showNotification1('top','center',1,'<b>enfant ajouté</b> :')
  //      // console.log(this.message);
  //          this.router.navigate(['/carnet-employe/:id']);
  //     }
  //   else if(this.message==null){
  //       console.log("not existe");
  //       this.showNotification1('top','center',3,"<b>enfant non ajouté</b> :")
  //     }



  // }
  modifPhoto(event: any) {
    this.selectChemin = event.target.files[0];

    let readerr = new FileReader();
    readerr.readAsDataURL(event.target.files[0]);
    readerr.onload = (event) => {
      this.CheminURL = readerr.result;
    };

  }
  public EnfantNow() {
    this.enfant.nom_enfant =this.nom_enfant;
    this.enfant.prenom_enfant =this.prenom_enfant;
    this.enfant.date_nais_enfant = this.date_nais_enfant;
    this.enfant.lieu_nais_enfant = this.lieu_nais_enfant;
    this.enfant.adresse = this.adresse;
    //this.enfant.sexe_enfant = this.sexe_enfant;
    this.enfant.ipm_employe = JSON.parse(JSON.stringify(this.currentemploye));
    //console.log(this.enfant);
    //this.enfantt.ipm_employe=JSON.parse(JSON.stringify(this.currentemploye));
    console.log(this.enfant);
    if (this.selectedFile) {
      this.enfant.chemin = this.selectedFile.name;

    }

    console.log(this.enfant);
    //  var date = this.datePipe.transform(this.enfant.date_nais_enfant, "dd-MM-yyyy");
    //  this.enfant.date_nais_enfant= date;
    console.log(this.enfant)
    this.enfant.sexe_enfant = this.sexChoisi
    if (this.selectExtrait) {
      this.enfant.extrait_naiss = this.selectExtrait.name;}
    this.enf_service.AjoutEnfant(this.enfant).subscribe(
        (data) => {
          this.ngOnInit();
          this.message = data;
          console.log("the message ", data)
          return this.message
        })
    if (this.selectedFile) {

      this.enf_service.uploadFile(this.selectedFile).subscribe(
          (data) => {
            this.message = data;
            console.log("the message", data)

            return this.message
          })}
    if (this.selectExtrait) {

      this.enf_service.uploadFileExtrait(this.selectExtrait).subscribe(
          (data) => {
            this.enfants
            //console.log("the message",data)

            //return this.message
          })}
    if (!this.message) {
      this.showNotification1('top', 'center', 1, '<b>enfant ajouté</b> :')
      // console.log(this.message);
      this.router.navigate(['/carnet-employe/:id']);
      this.selectExtrait=null
      this.selectedFile=null
      this.ExtraitURL=null
      this.enfants.push(this.enfant)
    }
    else if (this.message == null) {
      console.log("not existe");

      this.showNotification1('top', 'center', 3, "<b>enfant non ajouté</b> :")
    }

    this.FormControlEnfant.reset();

  }
  /////////Entité
  public getEntity() {
    this.emp_service.getEntity().subscribe(
        ent => {
          // console.log(cat);
          this.entity = ent;
          console.log(this.entity)
        }
    )
  }
  showNotification1(from: any, align: any, idtype: any, note) {
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
  ////////////////////----------/////////////////
  //recuperer le fichier
  getFile(event: any) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {

      this.imgURL = reader.result;
      if (this.imgURL =! null){
        console.log( this.imgURL)

      }
    };

    console.log(this.imgURL)
  }
  selctExtrait(event: any) {
    this.selectExtrait = event.target.files[0];

    let readerr = new FileReader();
    readerr.readAsDataURL(event.target.files[0]);
    readerr.onload = (event) => {
      this.ExtraitURL = readerr.result;
    };

  }


  selectCertificat(event: any) {
    //selectCertif
    console.log(event)
    this.selectCertif = event.target.files[0];
    console.log(this.selectCertif)
    let readerr = new FileReader();
    readerr.readAsDataURL(event.target.files[0]);
    readerr.onload = (event) => {
      this.CertifURL = readerr.result;
      console.log(this.CertifURL)
    };

    console.log(this.selectCertif)

  }
  selectAttestationChomage( event: any){
    console.log(event)
    this.SelectAttest = event.target.files[0];
    console.log(this.SelectAttest)
    let readerr = new FileReader();
    readerr.readAsDataURL(event.target.files[0]);
    readerr.onload = (event) => {
      this.AttestationChomageURL = readerr.result;
      console.log(this.AttestationChomageURL)
    };

  }
  onFileChanged(event: any) {
    // console.log(event);
    this.selectdFile = event.target.files[0];

    let readers = new FileReader();
    readers.readAsDataURL(event.target.files[0]);
    readers.onload = (evente2) => {
      this.imgURL2 = readers.result;
    };

  }
  image() {
    console.log(this.imgURL2);
    this.router.navigate(['this.imgURL2'])
  }
  //envoyer le fivhier au serveur


  // onSelectFile(event){
  //   if(event.target.files.length>0)
  //   {
  //      const file=event.target.files[0];
  //      this.userFile=file;
  //     // this.f["profile"].setValue(file);
  //     var mimeType=event.target.files[0].type;
  //     if(mimeType.match(/image\/*/)==null)
  //     {
  //       this.message="Only images are surrported.";
  //       return ;
  //     }
  //     var reader = new FileReader();
  //   this.imagePath=file;
  //   reader.readAsDataURL(file);
  //   reader.onload=(_event)=>  {
  //     this.imageURL=reader.result;
  //   }
  //  }
  // }
  //envoyer le fivhier au serveur
  // uploadFile(){
  //   if (this.selectedFile != null){
  //     this.enf_service.uploadFile(this.selectedFile).subscribe(
  //       response => {
  //         console.log(response);
  //       },
  //     error => {
  //       console.log(error);
  //     }
  //     )
  //   }
  // }


  /////////////////////
  // dateOfBirth=this.currentemploye.date_nais;
  // console.log(dateOfBirth);
  // public ageFromDateOfBirthday(dateOfBirth: any): number {
  //   const today = new Date();
  //   console.log(dateOfBirth);
  //   const birthDate = new Date(dateOfBirth);
  //   let age = today.getFullYear() - birthDate.getFullYear();
  //   const m = today.getMonth() - birthDate.getMonth();
  //   console.log(today.getFullYear());
  //   console.log( today.getMonth());
  //   console.log(birthDate.getFullYear());

  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age--;
  //   }

  //   return age;

  // }


  /////////////////////Upload fichier
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      console.log(file);
      if (file.size == HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        console.log(this.uploadProgress);
      }

    }
  }

  //////////editPhoto employé
  editphoto(event: any) {
    this.selectEditphoto = event.target.files[0];

    let readers = new FileReader();
    readers.readAsDataURL(event.target.files[0]);
    readers.onload = (evente2) => {
      this.imgURL3 = readers.result;
      // this.currentemploye.photo=null

    };


  }
  //////////editfichier employé
  editfchierJustificatif(event: any) {
    console.log(this.fichierURL)
    console.log(this.currentemploye.justificatif)
    this.selectEditJustif = event.target.files[0];
    console.log(this.selectEditJustif);
    let readers = new FileReader();
    readers.readAsDataURL(event.target.files[0]);
    readers.onload = (evente2) => {
      this.fichierURL = readers.result;
      // this.currentemploye.photo=null
      console.log(this.currentemploye.justificatif)


    };


  }

  //edit photo conjoint
  editphotoEnfant(event: any) {
    this.selectEditphotoenfant = event.target.files[0];

    let readers = new FileReader();
    readers.readAsDataURL(event.target.files[0]);
    readers.onload = (evente2) => {
      this.imgURL5 = readers.result;
      // this.currentemploye.photo=null

    };


  }
  //edit photo conjoint
  editphotoConjoint(event: any) {
    this.selectEditphotoconjoint = event.target.files[0];

    let readers = new FileReader();
    readers.readAsDataURL(event.target.files[0]);
    readers.onload = (evente2) => {
      this.imgURL4 = readers.result;
      // this.currentemploye.photo=null

    };


  }
  ///Modifié l'employé
  Modifier() {
    this.currentemploye.photo = this.selectEditphoto.name
    this.emp_service.ModifierEmploye(this.currentemploye).subscribe(
        () => {
          this.emp_service.addUploadData(this.selectEditphoto).subscribe(
              (data) => {
                this.message = data;
                console.log("the message ", data)
                //return this.message
              })
          this.toastr.success("Modification Effectué avec succès")
          // this.router.navigate(['/gestion-employes/ListeEmployes']) ;
        }, (error) => {
          console.log(error);
          // alert("Probleme lors de la modification !");
          this.toastr.error("Erreur lors de la modification de l'image")
        }

    );


  }
  ///Modifié fichier employé
  ModifierfichierEmploye() {
    this.currentemployefichier.justificatif = this.selectEditJustif.name
    console.log(this.currentemployefichier.justificatif)
    this.emp_service.ModifierfichierEmploye(this.currentemployefichier).subscribe(
        () => {
          this.emp_service.addUploadJustif(this.selectEditJustif).subscribe(
              (data) => {
                this.message = data;
                console.log("the message ", data)
                //return this.message
                this.selectEditJustif=null
                this.fichierURL=null
              })
          this.toastr.success("Modification Effectué avec succès")

          // this.router.navigate(['/gestion-employes/ListeEmployes']) ;

        }, (error) => {
          console.log(error);
          // alert("Probleme lors de la modification !");
          this.toastr.error("Erreur lors de la modification du fichier")
        }

    );
    this.FormControlEmpployes.reset();
  }
  listFacture(){
    this.emp_service.ListFactureByEmploye(this.iden).subscribe(
        (data) => {
          this.listFactures = data;
          console.log(this.listFactures)
          this.montant=this.listFactures.reduce((sum,current)=>sum+current.montant_facture,0)
          this.partIpm=this.listFactures.reduce((sum,current)=>sum+current.part_patient,0)
          this.partPatient=this.listFactures.reduce((sum,current)=>sum+current.part_ipm,0)
          //return this.message
        })

  }

  //Consulter Bon de l'employé
  consulter(){
    this.bonService.getEmpBonById(this.idempBon).subscribe(
        result =>{
          this.currentBon=result;
          this.nombre=this.currentBon.length
          console.log(this.currentBon);
          if(this.currentBon.length==0 && this.nombre==0){
            this.desactive=true
          }
        }
    )
  }

}