(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cotisation-cotisation-module"],{

/***/ "+nG9":
/*!******************************************!*\
  !*** ./src/app/Models/IPM_Cotisation.ts ***!
  \******************************************/
/*! exports provided: DetailCotisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCotisation", function() { return DetailCotisation; });
//import { CotisationGlobal } from './CotisatonGlobal';
var DetailCotisation = /** @class */ (function () {
    function DetailCotisation(id_Det_Coti, montant, 
    //public matricule?:string;
    ipm_employe, ipm_cotisation) {
        this.id_Det_Coti = id_Det_Coti;
        this.montant = montant;
        this.ipm_employe = ipm_employe;
        this.ipm_cotisation = ipm_cotisation;
    }
    return DetailCotisation;
}());



/***/ }),

/***/ "5GYJ":
/*!***********************************!*\
  !*** ./src/app/Models/Employe.ts ***!
  \***********************************/
/*! exports provided: Employe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employe", function() { return Employe; });
var Employe = /** @class */ (function () {
    function Employe(idemp, nom, prenom, sexe, adresse_domicile, date_nais, lieu_nais, telephone, date_recrutement, date_debut_suspension, date_fin_suspension, motifStatut, matricule, reference, numero_carnet, situation_familial, solde, cumul_charge, niveau_salarial, ipm_categorie, ipmService, ipmEntity, photo, statut, ipmStatutEmploye, justificatif, Echelonnage
    //public certifier?:boolean,
    ) {
        this.idemp = idemp;
        this.nom = nom;
        this.prenom = prenom;
        this.sexe = sexe;
        this.adresse_domicile = adresse_domicile;
        this.date_nais = date_nais;
        this.lieu_nais = lieu_nais;
        this.telephone = telephone;
        this.date_recrutement = date_recrutement;
        this.date_debut_suspension = date_debut_suspension;
        this.date_fin_suspension = date_fin_suspension;
        this.motifStatut = motifStatut;
        this.matricule = matricule;
        this.reference = reference;
        this.numero_carnet = numero_carnet;
        this.situation_familial = situation_familial;
        this.solde = solde;
        this.cumul_charge = cumul_charge;
        this.niveau_salarial = niveau_salarial;
        this.ipm_categorie = ipm_categorie;
        this.ipmService = ipmService;
        this.ipmEntity = ipmEntity;
        this.photo = photo;
        this.statut = statut;
        this.ipmStatutEmploye = ipmStatutEmploye;
        this.justificatif = justificatif;
        this.Echelonnage = Echelonnage;
    }
    return Employe;
}());



/***/ }),

/***/ "EYER":
/*!****************************************************************************!*\
  !*** ./src/app/cotisation/ajout-cotisation/ajout-cotisation.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdGlzYXRpb24vYWpvdXQtY290aXNhdGlvbi9ham91dC1jb3Rpc2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "IyyA":
/*!***************************************************************************!*\
  !*** ./src/app/cotisation/ajout-cotisation/ajout-cotisation.component.ts ***!
  \***************************************************************************/
/*! exports provided: AjoutCotisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutCotisationComponent", function() { return AjoutCotisationComponent; });
/* harmony import */ var _raw_loader_ajout_cotisation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ajout-cotisation.component.html */ "MpH/");
/* harmony import */ var _ajout_cotisation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajout-cotisation.component.css */ "EYER");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_Models_CotisatonGlobal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Models/CotisatonGlobal */ "IeU+");
/* harmony import */ var src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Models/Employe */ "5GYJ");
/* harmony import */ var src_app_Models_IPM_Cotisation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Models/IPM_Cotisation */ "+nG9");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xlsx */ "JcrP");
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














var AjoutCotisationComponent = /** @class */ (function () {
    function AjoutCotisationComponent(router, emp_service, route, toastr, formbuild, httpClient, dateAdapter, datepipe) {
        this.router = router;
        this.emp_service = emp_service;
        this.route = route;
        this.toastr = toastr;
        this.formbuild = formbuild;
        this.httpClient = httpClient;
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.listEmploye = [];
        this.cotisation = [];
        this.panier = [];
        this.detailCotisation = { id_Det_Coti: null, montant: null, ipm_employe: new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_10__["Employe"](), ipm_cotisation: null };
        this.cotisaGlobal = new src_app_Models_CotisatonGlobal__WEBPACK_IMPORTED_MODULE_9__["Cotisation"]();
        this.totalDetails = [];
        this.dateAdapter.setLocale('en-GB');
    }
    AjoutCotisationComponent.prototype.ngOnInit = function () {
        this.uploadForm = this.formbuild.group({
            // evenement: ['', Validators.required],
            myFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            montant: [''],
            matricule: [''],
        });
    };
    AjoutCotisationComponent.prototype.onFileSelect = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            // @ts-ignore
            //this.uploadForm.get('myFile').setValue();
        }
    };
    ///////////////////////RELOAD
    AjoutCotisationComponent.prototype.reloadComponent = function () {
        var currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    };
    ///////////////////// 
    AjoutCotisationComponent.prototype.onFileChange = function (evt) {
        var _this = this;
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            _this.wb = xlsx__WEBPACK_IMPORTED_MODULE_13__["read"](bstr, { type: 'binary' });
            console.log(_this.wb);
            /* grab first sheet */
            var sheetNames = _this.wb.SheetNames;
            _this.ws = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].sheet_to_json(_this.wb.Sheets[sheetNames[0]]);
            console.log(_this.ws);
            // this.wb.SheetNames.forEach(ele => {
            //   this.ws = xlsx.utils.sheet_to_json(this.wb.Sheets[ele],{header: 1})
            //   console.log(this.ws);
            //
            // });
            for (var index = 0; index < _this.ws.length; index++) {
                _this.ws[index];
            }
            _this.calculemontant(_this.ws);
        };
        reader.readAsBinaryString(target.files[0]);
    };
    AjoutCotisationComponent.prototype.calculemontant = function (fac) {
        console.log(fac);
        this.total = 0;
        for (var _i = 0, fac_1 = fac; _i < fac_1.length; _i++) {
            var element = fac_1[_i];
            this.total += element.Montant;
            console.log(element);
            console.log(this.total);
        }
    };
    AjoutCotisationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.cotisaGlobal.montant_totals = this.total;
        this.cotisaGlobal.date = new Date();
        this.cotisaGlobal.ipm_utilisateur = null;
        console.log(this.cotisaGlobal);
        this.emp_service.AjoutCotisation(this.cotisaGlobal).subscribe(function (data) {
            console.log(data);
            _this.cotisaGlobal.idCotisation = parseInt(data);
            var _loop_1 = function (elemt) {
                _this.total += elemt.Montant;
                console.log(elemt.Matricule);
                _this.emp_service.getEmployeByMatricules(elemt.Matricule).subscribe(function (data) {
                    _this.message = data;
                    console.log(_this.message);
                    if (_this.message) {
                        _this.listEmploye.push(_this.message);
                        console.log(_this.listEmploye);
                        _this.detailCotisation = new src_app_Models_IPM_Cotisation__WEBPACK_IMPORTED_MODULE_11__["DetailCotisation"]();
                        _this.detailCotisation.montant = elemt.Montant;
                        // this.detailCotisation.matricule=elemt.matricule
                        _this.detailCotisation.ipm_employe = new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_10__["Employe"]();
                        _this.detailCotisation.ipm_employe.matricule = elemt.Matricule;
                        _this.detailCotisation.ipm_cotisation = _this.cotisaGlobal;
                        console.log(_this.detailCotisation);
                        _this.panier.push(__assign({}, _this.detailCotisation));
                        console.log(elemt);
                        console.log(_this.ws.length, _this.listEmploye.length);
                    }
                });
                //   if (this.ws.length == this.listEmploye.length) {
                // console.log(this.listEmploye.length);
                _this.emp_service.AjoutDetaCotisation(_this.panier).subscribe(function (data) {
                    _this.totalDetails = data;
                    console.log(data);
                });
                // console.log(this.totalDetails)
                //  var somme=this.totalDetails.reduce((sum,current)=>sum+current.ipm_employe.montant,0)
                // console.log(somme)
                //     //  }
                // }
                //  })
                _this.showNotification('top', 'center', 1, '<b>cotisation ajouté avec succées!!!</b> :');
            };
            for (var _i = 0, _a = _this.ws; _i < _a.length; _i++) {
                var elemt = _a[_i];
                _loop_1(elemt);
            }
        }, function (error) {
            console.log(error);
            _this.showNotification('top', 'center', 3, '<b>Erreur au niveau du fichier!!!</b> :');
        });
    };
    ////////////fonction  Alerte
    AjoutCotisationComponent.prototype.showNotification = function (from, align, idtype, note) {
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
    AjoutCotisationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_12__["EmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    AjoutCotisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-ajout-cotisation',
            template: _raw_loader_ajout_cotisation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ajout_cotisation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_12__["EmployeService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], AjoutCotisationComponent);
    return AjoutCotisationComponent;
}());



/***/ }),

/***/ "MpH/":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cotisation/ajout-cotisation/ajout-cotisation.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"card-body\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"card \" style=\"margin-left:8cm;\">\n                <div class=\"card-header card-header-icon\">\n                    <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                        <i class=\"material-icons\">list</i>\n                    </div>\n                    <h3 style=\"background-color:whitesmoke; \n                    font-weight: 400; color: \n                    black; pading: 5px; width: 50%;\" class=\"card-title\">Cotisations</h3>\n                </div>\n                <div class=\"card-body\" style=\"padding-left: 3.5cm;\">\n\n                    <form [formGroup]=\"uploadForm\">\n    \n         \n                  <input type=\"file\" (change)=\"onFileChange($event)\" multiple=\"true\"  formControlName=\"myFile\"/>\n              \n                  <div class=\"modal-footer justify-content-center\">\n                  <button  class=\"btn btn-success\" (click)=\"onSubmit()\">\n                    <i class=\"material-icons\">checked</i>Ajout Cotisation</button>\n                  </div>\n                </form>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n");

/***/ }),

/***/ "ZyaY":
/*!****************************************************************************!*\
  !*** ./src/app/cotisation/liste-cotisation/liste-cotisation.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdGlzYXRpb24vbGlzdGUtY290aXNhdGlvbi9saXN0ZS1jb3Rpc2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "bnfn":
/*!*************************************************!*\
  !*** ./src/app/cotisation/cotisation.module.ts ***!
  \*************************************************/
/*! exports provided: CotisationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotisationModule", function() { return CotisationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ajout_cotisation_ajout_cotisation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-cotisation/ajout-cotisation.component */ "IyyA");
/* harmony import */ var _liste_cotisation_liste_cotisation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liste-cotisation/liste-cotisation.component */ "jQda");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cotisation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cotisation-routing.module */ "rp81");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.module */ "ZAI4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CotisationModule = /** @class */ (function () {
    function CotisationModule() {
    }
    CotisationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_ajout_cotisation_ajout_cotisation_component__WEBPACK_IMPORTED_MODULE_2__["AjoutCotisationComponent"], _liste_cotisation_liste_cotisation_component__WEBPACK_IMPORTED_MODULE_3__["ListeCotisationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_cotisation_routing_module__WEBPACK_IMPORTED_MODULE_5__["routesCotisation"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], CotisationModule);
    return CotisationModule;
}());



/***/ }),

/***/ "jQda":
/*!***************************************************************************!*\
  !*** ./src/app/cotisation/liste-cotisation/liste-cotisation.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListeCotisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeCotisationComponent", function() { return ListeCotisationComponent; });
/* harmony import */ var _raw_loader_liste_cotisation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./liste-cotisation.component.html */ "tiVp");
/* harmony import */ var _liste_cotisation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liste-cotisation.component.css */ "ZyaY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Models_CotsatonExcel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/CotsatonExcel */ "ajkK");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
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









var ListeCotisationComponent = /** @class */ (function () {
    function ListeCotisationComponent(emp_service, toastr, keycloak, router) {
        this.emp_service = emp_service;
        this.toastr = toastr;
        this.keycloak = keycloak;
        this.router = router;
        this.CotisationExcel = new src_app_Models_CotsatonExcel__WEBPACK_IMPORTED_MODULE_3__["CotsationExcel"]();
        this.CotisationExcels = [];
        this.totalDetail = [];
        this.DetailCoti = [];
        this.isCotisationEffectiveLancee = false;
        this.isCotisationEffectiveTrouvee = false;
        this.isDetailsCotisationTrouve = true;
    }
    ListeCotisationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getCumulCotisationByEmploye() --> on l'a mis dans le boutton liste coti. effectives
        this.getAllEmplyees();
        this.emp_service.getCategorie().subscribe(function (cat) {
            // console.log(cat);
            _this.categories = cat;
            console.log(_this.categories);
            //console.log(this.categorie)
        });
        this.emp_service.getEntity().subscribe(function (data) {
            _this.listEntity = data;
            console.log(_this.listEntity);
        });
    };
    //on l'utilise pour afficher la liste des cotisations previsionnelles
    ListeCotisationComponent.prototype.getAllEmplyees = function () {
        var _this = this;
        this.trouve = false;
        this.emp_service.getEmploye().subscribe(function (data) {
            _this.employe = data;
            _this.trouve = true;
            // console.log(this.employe)
            $(function () {
                $('#datatableCotisationPrevisionnelle').DataTable({
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
        });
    };
    ListeCotisationComponent.prototype.detailCotisation = function (employ) {
        var _this = this;
        console.log(employ.idemp);
        this.somme = null;
        this.DetailCoti = [];
        this.emp_service.getDetailsCotisationByIdEmp(employ.idemp).subscribe(function (data) {
            _this.totalDetail = data;
            console.log(data);
            if (_this.totalDetail.length == 0) {
                _this.isDetailsCotisationTrouve = false;
            }
            else if (_this.totalDetail.length <= 1) {
                _this.somme = _this.totalDetail[0].montant;
            }
            else {
                for (var _i = 0, _a = _this.totalDetail; _i < _a.length; _i++) {
                    var detail = _a[_i];
                    _this.DetailCoti.push(detail.montant);
                    console.log(_this.DetailCoti);
                    _this.somme = _this.DetailCoti.reduce(function (sum, current) { return sum + current; }, 0);
                    console.log(_this.somme);
                }
                // this.ngOnInit()
            }
        });
        console.log(this.somme);
        // this.ngOnInit()
    };
    ListeCotisationComponent.prototype.getnomEntity = function (prest) {
        var _this = this;
        this.listCotisationEntity = null;
        console.log(this.listCotisationEntity);
        console.log(prest.idEntity);
        this.listCotisationEntity = this.employe;
        console.log(this.listCotisationEntity);
        this.nomEntity = prest.nom_entity;
        this.condition = prest.idEntity;
        console.log(this.entite);
        this.listCotisationEntity = this.employe.filter(function (serv) { return serv.ipmEntity.idEntity == _this.entite; });
        console.log(this.listCotisationEntity);
        $(function () {
            $('#datatable1').DataTable({
                "pagingType": "full_numbers",
                "lengthMenu": [
                    [10, 25, 50, -1],
                    [10, 25, 50, "All"]
                ],
                responsive: true,
                retrieve: true,
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
        console.log(this.listCotisationEntity);
        for (var i = 0; i < this.listCotisationEntity.length; i++) {
            this.CotisationExcel.Matricule = this.listCotisationEntity[i].matricule;
            this.CotisationExcel.Prenom = this.listCotisationEntity[i].prenom;
            this.CotisationExcel.nom = this.listCotisationEntity[i].nom;
            this.CotisationExcel.Catégorie = this.listCotisationEntity[i].ipm_categorie.libelle;
            this.CotisationExcel.solde = this.listCotisationEntity[i].solde;
            this.CotisationExcel.MontantAcotiser = this.listCotisationEntity[i].ipm_categorie.montant;
            this.CotisationExcels.push(__assign({}, this.CotisationExcel));
        }
    };
    ListeCotisationComponent.prototype.getnomCategorie = function (prest) {
        console.log(this.categorie, this.montant);
        //console.log(prest);
        this.modifCategorie = prest;
    };
    ListeCotisationComponent.prototype.Enregistrer = function () {
        var _this = this;
        console.log(this.montant);
        this.modifCategorie.montant = this.montant;
        this.modifCategorie.libelle = this.categorie;
        this.emp_service.ModifierCategorie(this.modifCategorie).subscribe(function (data) {
            console.log(data);
            // this.ngOnInit()
            _this.toastr.success("Modification Montant avec Succès");
        });
    };
    ListeCotisationComponent.prototype.fileDownloadEntity = function () {
        var _this = this;
        this.CotisationExcels = null;
        this.CotisationExcels = [];
        console.log(this.CotisationExcels);
        for (var i = 0; i < this.listCotisationEntity.length; i++) {
            this.CotisationExcel.Matricule = this.listCotisationEntity[i].matricule;
            this.CotisationExcel.Prenom = this.listCotisationEntity[i].prenom;
            this.CotisationExcel.nom = this.listCotisationEntity[i].nom;
            this.CotisationExcel.Catégorie = this.listCotisationEntity[i].ipm_categorie.libelle;
            this.CotisationExcel.solde = this.listCotisationEntity[i].solde;
            this.CotisationExcel.MontantAcotiser = this.listCotisationEntity[i].ipm_categorie.montant;
            this.CotisationExcels.push(__assign({}, this.CotisationExcel));
        }
        // @ts-ignore
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! xlsx */ "JcrP")).then(function (xlsx) {
            var worksheet = xlsx.utils.json_to_sheet(_this.CotisationExcels);
            var workbook = { Sheets: { 'fichier_excel': worksheet }, SheetNames: ['fichier_excel'] };
            var excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            _this.saveAsExcelFile(excelBuffer, "CotisationExcel");
            // this.CotisationExcels=null
        });
    };
    ListeCotisationComponent.prototype.exportationCotisationPrevisionnelle = function () {
        var _this = this;
        this.CotisationExcels = null;
        this.CotisationExcels = [];
        for (var i = 0; i < this.employe.length; i++) {
            this.CotisationExcel.Matricule = this.employe[i].matricule;
            this.CotisationExcel.Prenom = this.employe[i].prenom;
            this.CotisationExcel.nom = this.employe[i].nom;
            this.CotisationExcel.Catégorie = this.employe[i].ipm_categorie.libelle;
            this.CotisationExcel.solde = this.employe[i].solde;
            this.CotisationExcel.MontantAcotiser = this.employe[i].ipm_categorie.montant;
            this.CotisationExcels.push(__assign({}, this.CotisationExcel));
        }
        console.log(this.CotisationExcels);
        // @ts-ignore
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! xlsx */ "JcrP")).then(function (xlsx) {
            var worksheet = xlsx.utils.json_to_sheet(_this.CotisationExcels);
            var workbook = { Sheets: { 'fichier_excel': worksheet }, SheetNames: ['fichier_excel'] };
            var excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            _this.saveAsExcelFile(excelBuffer, "CotisationExcel");
            //this.CotisationExcels=null
        });
    };
    ListeCotisationComponent.prototype.saveAsExcelFile = function (buffer, fileName) {
        var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        var EXCEL_EXTENSION = '.xlsx';
        var data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ListeCotisationComponent.prototype.midif = function (prest) {
        this.categorie = prest.libelle;
        this.montant = prest.montant;
        console.log(prest);
    };
    //PARTIE COTISATION ANUELLE
    //ajout du solde global dans le tableau pour chaque employé
    // getCumulCotisationByEmploye(){
    //     this.isCotisationEffectiveLancee = true
    //   this.trouve = false
    //   this.emp_service.getCumulCotisationByEmploye().subscribe(data =>{
    //       // console.log(data);
    //       this.cumulCotisationEmploye = data;
    //       this.trouve = true
    //       if (this.cumulCotisationEmploye.length > 0){
    //           this.isCotisationEffectiveTrouvee = true
    //
    //       $(function(){
    //           (<any>$('#datatableCotisationEffective')).DataTable({
    //               "pagingType": "full_numbers",
    //               "lengthMenu": [
    //                   [10, 25, 50, -1],
    //                   [10, 25, 50, "All"]
    //               ],
    //               responsive: true,
    //               language: {
    //                   search: "_INPUT_",
    //                   searchPlaceholder: "Recherche",
    //                   info: " _START_/_END_ sur _TOTAL_ demandes",
    //                   paginate: {
    //                       "first":        "Début",
    //                       "previous":     "Précédent",
    //                       "next":         "Suivant",
    //                       "last":         "Fin"
    //                   },
    //                   lengthMenu:"Afficher par _MENU_",
    //                   infoFiltered:""
    //               },
    //
    //
    //           });
    //
    //       })
    //       }
    //       // this.employe = data;
    //
    //
    //   })
    // }
    // exportationCotisationEffective() {
    //     this.CotisationExcels=null
    //     this.CotisationExcels=[]
    //     for (let i = 0; i < this.employe.length; i++) {
    //         this.CotisationExcel.Matricule=this.cumulCotisationEmploye[i].ipm_employe.matricule
    //         this.CotisationExcel.Prenom=this.cumulCotisationEmploye[i].ipm_employe.prenom
    //         this.CotisationExcel.nom=this.cumulCotisationEmploye[i].ipm_employe.nom
    //         this.CotisationExcel.Catégorie=this.cumulCotisationEmploye[i].ipm_employe.ipm_categorie.libelle
    //         this.CotisationExcel.solde=this.cumulCotisationEmploye[i].ipm_employe.solde
    //         this.CotisationExcel.MontantAcotiser=this.cumulCotisationEmploye[i].ipm_employe.ipm_categorie.montant
    //         this.CotisationExcel.CotisationAnnuelle=this.cumulCotisationEmploye[i].montant
    //         this.CotisationExcels.push({...this.CotisationExcel})
    //     }
    //
    //
    //
    //     console.log(this.CotisationExcels)
    //
    //     // @ts-ignore
    //     import("xlsx").then(xlsx => {
    //         const worksheet = xlsx.utils.json_to_sheet(this.CotisationExcels);
    //         const workbook = { Sheets: { 'fichier_excel': worksheet }, SheetNames: ['fichier_excel'] };
    //         const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    //         this.saveAsExcelFile(excelBuffer, "CotisationExcel");
    //         //this.CotisationExcels=null
    //     });
    // }
    ListeCotisationComponent.prototype.redirectionVersRaapportCotisationAnnuelle = function () {
        this.router.navigate(['/rapports/SituationAnnuelle']);
    };
    ListeCotisationComponent.prototype.isSecretaire = function () {
        this.hasAccess = false;
        if (this.keycloak.getUserRoles().includes("secretaire")) {
            this.hasAccess = true;
        }
        return this.hasAccess;
    };
    ListeCotisationComponent.prototype.isOperateur = function () {
        this.hasAccess = false;
        if (this.keycloak.getUserRoles().includes("operateur")) {
            this.hasAccess = true;
        }
        return this.hasAccess;
    };
    ListeCotisationComponent.ctorParameters = function () { return [
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_4__["EmployeService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_8__["KeycloakService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ListeCotisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-liste-cotisation',
            template: _raw_loader_liste_cotisation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_liste_cotisation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_4__["EmployeService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            keycloak_angular__WEBPACK_IMPORTED_MODULE_8__["KeycloakService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ListeCotisationComponent);
    return ListeCotisationComponent;
}());



/***/ }),

/***/ "rp81":
/*!*********************************************************!*\
  !*** ./src/app/cotisation/cotisation-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: routesCotisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routesCotisation", function() { return routesCotisation; });
/* harmony import */ var _ajout_cotisation_ajout_cotisation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajout-cotisation/ajout-cotisation.component */ "IyyA");
/* harmony import */ var _liste_cotisation_liste_cotisation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liste-cotisation/liste-cotisation.component */ "jQda");


var routesCotisation = [
    {
        path: '',
        children: [{
                path: 'AjoutCotisation',
                component: _ajout_cotisation_ajout_cotisation_component__WEBPACK_IMPORTED_MODULE_0__["AjoutCotisationComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'ListeCotisation',
                component: _liste_cotisation_liste_cotisation_component__WEBPACK_IMPORTED_MODULE_1__["ListeCotisationComponent"]
            }]
    },
];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class CotisationRoutingModule { }


/***/ }),

/***/ "tiVp":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cotisation/liste-cotisation/liste-cotisation.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"bare\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog cascading-modal\" role=\"document\">\n        <!--Content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Prise en Compte des Cotisations</h4>\n                <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                    <i class=\"material-icons\">clear</i>\n                </button>\n            </div>\n            <!--Modal cascading tabs-->\n            <div class=\"modal-c-tabs\">\n                <!-- Tab panels -->\n                <div class=\"tab-content\">\n                    <!--Body-->\n                    <div class=\"modal-body mb-1\">\n                        <form>\n                            <div class=\"card-body table-full-width\">\n                                <div class=\"material-datatable\">\n                                    <!--*ngIf=\"agree\" -->\n                                    <!--                            <mat-form-field>-->\n                                    <!--                              &lt;!&ndash; <label for=\"Categorie\"><b>Categorie</b> </label> &ndash;&gt;-->\n                                    <!--                              <mat-select name=\"categorie\"  id=\"categorie\" placeholder=\"Selectionner cat\" [(ngModel)]=\"categorie\">-->\n                                    <!--                                <mat-option  *ngFor=\"let prest of categories\" [value]=\"prest.code_categorie\" -->\n                                    <!--                                (click)=\"getnomCategorie(prest)\">{{ prest.libelle }}-->\n                                    <!--                                  -->\n                                    <!--                                </mat-option>-->\n                                    <!--                              </mat-select>-->\n                                    <!--                            </mat-form-field>-->\n                                    <table id=\"datatable1\" class=\"table table-hover table-bordered text-black\"\n                                           cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n\n                                        <thead style=\"background-color: whitesmoke;\">\n\n                                        <tr>\n                                            <th>Categorie</th>\n                                            <th>Montant à Cotiser</th>\n                                            <th style=\"font-weight: 500;\" class=\"text-right\">Actions</th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr *ngFor=\"let prest of categories\">\n                                            <td>{{prest.libelle}}</td>\n                                            <td>{{prest.montant}}</td>\n                                            <td class=\"td-actions text-center\">\n                                                <button mat-raised-button=\"button\" type=\"button\"\n                                                        class=\"mat-raised-button mat-button-base btn btn-warning\">\n                                                    <i class=\"material-icons\" data-toggle=\"modal\" data-target=\"#bareee\" (click)=\"midif(prest)\" (click)=\"getnomCategorie(prest)\">edit</i>\n                                                </button>\n                                                <!--                                    <input type=\"text\" name=\"montant\" class=\"form-control\" id=\"montant\" [(ngModel)]=\"montant\">-->\n                                            </td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n\n                                </div>\n                                <!--                      <div class=\" col-md-5\" style=\"margin-top: -20px;\">-->\n                                <!--                       -->\n                                <!--                        <input type=\"text\" name=\"montant\" class=\"form-control\" id=\"montant\" [(ngModel)]=\"montant\">                      </div>-->\n\n                            </div>\n                        </form>\n\n\n                    </div>\n                    <!--Footer-->\n                    <div class=\"modal-footer\">\n\n                        <button mat-raised-button type=\"button\" class=\"btn btn-outline-info waves-effect ml-auto\"\n                                data-dismiss=\"modal\">Close\n                        </button>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n<!--Modal  debut modification montant cotisation -->\n\n<div class=\"modal fade\" id=\"bareee\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog cascading-modal\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title btn btn-rounded\"\n                    style=\"background-color:rgba(17, 17, 227, 0.88);color: white;width: unset\">Modifier Montant</h4>\n                <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                    <i class=\"material-icons\">clear</i>\n                </button>\n            </div>\n            <!--Modal cascading tabs-->\n            <div class=\"modal-c-tabs\">\n                <!-- Tab panels -->\n                <div class=\"tab-content\">\n                    <div class=\"material-datatable  col-md-5\" style=\"margin-top: -15px;\">\n\n<!--                        <mat-form-field>-->\n                            <!-- <label for=\"Categorie\"><b>Categorie</b> </label> -->\n<!--                            <mat-select  name=\"categorie\" id=\"categorie\" -->\n<!--                                        [(ngModel)]=\"categorie\">-->\n<!--                                <mat-option value=\"blue\" *ngFor=\"let prest of categories\" [value]=\"prest.code_categorie\"-->\n<!--                                            (click)=\"getnomCategorie(prest)\">{{ prest.libelle }}-->\n\n<!--                                </mat-option>-->\n<!--                            </mat-select>-->\n                            <input type=\"text\"  class=\"form-control\"\n                                   [(ngModel)]=\"categorie\" style=\"width: auto;\" id=\"categorie\">\n<!--                        </mat-form-field>-->\n\n                    </div>\n                    <div class=\"col-md-5\"  style=\"margin-top: -50px;float: right;\">\n                        <input type=\"text\"   class=\"form-control\"\n                               [(ngModel)]=\"montant\" style=\"width: auto;\" id=\"montant\" name=\"montant\">\n                    </div>\n                </div>\n\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-info btn-round\" data-dismiss=\"modal\" (click)=\"Enregistrer()\"\n                    >Modifier<i class=\"fas fa-sign-in-alt ml-1\"></i></button>\n                </div>\n                </div>\n\n\n        </div>\n    </div>\n</div>\n<!--Modal  fin modification montant cotisation -->\n\n<!--Modal cotisation Entité -->\n\n<div class=\"modal fade\" id=\"entite\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog cascading-modal\" role=\"document\">\n        <!--Content-->\n        <div class=\"modal-content\" style=\"width:155%; \">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Prise en Compte des Cotisations par entité</h4>\n                <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                    <i class=\"material-icons\">clear</i>\n                </button>\n            </div>\n\n            <div class=\"modal-c-tabs\">\n\n                <div class=\"tab-content\" >\n                    <!--Body-->\n                    <div class=\"modal-body ml-1\" >\n                        <form #form=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"col-md-5 mr-1\" style=\"margin-top: -25px; width: auto\">\n\n                                    <mat-form-field>\n\n                                        <mat-select name=\"entite\" id=\"entite\" placeholder=\"Selectionner l'entité\"\n                                                    [(ngModel)]=\"entite\">\n                                            <mat-option *ngFor=\"let prest of listEntity\" [value]=\"prest.idEntity\"\n                                                        (click)=\"getnomEntity(prest);form.resetForm()\">{{ prest.nom_entity }}\n\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n                        </form>\n\n\n                    </div>\n\n\n                    <div class=\"col-md-12\" *ngIf=\"listCotisationEntity\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-header-icon card-header-rose\">\n                                <div class=\"card-icon\">\n                                    <i class=\"material-icons\">assignment</i>\n                                </div>\n\n\n                                <h4 class=\"card-title\">Liste prévisionnelle Des Cotisations de\n                                    l'entité {{nomEntity}} </h4>\n\n\n                            </div>\n                            <div [ngSwitch]=\"condition\">\n                                <div *ngSwitchCase=\"1\" >Contenu de remplacement 1\n                                    <div class=\"card-body table-full-width\">\n                                        <div class=\"material-datatable\">\n                                            <table id=\"datatable1\" class=\"table table-hover table-bordered text-black\"\n                                                    style=\"width:100%\">\n\n                                                <thead style=\"background-color: whitesmoke;\">\n\n                                                <tr>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">\n                                                        Matricule\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">\n                                                        Prenom\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Nom\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">\n                                                        Catégorie\n                                                    </th>\n                                                    <!-- <th cope=\"col\">Code Prestation</th> -->\n\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Solde\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Montant\n                                                        à cotiser\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Numero\n                                                        carnet\n                                                    </th>\n                                                    <!-- <th class=\"text-center\" cope=\"col\">Action</th>\n                                                    <th class=\"text-center\" cope=\"col\"></th> -->\n                                                </tr>\n                                                </thead>\n                                                <tbody>\n                                                <tr *ngFor=\"let employ of listCotisationEntity\">\n                                                    <td class=\"text-center\">{{employ.matricule}}</td>\n                                                    <td class=\"text-center\">{{employ.prenom}}</td>\n                                                    <td class=\"text-center\">{{employ.nom}}</td>\n                                                    <td class=\"text-center\">{{employ.ipm_categorie.libelle}}</td>\n                                                    <!-- <td>{{fac.ipm_prestation?.code_prestation}}</td>-->\n                                                    <td class=\"text-center\">{{employ.solde | number:'1.0-0'}}</td>\n                                                    <td class=\"text-center\">{{employ.ipm_categorie.montant | number:'1.0-0'}}</td>\n\n                                                    <td class=\"text-center\">{{employ.numero_carnet}}</td>\n                                                </tr>\n                                                </tbody>\n                                            </table>\n                                            <div class=\"modal-footer justify-content-center\">\n                                                <button (click)=\"fileDownloadEntity()\" mat-raised-button\n                                                        class=\"btn btn-info\">\n                                                    <i class=\"material-icons\">checked</i>Exporter Fichier\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngSwitchCase=\"2\">Contenu de remplacement 2\n                                    <div class=\"card-body table-full-width\">\n                                        <div class=\"material-datatable\">\n                                            <table id=\"datatable1\" class=\"table table-hover table-bordered text-black\"\n                                                   cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n\n                                                <thead style=\"background-color: whitesmoke;\">\n\n                                                <tr>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">\n                                                        Matricule\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">\n                                                        Prenom\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Nom\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">\n                                                        Catégorie\n                                                    </th>\n                                                    <!-- <th cope=\"col\">Code Prestation</th> -->\n\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Solde\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Montant\n                                                        à cotiser\n                                                    </th>\n\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Numero\n                                                        carnet\n                                                    </th>\n                                                    <!-- <th class=\"text-center\" cope=\"col\">Action</th>\n                                                    <th class=\"text-center\" cope=\"col\"></th> -->\n                                                </tr>\n                                                </thead>\n                                                <tbody>\n                                                <tr *ngFor=\"let employ of listCotisationEntity\">\n                                                    <td class=\"text-center\">{{employ.matricule}}</td>\n                                                    <td class=\"text-center\">{{employ.prenom}}</td>\n                                                    <td class=\"text-center\">{{employ.nom}}</td>\n                                                    <td class=\"text-center\">{{employ.ipm_categorie.libelle}}</td>\n                                                    <!-- <td>{{fac.ipm_prestation?.code_prestation}}</td>-->\n                                                    <td class=\"text-center\">{{employ.solde | number:'1.0-0'}}</td>\n                                                    <td class=\"text-center\">{{employ.ipm_categorie.montant | number:'1.0-0'}}</td>\n\n                                                    <td class=\"text-center\">{{employ.numero_carnet}}</td>\n                                                </tr>\n                                                </tbody>\n\n\n                                            </table>\n                                            <div class=\"modal-footer justify-content-center\">\n                                                <button (click)=\"fileDownloadEntity()\" mat-raised-button\n                                                        class=\"btn btn-info\">\n                                                    <i class=\"material-icons\">checked</i>Exporter Fichier\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngSwitchCase=\"3\">Contenu de remplacement 3\n                                    <div class=\"card-body table-full-width\">\n                                        <div class=\"material-datatable\">\n                                            <table id=\"datatable1\" class=\"table table-hover table-bordered text-black\"\n                                                   cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n\n                                                <thead style=\"background-color: whitesmoke;\">\n\n                                                <tr>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">\n                                                        Matricule\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">\n                                                        Prenom\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Nom\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">\n                                                        Catégorie\n                                                    </th>\n                                                    <!-- <th cope=\"col\">Code Prestation</th> -->\n\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Solde\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Montant\n                                                        à cotiser\n                                                    </th>\n\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Numero\n                                                        carnet\n                                                    </th>\n                                                    <!-- <th class=\"text-center\" cope=\"col\">Action</th>\n                                                    <th class=\"text-center\" cope=\"col\"></th> -->\n                                                </tr>\n                                                </thead>\n                                                <tbody>\n                                                <tr *ngFor=\"let employ of listCotisationEntity\">\n                                                    <td class=\"text-center\">{{employ.matricule}}</td>\n                                                    <td class=\"text-center\">{{employ.prenom}}</td>\n                                                    <td class=\"text-center\">{{employ.nom}}</td>\n                                                    <td class=\"text-center\">{{employ.ipm_categorie.libelle}}</td>\n                                                    <!-- <td>{{fac.ipm_prestation?.code_prestation}}</td>-->\n                                                    <td class=\"text-center\">{{employ.solde | number:'1.0-0'}}</td>\n                                                    <td class=\"text-center\">{{employ.ipm_categorie.montant | number:'1.0-0'}}</td>\n\n                                                    <td class=\"text-center\">{{employ.numero_carnet}}</td>\n                                                </tr>\n                                                </tbody>\n\n\n                                            </table>\n                                            <div class=\"modal-footer justify-content-center\">\n                                                <button (click)=\"fileDownloadEntity()\" mat-raised-button\n                                                        class=\"btn btn-info\">\n                                                    <i class=\"material-icons\">checked</i>Exporter Fichier\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngSwitchCase=\"4\">Contenu de remplacement 4\n                                    <div class=\"card-body table-full-width\">\n                                        <div class=\"material-datatable\">\n                                            <table id=\"datatable1\" class=\"table table-hover table-bordered text-black\"\n                                                   cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n\n                                                <thead style=\"background-color: whitesmoke;\">\n\n                                                <tr>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">\n                                                        Matricule\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">\n                                                        Prenom\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Nom\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">\n                                                        Catégorie\n                                                    </th>\n                                                    <!-- <th cope=\"col\">Code Prestation</th> -->\n\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Solde\n                                                    </th>\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Montant\n                                                        à cotiser\n                                                    </th>\n\n                                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Numero\n                                                        carnet\n                                                    </th>\n                                                    <!-- <th class=\"text-center\" cope=\"col\">Action</th>\n                                                    <th class=\"text-center\" cope=\"col\"></th> -->\n                                                </tr>\n                                                </thead>\n                                                <tbody>\n                                                <tr *ngFor=\"let employ of listCotisationEntity\">\n                                                    <td class=\"text-center\">{{employ.matricule}}</td>\n                                                    <td class=\"text-center\">{{employ.prenom}}</td>\n                                                    <td class=\"text-center\">{{employ.nom}}</td>\n                                                    <td class=\"text-center\">{{employ.ipm_categorie.libelle}}</td>\n                                                    <!-- <td>{{fac.ipm_prestation?.code_prestation}}</td>-->\n                                                    <td class=\"text-center\">{{employ.solde | number:'1.0-0'}}</td>\n                                                    <td class=\"text-center\">{{employ.ipm_categorie.montant | number:'1.0-0'}}</td>\n\n                                                    <td class=\"text-center\">{{employ.numero_carnet}}</td>\n                                                </tr>\n                                                </tbody>\n\n\n                                            </table>\n                                            <div class=\"modal-footer justify-content-center\">\n                                                <button (click)=\"fileDownloadEntity()\" mat-raised-button\n                                                        class=\"btn btn-info\">\n                                                    <i class=\"material-icons\">checked</i>Exporter Fichier\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                    <!--Footer-->\n                    <div class=\"modal-footer\">\n\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!--LISTE DES COTISATIONS EFFECTIVES-->\n<!--<div class=\"modal fade\" id=\"cotisationseffectives\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">-->\n<!--    <div class=\"modal-dialog cascading-modal\" role=\"document\">-->\n<!--        &lt;!&ndash;Content&ndash;&gt;-->\n<!--        <div class=\"modal-content\" style=\"width:155%; \">-->\n<!--            <div class=\"modal-header\">-->\n<!--                <h4 class=\"modal-title\">Liste des cotisations effectives</h4>-->\n<!--                <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">-->\n<!--                    <i class=\"material-icons\">clear</i>-->\n<!--                </button>-->\n<!--                <div class=\"card-body table-full-width\">-->\n<!--                    <div class=\"material-datatable\" *ngIf=\"isCotisationEffectiveLancee\">-->\n<!--                        <mat-spinner *ngIf=\"!trouve\"></mat-spinner>-->\n<!--                        <table id=\"datatableCotisationEffective\" class=\"table table-hover table-bordered text-black\"-->\n<!--                               cellspacing=\"0\" width=\"100%\" style=\"width:100%\" *ngIf=\"isCotisationEffectiveTrouvee\">-->\n\n\n\n<!--                            <thead style=\"background-color: whitesmoke;\">-->\n\n<!--                            <tr>-->\n<!--                                <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\"> Matricule</th>-->\n<!--                                <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Prenom/Nom</th>-->\n<!--                                &lt;!&ndash;                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Nom</th>&ndash;&gt;-->\n<!--                                <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Catégorie</th>-->\n<!--                                &lt;!&ndash; <th cope=\"col\">Code Prestation</th> &ndash;&gt;-->\n\n<!--                                <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Solde</th>-->\n\n<!--                                <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Montant à cotiser</th>-->\n<!--                                <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Cotisation Annuelle</th>-->\n\n<!--                                &lt;!&ndash;                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Numero carnet</th>&ndash;&gt;-->\n<!--&lt;!&ndash;                                <th style=\"font-weight: 600;\" >Action</th>&ndash;&gt;-->\n<!--                                &lt;!&ndash;                                    <th class=\"text-center\" cope=\"col\"></th>&ndash;&gt;-->\n<!--                            </tr>-->\n<!--                            </thead>-->\n<!--                            <tbody>-->\n<!--                            <tr *ngFor=\"let employ of cumulCotisationEmploye\">-->\n<!--                                <td class=\"text-center\">{{employ.ipm_employe.matricule}}</td>-->\n<!--                                <td>{{employ.ipm_employe.prenom +\" \"+employ.ipm_employe.nom}}</td>-->\n<!--                                &lt;!&ndash;                                    <td class=\"text-center\">{{employ.ipm_employe.nom}}</td>&ndash;&gt;-->\n<!--                                <td class=\"text-center\">{{employ.ipm_employe.ipm_categorie.libelle}}</td>-->\n<!--                                &lt;!&ndash; <td>{{fac.ipm_prestation?.code_prestation}}</td>-->\n<!--                  &ndash;&gt;-->\n<!--                                <td class=\"text-center\">{{employ.ipm_employe.solde | number:'1.0-0'}}</td>-->\n\n<!--                                <td class=\"text-center\">{{employ.ipm_employe.ipm_categorie.montant | number:'1.0-0'}}</td>-->\n<!--                                <td class=\"text-center\">{{employ.montant | number:'1.0-0'}}</td>-->\n\n<!--                                &lt;!&ndash;                                    <td class=\"text-center\">{{employ.ipm_employe.numero_carnet}}</td>&ndash;&gt;-->\n<!--                                <td  class=\"text-center\">-->\n<!--                                    <button mat-raised-button type=\"button\"  (click)=\"detailCotisation(employ.ipm_employe)\" data-toggle=\"modal\" data-target=\"#bareeees\" color=\"primary\">-->\n<!--                                        Voir Cotisation-->\n<!--                                    </button>-->\n<!--                                </td>-->\n<!--                            </tr>-->\n<!--                            </tbody>-->\n\n\n<!--                        </table>-->\n<!--                        <div class=\"modal-footer justify-content-center\" >-->\n<!--                            <button (click)=\"exportationCotisationEffective()\" *ngIf=\"isCotisationEffectiveTrouvee\" mat-raised-button class=\"btn btn-info\">-->\n<!--                                <i class=\"material-icons\">checked</i>Exporter Fichier-->\n<!--                            </button>-->\n\n<!--                        </div>-->\n<!--                        <div *ngIf=\"!isCotisationEffectiveTrouvee\" style=\"float: left\">-->\n<!--                             <span style=\"color: red;text-align: center\">-->\n<!--                            AUCUNE DONNEE TROUVÉE-->\n<!--                             </span>-->\n\n<!--                    </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--    </div>-->\n<!--</div>-->\n\n<!--Fin-->\n<!--LISTE DES COTISATIONS PREVISIONNELLES-->\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon card-header-rose\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <br><br>\n\n<!--                        PAERTIE COMMENTÉE CAR MAINTENANT, LE BOUTON REDIRIGE VERS LES RAPPORTS -->\n<!--                        <button mat-raised-button type=\"button\" style=\"float:right;margin-top:1cm;-->\n<!--                        font-size: 16px;\" data-toggle=\"modal\"-->\n<!--                                data-target=\"#cotisationseffectives\" class=\"btn btn-success \"-->\n<!--                                (click)=\"getCumulCotisationByEmploye()\">-->\n<!--                            <i class=\"material-icons\">add_circle</i> Liste des Cotisations-->\n<!--                        </button>-->\n                        <button mat-raised-button type=\"button\" style=\"float:right;margin-top:1cm;\n                        font-size: 16px;\"  class=\"btn btn-success \"\n                                (click)=\"redirectionVersRaapportCotisationAnnuelle()\">\n                            <i class=\"material-icons\">add_circle</i>\n                            Liste des Cotisations\n                        </button>\n\n                        <button mat-raised-button type=\"button\" style=\"float:right;margin-top:1cm; \n                        font-size: 16px;\" data-toggle=\"modal\" data-target=\"#bare\" class=\"btn btn-success\" *ngIf=\"!isOperateur() && !isSecretaire()\">\n                            <i class=\"material-icons\"> edit</i> Modifer Cotisations\n                        </button>\n                        <button mat-raised-button type=\"button\" style=\"float:right;margin-top:1cm; \n                        font-size: 16px;\" data-toggle=\"modal\" data-target=\"#entite\" class=\"btn btn-success\">\n                            <i class=\"material-icons\">add_circle</i> Cotisations Par Entité\n                        </button>\n                        <br><br><br><br>\n\n                        <h4 class=\"card-title\">Liste prévisionnelle Des Cotisations</h4>\n                        <mat-spinner *ngIf=\"!trouve\"></mat-spinner>\n\n\n                    </div>\n                    <div class=\"card-body table-full-width\">\n                        <div class=\"material-datatable\">\n                            <table id=\"datatableCotisationPrevisionnelle\" class=\"table table-hover table-bordered text-black\"\n                                   cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n\n                                <thead style=\"background-color: whitesmoke;\">\n\n                                <tr>\n                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\"> Matricule</th>\n                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Prenom/Nom</th>\n<!--                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Nom</th>-->\n                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Catégorie</th>\n                                    <!-- <th cope=\"col\">Code Prestation</th> -->\n\n                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Solde</th>\n<!--                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Cotisation Annuelle</th>-->\n\n                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Montant à cotiser</th>\n\n<!--                                    <th style=\"font-weight: 600;\" class=\"text-center\" cope=\"col\">Numero carnet</th>-->\n                                    <th style=\"font-weight: 600;\" >Action</th>\n<!--                                    <th class=\"text-center\" cope=\"col\"></th>-->\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor=\"let employ of employe\">\n                                    <td class=\"text-center\">{{employ?.matricule}}</td>\n                                    <td>{{employ.prenom +\" \"+employ.nom}}</td>\n<!--                                    <td class=\"text-center\">{{employ.ipm_employe.nom}}</td>-->\n                                    <td class=\"text-center\">{{employ.ipm_categorie.libelle}}</td>\n                                    <!-- <td>{{fac.ipm_prestation?.code_prestation}}</td>\n                      -->\n                                    <td class=\"text-center\">{{employ.solde | number:'1.0-0'}}</td>\n<!--                                    <td class=\"text-center\">{{employ.montant | number:'1.0-0'}}</td>-->\n\n                                    <td class=\"text-center\">{{employ.ipm_categorie.montant | number:'1.0-0'}}</td>\n\n<!--                                    <td class=\"text-center\">{{employ.ipm_employe.numero_carnet}}</td>-->\n                                    <td  class=\"text-center\">\n<!--                                        <button (click)=\"detailCotisation(employ)\" mat-raised-button type=\"button\" color=\"primary\" ata-toggle=\"modal\"-->\n<!--                                                data-target=\"#detailCotis\">-->\n<!--                                            <i class=\"material-icons\">details</i>DETAILS-->\n<!--                                        </button>-->\n                                        <button mat-raised-button type=\"button\"  (click)=\"detailCotisation(employ)\" data-toggle=\"modal\" data-target=\"#bareeees\" color=\"primary\">\n                                            Voir Cotisation\n                                        </button>\n                                    </td>\n                                </tr>\n                                </tbody>\n\n\n                            </table>\n                            <div class=\"modal-footer justify-content-center\">\n                                <button (click)=\"exportationCotisationPrevisionnelle()\" mat-raised-button class=\"btn btn-info\">\n                                    <i class=\"material-icons\">checked</i>Exporter Fichier\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--Details Cotisation-->\n\n<div class=\"modal fade\" id=\"bareeees\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n<div class=\"modal-dialog cascading-modal\" role=\"document\">\n    <!--Content-->\n    <div class=\"modal-content\" *ngIf=\"isDetailsCotisationTrouve\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\"> Details des Cotisations</h4>\n            <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                <i class=\"material-icons\">clear</i>\n            </button>\n        </div>\n            <div class=\"modal-c-tabs\" >\n                <!-- Tab panels -->\n                <div class=\"tab-content\">\n                    <!--Body-->\n                    <div class=\"modal-body mb-1\">\n                        <form>\n                            <div class=\"card-body table-full-width\">\n                                <div class=\"material-datatable\">\n                                    <table id=\"datatable1\" class=\"table table-hover table-bordered text-black\"\n                                           cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n\n                                        <thead style=\"background-color: whitesmoke;\">\n\n                                        <tr>\n<!--                                            <th>ID</th>-->\n                                            <th>MONTANT  </th>\n\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr *ngFor=\"let detail of this.totalDetail\">\n<!--                                        <td>{{detail.id_Det_Coti}}</td>-->\n                                        <td>{{detail.montant}}</td>\n                                        </tr>\n                                       <td style=\"background-color: #c0ca33\"><b>Totale:{{this.somme}}</b></td>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </form>\n\n                    </div>\n\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n    <div class=\"modal-content\" *ngIf=\"!isDetailsCotisationTrouve\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\"></h4>\n            <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                <i class=\"material-icons\">clear</i>\n            </button>\n        </div>\n        <div class=\"modal-c-tabs\" >\n            <!-- Tab panels -->\n            <div class=\"tab-content\">\n                <!--Body-->\n                <div class=\"modal-body mb-1\" style=\"color: red;text-align: center\">\n                    AUCUNE COTISATION TROUVÉE\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n                    <!----------Modification des Barèmes------------>\n\n<div class=\"modal fade\" id=\"modifbareme\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog cascading-modal\" role=\"document\">\n        <!--Content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Modification des Cotisations</h4>\n                <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                    <i class=\"material-icons\">clear</i>\n                </button>\n            </div>\n            <!--Modal cascading tabs-->\n            <div class=\"modal-c-tabs\">\n                <!-- Tab panels -->\n                <div class=\"tab-content\">\n                    <!--Body-->\n                    <div class=\"modal-body mb-1\">\n                        <div class=\"col-md-6 form-group\">\n\n                            <input type=\"text\" id=\"min\" name=\"min\"\n                                   class=\"form-control\" placeholder=\"Categorie\">\n\n                        </div>\n                        <div class=\"col-md-6 form-group\">\n\n                            <input type=\"text\" id=\"max\"\n                                   name=\"max\" class=\"form-control\"\n                                   placeholder=\"Maximum\">\n\n                        </div>\n                        <div class=\"col-md-6 form-group\">\n\n                            <input type=\"text\" id=\"montant\"\n                                   name=\"montant\" class=\"form-control\" placeholder=\"Montant\">\n\n                        </div>\n\n                        <div class=\"text-center mt-2\">\n                            <button class=\"btn btn-info btn-round\" data-dismiss=\"modal\"\n                            >Modifer<i class=\"fas fa-sign-in-alt ml-1\"></i></button>\n                        </div>\n                    </div>\n                    <!--Footer-->\n                    <div class=\"modal-footer\">\n\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n<!--Modal: Login / Register Form-->\n");

/***/ })

}]);
//# sourceMappingURL=cotisation-cotisation-module.js.map