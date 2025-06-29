(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gestion-employes-gestion-employes-module"],{

/***/ "+xVC":
/*!**********************************************************************************!*\
  !*** ./src/app/gestion-employes/ajouter-employes/ajouter-employes.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\n    margin: 40px 0;\n    width: 500px !important;\n}\n\n.mat-toolbar-single-row {\n    height: auto !important;\n    background: transparent;\n}\n\n.mat-toolbar-single-row button {\n    width: 200px;\n}\n\n.mat-form-field {\n    width: 100%;\n}\n\n#uploadFile {\n    top: 0px;\n    left: 0px;\n    width: 100%;    \n    z-index: 9;\n    opacity: 0;\n    height: 100%;\n    cursor: pointer;\n    position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VzdGlvbi1lbXBsb3llcy9ham91dGVyLWVtcGxveWVzL2Fqb3V0ZXItZW1wbG95ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9nZXN0aW9uLWVtcGxveWVzL2Fqb3V0ZXItZW1wbG95ZXMvYWpvdXRlci1lbXBsb3llcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IDQwcHggMDtcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyBidXR0b24ge1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3VwbG9hZEZpbGUge1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTsgICAgXG4gICAgei1pbmRleDogOTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */");

/***/ }),

/***/ "026S":
/*!*****************************************************************************************!*\
  !*** ./src/app/gestion-employes/liste-employer-by-id/liste-employer-by-id.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListeEmployerByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeEmployerByIdComponent", function() { return ListeEmployerByIdComponent; });
/* harmony import */ var _raw_loader_liste_employer_by_id_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./liste-employer-by-id.component.html */ "215c");
/* harmony import */ var _liste_employer_by_id_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liste-employer-by-id.component.css */ "A0PO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_employe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/employe.service */ "WxxJ");
/* harmony import */ var _Services_statut_employe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/statut-employe.service */ "bitI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Models_Categorie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Models/Categorie */ "lcUs");
/* harmony import */ var _Models_Service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Models/Service */ "hHo9");
/* harmony import */ var _Models_Entity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Models/Entity */ "b8v4");
/* harmony import */ var _Models_IPM_StatutEmploye__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Models/IPM_StatutEmploye */ "tbBT");
/* harmony import */ var _Models_Employe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Models/Employe */ "5GYJ");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ListeEmployerByIdComponent = /** @class */ (function () {
    function ListeEmployerByIdComponent(emp_service, emp_statut, router, fb, toastr, route, dateAdapter, datepipe) {
        this.emp_service = emp_service;
        this.emp_statut = emp_statut;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.route = route;
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.showOverlay = true;
        //currentemploye: Employe= new Employe(0,"","","","",null,"","","","","","","","","","");
        this.selectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required);
        this.employe = new _Models_Employe__WEBPACK_IMPORTED_MODULE_14__["Employe"]();
        this.currentemploye = new _Models_Employe__WEBPACK_IMPORTED_MODULE_14__["Employe"]();
        this.statuEmp = new _Models_IPM_StatutEmploye__WEBPACK_IMPORTED_MODULE_13__["IPM_StatutEmploye"]();
        this.situation_familial = [{ id: 1, value: "Celibataire" },
            { id: 2, value: "Marier" },
            { id: 3, value: "Divorce" },
            { id: 4, value: "Veuf" }
        ];
        this.sexe = [{ id: 1, value: "Masculin" },
            { id: 2, value: "Féminin" }
        ];
        this.desactive = false;
        this.desac = false;
        /////////////////
        this.FormControlEmpployes = this.fb.group({
            nom: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            prenom: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            sexe: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            adresse_domicile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            situation_familial: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            date_nais: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            lieu_nais: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            telephone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            date_recrutement: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            reference: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ipm_categorie: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ipmService: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ipmEntity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            matricule: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(8)
                ])]
        });
        this.addCategorie = new _Models_Categorie__WEBPACK_IMPORTED_MODULE_10__["Categorie"]();
        this.addService = new _Models_Service__WEBPACK_IMPORTED_MODULE_11__["Service"]();
        this.addEntity = new _Models_Entity__WEBPACK_IMPORTED_MODULE_12__["Entity"]();
        this.addStatut = new _Models_IPM_StatutEmploye__WEBPACK_IMPORTED_MODULE_13__["IPM_StatutEmploye"]();
        this.dateAdapter.setLocale('en-GB');
    }
    ListeEmployerByIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statuttt = false;
        ////////////////
        this.min = new Date().getFullYear() - 18;
        console.log(new Date().getFullYear() - 18);
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
        this.idemp = this.route.snapshot.params['id'];
        this.emp_service.getEmployeByIdSanstof(this.idemp).subscribe(function (result) {
            _this.currentemploye = result;
            console.log(_this.currentemploye);
        });
        console.log(this.lisEmployes);
        this.emp_service.listeEmploye().subscribe(function (emps) {
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
            _this.employes = emps;
            _this.employes.forEach(function (ele) {
                var _a, _b;
                _this.condStatut = ele.statut;
                if (ele.date_nais) {
                    //convert date again to type Date
                    var bdate = new Date(ele.date_nais);
                    var timeDiff = Math.abs(Date.now() - bdate.getTime());
                    // console.log(timeDiff);
                    _this.ages = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                    // console.log(this.ages)
                }
                if (_this.ages > 60 || ((_a = ele.ipmStatutEmploye) === null || _a === void 0 ? void 0 : _a.emplStatut) == "inactif") {
                    console.log("Age atteinte impossible de ce beneficier à l'ipm :", _this.ages);
                    ele.statut = false;
                    //console.log(ele);
                    console.log((_b = ele.ipmStatutEmploye) === null || _b === void 0 ? void 0 : _b.emplStatut);
                    _this.emp_service.ModifierEmploye(ele).subscribe(function (data) { });
                    console.log("age depasse");
                }
                else if (_this.ages < 60) {
                    //console.log("Voici l'age :", this.ages)
                    ele.statut = true;
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
        });
        this.getFiles(this.employes);
    };
    ListeEmployerByIdComponent.prototype.getStatutEmploye = function () {
        var _this = this;
        this.emp_statut.getStatutEmploye().subscribe(function (data) {
            // console.log(cat);
            _this.statutEmploye = data;
            //console.log(this.statutEmploye,data)
        });
    };
    ListeEmployerByIdComponent.prototype.getStatut = function (stu) {
        var _this = this;
        console.log(this.datede);
        //this.motifStatut=stu.libelleStatut
        if (stu.idStatut == 2) {
            this.emp_service.statutInactif(stu.idStatut).subscribe(function (data) {
                _this.motifStatu = data;
                console.log(_this.motifStatu);
            });
        }
    };
    ListeEmployerByIdComponent.prototype.getEmployeById = function (employe) {
        var _this = this;
        this.emp_service.getEmployeByIdSanstof(employe.idemp).subscribe(function (result) {
            _this.currentemploye = result;
        });
    };
    ListeEmployerByIdComponent.prototype.getFiles = function (employe) {
        var _this = this;
        this.emp_service.getFiles(employe.idemp).subscribe(function (result) {
            _this.currentemploye = result;
        });
    };
    ListeEmployerByIdComponent.prototype.supprimerEmploye = function (emp) {
        var _this = this;
        var conf = confirm("Etes-vous sur ?");
        if (conf)
            this.emp_service.deleteEmployeById(emp.idemp).subscribe(function () {
                console.log("employe supprimer");
                //pour ne pas faire de reload
                //this.supprimerEmployeDuTableau(emp);
                _this.router.navigate(['/gestion-employes/ListeEmployes']).then(function () {
                    window.location.reload();
                });
            });
    };
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
    ListeEmployerByIdComponent.prototype.EmployeNow = function () {
        var _this = this;
        this.addService.idService = this.servi;
        this.employe.ipmService = JSON.parse(JSON.stringify(this.addService));
        this.addStatut.idStatut = 1;
        this.employe.ipmStatutEmploye = JSON.parse(JSON.stringify(this.addStatut));
        this.addEntity.idEntity = this.enti;
        this.employe.ipmEntity = JSON.parse(JSON.stringify(this.addEntity));
        this.addCategorie.code_categorie = this.cate;
        this.employe.ipm_categorie = JSON.parse(JSON.stringify(this.addCategorie));
        this.employe.nom = this.FormControlEmpployes.get("nom").value;
        this.employe.prenom = this.FormControlEmpployes.get("prenom").value;
        this.employe.matricule = this.FormControlEmpployes.get("matricule").value;
        this.employe.reference = this.FormControlEmpployes.get("reference").value;
        this.employe.sexe = this.FormControlEmpployes.get("sexe").value;
        this.employe.situation_familial = this.FormControlEmpployes.get("situation_familial").value;
        this.employe.lieu_nais = this.FormControlEmpployes.get("lieu_nais").value;
        this.employe.adresse_domicile = this.FormControlEmpployes.get("adresse_domicile").value;
        this.employe.telephone = this.FormControlEmpployes.get("telephone").value;
        this.employe.date_nais = this.FormControlEmpployes.get("date_nais").value;
        //this.employe.ipmStatutEmploye=this.statutEmploye[0];
        console.log(this.employe.date_nais);
        this.employe.date_recrutement = this.FormControlEmpployes.get("date_recrutement").value;
        console.log(this.employe.date_recrutement);
        console.log(this.employe);
        if (this.selectedFile) {
            this.employe.photo = this.selectedFile.name;
        }
        if (this.selectJustif) {
            this.employe.justificatif = this.selectJustif.name;
        }
        if (this.employe.nom && this.employe.prenom
        // && this.employe.lieu_nais && this.employe.date_recrutement && this.employe.adresse_domicile
        // && this.employe.situation_familial && this.employe.ipmEntity &&  this.employe.ipm_categorie && this.employe.sexe
        // && this.employe.ipmService && this.employe.reference  &&  this.employe.photo
        ) {
            this.emp_service.AjoutEmploye(this.employe).subscribe(function (data) {
                _this.message = data;
                _this.ngOnInit();
                // console.log("the message ", data)
                // console.log(this.employe.date_nais);
                // return this.message
                if (_this.selectedFile) {
                    _this.emp_service.addUploadData(_this.selectedFile).subscribe(function (data) {
                        _this.message = data;
                        console.log("the message ", data);
                        //return this.message
                    });
                }
                if (_this.selectJustif) {
                    _this.emp_service.addUploadJustif(_this.selectJustif).subscribe(function (data) {
                        _this.message = data;
                        console.log("the message ", data);
                        //return this.message
                        _this.showNotification('top', 'center', 1, '<b>employé ajouté avec succées!!!</b> :');
                    });
                }
            }, function (error) {
                //console.log(error);
                _this.desac = true;
                // this.showNotification('top', 'center',3, '<b>Matricule existe deja!!!</b> :');
            });
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
        else {
            console.log("************IPML*********************");
            this.desactive = true;
            // this.showNotification('top', 'right', 3, "<b>Veuiller remplir les Champs</b> :")
        }
        // this.showNotification('top', 'center', 3, "<b>Remplir les champs</b> :")
    };
    ListeEmployerByIdComponent.prototype.onReset = function () {
        this.FormControlEmpployes.reset();
    };
    ListeEmployerByIdComponent.prototype.getService = function () {
        var _this = this;
        this.emp_service.getService().subscribe(function (serv) {
            // console.log(serv);
            _this.service = serv;
            _this.tempservice = serv;
            // console.log(this.service)
        });
    };
    ListeEmployerByIdComponent.prototype.getCategorie = function () {
        var _this = this;
        this.emp_service.getCategorie().subscribe(function (cat) {
            // console.log(cat);
            _this.categorie = cat;
            // console.log(this.categorie)
        });
    };
    ListeEmployerByIdComponent.prototype.getEntity = function () {
        var _this = this;
        this.emp_service.getEntity().subscribe(function (ent) {
            // console.log(cat);
            _this.entity = ent;
            // console.log(this.categorie)
        });
    };
    ListeEmployerByIdComponent.prototype.selectService = function () {
        var _this = this;
        this.service = this.tempservice;
        this.service = this.service.filter(function (serv) { return serv.ipmEntity.idEntity == _this.enti; });
        //console.log(this.enti)
        console.log(this.service);
    };
    /////choisir et recuperer l'image sur l'ordinateur
    ListeEmployerByIdComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        console.log(event);
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (event2) {
            _this.imgURL = reader.result;
        };
    };
    ListeEmployerByIdComponent.prototype.upload = function () {
        var _a, _b;
        var imgData = '/assets/img_poste/laposte.png';
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_15__["default"]();
        var col = [["Numero Carnet", "nom", "prenom", "sexe", "matricule", "reference", "Service", "Categorie",]];
        var rows = [];
        for (var _i = 0, _c = this.employes; _i < _c.length; _i++) {
            var employe = _c[_i];
            var tmp = [employe.idemp, employe.nom, employe.prenom, employe.sexe, employe.matricule, employe.reference, (_a = employe.ipmService) === null || _a === void 0 ? void 0 : _a.type_service, (_b = employe.ipm_categorie) === null || _b === void 0 ? void 0 : _b.libelle];
            rows.push(tmp);
        }
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_16___default()(doc, {
            startY: 75,
            head: col,
            body: rows,
        });
        doc.addImage(imgData, 'JPEG', 15, 5, 25, 25);
        doc.setFontSize(20);
        doc.text("Liste Des Employes", 75, 50);
        var date = new Date();
        doc.setFontSize(10);
        doc.text("Dakar,le:", 166, 5);
        doc.text(date.toLocaleDateString("fr-FR"), 185, 5);
        doc.save("employe.pdf");
    };
    // Only AlphaNumeric with Some Characters [-_ ]
    ListeEmployerByIdComponent.prototype.keyPressAlphaNumericWithCharacters = function (event) {
        var inp = String.fromCharCode(event.keyCode);
        // Allow numbers, alpahbets, space, underscore
        if (/[A-Z0-9]/.test(inp)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    };
    ////////////Function Notification
    ListeEmployerByIdComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
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
    };
    ListeEmployerByIdComponent.prototype.getServiceEmploye = function (list) {
        var _this = this;
        this.nomEntity = list.nom_entity;
        this.emp_service.getlistService(list.idEntity).subscribe(function (data) {
            _this.listService = data;
            console.log(_this.listService);
        });
    };
    ListeEmployerByIdComponent.prototype.getEmploye = function (employe) {
        var _this = this;
        // this.router.navigate(['/gestion-employes/employer-par-service/'+listserv.idService]);
        // console.log(listserv)
        this.emp_service.getEmployeByIdSanstof(employe.idemp).subscribe(function (res) {
            _this.employe = res;
            console.log(_this.employe);
            //this.getStatutEmploye();
        });
    };
    /////Update Statut employe
    ListeEmployerByIdComponent.prototype.updateStatut = function () {
        var _this = this;
        console.log(this.datede, this.datefi, this.motifStatut);
        this.addStatut.idStatut = this.codeStat;
        this.employe.ipmStatutEmploye = JSON.parse(JSON.stringify(this.addStatut));
        if (this.addStatut.idStatut == 2) {
            this.employe.statut = false;
        }
        else
            this.employe.statut = true;
        if (this.datede) {
            this.employe.date_debut_suspension = this.datede;
            //this.datepipe.transform(this.datede, 'dd-MM-yyyy');
        }
        if (this.datefi) {
            //this.datepipe.transform(this.dateFacture, 'dd-MM-yyyy');
            this.employe.date_fin_suspension = this.datefi;
            //this.datepipe.transform(this.datefi, 'dd-MM-yyyy');
        }
        this.employe.motifStatut = this.motifStatut;
        console.log(this.employe);
        this.emp_service.ModifierEmployeSansphoto(this.employe).subscribe(function (res) {
            console.log(_this.employe);
            _this.ngOnInit();
            _this.message = res;
            _this.toastr.success("Mise à jour avec Succès avec comme statut");
        });
    };
    ////////////////////////Justificatif
    ListeEmployerByIdComponent.prototype.selectJustificatif = function (event) {
        var _this = this;
        this.selectJustif = event.target.files[0];
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.JustifURL = readerr.result;
        };
    };
    ListeEmployerByIdComponent.prototype.retourner = function () {
        this.router.navigate(['/gestion-employes/ListeEmployes']);
    };
    ListeEmployerByIdComponent.ctorParameters = function () { return [
        { type: _Services_employe_service__WEBPACK_IMPORTED_MODULE_3__["EmployeService"] },
        { type: _Services_statut_employe_service__WEBPACK_IMPORTED_MODULE_4__["StatutEmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }
    ]; };
    ListeEmployerByIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-liste-employer-by-id',
            template: _raw_loader_liste_employer_by_id_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_liste_employer_by_id_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_Services_employe_service__WEBPACK_IMPORTED_MODULE_3__["EmployeService"], _Services_statut_employe_service__WEBPACK_IMPORTED_MODULE_4__["StatutEmployeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]])
    ], ListeEmployerByIdComponent);
    return ListeEmployerByIdComponent;
}());



/***/ }),

/***/ "215c":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-employes/liste-employer-by-id/liste-employer-by-id.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" >\n    <div class=\"card\">\n\n        <!--          <div class=\"card-header card-header-icon\" >-->\n        <!--            <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">-->\n        <!--              <i class=\"material-icons\">list</i>-->\n        <!--            </div>-->\n        <h2 class=\"text-center\" style=\"background-color:rgba(17, 17, 227, 0.88);\n             color: white; padding: 2px; width: 40%;\">Carnet Participants </h2>\n\n\n        <div class=\"card-body table-full-width\">\n\n            <div class=\"material-datatable\">\n                <div class=\"text-center\">\n                    <mat-spinner *ngIf=\"!currentemploye\" style=\"margin-left: 15cm;\"></mat-spinner>\n\n                </div>\n\n                <table id=\"datatable\" class=\"table table-bordered table-striped\" width=\"100%\" style=\"width:100%\"\n                       class=\"table table-hover\">\n\n                    <thead class=\"text-black\">\n\n                    <tr>\n\n                        <th cope=\"col\"><b> Numero Carnet</b></th>\n                        <th cope=\"col\"><b> Nom</b></th>\n                        <th cope=\"col\"><b> Prenom</b></th>\n                        <th cope=\"col\"><b> Matricule</b></th>\n                        <th cope=\"col\"><b> Reference</b></th>\n                        <th cope=\"col\"><b> Service</b></th>\n                        <th cope=\"col\"><b> Categorie</b></th>\n\n                        <th class=\"disabled-sorting text-center\">Actions</th>\n\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr style=\"font-weight: 500;\">\n                        <td class=\"text-center\">\n\n                            <span *ngIf=\"currentemploye.statut\" class=\"badge badge-success\"> {{currentemploye.numero_carnet}}</span>\n                            <span *ngIf=\"!currentemploye.statut\" class=\"badge badge-danger\">{{currentemploye.numero_carnet}}</span>\n                        </td>\n                        <td>{{currentemploye.nom}}</td>\n                        <td>{{currentemploye.prenom}}</td>\n                        <!-- <td >{{employe.sexe}}</td> -->\n                        <td>{{currentemploye.matricule}}</td>\n                        <td>{{currentemploye.reference}}</td>\n                        <td>{{currentemploye.ipmService?.type_service}}</td>\n                        <td>{{currentemploye.ipm_categorie?.libelle}}</td>\n\n                        <td class=\"td-actions\">\n\n                            <!-- <label mat-raised-button>\n                              <span style=\"margin:2px;\" *ngIf=\"employe.statut!=''\" class=\"badge badge-danger\">X<i class=\"material-icons\"></i></span>\n                              <span style=\"margin:2px;\" *ngIf=\"employe.statut==''\" class=\"btn btn-success\"><i class=\"material-icons\">check</i></span>\n                            </label>  -->\n                            <button mat-raised-button (click)=\"getEmploye(currentemploye)\" data-toggle=\"modal\"\n                                    data-target=\"#statu\" style=\"margin:2px;\" type=\"button\" class=\"btn\" style=\"background-color: rgb(101, 101, 110);\">\n                                <i class=\"fa fa-user-times\" aria-hidden=\"true\" style=\"color: rgb(251, 252, 253)\"></i>\n\n                            </button>\n                            <button mat-raised-button style=\"margin:2px;\" type=\"button\" class=\"btn btn-info\">\n                                <i class=\"material-icons\"\n                                   [routerLink]=\"['/gestion-employes/carnetEmploye/'+currentemploye.idemp]\">person</i>\n                            </button>\n\n                            <button mat-raised-button style=\"margin:2px;\"type=\"button\" class=\"btn btn-warning \">\n                                <i class=\"material-icons\"\n                                   [routerLink]=\"['/gestion-employes/ModifierEmployes/'+currentemploye.idemp]\">edit</i>\n                            </button>\n                            <!-- <button mat-raised-button type=\"button\" class=\"btn btn-danger \">\n                                                          <i class=\"fa fa-trash-o\" (click)=\"supprimerEmploye(employe)\"></i>\n                                                      </button> -->\n\n\n\n                        </td>\n\n                    </tr>\n\n                    </tbody>\n                    <!--                <button mat-raised-button (click)=\"upload()\" type=\"button\" style=\"font-size: 16px;background-color:rgba(17, 17, 227, 0.88); color: white; margin-left: 20px;\">-->\n                    <!--                  <i class=\"material-icons\">file_download</i>Telecharger-->\n                    <!--                </button>-->\n                </table>\n                <button class=\"btn btn-danger\"  style=\"margin-left:65%; float: right\" (click)=\"retourner()\"\n                ><i class=\"material-icons\">arrow_back</i>retour\n                </button>\n\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "3iAe":
/*!*****************************************************************************************!*\
  !*** ./src/app/gestion-employes/employer-par-service/employer-par-service.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EmployerParServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerParServiceComponent", function() { return EmployerParServiceComponent; });
/* harmony import */ var _raw_loader_employer_par_service_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./employer-par-service.component.html */ "oPyJ");
/* harmony import */ var _employer_par_service_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employer-par-service.component.css */ "7T9z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployerParServiceComponent = /** @class */ (function () {
    function EmployerParServiceComponent(route, emp_service) {
        this.route = route;
        this.emp_service = emp_service;
    }
    EmployerParServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.emp_service.getListEmploByservice(this.id).subscribe(function (data) {
            _this.listEmployer = data;
            console.log(_this.listEmployer);
            $('#datatable').dataTable().fnDestroy();
            $(function () {
                $('#datatable').dataTable({
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
                            "first": "Début",
                            "previous": "Précédent",
                            "next": "Suivant",
                            "last": "Fin"
                        },
                        lengthMenu: "Afficher par _MENU_",
                        infoFiltered: ""
                    },
                });
            });
            for (var index = 0; index < _this.listEmployer.length; index++) {
                _this.nomService = _this.listEmployer[index].ipmService.type_service;
                console.log(_this.nomService);
            }
        });
    };
    EmployerParServiceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_4__["EmployeService"] }
    ]; };
    EmployerParServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-employer-par-service',
            template: _raw_loader_employer_par_service_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_employer_par_service_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_4__["EmployeService"]])
    ], EmployerParServiceComponent);
    return EmployerParServiceComponent;
}());



/***/ }),

/***/ "4k1n":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-employes/modifier-employes/modifier-employes.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form class=\"form-horizontal\" style=\"width: 800px; margin: 0 auto;\">\n  <input type=\"hidden\" class=\"form-control\" >\n  <h3 class=\"text-center p-4\" style=\"background:white\">Modification de l'employe </h3>\n\n  <div class=\"form-group row card-header\">\n    \n    <div class=\"col-md-6 form-group\">\n      <mat-form-field class=\"example-full-width\">\n        <input readonly matInput type=\"text\" class=\"form-control\" id=\"idemp\" placeholder=\"IdEmp\" [(ngModel)]=\"currentemploye.idemp\" name=\"idemp\" >\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"nom\" placeholder=\"Nom\" [(ngModel)]=\"currentemploye.nom\" name=\"nom\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"prenom\" placeholder=\"Prenom\" [(ngModel)]=\"currentemploye.prenom\" name=\"prenom\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\"  style=\"margin-top:-25px;\">\n      <!-- <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"sexe\" placeholder=\"Sexe\" [(ngModel)]=\"currentemploye.sexe\" name=\"sexe\">\n      </mat-form-field> -->\n      <label>Sexe </label><br>\n            {{sexe_emploi}}\n          <mat-select formControlName=\"sexe_emploi\" class=\"form-control\" id=\"sexe_emploi\" \n          >\n            <mat-option *ngFor=\"let sexEmploi of sexe\" [value]=\"sexEmploi.value\" (click)=\"getSexe(sexEmploi)\">\n              {{ sexEmploi.value }}\n            </mat-option>\n          </mat-select>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"adresse_domicile\" placeholder=\"Adresse Domicile\" [(ngModel)]=\"currentemploye.adresse_domicile\" name=\"adresse_domicile\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <mat-form-field>\n        <input matInput  id=\"date_nais\" placeholder=\"Date Naissance\"  [(ngModel)]=\"currentemploye.date_nais\" name=\"date_nais\">\n        <!-- <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2 startView=\"year\"></mat-datepicker> -->\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"lieu_nais\" placeholder=\"Lieu de Naissance\" [(ngModel)]=\"currentemploye.lieu_nais\" name=\"lieu_nais\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"telephone\" placeholder=\"Telephone\" [(ngModel)]=\"currentemploye.telephone\" name=\"telephone\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <mat-form-field >\n        <input matInput  id=\"date_recrutement\" placeholder=\"Date Recrutement\" [(ngModel)]=\"currentemploye.date_recrutement\" name=\"date_recrutement\">\n        <!-- <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker> -->\n      </mat-form-field>\n    </div>\n    \n      <div class=\"col-md-6 form-group\"  style=\"margin-top:-20px;\">\n        \n          <label>Situation familiale </label><br>\n            {{typesituation_familial}}\n          <mat-select formControlName=\"situation_familial\" class=\"form-control\" id=\"situation\" \n          [(ngModel)]=\"currentemploye.situation_familial\">\n            <mat-option *ngFor=\"let situat of situation_familial\" [value]=\"situat.value\" (click)=\"getsituation(situat)\">\n              {{ situat.value }}\n            </mat-option>\n          </mat-select>\n        \n      \n      <!-- <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"situation_familial\" placeholder=\"Situation Matrimonial\" [(ngModel)]=\"currentemploye.situation_familial\" name=\"situation_familial\">\n      </mat-form-field> -->\n    </div>\n    <div [formGroup]=\"\" class=\"col-md-6 form-group\">\n      <label>Service </label><br>\n      {{type_service}}\n        <mat-select  name=\"service\" id=\"service\"  class=\"form-control\"  [(ngModel)]=\"type_service\">\n          <mat-option *ngFor=\"let serv of service\" [value]=\"serv.idService\" (click)=\"getserv(serv)\">\n            {{ serv.type_service }}\n          </mat-option>\n        </mat-select>\n         \n    </div>\n    <div class=\"col-md-6 form-group\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"matricule\" placeholder=\"Matricule\" [(ngModel)]=\"currentemploye.matricule\" name=\"matricule\" >\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"reference\" placeholder=\"Reference\" [(ngModel)]=\"currentemploye.reference\" name=\"reference\">\n      </mat-form-field>\n    </div>\n    <div [formGroup]=\"\" class=\"col-md-6 form-group\">\n      <mat-form-field>\n        {{this.type_categorie}}\n        <mat-select   id=\"categorie\"  [(ngModel)]=\"type_categorie\" name=\"categorie\">\n          <mat-option *ngFor=\"let cat of categorie\" [value]=\"cat.code_categorie\" (click)=\"getCategor(cat)\" >\n            {{ cat.libelle }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>   \n    </div>\n    \n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"updateEmploye()\"><i class=\"material-icons\">check</i> Modifier</button>\n  \n      <button class=\"btn btn-danger\"  style=\"margin-left:65%;\" (click)=\"retourner()\"\n      ><i class=\"material-icons\">arrow_back</i>retour\n  </button>\n\n  </div>\n</form>\n");

/***/ }),

/***/ "5+GY":
/*!***********************************************************************************!*\
  !*** ./src/app/gestion-employes/recherche-employe/recherche-employe.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RechercheEmployeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechercheEmployeComponent", function() { return RechercheEmployeComponent; });
/* harmony import */ var _raw_loader_recherche_employe_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./recherche-employe.component.html */ "Cjcy");
/* harmony import */ var _recherche_employe_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recherche-employe.component.css */ "DqOS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RechercheEmployeComponent = /** @class */ (function () {
    function RechercheEmployeComponent(emp_service, router, route) {
        this.emp_service = emp_service;
        this.router = router;
        this.route = route;
    }
    // bon:IPM_Bon=new IPM_Bon(0,"",null,"",null,null)
    RechercheEmployeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.id=this.route.snapshot.params['id'];
        // this.emp_service.getEmployeById(this.id).subscribe(
        //   result => {
        //     this.employe = result;
        //   }
        // );
        this.emp_service.getEmploye().subscribe(function (data) {
            $(function () {
                $('#datatable').DataTable({
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
                            "first": "Début",
                            "previous": "Précédent",
                            "next": "Suivant",
                            "last": "Fin"
                        },
                        lengthMenu: "Afficher par _MENU_",
                        infoFiltered: ""
                    },
                });
            });
            _this.employe = data;
            //      for (let index = 0; index < this.listFacture.length; index++) {
            //       //  if(this.listFacture[0].ipm_facture.certifier!=true){
            //       //    this.liste.push(this.listFacture[index].ipm_facture)
            console.log(_this.employe);
            //console.log((<any>$('#datatable')).dataTable())
            //       //  }
            //      }
            // console.log(this.date1)
            //     console.log(this.listFacture);
        });
    };
    ////////////----------------//////////////////
    RechercheEmployeComponent.prototype.getEmployeById = function (employe) {
        var _this = this;
        this.emp_service.getEmployeById(employe.idemp).subscribe(function (result) {
            _this.employe = result;
        });
    };
    RechercheEmployeComponent.prototype.findByMatricule = function () {
        var _this = this;
        this.emp_service.getEmployeByMatricule(this.matricule).subscribe(function (data) {
            _this.message = data;
            //     console.log(this.message.idemp);
            if (_this.message) {
                _this.showNotification('top', 'center', 1, '<b>agent existe</b> :');
                console.log(_this.message);
            }
            else if (!_this.message) {
                console.log("not existe");
                _this.showNotification('top', 'center', 3, "<b>agent n'existe pas</b> :");
            }
        });
    };
    RechercheEmployeComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
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
    };
    RechercheEmployeComponent.prototype.upload = function () {
        var imgData = '/assets/img_poste/laposte.png';
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        var col = [["matricule", "nom", "prenom", "adresse", "cumul_charge", "solde", "telephone", "numero_carnet",]];
        var rows = [];
        for (var _i = 0, _a = this.employe; _i < _a.length; _i++) {
            var emp = _a[_i];
            var tmp = [emp.matricule, emp.nom, emp.prenom, emp.adresse, emp.cumul_charge, emp.solde, emp.telephone, emp.numero_carnet];
            rows.push(tmp);
        }
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 75,
            head: col,
            body: rows,
        });
        doc.addImage(imgData, 'JPEG', 15, 5, 25, 25);
        doc.setFontSize(20);
        doc.text("Liste Des Employes", 75, 50);
        var date = new Date();
        doc.setFontSize(10);
        doc.text("Dakar,le:", 166, 5);
        doc.text(date.toLocaleDateString("fr-FR"), 185, 5);
        doc.save("employe.pdf");
    };
    RechercheEmployeComponent.ctorParameters = function () { return [
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_3__["EmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    RechercheEmployeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-recherche-employe',
            template: _raw_loader_recherche_employe_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_recherche_employe_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_3__["EmployeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RechercheEmployeComponent);
    return RechercheEmployeComponent;
}());



/***/ }),

/***/ "7T9z":
/*!******************************************************************************************!*\
  !*** ./src/app/gestion-employes/employer-par-service/employer-par-service.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tZW1wbG95ZXMvZW1wbG95ZXItcGFyLXNlcnZpY2UvZW1wbG95ZXItcGFyLXNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "A0PO":
/*!******************************************************************************************!*\
  !*** ./src/app/gestion-employes/liste-employer-by-id/liste-employer-by-id.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tZW1wbG95ZXMvbGlzdGUtZW1wbG95ZXItYnktaWQvbGlzdGUtZW1wbG95ZXItYnktaWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "C+xR":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-employes/ajouter-employes/ajouter-employes.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <div fxhide.gt-xs>\n    <button mat-icon-button>\n      <mat-icon>menu</mat-icon>\n    </button>\n  </div>\n</mat-toolbar>\n\n<form class=\"form-horizontal\">\n  <input type=\"hidden\" class=\"form-control\" >\n  <div class=\"form-group row card-header\">\n    <h2 class=\"text-center\">Ajout des Employes de la poste </h2>  \n    <div class=\"col-md-6 form-group\" [formGroup]=\"FormControlEmpployes\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"nom\" placeholder=\"Nom\" [(ngModel)]=\"employe.nom\" formControlName=\"nom\" >\n        <span class=\"text-danger\"\n              *ngIf=\"FormControlEmpployes.controls['nom'].touched\n            && FormControlEmpployes.controls['nom'].errors\n            && FormControlEmpployes.controls['nom'].errors!['required']\">\n            nom obligatoire\n          </span>\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\" [formGroup]=\"FormControlEmpployes\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"prenom\" placeholder=\"Prenom\" [(ngModel)]=\"employe.prenom\" formControlName=\"prenom\">\n      </mat-form-field>\n    </div>\n    <div> \n  </div>  \n    <div class=\"col-md-6 form-group\" [formGroup]=\"FormControlEmpployes\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Select your car (required)</mat-label>\n       <!--<input matInput type=\"text\" class=\"form-control\" id=\"sexe\" placeholder=\"Sexe\" [(ngModel)]=\"employe.sexe\" formControlName=\"sexe\"> --> \n        <select matNativeControl required [formControl]=\"selectFormControl\">\n          <mat-option  type=\"text\" class=\"form-control\" id=\"sexe\" placeholder=\"Sexe\" [(ngModel)]=\"employe.sexe\" formControlName=\"sexe\">--Choissir le sexe ci-dessous--</mat-option>\n          <option value=\"masculin\">Masculin</option>\n          <option value=\"feminin\">Feminin</option>\n          </select>\n          <mat-error *ngIf=\"selectFormControl.hasError('required')\">\n            This field is required\n          </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\"[formGroup]=\"FormControlEmpployes\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"adresse_domicile\" placeholder=\"Adresse Domicile\" [(ngModel)]=\"employe.adresse_domicile\" formControlName=\"adresse_domicile\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\"[formGroup]=\"FormControlEmpployes\">\n      <mat-form-field>\n      <input matInput type=\"date\" max=\"2001-01-31\" min=\"1900-01-01\" id=\"date_nais\" placeholder=\"Date Naissance\" [(ngModel)]=\"employe.date_nais\" formControlName=\"date_nais\">      \n      </mat-form-field>\n  </div>\n    <div class=\"col-md-6 form-group\"[formGroup]=\"FormControlEmpployes\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\"  class=\"form-control\" id=\"lieu_nais\" placeholder=\"Lieu de Naissance\" [(ngModel)]=\"employe.lieu_nais\" formControlName=\"lieu_nais\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\"[formGroup]=\"FormControlEmpployes\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"telephone\" placeholder=\"\" mask=\"(00) 000-00-00\" [(ngModel)]=\"employe.telephone\" formControlName=\"telephone\">\n        <small>Telephone: XX-XXX-XX-XX</small>\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\"[formGroup]=\"FormControlEmpployes\">\n      <mat-form-field >\n        <input matInput type=\"date\" id=\"date_recrutement\" placeholder=\"Date Recrutement\"  [(ngModel)]=\"employe.date_recrutement\" formControlName=\"date_recrutement\">\n        <!-- <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker> -->\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\" [formGroup]=\"FormControlEmpployes\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"situation_familial\" placeholder=\"Situation Matrimonial\" [(ngModel)]=\"employe.situation_familial\"formControlName=\"situation_familial\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <mat-form-field>\n        <mat-select placeholder=\"Type Service\" name=\"entity\"  [(ngModel)]=\"enti\" (selectionChange)=\"selectService()\">\n            <mat-option *ngFor=\"let ent of entity\" [value]=\"ent.idEntity\">\n              {{ ent.nom_entity }}\n            </mat-option>         \n        </mat-select>\n      </mat-form-field>    \n    </div>\n   <!-- <div class=\"col-md-6 form-group\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"matricule\" placeholder=\"Matricule\" [(ngModel)]=\"employe.matricule\" name=\"matricule\">\n\n      </mat-form-field> \n\n    </div> -->\n    <div class=\"col-md-6 form-group\"[formGroup]=\"FormControlEmpployes\">\n      <mat-form-field class=\"example-full-width\">\n       <input matInput type=\"text\" class=\"form-control\"  id=\"matricule\"  [(ngModel)]=\"employe.matricule\" placeholder=\"Matricule *\" formControlName=\"matricule\" \n        (keypress)=\"keyPressAlphaNumericWithCharacters($event)\">\n      <mat-error *ngIf=\"FormControlEmpployes.controls['matricule'].hasError('required')\">\n        le matricule doit etre <strong>Obligatoire</strong>\n      </mat-error>\n      <mat-error *ngIf=\"FormControlEmpployes.controls['matricule'].hasError('minlength')\">\n        le matricule doit composer au moins  <strong>7 caractères</strong>\n      </mat-error>\n      <mat-error *ngIf=\"FormControlEmpployes.controls['matricule'].hasError('maxlength')\">\n        le matricule ne doit pas dépasser <strong>7 caractères</strong>\n      </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <mat-form-field>\n        <mat-select placeholder=\"Service\" name=\"service\"  [(ngModel)]=\"servi\">\n          <mat-option *ngFor=\"let serv of service\" [value]=\"serv.idService\" >\n            {{ serv.type_service }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>    \n    </div>\n    \n    <div class=\"col-md-6 form-group\"[formGroup]=\"FormControlEmpployes\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" class=\"form-control\" id=\"reference\" placeholder=\"Reference\" [(ngModel)]=\"employe.reference\" formControlName=\"reference\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <mat-form-field>\n        <mat-select placeholder=\"Categorie\" name=\"categorie\" [(ngModel)]=\"cate\">\n          <mat-option *ngFor=\"let cat of categorie\" [value]=\"cat.code_categorie\">\n            {{ cat.libelle }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>   \n    </div>\n    \n  \n  </div>\n</form>\n\n\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-8 mr-auto ml-auto\">\n        <!--      Wizard container        -->\n        <div class=\"wizard-container\">\n          <div class=\"card card-wizard\" data-color=\"rose\" id=\"wizardProfile\">\n              <!--        You can switch \" data-color=\"primary\" \"  with one of the next bright colors: \"green\", \"orange\", \"red\", \"blue\"       -->             \n              <div class=\"card-body\">\n                <div class=\"tab-content\">\n                  <div class=\"tab-pane active\" id=\"about\">\n                    <div class=\"row justify-content-center\">\n                      <div class=\"col-sm-4\">\n                        <div class=\"picture-container\">\n                          <div class=\"picture\">\n                            <div class=\"form-group\" [(ngModel)]=\"employe.picByte\"></div>\n                            <img [src]=\"imgURL\" height=\"100\" width=\"100\" *ngIf=\"imgURL\"/>\n                            <input type=\"file\" (change)=\"onFileChanged($event)\">\n                          </div>\n                          </div>\n                                 <h6 class=\"description\" style=\"border: 45px;\">Choisir Image</h6>\n                          \n                        </div>\n                      </div>\n                    \n                    </div>\n                  </div>\n                </div>   \n          </div>\n        <!-- wizard container -->\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"text-center\">\n  <button type=\"submit\" class=\"btn btn-success\" (click)=\"EmployeNow()\">\n    <span class=\"btn-label\">\n    <i class=\"material-icons\">check</i>\n</span>Enregistrer</button>\n</div>\n<div>\n<h4>{{message}} </h4>\n</div>\n\n");

/***/ }),

/***/ "CEcI":
/*!********************************************!*\
  !*** ./src/app/Models/IPM_Motif_Statut.ts ***!
  \********************************************/
/*! exports provided: IPM_Motif_Statut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPM_Motif_Statut", function() { return IPM_Motif_Statut; });
var IPM_Motif_Statut = /** @class */ (function () {
    function IPM_Motif_Statut(id, libelle, is_exclu) {
        this.id = id;
        this.libelle = libelle;
        this.is_exclu = is_exclu;
    }
    return IPM_Motif_Statut;
}());



/***/ }),

/***/ "Cjcy":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-employes/recherche-employe/recherche-employe.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!--modql employe-->\n <style>\n    tr{font-weight: bold;}\n</style>            \n <div class=\"col-md-12 mt-5\">\n  <div class=\"card\">\n    <div class=\"card-header card-header-icon\" >\n        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n          <i class=\"material-icons\">list</i>\n        </div>\n        <h2 style=\"background-color:whitesmoke; font-weight: 400; color: black; pading: 2px; width: 40%;\">Liste des participants </h2>\n    </div>\n          <div class=\"card-body\">                \n            <div class=\"text-center\">\n                <mat-spinner *ngIf=\"!employe\" style=\"margin-left: 15cm;\"></mat-spinner>\n               \n              </div>\n<div class=\"material-datatable\">\n  <table id=\"datatable\" class=\"table table-hover table-bordered text-black\"\n      cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n\n      <thead style=\"background-color: whitesmoke;\">\n\n          <tr>\n              <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Numero carnet</th>\n              <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\"> Matricule</th>\n              <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Prenom</th>\n              <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Nom</th>\n              <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Adresse</th>\n              <!-- <th cope=\"col\">Code Prestation</th> -->\n\n              <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">cumule charge</th>\n              <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Solde</th>\n              <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Telephone</th>\n\n          </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let employ of employe\">\n              <td class=\"text-center\">{{employ.numero_carnet}}</td>\n              <td class=\"text-center\">{{employ.matricule}}</td>\n              <td class=\"text-center\">{{employ.prenom}}</td>\n              <td class=\"text-center\">{{employ.nom}}</td>\n              <td class=\"text-center\">{{employ.adresse_domicile}}</td>\n              <td class=\"text-center\">{{employ.cumul_charge | number:'1.0-0'}}</td>\n              <td class=\"text-center\">{{employ.solde | number:'1.0-0'}}</td>\n              <td class=\"text-center\">{{employ.telephone}}</td>\n          </tr>\n      </tbody>\n      <button mat-raised-button (click)=\"upload()\" type=\"button\" style=\"font-size: 16px;background-color:rgba(17, 17, 227, 0.88); color: white; margin-left: 20px;\">\n                            <i class=\"material-icons\">file_download</i>Telecharger</button>\n  </table>\n</div>\n</div>\n</div>\n</div>\n\n\n\n\n<!--finmodal-->");

/***/ }),

/***/ "DqOS":
/*!************************************************************************************!*\
  !*** ./src/app/gestion-employes/recherche-employe/recherche-employe.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tZW1wbG95ZXMvcmVjaGVyY2hlLWVtcGxveWUvcmVjaGVyY2hlLWVtcGxveWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "EVdn":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
(function (global, factory) {
  "use strict";

  if ( true && typeof module.exports === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var flat = arr.flat ? function (array) {
    return arr.flat.call(array);
  } : function (array) {
    return arr.concat.apply([], array);
  };
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var document = window.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.5.1",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  };

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return (i + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return i % 2;
      }));
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (typeof target !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function globalEval(code, options, doc) {
      DOMEval(code, {
        nonce: options && options.nonce
      }, doc);
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return flat(ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.5
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2020-03-14
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        pushNative = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
    identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
    // or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
        funescape = function funescape(escape, nonHex) {
      var high = "0x" + escape.slice(1) - 0x10000;
      return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
      nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
      // Support: IE <=11+
      // For values outside the Basic Multilingual Plane (BMP), manually construct a
      // surrogate pair
      high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    },
        inDisabledFieldset = addCombinator(function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply
      // eslint-disable-next-line no-unused-expressions

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          pushNative.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        setDocument(context);
        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
            newSelector = selector;
            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // The technique has to be used as well when a leading combinator is used
            // as such selectors are not recognized by querySelectorAll.
            // Thanks to Andrew Dupont for this technique.

            if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
              // Expand context for sibling selectors
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context; // We can use :scope instead of the ID hack if the browser
              // supports it & if we're not changing the context.

              if (newContext !== context || !support.scope) {
                // Capture the context ID, setting it first if necessary
                if (nid = context.getAttribute("id")) {
                  nid = nid.replace(rcssescape, fcssescape);
                } else {
                  context.setAttribute("id", nid = expando);
                }
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(",");
            }

            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      var namespace = elem.namespaceURI,
          docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833

      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9 - 11+, Edge 12 - 18+
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      } // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
      // Safari 4 - 5 only, Opera <=11.6 - 12.x only
      // IE/Edge & older browsers don't support the :scope pseudo-class.
      // Support: Safari 6.0 only
      // Safari 6.0 supports :scope but it's an alias of :root there.


      support.scope = assert(function (el) {
        docElem.appendChild(el).appendChild(document.createElement("div"));
        return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
      });
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)

      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          var input; // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359

          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Support: IE 11+, Edge 15 - 18+
          // IE 11/Edge don't find elements on a `[name='']` query in some cases.
          // Adding a temporary attribute to the document before the selection works
          // around the issue.
          // Interestingly, IE 10 & older don't seem to have the issue.


          input = document.createElement("input");
          input.setAttribute("name", "");
          el.appendChild(input);

          if (!el.querySelectorAll("[name='']").length) {
            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          } // Support: Firefox <=3.6 - 5 only
          // Old Firefox doesn't throw on a badly-escaped identifier.


          el.querySelectorAll("\\\f");
          rbuggyQSA.push("[\\r\\n\\f]");
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: Opera 10 - 11 only
          // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq


        compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
            return -1;
          } // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq


          if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.

          /* eslint-disable eqeqeq */
          return a == document ? -1 : b == document ? 1 :
          /* eslint-enable eqeqeq */
          aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.

        /* eslint-disable eqeqeq */
        ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 :
        /* eslint-enable eqeqeq */
        0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      setDocument(elem);

      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((context.ownerDocument || context) != document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((elem.ownerDocument || elem) != document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            /* eslint-disable max-len */

            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
            /* eslint-enable max-len */
          };
        },
        "CHILD": function CHILD(type, what, _argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, _context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, _context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            // eslint-disable-next-line no-unused-expressions
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (_matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          outermostContext = context == document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0; // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq

            if (!context && elem.ownerDocument != document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, _name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var _siblings = function siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  ;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, _i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, _i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, _i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (elem.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      getProto(elem.contentDocument)) {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe() {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (_i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                typeof returned === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = _slice.call(arguments),
          // the master Deferred
      master = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

          if (! --remaining) {
            master.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }

      return master.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    .catch(function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, _key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (typeof key === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;

  var isAttached = function isAttached(elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue; // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.

    div.innerHTML = "<option></option>";
    support.option = !!div.lastChild;
  })(); // We have to close these tags to support XHTML (#13200)


  var wrapMap = {
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td; // Support: IE <=9 only

  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
  }

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (typeof types === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Only attach events to objects that accept data

      if (!acceptData(elem)) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(nativeEvent),
          handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = _slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault();
              return result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function which(event) {
      var button = event.button; // Add which for key events

      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      } // Add which for click: 1 === left; 2 === middle; 3 === right


      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }

        if (button & 2) {
          return 3;
        }

        if (button & 4) {
          return 2;
        }

        return 0;
      }

      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (typeof types === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src);
      events = pdataOld.events;

      if (events) {
        dataPriv.remove(dest, "handle events");

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = flat(args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  }, doc);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html;
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var swap = function swap(elem, options, callback) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.call(elem); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableTrDimensionsVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      },
      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      reliableTrDimensions: function reliableTrDimensions() {
        var table, tr, trChild, trStyle;

        if (reliableTrDimensionsVal == null) {
          table = document.createElement("table");
          tr = document.createElement("tr");
          trChild = document.createElement("div");
          table.style.cssText = "position:absolute;left:-11111px";
          tr.style.height = "1px";
          trChild.style.height = "9px";
          documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
          trStyle = window.getComputedStyle(tr);
          reliableTrDimensionsVal = parseInt(trStyle.height) > 3;
          documentElement.removeChild(table);
        }

        return reliableTrDimensionsVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var final = jQuery.cssProps[name] || vendorProps[name];

    if (final) {
      return final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(_elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.


    if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
    // IE/Edge misreport `getComputedStyle` of table rows with width/height
    // set in CSS while `offset*` properties report correct values.
    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
    !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    val === "auto" || // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
    elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = typeof value; // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (_i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (_i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = typeof value,
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          // Handle: regular nodes (via `this.ownerDocument`), window
          // (via `this.document`) & document (via `this`).
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = {
    guid: Date.now()
  };
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (_i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (typeof url === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Use a noop converter for missing script


        if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1) {
          s.converters["text script"] = function () {};
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (_i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery.ajaxPrefilter(function (s) {
    var i;

    for (i in s.headers) {
      if (i.toLowerCase() === "content-type") {
        s.contentType = s.headers[i] || "";
      }
    }
  });

  jQuery._evalUrl = function (url, options, doc) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(response) {
        jQuery.globalEval(response, options, doc);
      }
    });
  };

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, _callback2;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback2 = function callback(evt) {
            script.remove();
            _callback2 = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback2) {
            _callback2();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && typeof params === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  };

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        if (typeof props.top === "number") {
          props.top += "px";
        }

        if (typeof props.left === "number") {
          props.left += "px";
        }

        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (_i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });
  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  }); // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP

  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = _slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(_slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  };

  jQuery.trim = function (text) {
    return text == null ? "" : (text + "").replace(rtrim, "");
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (typeof noGlobal === "undefined") {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});

/***/ }),

/***/ "GAw6":
/*!*****************************************************************************!*\
  !*** ./src/app/gestion-employes/liste-employes/liste-employes.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListeEmployesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeEmployesComponent", function() { return ListeEmployesComponent; });
/* harmony import */ var _raw_loader_liste_employes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./liste-employes.component.html */ "br6J");
/* harmony import */ var _liste_employes_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liste-employes.component.css */ "kNT0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var src_app_Models_Categorie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/Categorie */ "lcUs");
/* harmony import */ var src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Models/Employe */ "5GYJ");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_Models_Entity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Models/Entity */ "b8v4");
/* harmony import */ var src_app_Models_Service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Models/Service */ "hHo9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var src_app_Services_statut_employe_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Services/statut-employe.service */ "bitI");
/* harmony import */ var src_app_Models_IPM_StatutEmploye__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/Models/IPM_StatutEmploye */ "tbBT");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _Models_IPM_Motif_Statut__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Models/IPM_Motif_Statut */ "CEcI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var ListeEmployesComponent = /** @class */ (function () {
    function ListeEmployesComponent(emp_service, emp_statut, router, fb, toastr, route, dateAdapter, datepipe) {
        this.emp_service = emp_service;
        this.emp_statut = emp_statut;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.route = route;
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.showOverlay = true;
        //currentemploye: Employe= new Employe(0,"","","","",null,"","","","","","","","","","");
        this.selectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required);
        this.employe = new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_6__["Employe"]();
        this.currentemploye = new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_6__["Employe"]();
        this.statuEmp = new src_app_Models_IPM_StatutEmploye__WEBPACK_IMPORTED_MODULE_15__["IPM_StatutEmploye"]();
        this.situation_familial = [{ id: 1, value: "Celibataire" },
            { id: 2, value: "Marier" },
            { id: 3, value: "Divorce" },
            { id: 4, value: "Veuf" }
        ];
        this.sexe = [{ id: 1, value: "Masculin" },
            { id: 2, value: "Féminin" }
        ];
        this.desactive = false;
        this.desac = false;
        this.motif = new _Models_IPM_Motif_Statut__WEBPACK_IMPORTED_MODULE_17__["IPM_Motif_Statut"]();
        /////////////////
        this.FormControlEmpployes = this.fb.group({
            nom: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            prenom: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            sexe: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            adresse_domicile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            situation_familial: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            date_nais: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            lieu_nais: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            telephone: [null],
            date_recrutement: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            reference: [null],
            ipm_categorie: [null],
            ipmService: [null],
            ipmEntity: [null],
            matricule: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(8)
                ])]
        });
        this.addCategorie = new src_app_Models_Categorie__WEBPACK_IMPORTED_MODULE_5__["Categorie"]();
        this.addService = new src_app_Models_Service__WEBPACK_IMPORTED_MODULE_11__["Service"]();
        this.addEntity = new src_app_Models_Entity__WEBPACK_IMPORTED_MODULE_10__["Entity"]();
        this.addStatut = new src_app_Models_IPM_StatutEmploye__WEBPACK_IMPORTED_MODULE_15__["IPM_StatutEmploye"]();
        this.dateAdapter.setLocale('en-GB');
    }
    ListeEmployesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statuttt = false;
        ////////////////
        this.min = new Date().getFullYear() - 18;
        console.log(new Date().getFullYear() - 18);
        this.getCategorie();
        this.getService();
        this.getEntity();
        this.getStatutEmploye();
        this.getMotif();
        //
        // this.emp_service.getEmploye().subscribe(data => {
        //   this.Listemploye = data;
        //   console.log(this.Listemploye)
        //
        // });
        ///////////////////
        this.dataTable = {
            headerRow: ['Numero Carnet', 'Nom', 'Prenom', 'Sexe', 'Matricule', 'Reference', 'Service', 'Categorie', 'Actions'],
            footerRow: ['Name', 'Position', 'Office', 'Age', 'Start Date', 'Actions'],
            dataRows: []
        };
        /////////////////////////
        console.log(this.lisEmployes);
        this.emp_service.listeEmploye().subscribe(function (emps) {
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
            _this.employes = emps;
            _this.employes.forEach(function (ele) {
                var _a, _b;
                _this.condStatut = ele.statut;
                if (ele.date_nais) {
                    //convert date again to type Date
                    var bdate = new Date(ele.date_nais);
                    var timeDiff = Math.abs(Date.now() - bdate.getTime());
                    // console.log(timeDiff);
                    _this.ages = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                    // console.log(this.ages)
                }
                if (_this.ages > 60 || ((_a = ele.ipmStatutEmploye) === null || _a === void 0 ? void 0 : _a.emplStatut) == "inactif") {
                    console.log("Age atteinte impossible de ce beneficier à l'ipm :", _this.ages);
                    ele.statut = false;
                    //console.log(ele);
                    console.log((_b = ele.ipmStatutEmploye) === null || _b === void 0 ? void 0 : _b.emplStatut);
                    _this.emp_service.ModifierEmploye(ele).subscribe(function (data) { });
                    console.log("age depasse");
                }
                else if (_this.ages < 60) {
                    //console.log("Voici l'age :", this.ages)
                    ele.statut = true;
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
        });
        this.getFiles(this.employes);
    };
    ListeEmployesComponent.prototype.getEmployeByMatricule = function () {
        var _this = this;
        console.log(this.matricule);
        this.emp_service.getEmployeByMatricule(this.matricule).subscribe({
            next: function (data) {
                _this.employeRech = data;
                if (_this.employeRech == null) {
                    //this.showNotification('top', 'center', 1, '<b>  Matricule  incorrecte !!!</b> :')
                    _this.showNotification('top', 'center', 3, "<b> Matricule  incorrecte !!!</b> :");
                }
                console.log(data);
            },
            error: function (err) {
                _this.errorMessage = err.message;
                console.log(_this.errorMessage);
            }
        });
    };
    ListeEmployesComponent.prototype.getStatutEmploye = function () {
        var _this = this;
        this.emp_statut.getStatutEmploye().subscribe(function (data) {
            // console.log(cat);
            _this.statutEmploye = data;
            //console.log(this.statutEmploye,data)
        });
    };
    ListeEmployesComponent.prototype.getMotif = function () {
        var _this = this;
        console.log(this.datede);
        //this.motifStatut=stu.libelleStatut
        this.emp_service.getMotif().subscribe(function (data) {
            _this.motifStatu = data;
            console.log(_this.motifStatu);
        });
    };
    ListeEmployesComponent.prototype.getEmployeById = function (employe) {
        var _this = this;
        this.emp_service.getEmployeByIdSanstof(employe.idemp).subscribe(function (result) {
            _this.currentemploye = result;
        });
    };
    ListeEmployesComponent.prototype.getFiles = function (employe) {
        var _this = this;
        this.emp_service.getFiles(employe.idemp).subscribe(function (result) {
            _this.currentemploye = result;
        });
    };
    ListeEmployesComponent.prototype.supprimerEmploye = function (emp) {
        var _this = this;
        var conf = confirm("Etes-vous sur ?");
        if (conf)
            this.emp_service.deleteEmployeById(emp.idemp).subscribe(function () {
                console.log("employe supprimer");
                //pour ne pas faire de reload
                //this.supprimerEmployeDuTableau(emp);
                _this.router.navigate(['/gestion-employes/ListeEmployes']).then(function () {
                    window.location.reload();
                });
            });
    };
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
    ListeEmployesComponent.prototype.EmployeNow = function () {
        var _this = this;
        console.log(this.employeExit);
        this.addService.idService = this.servi;
        this.employe.ipmService = JSON.parse(JSON.stringify(this.addService));
        this.addStatut.idStatut = 1;
        this.employe.ipmStatutEmploye = JSON.parse(JSON.stringify(this.addStatut));
        this.addEntity.idEntity = this.enti;
        this.employe.ipmEntity = JSON.parse(JSON.stringify(this.addEntity));
        this.addCategorie.code_categorie = this.cate;
        this.employe.ipm_categorie = JSON.parse(JSON.stringify(this.addCategorie));
        this.employe.nom = this.FormControlEmpployes.get("nom").value;
        this.employe.prenom = this.FormControlEmpployes.get("prenom").value;
        this.employe.matricule = this.FormControlEmpployes.get("matricule").value;
        this.employe.reference = this.FormControlEmpployes.get("reference").value;
        this.employe.sexe = this.FormControlEmpployes.get("sexe").value;
        this.employe.situation_familial = this.FormControlEmpployes.get("situation_familial").value;
        this.employe.lieu_nais = this.FormControlEmpployes.get("lieu_nais").value;
        this.employe.adresse_domicile = this.FormControlEmpployes.get("adresse_domicile").value;
        this.employe.telephone = this.FormControlEmpployes.get("telephone").value;
        this.employe.date_nais = this.FormControlEmpployes.get("date_nais").value;
        //this.employe.ipmStatutEmploye=this.statutEmploye[0];
        console.log(this.employe.date_nais);
        this.employe.date_recrutement = this.FormControlEmpployes.get("date_recrutement").value;
        console.log(this.employe.date_recrutement);
        console.log(this.employe);
        if (this.selectedFile) {
            this.employe.photo = this.selectedFile.name;
        }
        if (this.selectJustif) {
            this.employe.justificatif = this.selectJustif.name;
        }
        if (this.employe.nom && this.employe.prenom
        // && this.employe.lieu_nais && this.employe.date_recrutement && this.employe.adresse_domicile 
        // && this.employe.situation_familial && this.employe.ipmEntity &&  this.employe.ipm_categorie && this.employe.sexe
        // && this.employe.ipmService && this.employe.reference  &&  this.employe.photo
        ) {
            this.emp_service.AjoutEmploye(this.employe).subscribe(function (data) {
                _this.message = data;
                _this.ngOnInit();
                // console.log("the message ", data)
                // console.log(this.employe.date_nais);
                // return this.message
                if (_this.selectedFile) {
                    _this.emp_service.addUploadData(_this.selectedFile).subscribe(function (data) {
                        _this.message = data;
                        console.log("the message ", data);
                        //return this.message
                    });
                }
                if (_this.selectJustif) {
                    _this.emp_service.addUploadJustif(_this.selectJustif).subscribe(function (data) {
                        _this.message = data;
                        console.log("the message ", data);
                        //return this.message
                        _this.showNotification('top', 'center', 1, '<b>employé ajouté avec succées!!!</b> :');
                    });
                }
            }, function (error) {
                console.log(error);
                _this.desac = true;
                _this.showNotification('top', 'center', 3, '<b>Matricule existe deja!!!</b> :');
            });
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
        else {
            console.log("************IPML*********************");
            this.desactive = true;
            // this.showNotification('top', 'right', 3, "<b>Veuiller remplir les Champs</b> :")
        }
        // this.showNotification('top', 'center', 3, "<b>Remplir les champs</b> :")
        this.FormControlEmpployes.reset();
    };
    ListeEmployesComponent.prototype.onReset = function () {
        this.FormControlEmpployes.reset();
    };
    ListeEmployesComponent.prototype.getService = function () {
        var _this = this;
        this.emp_service.getService().subscribe(function (serv) {
            // console.log(serv);
            _this.service = serv;
            _this.tempservice = serv;
            console.log(_this.service);
        });
    };
    ListeEmployesComponent.prototype.getCategorie = function () {
        var _this = this;
        this.emp_service.getCategorie().subscribe(function (cat) {
            // console.log(cat);
            _this.categorie = cat;
            // console.log(this.categorie)
        });
    };
    ListeEmployesComponent.prototype.getEntity = function () {
        var _this = this;
        this.emp_service.getEntity().subscribe(function (ent) {
            // console.log(cat);
            _this.entity = ent;
            // console.log(this.categorie)
        });
    };
    ListeEmployesComponent.prototype.selectService = function () {
        var _this = this;
        console.log(this.enti);
        this.service = this.tempservice;
        this.service = this.service.filter(function (serv) { return serv.ipmEntity.idEntity == _this.enti; });
        //console.log(this.enti)
        console.log(this.service);
        console.log(this.enti);
    };
    /////choisir et recuperer l'image sur l'ordinateur
    ListeEmployesComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        console.log(event);
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (event2) {
            _this.imgURL = reader.result;
        };
    };
    ListeEmployesComponent.prototype.upload = function () {
        var _a, _b;
        var imgData = '/assets/img_poste/laposte.png';
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__["default"]();
        var col = [["Numero Carnet", "nom", "prenom", "sexe", "matricule", "reference", "Service", "Categorie",]];
        var rows = [];
        for (var _i = 0, _c = this.employes; _i < _c.length; _i++) {
            var employe = _c[_i];
            var tmp = [employe.idemp, employe.nom, employe.prenom, employe.sexe, employe.matricule, employe.reference, (_a = employe.ipmService) === null || _a === void 0 ? void 0 : _a.type_service, (_b = employe.ipm_categorie) === null || _b === void 0 ? void 0 : _b.libelle];
            rows.push(tmp);
        }
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_8___default()(doc, {
            startY: 75,
            head: col,
            body: rows,
        });
        doc.addImage(imgData, 'JPEG', 15, 5, 25, 25);
        doc.setFontSize(20);
        doc.text("Liste Des Employes", 75, 50);
        var date = new Date();
        doc.setFontSize(10);
        doc.text("Dakar,le:", 166, 5);
        doc.text(date.toLocaleDateString("fr-FR"), 185, 5);
        doc.save("employe.pdf");
    };
    // Only AlphaNumeric with Some Characters [-_ ]
    ListeEmployesComponent.prototype.keyPressAlphaNumericWithCharacters = function (event) {
        var inp = String.fromCharCode(event.keyCode);
        // Allow numbers, alpahbets, space, underscore
        if (/[A-Z0-9]/.test(inp)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    };
    ////////////Function Notification
    ListeEmployesComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
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
    };
    ListeEmployesComponent.prototype.getServiceEmploye = function (list) {
        var _this = this;
        this.nomEntity = list.nom_entity;
        this.emp_service.getlistService(list.idEntity).subscribe(function (data) {
            _this.listService = data;
            console.log(_this.listService);
        });
    };
    ListeEmployesComponent.prototype.getEmploye = function (employe) {
        var _this = this;
        // this.router.navigate(['/gestion-employes/employer-par-service/'+listserv.idService]);
        // console.log(listserv)
        this.emp_service.getEmployeByIdSanstof(employe.idemp).subscribe(function (res) {
            _this.employe = res;
            console.log(_this.employe);
            //this.getStatutEmploye();
        });
    };
    /////Update Statut employe
    ListeEmployesComponent.prototype.updateStatut = function () {
        var _this = this;
        console.log(this.motif);
        console.log(this.datede, this.datefi, this.motifStatut);
        this.addStatut.idStatut = this.codeStat;
        this.employe.ipmStatutEmploye = JSON.parse(JSON.stringify(this.addStatut));
        if (this.addStatut.idStatut == 2) {
            this.employe.statut = false;
        }
        else
            this.employe.statut = true;
        if (this.datede) {
            this.employe.date_debut_suspension = this.datede;
            //this.datepipe.transform(this.datede, 'dd-MM-yyyy');
        }
        if (this.datefi) {
            //this.datepipe.transform(this.dateFacture, 'dd-MM-yyyy');
            this.employe.date_fin_suspension = this.datefi;
            //this.datepipe.transform(this.datefi, 'dd-MM-yyyy');
        }
        this.employe.motifStatut = this.motifStatut;
        console.log(this.employe);
        this.emp_service.ModifierEmployeSansphoto(this.employe).subscribe(function (res) {
            console.log(_this.employe);
            _this.ngOnInit();
            _this.message = res;
            _this.toastr.success("Mise à jour avec Succès avec comme statut");
        });
    };
    ////////////////////////Justificatif
    ListeEmployesComponent.prototype.selectJustificatif = function (event) {
        var _this = this;
        this.selectJustif = event.target.files[0];
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.JustifURL = readerr.result;
        };
    };
    ListeEmployesComponent.ctorParameters = function () { return [
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_7__["EmployeService"] },
        { type: src_app_Services_statut_employe_service__WEBPACK_IMPORTED_MODULE_14__["StatutEmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"] }
    ]; };
    ListeEmployesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-liste-employes',
            template: _raw_loader_liste_employes_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_liste_employes_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_7__["EmployeService"], src_app_Services_statut_employe_service__WEBPACK_IMPORTED_MODULE_14__["StatutEmployeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]])
    ], ListeEmployesComponent);
    return ListeEmployesComponent;
}());



/***/ }),

/***/ "RWyT":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-employes/supprimer-employes/supprimer-employes.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>supprimer-employes works!</p>\n");

/***/ }),

/***/ "SO5K":
/*!*************************************************************!*\
  !*** ./src/app/gestion-employes/gestion-employes.module.ts ***!
  \*************************************************************/
/*! exports provided: GestionEmployesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionEmployesModule", function() { return GestionEmployesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _liste_employes_liste_employes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./liste-employes/liste-employes.component */ "GAw6");
/* harmony import */ var _modifier_employes_modifier_employes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifier-employes/modifier-employes.component */ "W/EP");
/* harmony import */ var _supprimer_employes_supprimer_employes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supprimer-employes/supprimer-employes.component */ "r9Pp");
/* harmony import */ var _ajouter_employes_ajouter_employes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajouter-employes/ajouter-employes.component */ "UgPs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gestion_employes_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gestion-employes-routing.module */ "hzQl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.module */ "ZAI4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _carnet_employe_carnet_employe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carnet-employe/carnet-employe.component */ "h3o4");
/* harmony import */ var _recherche_employe_recherche_employe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./recherche-employe/recherche-employe.component */ "5+GY");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _liste_employe_liste_employe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./liste-employe/liste-employe.component */ "gVdH");
/* harmony import */ var _employer_par_service_employer_par_service_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employer-par-service/employer-par-service.component */ "3iAe");
/* harmony import */ var _liste_employer_by_id_liste_employer_by_id_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./liste-employer-by-id/liste-employer-by-id.component */ "026S");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var GestionEmployesModule = /** @class */ (function () {
    function GestionEmployesModule() {
    }
    GestionEmployesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_liste_employes_liste_employes_component__WEBPACK_IMPORTED_MODULE_2__["ListeEmployesComponent"], _liste_employe_liste_employe_component__WEBPACK_IMPORTED_MODULE_14__["ListeEmployeComponent"], _modifier_employes_modifier_employes_component__WEBPACK_IMPORTED_MODULE_3__["ModifierEmployesComponent"], _supprimer_employes_supprimer_employes_component__WEBPACK_IMPORTED_MODULE_4__["SupprimerEmployesComponent"], _ajouter_employes_ajouter_employes_component__WEBPACK_IMPORTED_MODULE_5__["AjouterEmployesComponent"], _carnet_employe_carnet_employe_component__WEBPACK_IMPORTED_MODULE_11__["CarnetEmployeComponent"], _recherche_employe_recherche_employe_component__WEBPACK_IMPORTED_MODULE_12__["RechercheEmployeComponent"], _employer_par_service_employer_par_service_component__WEBPACK_IMPORTED_MODULE_15__["EmployerParServiceComponent"], _liste_employer_by_id_liste_employer_by_id_component__WEBPACK_IMPORTED_MODULE_16__["ListeEmployerByIdComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_gestion_employes_routing_module__WEBPACK_IMPORTED_MODULE_7__["EmployeRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_13__["NgxMaskModule"].forRoot(),
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        })
    ], GestionEmployesModule);
    return GestionEmployesModule;
}());



/***/ }),

/***/ "UgPs":
/*!*********************************************************************************!*\
  !*** ./src/app/gestion-employes/ajouter-employes/ajouter-employes.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AjouterEmployesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterEmployesComponent", function() { return AjouterEmployesComponent; });
/* harmony import */ var _raw_loader_ajouter_employes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ajouter-employes.component.html */ "C+xR");
/* harmony import */ var _ajouter_employes_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajouter-employes.component.css */ "+xVC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Models_Categorie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Models/Categorie */ "lcUs");
/* harmony import */ var src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/Employe */ "5GYJ");
/* harmony import */ var src_app_Models_Entity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Models/Entity */ "b8v4");
/* harmony import */ var src_app_Models_Service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Models/Service */ "hHo9");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AjouterEmployesComponent = /** @class */ (function () {
    function AjouterEmployesComponent(emp_service, router, fb, http) {
        this.emp_service = emp_service;
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.employeAddedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.employe = new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_7__["Employe"]();
        //employe: Employe;
        this.selectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.FormControlEmpployes = this.fb.group({
            nom: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            prenom: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            sexe: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            adresse_domicile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            situation_familial: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            date_nais: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lieu_nais: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            telephone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            date_recrutement: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            reference: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ipm_categorie: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ipm_service: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            //  ipm_entity:[null,Validators.required],
            matricule: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(7)
                ])]
        });
        this.addCategorie = new src_app_Models_Categorie__WEBPACK_IMPORTED_MODULE_6__["Categorie"]();
        this.addService = new src_app_Models_Service__WEBPACK_IMPORTED_MODULE_9__["Service"]();
        this.addEntity = new src_app_Models_Entity__WEBPACK_IMPORTED_MODULE_8__["Entity"](0, "", "");
    }
    AjouterEmployesComponent.prototype.ngOnInit = function () {
        this.getCategorie();
        this.getService();
        this.getEntity();
        /////////////////
        ////////////
        // Prepare the preview for profile picture
        $('#wizard-picture').change(function () {
            var input = $(this);
            if (input[0].files && input[0].files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                };
                reader.readAsDataURL(input[0].files[0]);
            }
        });
        $('[data-toggle="wizard-radio"]').click(function () {
            var wizard = $(this).closest('.card-wizard');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked', 'true');
        });
        $('[data-toggle="wizard-checkbox"]').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            }
            else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked', 'true');
            }
        });
        $('.set-full-height').css('height', 'auto');
    };
    AjouterEmployesComponent.prototype.ngOnChanges = function (changes) {
        //throw new Error('Method not implemented.');
        var input = $(this);
        if (input[0].files && input[0].files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            };
            reader.readAsDataURL(input[0].files[0]);
        }
    };
    /////choisir et recuperer l'image sur l'ordinateur
    AjouterEmployesComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        console.log(event);
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (event2) {
            _this.imgURL = reader.result;
        };
    };
    AjouterEmployesComponent.prototype.EmployeNow = function () {
        var _this = this;
        var uploadData = new FormData();
        this.addService.idService = this.servi;
        this.employe.ipmService = JSON.parse(JSON.stringify(this.addService));
        this.addEntity.idEntity = this.enti;
        this.employe.ipmEntity = JSON.parse(JSON.stringify(this.addEntity));
        this.addCategorie.code_categorie = this.cate;
        this.employe.ipm_categorie = JSON.parse(JSON.stringify(this.addCategorie));
        console.log(this.employe);
        uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
        this.selectedFile.imageName = this.selectedFile.name;
        this.http.post('http://localhost:8082/ipm/upload', uploadData, { observe: 'response' })
            .subscribe(function (response) {
            if (response.status === 200) {
                _this.emp_service.AjoutEmploye(_this.employe).subscribe(function (data) { return _this.message = data; });
                _this.employeAddedEvent.emit();
                _this.router.navigate(['/gestion-employes/ListeEmployes']);
                console.log('Image uploaded successfully');
            }
            else {
                console.log('Image not uploaded successfully');
            }
        });
        /*const formData=new FormData();
        this.addService.idService=this.servi;
        this.employe.ipm_service=JSON.parse(JSON.stringify(this.addService));
    
        this.addEntity.idEntity=this.enti;
        this.employe.ipm_entity=JSON.parse(JSON.stringify(this.addEntity));
    
        this.addCategorie.code_categorie=this.cate;
        this.employe.ipm_categorie=JSON.parse(JSON.stringify(this.addCategorie));
        console.log(this.employe);
        formData.append('file',this.userFile);
        this.emp_service.AjoutEmploye(this.employe).subscribe(
          (data)=>this.message=data);
        //console.log(this.employe);
         this.router.navigate(['/gestion-employes/ListeEmployes']);
         this.emp_service.uploadFile(this.userFile).subscribe(
          (data)=>this.message=data);
        //console.log(this.employe);
         this.router.navigate(['/gestion-employes/ListeEmployes']);*/
    };
    AjouterEmployesComponent.prototype.getService = function () {
        var _this = this;
        this.emp_service.getService().subscribe(function (serv) {
            // console.log(serv);
            _this.service = serv;
            _this.tempservice = serv;
            // console.log(this.service)
        });
    };
    AjouterEmployesComponent.prototype.getCategorie = function () {
        var _this = this;
        this.emp_service.getCategorie().subscribe(function (cat) {
            // console.log(cat);
            _this.categorie = cat;
            // console.log(this.categorie)
        });
    };
    AjouterEmployesComponent.prototype.getEntity = function () {
        var _this = this;
        this.emp_service.getEntity().subscribe(function (ent) {
            // console.log(cat);
            _this.entity = ent;
            // console.log(this.categorie)
        });
    };
    AjouterEmployesComponent.prototype.selectService = function () {
        var _this = this;
        this.service = this.tempservice;
        this.service = this.service.filter(function (serv) { return serv.ipm_entity.idEntity == _this.enti; });
        console.log(this.enti);
        console.log(this.service);
    };
    ///////image template
    // Only AlphaNumeric with Some Characters [-_ ]
    AjouterEmployesComponent.prototype.keyPressAlphaNumericWithCharacters = function (event) {
        var inp = String.fromCharCode(event.keyCode);
        // Allow numbers, alpahbets, space, underscore
        if (/[A-Z0-9]/.test(inp)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    };
    AjouterEmployesComponent.ctorParameters = function () { return [
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__["EmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AjouterEmployesComponent.propDecorators = {
        employeAddedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    AjouterEmployesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-ajouter-employes',
            template: _raw_loader_ajouter_employes_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ajouter_employes_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__["EmployeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AjouterEmployesComponent);
    return AjouterEmployesComponent;
}());



/***/ }),

/***/ "V9xf":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-employes/carnet-employe/carnet-employe.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n  label {\n    color: black;\n    font-size: 18px;\n  }\n</style>\n<div class=\"col-md-12\">\n  <div class=\"card\">\n    <div class=\"card-header card-header-icon \">\n      <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n        <i class=\"material-icons\">list</i>\n      </div>\n      <legend class=\"card-title p-2\" style=\"background-color:whitesmoke;font-weight: 500; color: black; width: 30%;\">\n        Entité : {{currentemploye.ipmEntity?.nom_entity}}</legend>\n\n      <!-- <div class=\"card-icon\" *ngIf=\"currentemploye.photo==''\" href=\"#\"><img class=\"card-img-top img-responsive\" \n      src= \"{{currentemploye.photo}}\"\n     style = \"height :100px;\" \n    alt=\"\">\n  </div>  -->\n\n\n\n\n    </div>\n    <div class=\"card-body p-4\">\n      <form>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"text-center\">\n              <label class=\"rounded\"\n                style=\"padding: 10px; font-size: 16px;background-color:rgba(17, 17, 227, 0.88); color: white;\">Carnet\n                employe : {{currentemploye.prenom}}\n                {{currentemploye.nom}}</label>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"row p-4 rounded shadow\" style=\"background-color: whitesmoke;width:66%;margin: 0 auto;\">\n          <div class=\"col-md-4\">\n            <img class=\"rounded-circle\" src=\"{{currentemploye.photo}}\" style=\"height :150px;margin-top: 1cm  ;\" alt=\"\">\n            <!-- <a *ngIf=\"currentemploye.photo\"> -->\n            <a>\n              <button  class=\"rounded\" style=\"margin-top: 1px\" type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\"\n                data-target=\"#modiftof\">charger photo\n                <i class=\"material-icons\">edit</i>\n              </button>\n              <!-- dffdfdf -->\n            </a>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label>Age : <b> {{agemploye}}</b></label> <br>\n              <label>Sexe : <b> {{ currentemploye.sexe}}</b> </label> <br>\n              <label>Matricule : <b> {{ currentemploye.matricule}}</b></label>\n              <label>Telephone : <b> {{ currentemploye.telephone}}</b></label>\n              <label>Situation Familial : <b> {{ currentemploye.situation_familial}}</b></label>\n              <label>Service : <b> {{ currentemploye.ipmService?.type_service}}</b></label> <br>\n\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label>Numero Carnet : <b>{{ currentemploye.numero_carnet}}</b></label><br>\n              <label>Adresse : <b> {{ currentemploye.adresse_domicile}}</b></label><br>\n              <label>Reference : <b> {{currentemploye.reference}}</b></label><br>\n              <label>Categorie : <b> {{ currentemploye.ipm_categorie?.libelle}}</b></label>\n              <label>Date Recrutement :<b> {{currentemploye.date_recrutement}}</b></label>\n              <label>Date et Lieu de Naissance :<b> {{currentemploye.date_nais | date:'dd/MM/yyyy'}} à\n                  {{currentemploye.lieu_nais}}</b></label>\n            </div>\n\n             <a>\n              <button mat-raised-button style=\"margin:2px;\" type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\"\n                data-target=\"#modifjustif\">charger Justficatif\n                <i class=\"material-icons\">edit</i>\n              </button>\n             </a>\n\n          </div>\n          <a target=\"_blank\"  href=\"{{chemintelechargementFichier}}{{justificatifEmp}}\" *ngIf=\"currentemploye.justificatif\">\n            <button mat-raised-button style=\"margin-top:10px;\" type=\"button\"\n                    class=\"btn btn-outline-info\" data-toggle=\"modal\">Voir Justificatif<br>\n              <span></span>\n              <span style=\"color: red\">{{justificatifEmp}}</span>\n              <i class=\"material-icons\">visibility</i>\n            </button>\n          </a>\n\n\n        </div>\n\n\n        <div class=\"clearfix\"></div>\n        <!-- modif justficatif -->\n        <div class=\"modal fade\" id=\"modifjustif\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n          aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-notice \">\n            <div class=\"modal-content\" style=\"width: 500px;\">\n              <div class=\"modal-header\" *ngIf=\"!currentemploye.justificatif\">\n                <h3 class=\"modal-title btn-round\" id=\"myModalLabel\">\n                  <label class=\"rounded\"  style=\"padding: 10px; width: auto ;font-size: 16px;background-color:rgba(17, 17, 227, 0.88); color: white;\">\n                  Ajouter un Justificatif</label></h3>\n                <button mat-button type=\"button\" class=\" btn btn-danger btn-round\" style=\"width: auto\" data-dismiss=\"modal\">\n                  <i class=\"material-icons\">close</i>Fermer\n                </button>\n              </div>\n              <div class=\"modal-header\" *ngIf=\"currentemploye.justificatif\">\n                <h3 class=\"modal-title btn-round\" id=\"myModalLabel\">\n                  <label class=\"rounded\"  style=\"padding: 10px; width: auto ;font-size: 16px;background-color:rgba(17, 17, 227, 0.88); color: white;\">Modifier un Justificatif</label></h3> <br>\n                <button mat-button type=\"button\" class=\" btn btn-danger btn-round\" style=\"width: auto\" data-dismiss=\"modal\">\n                  <i class=\"material-icons\">close</i>\n                  Fermer\n                </button>\n              </div>\n              <form class=\"form-horizontal\">\n\n<!--                <i class=\"material-icons\">-->\n<!--                  backup-->\n<!--                </i>-->\n                <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Click  ici...\n                  <input type=\"file\" (change)=\"editfchierJustificatif($event)\">\n                   <img [src]=\"fichierURL\" height=\" 100\" width=\"100\"  *ngIf=\"fichierURL\" >\n                   <img [src]=\"fichierURL\" height=\" 100\" width=\"100\"  *ngIf=\"currentemploye.justificatif\" >\n<!--                  <img [src]=\"fichierURL\" height=\" 100\" width=\"100\"  *ngIf=\"currentemploye.justificatif == null \" >-->\n<!--                  <img [src]=\"fichierURL\" height=\" 100\" width=\"100\"  *ngIf=\"currentemploye.justificatif != null \" >-->\n                </div>\n                <span> </span>\n\n                <div *ngIf=\"currentemploye.justificatif\" >\n                  <label class=\"rounded\"  style=\"padding: 2px; width: auto ;font-size: 16px;background-color:rgba(17, 17, 227, 0.88); color: white;\">\n                    Le Fichier existe déjà</label>\n                </div>\n\n\n\n\n                <!-- </div> -->\n              </form>\n              <div class=\"modal-footer justify-content-center\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-success btn-round\" (click)=\"ModifierfichierEmploye()\">\n                  <span class=\"btn-label\"  *ngIf=\"!currentemploye.justificatif\">\n                    <i class=\"material-icons\">check</i>\n                    Enregistrer\n                  </span >\n                  <span class=\"btn-label\" *ngIf=\"currentemploye.justificatif\" >\n                    <i class=\"material-icons\">check</i>\n                  Modification\n                  </span ></button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--fin  modif  -->\n        \n\n        <!-- modif photo -->\n        <div class=\"modal fade\" id=\"modiftof\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n          aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-notice \">\n            <div class=\"modal-content\" style=\"width: 500px;\">\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title p-2 rounded\" style=\"background-color:whitesmoke; font-weight: 400;\"\n                  id=\"myModalLabel\">modification du photo</h4>\n                <button mat-button type=\"button\" class=\" btn btn-danger\" data-dismiss=\"modal\">\n                  <i class=\"material-icons\">close</i>Fermer\n                </button>\n              </div>\n              <form class=\"form-horizontal\">\n               \n                <img class=\"rounded-circle col-md-4\" src=\"{{currentemploye.photo}}\"\n                  style=\"height :150px;margin-top: 1cm; margin-left: 160px;\" alt=\"\" *ngIf=\"!imgURL3\">\n                <img class=\"rounded-circle col-md-4\" [src]=\"imgURL3\" *ngIf=\"imgURL3\"\n                  style=\"height :150px;margin-top: 1cm; margin-left: 100px;\">\n                <input type=\"file\" (change)=\"editphoto($event)\">\n                <i class=\"material-icons\">\n                  backup\n                </i>\n\n\n\n                <!-- </div> -->\n              </form>\n              <div class=\"modal-footer justify-content-center\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-success btn-round\" (click)=\"Modifier()\">\n                  <span class=\"btn-label\">\n                    <i class=\"material-icons\">check</i>\n                  </span>Enregistrer</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- fin modif photo -->\n\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-md-12\">\n  <div class=\"card\">\n    <div class=\"card-header card-header-icon\">\n      <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n        <i class=\"material-icons\">list</i>\n      </div>\n      <h4 class=\"text-center p-2\" style=\"background-color:whitesmoke;font-weight: 500; color: black; width: 40%;\">Carnet\n        Familial </h4>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <ul role=\"tablist\" class=\"nav nav-pills nav-pills-rose flex-column\">\n            <li class=\"nav-item\" *ngIf=\"condition!=true\">\n              <a data-toggle=\"tab\" href=\"#link4\" role=\"tablist\" class=\"nav-link active\"> Conjoint(e)\n              </a>\n            </li>\n            <li class=\"nav-item\"><a data-toggle=\"tab\" href=\"#link5\" role=\"tablist\" class=\"nav-link\"> Enfant(s) </a></li>\n            <li class=\"nav-item\"><a data-toggle=\"tab\" href=\"#link6\" role=\"tablist\" class=\"nav-link\" (click)=\"listFacture()\"> Factures </a></li>\n            <li class=\"nav-item\"><a data-toggle=\"tab\" href=\"#link7\" role=\"tablist\" class=\"nav-link\" (click)=\"consulter()\"> Bons </a></li>\n\n          </ul>\n        </div>\n        <div class=\"col-md-8\">\n          <div class=\"tab-content\">\n            <div id=\"link4\" class=\"tab-pane active\">\n              <div class=\"col-md-12\">\n                <div class=\"\">\n\n                  <div class=\"\" *ngIf=\"condition!=true\">\n                    <div class=\"table-responsive\">\n                      <button mat-raised-button type=\"button\" data-toggle=\"modal\" data-target=\"#conjoints\"\n                              *ngIf=\"controlSexe=='' \" class=\"mat-raised-button mat-button-base btn btn-success\"><span\n                              class=\"mat-button-wrapper\"><i class=\"material-icons\">add_circle</i> Ajouter un\n                          conjoint</span>  </button>\n                      <table class=\"table table-hover table-bordered rounded\" style=\"background-color:whitesmoke;\">\n                        <thead>\n                        <tr style=\"background-color:rgb(215, 215, 215);\">\n                          <!-- <th class=\"text-center\">Numero</th> -->\n                          <th style=\"font-weight: 500;\">Nom</th>\n                          <th style=\"font-weight: 500;\">Prenom</th>\n                          <th style=\"font-weight: 500;\">Date de Naissance</th>\n                          <th style=\"font-weight: 500;\">Lieu de Naissance</th>\n                          <th style=\"font-weight: 500;\">Sexe</th>\n                          <th style=\"font-weight: 500;\">Téléphone</th>\n                          <th style=\"font-weight: 500;\">Justificatif</th>\n                          <!--\n                          <th style=\"font-weight: 500;\">Photo</th> -->\n                          <th style=\"font-weight: 500;\" class=\"text-right\">Actions</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr style=\"font-weight: 600;\" class=\"ng-star-inserted\" *ngFor=\" let conjoint of conjoints\">\n                          <!--<td class=\"text-center\">{{conjoint.idconj}}</td>-->\n                          <td>{{conjoint.nom_conjoint}}</td>\n                          <td>{{conjoint.prenom_conjoint}}</td>\n                          <td>{{conjoint.date_naiss_conj | date: 'dd/MM/yyyy'}}</td>\n                          <td>{{conjoint.lieu_naiss_conj}}</td>\n                          <td>{{conjoint.sexe_conjoint}}</td>\n                          <td>{{conjoint.telephone}}</td>\n\n\n                          <!-- <td>\n                            <a *ngIf=\"conjoint.photos!=''\">\n                              <img class=\"rounded-circle\" src=\"{{conjoint.photos}}\" style=\"height :100px;\" alt=\"\"></a>\n                            <a *ngIf=\"conjoint.photos==''\"><img class=\"card-img-top img-responsive\"\n                                src=\"/assets/img/angular2-logo-white.png\" style=\"height :100px;\" alt=\"\"></a>\n                          </td> -->\n                          <td>\n                            <div>\n<!--                            <a target=\"_blank\" href=\"{{chemintelechargementFichier}}{{attestationDeChomage}}\">-->\n<!--                              <span>{{attestationDeChomage}}</span>-->\n<!--                            </a>-->\n                              <a target=\"_blank\" href=\"{{chemintelechargementFichier}}{{pdfSrcCerti}}\">\n                                <span>{{pdfSrcCerti}}</span>\n                              </a>\n                            </div>\n<!--                            <button mat-raised-button style=\"margin:2px;\" type=\"button\" class=\"btn btn-info\">-->\n<!--                              <i class=\"material-icons\"-->\n<!--                                 [routerLink]=\"['/gestion-employes/PdfViewer/'+conjoint.idconj]\">visibility</i>-->\n<!--                            </button>-->\n                          </td>\n                            <td class=\"td-actions text-right\">\n                              <button mat-raised-button=\"button\" type=\"button\"\n                                class=\"mat-raised-button mat-button-base btn btn-warning\"><span\n                                  class=\"mat-button-wrapper\">\n                                  <i class=\"material-icons\" data-toggle=\"modal\" data-target=\"#conjointss\"\n                                    (click)=\"getConjointByIdsansPhoto(conjoint)\">edit</i></span>\n                                <div matripple=\"\" class=\"mat-ripple mat-button-ripple\"></div>\n                                <div class=\"mat-button-focus-overlay\"></div>\n                              </button>\n                              <button mat-raised-button=\"\" type=\"button\" class=\"btn btn-info\"><span\n                                  class=\"mat-button-wrapper\"><i class=\"material-icons\"\n                                    (click)=\"getConjointById(conjoint)\" data-toggle=\"modal\"\n                                    data-target=\"#detailModalConjoints\">person</i></span>\n                                <div matripple=\"\" class=\"mat-ripple mat-button-ripple\"></div>\n                                <div class=\"mat-button-focus-overlay\"></div>\n                              </button>\n                            </td>\n                          </tr>\n                          <!--Modification Nouveau Conjoint-->\n                          <div class=\"modal fade\" id=\"conjointss\" tabindex=\"-1\" role=\"dialog\"\n                            aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                            <div class=\"modal-dialog modal-notice \">\n                              <div class=\"modal-content\" style=\"width: 700px;\">\n                                <div class=\"modal-header\">\n<!--                                  <h4 class=\"modal-title p-2 rounded\"-->\n<!--                                    style=\"background-color:whitesmoke; font-weight: 400;\" id=\"myModalLabel\">-->\n<!--&lt;!&ndash;                                    Modification de Conjoint</h4>-->\n                                  <h2 style=\"background-color:#0d47a1;color: white;border-radius: inherit; font-weight: 400;\" id=\"myModalLabel\"> Modification de Conjoint</h2>\n\n                                  <button mat-button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n                                    aria-hidden=\"true\">\n                                    <i class=\"material-icons\">close</i>\n                                  </button>\n                                </div>\n                                <hr>\n                                <form class=\"form-horizontal\">\n\n                                  <div class=\"form-group row card-header\">\n\n                                    <div class=\"col-md-4 form-group\">\n                                      <label>Nom Conjoint(e)</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"nom_conjoint\"\n                                        [(ngModel)]=\"nom_conjoint\" name=\"nom_conjoint\">\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                      <label>Prenom Conjoint(e)</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"prenom_conjoint\"\n                                        [(ngModel)]=\"prenom_conjoint\" name=\"prenom_conjoint\">\n                                    </div>\n\n                                    <div class=\"col-md-4 form-group\" style=\"margin-top: 0px;\">\n                                      <mat-form-field>\n                                        <label>Choissir le sexe</label>\n                                        <mat-select name=\"sexe\" id=\"sexe\" [(ngModel)]=\"sexe_conjoint\">\n                                          <mat-option *ngFor=\"let sex of sexe\" [value]=\"sex.value\">\n                                            {{ sex.value }}\n                                          </mat-option>\n                                        </mat-select>\n                                      </mat-form-field>\n                                    </div>\n\n                                    <div class=\"col-md-4 form-group\">\n                                      <label>Date Naissance</label><br>\n                                      <input type=\"date\" class=\"form-control\" id=\"date_naiss_conj\"\n                                        [(ngModel)]=\"date_naiss_conj\" name=\"date_naiss_conj\">\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                      <label>Lieu Naissance</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"lieu_naiss_conj\"\n                                        [(ngModel)]=\"lieu_naiss_conj\" name=\"lieu_naiss_conj\">\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                      <label>Téléphone</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"telephone\" [(ngModel)]=\"telephone\"\n                                        name=\"telephone\">\n                                    </div>\n                                  <div class=\"container\">\n                                    <div class=\"row\">\n                                     <div class=\"col-md-3 btn btn-file\"> Changer Photo\n                                      <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"getFile($event)\">\n                                      <img [src]=\"imgURL\" height=\" 100\" width=\"100\" *ngIf=\"imgURL\" data-toggle=\"modal\"\n                                        data-target=\"#noticeModal1\">\n                                    </div>\n                                    <div class=\"col-md-3 btn btn-file\"   style=\"margin-left:30px ;\">Certificat de mariage\n                                      <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectCertificat($event)\">\n                                      <img [src]=\"CertifURL\" height=\" 100\" width=\"100\"  data-toggle=\"modal\" data-target=\"#noticeModal\">\n                                      <span> </span>\n\n                                    </div>\n                                    <div class=\"col-md-3 btn btn-file\"  *ngIf=\"genreEmp\" style=\"margin-left:60% ;margin-inline: auto\" [formGroup]=\"FormControlEmpployes\">\n                                      Joindre Attestation de chomage\n                                      <input type=\"file\"  formControlName=\"AttestationChomageURL\" (change)=\"selectAttestationChomage($event);\">\n                                      <img [src]=\"AttestationChomageURL\" height=\" 100\" width=\"100\" >\n                                      <span> </span>\n\n                                    </div>\n\n                                    </div>\n                                  </div>\n\n                                    <div>\n                                      <h4>{{message}} </h4>\n                                    </div>\n                                  </div>\n                                </form>\n                                <div class=\"modal-footer justify-content-center\">\n                                  <button mat-raised-button type=\"button\" class=\"btn btn-success btn-round\"\n                                    data-dismiss=\"modal\" (click)=\"ModifConjointNow()\">\n                                    modifier</button>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <!--Ajouter Nouveau Conjoints-->\n                        <div class=\"modal fade\" id=\"conjoints\" tabindex=\"-1\" role=\"dialog\"\n                             aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                          <div class=\"modal-dialog modal-notice \">\n                            <div class=\"modal-content\" style=\"width: 700px;\">\n                              <div class=\"modal-header\">\n<!--                                <h2 style=\"background-color:whitesmoke; font-weight: 400;\" id=\"myModalLabel\">Ajout de Conjoint(s)</h2>-->\n                                <h2 style=\"background-color:#0d47a1;color: white;border-radius: inherit; font-weight: 400;\" id=\"myModalLabel\">\n                                  Ajout de Conjoint(s)</h2>\n\n                                <span> </span>\n                                <button mat-button type=\"button\" class=\" btn btn-danger  rounded\" data-dismiss=\"modal\">\n                                  <i class=\"material-icons\">close</i>Fermer\n\n                                </button>\n                              </div>\n                              <form class=\"form-horizontal\" >\n                                <div class=\"form-group row card-header\" >\n\n                                  <div class=\"col-md-4 \" [formGroup]=\"FormControlEmpployes\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <libelle> Nom Conjoint(e)<span style=\"color: red\">*</span></libelle>\n                                      <input matInput type=\"text\"  id=\"nom_conjoint\"\n                                             [(ngModel)]=\"nom_conjoint\" formControlName=\"nom_conjoint\" >\n\n<!--                                      <mat-error *ngIf=\"FormControlEmpployes.controls['nom_conjoint'].hasError('required')\">-->\n<!--                                        Nom Conjoint(e)<strong>Obligatoire</strong>-->\n<!--                                      </mat-error>-->\n                                    </mat-form-field>\n                                  </div>\n                                  <div class=\"col-md-4\" [formGroup]=\"FormControlEmpployes\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <libelle> Prenom Conjoint(e)<span style=\"color: red\">*</span></libelle>\n                                      <input matInput type=\"text\"\n                                             id=\"prenom_conjoint\" [(ngModel)]=\"prenom_conjoint\" formControlName=\"prenom_conjoint\">\n<!--                                      <mat-error *ngIf=\"FormControlEmpployes.controls['prenom_conjoint'].hasError('required')\">-->\n<!--                                        Prenom Conjoint(e)<strong>Obligatoire</strong>-->\n<!--                                      </mat-error>-->\n                                    </mat-form-field>\n                                  </div>\n\n                                  <div  class=\"col-md-4 \" style=\"margin-top: 0px;\" [formGroup]=\"FormControlEmpployes\">\n                                    <mat-form-field>\n                                      <libelle> Choissir le sexe<span style=\"color: red\">*</span></libelle>\n                                      <mat-select  formControlName=\"sexee\"  class=\"form-control\" [(ngModel)]=\"sexChoisi\">\n                                        <mat-option *ngFor=\"let sex of sexe\" [value]=\"sex.value\"\n                                                    (click)=\"sexeEnfant(sex)\">\n                                          {{ sex.value }}\n                                        </mat-option>\n                                      </mat-select>\n<!--                                      <mat-error *ngIf=\"FormControlEmpployes.controls['sexee'].hasError('required')\">-->\n<!--                                        Sexe Conjoint(e)<strong>Obligatoire</strong>-->\n<!--                                      </mat-error>-->\n                                    </mat-form-field>\n                                  </div>\n\n                                  <div class=\"col-md-4 form-group\" [formGroup]=\"FormControlEmpployes\">\n\n                                    <!-- <input type=\"date\" class=\"form-control\" id=\"date_naiss_conj\"\n                           [(ngModel)]=\"conjoint.date_naiss_conj\" name=\"date_naiss_conj\">  -->\n                                    <mat-form-field>\n                                      <libelle> Date de naissance<span style=\"color: red\">*</span></libelle>\n                                      <input matInput [matDatepicker]=\"picker\" (click)=\"picker.open()\"\n                                             id=\"date_naiss_conj\"  id=\"date_naiss_conj\"\n                                             [(ngModel)]=\"date_naiss_conj\" formControlName=\"date_naiss_conj\">\n                                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                      <mat-datepicker #picker startView=\"year\"></mat-datepicker>\n<!--                                      <mat-error *ngIf=\"FormControlEmpployes.controls['date_naiss_conj'].hasError('required')\">-->\n<!--                                        Date de naiss... Conjoint(e)<strong>Obligatoire</strong>-->\n<!--                                      </mat-error>-->\n                                    </mat-form-field>\n                                  </div>\n                                  <div class=\"col-md-4 form-group\" [formGroup]=\"FormControlEmpployes\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <libelle> lieu de naissance<span style=\"color: red\">*</span></libelle>\n                                      <input matInput type=\"text\"  id=\"lieu_naiss_conj\"\n                                             [(ngModel)]=\"lieu_naiss_conj\" formControlName=\"lieu_naiss_conj\">\n<!--                                      <mat-error *ngIf=\"FormControlEmpployes.controls['lieu_naiss_conj'].hasError('required')\">-->\n<!--                                        Lieu de naiss... Conjoint(e)<strong>Obligatoire</strong>-->\n<!--                                      </mat-error>-->\n                                    </mat-form-field>\n                                  </div>\n                                  <div class=\"col-md-4 form-group\" [formGroup]=\"FormControlEmpployes\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <libelle>Téléphone</libelle>\n                                      <input matInput type=\"text\"  id=\"telephone\"\n                                             [(ngModel)]=\"telephone\" formControlName=\"telephone\">\n                                    </mat-form-field>\n                                  </div>\n                                  <div class=\"col-md-3 btn btn-file\" [formGroup]=\"FormControlEmpployes\"> Changer Photo\n                                    <input type=\"file\" formControlName=\"image\" (change)=\"getFile($event)\">\n                                    <img [src]=\"imgURL\" height=\" 100\" width=\"100\" *ngIf=\"imgURL\">\n                                  </div>\n                                  <div class=\"col-md-3 btn btn-file\" style=\"margin-left:30px ;\" [formGroup]=\"FormControlEmpployes\">\n                                    <libelle> Joindre Certificat de mariage</libelle>\n\n                                    <input type=\"file\"  formControlName=\"selectCertif\" (change)=\"selectCertificat($event);\">\n                                    <img [src]=\"CertifURL\" height=\" 100\" width=\"100\" *ngIf=\"CertifURL\" >\n                                  </div>\n                                  <div>\n                                    <span style=\"color: red\">*</span>\n<!--                                  <i class=\"text-danger\" style=\"font-size: small\"-->\n<!--                                        *ngIf=\"FormControlEmpployes.controls['selectCertif'].touched-->\n<!--                                      && FormControlEmpployes.controls['selectCertif'].errors-->\n<!--                                      && FormControlEmpployes.controls['selectCertif'].errors!['required']\">-->\n<!--                                      Certificat de mariage <strong> obligatoire</strong>-->\n<!--                                    </i>-->\n                                  </div>\n                                  <div class=\"col-md-3 btn btn-file\" *ngIf=\"genreEmp\" style=\"margin-left:60% ;margin-inline: auto\" [formGroup]=\"FormControlEmpployes\">\n                                    Joindre Attestation de chomage\n                                    <input type=\"file\"  formControlName=\"AttestationChomageURL\" (change)=\"selectAttestationChomage($event);\">\n                                    <img [src]=\"AttestationChomageURL\" height=\" 100\" width=\"100\" *ngIf=\"AttestationChomageURL\" >\n                                    <span> </span>\n                                    <a target=\"_blank\" href=\"{{chemintelechargementFichier}}{{attestationDeChomage}}\">\n                                      <span>{{attestationDeChomage}}</span>\n                                    </a>\n                                  </div>\n                                  <span style=\"color: red; margin-right: 17%\">*</span>\n<!--                                  <span class=\"text-danger\" style=\"margin-right:70%\"-->\n<!--                                        *ngIf=\"FormControlEmpployes.controls['AttestationChomageURL'].touched-->\n<!--                                      && FormControlEmpployes.controls['AttestationChomageURL'].errors-->\n<!--                                      && FormControlEmpployes.controls['AttestationChomageURL'].errors!['required']\">-->\n<!--                                    Certificat de chomage <strong> obligatoire</strong>-->\n<!--                                    </span>-->\n\n\n                                  <div class=\"modal-footer justify-content-center\">\n                                    <button mat-raised-button type=\"button\" [disabled]=\"! FormControlEmpployes.valid\" class=\"btn btn-success btn-round\"\n                                            (click)=\"ConjointNow();form.resetForm()\" data-dismiss=\"modal\">\n                                      Enregistrer</button>\n                                  </div>\n\n                                  <span style=\"color: red;margin-left:65%\">les champs avec * sont  <strong> obligatoires</strong></span>\n\n                                </div>\n\n\n                              </form>\n\n\n                              </div>\n                            </div>\n                          </div>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"link5\" class=\"tab-pane\">\n              <div class=\"col-md-12\">\n                <div class=\"\">\n                  <div class=\"\">\n                    <div class=\"table-responsive\">\n                      <button mat-raised-button type=\"button\" data-toggle=\"modal\" data-target=\"#enfants\"\n                        class=\"mat-raised-button mat-button-base btn btn-success\"><span class=\"mat-button-wrapper\"><i\n                            class=\"material-icons\">add_circle</i> Ajouter un enfant</span></button>\n                      <table class=\"table table-bordered\">\n                        <thead>\n                          <tr style=\"background-color:#d5d5d5 ;\">\n                            <!-- <th class=\"text-center\">#</th> -->\n                            <th style=\"font-weight: 500;\">Age</th>\n                            <th style=\"font-weight: 500;\">Nom </th>\n                            <th style=\"font-weight: 500;\">Prenom </th>\n                            <th style=\"font-weight: 500;\">Date de Naissance</th>\n                            <th style=\"font-weight: 500;\">Lieu de Naissance</th>\n                            <th style=\"font-weight: 500;\">Sexe</th>\n                            <th style=\"font-weight: 500;\">Justificatif</th>\n                            <!-- <th style=\"font-weight: 500;\">Photo</th> -->\n                            <th style=\"font-weight: 500;\" class=\"text-right\">Actions</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr class=\"ng-star-inserted\" *ngFor=\" let enfant of enfants\"\n                            style=\"font-weight: 500; text-align: center;\">\n                            <!-- <td class=\"text-center\">1</td>-->\n                            <td class=\"text-center\">\n                              <span *ngIf=\"enfant.active==''\" class=\"badge badge-danger\">{{enfant.agenfant}}</span>\n                              <span *ngIf=\"enfant.active!=''\" class=\"badge badge-success\">{{enfant.agenfant}}</span>\n                            </td>\n                            <td>{{enfant.nom_enfant}}</td>\n                            <td>{{enfant.prenom_enfant}}</td>\n                            <td>{{enfant.date_nais_enfant | date: 'dd/MM/yyyy'}}</td>\n                            <!-- <td>{{this.agenfant}}</td> -->\n                            <td>{{enfant.lieu_nais_enfant}}</td>\n                            <!-- <td>{{enfant.adresse}}</td> -->\n                            <td>{{enfant.sexe_enfant}}</td>\n                            <td>\n                              <div>\n                                <!--                            <a target=\"_blank\" href=\"{{chemintelechargementFichier}}{{attestationDeChomage}}\">-->\n                                <!--                              <span>{{attestationDeChomage}}</span>-->\n                                <!--                            </a>-->\n                                <a target=\"_blank\" href=\"{{chemintelechargementFichier}}{{pdfSrcExtr}}\">\n                                  <span>{{pdfSrcExtr}}</span>\n                                </a>\n                              </div>\n                              <!--                            <button mat-raised-button style=\"margin:2px;\" type=\"button\" class=\"btn btn-info\">-->\n                              <!--                              <i class=\"material-icons\"-->\n                              <!--                                 [routerLink]=\"['/gestion-employes/PdfViewer/'+conjoint.idconj]\">visibility</i>-->\n                              <!--                            </button>-->\n                            </td>\n                            <!-- <td rowspan=\"3\"><a *ngIf=\"enfant.chemin!=''\"><img class=\"rounded-circle\"\n                                  src=\"{{enfant.chemin}}\" style=\"height :100px;\" alt=\"\">\n                              </a>\n                              <a *ngIf=\"enfant.chemin==''\"><img class=\"card-img-top img-responsive\"\n                                  src=\"/assets/img/angular2-logo-white.png\" style=\"height :100px;\" alt=\"\"></a>\n                            </td> -->\n                            <td class=\"td-actions text-right\">\n                              <button mat-raised-button=\"\" type=\"button\"\n                                class=\"mat-raised-button mat-button-base btn btn-warning\" data-toggle=\"modal\"\n                                data-target=\"#enfantss\"><span class=\"mat-button-wrapper\"><i class=\"material-icons\"\n                                    (click)=\"getEnfantById(enfant)\">edit</i></span>\n                                <div matripple=\"\" class=\"mat-ripple mat-button-ripple\"></div>\n                                <div class=\"mat-button-focus-overlay\"></div>\n                              </button>\n                              <button mat-raised-button=\"\" type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\"\n                                data-target=\"#moadalphoto\" (click)=\"getEnfantbyPhoto(enfant)\"><span\n                                  class=\"mat-button-wrapper\"><i class=\"material-icons\">person</i></span>\n                                <div matripple=\"\" class=\"mat-ripple mat-button-ripple\"></div>\n                                <div class=\"mat-button-focus-overlay\"></div>\n                              </button>\n                            </td>\n                          </tr>\n                          <!--Ajouter de Nouvel Enfant-->\n                          <div class=\"modal fade\" id=\"enfantss\" tabindex=\"-1\" role=\"dialog\"\n                            aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                            <div class=\"modal-dialog modal-notice \">\n                              <div class=\"modal-content\" style=\"width: 700px;\">\n                                <div class=\"modal-header\">\n<!--                                  <h4 class=\"modal-title rounded p-2\"-->\n<!--                                    style=\"background-color:whitesmoke; font-weight: 400;\" id=\"myModalLabel\">-->\n<!--                                    Modification des enfants</h4>-->\n                                  <h2 style=\"background-color:#0d47a1;color: white;border-radius: inherit; font-weight: 400;\" id=\"myModalLabel\">Modifier un Enfant</h2>\n                                  <button mat-button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n                                    aria-hidden=\"true\">\n                                    <i class=\"material-icons\">close</i>\n                                  </button>\n                                </div>\n                                <form class=\"form-horizontal\">\n\n                                  <div class=\"form-group row card-header\">\n\n                                    <div class=\"col-md-4 form-group\">\n                                      <label>Nom Enfant</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"nom_enfant\" [(ngModel)]=\"nom_enfant\"\n                                        name=\"nom_enfant\">\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                      <label>Prenom Enfant</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"prenom_enfant\"\n                                        [(ngModel)]=\"prenom_enfant\" name=\"prenom_enfant\">\n                                    </div>\n                                    <div class=\"col-md-4 form-group\" style=\"margin-top: 20px;\">\n                                      <mat-form-field>\n                                        <mat-select placeholder=\"Choissir le sexe\" name=\"sexe\" class=\"form-control\"\n                                          id=\"sexe\" [(ngModel)]=\"sexe_enfant\">\n                                          <mat-option *ngFor=\"let sex of sexe\" [value]=\"sex.value\">\n                                            {{ sex.value }}\n                                          </mat-option>\n                                        </mat-select>\n                                      </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-4 form-group\" style=\"margin-top: 5px;\">\n                                      <label>Date Naissance </label><br>\n\n\n                                      <input type=\"date\" class=\"form-control\" id=\"date_nais_enfant\"\n                                        [(ngModel)]=\"date_nais_enfant\" name=\"date_nais_enfant\">\n                                    </div>\n                                    <div class=\"col-md-4 form-group\" style=\"margin-top: 25px;\">\n                                      <label>Lieu Naissance </label>\n                                      <input type=\"text\" class=\"form-control\" id=\"lieu_nais_enfant\"\n                                        [(ngModel)]=\"lieu_nais_enfant\" name=\"lieu_nais_enfant\">\n                                    </div>\n                                    <div class=\"col-md-4 form-group\" style=\"margin-top: 25px;\">\n                                      <label>Adresse</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"adresse\" [(ngModel)]=\"adresse\"\n                                        name=\"adresse\">\n                                    </div>\n\n\n                                    <!-- <div class=\"col-md-4 form-group\">\n                                      <mat-option>Choisir le Sexe\n                                        <select class=\"form-control\" id=\"sexe_enfant\" [(ngModel)]=\"enfant.sexe_enfant\"\n                                          name=\"sexe_enfant\">\n                                          <option value=\"masculin\">Masculin</option>\n                                          <option value=\"feminin\">Feminin</option>\n                                        </select>\n                                      </mat-option>\n                                    </div> -->\n\n                                     <div class=\"col-md-4 btn btn-file\">Choisir Photo\n\n                                      <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"getFile($event)\">\n                                      <img [src]=\"imgURL\" *ngIf=\"imgURL\" height=\" 100\" width=\"100\">\n                                      <a *ngIf=\"imgEnfant\"><img class=\"rounded-circle\" src=\"{{imgEnfant}}\"\n                                            style=\"height :100px;\" alt=\"\"></a>\n\n                                    </div>\n                                    <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Extrait de naissance\n                                      <input type=\"file\" class=\"form-control\" name=\"image\"\n                                        (change)=\"selctExtrait($event)\">\n                                      <img [src]=\"ExtraitURL\" height=\" 100\" width=\"100\" >\n\n                                    </div>\n                                    <!-- <div class=\"row\">\n                                  <label>Joindre acte de Naissance</label>\n                                    <input type=\"file\" class=\"form-control\"  name=\"image\" (change)=\"getFile($event)\" >\n                                </div> -->\n                                    <div>\n                                      <h4>{{message}} </h4>\n                                    </div>\n                                  </div>\n                                </form>\n                                <div class=\"modal-footer justify-content-center\">\n                                  <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\"\n                                    (click)=\"modifEnfant()\" data-dismiss=\"modal\">Modification</button>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <!--Ajouter de Nouvel Enfant-->\n                          <div class=\"modal fade\" id=\"enfants\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                            <div class=\"modal-dialog modal-notice \">\n                              <div class=\"modal-content\" style=\"width: 700px;\">\n                                <div class=\"modal-header\">\n<!--                                  <h4 class=\"modal-title rounded p-2\"-->\n<!--                                    style=\"background-color:whitesmoke; font-weight: 400;\" id=\"myModalLabel\">Ajout-->\n<!--                                    d'Enfant(s)</h4>-->\n                                  <h2 style=\"background-color:#0d47a1;color: white;border-radius: inherit; font-weight: 400;\" id=\"myModalLabel\">Ajout\n                                    d'Enfant(s)</h2>\n                                  <button mat-button type=\"button\" class=\" btn btn-danger\" data-dismiss=\"modal\"\n                                    aria-hidden=\"true\">\n                                    <i class=\"material-icons\" style=\"color:red\">close</i>Fermer\n                                  </button>\n                                </div>\n                                <form class=\"form-horizontal\">\n                                  <input type=\"hidden\" class=\"form-control\">\n                                  <div class=\"form-group row card-header\">\n\n                                    <div class=\"col-md-4 form-group\" [formGroup]=\"FormControlEnfant\" >\n                                      <label>Nom Enfant  <span style=\"color: red\">*</span></label>\n                                      <input type=\"text\" class=\"form-control\" id=\"nom_enfant\"\n                                        [(ngModel)]=\"nom_enfant\" formControlName=\"nom_enfant\">\n                                      <span class=\"text-danger\"\n                                            *ngIf=\"FormControlEnfant.controls['nom_enfant'].touched\n                                          && FormControlEnfant.controls['nom_enfant'].errors\n                                          && FormControlEnfant.controls['nom_enfant'].errors!['required']\">\n                                        Nom Enfant <strong>obligatoire</strong>\n                                        </span>\n                                    </div>\n\n                                    <div class=\"col-md-4 form-group\" [formGroup]=\"FormControlEnfant\">\n                                      <label>Prenom Enfant  <span style=\"color: red\"> *</span></label>\n                                      <input type=\"text\" class=\"form-control\" id=\"prenom_enfant\"\n                                        [(ngModel)]=\"prenom_enfant\" formControlName=\"prenom_enfant\">\n                                      <span class=\"text-danger\"\n                                         *ngIf=\"FormControlEnfant.controls['prenom_enfant'].touched\n                                          && FormControlEnfant.controls['prenom_enfant'].errors\n                                          && FormControlEnfant.controls['prenom_enfant'].errors!['required']\">\n                                        Nom Enfant <strong>obligatoire</strong>\n                                      </span>\n\n                                    </div>\n                                    <div class=\"col-md-4 form-group\" [formGroup]=\"FormControlEnfant\">\n                                      <label>Date Naissance  <span style=\"color: red\">*</span></label>\n                                      <!-- <input type=\"date\" class=\"form-control\" id=\"date_nais_enfant\"\n                                        [(ngModel)]=\"enfant.date_nais_enfant\" name=\"date_nais_enfant\"> -->\n                                      <mat-form-field>\n                                        <input matInput [matDatepicker]=\"picker1\" (click)=\"picker1.open()\"\n                                          id=\"date_nais_enfant\" placeholder=\"Date Naissance\"\n                                          [(ngModel)]=\"date_nais_enfant\" formControlName=\"date_nais_enfant\">\n                                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                        <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\n\n                                      </mat-form-field>\n<!--                                      <i class=\"text-danger\"-->\n<!--                                         *ngIf=\"FormControlEnfant.controls['date_nais_enfant'].touched-->\n<!--                                          && FormControlEnfant.controls['date_nais_enfant'].errors-->\n<!--                                          && FormControlEnfant.controls['date_nais_enfant'].errors!['required']\">-->\n<!--                                        Nom Enfant <strong>obligatoire</strong>-->\n<!--                                      </i>-->\n                                    </div>\n                                    <div class=\"col-md-4 form-group\" [formGroup]=\"FormControlEnfant\">\n                                      <label>Lieu Naissance  <span style=\"color: red\">*</span></label>\n                                      <input type=\"text\" class=\"form-control\" id=\"lieu_nais_enfant\"\n                                        [(ngModel)]=\"lieu_nais_enfant\" formControlName=\"lieu_nais_enfant\">\n                                      <span class=\"text-danger\"\n                                        *ngIf=\"FormControlEnfant.controls['lieu_nais_enfant'].touched\n                                        && FormControlEnfant.controls['lieu_nais_enfant'].errors\n                                        && FormControlEnfant.controls['lieu_nais_enfant'].errors!['required']\">\n                                        Lieu de naiss.. Enfant <strong>obligatoire</strong>\n                                        </span>\n                                    </div>\n                                    <div class=\"col-md-4 form-group\" [formGroup]=\"FormControlEnfant\">\n                                      <label>Adresse <span style=\"color: red\">*</span></label>\n                                      <input type=\"text\" class=\"form-control\" id=\"adresse\" [(ngModel)]=\"adresse\" formControlName=\"adresse\">\n                                      <span class=\"text-danger\"\n                                        *ngIf=\"FormControlEnfant.controls['adresse'].touched\n                                        && FormControlEnfant.controls['adresse'].errors\n                                        && FormControlEnfant.controls['adresse'].errors!['required']\">\n                                        Adresse Enfant <strong>obligatoire</strong>\n                                      </span>\n                                    </div>\n\n\n                                    <div [formGroup]=\"FormControlEnfant\" class=\"col-md-4 form-group\" style=\"margin-top: 20px;\">\n                                      <span style=\"color: red\">*</span>\n                                      <mat-form-field>\n                                        <mat-select placeholder=\"Choissir le sexM\" formControlName=\"sexM\" class=\"form-control\"\n                                          id=\"sexM\" [(ngModel)]=\"sexM\">\n                                          <mat-option *ngFor=\"let sex of sexe\" [value]=\"sex.value\"\n                                            (click)=\"sexeEnfant(sex) \">\n\n                                            {{ sex.value }}\n                                          </mat-option>\n                                        </mat-select>\n                                      </mat-form-field>\n                                    </div>\n\n                                    <div class=\"col-md-4 btn btn-file\" [formGroup]=\"FormControlEnfant\">Choisir Photo\n\n                                      <input type=\"file\" class=\"form-control\" formControlName=\"image\" (change)=\"getFile($event)\">\n                                      <img [src]=\"imgURL\" height=\" 100\" width=\"100\" *ngIf=\"imgURL\">\n\n                                    </div>\n\n                                    <div class=\"col-md-4 btn btn-file\" [formGroup]=\"FormControlEnfant\" style=\"margin-left:30% ;\">extrait de Naissance\n                                      <input type=\"file\" class=\"form-control\" formControlName =\"file\"\n                                        (change)=\"selctExtrait($event)\" accept=\".PNG ,.jpeg, .jpg,.pdf,.doc,.docx\">\n                                      <img [src]=\"ExtraitURL\" height=\" 100\" width=\"100\" *ngIf=\"ExtraitURL\">\n                                    </div>\n                                     <span style=\"color: red\">*</span>\n                                    <div>\n                                      <h4>{{message}} </h4>\n                                    </div>\n                                  </div>\n                                </form>\n                                <div class=\"modal-footer justify-content-center\">\n                                  <button mat-raised-button [disabled]=\"! FormControlEnfant.valid\" type=\"button\" class=\"btn btn-success btn-round\"\n                                    (click)=\"EnfantNow()\" data-dismiss=\"modal\">\n                                    <i class=\"material-icons\">check</i> Enregistrer</button>\n                                </div>\n                                <span style=\"color: red;margin-left:65%\">les champs avec * sont  <strong> obligatoires</strong></span>\n\n                              </div>\n                            </div>\n                          </div>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- table facture -->\n            <div id=\"link6\" class=\"tab-pane\">\n              <div class=\"col-md-12\">\n                <div class=\"\">\n\n                  <div class=\"\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table table-hover table-bordered\">\n                        <thead>\n                          <tr style=\"background-color:#d5d5d5 ;\">\n        \n                          <th style=\"font-weight: 500;\" cope=\"col\">Facture</th>\n                          <th style=\"font-weight: 500;\" cope=\"col\">Prestation</th>\n                          <th style=\"font-weight: 500;\" cope=\"col\">Date</th>\n                          <th style=\"font-weight: 500;\" cope=\"col\">Taux</th>\n                          \n                          <th style=\"font-weight: 500;\" cope=\"col\">Montant total</th>\n                          <th style=\"font-weight: 500;\" cope=\"col\">Part Patient</th>\n                          <th style=\"font-weight: 500;\" cope=\"col\">Part IPM</th>\n                        </tr>\n                          \n        \n                        </thead>\n                        <tbody>\n                          <tr  style=\"font-weight: 500; text-align: center;\" *ngFor=\"let element of listFactures\">\n                            <td><b>{{element.ipmFacture.numerofacture}}</b></td>\n                          \n                            <td><b>{{element.ipm_prestation.libelle}}</b></td>\n                            <td><b>{{element.datePrestation}}</b></td>\n                            <td><b>{{element.taux_ipm}}</b></td>\n                            <td><b>{{element.montant_facture}}</b></td>\n                            <td><b>{{element.part_patient}}</b></td>\n                            <td><b>{{element.part_ipm}}</b></td>\n                           \n                            \n        \n                            \n                            \n                            \n        \n        \n                          </tr>\n                        </tbody>\n                        <tfoot style=\"font-weight:bold;\">\n                          <tr style=\"font-weight: 500; text-align: center;\">\n                            \n        \n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td>Total</td>\n                            <td>{{montant}} </td>\n                            <td>{{partIpm}} </td>\n                            <td>{{partPatient}}</td>\n                            <td></td>\n        \n                          </tr>\n                        </tfoot>\n        \n                      </table>\n                      \n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            \n            <!-- table bons -->\n            <div id=\"link7\" class=\"tab-pane\">\n              <div class=\"col-md-12\">\n                <div class=\"\">\n\n                  <div class=\"\">\n                    <span class=\"badge badge-success\" style=\"font-size: 15px;\">Nombre de Bon:{{nombre}}</span>\n                    <div class=\"table-responsive\">\n                      <table class=\"table table-hover table-bordered\">\n                        <thead style=\"background-color: #0d47a1; color: white\">\n                        <tr>\n                          <th cope=\"col\">Numero Bon</th>\n                          <th cope=\"col\">Type de Bon</th>\n                          <th cope=\"col\">Prestataire</th>\n                          <th cope=\"col\">Ordonnance</th>\n                          <th cope=\"col\">Date</th>\n\n                        </tr>\n\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let element of currentBon\">\n                            <td><b>{{element.numeroBon}}</b></td>\n                            <td><b>{{element.decriminatorValue}}</b></td>\n                            <td><b>{{element.ipm_prestataire?.nom_prestataire}}</b></td>\n                            <td><b>{{element.ordonnance}}</b></td>\n                            <td><b>{{element.dateEtablissement | date:'dd/MM/yy'}}</b></td>\n                          \n                           \n                            \n        \n                            \n                            \n                            \n        \n        \n                          </tr>\n                        </tbody>\n                        <tfoot style=\"font-weight:bold;\">\n                          <tr>\n                            \n        \n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <!-- <td>Total</td>\n                            <td>{{montant}} </td>\n                            <td>{{partIpm}} </td>\n                            <td>{{partPatient}}</td> -->\n                            <td></td>\n        \n                          </tr>\n                        </tfoot>\n        \n                      </table>\n                      \n\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!----------Fin table Bon -->\n\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- <div class=\"modal-footer justify-content-center\">\n      <button mat-raised-button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#bonempl\" style=\"width: 100px;;\" (click)=\"consulter()\"><i\n        class=\"material-icons\">person_pin</i> Bons\n    </button>\n    </div> -->\n    <button mat-raised-button class=\"btn btn-danger\" style=\"width: 100px;\" (click)=\"retourner()\"><i\n        class=\"material-icons\">arrow_back</i> retour\n    </button>\n\n  </div>\n</div>\n<ng-template #test>\n  <button mat-raised-button class=\"btn btn-danger\" style=\"width: 100px;\" (click)=\"retourner()\"><i\n      class=\"material-icons\">arrow_back</i> retour\n  </button>\n</ng-template>\n<!---->\n<div class=\"modal fade\" id=\"noticeM\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal tof</h4>\n        <button mat-button type=\"button\" class=\"close btn-danger\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"material-icons\">clear</i>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <a [src]=\"CertifURL\" height=\" 100\" width=\"100\" *ngIf=\"CertifURL\"></a>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"noticeModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal tof</h4>\n        <button mat-button type=\"button\" class=\"close btn-danger\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"material-icons\">clear</i>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <img [src]=\"imgURL\" height=\"100%\" width=\"100%\" *ngIf=\"imgURL\">\n\n      </div>\n\n    </div>\n  </div>\n</div>\n<!----------------Modal Conjoints Details-->\n<div class=\"modal fade col-md-12\" id=\"detailModalConjoints\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog  modal-notice\">\n    <div class=\"modal-content \" style=\"width: 700px;\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal tof</h4>\n        <button mat-button type=\"button\" class=\"close btn-danger\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"material-icons\">clear</i>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row p-4 rounded shadow\" style=\"background-color: whitesmoke;width:66%;margin: 0 auto;\">\n\n          <div class=\"col-md-4\">\n            <img class=\"rounded-circle \" src=\"{{currentconjoint.photos}}\" style=\"height :150px;margin-top: 1cm  ;\"\n              *ngIf=\"!imgURL4\" alt=\"\">\n            <img class=\"rounded-circle \" src=\"{{imgURL4}}\" *ngIf=\"imgURL4\" style=\"height :150px;margin-top: 1cm  ;\"\n              alt=\"\">\n          </div>\n          <h4 style=\"color:black;\">Modifier la photo</h4>\n          <div class=\"row\">\n            <button mat-button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" *ngIf=\"imgURL4\"\n              (click)=\"modifierPhotoConjoint()\" style=\"margin-top: 0cm\">\n              Valider\n            </button>\n\n            <input type=\"file\" class=\"btn btn-warning\" (change)=\"editphotoConjoint($event)\" style=\"margin-top: 0cm\">\n          </div>\n\n\n\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>prenom : <b> {{prenom_conjoint}}</b></label> <br>\n              <label>Date de Naissance : <b> {{date_naiss_conj}}</b> </label> <br>\n              <label>Telephone : <b> {{telephone}}</b></label>\n\n            </div>\n          </div>\n\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Nom : <b>{{nom_conjoint}}</b></label><br>\n              <label>Sexe : <b> {{sexe_conjoint}}</b></label><br>\n              <!-- <label>Age : <b> {{ Age}}</b></label><br> -->\n\n            </div>\n          </div>\n\n        </div>\n\n\n      </div>\n\n    </div>\n  </div>\n</div>\n<!----------------Modal Conjoints Details fin-->\n<!----------------Modal enfant Details-->\n<div class=\"modal fade col-md-12\" id=\"moadalphoto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog  modal-notice\">\n    <div class=\"modal-content \" style=\"width: 700px;\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal tof</h4>\n        <button mat-button type=\"button\" class=\"close btn-danger\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"material-icons\">clear</i>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row p-4 rounded shadow\" style=\"background-color: whitesmoke;width:66%;margin: 0 auto;\">\n          <div class=\"col-md-4\">\n            <img class=\"rounded-circle \" src=\"{{enfant.chemin}}\" style=\"height :150px;margin-top: 1cm  ;\"\n              *ngIf=\"!imgURL5\" alt=\"\">\n            <img class=\"rounded-circle \" src=\"{{imgURL5}}\" *ngIf=\"imgURL5\" style=\"height :150px;margin-top: 1cm  ;\"\n              alt=\"\">\n\n\n\n          </div>\n          <h4 style=\"color:black;\">Modifier la photo</h4>\n\n          <div class=\"row\">\n\n            <button mat-button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" *ngIf=\"imgURL5\"\n              (click)=\"modifierPhotoEnfant()\" style=\"margin-top: 0cm\">\n              Valider\n            </button>\n            <input style=\"margin-top: 0cm\" type=\"file\" class=\"btn btn-warning\" (change)=\"editphotoEnfant($event)\">\n          </div>\n\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>prenom : <b> {{prenom_enfant}}</b></label> <br>\n              <label>Date de Naissance : <b> {{date_naiss_enfant}}</b> </label> <br>\n\n\n            </div>\n          </div>\n\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Nom : <b>{{nom_enfant}}</b></label><br>\n              <label>Sexe : <b> {{sexe_enfant}}</b></label><br>\n              <label>Age : <b> {{ agenfant}}</b></label><br>\n\n            </div>\n          </div>\n\n        </div>\n\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n<!-- modal facture -->\n<!-- <div class=\"modal fade col-md-12\" id=\"noticeMod\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\" >\n  <div class=\"modal-dialog  modal-notice\">\n    <div class=\"modal-content \" style=\"width: 1000px; margin-left: -3cm;\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Facture</h4>\n        <button mat-button type=\"button\" class=\"close btn-danger\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"material-icons\">clear</i>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">list</i>\n\n              </div>\n              <h3 style=\"background-color:whitesmoke; color: black; pading: 5px; width: 40%;\">liste Facture\n              </h3>\n            </div>\n            <div class=\"card-body\">\n\n             \n              <div class=\"modal-footer justify-content-center\">\n                \n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div> -->\n");

/***/ }),

/***/ "W/EP":
/*!***********************************************************************************!*\
  !*** ./src/app/gestion-employes/modifier-employes/modifier-employes.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ModifierEmployesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierEmployesComponent", function() { return ModifierEmployesComponent; });
/* harmony import */ var _raw_loader_modifier_employes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./modifier-employes.component.html */ "4k1n");
/* harmony import */ var _modifier_employes_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifier-employes.component.css */ "lveH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Models_Categorie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/Categorie */ "lcUs");
/* harmony import */ var src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/Employe */ "5GYJ");
/* harmony import */ var src_app_Models_Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Models/Service */ "hHo9");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ModifierEmployesComponent = /** @class */ (function () {
    function ModifierEmployesComponent(emp_service, router, route) {
        this.emp_service = emp_service;
        this.router = router;
        this.route = route;
        this.currentemploye = new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_5__["Employe"]();
        this.situation_familial = [{ id: 1, value: "Celibataire" },
            { id: 2, value: "Marier" },
            { id: 3, value: "Divorce" },
            { id: 4, value: "Veuf" }
        ];
        this.sexe = [{ id: 1, value: "Masculin" },
            { id: 2, value: "Féminin" }
        ];
        this.addCategorie = new src_app_Models_Categorie__WEBPACK_IMPORTED_MODULE_4__["Categorie"]();
        this.addService = new src_app_Models_Service__WEBPACK_IMPORTED_MODULE_6__["Service"]();
    }
    ModifierEmployesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCategorie();
        this.id = this.route.snapshot.params['id'];
        this.emp_service.getEmployeByIdSanstof(this.id).subscribe(function (result) {
            var _a;
            _this.currentemploye = result;
            _this.employeRech = _this.currentemploye;
            _this.idEnt = (_a = _this.currentemploye.ipmEntity) === null || _a === void 0 ? void 0 : _a.idEntity;
            console.log(_this.idEnt);
            _this.typesituation_familial = _this.currentemploye.situation_familial;
            _this.sexe_emploi = _this.currentemploye.sexe;
            console.log(_this.currentemploye);
            _this.type_service = _this.currentemploye.ipmService.type_service;
            _this.type_categorie = _this.currentemploye.ipm_categorie.libelle;
            console.log(_this.type_service, _this.type_categorie);
        });
        this.getService();
    };
    ModifierEmployesComponent.prototype.getserv = function (serv) {
        this.serviceChoisi = serv;
        this.type_service = null;
    };
    ModifierEmployesComponent.prototype.getCategor = function (cat) {
        this.categorieChoisi = cat;
        this.type_categorie = null;
    };
    ModifierEmployesComponent.prototype.getsituation = function (situat) {
        this.situationChoisi = situat.value;
        this.typesituation_familial = null;
        console.log(this.situationChoisi);
    };
    ModifierEmployesComponent.prototype.getSexe = function (sexEmploi) {
        this.sexeChoisi = sexEmploi.value;
        this.sexe_emploi = null;
        console.log(this.sexeChoisi);
    };
    ModifierEmployesComponent.prototype.updateEmploye = function () {
        var _this = this;
        console.log(this.currentemploye);
        this.addService.idService = this.servi;
        if (this.serviceChoisi) {
            this.currentemploye.ipmService = this.serviceChoisi;
        }
        this.addCategorie.code_categorie = this.cate;
        if (this.categorieChoisi) {
            this.currentemploye.ipm_categorie = this.categorieChoisi;
        }
        if (this.situationChoisi) {
            this.currentemploye.situation_familial = this.situationChoisi;
        }
        if (this.sexeChoisi) {
            this.currentemploye.sexe = this.sexeChoisi;
        }
        console.log(this.currentemploye);
        this.emp_service.ModifierEmployeSansphoto(this.currentemploye).subscribe(function () {
            // this.router.navigate(['/gestion-employes/ListeEmployes']) ;
            _this.router.navigate(['/gestion-employes/ListeEmployeById/' + _this.employeRech.idemp]);
        }, function (error) {
            alert("Probleme lors de la modification !");
        });
        //debugger;
    };
    ModifierEmployesComponent.prototype.retourner = function () {
        this.employeRech;
        console.log(this.employeRech);
        this.router.navigate(['/gestion-employes/ListeEmployeById/' + this.employeRech.idemp]);
    };
    ModifierEmployesComponent.prototype.getService = function () {
        var _this = this;
        this.emp_service.getService().subscribe(function (serv) {
            console.log(_this.idEnt);
            _this.service = serv;
            _this.service = _this.service.filter(function (serv) { return serv.ipmEntity.idEntity == _this.idEnt; });
            _this.service = _this.service.filter(function (serv) { return serv.ipmEntity.idEntity == _this.idEnt; });
            // console.log(this.service)
        });
    };
    ModifierEmployesComponent.prototype.getCategorie = function () {
        var _this = this;
        this.emp_service.getCategorie().subscribe(function (cat) {
            // console.log(cat);
            _this.categorie = cat;
            // console.log(this.categorie)
        });
    };
    ModifierEmployesComponent.ctorParameters = function () { return [
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_7__["EmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    ModifierEmployesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-modifier-employes',
            template: _raw_loader_modifier_employes_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_modifier_employes_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_7__["EmployeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ModifierEmployesComponent);
    return ModifierEmployesComponent;
}());



/***/ }),

/***/ "Xbhu":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-employes/liste-employe/liste-employe.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n<!--        <form [formGroup]=\"uploadForm\">-->\n<!--      -->\n<!--            <div class=\"modal-footer justify-content-center\">-->\n<!--                <button (click)=\"ajoutEmploye(ws)\"  mat-raised-button class=\"btn btn-success\" [disabled]=\"desactive\">-->\n<!--                  <i class=\"material-icons\">checked</i>Ajouter </button>-->\n<!--                </div>-->\n<!--            -->\n<!--      <input type=\"file\" (change)=\"onFileChange($event)\" formControlName=\"myFile\"/>-->\n<!--      <table class=\"table table-hover\">-->\n\n<!--        &lt;!&ndash; Table service-->\n<!--            <thead  style=\"font-weight:bold;\">-->\n<!--             <tr>-->\n<!--          <th cope=\"col\"> code</th>          -->\n<!--          <th cope=\"col\">service</th>-->\n<!--          <th cope=\"col\">Entité</th>          -->\n<!--        </tr>-->\n<!--        </thead>-->\n<!--        <tbody>-->\n<!--          <tr *ngFor=\" let fac of ws\">-->\n<!--            <td  style=\"font-weight:bold;\">{{fac.Categorie}}</td>            -->\n<!--            <td style=\"font-weight:bold;\">{{fac.Service}}</td>-->\n<!--            <td style=\"font-weight:bold;\"></td>-->\n<!--          </tr>-->\n<!--        </tbody> &ndash;&gt;-->\n<!--        &lt;!&ndash;table categorie-->\n<!--             <thead  style=\"font-weight:bold;\">-->\n<!--        <tr>-->\n\n<!--            <th cope=\"col\"> categorie</th>-->\n<!--            -->\n<!--            -->\n<!--           -->\n<!--            -->\n<!--          </tr>-->\n<!--  -->\n<!--          </thead>-->\n<!--          <tbody>-->\n<!--            <tr *ngFor=\" let fac of ws\">-->\n<!--              <td  style=\"font-weight:bold;\">{{fac.Categorie}}</td>-->\n<!--              -->\n<!--              -->\n<!--              -->\n<!--             -->\n<!--  -->\n<!--            </tr>-->\n<!--          </tbody> &ndash;&gt;-->\n<!--          <thead  style=\"font-weight:bold;\">-->\n<!--            <tr>-->\n<!--    -->\n<!--                <th cope=\"col\"> matricule</th>-->\n<!--                <th cope=\"col\"> NOM</th>-->\n<!--                <th cope=\"col\"> PRENOM</th>-->\n<!--                <th cope=\"col\"> SEXE</th>-->\n<!--                <th cope=\"col\"> DATE</th>-->\n<!--                <th cope=\"col\"> SOLDE</th> -->\n<!--              </tr>-->\n<!--      -->\n<!--              </thead>-->\n<!--              <tbody>-->\n<!--                <tr *ngFor=\" let fac of ws\">-->\n<!--                  <td  style=\"font-weight:bold;\">{{fac.Matricule}}</td>-->\n<!--                  <td  style=\"font-weight:bold;\">{{fac.NOM}}</td>-->\n<!--                  <td  style=\"font-weight:bold;\">{{fac.PRENOMS}}</td>-->\n<!--                  <td  style=\"font-weight:bold;\">{{fac.Sexe}}</td>-->\n<!--                  <td  style=\"font-weight:bold;\">{{fac.DateNaiss}}</td>-->\n<!--                  <td  style=\"font-weight:bold;\">{{fac.Solde}}</td>-->\n\n\n\n\n\n<!--                  -->\n<!--                  -->\n<!--                  -->\n<!--                 -->\n<!--      -->\n<!--                </tr>-->\n<!--              </tbody>-->\n<!--        -->\n<!--      </table>-->\n<!--      -->\n<!--    </form>-->\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card \" style=\"margin-left:8cm;\">\n                    <div class=\"card-header card-header-icon\">\n                        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                            <i class=\"material-icons\">list</i>\n                        </div>\n                        <h3 style=\"background-color:whitesmoke; font-weight: 400; color: black; pading: 5px; width: 50%;\" class=\"card-title\">Liste des Entités</h3>\n                    </div>\n                    <div class=\"card-body\" style=\"padding-left: 3.5cm;\">\n                        <div class=\"btn-group\">\n                            <table>\n                                <thead>\n                                <th> </th>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let list of listEntity\">\n                                        <td> <button style=\"margin-bottom: 10px; font-size:17px;\" class=\"w-100\" (click)=\"getService(list)\" data-toggle=\"modal\"\n                                                data-target=\"#noticeModal\">{{list.nom_entity}} </button></td>\n                                        <!-- <td><button>{{list.nom_entity}}</button></td>\n                    <td>  <button>{{list.nom_entity}}</button> -->\n\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--modal list service-->\n        <div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n            aria-hidden=\"true\">\n            <div class=\"modal-dialog\" >\n                <div class=\"modal-content\"style=\"width: 700px;\">\n                    <div class=\"modal-header\" style=\"background-color: whitesmoke;\">\n                        <h3 class=\"modal-title\" id=\"noticeModal\"\n                         style=\"font-weight:bold; padding-bottom: 10px;\">liste des services\n                            de {{nomEntity}}\n                        </h3>\n                        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                            <i class=\"material-icons\">close</i>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\" style=\"width: 700px;\">\n\n                        <div class=\"row\">\n                                <table class=\"table table-hover table-bordered col-md-12\">\n                                    <thead>\n                                        <tr style=\"background-color:rgb(213, 213, 213);\">\n                                            <th style=\"font-weight: 500;\">Code Service</th>\n                                            <th  style=\"font-weight: 500;\">Type de Service</th>\n                                            <th  style=\"font-weight: 500;\">Action</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let listserv of listService\" style=\"font-weight: 400;\">\n                                            <td>{{listserv.code_service}}</td>\n                                            <td>{{listserv.type_service}}</td>\n                                            <td class=\"td_actions text-right\">\n                                                <button (click)=\"getEmploye(listserv)\" mat-raised-button type=\"button\" class=\"btn btn-warning  btn-round btn-xs\"\n                                                    id=\"edit\">\n                                                    <i class=\"fa fa-home\"></i></button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        \n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n\n        <!--fin modal-->\n       \n\n    </div>\n</div>");

/***/ }),

/***/ "b8v4":
/*!**********************************!*\
  !*** ./src/app/Models/Entity.ts ***!
  \**********************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
var Entity = /** @class */ (function () {
    function Entity(idEntity, code_entity, nom_entity) {
        this.idEntity = idEntity;
        this.code_entity = code_entity;
        this.nom_entity = nom_entity;
    }
    return Entity;
}());



/***/ }),

/***/ "bitI":
/*!****************************************************!*\
  !*** ./src/app/Services/statut-employe.service.ts ***!
  \****************************************************/
/*! exports provided: StatutEmployeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatutEmployeService", function() { return StatutEmployeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StatutEmployeService = /** @class */ (function () {
    function StatutEmployeService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
    }
    StatutEmployeService.prototype.getStatutEmploye = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL + 'statutEmploye');
    };
    StatutEmployeService.prototype.modifierStatut = function (codes) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL + 'employe', codes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((this.erroHandler)));
        ;
    };
    StatutEmployeService.prototype.erroHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message || 'erreur de chargement');
    };
    StatutEmployeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    StatutEmployeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], StatutEmployeService);
    return StatutEmployeService;
}());



/***/ }),

/***/ "br6J":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-employes/liste-employes/liste-employes.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\" xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"container-fluid\">\n    <div class=\"card-body\">\n      <ul class=\"nav nav-pills nav-pills-warning\" role=\"tablist\">\n\n      </ul>\n      <div class=\"tab-content tab-space\">\n\n        <!---->\n\n        <div class=\"col-md-11 tab-pane active\" id=\"link0\" >\n          <div class=\"card \" style=\"margin-left:1cm;\">\n            <div class=\"card-header  card-header-icon\">\n<!--              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88);font-size: smaller\">-->\n<!--                <i class=\"material-icons\">search</i>-->\n<!--              </div>-->\n              <h5 class=\"card-title\"\n                  style=\"background-color:rgba(17, 17, 227, 0.88);border-radius: initial; font-weight: 800;font-size: large; color: whitesmoke; padding: 8px;margin-right:auto; width: 28%;\">\n                Rechercher Participant</h5>\n              <button mat-raised-button type=\"button\" style=\"float:right;margin-top:-1cm; font-size: 16px;\" data-toggle=\"modal\" data-target=\"#ajouter\" class=\"btn btn-success\">\n                <i class=\"material-icons\" >add_circle</i> Ajouter un participant\n              </button>\n\n            </div>\n            <div class=\"card-body \">\n              <form class=\"navbar-form\">\n                <span class=\"bmd-form-group\">\n                  <div class=\"input-group no-border\">\n                    <input type=\"text\" name=\"matricule\" class=\"form-control\" placeholder=\"Matricule\" id=\"matricule\"\n                           [(ngModel)]=\"matricule\" >\n\n                  </div>\n                </span>\n\n\n              </form>\n            </div>\n\n\n            <div class=\"card-footer\" style=\"padding-left: 80%;\">\n              <button mat-raised-button type=\"submit\" class=\"nav-link\" data-toggle=\"tab\" href=\"#link1\"\n                      (click)=\"getEmployeByMatricule()\" class=\"btn btn-fill btn-success\"><i\n                      class=\"material-icons\">search</i>Rechercher</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\" >\n          <div class=\"card\">\n        <div class=\"col-md-12\" *ngIf=\"employeRech\">\n\n<!--          <div class=\"card-header card-header-icon\" >-->\n<!--            <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">-->\n<!--              <i class=\"material-icons\">list</i>-->\n<!--            </div>-->\n            <h2 class=\"text-center\" style=\"background-color:rgba(17, 17, 227, 0.88);\n             color: white; padding: 2px; width: 40%;\">Carnet Participants </h2>\n\n\n          <div class=\"card-body table-full-width\">\n           \n            <div class=\"material-datatable\">\n              <div class=\"text-center\">\n                <mat-spinner *ngIf=\"!employeRech\" style=\"margin-left: 15cm;\"></mat-spinner>\n\n              </div>\n              \n              <table id=\"datatable\" class=\"table table-bordered table-striped\" width=\"100%\" style=\"width:100%\"\n                class=\"table table-hover\">\n\n                <thead class=\"text-black\">\n\n                  <tr>\n\n                    <th cope=\"col\"><b> Numero Carnet</b></th>\n                    <th cope=\"col\"><b> Nom</b></th>\n                    <th cope=\"col\"><b> Prenom</b></th>\n                    <th cope=\"col\"><b> Matricule</b></th>\n                    <th cope=\"col\"><b> Reference</b></th>\n                    <th cope=\"col\"><b> Service</b></th>\n                    <th cope=\"col\"><b> Categorie</b></th>\n\n                    <th class=\"disabled-sorting text-center\">Actions</th>\n\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr style=\"font-weight: 500;\">\n                    <td class=\"text-center\">\n\n                      <span *ngIf=\"employeRech.statut\" class=\"badge badge-success\"> {{employeRech.numero_carnet}}</span>\n                      <span *ngIf=\"!employeRech.statut\" class=\"badge badge-danger\">{{employeRech.numero_carnet}}</span>\n                    </td>\n                    <td>{{employeRech.nom}}</td>\n                    <td>{{employeRech.prenom}}</td>\n                    <!-- <td >{{employe.sexe}}</td> -->\n                    <td>{{employeRech.matricule}}</td>\n                    <td>{{employeRech.reference}}</td>\n                    <td>{{employeRech.ipmService?.type_service}}</td>\n                    <td>{{employeRech.ipm_categorie?.libelle}}</td>\n\n                    <td class=\"td-actions\">\n\n                      <!-- <label mat-raised-button>\n                        <span style=\"margin:2px;\" *ngIf=\"employe.statut!=''\" class=\"badge badge-danger\">X<i class=\"material-icons\"></i></span>\n                        <span style=\"margin:2px;\" *ngIf=\"employe.statut==''\" class=\"btn btn-success\"><i class=\"material-icons\">check</i></span>\n                      </label>  -->\n                      <button mat-raised-button (click)=\"getEmploye(employeRech)\" data-toggle=\"modal\"\n                       data-target=\"#statu\" style=\"margin:2px;\" type=\"button\" class=\"btn\" style=\"background-color: rgb(101, 101, 110);\">\n                        <i class=\"fa fa-user-times\" aria-hidden=\"true\" style=\"color: rgb(251, 252, 253)\"></i>\n\n                      </button>\n                      <button mat-raised-button style=\"margin:2px;\" type=\"button\" class=\"btn btn-info\">\n                        <i class=\"material-icons\"\n                          [routerLink]=\"['/gestion-employes/carnetEmploye/'+employeRech.idemp]\">person</i>\n                      </button>\n\n                      <button mat-raised-button style=\"margin:2px;\"type=\"button\" class=\"btn btn-warning \">\n                        <i class=\"material-icons\"\n                          [routerLink]=\"['/gestion-employes/ModifierEmployes/'+employeRech.idemp]\">edit</i>\n                      </button>\n                      <!-- <button mat-raised-button type=\"button\" class=\"btn btn-danger \">\n                                                    <i class=\"fa fa-trash-o\" (click)=\"supprimerEmploye(employe)\"></i>\n                                                </button> -->\n\n\n\n                    </td>\n\n                  </tr>\n\n                </tbody>\n<!--                <button mat-raised-button (click)=\"upload()\" type=\"button\" style=\"font-size: 16px;background-color:rgba(17, 17, 227, 0.88); color: white; margin-left: 20px;\">-->\n<!--                  <i class=\"material-icons\">file_download</i>Telecharger-->\n<!--                </button>-->\n              </table>\n\n\n            </div>\n          </div>\n\n          <!--modal pour afficher le detail d'un employe-->\n          <div class=\"ecommerce\">\n            <div class=\"modal fade \" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n              aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-ecom\">\n                <div class=\"modal-content \">\n                  <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">Information de l'employe</h4>\n                    <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                      <i class=\"material-icons\">clear</i>\n                    </button>\n\n                  </div>\n                  <div class=\"modal-body \">\n                    <div class=\"card \">\n                      <div class=\"card-body \">\n                        <label class=\"col-md-6\">Numero Carnet</label>\n                        <label class=\"col-md-6\">{{currentemploye.idemp}}</label>\n                        <label class=\"col-md-6\">Nom</label>\n                        <label class=\"col-md-6\">{{currentemploye.nom}}</label>\n                        <label class=\"col-md-6\">Prenom</label>\n                        <label class=\"col-md-6\">{{currentemploye.prenom}}</label>\n                        <label class=\"col-md-6\">Sexe</label>\n                        <label class=\"col-md-6\">{{currentemploye.sexe}}</label>\n                        <label class=\"col-md-6\">Adresse</label>\n                        <label class=\"col-md-6\">{{currentemploye.adresse_domicile}}</label>\n                        <label class=\"col-md-6\">Date Naissance</label>\n                        <label class=\"col-md-6\">{{currentemploye.date_nais}}</label>\n                        <label class=\"col-md-6\">Lieu Naissance</label>\n                        <label class=\"col-md-6\">{{currentemploye.lieu_nais}}</label>\n                        <label class=\"col-md-6\">Telephone</label>\n                        <label class=\"col-md-6\">{{currentemploye.telephone}}</label>\n                        <label class=\"col-md-6\">Situation Matrimonial</label>\n                        <label class=\"col-md-6\">{{currentemploye.situation_familial}}</label>\n                        <label class=\"col-md-6\">Matricule</label>\n                        <label class=\"col-md-6\">{{currentemploye.matricule}}</label>\n                        <label class=\"col-md-6\">Reference</label>\n                        <label class=\"col-md-6\">{{currentemploye.reference}}</label>\n                        <label class=\"col-md-6\">Date Recrutement</label>\n                        <label class=\"col-md-6\">{{currentemploye.date_recrutement}}</label>\n                        <label class=\"col-md-6\">Service</label>\n                        <label class=\"col-md-6\">{{currentemploye.ipmService?.type_service}}</label>\n                        <label class=\"col-md-6\">Categorie</label>\n                        <label class=\"col-md-6\">{{currentemploye.ipm_categorie?.libelle}}</label>\n                        <label class=\"col-md-6\">Numero Carnet</label>\n                        <label class=\"col-md-6\">{{currentemploye.numero_carnet}}</label>\n\n                      </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-fill\" data-dismiss=\"modal\"\n                        >Retour</button>\n                    </div>\n\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--fin modal-->\n        </div>\n      </div>\n    </div>\n  </div>\n    </div>\n\n  <!--  Formulaire remplir information de l'employé -->\n  <div class=\"modal fade\" id=\"ajouter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\" style=\"background-color: whitesmoke;color: black;\">\n        <div class=\"modal-header\">\n          <h3 class=\"modal-title\" id=\"myModalLabel\">Prise en Compte d'un nouveau participant</h3>\n          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n           <b class=\"btn btn-danger\"> <i class=\"material-icons\" style=\"color: red;\">close</i> fermer</b>\n          </button>\n        </div>\n        <div class=\"card\" *ngIf=\"desac\">\n          <p style=\"text-align:center; color:red;font-size: 30px;\">Matricule existe deja!!!</p>\n      </div>\n        <div class=\"card\" *ngIf=\"desactive\">\n          <p style=\"text-align:center; color:red;font-size: 30px;\">Veuiller remplir les Champs!!!</p>\n      </div>\n        <div class=\"container-fluid\">\n          <form class=\"form-horizontal\">\n            <input type=\"hidden\" class=\"form-control\">\n            <div class=\"form-group card-header\">\n              <div class=\"row\">\n                <div class=\"col-md-6 form-group\" [formGroup]=\"FormControlEmpployes\">\n                  <mat-form-field class=\"example-full-width\">\n                      <libelle> Nom Employe<span style=\"color: red\">*</span></libelle>\n                      <input matInput type=\"text\" class=\"form-control\" id=\"nom\" formControlName=\"nom\">\n                   <!-- <mat-error *ngIf=\"FormControlEmpployes.controls['nom'].hasError('required')\">\n                      votre nom est <strong>Obligatoire</strong>\n                    </mat-error>-->\n                  </mat-form-field>\n\n                </div>\n\n                <div class=\"col-md-6 form-group\" [formGroup]=\"FormControlEmpployes\">\n                  <mat-form-field class=\"example-full-width\">\n                      <libelle> Prenom Employe<span style=\"color: red\">*</span></libelle>\n\n                      <input matInput type=\"text\" class=\"form-control\" id=\"prenom\"\n                      formControlName=\"prenom\">\n<!--                    <mat-error *ngIf=\"FormControlEmpployes.controls['prenom'].hasError('required')\">-->\n<!--                      votre prenom est <strong>Obligatoire</strong>-->\n<!--                    </mat-error>-->\n                  </mat-form-field>\n\n                </div>\n\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6 form-group\" [formGroup]=\"FormControlEmpployes\">\n                  <mat-form-field class=\"example-full-width\">\n                      <libelle> Lieu de Naiss... Employe<span style=\"color: red\">*</span></libelle>\n                      <input matInput type  =\"text\" class=\"form-control\" id=\"lieu_nais\"\n                      formControlName=\"lieu_nais\">\n<!--                    <mat-error *ngIf=\"FormControlEmpployes.controls['lieu_nais'].hasError('required')\">-->\n<!--                      lieu de naissan...<strong>Obligatoire</strong>-->\n<!--                    </mat-error>-->\n                  </mat-form-field>\n\n                </div>\n                <div class=\"col-md-6 form-group\" [formGroup]=\"FormControlEmpployes\">\n                  <mat-form-field class=\"example-full-width\">\n                      <libelle> Adresse_domicile Employe<span style=\"color: red\">*</span></libelle>\n                      <input matInput type=\"text\" class=\"form-control\" id=\"adresse_domicile\"\n                      formControlName=\"adresse_domicile\">\n<!--                    <mat-error *ngIf=\"FormControlEmpployes.controls['adresse_domicile'].hasError('required')\">-->\n<!--                      Adresse domicile <strong>Obligatoire</strong>-->\n<!--                    </mat-error>-->\n                  </mat-form-field>\n\n                </div>\n\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-6 form-group\"[formGroup]=\"FormControlEmpployes\">\n                  <mat-form-field>\n                      <libelle> Date Naissance Employe<span style=\"color: red\">*</span></libelle>\n                      <input matInput [matDatepicker]=\"picker1\" (click)=\"picker1.open()\" id=\"date_nais\"\n                      placeholder=\"Date Naissance\" formControlName=\"date_nais\" max=\"{{min}}-12-31\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\">\n                    </mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n<!--                    <mat-error *ngIf=\"FormControlEmpployes.controls['date_nais'].hasError('required')\">-->\n<!--                      la date de naissan... est <strong>Obligatoire</strong>-->\n<!--                    </mat-error>-->\n                  </mat-form-field>\n\n                  <!-- <mat-form-field >\n                                          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" (click)=\"picker.open()\">\n                                          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                          <mat-datepicker #picker></mat-datepicker>\n                                        </mat-form-field> -->\n\n                </div>\n                <div class=\"col-md-6\" [formGroup]=\"FormControlEmpployes\" style=\"width: 200px;margin-top:-5px;\">\n                  <!-- <mat-form-field appearance=\"fill\"> -->\n                    <mat-form-field>\n                        <libelle> Choisir  sexe Employe<span style=\"color: red\">*</span></libelle>\n                        <mat-select  formControlName=\"sexe\" class=\"form-control\" id=\"sexe\"\n                        >\n                        <mat-option *ngFor=\"let sex of sexe\" [value]=\"sex.value\">\n                          {{ sex.value }}\n                        </mat-option>\n                      </mat-select>\n<!--                      <mat-error *ngIf=\"FormControlEmpployes.controls['sexe'].hasError('required')\">-->\n<!--                        Sexe <strong>Obligatoire</strong>-->\n<!--                      </mat-error>-->\n                    </mat-form-field>\n\n                  <!-- <mat-option>Choissir le sexe ci-dessous\n                    <select [formControl]=\"selectFormControl\" class=\"form-control\" id=\"sexe\" placeholder=\"Sexe\"\n                      formControlName=\"sexe\">\n\n                      <option value=\"masculin\">Masculin</option>\n                      <option value=\"feminin\">Feminin</option>\n\n                    </select>\n                  </mat-option> -->\n\n\n                </div>\n\n              </div>\n              <div class=\"row\">\n              <div class=\"col-md-6 form-group\" [formGroup]=\"FormControlEmpployes\">\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"text\" class=\"form-control\" id=\"telephone\" placeholder=\"\" mask=\"(00) 000-00-00\"\n                    formControlName=\"telephone\">\n                  <small>Telephone: XX-XXX-XX-XX</small>\n                </mat-form-field>\n\n              </div>\n              <div class=\"col-md-6 form-group\" [formGroup]=\"FormControlEmpployes\" >\n                <mat-form-field>\n                    <libelle> date_recrutement Employe<span style=\"color: red\">*</span></libelle>\n                    <input matInput [matDatepicker]=\"picker2\" (click)=\"picker2.open()\" id=\"date_recrutement\" style=\"margin-top: 32px;\"\n                     formControlName=\"date_recrutement\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker2 startView=\"year\"></mat-datepicker>\n<!--                  <mat-error *ngIf=\"FormControlEmpployes.controls['date_recrutement'].hasError('required')\">-->\n<!--                    la date de recrutement est <strong>Obligatoire</strong>-->\n<!--                  </mat-error>-->\n                </mat-form-field>\n\n              </div>\n            </div>\n              <div class=\"row\">\n                <div class=\"col-md-6 form-group\" [formGroup]=\"FormControlEmpployes\" style=\"margin-top:-5px;\">\n                  <mat-form-field>\n                      <libelle> situation familiale Employe<span style=\"color: red\">*</span></libelle>\n                      <mat-select  formControlName=\"situation_familial\" class=\"form-control\" id=\"situation\"\n                      >\n                      <mat-option *ngFor=\"let situat of situation_familial\" [value]=\"situat.value\">\n                        {{ situat.value }}\n                      </mat-option>\n                    </mat-select>\n<!--                    <mat-error *ngIf=\"FormControlEmpployes.controls['situation_familial'].hasError('required')\">-->\n<!--                      Situation familial <strong>Obligatoire</strong>-->\n<!--                    </mat-error>-->\n                  </mat-form-field>\n\n                </div>\n                <div class=\"col-md-6 form-group\">\n                  <mat-form-field>\n                      <libelle> Entity<span style=\"color: red\">*</span></libelle>\n                      <mat-select placeholder=\"Entité\" name=\"entity\"  [(ngModel)]=\"enti\"\n                      (selectionChange)=\"selectService()\">\n                      <mat-option *ngFor=\"let ent of entity\" [value]=\"ent.idEntity\">\n                        {{ ent.nom_entity }}\n                      </mat-option>\n                    </mat-select>\n\n                  </mat-form-field>\n\n                </div>\n              </div>\n           \n              \n\n              <div class=\"row\">\n              <div class=\"col-md-6 form-group\" [formGroup]=\"FormControlEmpployes\" style=\"margin-top:-5px;\">\n                <mat-form-field class=\"example-full-width\">\n                    <libelle> Matricule Employe<span style=\"color: red\">*</span></libelle>\n                    <input matInput type=\"text\" class=\"form-control\" id=\"matricule\"\n                    formControlName=\"matricule\" (keypress)=\"keyPressAlphaNumericWithCharacters($event)\">\n<!--                  <mat-error *ngIf=\"FormControlEmpployes.controls['matricule'].hasError('required')\">-->\n<!--                    le matricule doit etre <strong>Obligatoire</strong>-->\n<!--                  </mat-error>-->\n                  <mat-error *ngIf=\"FormControlEmpployes.controls['matricule'].hasError('minlength')\">\n                    le matricule doit composer au moins <strong>7 caractères</strong>\n                  </mat-error>\n                  <mat-error *ngIf=\"FormControlEmpployes.controls['matricule'].hasError('maxlength')\">\n                    le matricule ne doit pas dépasser <strong>7 caractères</strong>\n                  </mat-error>\n                </mat-form-field>\n\n              </div>\n              <div class=\"col-md-6 form-group\">\n                <mat-form-field>\n                    <libelle> Service <span style=\"color: red\">*</span></libelle>\n                    <mat-select  name=\"service\" [(ngModel)]=\"servi\">\n                    <mat-option *ngFor=\"let serv of service\" [value]=\"serv.idService\">\n                      {{ serv.type_service }}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 form-group\" [formGroup]=\"FormControlEmpployes\" style=\"margin-top:-5px;\">\n                <mat-form-field class=\"example-full-width\">\n                    <libelle> Reference <span style=\"color: red\">*</span></libelle>\n                    <input matInput type=\"text\" class=\"form-control\" id=\"reference\"\n                    formControlName=\"reference\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-6 form-group\">\n                <mat-form-field>\n                    <libelle> Categorie <span style=\"color: red\">*</span></libelle>\n                    <mat-select  name=\"categorie\" [(ngModel)]=\"cate\">\n                    <mat-option *ngFor=\"let cat of categorie\" [value]=\"cat.code_categorie\">\n                      {{ cat.libelle }}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </div>\n          </div>\n            \n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <span class=\"btn btn-file\" style=\"font-size: 16px;background-color:rgba(17, 17, 227, 0.88); color: white; margin-left: 20px;margin-top: 1cm;\"><i class=\"material-icons\">file_download</i> Choisir Photo\n                  <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"onFileChanged($event)\">\n                 <img [src]=\"imgURL\" height=\" 100\" width=\"100\" *ngIf=\"imgURL\" />\n                </span>\n                <div class=\"btn btn-file\" style=\"margin-left:20% ; font-size: 16px;background-color:rgba(17, 17, 227, 0.88); color: white; margin-left: 20px;margin-top: 1cm;\"><i class=\"material-icons\">file_download</i>Justificatif\n                  <input type=\"file\" class=\"form-control\" name=\"file\"\n                    (change)=\"selectJustificatif($event)\" accept=\".PNG ,.jpeg, .jpg,.pdf,.doc,.docx\">\n                 <!-- <img [src]=\"JustifURL\" height=\" 100\" width=\"100\" *ngIf=\"JustifURL\">-->\n\n                </div>\n                  <span style=\"color: red\"><strong>*</strong></span>\n              </div>\n            \n            </div>\n            <div class=\"text-right\" style=\"margin-top: -60px; padding-bottom: 1cm;\">\n              <button mat-raised-button type=\"submit\" [disabled]=\"!FormControlEmpployes.valid\"  class=\"btn btn-success\"  (click)=\"EmployeNow();FormControlEmpployes\"\n                >\n                <span class=\"btn-label\">\n                  <i class=\"material-icons\">check</i>\n                </span>Enregistrer</button>\n            </div>\n              <span style=\"color: red;margin-left:65%\">les champs avec * sont  <strong> obligatoires</strong></span>\n          </form>\n          <!--Footer-->\n         \n\n\n\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n\n\n  <!-- <div class=\"modal-dialog modal-lg\">\n\n  </div> -->\n\n  <!--modal list service-->\n  <div class=\"modal fade\" id=\"statu\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" >\n      <div class=\"modal-content\" style=\"background-color: whitesmoke;color: black;\">\n          <div class=\"modal-header\" style=\"background-color: whitesmoke;\"\n          >\n              <div class=\"modal-title\" id=\"noticeModal\" style=\"padding-bottom: 10px;\">\n                  <span>participant:<b style=\"color: #0d47a1\">{{employe.prenom}}{{employe.nom}}</b> </span><br>\n                  <span>Service:<b style=\"color: #0d47a1\">{{employe.ipmService?.type_service}}</b></span> <br>\n                  <span>Statut: <b style=\"color: #0d47a1\"> {{employe.ipmStatutEmploye?.emplStatut}}</b></span>\n              </div>\n              <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                  <i class=\"material-icons\">close</i>\n              </button>\n          </div>\n          <div class=\"container-fluid\">\n          <form >\n          <div class=\"modal-body\" style=\"width: 900px;\">\n            <div class=\"row\">\n            <div class=\"col-md-3 \">\n              <mat-form-field>\n                <mat-select placeholder=\"Statut\" name=\"statutEmploye\" [(ngModel)]=\"codeStat\">\n                  <mat-option *ngFor=\"let stu of statutEmploye\"  [value]=\"stu.idStatut\">\n                    {{ stu.emplStatut}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div class=\"col-md-3 \">\n              \n              <mat-form-field>\n                <mat-select placeholder=\"Motif\" name=\"motif\" [(ngModel)]=\"motif\">\n                  <mat-option *ngFor=\"let stu of motifStatu\"  [value]=\"stu\">\n                    {{ stu.libelle}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n<!--            <div class=\"col-md-3\">-->\n<!--              <input type=\"text\" class=\"form-control\" placeholder=\"MotifStatut\" name=\"motifStatut\" id=\"motifStatut\"  [(ngModel)]=\"motifStatut\">-->\n\n<!--            </div>-->\n             </div>\n             <div class=\"row\" *ngIf=\"!motif?._exclu\">\n            <div class=\"col-md-3\">\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker11\" placeholder=\"date debut\" id=\"datede\" name=\"datede\" [(ngModel)]=\"datede\" (click)=\"picker11.open()\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker11\"></mat-datepicker-toggle>\n                <mat-datepicker #picker11 startView=\"year\"></mat-datepicker>\n                </mat-form-field>\n              \n              \n            </div> \n            <div class=\"col-md-3 \">\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker22\" placeholder=\"date fin \" id=\"datefi\" name=\"datefi\" [(ngModel)]=\"datefi\" (click)=\"picker22.open()\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker22\"></mat-datepicker-toggle>\n                <mat-datepicker #picker22 startView=\"year\"></mat-datepicker>\n                </mat-form-field>\n              \n              \n            </div>               \n              </div>\n              <div class=\"col-md-3 \"  *ngIf=\"motif?._exclu\">\n                  <mat-form-field>\n                      <input matInput [matDatepicker]=\"picker22\" placeholder=\"date effet\" id=\"dateEf\" name=\"dateEf\" [(ngModel)]=\"dateEf\" (click)=\"picker22.open()\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker22\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker22 startView=\"year\"></mat-datepicker>\n                  </mat-form-field>\n\n\n              </div>\n\n          </div>\n          <div class=\"text-center\" style=\"margin-top: 40px; padding-bottom: 1cm;\">\n            <button mat-raised-button type=\"submit\" (click)=\"updateStatut()\" class=\"btn btn-success\"\n              data-dismiss=\"modal\">\n              <span class=\"btn-label\">\n                <i class=\"material-icons\">check</i>\n              </span>Modifier Statut</button>\n          </div>\n        </form>\n        </div>\n      </div>\n  \n  </div>\n</div>\n\n<!--fin modal-->\n\n");

/***/ }),

/***/ "c5VC":
/*!******************************************************************************!*\
  !*** ./src/app/gestion-employes/carnet-employe/carnet-employe.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3{\n    text-transform: uppercase;\n}\n\n.btn-file {\n    position: relative;\n    overflow: hidden;\n  }\n\n.btn-file input[type=file] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-width: 100%;\n    min-height: 100%;\n    font-size: 100px;\n    text-align: right;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    outline: none;\n    background: white;\n    cursor: inherit;\n    display: block;\n  }\n\n.btn-group button {\n      background-color: #1240d4;\n      border: none;\n      /* Green border */\n      color: white;\n      /* White text */\n      padding: 10px 100px;\n      /* Some padding */\n      cursor: pointer;\n      /* Pointer/hand icon */\n      float: left;\n      /* Float the buttons side by side */\n\n  }\n\n/* Clear floats (clearfix hack) */\n\n.btn-group:after {\n      content: \"\";\n      clear: both;\n      display: table;\n  }\n\n.btn-group button:not(:last-child) {\n      border-right: none;\n      /* Prevent double borders */\n  }\n\ntr{font-weight: bold;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VzdGlvbi1lbXBsb3llcy9jYXJuZXQtZW1wbG95ZS9jYXJuZXQtZW1wbG95ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0FBRUE7TUFDSSx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLHNCQUFzQjtNQUN0QixXQUFXO01BQ1gsbUNBQW1DOztFQUV2Qzs7QUFFQSxpQ0FBaUM7O0FBQ2pDO01BQ0ksV0FBVztNQUNYLFdBQVc7TUFDWCxjQUFjO0VBQ2xCOztBQUVBO01BQ0ksa0JBQWtCO01BQ2xCLDJCQUEyQjtFQUMvQjs7QUFFRSxHQUFHLGlCQUFpQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvZ2VzdGlvbi1lbXBsb3llcy9jYXJuZXQtZW1wbG95ZS9jYXJuZXQtZW1wbG95ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ0bi1maWxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuYnRuLWZpbGUgaW5wdXRbdHlwZT1maWxlXSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY3Vyc29yOiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmJ0bi1ncm91cCBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEyNDBkNDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIC8qIEdyZWVuIGJvcmRlciAqL1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgLyogV2hpdGUgdGV4dCAqL1xuICAgICAgcGFkZGluZzogMTBweCAxMDBweDtcbiAgICAgIC8qIFNvbWUgcGFkZGluZyAqL1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgLyogUG9pbnRlci9oYW5kIGljb24gKi9cbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgLyogRmxvYXQgdGhlIGJ1dHRvbnMgc2lkZSBieSBzaWRlICovXG5cbiAgfVxuXG4gIC8qIENsZWFyIGZsb2F0cyAoY2xlYXJmaXggaGFjaykgKi9cbiAgLmJ0bi1ncm91cDphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuXG4gIC5idG4tZ3JvdXAgYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgLyogUHJldmVudCBkb3VibGUgYm9yZGVycyAqL1xuICB9XG4gIFxuICAgIHRye2ZvbnQtd2VpZ2h0OiBib2xkO31cbiJdfQ== */");

/***/ }),

/***/ "fgc6":
/*!****************************************************************************!*\
  !*** ./src/app/gestion-employes/liste-employe/liste-employe.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Modal1 {\n    max-width: 1200px;\n    margin: 1.\n    75rem auto;\n}\n\n.btn-group button {\n    background-color: #1240d4;\n    border: none;\n    /* Green border */\n    color: white;\n    /* White text */\n    padding: 10px 100px;\n    /* Some padding */\n    cursor: pointer;\n    /* Pointer/hand icon */\n    float: left;\n    /* Float the buttons side by side */\n\n}\n\n/* Clear floats (clearfix hack) */\n\n.btn-group:after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n\n.btn-group button:not(:last-child) {\n    border-right: none;\n    /* Prevent double borders */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VzdGlvbi1lbXBsb3llcy9saXN0ZS1lbXBsb3llL2xpc3RlLWVtcGxveWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQjtjQUNVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsbUNBQW1DOztBQUV2Qzs7QUFFQSxpQ0FBaUM7O0FBQ2pDO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tZW1wbG95ZXMvbGlzdGUtZW1wbG95ZS9saXN0ZS1lbXBsb3llLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTW9kYWwxIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDEuXG4gICAgNzVyZW0gYXV0bztcbn1cblxuLmJ0bi1ncm91cCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjQwZDQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIC8qIEdyZWVuIGJvcmRlciAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvKiBXaGl0ZSB0ZXh0ICovXG4gICAgcGFkZGluZzogMTBweCAxMDBweDtcbiAgICAvKiBTb21lIHBhZGRpbmcgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLyogUG9pbnRlci9oYW5kIGljb24gKi9cbiAgICBmbG9hdDogbGVmdDtcbiAgICAvKiBGbG9hdCB0aGUgYnV0dG9ucyBzaWRlIGJ5IHNpZGUgKi9cblxufVxuXG4vKiBDbGVhciBmbG9hdHMgKGNsZWFyZml4IGhhY2spICovXG4uYnRuLWdyb3VwOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uYnRuLWdyb3VwIGJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgLyogUHJldmVudCBkb3VibGUgYm9yZGVycyAqL1xufSJdfQ== */");

/***/ }),

/***/ "gVdH":
/*!***************************************************************************!*\
  !*** ./src/app/gestion-employes/liste-employe/liste-employe.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListeEmployeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeEmployeComponent", function() { return ListeEmployeComponent; });
/* harmony import */ var _raw_loader_liste_employe_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./liste-employe.component.html */ "Xbhu");
/* harmony import */ var _liste_employe_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liste-employe.component.css */ "fgc6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Models_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/Service */ "hHo9");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "JcrP");
/* harmony import */ var src_app_Models_Entity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/Entity */ "b8v4");
/* harmony import */ var src_app_Models_Categorie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Models/Categorie */ "lcUs");
/* harmony import */ var src_app_Models_IPM_StatutEmploye__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Models/IPM_StatutEmploye */ "tbBT");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ListeEmployeComponent = /** @class */ (function () {
    function ListeEmployeComponent(router, emp_service) {
        this.router = router;
        this.emp_service = emp_service;
        this.panier = [];
        this.servicePanier = { idService: null, type_service: null, code_service: null, ipmEntity: null };
        this.categoriePanier = { code_categorie: null, libelle: null, montant: null, echalonnage: null };
        this.employePanier = { nom: null, prenom: null, sexe: null, adresse_domicile: null,
            date_nais: null, lieu_nais: null, telephone: null, date_recrutement: null, matricule: null, reference: null, numero_carnet: null,
            situation_familial: null, cumul_charge: null, niveau_salarial: null, ipm_categorie: null, ipmService: null, ipmEntity: null,
            photo: null, statut: null, ipmStatutEmploye: null, justificatif: null, Echelonnage: null, solde: null
        };
        this.entity = new src_app_Models_Entity__WEBPACK_IMPORTED_MODULE_7__["Entity"]();
        this.statu = new src_app_Models_IPM_StatutEmploye__WEBPACK_IMPORTED_MODULE_9__["IPM_StatutEmploye"]();
        this.jsoncategori = new src_app_Models_Categorie__WEBPACK_IMPORTED_MODULE_8__["Categorie"]();
        this.jsonService = new src_app_Models_Service__WEBPACK_IMPORTED_MODULE_4__["Service"]();
    }
    ListeEmployeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emp_service.getEntity().subscribe(function (data) {
            _this.listEntity = data;
            console.log(_this.listEntity);
        });
        //service la poste
        this.emp_service.getlistService(3).subscribe(function (data) {
            _this.listS = data;
            console.log(_this.listS);
        });
        //categorie
        this.emp_service.getlistCategorie().subscribe(function (data) {
            _this.listC = data;
            console.log(_this.listC);
        });
    };
    ListeEmployeComponent.prototype.getService = function (list) {
        var _this = this;
        this.nomEntity = list.nom_entity;
        this.emp_service.getlistService(list.idEntity).subscribe(function (data) {
            _this.listService = data;
            console.log(_this.listService);
        });
    };
    ListeEmployeComponent.prototype.getEmploye = function (listserv) {
        this.router.navigate(['/gestion-employes/employer-par-service/' + listserv.idService]);
        console.log(listserv);
    };
    ListeEmployeComponent.prototype.onFileChange = function (evt) {
        var _this = this;
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            _this.wb = xlsx__WEBPACK_IMPORTED_MODULE_6__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            _this.wb.SheetNames.forEach(function (ele) {
                _this.ws = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].sheet_to_json(_this.wb.Sheets[ele]);
                console.log(_this.ws);
            });
            for (var index = 0; index < _this.ws.length; index++) {
                _this.ws[index];
            }
        };
        reader.readAsBinaryString(target.files[0]);
    };
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
    ListeEmployeComponent.prototype.ajoutEmploye = function (fac) {
        console.log(fac);
        this.entity.idEntity = 3;
        this.statu.idStatut = 1;
        for (var _i = 0, fac_1 = fac; _i < fac_1.length; _i++) {
            var index = fac_1[_i];
            this.employePanier.reference = index.NumRef;
            this.employePanier.nom = index.NOM;
            this.employePanier.prenom = index.PRENOMS;
            this.employePanier.matricule = index.Matricule;
            this.employePanier.sexe = index.Sexe;
            this.employePanier.date_nais = index.DateNaiss;
            this.employePanier.date_recrutement = index.PreEmbauche;
            this.employePanier.Echelonnage = index.Echelon;
            this.employePanier.solde = index.Solde;
            this.employePanier.statut = true;
            this.employePanier.ipmEntity = JSON.parse(JSON.stringify(this.entity));
            this.employePanier.ipmStatutEmploye = JSON.parse(JSON.stringify(this.statu));
            for (var _a = 0, _b = this.listS; _a < _b.length; _a++) {
                var indServ = _b[_a];
                if (index.Service == indServ.type_service) {
                    this.jsonService.idService = indServ.idService;
                    this.jsonService.ipmEntity = this.entity;
                    this.employePanier.ipmService = JSON.parse(JSON.stringify(this.jsonService));
                    console.log(this.employePanier);
                    break;
                }
            }
            for (var _c = 0, _d = this.listC; _c < _d.length; _c++) {
                var indCateg = _d[_c];
                if (index.Catégorie == indCateg.libelle) {
                    this.jsoncategori.code_categorie = indCateg.code_categorie;
                    this.employePanier.ipm_categorie = JSON.parse(JSON.stringify(this.jsoncategori));
                    console.log(this.employePanier);
                    break;
                }
            }
            this.panier.push(__assign({}, this.employePanier));
        }
        console.log(this.panier);
        this.emp_service.AjoutPanierEmploye(this.panier).subscribe(function (data) {
            data;
        });
    };
    ListeEmployeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_5__["EmployeService"] }
    ]; };
    ListeEmployeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-liste-employe',
            template: _raw_loader_liste_employe_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_liste_employe_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_5__["EmployeService"]])
    ], ListeEmployeComponent);
    return ListeEmployeComponent;
}());



/***/ }),

/***/ "h3o4":
/*!*****************************************************************************!*\
  !*** ./src/app/gestion-employes/carnet-employe/carnet-employe.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CarnetEmployeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarnetEmployeComponent", function() { return CarnetEmployeComponent; });
/* harmony import */ var _raw_loader_carnet_employe_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./carnet-employe.component.html */ "V9xf");
/* harmony import */ var _carnet_employe_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carnet-employe.component.css */ "c5VC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Models_Categorie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/Categorie */ "lcUs");
/* harmony import */ var src_app_Models_Conjoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/Conjoint */ "4uqQ");
/* harmony import */ var src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Models/Employe */ "5GYJ");
/* harmony import */ var src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/Enfant */ "yLBP");
/* harmony import */ var src_app_Models_Service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Models/Service */ "hHo9");
/* harmony import */ var src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/conjoint.service */ "NbTU");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Services/enfant.service */ "ABBt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var src_app_Services_bon_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/Services/bon.service */ "AhZP");
/* harmony import */ var _Services_telecharger_fichier_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../Services/telecharger-fichier.service */ "vGXz");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var CarnetEmployeComponent = /** @class */ (function () {
    function CarnetEmployeComponent(locale, toastr, emp_service, fichierTelecharger, bonService, conj_service, enf_service, datePipe, dateAdapter, router, route, fb, snackBar) {
        this.locale = locale;
        this.toastr = toastr;
        this.emp_service = emp_service;
        this.fichierTelecharger = fichierTelecharger;
        this.bonService = bonService;
        this.conj_service = conj_service;
        this.enf_service = enf_service;
        this.datePipe = datePipe;
        this.dateAdapter = dateAdapter;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.snackBar = snackBar;
        this.conjoint = new src_app_Models_Conjoint__WEBPACK_IMPORTED_MODULE_5__["Conjoint"]();
        this.enfant = new src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_7__["Enfant"]();
        this.conjoints = [];
        this.currentconjoint = new src_app_Models_Conjoint__WEBPACK_IMPORTED_MODULE_5__["Conjoint"]();
        this.enfants = [];
        this.currentenfant = new src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_7__["Enfant"]();
        this.myMessage = "Salut votre enregistrement est effectue !!! ";
        this.myId = 0;
        /////////
        this.currentemploye = new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_6__["Employe"]();
        this.today = new Date();
        this.sexe = [{ id: 1, value: "Masculin" },
            { id: 2, value: "Féminin" }
        ];
        this.controlSexe = false;
        this.desactive = false;
        //chemintelechargementFichier=location.origin+"/get/file/";
        this.chemintelechargementFichier = _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].URL + "get/file/";
        this.genreEmp = false;
        ////// controler les champs //////
        this.FormControlEmpployes = this.fb.group({
            nom_conjoint: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            prenom_conjoint: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            sexee: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            date_naiss_conj: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            lieu_naiss_conj: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            telephone: [null],
            selectCertif: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            AttestationChomageURL: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            image: [null]
        });
        //Fin de l'ajout des Conjoints de l'employé
        //Ajout du Conjoint de l'employé
        // initForm(){
        this.FormControlEnfant = this.fb.group({
            nom_enfant: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            prenom_enfant: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            date_nais_enfant: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            lieu_nais_enfant: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            adresse: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            sexM: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            chemin: [null],
            image: [null],
            file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
        });
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_12__["formatDate"])(Date.now(), 'dd-MM-yyyy', this.locale);
        this.addCategorie = new src_app_Models_Categorie__WEBPACK_IMPORTED_MODULE_4__["Categorie"]();
        this.addService = new src_app_Models_Service__WEBPACK_IMPORTED_MODULE_8__["Service"]();
        this.addEmploye = new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_6__["Employe"]();
        this.dateAdapter.setLocale('en-GB');
    }
    CarnetEmployeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.initForm()
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        $('.modal').on('shown.bs.modal', function () {
            mainPanel.classList.add('no-scroll');
        });
        $('.modal').on('hidden.bs.modal', function () {
            mainPanel.classList.remove('no-scroll');
        });
        this.getCategorie();
        this.getService();
        this.getEmploye();
        this.idempBon = this.route.snapshot.params['id'];
        this.id = this.route.snapshot.params['id'];
        this.emp_service.getEmployeById(this.id).subscribe(function (result) {
            var _a;
            _this.currentemploye = result;
            console.log(result);
            _this.justificatifEmp = _this.currentemploye.justificatif;
            _this.justificatifEmp = _this.justificatifEmp.split("/").pop();
            console.log(_this.justificatifEmp);
            if (_this.currentemploye.situation_familial == "Celibataire") {
                _this.condition = true;
                console.log(_this.currentemploye.situation_familial, _this.condition);
            }
            if (_this.currentemploye.sexe == "Féminin") {
                _this.genreEmp = true;
            }
            console.log((_a = _this.currentemploye.ipmEntity) === null || _a === void 0 ? void 0 : _a.nom_entity);
            //const ttoday=new Date();
            //const birthDate = new Date(this.currentemploye.date_nais);
            if (_this.currentemploye.date_nais) {
                console.log(_this.currentemploye.date_nais);
                _this.date = _this.currentemploye.date_nais;
                //convert date again to type Date
                var bdate = new Date(_this.date);
                console.log(_this.date);
                var ttoday = new Date();
                var timeDiff = Math.abs(Date.now() - bdate.getTime());
                _this.agemploye = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                console.log(_this.agemploye);
                _this.agemploye = ttoday.getFullYear() - bdate.getFullYear();
                var m = ttoday.getMonth() - bdate.getMonth();
                console.log(bdate.getFullYear(), bdate.getMonth());
                if (m < 0 || (m === 0 && ttoday.getDate() < bdate.getDate())) {
                    _this.agemploye--;
                }
                console.log(_this.agemploye);
            }
        });
        /////
        this.emp_service.getEmployeByIdSanstof(this.id).subscribe(function (result) {
            _this.currentemployefichier = result;
            console.log(_this.currentemploye);
        });
        ///
        //lister les conjoints en fonction de leur employe
        this.ide = this.route.snapshot.params['id'];
        console.log(this.ide);
        this.conj_service.listeConjoint(this.ide).subscribe(function (conjs) {
            console.log(conjs);
            console.log(conjs[0].certificat);
            _this.pdfSrcCerti = conjs[0].certificat;
            _this.pdfSrcCerti = _this.pdfSrcCerti.split("/").pop();
            console.log(_this.pdfSrcCerti);
            _this.conjoints = conjs;
            console.log(_this.conjoints);
            _this.conjoints.forEach(function (element) {
                if (element.ipm_employe.sexe == "Féminin" && _this.conjoints.length == 1) {
                    console.log(_this.conjoints);
                    _this.controlSexe = true;
                    console.log(_this.conjoints);
                }
            });
        });
        //lister les enfants en fonction de leur employe
        this.iden = this.route.snapshot.params['id'];
        this.enf_service.listeEnfant(this.iden).subscribe(function (enfs) {
            console.log(enfs);
            _this.pdfSrcExtr = enfs[0].extrait_naiss;
            _this.pdfSrcExtr = _this.pdfSrcExtr.split("/").pop();
            console.log(_this.pdfSrcExtr);
            _this.enfants = enfs;
            _this.enfants.forEach(function (ele) {
                if (ele.date_nais_enfant) {
                    //convert date again to type Date
                    var bdate = new Date(ele.date_nais_enfant);
                    var timeDiff = Math.abs(Date.now() - bdate.getTime());
                    _this.agenfant = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                }
                console.log(_this.agenfant);
                if (_this.agenfant > 21) {
                    console.log("Age atteinte impossible de ce beneficie de l'ipm :", _this.agenfant);
                    ele.active = false;
                    ele.agenfant = _this.agenfant;
                    console.log(ele.agenfant);
                    console.log(ele.active);
                    console.log("age depasse");
                }
                else if (_this.agenfant < 21) {
                    console.log("Voici l'age :", _this.agenfant);
                    ele.active = true;
                    ele.agenfant = _this.agenfant;
                    console.log(ele.active);
                    console.log("age non depasse");
                }
            });
            console.log(_this.enfants);
        });
    };
    CarnetEmployeComponent.prototype.routage = function (enfant) {
        var _this = this;
        console.log(enfant.extrait_naiss);
        location.href = 'enfant.extrait_naiss';
        var reader = new FileReader();
        reader.readAsDataURL(enfant.extrait_naiss);
        reader.onload = function (event2) {
            _this.imgURL = reader.result;
        };
        //this.router.navigate(['enfant.extrait_naiss'])
    };
    CarnetEmployeComponent.prototype.sexeEnfant = function (sex) {
        console.log(sex);
        this.sexChoisi = sex.value;
        this.ngOnInit();
    };
    /*sexeConjoint(sex){
      this.sexconjChoisi=sex.value
  
    }*/
    CarnetEmployeComponent.prototype.getConjointById = function (conjoint) {
        var _this = this;
        this.conj_service.getConjointById(conjoint.idconj).subscribe(function (result) {
            _this.currentconjoint = result;
            _this.nom_conjoint = _this.currentconjoint.nom_conjoint;
            _this.prenom_conjoint = _this.currentconjoint.prenom_conjoint;
            _this.sexe_conjoint = _this.currentconjoint.sexe_conjoint;
            _this.date_naiss_conj = _this.currentconjoint.date_naiss_conj;
            _this.lieu_naiss_conj = _this.currentconjoint.lieu_naiss_conj;
            _this.telephone = _this.currentconjoint.telephone;
            // this.imgURL=this.currentconjoint.photos
            _this.date_naiss_conj = _this.currentconjoint.date_naiss_conj;
            console.log(_this.currentconjoint);
        });
    };
    CarnetEmployeComponent.prototype.getConjointByIdsansPhoto = function (conjoint) {
        var _this = this;
        this.conj_service.getConjointByIdsansPhoto(conjoint.idconj).subscribe(function (result) {
            _this.currentconjoint = result;
            _this.certifica = _this.currentconjoint.certificat;
            _this.nom_conjoint = _this.currentconjoint.nom_conjoint;
            _this.prenom_conjoint = _this.currentconjoint.prenom_conjoint;
            _this.sexe_conjoint = _this.currentconjoint.sexe_conjoint;
            _this.date_naiss_conj = _this.currentconjoint.date_naiss_conj;
            _this.lieu_naiss_conj = _this.currentconjoint.lieu_naiss_conj;
            _this.telephone = _this.currentconjoint.telephone;
            _this.certificat = _this.currentconjoint.certificat;
            console.log(_this.certificat);
            _this.certificat = _this.certificat.split("/").pop();
            _this.attestationDeChomage = _this.currentconjoint.attestationDeChomage;
            _this.attestationDeChomage = _this.attestationDeChomage.split("/").pop();
            console.log(_this.attestationDeChomage);
            // this.imgURL = this.currentconjoint.photos
            _this.date_naiss_conj = _this.currentconjoint.date_naiss_conj;
            console.log(_this.currentconjoint.certificat);
            console.log(_this.chemintelechargementFichier);
        });
    };
    CarnetEmployeComponent.prototype.ModifConjointNow = function () {
        var _this = this;
        //this.currentconjoint.nom_conjoint
        console.log(this.currentconjoint.nom_conjoint);
        console.log(this.nom_conjoint);
        this.currentconjoint.nom_conjoint = this.nom_conjoint;
        this.currentconjoint.prenom_conjoint = this.prenom_conjoint;
        this.currentconjoint.sexe_conjoint = this.sexe_conjoint;
        this.currentconjoint.date_naiss_conj = this.date_naiss_conj;
        this.currentconjoint.lieu_naiss_conj = this.lieu_naiss_conj;
        this.currentconjoint.telephone = this.telephone;
        if (this.selectCertif) {
            this.currentconjoint.certificat = this.selectCertif.name;
        }
        if (this.selectedFile) {
            this.currentconjoint.photos = this.selectedFile.name;
        }
        if (this.SelectAttest) {
            this.currentconjoint.attestationDeChomage = this.SelectAttest.name;
        }
        console.log(this.currentconjoint);
        // this.conj_service.modifConjoint(this.currentconjoint).subscribe((data) => {
        //     this.ngOnInit();
        //     console.log(data)
        // })
        if (this.selectedFile) {
            this.conj_service.uploadFile(this.selectedFile).subscribe(function (data) {
                _this.message = data;
                console.log("the message ", data);
                return _this.message;
            });
        }
        if (this.selectCertif) {
            this.conj_service.uploadFileCertif(this.selectCertif).subscribe(function (data) {
                _this.message = data;
                console.log("the message ", data);
                return _this.message;
            });
        }
        if (this.SelectAttest) {
            this.conj_service.uploadAttestationChomage(this.SelectAttest).subscribe(function (data) {
                console.log("******************");
                _this.message = data;
                return _this.message;
            });
        }
        this.conj_service.modifConjointeAttestChomage(this.currentconjoint).subscribe(function (donnee) {
            console.log("-------------");
            console.log(donnee);
            _this.ngOnInit();
        });
        // this.FormControlEmpployes.reset();
    };
    CarnetEmployeComponent.prototype.modifierPhotoConjoint = function () {
        var _this = this;
        this.currentconjoint.photos = this.selectEditphotoconjoint.name;
        this.conj_service.modifPhotoConjoint(this.currentconjoint).subscribe(function (data) { _this.ngOnInit(); });
        this.conj_service.uploadFile(this.selectEditphotoconjoint).subscribe(function (data) {
            _this.message = data;
            console.log("the message ", data);
            return _this.message;
        }), function (error) {
            console.error(error);
        };
    };
    CarnetEmployeComponent.prototype.getFichierTelecharger = function (fichier) {
        this.fichierTelecharger.getTelechargementFichier(fichier).subscribe(function () {
            console.log(jquery__WEBPACK_IMPORTED_MODULE_15__["data"]);
        });
    };
    CarnetEmployeComponent.prototype.getEnfantById = function (enfant) {
        var _this = this;
        this.enf_service.getEnfantByIdsansPhoto(enfant.idenf).subscribe(function (result) {
            _this.enfant = result;
            _this.nom_enfant = _this.enfant.nom_enfant;
            _this.prenom_enfant = _this.enfant.prenom_enfant;
            _this.sexe_enfant = _this.enfant.sexe_enfant;
            _this.date_nais_enfant = _this.enfant.date_nais_enfant;
            _this.lieu_nais_enfant = _this.enfant.lieu_nais_enfant;
            _this.adresse = _this.enfant.adresse;
        });
    };
    CarnetEmployeComponent.prototype.getEnfantbyPhoto = function (enfant) {
        var _this = this;
        this.enf_service.getEnfantById(enfant.idenf).subscribe(function (result) {
            _this.enfant = result;
            _this.nom_enfant = _this.enfant.nom_enfant;
            _this.prenom_enfant = _this.enfant.prenom_enfant;
            _this.sexe_enfant = _this.enfant.sexe_enfant;
            _this.date_nais_enfant = _this.enfant.date_nais_enfant;
            _this.lieu_nais_enfant = _this.enfant.lieu_nais_enfant;
            _this.adresse = _this.enfant.adresse;
            _this.imgURL = _this.enfant.chemin;
            console.log(_this.imgURL);
        });
    };
    CarnetEmployeComponent.prototype.modifEnfant = function () {
        var _this = this;
        this.enfant.nom_enfant = this.nom_enfant;
        this.enfant.prenom_enfant = this.prenom_enfant;
        this.enfant.sexe_enfant = this.sexe_enfant;
        this.enfant.date_nais_enfant = this.date_nais_enfant;
        this.enfant.lieu_nais_enfant = this.lieu_nais_enfant;
        this.enfant.adresse = this.adresse;
        // if(this.selectedFile){
        //   this.enfant.chemin=this.selectedFile.name
        // }
        console.log(this.enfant);
        this.enf_service.modifEnfant(this.enfant).subscribe(function (data) {
            _this.ngOnInit();
        });
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
    };
    CarnetEmployeComponent.prototype.modifierPhotoEnfant = function () {
        var _this = this;
        this.currentenfant.chemin = this.selectEditphotoenfant.name;
        this.enf_service.modifPhotoEnfant(this.currentenfant).subscribe(function (data) { _this.ngOnInit(); });
        this.enf_service.uploadFile(this.selectEditphotoenfant).subscribe(function (data) {
            _this.message = data;
            console.log("the message ", data);
            _this.toastr.info("Modification du phot avec succès");
            return _this.message;
        }), function (error) {
            console.error(error);
            _this.toastr.error("Echec");
        };
    };
    ////////////----------------//////////////////
    CarnetEmployeComponent.prototype.getEmployeById = function (employe) {
        var _this = this;
        this.emp_service.getEmployeById(employe.idemp).subscribe(function (result) {
            _this.currentemploye = result;
            console.log(_this.currentemploye.date_nais);
        });
    };
    //Recuperer les employe au niveau  des conjoints
    CarnetEmployeComponent.prototype.getEmploye = function () {
        var _this = this;
        this.conj_service.getEmploye().subscribe(function (conj) {
            _this.employe = conj;
        });
    };
    CarnetEmployeComponent.prototype.getService = function () {
        var _this = this;
        this.emp_service.getService().subscribe(function (serv) {
            // console.log(serv);
            _this.service = serv;
            // console.log(this.service)
        });
    };
    CarnetEmployeComponent.prototype.getCategorie = function () {
        var _this = this;
        this.emp_service.getCategorie().subscribe(function (cat) {
            // console.log(cat);
            _this.categorie = cat;
            // console.log(this.categorie)
        });
    };
    //Ajout du Conjoint de l'employé
    CarnetEmployeComponent.prototype.ConjointNow = function () {
        var _this = this;
        this.conjoint.nom_conjoint = this.nom_conjoint;
        this.conjoint.prenom_conjoint = this.prenom_conjoint;
        this.conjoint.telephone = this.telephone;
        this.conjoint.lieu_naiss_conj = this.lieu_naiss_conj;
        this.conjoint.date_naiss_conj = this.date_naiss_conj;
        this.conjoint.ipm_employe = JSON.parse(JSON.stringify(this.currentemploye));
        console.log(this.conjoint.ipm_employe);
        //   var date = this.datePipe.transform(this.conjoint.date_naiss_conj, "dd-MM-yyyy");
        // this.conjoint.date_naiss_conj= date;
        this.conjoint.sexe_conjoint = this.sexChoisi;
        console.log(this.conjoint);
        if (this.selectedFile) {
            this.conjoint.photos = this.selectedFile.name;
        }
        if (this.selectCertif) {
            this.conjoint.certificat = this.selectCertif.name;
        }
        if (this.SelectAttest) {
            this.conjoint.attestationDeChomage = this.SelectAttest.name;
        }
        console.log(this.conjoint);
        this.conj_service.AjoutConjoint(this.conjoint).subscribe(function (donnee) {
            console.log((donnee));
        });
        if (this.selectedFile) {
            this.conj_service.uploadFile(this.selectedFile).subscribe(function (data) {
                _this.message = data;
                console.log("the message ", data);
                return _this.message;
            });
        }
        if (this.selectCertif) {
            this.conj_service.uploadFileCertif(this.selectCertif).subscribe(function (data) {
                _this.message = data;
                console.log("the message ", data);
                return _this.message;
            });
        }
        if (this.SelectAttest) {
            this.conj_service.uploadAttestationChomage(this.SelectAttest).subscribe(function (data) {
                _this.message = data;
                console.log("the message ", data);
                return _this.message;
            });
        }
        if (!this.message) {
            this.showNotification('top', 'center', 1, '<b>conjoint ajouté</b> :');
            console.log(this.message);
            this.router.navigate(['carnet-employe/:id']);
            this.selectCertif = null;
            this.SelectAttest = null;
            this.CertifURL = null;
            this.conjoints.push(this.conjoint);
        }
        else if (this.message == null) {
            console.log("not existe");
            this.showNotification('top', 'center', 3, "<b>conjoint non ajouté</b> :");
        }
        this.FormControlEmpployes.reset();
        //   location.reload();
    };
    CarnetEmployeComponent.prototype.retourner = function () {
        //this.router.navigate(['/gestion-employes/ListeEmployes']);
        this.router.navigate(['/gestion-employes/ListeEmployeById/' + this.currentemploye.idemp]);
    };
    CarnetEmployeComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
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
    };
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
    CarnetEmployeComponent.prototype.modifPhoto = function (event) {
        var _this = this;
        this.selectChemin = event.target.files[0];
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.CheminURL = readerr.result;
        };
    };
    CarnetEmployeComponent.prototype.EnfantNow = function () {
        var _this = this;
        this.enfant.nom_enfant = this.nom_enfant;
        this.enfant.prenom_enfant = this.prenom_enfant;
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
        console.log(this.enfant);
        this.enfant.sexe_enfant = this.sexChoisi;
        if (this.selectExtrait) {
            this.enfant.extrait_naiss = this.selectExtrait.name;
        }
        this.enf_service.AjoutEnfant(this.enfant).subscribe(function (data) {
            _this.ngOnInit();
            _this.message = data;
            console.log("the message ", data);
            return _this.message;
        });
        if (this.selectedFile) {
            this.enf_service.uploadFile(this.selectedFile).subscribe(function (data) {
                _this.message = data;
                console.log("the message", data);
                return _this.message;
            });
        }
        if (this.selectExtrait) {
            this.enf_service.uploadFileExtrait(this.selectExtrait).subscribe(function (data) {
                _this.enfants;
                //console.log("the message",data)
                //return this.message
            });
        }
        if (!this.message) {
            this.showNotification1('top', 'center', 1, '<b>enfant ajouté</b> :');
            // console.log(this.message);
            this.router.navigate(['/carnet-employe/:id']);
            this.selectExtrait = null;
            this.selectedFile = null;
            this.ExtraitURL = null;
            this.enfants.push(this.enfant);
        }
        else if (this.message == null) {
            console.log("not existe");
            this.showNotification1('top', 'center', 3, "<b>enfant non ajouté</b> :");
        }
        this.FormControlEnfant.reset();
    };
    /////////Entité
    CarnetEmployeComponent.prototype.getEntity = function () {
        var _this = this;
        this.emp_service.getEntity().subscribe(function (ent) {
            // console.log(cat);
            _this.entity = ent;
            console.log(_this.entity);
        });
    };
    CarnetEmployeComponent.prototype.showNotification1 = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
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
    };
    ////////////////////----------/////////////////
    //recuperer le fichier
    CarnetEmployeComponent.prototype.getFile = function (event) {
        var _this = this;
        console.log(event);
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (event2) {
            _this.imgURL = reader.result;
            if (_this.imgURL = !null) {
                console.log(_this.imgURL);
            }
        };
        console.log(this.imgURL);
    };
    CarnetEmployeComponent.prototype.selctExtrait = function (event) {
        var _this = this;
        this.selectExtrait = event.target.files[0];
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.ExtraitURL = readerr.result;
        };
    };
    CarnetEmployeComponent.prototype.selectCertificat = function (event) {
        var _this = this;
        //selectCertif
        console.log(event);
        this.selectCertif = event.target.files[0];
        console.log(this.selectCertif);
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.CertifURL = readerr.result;
            console.log(_this.CertifURL);
        };
        console.log(this.selectCertif);
    };
    CarnetEmployeComponent.prototype.selectAttestationChomage = function (event) {
        var _this = this;
        console.log(event);
        this.SelectAttest = event.target.files[0];
        console.log(this.SelectAttest);
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.AttestationChomageURL = readerr.result;
            console.log(_this.AttestationChomageURL);
        };
    };
    CarnetEmployeComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        // console.log(event);
        this.selectdFile = event.target.files[0];
        var readers = new FileReader();
        readers.readAsDataURL(event.target.files[0]);
        readers.onload = function (evente2) {
            _this.imgURL2 = readers.result;
        };
    };
    CarnetEmployeComponent.prototype.image = function () {
        console.log(this.imgURL2);
        this.router.navigate(['this.imgURL2']);
    };
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
    CarnetEmployeComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            console.log(file);
            if (file.size == _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpEventType"].UploadProgress) {
                this.uploadProgress = Math.round(100 * (event.loaded / event.total));
                console.log(this.uploadProgress);
            }
        }
    };
    //////////editPhoto employé
    CarnetEmployeComponent.prototype.editphoto = function (event) {
        var _this = this;
        this.selectEditphoto = event.target.files[0];
        var readers = new FileReader();
        readers.readAsDataURL(event.target.files[0]);
        readers.onload = function (evente2) {
            _this.imgURL3 = readers.result;
            // this.currentemploye.photo=null
        };
    };
    //////////editfichier employé
    CarnetEmployeComponent.prototype.editfchierJustificatif = function (event) {
        var _this = this;
        console.log(this.fichierURL);
        console.log(this.currentemploye.justificatif);
        this.selectEditJustif = event.target.files[0];
        console.log(this.selectEditJustif);
        var readers = new FileReader();
        readers.readAsDataURL(event.target.files[0]);
        readers.onload = function (evente2) {
            _this.fichierURL = readers.result;
            // this.currentemploye.photo=null
            console.log(_this.currentemploye.justificatif);
        };
    };
    //edit photo conjoint
    CarnetEmployeComponent.prototype.editphotoEnfant = function (event) {
        var _this = this;
        this.selectEditphotoenfant = event.target.files[0];
        var readers = new FileReader();
        readers.readAsDataURL(event.target.files[0]);
        readers.onload = function (evente2) {
            _this.imgURL5 = readers.result;
            // this.currentemploye.photo=null
        };
    };
    //edit photo conjoint
    CarnetEmployeComponent.prototype.editphotoConjoint = function (event) {
        var _this = this;
        this.selectEditphotoconjoint = event.target.files[0];
        var readers = new FileReader();
        readers.readAsDataURL(event.target.files[0]);
        readers.onload = function (evente2) {
            _this.imgURL4 = readers.result;
            // this.currentemploye.photo=null
        };
    };
    ///Modifié l'employé
    CarnetEmployeComponent.prototype.Modifier = function () {
        var _this = this;
        this.currentemploye.photo = this.selectEditphoto.name;
        this.emp_service.ModifierEmploye(this.currentemploye).subscribe(function () {
            _this.emp_service.addUploadData(_this.selectEditphoto).subscribe(function (data) {
                _this.message = data;
                console.log("the message ", data);
                //return this.message
            });
            _this.toastr.success("Modification Effectué avec succès");
            // this.router.navigate(['/gestion-employes/ListeEmployes']) ;
        }, function (error) {
            console.log(error);
            // alert("Probleme lors de la modification !");
            _this.toastr.error("Erreur lors de la modification de l'image");
        });
    };
    ///Modifié fichier employé
    CarnetEmployeComponent.prototype.ModifierfichierEmploye = function () {
        var _this = this;
        this.currentemployefichier.justificatif = this.selectEditJustif.name;
        console.log(this.currentemployefichier.justificatif);
        this.emp_service.ModifierfichierEmploye(this.currentemployefichier).subscribe(function () {
            _this.emp_service.addUploadJustif(_this.selectEditJustif).subscribe(function (data) {
                _this.message = data;
                console.log("the message ", data);
                //return this.message
                _this.selectEditJustif = null;
                _this.fichierURL = null;
            });
            _this.toastr.success("Modification Effectué avec succès");
            // this.router.navigate(['/gestion-employes/ListeEmployes']) ;
        }, function (error) {
            console.log(error);
            // alert("Probleme lors de la modification !");
            _this.toastr.error("Erreur lors de la modification du fichier");
        });
        this.FormControlEmpployes.reset();
    };
    CarnetEmployeComponent.prototype.listFacture = function () {
        var _this = this;
        this.emp_service.ListFactureByEmploye(this.iden).subscribe(function (data) {
            _this.listFactures = data;
            console.log(_this.listFactures);
            _this.montant = _this.listFactures.reduce(function (sum, current) { return sum + current.montant_facture; }, 0);
            _this.partIpm = _this.listFactures.reduce(function (sum, current) { return sum + current.part_patient; }, 0);
            _this.partPatient = _this.listFactures.reduce(function (sum, current) { return sum + current.part_ipm; }, 0);
            //return this.message
        });
    };
    CarnetEmployeComponent.prototype.ShowNotification = function () {
        this.snackBar.open('Certificat de Mariage obligatoire', 'ok', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
        });
    };
    //Consulter Bon de l'employé
    CarnetEmployeComponent.prototype.consulter = function () {
        var _this = this;
        this.bonService.getEmpBonById(this.idempBon).subscribe(function (result) {
            _this.currentBon = result;
            _this.nombre = _this.currentBon.length;
            console.log(_this.currentBon);
            if (_this.currentBon.length == 0 && _this.nombre == 0) {
                _this.desactive = true;
            }
        });
    };
    CarnetEmployeComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrService"] },
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__["EmployeService"] },
        { type: _Services_telecharger_fichier_service__WEBPACK_IMPORTED_MODULE_19__["TelechargerFichierService"] },
        { type: src_app_Services_bon_service__WEBPACK_IMPORTED_MODULE_18__["BonService"] },
        { type: src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_9__["ConjointService"] },
        { type: src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_11__["EnfantService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["DateAdapter"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBar"] }
    ]; };
    CarnetEmployeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-carnet-employe',
            template: _raw_loader_carnet_employe_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_carnet_employe_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [String, ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrService"],
            src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__["EmployeService"],
            _Services_telecharger_fichier_service__WEBPACK_IMPORTED_MODULE_19__["TelechargerFichierService"],
            src_app_Services_bon_service__WEBPACK_IMPORTED_MODULE_18__["BonService"],
            src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_9__["ConjointService"],
            src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_11__["EnfantService"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["DateAdapter"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBar"]])
    ], CarnetEmployeComponent);
    return CarnetEmployeComponent;
}());



/***/ }),

/***/ "hHo9":
/*!***********************************!*\
  !*** ./src/app/Models/Service.ts ***!
  \***********************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
var Service = /** @class */ (function () {
    function Service() {
    }
    return Service;
}());



/***/ }),

/***/ "hzQl":
/*!*********************************************************************!*\
  !*** ./src/app/gestion-employes/gestion-employes-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeRoutes", function() { return EmployeRoutes; });
/* harmony import */ var _ajouter_employes_ajouter_employes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajouter-employes/ajouter-employes.component */ "UgPs");
/* harmony import */ var _carnet_employe_carnet_employe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carnet-employe/carnet-employe.component */ "h3o4");
/* harmony import */ var _employer_par_service_employer_par_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employer-par-service/employer-par-service.component */ "3iAe");
/* harmony import */ var _liste_employe_liste_employe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liste-employe/liste-employe.component */ "gVdH");
/* harmony import */ var _liste_employes_liste_employes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./liste-employes/liste-employes.component */ "GAw6");
/* harmony import */ var _modifier_employes_modifier_employes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifier-employes/modifier-employes.component */ "W/EP");
/* harmony import */ var _recherche_employe_recherche_employe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recherche-employe/recherche-employe.component */ "5+GY");
/* harmony import */ var _supprimer_employes_supprimer_employes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supprimer-employes/supprimer-employes.component */ "r9Pp");
/* harmony import */ var _liste_employer_by_id_liste_employer_by_id_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./liste-employer-by-id/liste-employer-by-id.component */ "026S");









var EmployeRoutes = [
    {
        path: '',
        children: [{
                path: 'rechercheEmploye',
                component: _recherche_employe_recherche_employe_component__WEBPACK_IMPORTED_MODULE_6__["RechercheEmployeComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'AjouterEmployes',
                component: _ajouter_employes_ajouter_employes_component__WEBPACK_IMPORTED_MODULE_0__["AjouterEmployesComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'Liste-des-Employes',
                component: _liste_employe_liste_employe_component__WEBPACK_IMPORTED_MODULE_3__["ListeEmployeComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'employer-par-service/:id',
                component: _employer_par_service_employer_par_service_component__WEBPACK_IMPORTED_MODULE_2__["EmployerParServiceComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'carnetEmploye/:id',
                component: _carnet_employe_carnet_employe_component__WEBPACK_IMPORTED_MODULE_1__["CarnetEmployeComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'ListeEmployes',
                component: _liste_employes_liste_employes_component__WEBPACK_IMPORTED_MODULE_4__["ListeEmployesComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'ListeEmployeById/:id',
                component: _liste_employer_by_id_liste_employer_by_id_component__WEBPACK_IMPORTED_MODULE_8__["ListeEmployerByIdComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'ModifierEmployes/:id',
                component: _modifier_employes_modifier_employes_component__WEBPACK_IMPORTED_MODULE_5__["ModifierEmployesComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'SupprimerEmployes',
                component: _supprimer_employes_supprimer_employes_component__WEBPACK_IMPORTED_MODULE_7__["SupprimerEmployesComponent"]
            }]
    },
];


/***/ }),

/***/ "iQ/u":
/*!**************************************************************************************!*\
  !*** ./src/app/gestion-employes/supprimer-employes/supprimer-employes.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tZW1wbG95ZXMvc3VwcHJpbWVyLWVtcGxveWVzL3N1cHByaW1lci1lbXBsb3llcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "kNT0":
/*!******************************************************************************!*\
  !*** ./src/app/gestion-employes/liste-employes/liste-employes.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .form-control{\n  padding: 5px 10px;\n  background-color: rgb(20, 121, 223);\n  color: white;\n  border-color: black;\n  width: 100px;\n  height: 30px;\n}\noption:hover{\n  background-color: white;\n  color: rgb(52, 119, 179);\n} */\n\n    .btn-group button {\n        background-color: #1240d4;\n        border: none;\n        /* Green border */\n        color: white;\n        /* White text */\n        padding: 10px 100px;\n        /* Some padding */\n        cursor: pointer;\n        /* Pointer/hand icon */\n        float: left;\n        /* Float the buttons side by side */\n\n    }\n\n    /* Clear floats (clearfix hack) */\n\n    .btn-group:after {\n        content: \"\";\n        clear: both;\n        display: table;\n    }\n\n    .btn-group button:not(:last-child) {\n        border-right: none;\n        /* Prevent double borders */\n    }\n\n    .my-overlay {\n      left: 0 !important;\n      top: 0 !important;\n      z-index: 10000 !important;\n      width: 100% !important;\n      height: 100% !important;\n      position: fixed !important;\n      background-color: rgba(0,0,0,0.9) !important;\n      cursor: pointer !important;\n      visibility: visible !important;\n      transition: visibility 0s, opacity 0.4s linear !important;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: wait !important;\n  }\n\n    .my-overlay i.fa.fa-spinner.fa-spin, .spinner-big {\n      font-size: 100px !important;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VzdGlvbi1lbXBsb3llcy9saXN0ZS1lbXBsb3llcy9saXN0ZS1lbXBsb3llcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHOztJQUVDO1FBQ0kseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLG1DQUFtQzs7SUFFdkM7O0lBRUEsaUNBQWlDOztJQUNqQztRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQiwyQkFBMkI7SUFDL0I7O0lBR0E7TUFDRSxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLHlCQUF5QjtNQUN6QixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLDBCQUEwQjtNQUMxQiw0Q0FBNEM7TUFDNUMsMEJBQTBCO01BQzFCLDhCQUE4QjtNQUM5Qix5REFBeUQ7TUFDekQsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsdUJBQXVCO0VBQzNCOztJQUNBO01BQ0ksMkJBQTJCO0VBQy9CIiwiZmlsZSI6InNyYy9hcHAvZ2VzdGlvbi1lbXBsb3llcy9saXN0ZS1lbXBsb3llcy9saXN0ZS1lbXBsb3llcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmZvcm0tY29udHJvbHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTIxLCAyMjMpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxub3B0aW9uOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHJnYig1MiwgMTE5LCAxNzkpO1xufSAqL1xuXG4gICAgLmJ0bi1ncm91cCBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI0MGQ0O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIC8qIEdyZWVuIGJvcmRlciAqL1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIC8qIFdoaXRlIHRleHQgKi9cbiAgICAgICAgcGFkZGluZzogMTBweCAxMDBweDtcbiAgICAgICAgLyogU29tZSBwYWRkaW5nICovXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLyogUG9pbnRlci9oYW5kIGljb24gKi9cbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIC8qIEZsb2F0IHRoZSBidXR0b25zIHNpZGUgYnkgc2lkZSAqL1xuXG4gICAgfVxuXG4gICAgLyogQ2xlYXIgZmxvYXRzIChjbGVhcmZpeCBoYWNrKSAqL1xuICAgIC5idG4tZ3JvdXA6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgfVxuXG4gICAgLmJ0bi1ncm91cCBidXR0b246bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgLyogUHJldmVudCBkb3VibGUgYm9yZGVycyAqL1xuICAgIH1cblxuXG4gICAgLm15LW92ZXJsYXkge1xuICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICB6LWluZGV4OiAxMDAwMCAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSkgIWltcG9ydGFudDtcbiAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjRzIGxpbmVhciAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogd2FpdCAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1vdmVybGF5IGkuZmEuZmEtc3Bpbm5lci5mYS1zcGluLCAuc3Bpbm5lci1iaWcge1xuICAgICAgZm9udC1zaXplOiAxMDBweCAhaW1wb3J0YW50O1xuICB9XG4iXX0= */");

/***/ }),

/***/ "lcUs":
/*!*************************************!*\
  !*** ./src/app/Models/Categorie.ts ***!
  \*************************************/
/*! exports provided: Categorie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categorie", function() { return Categorie; });
var Categorie = /** @class */ (function () {
    function Categorie() {
    }
    return Categorie;
}());



/***/ }),

/***/ "lveH":
/*!************************************************************************************!*\
  !*** ./src/app/gestion-employes/modifier-employes/modifier-employes.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\n    text-align: center;\n    text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VzdGlvbi1lbXBsb3llcy9tb2RpZmllci1lbXBsb3llcy9tb2RpZmllci1lbXBsb3llcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tZW1wbG95ZXMvbW9kaWZpZXItZW1wbG95ZXMvbW9kaWZpZXItZW1wbG95ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */");

/***/ }),

/***/ "oPyJ":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-employes/employer-par-service/employer-par-service.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!--modql employe-->\n       \n                    \n <div class=\"col-md-12\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-icon\" >\n            <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n              <i class=\"material-icons\">list</i>\n            </div>\n            <h3 style=\"background-color:whitesmoke; color: black; padding: 5px; font-weight: 400; width: 80%;\">Liste des employés du service {{nomService}}</h3>\n        </div>\n        \n            <div class=\"card-body\">\n               \n\n <div class=\"material-datatable\">\n    <div class=\"text-center\">\n        <mat-spinner *ngIf=\"!listEmployer\" style=\"margin-left: 15cm;\"></mat-spinner>\n       \n      </div>\n    <table id=\"datatable\" class=\"table  table-hover table-bordered\"\n        cellspacing=\"0\" width=\"100%\" style=\"width:100%; font-weight: bold;\">\n\n        <thead style=\"background-color: whitesmoke;\">\n\n            <tr>\n                <th style=\"font-weight: bold;\" class=\"text-center\" cope=\"col\"> Matricule</th>\n                <th style=\"font-weight: bold;\" class=\"text-center\" cope=\"col\">Prenom</th>\n                <th style=\"font-weight: bold;\" class=\"text-center\" cope=\"col\">Nom</th>\n                <th style=\"font-weight: bold;\" class=\"text-center\" cope=\"col\">Adresse</th>\n                <!-- <th cope=\"col\">Code Prestation</th> -->\n\n                <th style=\"font-weight: bold;\" class=\"text-center\" cope=\"col\">cumule charge</th>\n                <th style=\"font-weight: bold;\" class=\"text-center\" cope=\"col\">Solde</th>\n                <th style=\"font-weight: bold;\" class=\"text-center\" cope=\"col\">Telephone</th>\n                <th style=\"font-weight: bold;\" class=\"text-center\" cope=\"col\">Numero carnet</th>\n                <!-- <th class=\"text-center\" cope=\"col\">Action</th>\n                <th class=\"text-center\" cope=\"col\"></th> -->\n            </tr>\n        </thead>\n        <tbody>\n\n            <tr *ngFor=\"let employ of listEmployer\">\n                <td class=\"text-center\">{{employ.matricule}}</td>\n                <td class=\"text-center\">{{employ.prenom}}</td>\n                <td class=\"text-center\">{{employ.nom}}</td>\n                <td class=\"text-center\">{{employ.adresse_domicile}}</td>\n                <!-- <td>{{fac.ipm_prestation?.code_prestation}}</td>\n -->\n                <td class=\"text-center\">{{employ.cumul_charge}}</td>\n                <td class=\"text-center\">{{employ.solde}}</td>\n                <td class=\"text-center\">{{employ.telephone}}</td>\n                <td class=\"text-center\">{{employ.numero_carnet}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n</div>\n</div>\n</div>\n\n\n\n\n<!--finmodal-->");

/***/ }),

/***/ "r9Pp":
/*!*************************************************************************************!*\
  !*** ./src/app/gestion-employes/supprimer-employes/supprimer-employes.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SupprimerEmployesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupprimerEmployesComponent", function() { return SupprimerEmployesComponent; });
/* harmony import */ var _raw_loader_supprimer_employes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./supprimer-employes.component.html */ "RWyT");
/* harmony import */ var _supprimer_employes_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supprimer-employes.component.css */ "iQ/u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupprimerEmployesComponent = /** @class */ (function () {
    function SupprimerEmployesComponent() {
    }
    SupprimerEmployesComponent.prototype.ngOnInit = function () {
    };
    SupprimerEmployesComponent.ctorParameters = function () { return []; };
    SupprimerEmployesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-supprimer-employes',
            template: _raw_loader_supprimer_employes_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_supprimer_employes_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SupprimerEmployesComponent);
    return SupprimerEmployesComponent;
}());



/***/ }),

/***/ "tbBT":
/*!*********************************************!*\
  !*** ./src/app/Models/IPM_StatutEmploye.ts ***!
  \*********************************************/
/*! exports provided: IPM_StatutEmploye */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPM_StatutEmploye", function() { return IPM_StatutEmploye; });
var IPM_StatutEmploye = /** @class */ (function () {
    function IPM_StatutEmploye(idStatut, emplStatut) {
        this.idStatut = idStatut;
        this.emplStatut = emplStatut;
    }
    return IPM_StatutEmploye;
}());



/***/ }),

/***/ "tmjD":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js ***!
  \*****************************************************************/
/*! exports provided: INITIAL_CONFIG, MaskApplierService, MaskDirective, MaskPipe, MaskService, NEW_CONFIG, NgxMaskModule, _configFactory, config, initialConfig, timeMasks, withoutValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CONFIG", function() { return INITIAL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskApplierService", function() { return MaskApplierService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskDirective", function() { return MaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskPipe", function() { return MaskPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskService", function() { return MaskService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_CONFIG", function() { return NEW_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaskModule", function() { return NgxMaskModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_configFactory", function() { return _configFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialConfig", function() { return initialConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeMasks", function() { return timeMasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withoutValidation", function() { return withoutValidation; });
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/get */ "t9bE");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "KUzl");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/inherits */ "mvVQ");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createSuper */ "/E8u");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "95OS");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "Dhon");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");








function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }






var config = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('config');
var NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('NEW_CONFIG');
var INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('INITIAL_CONFIG');
var initialConfig = {
  suffix: '',
  prefix: '',
  thousandSeparator: ' ',
  decimalMarker: '.',
  clearIfNotMatch: false,
  showTemplate: false,
  showMaskTyped: false,
  placeHolderCharacter: '_',
  dropSpecialCharacters: true,
  hiddenInput: undefined,
  shownMaskExpression: '',
  separatorLimit: '',
  allowNegativeNumbers: false,
  validation: true,
  // tslint:disable-next-line: quotemark
  specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
  leadZeroDateTime: false,
  patterns: {
    '0': {
      pattern: new RegExp('\\d')
    },
    '9': {
      pattern: new RegExp('\\d'),
      optional: true
    },
    X: {
      pattern: new RegExp('\\d'),
      symbol: '*'
    },
    A: {
      pattern: new RegExp('[a-zA-Z0-9]')
    },
    S: {
      pattern: new RegExp('[a-zA-Z]')
    },
    d: {
      pattern: new RegExp('\\d')
    },
    m: {
      pattern: new RegExp('\\d')
    },
    M: {
      pattern: new RegExp('\\d')
    },
    H: {
      pattern: new RegExp('\\d')
    },
    h: {
      pattern: new RegExp('\\d')
    },
    s: {
      pattern: new RegExp('\\d')
    }
  }
};
var timeMasks = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'];
var withoutValidation = ['percent', 'Hh', 's0', 'm0', 'separator', 'd0/M0/0000', 'd0/M0', 'd0', 'M0'];

var MaskApplierService = /*#__PURE__*/function () {
  function MaskApplierService(_config) {
    var _this = this;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MaskApplierService);

    this._config = _config;
    this.maskExpression = '';
    this.actualValue = '';
    this.shownMaskExpression = '';

    this._formatWithSeparators = function (str, thousandSeparatorChar, decimalChar, precision) {
      var x = str.split(decimalChar);
      var decimals = x.length > 1 ? "".concat(decimalChar).concat(x[1]) : '';
      var res = x[0];

      var separatorLimit = _this.separatorLimit.replace(/\s/g, '');

      if (separatorLimit && +separatorLimit) {
        if (res[0] === '-') {
          res = "-".concat(res.slice(1, res.length).slice(0, separatorLimit.length));
        } else {
          res = res.slice(0, separatorLimit.length);
        }
      }

      var rgx = /(\d+)(\d{3})/;

      while (thousandSeparatorChar && rgx.test(res)) {
        res = res.replace(rgx, '$1' + thousandSeparatorChar + '$2');
      }

      if (precision === undefined) {
        return res + decimals;
      } else if (precision === 0) {
        return res;
      }

      return res + decimals.substr(0, precision + 1);
    };

    this.percentage = function (str) {
      return Number(str) >= 0 && Number(str) <= 100;
    };

    this.getPrecision = function (maskExpression) {
      var x = maskExpression.split('.');

      if (x.length > 1) {
        return Number(x[x.length - 1]);
      }

      return Infinity;
    };

    this.checkAndRemoveSuffix = function (inputValue) {
      var _a, _b, _c;

      for (var i = ((_a = _this.suffix) === null || _a === void 0 ? void 0 : _a.length) - 1; i >= 0; i--) {
        var substr = _this.suffix.substr(i, (_b = _this.suffix) === null || _b === void 0 ? void 0 : _b.length);

        if (inputValue.includes(substr) && (i - 1 < 0 || !inputValue.includes(_this.suffix.substr(i - 1, (_c = _this.suffix) === null || _c === void 0 ? void 0 : _c.length)))) {
          return inputValue.replace(substr, '');
        }
      }

      return inputValue;
    };

    this.checkInputPrecision = function (inputValue, precision, decimalMarker) {
      if (precision < Infinity) {
        var precisionRegEx = new RegExp(_this._charToRegExpExpression(decimalMarker) + "\\d{".concat(precision, "}.*$"));
        var precisionMatch = inputValue.match(precisionRegEx);

        if (precisionMatch && precisionMatch[0].length - 1 > precision) {
          var diff = precisionMatch[0].length - 1 - precision;
          inputValue = inputValue.substring(0, inputValue.length - diff);
        }

        if (precision === 0 && inputValue.endsWith(decimalMarker)) {
          inputValue = inputValue.substring(0, inputValue.length - 1);
        }
      }

      return inputValue;
    };

    this._shift = new Set();
    this.clearIfNotMatch = this._config.clearIfNotMatch;
    this.dropSpecialCharacters = this._config.dropSpecialCharacters;
    this.maskSpecialCharacters = this._config.specialCharacters;
    this.maskAvailablePatterns = this._config.patterns;
    this.prefix = this._config.prefix;
    this.suffix = this._config.suffix;
    this.thousandSeparator = this._config.thousandSeparator;
    this.decimalMarker = this._config.decimalMarker;
    this.hiddenInput = this._config.hiddenInput;
    this.showMaskTyped = this._config.showMaskTyped;
    this.placeHolderCharacter = this._config.placeHolderCharacter;
    this.validation = this._config.validation;
    this.separatorLimit = this._config.separatorLimit;
    this.allowNegativeNumbers = this._config.allowNegativeNumbers;
    this.leadZeroDateTime = this._config.leadZeroDateTime;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MaskApplierService, [{
    key: "applyMaskWithPattern",
    value: function applyMaskWithPattern(inputValue, maskAndPattern) {
      var _maskAndPattern = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(maskAndPattern, 2),
          mask = _maskAndPattern[0],
          customPattern = _maskAndPattern[1];

      this.customPattern = customPattern;
      return this.applyMask(inputValue, mask);
    }
  }, {
    key: "applyMask",
    value: function applyMask(inputValue, maskExpression) {
      var _this2 = this;

      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var justPasted = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var backspaced = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cb = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};

      if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
        return '';
      }

      var cursor = 0;
      var result = '';
      var multi = false;
      var backspaceShift = false;
      var shift = 1;
      var stepBack = false;

      if (inputValue.slice(0, this.prefix.length) === this.prefix) {
        inputValue = inputValue.slice(this.prefix.length, inputValue.length);
      }

      if (!!this.suffix && (inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) > 0) {
        inputValue = this.checkAndRemoveSuffix(inputValue);
      }

      var inputArray = inputValue.toString().split('');

      if (maskExpression === 'IP') {
        this.ipError = !!(inputArray.filter(function (i) {
          return i === '.';
        }).length < 3 && inputArray.length < 7);
        maskExpression = '099.099.099.099';
      }

      var arr = [];

      for (var i = 0; i < inputValue.length; i++) {
        if (inputValue[i].match('\\d')) {
          arr.push(inputValue[i]);
        }
      }

      if (maskExpression === 'CPF_CNPJ') {
        this.cpfCnpjError = !!(arr.length !== 11 && arr.length !== 14);

        if (arr.length > 11) {
          maskExpression = '00.000.000/0000-00';
        } else {
          maskExpression = '000.000.000-00';
        }
      }

      if (maskExpression.startsWith('percent')) {
        if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)) {
          inputValue = this._stripToDecimal(inputValue);
          var precision = this.getPrecision(maskExpression);
          inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
        }

        if (inputValue.indexOf('.') > 0 && !this.percentage(inputValue.substring(0, inputValue.indexOf('.')))) {
          var base = inputValue.substring(0, inputValue.indexOf('.') - 1);
          inputValue = "".concat(base).concat(inputValue.substring(inputValue.indexOf('.'), inputValue.length));
        }

        if (this.percentage(inputValue)) {
          result = inputValue;
        } else {
          result = inputValue.substring(0, inputValue.length - 1);
        }
      } else if (maskExpression.startsWith('separator')) {
        if (inputValue.match('[wа-яА-Я]') || inputValue.match('[ЁёА-я]') || inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\[\]:";<>.?\/]/) || inputValue.match('[^A-Za-z0-9,]')) {
          inputValue = this._stripToDecimal(inputValue);
        }

        inputValue = inputValue.length > 1 && inputValue[0] === '0' && inputValue[1] !== this.decimalMarker && !backspaced ? inputValue.slice(1, inputValue.length) : inputValue; // TODO: we had different rexexps here for the different cases... but tests dont seam to bother - check this
        //  separator: no COMMA, dot-sep: no SPACE, COMMA OK, comma-sep: no SPACE, COMMA OK

        var thousandSeperatorCharEscaped = this._charToRegExpExpression(this.thousandSeparator);

        var decimalMarkerEscaped = this._charToRegExpExpression(this.decimalMarker);

        var invalidChars = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(thousandSeperatorCharEscaped, '').replace(decimalMarkerEscaped, '');
        var invalidCharRegexp = new RegExp('[' + invalidChars + ']');

        if (inputValue.match(invalidCharRegexp)) {
          inputValue = inputValue.substring(0, inputValue.length - 1);
        }

        var _precision = this.getPrecision(maskExpression);

        inputValue = this.checkInputPrecision(inputValue, _precision, this.decimalMarker);
        var strForSep = inputValue.replace(new RegExp(thousandSeperatorCharEscaped, 'g'), '');
        result = this._formatWithSeparators(strForSep, this.thousandSeparator, this.decimalMarker, _precision);
        var commaShift = result.indexOf(',') - inputValue.indexOf(',');
        var shiftStep = result.length - inputValue.length;

        if (shiftStep > 0 && result[position] !== ',') {
          backspaceShift = true;
          var _shift = 0;

          do {
            this._shift.add(position + _shift);

            _shift++;
          } while (_shift < shiftStep);
        } else if (commaShift !== 0 && position > 0 && !(result.indexOf(',') >= position && position > 3) || !(result.indexOf('.') >= position && position > 3) && shiftStep <= 0) {
          this._shift.clear();

          backspaceShift = true;
          shift = shiftStep;
          position += shiftStep;

          this._shift.add(position);
        } else {
          this._shift.clear();
        }
      } else {
        for ( // tslint:disable-next-line
        var _i = 0, inputSymbol = inputArray[0]; _i < inputArray.length; _i++, inputSymbol = inputArray[_i]) {
          if (cursor === maskExpression.length) {
            break;
          }

          if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
            result += inputSymbol;
            cursor += 2;
          } else if (maskExpression[cursor + 1] === '*' && multi && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
            result += inputSymbol;
            cursor += 3;
            multi = false;
          } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '*') {
            result += inputSymbol;
            multi = true;
          } else if (maskExpression[cursor + 1] === '?' && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
            result += inputSymbol;
            cursor += 3;
          } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
            if (maskExpression[cursor] === 'H') {
              if (Number(inputSymbol) > 2) {
                cursor += 1;

                this._shiftStep(maskExpression, cursor, inputArray.length);

                _i--;

                if (this.leadZeroDateTime) {
                  result += '0';
                }

                continue;
              }
            }

            if (maskExpression[cursor] === 'h') {
              if (result === '2' && Number(inputSymbol) > 3) {
                cursor += 1;
                _i--;
                continue;
              }
            }

            if (maskExpression[cursor] === 'm') {
              if (Number(inputSymbol) > 5) {
                cursor += 1;

                this._shiftStep(maskExpression, cursor, inputArray.length);

                _i--;

                if (this.leadZeroDateTime) {
                  result += '0';
                }

                continue;
              }
            }

            if (maskExpression[cursor] === 's') {
              if (Number(inputSymbol) > 5) {
                cursor += 1;

                this._shiftStep(maskExpression, cursor, inputArray.length);

                _i--;

                if (this.leadZeroDateTime) {
                  result += '0';
                }

                continue;
              }
            }

            var daysCount = 31;

            if (maskExpression[cursor] === 'd') {
              if (Number(inputSymbol) > 3 && this.leadZeroDateTime || Number(inputValue.slice(cursor, cursor + 2)) > daysCount || inputValue[cursor + 1] === '/') {
                cursor += 1;

                this._shiftStep(maskExpression, cursor, inputArray.length);

                _i--;

                if (this.leadZeroDateTime) {
                  result += '0';
                }

                continue;
              }
            }

            if (maskExpression[cursor] === 'M') {
              var monthsCount = 12; // mask without day

              var withoutDays = cursor === 0 && (Number(inputSymbol) > 2 || Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/'); // day<10 && month<12 for input

              var day1monthInput = inputValue.slice(cursor - 3, cursor - 1).includes('/') && (inputValue[cursor - 2] === '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount && inputValue[cursor] !== '/' || inputValue[cursor] === '/' || inputValue[cursor - 3] === '/' && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount && inputValue[cursor - 1] !== '/' || inputValue[cursor - 1] === '/'); // 10<day<31 && month<12 for input

              var day2monthInput = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] === '/' && (Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/'); // day<10 && month<12 for paste whole data

              var day1monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) > daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && !inputValue.slice(cursor - 2, cursor).includes('/') && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount; // 10<day<31 && month<12 for paste whole data

              var day2monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] !== '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount;

              if (Number(inputSymbol) > 1 && this.leadZeroDateTime || withoutDays || day1monthInput || day2monthInput || day1monthPaste || day2monthPaste) {
                cursor += 1;

                this._shiftStep(maskExpression, cursor, inputArray.length);

                _i--;

                if (this.leadZeroDateTime) {
                  result += '0';
                }

                continue;
              }
            }

            result += inputSymbol;
            cursor++;
          } else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
            result += maskExpression[cursor];
            cursor++;

            this._shiftStep(maskExpression, cursor, inputArray.length);

            _i--;
          } else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 && this.maskAvailablePatterns[maskExpression[cursor]] && this.maskAvailablePatterns[maskExpression[cursor]].optional) {
            if (!!inputArray[cursor] && maskExpression !== '099.099.099.099' && maskExpression !== '000.000.000-00' && maskExpression !== '00.000.000/0000-00') {
              result += inputArray[cursor];
            }

            cursor++;
            _i--;
          } else if (this.maskExpression[cursor + 1] === '*' && this._findSpecialChar(this.maskExpression[cursor + 2]) && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
            cursor += 3;
            result += inputSymbol;
          } else if (this.maskExpression[cursor + 1] === '?' && this._findSpecialChar(this.maskExpression[cursor + 2]) && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
            cursor += 3;
            result += inputSymbol;
          } else if (this.showMaskTyped && this.maskSpecialCharacters.indexOf(inputSymbol) < 0 && inputSymbol !== this.placeHolderCharacter) {
            stepBack = true;
          }
        }
      }

      if (result.length + 1 === maskExpression.length && this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
        result += maskExpression[maskExpression.length - 1];
      }

      var newPosition = position + 1;

      while (this._shift.has(newPosition)) {
        shift++;
        newPosition++;
      }

      var actualShift = justPasted ? cursor : this._shift.has(position) ? shift : 0;

      if (stepBack) {
        actualShift--;
      }

      cb(actualShift, backspaceShift);

      if (shift < 0) {
        this._shift.clear();
      }

      var onlySpecial = false;

      if (backspaced) {
        onlySpecial = inputArray.every(function (char) {
          return _this2.maskSpecialCharacters.includes(char);
        });
      }

      var res = "".concat(this.prefix).concat(onlySpecial ? '' : result).concat(this.suffix);

      if (result.length === 0) {
        res = "".concat(this.prefix).concat(result);
      }

      return res;
    }
  }, {
    key: "_findSpecialChar",
    value: function _findSpecialChar(inputSymbol) {
      return this.maskSpecialCharacters.find(function (val) {
        return val === inputSymbol;
      });
    }
  }, {
    key: "_checkSymbolMask",
    value: function _checkSymbolMask(inputSymbol, maskSymbol) {
      this.maskAvailablePatterns = this.customPattern ? this.customPattern : this.maskAvailablePatterns;
      return this.maskAvailablePatterns[maskSymbol] && this.maskAvailablePatterns[maskSymbol].pattern && this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol);
    }
  }, {
    key: "_stripToDecimal",
    value: function _stripToDecimal(str) {
      var _this3 = this;

      return str.split('').filter(function (i, idx) {
        return i.match('^-?\\d') || i.match('\\s') || i === '.' || i === ',' || i === '-' && idx === 0 && _this3.allowNegativeNumbers;
      }).join('');
    }
  }, {
    key: "_charToRegExpExpression",
    value: function _charToRegExpExpression(char) {
      if (char) {
        var charsToEscape = '[\\^$.|?*+()';
        return char === ' ' ? '\\s' : charsToEscape.indexOf(char) >= 0 ? '\\' + char : char;
      }

      return char;
    }
  }, {
    key: "_shiftStep",
    value: function _shiftStep(maskExpression, cursor, inputLength) {
      var shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputLength : cursor;

      this._shift.add(shiftStep + this.prefix.length || 0);
    }
  }]);

  return MaskApplierService;
}();

MaskApplierService.ɵfac = function MaskApplierService_Factory(t) {
  return new (t || MaskApplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](config));
};

MaskApplierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: MaskApplierService,
  factory: MaskApplierService.ɵfac
});

MaskApplierService.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [config]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MaskApplierService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [config]
      }]
    }];
  }, null);
})();

var MaskService = /*#__PURE__*/function (_MaskApplierService) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MaskService, _MaskApplierService);

  var _super = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MaskService);

  function MaskService(document, _config, _elementRef, _renderer) {
    var _this4;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MaskService);

    _this4 = _super.call(this, _config);
    _this4.document = document;
    _this4._config = _config;
    _this4._elementRef = _elementRef;
    _this4._renderer = _renderer;
    _this4.maskExpression = '';
    _this4.isNumberValue = false;
    _this4.placeHolderCharacter = '_';
    _this4.maskIsShown = '';
    _this4.selStart = null;
    _this4.selEnd = null;
    /**
     * Whether we are currently in writeValue function, in this case when applying the mask we don't want to trigger onChange function,
     * since writeValue should be a one way only process of writing the DOM value based on the Angular model value.
     */

    _this4.writingValue = false;
    _this4.maskChanged = false;

    _this4.onChange = function (_) {};

    return _this4;
  } // tslint:disable-next-line:cyclomatic-complexity


  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MaskService, [{
    key: "applyMask",
    value: function applyMask(inputValue, maskExpression) {
      var _this5 = this;

      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var justPasted = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var backspaced = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cb = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};

      if (!maskExpression) {
        return inputValue;
      }

      this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';

      if (this.maskExpression === 'IP' && this.showMaskTyped) {
        this.maskIsShown = this.showMaskInInput(inputValue || '#');
      }

      if (this.maskExpression === 'CPF_CNPJ' && this.showMaskTyped) {
        this.maskIsShown = this.showMaskInInput(inputValue || '#');
      }

      if (!inputValue && this.showMaskTyped) {
        this.formControlResult(this.prefix);
        return this.prefix + this.maskIsShown;
      }

      var getSymbol = !!inputValue && typeof this.selStart === 'number' ? inputValue[this.selStart] : '';
      var newInputValue = '';

      if (this.hiddenInput && !this.writingValue) {
        var actualResult = this.actualValue.split(''); // tslint:disable no-unused-expression

        inputValue !== '' && actualResult.length ? typeof this.selStart === 'number' && typeof this.selEnd === 'number' ? inputValue.length > actualResult.length ? actualResult.splice(this.selStart, 0, getSymbol) : inputValue.length < actualResult.length ? actualResult.length - inputValue.length === 1 ? actualResult.splice(this.selStart - 1, 1) : actualResult.splice(this.selStart, this.selEnd - this.selStart) : null : null : actualResult = []; // tslint:enable no-unused-expression

        newInputValue = this.actualValue.length && actualResult.length <= inputValue.length ? this.shiftTypedSymbols(actualResult.join('')) : inputValue;
      }

      newInputValue = Boolean(newInputValue) && newInputValue.length ? newInputValue : inputValue;

      var result = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(MaskService.prototype), "applyMask", this).call(this, newInputValue, maskExpression, position, justPasted, backspaced, cb);

      this.actualValue = this.getActualValue(result); // handle some separator implications:
      // a.) adjust decimalMarker default (. -> ,) if thousandSeparator is a dot

      if (this.thousandSeparator === '.' && this.decimalMarker === '.') {
        this.decimalMarker = ',';
      } // b) remove decimal marker from list of special characters to mask


      if (this.maskExpression.startsWith('separator') && this.dropSpecialCharacters === true) {
        this.maskSpecialCharacters = this.maskSpecialCharacters.filter(function (item) {
          return item !== _this5.decimalMarker;
        });
      }

      this.formControlResult(result);

      if (!this.showMaskTyped) {
        if (this.hiddenInput) {
          return result && result.length ? this.hideInput(result, this.maskExpression) : result;
        }

        return result;
      }

      var resLen = result.length;
      var prefNmask = this.prefix + this.maskIsShown;

      if (this.maskExpression.includes('H')) {
        var countSkipedSymbol = this._numberSkipedSymbols(result);

        return result + prefNmask.slice(resLen + countSkipedSymbol);
      } else if (this.maskExpression === 'IP' || this.maskExpression === 'CPF_CNPJ') {
        return result + prefNmask;
      }

      return result + prefNmask.slice(resLen);
    } // get the number of characters that were shifted

  }, {
    key: "_numberSkipedSymbols",
    value: function _numberSkipedSymbols(value) {
      var regex = /(^|\D)(\d\D)/g;
      var match = regex.exec(value);
      var countSkipedSymbol = 0;

      while (match != null) {
        countSkipedSymbol += 1;
        match = regex.exec(value);
      }

      return countSkipedSymbol;
    }
  }, {
    key: "applyValueChanges",
    value: function applyValueChanges() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var justPasted = arguments.length > 1 ? arguments[1] : undefined;
      var backspaced = arguments.length > 2 ? arguments[2] : undefined;
      var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
      var formElement = this._elementRef.nativeElement;
      formElement.value = this.applyMask(formElement.value, this.maskExpression, position, justPasted, backspaced, cb);

      if (formElement === this.document.activeElement) {
        return;
      }

      this.clearIfNotMatchFn();
    }
  }, {
    key: "hideInput",
    value: function hideInput(inputValue, maskExpression) {
      var _this6 = this;

      return inputValue.split('').map(function (curr, index) {
        if (_this6.maskAvailablePatterns && _this6.maskAvailablePatterns[maskExpression[index]] && _this6.maskAvailablePatterns[maskExpression[index]].symbol) {
          return _this6.maskAvailablePatterns[maskExpression[index]].symbol;
        }

        return curr;
      }).join('');
    } // this function is not necessary, it checks result against maskExpression

  }, {
    key: "getActualValue",
    value: function getActualValue(res) {
      var _this7 = this;

      var compare = res.split('').filter(function (symbol, i) {
        return _this7._checkSymbolMask(symbol, _this7.maskExpression[i]) || _this7.maskSpecialCharacters.includes(_this7.maskExpression[i]) && symbol === _this7.maskExpression[i];
      });

      if (compare.join('') === res) {
        return compare.join('');
      }

      return res;
    }
  }, {
    key: "shiftTypedSymbols",
    value: function shiftTypedSymbols(inputValue) {
      var _this8 = this;

      var symbolToReplace = '';
      var newInputValue = inputValue && inputValue.split('').map(function (currSymbol, index) {
        if (_this8.maskSpecialCharacters.includes(inputValue[index + 1]) && inputValue[index + 1] !== _this8.maskExpression[index + 1]) {
          symbolToReplace = currSymbol;
          return inputValue[index + 1];
        }

        if (symbolToReplace.length) {
          var replaceSymbol = symbolToReplace;
          symbolToReplace = '';
          return replaceSymbol;
        }

        return currSymbol;
      }) || [];
      return newInputValue.join('');
    }
  }, {
    key: "showMaskInInput",
    value: function showMaskInInput(inputVal) {
      if (this.showMaskTyped && !!this.shownMaskExpression) {
        if (this.maskExpression.length !== this.shownMaskExpression.length) {
          throw new Error('Mask expression must match mask placeholder length');
        } else {
          return this.shownMaskExpression;
        }
      } else if (this.showMaskTyped) {
        if (inputVal) {
          if (this.maskExpression === 'IP') {
            return this._checkForIp(inputVal);
          }

          if (this.maskExpression === 'CPF_CNPJ') {
            return this._checkForCpfCnpj(inputVal);
          }
        }

        return this.maskExpression.replace(/\w/g, this.placeHolderCharacter);
      }

      return '';
    }
  }, {
    key: "clearIfNotMatchFn",
    value: function clearIfNotMatchFn() {
      var formElement = this._elementRef.nativeElement;

      if (this.clearIfNotMatch && this.prefix.length + this.maskExpression.length + this.suffix.length !== formElement.value.replace(/_/g, '').length) {
        this.formElementProperty = ['value', ''];
        this.applyMask(formElement.value, this.maskExpression);
      }
    }
  }, {
    key: "formElementProperty",
    set: function set(_ref) {
      var _this9 = this;

      var _ref2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, 2),
          name = _ref2[0],
          value = _ref2[1];

      Promise.resolve().then(function () {
        return _this9._renderer.setProperty(_this9._elementRef.nativeElement, name, value);
      });
    }
  }, {
    key: "checkSpecialCharAmount",
    value: function checkSpecialCharAmount(mask) {
      var _this10 = this;

      var chars = mask.split('').filter(function (item) {
        return _this10._findSpecialChar(item);
      });
      return chars.length;
    }
  }, {
    key: "removeMask",
    value: function removeMask(inputValue) {
      return this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.maskSpecialCharacters.concat('_').concat(this.placeHolderCharacter));
    }
  }, {
    key: "_checkForIp",
    value: function _checkForIp(inputVal) {
      if (inputVal === '#') {
        return "".concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter);
      }

      var arr = [];

      for (var i = 0; i < inputVal.length; i++) {
        if (inputVal[i].match('\\d')) {
          arr.push(inputVal[i]);
        }
      }

      if (arr.length <= 3) {
        return "".concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter);
      }

      if (arr.length > 3 && arr.length <= 6) {
        return "".concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter);
      }

      if (arr.length > 6 && arr.length <= 9) {
        return this.placeHolderCharacter;
      }

      if (arr.length > 9 && arr.length <= 12) {
        return '';
      }

      return '';
    }
  }, {
    key: "_checkForCpfCnpj",
    value: function _checkForCpfCnpj(inputVal) {
      var cpf = "".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + ".".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + ".".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + "-".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter);
      var cnpj = "".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + ".".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + ".".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + "/".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + "-".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter);

      if (inputVal === '#') {
        return cpf;
      }

      var arr = [];

      for (var i = 0; i < inputVal.length; i++) {
        if (inputVal[i].match('\\d')) {
          arr.push(inputVal[i]);
        }
      }

      if (arr.length <= 3) {
        return cpf.slice(arr.length, cpf.length);
      }

      if (arr.length > 3 && arr.length <= 6) {
        return cpf.slice(arr.length + 1, cpf.length);
      }

      if (arr.length > 6 && arr.length <= 9) {
        return cpf.slice(arr.length + 2, cpf.length);
      }

      if (arr.length > 9 && arr.length < 11) {
        return cpf.slice(arr.length + 3, cpf.length);
      }

      if (arr.length === 11) {
        return '';
      }

      if (arr.length === 12) {
        if (inputVal.length === 17) {
          return cnpj.slice(16, cnpj.length);
        }

        return cnpj.slice(15, cnpj.length);
      }

      if (arr.length > 12 && arr.length <= 14) {
        return cnpj.slice(arr.length + 4, cnpj.length);
      }

      return '';
    }
    /**
     * Propogates the input value back to the Angular model by triggering the onChange function. It won't do this if writingValue
     * is true. If that is true it means we are currently in the writeValue function, which is supposed to only update the actual
     * DOM element based on the Angular model value. It should be a one way process, i.e. writeValue should not be modifying the Angular
     * model value too. Therefore, we don't trigger onChange in this scenario.
     * @param inputValue the current form input value
     */

  }, {
    key: "formControlResult",
    value: function formControlResult(inputValue) {
      if (this.writingValue || this.maskChanged) {
        this.maskChanged = false;
        return;
      }

      if (Array.isArray(this.dropSpecialCharacters)) {
        this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.dropSpecialCharacters)));
      } else if (this.dropSpecialCharacters) {
        this.onChange(this._toNumber(this._checkSymbols(inputValue)));
      } else {
        this.onChange(this._removeSuffix(inputValue));
      }
    }
  }, {
    key: "_toNumber",
    value: function _toNumber(value) {
      if (!this.isNumberValue || value === '') {
        return value;
      }

      var num = Number(value);
      return Number.isNaN(num) ? value : num;
    }
  }, {
    key: "_removeMask",
    value: function _removeMask(value, specialCharactersForRemove) {
      return value ? value.replace(this._regExpForRemove(specialCharactersForRemove), '') : value;
    }
  }, {
    key: "_removePrefix",
    value: function _removePrefix(value) {
      if (!this.prefix) {
        return value;
      }

      return value ? value.replace(this.prefix, '') : value;
    }
  }, {
    key: "_removeSuffix",
    value: function _removeSuffix(value) {
      if (!this.suffix) {
        return value;
      }

      return value ? value.replace(this.suffix, '') : value;
    }
  }, {
    key: "_retrieveSeparatorValue",
    value: function _retrieveSeparatorValue(result) {
      return this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters);
    }
  }, {
    key: "_regExpForRemove",
    value: function _regExpForRemove(specialCharactersForRemove) {
      return new RegExp(specialCharactersForRemove.map(function (item) {
        return "\\".concat(item);
      }).join('|'), 'gi');
    }
  }, {
    key: "_checkSymbols",
    value: function _checkSymbols(result) {
      if (result === '') {
        return result;
      }

      var separatorPrecision = this._retrieveSeparatorPrecision(this.maskExpression);

      var separatorValue = this._retrieveSeparatorValue(result);

      if (this.decimalMarker !== '.') {
        separatorValue = separatorValue.replace(this.decimalMarker, '.');
      }

      if (!this.isNumberValue) {
        return separatorValue;
      }

      if (separatorPrecision) {
        if (result === this.decimalMarker) {
          return null;
        }

        return this._checkPrecision(this.maskExpression, separatorValue);
      } else {
        return Number(separatorValue);
      }
    } // TODO should think about helpers or separting decimal precision to own property

  }, {
    key: "_retrieveSeparatorPrecision",
    value: function _retrieveSeparatorPrecision(maskExpretion) {
      var matcher = maskExpretion.match(new RegExp("^separator\\.([^d]*)"));
      return matcher ? Number(matcher[1]) : null;
    }
  }, {
    key: "_checkPrecision",
    value: function _checkPrecision(separatorExpression, separatorValue) {
      if (separatorExpression.indexOf('2') > 0) {
        return Number(separatorValue).toFixed(2);
      }

      return Number(separatorValue);
    }
  }]);

  return MaskService;
}(MaskApplierService);

MaskService.ɵfac = function MaskService_Factory(t) {
  return new (t || MaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](config), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]));
};

MaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: MaskService,
  factory: MaskService.ɵfac
});

MaskService.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [config]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MaskService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [config]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Renderer2"]
    }];
  }, null);
})(); // tslint:disable deprecation
// tslint:disable no-input-rename


var MaskDirective = /*#__PURE__*/function () {
  function MaskDirective(document, _maskService, _config) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MaskDirective);

    this.document = document;
    this._maskService = _maskService;
    this._config = _config;
    this.maskExpression = '';
    this.specialCharacters = [];
    this.patterns = {};
    this.prefix = '';
    this.suffix = '';
    this.thousandSeparator = ' ';
    this.decimalMarker = '.';
    this.dropSpecialCharacters = null;
    this.hiddenInput = null;
    this.showMaskTyped = null;
    this.placeHolderCharacter = null;
    this.shownMaskExpression = null;
    this.showTemplate = null;
    this.clearIfNotMatch = null;
    this.validation = null;
    this.separatorLimit = null;
    this.allowNegativeNumbers = null;
    this.leadZeroDateTime = null;
    this._maskValue = '';
    this._position = null;
    this._maskExpressionArray = [];
    this._justPasted = false;

    this.onChange = function (_) {};

    this.onTouch = function () {};
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MaskDirective, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var maskExpression = changes.maskExpression,
          specialCharacters = changes.specialCharacters,
          patterns = changes.patterns,
          prefix = changes.prefix,
          suffix = changes.suffix,
          thousandSeparator = changes.thousandSeparator,
          decimalMarker = changes.decimalMarker,
          dropSpecialCharacters = changes.dropSpecialCharacters,
          hiddenInput = changes.hiddenInput,
          showMaskTyped = changes.showMaskTyped,
          placeHolderCharacter = changes.placeHolderCharacter,
          shownMaskExpression = changes.shownMaskExpression,
          showTemplate = changes.showTemplate,
          clearIfNotMatch = changes.clearIfNotMatch,
          validation = changes.validation,
          separatorLimit = changes.separatorLimit,
          allowNegativeNumbers = changes.allowNegativeNumbers,
          leadZeroDateTime = changes.leadZeroDateTime;

      if (maskExpression) {
        if (maskExpression.currentValue !== maskExpression.previousValue && !maskExpression.firstChange) {
          this._maskService.maskChanged = true;
        }

        this._maskValue = maskExpression.currentValue || '';

        if (maskExpression.currentValue && maskExpression.currentValue.split('||').length > 1) {
          this._maskExpressionArray = maskExpression.currentValue.split('||').sort(function (a, b) {
            return a.length - b.length;
          });
          this._maskValue = this._maskExpressionArray[0];
          this.maskExpression = this._maskExpressionArray[0];
          this._maskService.maskExpression = this._maskExpressionArray[0];
        }
      }

      if (specialCharacters) {
        if (!specialCharacters.currentValue || !Array.isArray(specialCharacters.currentValue)) {
          return;
        } else {
          this._maskService.maskSpecialCharacters = specialCharacters.currentValue || [];
        }
      } // Only overwrite the mask available patterns if a pattern has actually been passed in


      if (patterns && patterns.currentValue) {
        this._maskService.maskAvailablePatterns = patterns.currentValue;
      }

      if (prefix) {
        this._maskService.prefix = prefix.currentValue;
      }

      if (suffix) {
        this._maskService.suffix = suffix.currentValue;
      }

      if (thousandSeparator) {
        this._maskService.thousandSeparator = thousandSeparator.currentValue;
      }

      if (decimalMarker) {
        this._maskService.decimalMarker = decimalMarker.currentValue;
      }

      if (dropSpecialCharacters) {
        this._maskService.dropSpecialCharacters = dropSpecialCharacters.currentValue;
      }

      if (hiddenInput) {
        this._maskService.hiddenInput = hiddenInput.currentValue;
      }

      if (showMaskTyped) {
        this._maskService.showMaskTyped = showMaskTyped.currentValue;
      }

      if (placeHolderCharacter) {
        this._maskService.placeHolderCharacter = placeHolderCharacter.currentValue;
      }

      if (shownMaskExpression) {
        this._maskService.shownMaskExpression = shownMaskExpression.currentValue;
      }

      if (showTemplate) {
        this._maskService.showTemplate = showTemplate.currentValue;
      }

      if (clearIfNotMatch) {
        this._maskService.clearIfNotMatch = clearIfNotMatch.currentValue;
      }

      if (validation) {
        this._maskService.validation = validation.currentValue;
      }

      if (separatorLimit) {
        this._maskService.separatorLimit = separatorLimit.currentValue;
      }

      if (allowNegativeNumbers) {
        this._maskService.allowNegativeNumbers = allowNegativeNumbers.currentValue;

        if (this._maskService.allowNegativeNumbers) {
          this._maskService.maskSpecialCharacters = this._maskService.maskSpecialCharacters.filter(function (c) {
            return c !== '-';
          });
        }
      }

      if (leadZeroDateTime) {
        this._maskService.leadZeroDateTime = leadZeroDateTime.currentValue;
      }

      this._applyMask();
    } // tslint:disable-next-line: cyclomatic-complexity

  }, {
    key: "validate",
    value: function validate(_ref3) {
      var _this11 = this;

      var value = _ref3.value;

      if (!this._maskService.validation || !this._maskValue) {
        return null;
      }

      if (this._maskService.ipError) {
        return this._createValidationError(value);
      }

      if (this._maskService.cpfCnpjError) {
        return this._createValidationError(value);
      }

      if (this._maskValue.startsWith('separator')) {
        return null;
      }

      if (withoutValidation.includes(this._maskValue)) {
        return null;
      }

      if (this._maskService.clearIfNotMatch) {
        return null;
      }

      if (timeMasks.includes(this._maskValue)) {
        return this._validateTime(value);
      }

      if (value && value.toString().length >= 1) {
        var counterOfOpt = 0;

        var _loop = function _loop(key) {
          if (_this11._maskService.maskAvailablePatterns[key].optional && _this11._maskService.maskAvailablePatterns[key].optional === true) {
            if (_this11._maskValue.indexOf(key) !== _this11._maskValue.lastIndexOf(key)) {
              var opt = _this11._maskValue.split('').filter(function (i) {
                return i === key;
              }).join('');

              counterOfOpt += opt.length;
            } else if (_this11._maskValue.indexOf(key) !== -1) {
              counterOfOpt++;
            }

            if (_this11._maskValue.indexOf(key) !== -1 && value.toString().length >= _this11._maskValue.indexOf(key)) {
              return {
                v: null
              };
            }

            if (counterOfOpt === _this11._maskValue.length) {
              return {
                v: null
              };
            }
          }
        },
            _ret;

        for (var key in this._maskService.maskAvailablePatterns) {
          _ret = _loop(key);
          if (_ret) return _ret.v;
        }

        if (this._maskValue.indexOf('{') === 1 && value.toString().length === this._maskValue.length + Number(this._maskValue.split('{')[1].split('}')[0]) - 4) {
          return null;
        }

        if (this._maskValue.indexOf('*') === 1 || this._maskValue.indexOf('?') === 1) {
          return null;
        } else if (this._maskValue.indexOf('*') > 1 && value.toString().length < this._maskValue.indexOf('*') || this._maskValue.indexOf('?') > 1 && value.toString().length < this._maskValue.indexOf('?') || this._maskValue.indexOf('{') === 1) {
          return this._createValidationError(value);
        }

        if (this._maskValue.indexOf('*') === -1 || this._maskValue.indexOf('?') === -1) {
          var length = this._maskService.dropSpecialCharacters ? this._maskValue.length - this._maskService.checkSpecialCharAmount(this._maskValue) - counterOfOpt : this._maskValue.length - counterOfOpt;

          if (value.toString().length < length) {
            return this._createValidationError(value);
          }
        }
      }

      return null;
    }
  }, {
    key: "onPaste",
    value: function onPaste() {
      this._justPasted = true;
    }
  }, {
    key: "onInput",
    value: function onInput(e) {
      var _this12 = this;

      var el = e.target;
      this._inputValue = el.value;

      this._setMask();

      if (!this._maskValue) {
        this.onChange(el.value);
        return;
      }

      var position = el.selectionStart === 1 ? el.selectionStart + this._maskService.prefix.length : el.selectionStart;
      var caretShift = 0;
      var backspaceShift = false;

      this._maskService.applyValueChanges(position, this._justPasted, this._code === 'Backspace' || this._code === 'Delete', function (shift, _backspaceShift) {
        _this12._justPasted = false;
        caretShift = shift;
        backspaceShift = _backspaceShift;
      }); // only set the selection if the element is active


      if (this.document.activeElement !== el) {
        return;
      }

      this._position = this._position === 1 && this._inputValue.length === 1 ? null : this._position;
      var positionToApply = this._position ? this._inputValue.length + position + caretShift : position + (this._code === 'Backspace' && !backspaceShift ? 0 : caretShift);

      if (positionToApply > this._getActualInputLength()) {
        positionToApply = this._getActualInputLength();
      }

      if (positionToApply < 0) {
        positionToApply = 0;
      }

      el.setSelectionRange(positionToApply, positionToApply);
      this._position = null;
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      if (this._maskValue) {
        this._maskService.clearIfNotMatchFn();
      }

      this.onTouch();
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      if (!this._maskValue) {
        return;
      }

      var el = e.target;
      var posStart = 0;
      var posEnd = 0;

      if (el !== null && el.selectionStart !== null && el.selectionStart === el.selectionEnd && el.selectionStart > this._maskService.prefix.length && // tslint:disable-next-line
      e.keyCode !== 38) {
        if (this._maskService.showMaskTyped) {
          // We are showing the mask in the input
          this._maskService.maskIsShown = this._maskService.showMaskInInput();

          if (el.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === el.value) {
            // the input ONLY contains the mask, so position the cursor at the start
            el.focus();
            el.setSelectionRange(posStart, posEnd);
          } else {
            // the input contains some characters already
            if (el.selectionStart > this._maskService.actualValue.length) {
              // if the user clicked beyond our value's length, position the cursor at the end of our value
              el.setSelectionRange(this._maskService.actualValue.length, this._maskService.actualValue.length);
            }
          }
        }
      }

      var nextValue = !el.value || el.value === this._maskService.prefix ? this._maskService.prefix + this._maskService.maskIsShown : el.value;
      /** Fix of cursor position jumping to end in most browsers no matter where cursor is inserted onFocus */

      if (el.value !== nextValue) {
        el.value = nextValue;
      }
      /** fix of cursor position with prefix when mouse click occur */


      if ((el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
        el.selectionStart = this._maskService.prefix.length;
        return;
      }
      /** select only inserted text */


      if (el.selectionEnd > this._getActualInputLength()) {
        el.selectionEnd = this._getActualInputLength();
      }
    } // tslint:disable-next-line: cyclomatic-complexity

  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var _a;

      if (!this._maskValue) {
        return;
      }

      this._code = e.code ? e.code : e.key;
      var el = e.target;
      this._inputValue = el.value;

      this._setMask();

      if (e.keyCode === 38) {
        e.preventDefault();
      }

      if (e.keyCode === 37 || e.keyCode === 8 || e.keyCode === 46) {
        if (e.keyCode === 8 && el.value.length === 0) {
          el.selectionStart = el.selectionEnd;
        }

        if (e.keyCode === 8 && el.selectionStart !== 0) {
          // If specialChars is false, (shouldn't ever happen) then set to the defaults
          this.specialCharacters = ((_a = this.specialCharacters) === null || _a === void 0 ? void 0 : _a.length) ? this.specialCharacters : this._config.specialCharacters;

          if (this.prefix.length > 1 && el.selectionStart <= this.prefix.length) {
            el.setSelectionRange(this.prefix.length, this.prefix.length);
          } else {
            if (this._inputValue.length !== el.selectionStart && el.selectionStart !== 1) {
              while (this.specialCharacters.includes(this._inputValue[el.selectionStart - 1].toString()) && (this.prefix.length >= 1 && el.selectionStart > this.prefix.length || this.prefix.length === 0)) {
                el.setSelectionRange(el.selectionStart - 1, el.selectionStart - 1);
              }
            }

            this.suffixCheckOnPressDelete(e.keyCode, el);
          }
        }

        this.suffixCheckOnPressDelete(e.keyCode, el);

        if (this._maskService.prefix.length && el.selectionStart <= this._maskService.prefix.length && el.selectionEnd <= this._maskService.prefix.length) {
          e.preventDefault();
        }

        var cursorStart = el.selectionStart; // this.onFocus(e);

        if (e.keyCode === 8 && !el.readOnly && cursorStart === 0 && el.selectionEnd === el.value.length && el.value.length !== 0) {
          this._position = this._maskService.prefix ? this._maskService.prefix.length : 0;

          this._maskService.applyMask(this._maskService.prefix, this._maskService.maskExpression, this._position);
        }
      }

      if (!!this.suffix && this.suffix.length > 1 && this._inputValue.length - this.suffix.length < el.selectionStart) {
        el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
      } else if (e.keyCode === 65 && e.ctrlKey === true || // Ctrl+ A
      e.keyCode === 65 && e.metaKey === true // Cmd + A (Mac)
      ) {
        el.setSelectionRange(0, this._getActualInputLength());
        e.preventDefault();
      }

      this._maskService.selStart = el.selectionStart;
      this._maskService.selEnd = el.selectionEnd;
    }
    /** It writes the value in the input */

  }, {
    key: "writeValue",
    value: function writeValue(inputValue) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (typeof inputValue === 'object' && inputValue !== null && 'value' in inputValue) {
                if ('disable' in inputValue) {
                  this.setDisabledState(Boolean(inputValue.disable));
                }

                inputValue = inputValue.value;
              }

              if (inputValue === undefined) {
                inputValue = '';
              }

              if (typeof inputValue === 'number') {
                inputValue = String(inputValue);
                inputValue = this.decimalMarker !== '.' ? inputValue.replace('.', this.decimalMarker) : inputValue;
                this._maskService.isNumberValue = true;
              }

              this._inputValue = inputValue;

              this._setMask();

              if (inputValue && this._maskService.maskExpression || this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped)) {
                // Let the service we know we are writing value so that triggering onChange function wont happen during applyMask
                this._maskService.writingValue = true;
                this._maskService.formElementProperty = ['value', this._maskService.applyMask(inputValue, this._maskService.maskExpression)]; // Let the service know we've finished writing value

                this._maskService.writingValue = false;
              } else {
                this._maskService.formElementProperty = ['value', inputValue];
              }

              this._inputValue = inputValue;

            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
      this._maskService.onChange = this.onChange;
    }
  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouch = fn;
    }
  }, {
    key: "suffixCheckOnPressDelete",
    value: function suffixCheckOnPressDelete(keyCode, el) {
      if (keyCode === 46 && this.suffix.length > 0) {
        if (this._inputValue.length - this.suffix.length <= el.selectionStart) {
          el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
        }
      }

      if (keyCode === 8) {
        if (this.suffix.length > 1 && this._inputValue.length - this.suffix.length < el.selectionStart) {
          el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
        }

        if (this.suffix.length === 1 && this._inputValue.length === el.selectionStart) {
          el.setSelectionRange(el.selectionStart - 1, el.selectionStart - 1);
        }
      }
    }
    /** It disables the input element */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this._maskService.formElementProperty = ['disabled', isDisabled];
    }
  }, {
    key: "_repeatPatternSymbols",
    value: function _repeatPatternSymbols(maskExp) {
      var _this13 = this;

      return maskExp.match(/{[0-9]+}/) && maskExp.split('').reduce(function (accum, currval, index) {
        _this13._start = currval === '{' ? index : _this13._start;

        if (currval !== '}') {
          return _this13._maskService._findSpecialChar(currval) ? accum + currval : accum;
        }

        _this13._end = index;
        var repeatNumber = Number(maskExp.slice(_this13._start + 1, _this13._end));
        var replaceWith = new Array(repeatNumber + 1).join(maskExp[_this13._start - 1]);
        return accum + replaceWith;
      }, '') || maskExp;
    } // tslint:disable-next-line:no-any

  }, {
    key: "_applyMask",
    value: function _applyMask() {
      this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue || '');
      this._maskService.formElementProperty = ['value', this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)];
    }
  }, {
    key: "_validateTime",
    value: function _validateTime(value) {
      var rowMaskLen = this._maskValue.split('').filter(function (s) {
        return s !== ':';
      }).length;

      if (!value) {
        return null; // Don't validate empty values to allow for optional form control
      }

      if (+value[value.length - 1] === 0 && value.length < rowMaskLen || value.length <= rowMaskLen - 2) {
        return this._createValidationError(value);
      }

      return null;
    }
  }, {
    key: "_getActualInputLength",
    value: function _getActualInputLength() {
      return this._maskService.actualValue.length || this._maskService.actualValue.length + this._maskService.prefix.length;
    }
  }, {
    key: "_createValidationError",
    value: function _createValidationError(actualValue) {
      return {
        mask: {
          requiredMask: this._maskValue,
          actualValue: actualValue
        }
      };
    }
  }, {
    key: "_setMask",
    value: function _setMask() {
      var _this14 = this;

      if (this._maskExpressionArray.length > 0) {
        this._maskExpressionArray.some(function (mask) {
          var _a, _b;

          var test = ((_a = _this14._maskService.removeMask(_this14._inputValue)) === null || _a === void 0 ? void 0 : _a.length) <= ((_b = _this14._maskService.removeMask(mask)) === null || _b === void 0 ? void 0 : _b.length);

          if (_this14._inputValue && test) {
            _this14._maskValue = mask;
            _this14.maskExpression = mask;
            _this14._maskService.maskExpression = mask;
            return test;
          } else {
            _this14._maskValue = _this14._maskExpressionArray[_this14._maskExpressionArray.length - 1];
            _this14.maskExpression = _this14._maskExpressionArray[_this14._maskExpressionArray.length - 1];
            _this14._maskService.maskExpression = _this14._maskExpressionArray[_this14._maskExpressionArray.length - 1];
          }
        });
      }
    }
  }]);

  return MaskDirective;
}();

MaskDirective.ɵfac = function MaskDirective_Factory(t) {
  return new (t || MaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](MaskService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](config));
};

MaskDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MaskDirective,
  selectors: [["input", "mask", ""], ["textarea", "mask", ""]],
  hostBindings: function MaskDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("paste", function MaskDirective_paste_HostBindingHandler() {
        return ctx.onPaste();
      })("input", function MaskDirective_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      })("blur", function MaskDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("click", function MaskDirective_click_HostBindingHandler($event) {
        return ctx.onFocus($event);
      })("keydown", function MaskDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    maskExpression: ["mask", "maskExpression"],
    specialCharacters: "specialCharacters",
    patterns: "patterns",
    prefix: "prefix",
    suffix: "suffix",
    thousandSeparator: "thousandSeparator",
    decimalMarker: "decimalMarker",
    dropSpecialCharacters: "dropSpecialCharacters",
    hiddenInput: "hiddenInput",
    showMaskTyped: "showMaskTyped",
    placeHolderCharacter: "placeHolderCharacter",
    shownMaskExpression: "shownMaskExpression",
    showTemplate: "showTemplate",
    clearIfNotMatch: "clearIfNotMatch",
    validation: "validation",
    separatorLimit: "separatorLimit",
    allowNegativeNumbers: "allowNegativeNumbers",
    leadZeroDateTime: "leadZeroDateTime"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
      return MaskDirective;
    }),
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
      return MaskDirective;
    }),
    multi: true
  }, MaskService]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

MaskDirective.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
    }]
  }, {
    type: MaskService
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [config]
    }]
  }];
};

MaskDirective.propDecorators = {
  maskExpression: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['mask']
  }],
  specialCharacters: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  patterns: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  prefix: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  suffix: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  thousandSeparator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  decimalMarker: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  dropSpecialCharacters: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  hiddenInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  showMaskTyped: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  placeHolderCharacter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  shownMaskExpression: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  showTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  clearIfNotMatch: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  validation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  separatorLimit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  allowNegativeNumbers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  leadZeroDateTime: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  onPaste: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
    args: ['paste']
  }],
  onInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
    args: ['input', ['$event']]
  }],
  onBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
    args: ['blur']
  }],
  onFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
    args: ['click', ['$event']]
  }],
  onKeyDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
    args: ['keydown', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MaskDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[mask], textarea[mask]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
          return MaskDirective;
        }),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
          return MaskDirective;
        }),
        multi: true
      }, MaskService]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]
      }]
    }, {
      type: MaskService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [config]
      }]
    }];
  }, {
    maskExpression: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['mask']
    }],
    specialCharacters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    patterns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    prefix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    suffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    thousandSeparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    decimalMarker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    dropSpecialCharacters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    hiddenInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    showMaskTyped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    placeHolderCharacter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    shownMaskExpression: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    showTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    clearIfNotMatch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    validation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    separatorLimit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    allowNegativeNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    leadZeroDateTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    onPaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
      args: ['paste']
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
      args: ['input', ['$event']]
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
      args: ['blur']
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
      args: ['click', ['$event']]
    }],
    // tslint:disable-next-line: cyclomatic-complexity
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
      args: ['keydown', ['$event']]
    }]
  });
})();

var MaskPipe = /*#__PURE__*/function () {
  function MaskPipe(_maskService) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MaskPipe);

    this._maskService = _maskService;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MaskPipe, [{
    key: "transform",
    value: function transform(value, mask) {
      var thousandSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (!value && typeof value !== 'number') {
        return '';
      }

      if (thousandSeparator) {
        this._maskService.thousandSeparator = thousandSeparator;
      }

      if (typeof mask === 'string') {
        return this._maskService.applyMask("".concat(value), mask);
      }

      return this._maskService.applyMaskWithPattern("".concat(value), mask);
    }
  }]);

  return MaskPipe;
}();

MaskPipe.ɵfac = function MaskPipe_Factory(t) {
  return new (t || MaskPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](MaskApplierService));
};

MaskPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
  name: "mask",
  type: MaskPipe,
  pure: true
});

MaskPipe.ctorParameters = function () {
  return [{
    type: MaskApplierService
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MaskPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Pipe"],
    args: [{
      name: 'mask',
      pure: true
    }]
  }], function () {
    return [{
      type: MaskApplierService
    }];
  }, null);
})();

var NgxMaskModule = /*#__PURE__*/function () {
  function NgxMaskModule() {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NgxMaskModule);
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(NgxMaskModule, null, [{
    key: "forRoot",
    value: function forRoot(configValue) {
      return {
        ngModule: NgxMaskModule,
        providers: [{
          provide: NEW_CONFIG,
          useValue: configValue
        }, {
          provide: INITIAL_CONFIG,
          useValue: initialConfig
        }, {
          provide: config,
          useFactory: _configFactory,
          deps: [INITIAL_CONFIG, NEW_CONFIG]
        }, MaskApplierService]
      };
    }
  }, {
    key: "forChild",
    value: function forChild() {
      return {
        ngModule: NgxMaskModule
      };
    }
  }]);

  return NgxMaskModule;
}();

NgxMaskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: NgxMaskModule
});
NgxMaskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function NgxMaskModule_Factory(t) {
    return new (t || NgxMaskModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NgxMaskModule, {
    declarations: [MaskDirective, MaskPipe],
    exports: [MaskDirective, MaskPipe]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NgxMaskModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      exports: [MaskDirective, MaskPipe],
      declarations: [MaskDirective, MaskPipe]
    }]
  }], null, null);
})();
/**
 * @internal
 */


function _configFactory(initConfig, configValue) {
  return configValue instanceof Function ? Object.assign(Object.assign({}, initConfig), configValue()) : Object.assign(Object.assign({}, initConfig), configValue);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

(function () {
  if (!commonjsGlobal.KeyboardEvent) {
    commonjsGlobal.KeyboardEvent = function (_eventType, _init) {};
  }
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "vGXz":
/*!*********************************************************!*\
  !*** ./src/app/Services/telecharger-fichier.service.ts ***!
  \*********************************************************/
/*! exports provided: TelechargerFichierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelechargerFichierService", function() { return TelechargerFichierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TelechargerFichierService = /** @class */ (function () {
    function TelechargerFichierService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
    }
    TelechargerFichierService.prototype.getTelechargementFichier = function (fileName) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'get/file/' + fileName);
    };
    TelechargerFichierService.prototype.telechargementfichier = function () {
    };
    TelechargerFichierService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    TelechargerFichierService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], TelechargerFichierService);
    return TelechargerFichierService;
}());



/***/ })

}]);
//# sourceMappingURL=gestion-employes-gestion-employes-module.js.map