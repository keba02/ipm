import { Component, OnInit } from '@angular/core';
import {EmployeService} from "../../Services/employe.service";
import {StatutEmployeService} from "../../Services/statut-employe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {DateAdapter} from "@angular/material/core";
import {DatePipe} from "@angular/common";
import {Categorie} from "../../Models/Categorie";
import {Service} from "../../Models/Service";
import {Entity} from "../../Models/Entity";
import {IPM_StatutEmploye} from "../../Models/IPM_StatutEmploye";
import {Employe} from "../../Models/Employe";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {Observable} from "rxjs";
import {TableData} from "../../md/md-table/md-table.component";
declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}
declare const $: any;

@Component({
  selector: 'app-liste-employer-by-id',
  templateUrl: './liste-employer-by-id.component.html',
  styleUrls: ['./liste-employer-by-id.component.css']
})
export class ListeEmployerByIdComponent implements OnInit {
  public showOverlay = true;
  listService:Service[];
  public tableData: TableData;
  public dataTable: DataTable;
  //currentemploye: Employe= new Employe(0,"","","","",null,"","","","","","","","","","");
  selectFormControl = new FormControl('', Validators.required);
  employes:Employe[];
  nom: string;
  prenom: string;
  private selectedFile: any;
  imgURL: any;
  employe: Employe = new Employe();
  message: any;
  service: any[];
  categorie: Categorie[];
  statutEmploye:IPM_StatutEmploye[];
  entity: Entity[];
  enti: number;
  servi: number;
  cate: number;
  userFile;
  nomEntity: any;
  dateRecrute:string;
  addEntity: Entity;
  addService: Service;
  addCategorie: Categorie;
  addStatut:IPM_StatutEmploye;
  tempservice: any[];
  ipm_active: boolean;
  currentemploye: Employe = new Employe();
  statuEmp:IPM_StatutEmploye =new IPM_StatutEmploye();
  ages: number;
  date: Date;
  date1: Date;
  motifStatu;
  condStatut:boolean;
  situation_familial=[{id:1,value:"Celibataire"},
    {id:2,value:"Marier"},
    {id:3,value:"Divorce"},
    {id:4,value:"Veuf"}
  ];
  sexe=[{id:1,value:"Masculin"},
    {id:2,value:"Féminin"}
  ]
  codeStat: number;
  desactive:boolean=false
  desac:boolean=false;
  selectJustif: any;
  JustifURL: string | ArrayBuffer;
  min: number;
  datefi;
  datede;
  motifStatut:string;
  statuttt:boolean;

  lisEmployes!: Observable<Array<Employe>>;
  private errorMessage: any;
  matricule:any;
  private employeRech: Employe;
  private idemp: any;
  constructor(
      private emp_service: EmployeService,private emp_statut:StatutEmployeService,
      private router: Router, private fb: FormBuilder,private toastr: ToastrService,
      private route: ActivatedRoute,
      private dateAdapter: DateAdapter<Date>, private datepipe: DatePipe,) {
    this.addCategorie= new Categorie();
    this.addService = new Service();
    this.addEntity = new Entity();
    this.addStatut=new IPM_StatutEmploye();
    this.dateAdapter.setLocale('en-GB')
    }

  ngOnInit(): void {
    this.statuttt=false
    ////////////////
    this.min = new Date().getFullYear()-18

    console.log(new Date().getFullYear()-18)
    this.getCategorie();
    this.getService();
    this.getEntity();
    this.getStatutEmploye();

    ///////////////////
    this.dataTable = {
      headerRow: ['Numero Carnet', 'Nom', 'Prenom', 'Sexe', 'Matricule', 'Reference', 'Service', 'Categorie', 'Actions'],
      footerRow: ['Name', 'Position', 'Office', 'Age', 'Start Date', 'Actions'],

      dataRows: []
    };
    /////////////////////////
   this.idemp=this.route.snapshot.params['id'];

    this.emp_service.getEmployeByIdSanstof(this.idemp).subscribe(
        result => {
          this.currentemploye = result;
          console.log(this.currentemploye)
        }

    );



    console.log(this.lisEmployes)
    this.emp_service.listeEmploye().subscribe(

        emps => {
          // $(function () {
          //   (<any>$('#datatable')).DataTable({
          //     "pagingType": "full_numbers",
          //     "lengthMenu": [
          //       [10, 25, 50, -1],
          //       [10, 25, 50, "All"]
          //     ],
          //     responsive: true,
          //     retrieve:true,
          //     language: {
          //       search: "_INPUT_",
          //       searchPlaceholder: "Recherche",
          //       info: " _START_/_END_ sur _TOTAL_ demandes",
          //       paginate: {
          //         "first": "Début",
          //         "previous": "Précédent",
          //         "next": "Suivant",
          //         "last": "Fin"
          //       },
          //       lengthMenu: "Afficher par _MENU_",
          //       infoFiltered: ""
          //     },
          //
          //
          //   });
          //
          // })


          console.log(emps);
          this.employes = emps;
          this.employes.forEach(ele => {
            this.condStatut=ele.statut


            if (ele.date_nais) {
              //convert date again to type Date
              const bdate = new Date(ele.date_nais);

              const timeDiff = Math.abs(Date.now() - bdate.getTime());
              // console.log(timeDiff);
              this.ages = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
              // console.log(this.ages)
            }
            if (this.ages > 60 || ele.ipmStatutEmploye?.emplStatut=="inactif") {
              console.log("Age atteinte impossible de ce beneficier à l'ipm :", this.ages)
              ele.statut = false
              //console.log(ele);
              console.log(ele.ipmStatutEmploye?.emplStatut)
              this.emp_service.ModifierEmploye(ele).subscribe(data=>{})
              console.log("age depasse")
            }
            else if (this.ages < 60) {
              //console.log("Voici l'age :", this.ages)
              ele.statut = true
              //console.log(ele);
              // console.log("age non depasse")

            }

            // const ttoday=new Date();
            // const birthDate = new Date(ele.date_nais);
            // console.log(ele.date_nais);
            // let age = ttoday.getFullYear() - birthDate.getFullYear();
            // const m = ttoday.getMonth() - birthDate.getMonth();

            // if (m < 0 || (m === 0 && ttoday.getDate() < birthDate.getDate())) {
            //   var p=age--;

            // }
            // console.log(+p);
            // if(+p>57){
            //   console.log("Voici l'age :"+p)
            //   ele.active==false
            //   console.log(ele.active==false);
            // console.log("age depasse")
            // }
            // else if(+p<=57){
            //   console.log("Voici l'age :"+p)
            //   ele.active==true
            //   console.log("age non depasse")

            // }
          });



          //console.log(this.employes)
        }
    );
    this.getFiles(this.employes);
  }


getStatutEmploye(){
  this.emp_statut.getStatutEmploye().subscribe(
      data => {
        // console.log(cat);
        this.statutEmploye = data;
        //console.log(this.statutEmploye,data)
      }
  )
}
getStatut(stu){
  console.log(this.datede)
  //this.motifStatut=stu.libelleStatut
  if (stu.idStatut==2) {
    this.emp_service.statutInactif(stu.idStatut).subscribe(

        data => {this.motifStatu=data
          console.log(this.motifStatu);})


  }
}

getEmployeById(employe) {
  this.emp_service.getEmployeByIdSanstof(employe.idemp).subscribe(
      result => {
        this.currentemploye = result;
      }
  );

}
getFiles(employe) {
  this.emp_service.getFiles(employe.idemp).subscribe(
      result => {
        this.currentemploye = result;
      }
  );
}
supprimerEmploye(emp: Employe) {
  let conf = confirm("Etes-vous sur ?");
  if (conf)
    this.emp_service.deleteEmployeById(emp.idemp).subscribe(
        () => {
          console.log("employe supprimer");
          //pour ne pas faire de reload
          //this.supprimerEmployeDuTableau(emp);
          this.router.navigate(['/gestion-employes/ListeEmployes']).then(
              () => {
                window.location.reload();
              }
          );
        }
    );
}

/* public EmployeNow(){
   const uploadData = new FormData();
   this.addService.idService=this.servi;
   this.employe.ipm_service=JSON.parse(JSON.stringify(this.addService));

   this.addEntity.idEntity=this.enti;
   this.employe.ipm_entity=JSON.parse(JSON.stringify(this.addEntity));

   this.addCategorie.code_categorie=this.cate;
   this.employe.ipm_categorie=JSON.parse(JSON.stringify(this.addCategorie));
   console.log(this.employe);
   this.selectedFile.photo = this.selectedFile.name;
   uploadData.append('image', this.selectedFile, this.selectedFile.name);
   this.http.post('http://localhost:8082/ipm/uploads', uploadData, { observe: 'response' })
     .subscribe((response) => {
         if (response.status === 200) {
           this.emp_service.AjoutEmploye(this.employe).subscribe(
             (data)=>this.message=data);
        this.router.navigate(['/liste-employes']);

           console.log('Image uploaded successfully');
         } else {
           console.log('Image not uploaded successfully');
         }
       }
     );


  this.router.navigate(['/gestion-employes/ListeEmployes']);
}*/
public EmployeNow() {




  this.addService.idService = this.servi;
  this.employe.ipmService= JSON.parse(JSON.stringify(this.addService));
  this.addStatut.idStatut=1
  this.employe.ipmStatutEmploye=JSON.parse(JSON.stringify(this.addStatut))
  this.addEntity.idEntity = this.enti;
  this.employe.ipmEntity= JSON.parse(JSON.stringify(this.addEntity));

  this.addCategorie.code_categorie = this.cate;
  this.employe.ipm_categorie = JSON.parse(JSON.stringify(this.addCategorie));
  this.employe.nom=this.FormControlEmpployes.get("nom").value;
  this.employe.prenom=this.FormControlEmpployes.get("prenom").value;
  this.employe.matricule=this.FormControlEmpployes.get("matricule").value;
  this.employe.reference=this.FormControlEmpployes.get("reference").value;
  this.employe.sexe=this.FormControlEmpployes.get("sexe").value;
  this.employe.situation_familial=this.FormControlEmpployes.get("situation_familial").value;
  this.employe.lieu_nais=this.FormControlEmpployes.get("lieu_nais").value;
  this.employe.adresse_domicile=this.FormControlEmpployes.get("adresse_domicile").value;
  this.employe.telephone=this.FormControlEmpployes.get("telephone").value;
  this.employe.date_nais =this.FormControlEmpployes.get("date_nais").value;
  //this.employe.ipmStatutEmploye=this.statutEmploye[0];
  console.log(this.employe.date_nais);
  this.employe.date_recrutement = this.FormControlEmpployes.get("date_recrutement").value;
  console.log(this.employe.date_recrutement);
  console.log(this.employe);
  if (this.selectedFile) {
    this.employe.photo = this.selectedFile.name;
  }
  if (this.selectJustif) {
    this.employe.justificatif=this.selectJustif.name;
  }


  if (this.employe.nom && this.employe.prenom
      // && this.employe.lieu_nais && this.employe.date_recrutement && this.employe.adresse_domicile
      // && this.employe.situation_familial && this.employe.ipmEntity &&  this.employe.ipm_categorie && this.employe.sexe
      // && this.employe.ipmService && this.employe.reference  &&  this.employe.photo
  ) {


    this.emp_service.AjoutEmploye(this.employe).subscribe(
        (data) => {
          this.message = data;
          this.ngOnInit();
          // console.log("the message ", data)
          // console.log(this.employe.date_nais);


          // return this.message
          if (this.selectedFile) {


            this.emp_service.addUploadData(this.selectedFile).subscribe(
                (data) => {
                  this.message = data;
                  console.log("the message ", data)
                  //return this.message
                });   }
          if (this.selectJustif) {


            this.emp_service.addUploadJustif(this.selectJustif).subscribe(
                (data) => {
                  this.message = data;
                  console.log("the message ", data)
                  //return this.message
                  this.showNotification('top', 'center', 1, '<b>employé ajouté avec succées!!!</b> :')

                });}
        }
        ,error=>{
          //console.log(error);
          this.desac=true
          // this.showNotification('top', 'center',3, '<b>Matricule existe deja!!!</b> :');
        }
    )
    // if (!this.message) {
    //   this.showNotification('top', 'center', 1, '<b>employé ajouté avec succées!!!</b> :')
    //   // console.log(this.message);
    //   this.router.navigate(['/gestion-employes/ListeEmployes']);
    // }
    // else if (this.message == null) {
    //   console.log("not existe");
    //   this.showNotification('top', 'center', 3, "<b>employé non ajouté</b> :")
    // }


  }

  else{
    console.log("************IPML*********************");
    this.desactive=true;
    // this.showNotification('top', 'right', 3, "<b>Veuiller remplir les Champs</b> :")
  }





  // this.showNotification('top', 'center', 3, "<b>Remplir les champs</b> :")


}

onReset(){
  this.FormControlEmpployes.reset();
}

public getService() {
  this.emp_service.getService().subscribe(
      serv => {
        // console.log(serv);
        this.service = serv;
        this.tempservice = serv

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

public getEntity() {
  this.emp_service.getEntity().subscribe(
      ent => {
        // console.log(cat);
        this.entity = ent;
        // console.log(this.categorie)
      }
  )
}

public selectService() {
  this.service = this.tempservice
  this.service = this.service.filter(serv => serv.ipmEntity.idEntity == this.enti)

  //console.log(this.enti)
  console.log(this.service)
}
/////choisir et recuperer l'image sur l'ordinateur
public onFileChanged(event) {
  console.log(event);
  this.selectedFile = event.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event2) => {
    this.imgURL = reader.result;
  };

}
upload() {
  var imgData = '/assets/img_poste/laposte.png'
  let doc = new jsPDF();
  let col = [["Numero Carnet", "nom", "prenom", "sexe", "matricule", "reference", "Service", "Categorie",]]
  let rows = []
  for (let employe of this.employes) {
    let tmp = [employe.idemp, employe.nom, employe.prenom, employe.sexe, employe.matricule, employe.reference, employe.ipmService?.type_service, employe.ipm_categorie?.libelle]
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

// Only AlphaNumeric with Some Characters [-_ ]
keyPressAlphaNumericWithCharacters(event) {

  var inp = String.fromCharCode(event.keyCode);
  // Allow numbers, alpahbets, space, underscore
  if (/[A-Z0-9]/.test(inp)) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}

/////////////////
FormControlEmpployes = this.fb.group({
  nom: [null, Validators.required],
  prenom: [null, Validators.required],
  sexe: [null, Validators.required],
  adresse_domicile: [null, Validators.required],
  situation_familial: [null, Validators.required],
  date_nais: [null, Validators.required],
  lieu_nais: [null, Validators.required],
  telephone: [null, Validators.required],
  date_recrutement: [null, Validators.required],
  reference: [null, Validators.required],
  ipm_categorie: [null, Validators.required],
  ipmService: [null, Validators.required],
  ipmEntity: [null, Validators.required],
  matricule: [null, Validators.compose([
        Validators.required, Validators.minLength(7), Validators.maxLength(8)
      ] ,
  )]
});



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
getServiceEmploye(list){
  this.nomEntity=list.nom_entity
  this.emp_service.getlistService(list.idEntity).subscribe((data)=>{
    this.listService=data
    console.log(this.listService)
  })
}
getEmploye(employe){
  // this.router.navigate(['/gestion-employes/employer-par-service/'+listserv.idService]);
  // console.log(listserv)
  this.emp_service.getEmployeByIdSanstof(employe.idemp).subscribe(
      res=>{
        this.employe=res;
        console.log(this.employe);
        //this.getStatutEmploye();
      }
  )
}

/////Update Statut employe
public updateStatut(){
  console.log(this.datede,this.datefi,this.motifStatut)
  this.addStatut.idStatut=this.codeStat;

  this.employe.ipmStatutEmploye=JSON.parse(JSON.stringify(this.addStatut));
  if (this.addStatut.idStatut==2 ) {
    this.employe.statut=false

  }else this.employe.statut=true
  if (this.datede) {
    this.employe.date_debut_suspension=this.datede
    //this.datepipe.transform(this.datede, 'dd-MM-yyyy');

  }
  if (this.datefi) {

    //this.datepipe.transform(this.dateFacture, 'dd-MM-yyyy');
    this.employe.date_fin_suspension=this.datefi
    //this.datepipe.transform(this.datefi, 'dd-MM-yyyy');

  }
  this.employe.motifStatut=this.motifStatut

  console.log(this.employe)
  this.emp_service.ModifierEmployeSansphoto(this.employe).subscribe(
      (res)=>{
        console.log(this.employe)
        this.ngOnInit();
        this.message=res;
        this.toastr.success("Mise à jour avec Succès avec comme statut");
      })
}
////////////////////////Justificatif
selectJustificatif(event:any){
  this.selectJustif = event.target.files[0];

  let readerr = new FileReader();
  readerr.readAsDataURL(event.target.files[0]);
  readerr.onload = (event) => {
    this.JustifURL = readerr.result;
  };

}


  retourner() {
    this.router.navigate(['/gestion-employes/ListeEmployes']) ;

  }
}
