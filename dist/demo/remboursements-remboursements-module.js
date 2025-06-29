(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["remboursements-remboursements-module"],{

/***/ "6w3G":
/*!*************************************************************************************!*\
  !*** ./src/app/remboursements/ajout-remboursement/ajout-remboursement.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AjoutRemboursementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutRemboursementComponent", function() { return AjoutRemboursementComponent; });
/* harmony import */ var _raw_loader_ajout_remboursement_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ajout-remboursement.component.html */ "Lvuk");
/* harmony import */ var _ajout_remboursement_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajout-remboursement.component.css */ "rbAY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var src_app_Models_IPM_DetaRembourse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/IPM_DetaRembourse */ "9ew4");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "JcrP");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/facture.service */ "0WQY");
/* harmony import */ var _Models_IPM_Remboursement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Models/IPM_Remboursement */ "hxs8");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Services/utilisateur.service */ "MVAf");
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














var AjoutRemboursementComponent = /** @class */ (function () {
    function AjoutRemboursementComponent(emp_service, datepipe, dateAdapter, factservice, toastr, route, keycloak, user_Service) {
        var _this = this;
        this.emp_service = emp_service;
        this.datepipe = datepipe;
        this.dateAdapter = dateAdapter;
        this.factservice = factservice;
        this.toastr = toastr;
        this.route = route;
        this.keycloak = keycloak;
        this.user_Service = user_Service;
        this.listRembourse = [];
        this.rembGlobal = new _Models_IPM_Remboursement__WEBPACK_IMPORTED_MODULE_9__["Remboursement"]();
        this.rembouGlobal = new _Models_IPM_Remboursement__WEBPACK_IMPORTED_MODULE_9__["Remboursement"]();
        this.listEmploye = [];
        this.pani = [];
        this.panier = [];
        this.compte = 0;
        this.desactive = false;
        this.detailremb = { idDetail: null, matricule: null, montant: null, ipm_employe: null, ipmRemboursement: null };
        this.keycloak.loadUserProfile().then(function (res) {
            console.log(res);
            _this.user = res;
            _this.getUserByUsernameF(res.username);
        });
        this.dateAdapter.setLocale('en-GB');
    }
    AjoutRemboursementComponent.prototype.ngOnInit = function () {
        //debugger
    };
    AjoutRemboursementComponent.prototype.getUserByUsernameF = function (username) {
        var _this = this;
        return this.user_Service.getUserByUsername(username).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
        });
    };
    AjoutRemboursementComponent.prototype.getMatricule = function () {
        var _this = this;
        console.log(this.matricule);
        this.emp_service.getEmployeByMatricule(this.matricule).subscribe(function (data) {
            _this.message = data;
            console.log(_this.message);
            _this.message.solde;
        }, function (err) { console.log("error"); });
    };
    AjoutRemboursementComponent.prototype.ajoutRemboursement = function () {
        this.date1 = this.datepipe.transform(this.date, 'dd-MM-yyyy');
        console.log(this.message, this.message.matricule);
        var jsonRembourse = new src_app_Models_IPM_DetaRembourse__WEBPACK_IMPORTED_MODULE_5__["IPM_DetaRembourse"]();
        jsonRembourse.ipm_employe = this.message;
        jsonRembourse.matricule = this.message.matricule;
        jsonRembourse.montant = Number(this.montantR);
        this.rembGlobal.dateRemboursement = this.date;
        if (this.message.solde <= jsonRembourse.montant) {
            this.desactive = true;
        }
        else {
            this.listRembourse.push(__assign({}, jsonRembourse));
            this.calculemontant();
            this.desactive = false;
            this.montantR = null;
        }
        this.ngOnInit();
    };
    AjoutRemboursementComponent.prototype.calculemontant = function () {
        this.totalMont = 0;
        this.cumul = 0;
        for (var _i = 0, _a = this.listRembourse; _i < _a.length; _i++) {
            var total = _a[_i];
            this.totalMont += total.montant;
            this.cumul += total.ipm_employe.cumul_charge;
            this.rembGlobal.montantRemboursement = this.totalMont;
            console.log(this.listRembourse, this.rembGlobal);
        }
    };
    AjoutRemboursementComponent.prototype.deleteDetails = function (index) {
        this.listRembourse.splice(index, 1);
        this.calculemontant();
    };
    AjoutRemboursementComponent.prototype.ajoutRem = function () {
        var _this = this;
        this.rembGlobal.ipm_utilisateur = this.user;
        this.factservice.AjoutRembour(this.rembGlobal).subscribe(function (data) {
            _this.rembGlobal.idRemboursement = parseInt(data);
            //this.messageErreur=null;
            console.log(_this.rembGlobal);
            for (var _i = 0, _a = _this.listRembourse; _i < _a.length; _i++) {
                var list = _a[_i];
                list.ipmRemboursement = JSON.parse(JSON.stringify(_this.rembGlobal));
            }
            console.log(_this.listRembourse);
            _this.factservice.AjoutdetaRembour(_this.listRembourse).subscribe(function (data) {
                _this.showALERTE2('top', 'center');
                console.log(data);
                _this.route.navigate(['/remboursements/Listremboursements']);
            });
        });
        //
    };
    //importation
    AjoutRemboursementComponent.prototype.onFileChange = function (evt) {
        var _this = this;
        this.date11 = this.datepipe.transform(this.dateRemboursement, 'dd-MM-yyyy');
        console.log(this.date11);
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
            _this.calculMontant(_this.ws);
            console.log(_this.ws);
        };
        reader.readAsBinaryString(target.files[0]);
        if (this.date11 != null) {
            this.desactive = true;
            this.toastr.success("Importation Reussi Veuillez Valider Remboursement SVP!");
        }
        this.wb == null;
        this.ngOnInit();
    };
    AjoutRemboursementComponent.prototype.deleteDetailrembs = function (index) {
        this.ws.splice(index, 1);
        this.calculMontant(this.ws);
    };
    AjoutRemboursementComponent.prototype.calculMontant = function (fac) {
        this.totalG = 0;
        for (var _i = 0, fac_1 = fac; _i < fac_1.length; _i++) {
            var element = fac_1[_i];
            this.totalG += element.Montant;
            console.log(this.totalG);
        }
    };
    AjoutRemboursementComponent.prototype.ajoutRemGlobale = function (fac) {
        var _this = this;
        this.rembouGlobal.montantRemboursement = this.totalG;
        this.rembouGlobal.dateRemboursement = this.dateRemboursement;
        this.rembouGlobal.ipm_utilisateur = this.user;
        this.factservice.AjoutRembour(this.rembouGlobal).subscribe(function (data) {
            _this.rembouGlobal.idRemboursement = parseInt(data);
            console.log(_this.rembouGlobal);
            var _loop_1 = function (index) {
                console.log(index.Matricule);
                //break
                _this.emp_service.getEmployeByMatricule(index.Matricule).subscribe(
                //() => console.log("Processing Complete."),
                function (data) {
                    _this.message = data;
                    if (_this.message) {
                        _this.listEmploye.push(_this.message);
                        console.log(data);
                        //console.log("null"),
                        //break;
                        // else
                        // console.log("pas null")
                        //for (let i = 0; i <fac.length ; i++ {
                        //console.log(this.listEmploye[0])
                        //}
                        _this.detailremb.montant = index.Montant;
                        _this.detailremb.matricule = index.Matricule;
                        _this.detailremb.ipm_employe = _this.message;
                        _this.detailremb.ipmRemboursement = _this.rembouGlobal;
                        // this.detailFactur.datePrestation = new Date()
                        console.log(_this.detailremb);
                        console.log(_this.detailremb.ipm_employe);
                        console.log(_this.detailremb);
                        _this.panier.push(__assign({}, _this.detailremb));
                        console.log(_this.panier);
                        console.log(fac.length, _this.listEmploye.length);
                        // while (this.panier) {
                        if (fac.length == _this.listEmploye.length) {
                            console.log(_this.listEmploye.length);
                            _this.factservice.AjoutdetaRembour(_this.panier).subscribe(function (data) {
                                console.log(data);
                            });
                            for (var index_1 = 0; index_1 < _this.panier.length; index_1++) {
                                _this.objetEmploye = _this.panier[index_1].ipm_employe;
                                console.log(_this.objetEmploye.solde);
                                // this.objetEmploye.solde-=this.panier[index].montant
                                _this.factservice.updateOnEmploye(_this.objetEmploye).subscribe(function (data) {
                                    console.log(_this.objetEmploye.solde);
                                });
                            }
                            _this.showALERTE2('top', 'center');
                            _this.desactive = true;
                        }
                    }
                    else if (!_this.message) {
                        _this.compte++;
                        console.log("Erreur sur le fichier " + index.Matricule, index, _this.compte);
                        _this.indexMatricule = index;
                        console.log(_this.rembouGlobal, _this.compte);
                        if (_this.compte == 1) {
                            _this.factservice.deleterembById(_this.rembouGlobal.idRemboursement).subscribe(function (data) {
                                _this.matri = index.Matricule;
                                _this.desactive = true;
                                _this.showALERTE('top', 'center');
                                console.log(+index.Matricule);
                            });
                        }
                        // this.router.navigate(['/gestion-factures']);
                    }
                });
            };
            // for(let list of this.listRembourse){
            //   list.ipmRemboursement=JSON.parse(JSON.stringify(this.rembouGlobal))
            // }
            // console.log(this.listRembourse)
            // this.factservice.AjoutdetaRembour(this.listRembourse).subscribe((data)=>{
            // })
            for (var _i = 0, fac_2 = fac; _i < fac_2.length; _i++) {
                var index = fac_2[_i];
                _loop_1(index);
            }
        });
    };
    AjoutRemboursementComponent.prototype.showALERTE = function (from, align) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        // const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: '<b>Veuillez verifer le fichier pour le Matricule :' + this.matri + ' </b> :'
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
    };
    AjoutRemboursementComponent.prototype.showALERTE2 = function (from, align) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
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
    };
    AjoutRemboursementComponent.prototype.showALERTE3 = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        // const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: note
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
    };
    AjoutRemboursementComponent.ctorParameters = function () { return [
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_7__["EmployeService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
        { type: src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_8__["FactureService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_12__["KeycloakService"] },
        { type: _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_13__["UtilisateurService"] }
    ]; };
    AjoutRemboursementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-ajout-remboursement',
            template: _raw_loader_ajout_remboursement_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ajout_remboursement_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_7__["EmployeService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
            src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_8__["FactureService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], keycloak_angular__WEBPACK_IMPORTED_MODULE_12__["KeycloakService"], _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_13__["UtilisateurService"]])
    ], AjoutRemboursementComponent);
    return AjoutRemboursementComponent;
}());



/***/ }),

/***/ "9ew4":
/*!*********************************************!*\
  !*** ./src/app/Models/IPM_DetaRembourse.ts ***!
  \*********************************************/
/*! exports provided: IPM_DetaRembourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPM_DetaRembourse", function() { return IPM_DetaRembourse; });
var IPM_DetaRembourse = /** @class */ (function () {
    function IPM_DetaRembourse(idDetail, matricule, montant, ipm_employe, ipmRemboursement) {
        this.idDetail = idDetail;
        this.matricule = matricule;
        this.montant = montant;
        this.ipm_employe = ipm_employe;
        this.ipmRemboursement = ipmRemboursement;
    }
    return IPM_DetaRembourse;
}());



/***/ }),

/***/ "A/My":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remboursements/cotisation/cotisation.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"card \" style=\"margin-left:8cm;\">\n                <div class=\"card-header card-header-icon\">\n                    <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                        <i class=\"material-icons\">list</i>\n                    </div>\n                    <h3 style=\"background-color:whitesmoke; \n                    font-weight: 400; color: \n                    black; pading: 5px; width: 50%;\" class=\"card-title\">Cotisations</h3>\n                </div>\n                <div class=\"card-body\" style=\"padding-left: 3.5cm;\">\n\n                    <form [formGroup]=\"uploadForm\">\n    \n         \n                        <!-- <input type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\" class=\"btn btn-outline-success\" /> -->\n                  <input type=\"file\" (change)=\"onFileChange($event)\" multiple=\"true\"  formControlName=\"myFile\"/>\n              \n                  <div class=\"modal-footer justify-content-center\">\n                  <button  class=\"btn btn-success\" (click)=\"onSubmit()\">\n                    <i class=\"material-icons\">checked</i>Ajout Cotisation</button>\n                  </div>\n                </form>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n");

/***/ }),

/***/ "BMGj":
/*!*************************************************************************************!*\
  !*** ./src/app/remboursements/list-remboursements/list-remboursements.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ListRemboursementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRemboursementsComponent", function() { return ListRemboursementsComponent; });
/* harmony import */ var _raw_loader_list_remboursements_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./list-remboursements.component.html */ "RQ3x");
/* harmony import */ var _list_remboursements_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-remboursements.component.css */ "TYm4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/facture.service */ "0WQY");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListRemboursementsComponent = /** @class */ (function () {
    function ListRemboursementsComponent(factservice, router, keycloak) {
        this.factservice = factservice;
        this.router = router;
        this.keycloak = keycloak;
        this.iscertifier = false;
    }
    ListRemboursementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.factservice.getAllRemboursementGlobal().subscribe(function (data) {
            _this.liste = data;
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
            console.log(_this.liste);
        });
    };
    ListRemboursementsComponent.prototype.getDetrembouById = function (fac) {
        //location.reload();
        //(<any>$('#datatable1')).dataTable().fnDestroy();
        console.log(fac.idRemboursement);
        this.router.navigate(['/remboursements/certification/' + fac.idRemboursement]);
    };
    ListRemboursementsComponent.prototype.isSecretaire = function () {
        this.hasAccess = false;
        if (this.keycloak.getUserRoles().includes("secretaire")) {
            this.hasAccess = true;
        }
        return this.hasAccess;
    };
    ListRemboursementsComponent.prototype.isOperateur = function () {
        this.hasAccess = false;
        if (this.keycloak.getUserRoles().includes("operateur")) {
            this.hasAccess = true;
        }
        return this.hasAccess;
    };
    ListRemboursementsComponent.ctorParameters = function () { return [
        { type: src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_4__["FactureService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_5__["KeycloakService"] }
    ]; };
    ListRemboursementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list-remboursements',
            template: _raw_loader_list_remboursements_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_list_remboursements_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_4__["FactureService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], keycloak_angular__WEBPACK_IMPORTED_MODULE_5__["KeycloakService"]])
    ], ListRemboursementsComponent);
    return ListRemboursementsComponent;
}());



/***/ }),

/***/ "Lvuk":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remboursements/ajout-remboursement/ajout-remboursement.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n  .btn-group button {\n      background-color: #1240d4;\n      border: none;\n      /* Green border */\n      color: white;\n      /* White text */\n      padding: 10px 100px;\n      /* Some padding */\n      cursor: pointer;\n      /* Pointer/hand icon */\n      float: left;\n      /* Float the buttons side by side */\n\n  }\n\n  /* Clear floats (clearfix hack) */\n  .btn-group:after {\n      content: \"\";\n      clear: both;\n      display: table;\n  }\n\n  .btn-group button:not(:last-child) {\n      border-right: none;\n      /* Prevent double borders */\n  }\n\n</style>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n<div class=\"row\">\n  <div class=\"col-md-8\">\n      <div class=\"card \" style=\"margin-left:4cm;\">\n          <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                  <i class=\"material-icons\">list</i>\n              </div>\n              <h4 class=\"card-title\">remboursement</h4>\n          </div>\n          <div class=\"card-body \">\n              <div class=\"btn-group\">\n                  <table>\n                      <thead>\n                          <th></th>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td> <button class=\"w-100\"  data-toggle=\"modal\"\n                                      data-target=\"#noticeModal\">Saisissez un remboursement </button></td>\n                           <td><button class=\"w-100\"  data-toggle=\"modal\"\n                            data-target=\"#noticeModal2\">importez un remboursement</button></td>\n                                 \n\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>\n\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n          aria-hidden=\"true\">\n          <div class=\"modal-dialog\" >\n              <div class=\"modal-content\"style=\"width: 900px; margin-left:-3cm;margin-top: 3cm;\">\n                  <div class=\"modal-header\" style=\"background-color: whitesmoke;\"\n                  >\n                      <h2 class=\"modal-title p-2\" id=\"noticeModal\" style=\"font-weight:400;\">Remboursement par participant\n                      \n                      </h2>\n                      <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                          <i class=\"material-icons\">close</i>\n                      </button>\n                  </div>\n                  <div class=\"modal-body\" style=\"width: 900px;\">\n\n                      \n                          <form>\n                              <div class=\"row bordered\" >\n                                <div class=\"input-group col-md-4 bordered \">\n                                  <input type=\"text\" name=\"matricule\" class=\"form-control\" placeholder=\"Matricule\" id=\"matricule\"\n                                    [(ngModel)]=\"matricule\">\n                                    <button mat-raised-button (click)=\"getMatricule()\" style=\"margin-top: -7px;padding: 4px;\"\n                                    class=\"btn btn-fill btn-success\"><i class=\"material-icons\">search</i>Rechercher</button>\n                                </div>\n                              </div>\n                            </form>\n                              <form>\n\n                                \n                                \n                                \n                              <div class=\"row bordered\" >\n                              <div class=\"col-md-4 form-group bordered \"  *ngIf=\"message\">\n                                  <label for=\"Taux_ipm\"><b>Nom</b></label><br />\n                                  {{message.nom}}\n                                </div>\n                                <div class=\"col-md-4 form-group\"  *ngIf=\"message\">\n                                  <label for=\"Prenom\"><b>Prenom</b></label><br />\n                                  {{message.prenom}}\n                                </div>\n                                <div class=\"col-md-4 form-group\"  *ngIf=\"message\">\n                                  <label for=\"Numero Carnet\"><b>Numero Carnet</b></label><br />\n                                  {{message.numero_carnet}}\n                                </div>\n                \n                              </div>\n                              <div class=\"row\" *ngIf=\"message\">\n                                  \n                                    <div class=\"col-md-4 form-group\">\n                                      <label for=\"solde\"><b>Solde</b></label><br/>\n                                        <span style=\"height: 30px;width: 85px; font-weight: bold\" class=\"badge badge-danger\"><b>{{message.solde}}F CFA</b></span>\n\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                      <label for=\"Montant\"><b>Montant Remboursement</b><b class=\"text-danger\">*</b>\n                                      </label><br />\n                                      <input type=\"text\" name=\"montant\" class=\"form-control\" placeholder=\"montant F CFA\" id=\"montant\"\n                                    [(ngModel)]=\"montantR\">\n                                    </div>\n\n                                  <div class=\"col-md-4\" style=\"margin-top:1cm;\">\n                                      <!-- <legend>date Facture</legend> -->\n                                      <mat-form-field>\n                                      <input matInput [matDatepicker]=\"picker1\" placeholder=\"date\" id=\"dateRemboursement\" name=\"dateRemboursement\" [(ngModel)]=\"date\" (click)=\"picker1.open()\">\n                                          <b class=\"text-danger\">*</b>\n\n                                          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                      <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\n                                      </mat-form-field>\n                                  </div>\n\n                              </div>\n                            </form>\n                            <button mat-raised-button (click)=\"ajoutRemboursement()\" *ngIf=\"message\"\n                                    [disabled]=\"!montantR || !date\"\n                                    class=\"btn btn-fill btn-success\">Ajouter</button>\n\n\n\n                      <hr>\n                  </div>\n  \n                  <div class=\"card\" *ngIf=\"desactive\">\n                      <span  style=\"text-align:center; color:red;font-size: 30px;\">Remboursement impossible:Votre Montant est Supérieur à Votre Solde !</span>\n                  </div>  \n                  <!-- <div class=\"card\" *ngIf=\"!liste1\">\n                    <p style=\"text-align:center; color:red;font-size: 30px;\">Remboursement impossible car solde supérieur</p>\n                </div>  -->\n                  <div class=\"col-md-12\" *ngIf=\"message\">\n                      <div class=\"card\">\n                        <div class=\"card-header card-header-icon\">\n                          <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                            <i class=\"material-icons\">list</i>\n                    \n                          </div>\n                          <h3  style=\"background-color:whitesmoke; color: black; pading: 5px; width: 40%;\">liste remboursement\n                          </h3>\n                        </div>\n                        <div class=\"card-body\">\n                    \n                          <table class=\"table table-hover table-bordered\">\n                    \n                            <thead style=\"font-weight:bold;\">\n                    \n                              <th cope=\"col\"> Matricule</th>\n                              <th cope=\"col\">Nom</th>\n                              <th cope=\"col\">Prenom</th>\n                              <!-- <th cope=\"col\">Code Prestation</th> -->\n                              <th cope=\"col\">Numéro Carnet</th>\n                              <th cope=\"col\">Cumul charge</th>\n                              <th cope=\"col\">Montant Remboursement</th>\n                              \n                              <th cope=\"col\">Date</th>\n                              <th cope=\"col\">Action</th>\n                    \n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let element of listRembourse ; let i=index\">\n                                <td><b>{{element.matricule}}</b></td>\n                                <td><b>{{element.ipm_employe.nom}}</b></td>\n                                <td><b>{{element.ipm_employe.prenom}}</b></td>\n                                <!-- <td>{{element.ipm_prestation?.code_prestation}}</td> -->\n                                <td><b>{{element.ipm_employe.numero_carnet}}</b></td>\n                                <td><b>{{element.ipm_employe.cumul_charge}}</b></td>\n                                <td><b>{{element.montant}}</b></td>\n                               \n                                <td><b>{{date1}}</b></td>\n                                <td class=\"td_actions\">\n                                  <i class=\"material-icons\" class=\"btn btn-danger\" (click)=deleteDetails(i)><span\n                                      class=\"fa fa-trash-o\"></span></i>\n                                </td>\n                                <!-- <td>\n                                  <button class=\"btn btn-info btn-block\" \n                                 data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\n                                  </button></td> -->\n                    \n                    \n                              </tr>\n                            </tbody>\n                            <tfoot style=\"font-weight:bold;\">\n                              <tr>\n                                <td></td>\n                                <td></td>\n                                <td></td>\n                                <td>\n                                  <h4>TOTAL</h4>\n                                </td>\n                                <td>{{cumul}}</td>\n                                <td>{{totalMont}}</td>\n                                \n                                <td></td>\n                                <td></td>\n                                <td></td>\n                    \n                              </tr>\n                            </tfoot>\n                    \n                          </table>\n                          <div class=\"modal-footer justify-content-center\">\n                            <button class=\"btn btn-raised btn-round btn-success\" (click)=\"ajoutRem()\">Valider remboursement\n                            </button>\n                          </div>\n                        </div>\n                    \n                      </div>\n                    </div>\n                  \n              </div>\n          </div>\n      </div>\n\n      <!--import remboursement-->\n      <div class=\"modal fade\" id=\"noticeModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n          aria-hidden=\"true\">\n          <div class=\"modal-dialog\" >\n              <div class=\"modal-content\"style=\"width: 900px; margin-left:-3cm;margin-top: 3cm;\">\n                  <div class=\"modal-header\" style=\"background-color: whitesmoke;\"\n                  >\n                      <h2 class=\"modal-title p-2\" id=\"noticeModal\" style=\"font-weight:400;\">Importation de Remboursement\n                      \n                      </h2>\n                      <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                          <i class=\"material-icons\">close</i>\n                      </button>\n                  </div>\n                  <div class=\"modal-body\" style=\"width: 900px;\">\n\n                      <!---->\n<div class=\"card\">\n    <h4 class=\"text-center\" style=\"background-color:rgba(17, 17, 227, 0.88); color: white;  width: 50%;\">Remboursement par importation </h4>\n    <div class=\"card-header card-header-icon\" >\n<!--    <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">-->\n<!--      <i class=\"material-icons\">list</i>-->\n<!--    </div>-->\n</div>\n  <div class=\"card-body\">\n    <form>\n\n      <div class=\"row\">\n      \n\n      \n      \n      <div class=\"col-md-3\" style=\"margin-top: 0px;\">\n          <label> Date remboursement  <span style=\"color: red\">*</span></label>\n        <mat-form-field>\n            <input matInput [matDatepicker]=\"picker1\"  id=\"dateRemboursement\" name=\"dateRemboursement\" [(ngModel)]=\"dateRemboursement\" (click)=\"picker1.open()\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\n        </mat-form-field>\n    </div>\n      \n    </div>\n    </form>\n\n\n  </div>\n</div>\n                          \n                            \n                  </div>\n                 \n                  <div class=\"col-md-12\">\n                      <div class=\"card\" *ngIf=\"dateRemboursement\">\n                        <div class=\"card-header card-header-icon\">\n                          <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                            <i class=\"material-icons\">backup</i>\n                          </div>\n                          <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 40%;\">Importation fichier excel</h2>\n                      \n                        </div>\n                        <div class=\"card-body\">\n                          <form >\n                            <input type=\"file\" (change)=\"onFileChange($event)\" />\n\n                              <button mat-raised-button style=\"margin-top:10px;\" type=\"button\"\n                                      class=\"btn btn-outline-danger\" data-toggle=\"modal\">\n                                  le fichier importé doit avoir un <strong>Matricule</strong>  et un <strong>Montant Remboursement</strong>\n                              </button>\n                          <table class=\"table table-hover table-bordered\">\n                            <thead style=\"font-weight:bold;\">\n                              <th cope=\"col\"> Matricule</th>\n                              <!-- <th cope=\"col\">Nom</th>\n                              <th cope=\"col\">Prenom</th>\n                              <th cope=\"col\">Numéro Carnet</th>\n                              <th cope=\"col\">Cumul charge</th> -->\n                              <th cope=\"col\">Montant Remboursement</th>\n                              \n                              <th cope=\"col\">Date</th>\n                              <th cope=\"col\">Action</th>\n                    \n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\" let fac of ws ; let i=index\">\n                                <td><b>{{fac.Matricule}}</b></td>\n                                <!-- <td><b>{{fac.nom}}</b></td>\n                                <td><b>{{fac.ipm_employe.prenom}}</b></td>\n                                <td><b>{{fac.ipm_employe.numero_carnet}}</b></td>\n                                <td><b>{{fac.ipm_employe.cumul_charge}}</b></td> -->\n                                <td><b>{{fac.Montant}}</b></td>\n                               \n                                <td><b>{{date11}}</b></td>\n                                <td class=\"td_actions\">\n                                  <i class=\"material-icons\" class=\"btn btn-danger\" (click)=deleteDetailrembs(i)><span\n                                      class=\"fa fa-trash-o\"></span></i>\n                                </td>\n                                <!-- <td>\n                                  <button class=\"btn btn-info btn-block\" \n                                 data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\n                                  </button></td> -->\n                    \n                    \n                              </tr>\n                            </tbody>\n                            <tfoot style=\"font-weight:bold;\">\n                              <!-- <tr>\n                                <td></td>\n                                <td></td>\n                                <td></td>\n                                <td>\n                                  <h4>TOTAL</h4>\n                                </td>\n                                <td>{{cumul}}</td>\n                                <td>{{totalMont}}</td>\n                                \n                                <td></td>\n                                <td></td>\n                                <td></td>\n                    \n                              </tr> -->\n                            </tfoot>\n                    \n                          </table>\n                          <div class=\"modal-footer justify-content-center\">\n                            <button class=\"btn btn-raised btn-round btn-success\" (click)=\"ajoutRemGlobale(ws)\"  [disabled]=\"desactive==false\">Valider remboursement\n                            </button>\n                          </div>\n                        </form>\n                        </div>\n                    \n                      </div>\n                    </div>\n                  \n              </div>\n          </div>\n      </div>\n     <!--import remboursement--> \n\n</div>\n</div>");

/***/ }),

/***/ "MTHE":
/*!*********************************************************!*\
  !*** ./src/app/remboursements/remboursements.module.ts ***!
  \*********************************************************/
/*! exports provided: RemboursementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemboursementsModule", function() { return RemboursementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ajout_remboursement_ajout_remboursement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-remboursement/ajout-remboursement.component */ "6w3G");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "ZAI4");
/* harmony import */ var _list_remboursements_list_remboursements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-remboursements/list-remboursements.component */ "BMGj");
/* harmony import */ var _certification_certification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./certification/certification.component */ "XkS0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _remboursements_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remboursements-routing.module */ "bx6n");
/* harmony import */ var _cotisation_cotisation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cotisation/cotisation.component */ "k7XT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RemboursementsModule = /** @class */ (function () {
    function RemboursementsModule() {
    }
    RemboursementsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_ajout_remboursement_ajout_remboursement_component__WEBPACK_IMPORTED_MODULE_2__["AjoutRemboursementComponent"], _cotisation_cotisation_component__WEBPACK_IMPORTED_MODULE_10__["CotisationComponent"],
                _list_remboursements_list_remboursements_component__WEBPACK_IMPORTED_MODULE_5__["ListRemboursementsComponent"], _certification_certification_component__WEBPACK_IMPORTED_MODULE_6__["CertificationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_remboursements_routing_module__WEBPACK_IMPORTED_MODULE_9__["rembroutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        })
    ], RemboursementsModule);
    return RemboursementsModule;
}());



/***/ }),

/***/ "RQ3x":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remboursements/list-remboursements/list-remboursements.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--liste facture-->\n<style>\n    tr{font-weight: bold;}\n</style>\n<div class=\"col-md-12\">\n    <div class=\"card\">\n        <div class=\"material-datatable\">\n            <div class=\"card-header card-header-icon\" >\n                <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                  <i class=\"material-icons\">list</i>\n                </div>\n                <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 50%;\">Liste des remboursement </h2>\n            </div>\n            <div class=\"card-body\">\n\n                <table id=\"datatable\" class=\"table table-hover table-bordered\" cellspacing=\"0\"\n                    width=\"100%\" style=\"width:100%\">\n                    <!-- <div *ngFor=\"let item of pageOfItems\">{{item.nom}}</div> -->\n                    <thead style=\"background-color: whitesmoke; \">\n\n                        <tr>\n                            \n                            <th  style=\"font-weight:bold;\" cope=\"col\"> Numero </th>\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\" >Date</th>\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\">Montant remboursement</th>\n                            <th style=\"font-weight:bold;text-align: center;\" cope=\"col\">Status</th>\n\n                    \n                            <th *ngIf=\"!isSecretaire() && !isOperateur() \" style=\"font-weight:bold;text-align: center;\" cope=\"col\">Action</th>\n                    \n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr *ngFor=\" let fac of liste\">\n                            <td ><b>{{fac.idRemboursement}}</b></td>\n                        <td ><b>{{fac.dateRemboursement | date:'yyyy-MM-dd'}}</b></td>\n                        <td class=\"text-center\"><b>{{fac.montantRemboursement}}</b></td>\n                        <td class=\"text-center\" *ngIf=\"fac.certifier\"><b style=\"color: red;\">Remboursement déja certifié</b></td>\n                        <td class=\"text-center\" *ngIf=\"!fac.certifier\"><b style=\"color: #00c853;\">En instance de certification</b></td>\n\n                      \n                            <td class=\"td_actions text-right\" *ngIf=\"!isSecretaire() && !isOperateur() \">\n                                \n                                <button mat-raised-button (click)=\"getDetrembouById(fac)\" type=\"button\" class=\"btn btn-round btn-xs\" id=\"edit\">\n                                    <i class=\"material-icons\" >help</i></button>\n                                        \n                            </td>\n               \n                        </tr>\n                    </tbody>\n\n                </table>\n\n\n\n\n                <!-- <thead class=\"text-primary\">\n\n            \n         \n          <tfoot class=\"text-primary\">\n            <tr>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td><h4>TOTAL<p><div></div>{{montantTotals}}<p></h4></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              \n            </tr>\n          </tfoot> -->\n\n\n            </div>\n        </div>\n    </div>\n</div>\n<!-- modal modification -->\n\n        \n    \n\n");

/***/ }),

/***/ "T9vw":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remboursements/certification/certification.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    tr{font-weight: bold;}\n</style>\n<div class=\"col-md-12 mt-5\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-icon\" >\n            <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n              <i class=\"material-icons\">list</i>\n            </div>\n            <h2 style=\"background-color:whitesmoke; color: black; pading: 2px; width: 100%;\">  \n                <button mat-raised-button  style=\"float: right;\" class=\"btn btn-fill btn-success\" data-dismiss=\"modal\" (click)=\"CertifierEmploye()\"\n                *ngIf=\"certifier!= true else test\">Certifier\n                </button>\n            \n            </h2>\n            \n            <ng-template #test>\n                <h4 class=\" text-white text-center bg-success p-2\" style=\"float: right; font-size: 20px;\">\n                    <i class=\"material-icons\">checked</i>\n                    remboursement  déja certfiée\n                </h4>\n            </ng-template> \n\n            \n          </div>\n        <div class=\"material-datatable\">\n            <div class=\"card-body\">\n\n\n\n                <table id=\"datatable\" class=\"table table-hover table-bordered\" cellspacing=\"0\"\n                    width=\"100%\" style=\"width:100%\">\n\n                    <thead>\n\n                        <tr style=\"background-color: whitesmoke\">\n                            \n                            <th class=\"text-center\" cope=\"col\" ><b>Matricule</b></th>\n                            <th class=\"text-center\" cope=\"col\"><b>Prenom</b></th>\n                            <th class=\"text-center\" cope=\"col\"><b>Nom</b></th>\n                            <th class=\"text-center\" cope=\"col\"><b>Solde</b></th>\n                            \n                            <th class=\"text-center\" cope=\"col\"><b>Montant </b></th>\n                            \n                         <!-- <th class=\"text-center\" cope=\"col\"><b>Date</b></th> -->\n                            <!-- <th class=\"text-center\" cope=\"col\"><b>Action</b></th> -->\n\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr *ngFor=\"let fact of listRembourse\">\n                            <td class=\"text-center\">{{fact.ipm_employe?.matricule}}</td>\n                            <td class=\"text-center\">{{fact.ipm_employe?.prenom}}</td>\n                            <td class=\"text-center\">{{fact.ipm_employe?.nom}}</td>\n                            <td class=\"text-center\">{{fact.ipm_employe?.solde}}</td>\n\n                            \n                            <td class=\"text-center\">{{fact.montant | number:'.2'}}</td>\n                            \n                            <!-- <td class=\"td_actions text-right\">\n                                <button mat-raised-button (click)=\"getRembById(fact)\" type=\"button\"\n                                    class=\"btn btn-round btn-xs\" id=\"edit\">\n                                    <i class=\"material-icons\" data-toggle=\"modal\"\n                                        data-target=\"#Modal2\">help</i></button>\n                            </td> -->\n                            <!-- <td>\n                            <div [ngSwitch]=\"fac.certifier\" *ngIf=\"\">\n                                <div *ngSwitchCase=\"true\">\n                                    \n                                  <mat-checkbox checked=\"true\"></mat-checkbox>\n                                </div>\n                                \n                                <div *ngSwitchDefault>\n                                    \n                                  <mat-checkbox (click)=\"getCertified(fac)\"></mat-checkbox>\n                                </div>\n                            </div>\n                          \n                        </td> -->\n\n                        </tr>\n                    </tbody>\n\n\n                </table>\n            </div>\n        </div>\n    </div>\n    <button mat-raised-button class=\"btn btn-fill btn-danger\"  style=\"margin-left: 25.5cm;\" (click)=\"retourner()\">retour\n    </button>\n</div>\n\n\n\n\n<!--formulaire-->\n<!-- <div class=\"modal fade\" id=\"Modal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-success\">\n                <h4 class=\"modal-title text-white\" id=\"Modal2\" style=\"font-weight:bold;\">Detail\n                </h4>\n                <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                    <i class=\"material-icons\">close</i>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-sm-offset-2\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"form-group col-md-5\">\n                                    <label style=\"font-weight:bold;\" for=\"nom\">nom :{{nom}}</label>\n\n                                </div>\n                                <div class=\"form-group col-md-2\"></div>\n                                <div class=\"form-group col-md-5\">\n                                    <label style=\"font-weight:bold;\" for=\"prenom\">prenom :\n                                        {{prenom}}</label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n\n                                <div class=\"form-group col-md-5\">\n                                    <label style=\"font-weight:bold;\" for=\"Matricule\">Matricule\n                                        :{{matricule}}</label>\n\n                                </div>\n                                <div class=\"form-group col-md-2\"></div>\n                                <div class=\"form-group col-md-5\">\n                                    <label style=\"font-weight:bold;\" for=\"Prestation\">Prestation :\n                                        {{prestation}}</label>\n\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"form-group col-md-5\">\n                                    <label style=\"font-weight:bold;\" for=\"Prestataire\">Prestataire\n                                        {{prestataire}}</label>\n\n                                </div>\n                                <div class=\"form-group col-md-2\"></div>\n                                <div class=\"form-group col-md-5\">\n                                    <label style=\"font-weight:bold;\" for=\"Date de Facture\">Date de\n                                        Facture : {{dateFacture}}</label>\n\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"form-group col-md-5\">\n                                    <label style=\"font-weight:bold;\" for=\"Date d'enregistrement\">Date\n                                        d'enregistremen: {{dateEnregistrement}}</label>\n\n                                </div>\n                                <div class=\"form-group col-md-2\"></div>\n                                <div class=\"form-group col-md-5\">\n                                    <label style=\"font-weight:bold;\" for=\"Montant\">Montant\n                                        :{{montant}}</label>\n\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"form-group col-md-5\">\n                                    <label style=\"font-weight:bold;\" for=\"Part IPM\">Part IPM\n                                        :{{part_ipm}}</label>\n\n                                </div>\n                                <div class=\"form-group col-md-2\"></div>\n                                <div class=\"form-group col-md-5\">\n                                    <label style=\"font-weight:bold;\" for=\"Part Patient\">Part Patient\n                                        :{{part_patient}}</label>\n\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"form-group col-md-5\">\n                                    <label style=\"font-weight:bold;\" for=\"Solde\">SOLDE\n                                        :{{solde}}</label>\n\n                                </div>\n                                <div class=\"form-group col-md-2\"></div>\n                                <div class=\"form-group col-md-5\">\n                                    <label style=\"font-weight:bold;\" for=\"Cumul Charge\">Cumul Charge\n                                        :{{cumulCharge}}</label>\n\n                                </div>\n                            </div>\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n\n            </div>\n        </div>\n    </div>\n</div> -->\n\n\n\n<!--end formulaire-->\n");

/***/ }),

/***/ "TYm4":
/*!**************************************************************************************!*\
  !*** ./src/app/remboursements/list-remboursements/list-remboursements.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbWJvdXJzZW1lbnRzL2xpc3QtcmVtYm91cnNlbWVudHMvbGlzdC1yZW1ib3Vyc2VtZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "W5SN":
/*!********************************************************************!*\
  !*** ./src/app/remboursements/cotisation/cotisation.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbWJvdXJzZW1lbnRzL2NvdGlzYXRpb24vY290aXNhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "XkS0":
/*!*************************************************************************!*\
  !*** ./src/app/remboursements/certification/certification.component.ts ***!
  \*************************************************************************/
/*! exports provided: CertificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationComponent", function() { return CertificationComponent; });
/* harmony import */ var _raw_loader_certification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./certification.component.html */ "T9vw");
/* harmony import */ var _certification_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certification.component.css */ "p66G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/facture.service */ "0WQY");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CertificationComponent = /** @class */ (function () {
    function CertificationComponent(factservice, route, router) {
        this.factservice = factservice;
        this.route = route;
        this.router = router;
    }
    CertificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idremb = this.route.snapshot.params['id'];
        console.log(this.idremb);
        this.factservice.getAllremboursbyrembourseglobale(this.idremb).subscribe(function (data) {
            _this.listRembourse = data;
            console.log(_this.listRembourse);
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
            _this.listRembourse = data;
            console.log(data);
            console.log(_this.listRembourse);
            for (var _i = 0, _a = _this.listRembourse; _i < _a.length; _i++) {
                var lf = _a[_i];
                _this.certifier = lf.ipmRemboursement.certifier;
                _this.global = lf.ipmRemboursement;
                //this.numero =lf.ipmFacture.numerofacture
            }
        });
    };
    CertificationComponent.prototype.CertifierEmploye = function () {
        var _this = this;
        console.log(this.certifier);
        console.log(this.listRembourse);
        this.listeCertif = this.listRembourse;
        this.global.certifier = true;
        console.log(this.global);
        this.factservice.updateOnglobal(this.global).subscribe(function (data) { });
        // this.fact_service.updateOnEmploye(this.chargeEmploie).subscribe(
        //  (data)=>{
        console.log(this.listeCertif);
        var _loop_1 = function (index) {
            this_1.objetEmploye = this_1.listeCertif[index].ipm_employe;
            // console.log(this.listFactureCertif[index].ipm_employe.idemp,this.objetEmploye)
            // this.listFactureCertif[index]
            console.log(this_1.objetEmploye.solde);
            this_1.objetEmploye.solde -= this_1.listeCertif[index].montant;
            // this.objetEmploye.cumul_charge+=this.listFactureCertif[index].part_patient
            // //this.chargeEmploie.push({...index.ipm_employe})
            // //console.log(this.chargeEmploie);
            this_1.update = this_1.objetEmploye;
            console.log(this_1.update, this_1.update.solde);
            // console.log(this.objetEmploye,this.objetEmploye.solde,this.update);
            // debugger
            this_1.factservice.updateOnEmploye(this_1.update).subscribe(function (data) {
                if (index + 1 == _this.listRembourse.length) {
                    _this.showALERTE("top", "center");
                }
            }, function (err) {
                if (index + 1 == _this.listRembourse.length)
                    _this.showALERTE2("top", "center");
            });
        };
        var this_1 = this;
        // for (let index = 0; index < array.length; index++) {
        //   const element = array[index];
        // }                                                                            
        for (var index = 0; index < this.listeCertif.length; index++) {
            _loop_1(index);
        }
    };
    CertificationComponent.prototype.retourner = function () {
        this.router.navigate(['/remboursements/Listremboursements']);
    };
    CertificationComponent.prototype.showALERTE2 = function (from, align) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        // const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: '<b>Erreure d enregistrement  </b> :'
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
    };
    CertificationComponent.prototype.showALERTE = function (from, align) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        // const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: '<b> enregistrement fait avec succes  </b> :'
        }, {
            type: type[1],
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
    };
    CertificationComponent.ctorParameters = function () { return [
        { type: src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_4__["FactureService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CertificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-certification',
            template: _raw_loader_certification_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_certification_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_facture_service__WEBPACK_IMPORTED_MODULE_4__["FactureService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CertificationComponent);
    return CertificationComponent;
}());



/***/ }),

/***/ "bx6n":
/*!*****************************************************************!*\
  !*** ./src/app/remboursements/remboursements-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: rembroutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rembroutes", function() { return rembroutes; });
/* harmony import */ var _ajout_remboursement_ajout_remboursement_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajout-remboursement/ajout-remboursement.component */ "6w3G");
/* harmony import */ var _certification_certification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certification/certification.component */ "XkS0");
/* harmony import */ var _cotisation_cotisation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cotisation/cotisation.component */ "k7XT");
/* harmony import */ var _list_remboursements_list_remboursements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-remboursements/list-remboursements.component */ "BMGj");




var rembroutes = [
    {
        path: '',
        children: [{
                path: 'AjoutRemboursement',
                component: _ajout_remboursement_ajout_remboursement_component__WEBPACK_IMPORTED_MODULE_0__["AjoutRemboursementComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'certification/:id',
                component: _certification_certification_component__WEBPACK_IMPORTED_MODULE_1__["CertificationComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'Listremboursements',
                component: _list_remboursements_list_remboursements_component__WEBPACK_IMPORTED_MODULE_3__["ListRemboursementsComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'Cotisation',
                component: _cotisation_cotisation_component__WEBPACK_IMPORTED_MODULE_2__["CotisationComponent"]
            }]
    },
];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class RemboursementsRoutingModule { }


/***/ }),

/***/ "hxs8":
/*!*********************************************!*\
  !*** ./src/app/Models/IPM_Remboursement.ts ***!
  \*********************************************/
/*! exports provided: Remboursement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Remboursement", function() { return Remboursement; });
var Remboursement = /** @class */ (function () {
    function Remboursement(idRemboursement, montantRemboursement, dateRemboursement, certifier, 
    // public idfacture?:number,
    // public idfacture?:number,
    ipm_utilisateur) {
        this.idRemboursement = idRemboursement;
        this.montantRemboursement = montantRemboursement;
        this.dateRemboursement = dateRemboursement;
        this.certifier = certifier;
        this.ipm_utilisateur = ipm_utilisateur;
    }
    return Remboursement;
}());



/***/ }),

/***/ "k7XT":
/*!*******************************************************************!*\
  !*** ./src/app/remboursements/cotisation/cotisation.component.ts ***!
  \*******************************************************************/
/*! exports provided: CotisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotisationComponent", function() { return CotisationComponent; });
/* harmony import */ var _raw_loader_cotisation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./cotisation.component.html */ "A/My");
/* harmony import */ var _cotisation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cotisation.component.css */ "W5SN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_Models_CotisatonGlobal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Models/CotisatonGlobal */ "IeU+");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ "JcrP");
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










//import { Cotisation, DetailCotisation } from 'src/app/Models/IPM_Cotisation';


//import { CotisationGlobal } from '../../Models/CotisatonGlobal';
var CotisationComponent = /** @class */ (function () {
    function CotisationComponent(router, emp_service, route, toastr, formbuild, httpClient, dateAdapter, datepipe) {
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
        this.detailCotisation = { id_Det_Coti: null, montant: null, ipm_employe: null, ipm_cotisation: null };
        this.cotisaGlobal = new src_app_Models_CotisatonGlobal__WEBPACK_IMPORTED_MODULE_9__["Cotisation"]();
        this.dateAdapter.setLocale('en-GB');
    }
    CotisationComponent.prototype.ngOnInit = function () {
        this.uploadForm = this.formbuild.group({
            // evenement: ['', Validators.required],
            myFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            montant: [''],
            matricule: [''],
        });
    };
    CotisationComponent.prototype.onFileSelect = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            // @ts-ignore
            //this.uploadForm.get('myFile').setValue();
        }
    };
    ///////////////////////RELOAD
    CotisationComponent.prototype.reloadComponent = function () {
        var currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    };
    ///////////////////// 
    CotisationComponent.prototype.onFileChange = function (evt) {
        var _this = this;
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            _this.wb = xlsx__WEBPACK_IMPORTED_MODULE_11__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            _this.wb.SheetNames.forEach(function (ele) {
                _this.ws = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].sheet_to_json(_this.wb.Sheets[ele]);
                console.log(_this.ws);
            });
            for (var index = 0; index < _this.ws.length; index++) {
                _this.ws[index];
            }
            _this.calculemontant(_this.ws);
        };
        reader.readAsBinaryString(target.files[0]);
    };
    CotisationComponent.prototype.calculemontant = function (fac) {
        console.log(fac);
        this.total = 0;
        for (var _i = 0, fac_1 = fac; _i < fac_1.length; _i++) {
            var element = fac_1[_i];
            this.total += element.Montant;
        }
    };
    CotisationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.cotisaGlobal.montant_totals = this.total;
        this.cotisaGlobal.date = new Date();
        console.log(this.cotisaGlobal);
        this.emp_service.AjoutCotisation(this.cotisaGlobal).subscribe(function (data) {
            console.log(data);
            _this.cotisaGlobal.idCotisation = parseInt(data);
            var _loop_1 = function (elemt) {
                _this.total += elemt.Montant;
                _this.emp_service.getEmployeByMatricule(elemt.Matricule).subscribe(
                //() => console.log("Processing Complete."),
                function (data) {
                    _this.message = data;
                    if (_this.message) {
                        _this.listEmploye.push(_this.message);
                        console.log(_this.listEmploye);
                        _this.detailCotisation.montant = elemt.Montant;
                        // this.detailCotisation.matricule=elemt.matricule
                        _this.detailCotisation.ipm_employe = _this.message;
                        _this.detailCotisation.ipm_cotisation = _this.cotisaGlobal;
                        _this.panier.push(__assign({}, _this.detailCotisation));
                        console.log(_this.ws.length, _this.listEmploye.length);
                        if (_this.ws.length == _this.listEmploye.length) {
                            console.log(_this.listEmploye.length);
                            _this.emp_service.AjoutDetaCotisation(_this.panier).subscribe(function (data) {
                                console.log(data);
                            });
                            // this.fact_service.UpdateFacture(this.factureglobal).subscribe
                            //   (
                            //     (data) => {
                            //       console.log(data)
                            //     }
                            //   );
                            // this.showALERTE2('top', 'center')
                            // this.desactive=true
                        }
                    }
                    // else if (!this.message && this.cotisaGlobal.) {
                    //   //this.compte++
                    //   console.log("Erreur sur le fichier " +index.Matricule, index, this.compte);
                    //   this.indexMatricule=this.compte
                    //     console.log(this.factureglobal)
                    //     this.fact_service.deleteById(this.factureglobal.idfacture).subscribe(
                    //       (data) => {
                    //         this.matri = index.Matricule
                    //         this.showALERTE('top', 'center')
                    //         console.log(+index.Matricule)
                    //       }
                    //     )
                    //    // this.router.navigate(['/gestion-factures']);
                    // }
                });
            };
            for (var _i = 0, _a = _this.ws; _i < _a.length; _i++) {
                var elemt = _a[_i];
                _loop_1(elemt);
            }
        });
        //   const formData = new FormData();
        //   // @ts-ignore
        //   formData.append('file', this.uploadForm.get('myFile').value);
        //   console.log(this.uploadForm.get('myFile').value);
        //   // @ts-ignore
        //   // formData.append('field', this.uploadForm.get('evenement').value);
        //  console.log(formData);
        //   this.httpClient.post<Cotisation>(environment.URL+'uploadCotisation', formData).subscribe(response => {
        //     console.log(response);
        //     this.toastr.info("Fichier chargé avec succès");
        //     let that = this;
        //     setTimeout(function () {
        //       that.reloadComponent();
        //     }, 5000);
        //   }, err => {
        //     console.log(err);
        //     this.toastr.error("Fichier non chargé")
        //     let that = this;
        //     setTimeout(function () {
        //       that.reloadComponent();
        //     }, 15000);
        //   });
    };
    CotisationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__["EmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    CotisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-cotisation',
            template: _raw_loader_cotisation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_cotisation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_10__["EmployeService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], CotisationComponent);
    return CotisationComponent;
}());



/***/ }),

/***/ "p66G":
/*!**************************************************************************!*\
  !*** ./src/app/remboursements/certification/certification.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbWJvdXJzZW1lbnRzL2NlcnRpZmljYXRpb24vY2VydGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "rbAY":
/*!**************************************************************************************!*\
  !*** ./src/app/remboursements/ajout-remboursement/ajout-remboursement.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Modal1 {\n    max-width: 1200px;\n    margin: 1.\n    75rem auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVtYm91cnNlbWVudHMvYWpvdXQtcmVtYm91cnNlbWVudC9ham91dC1yZW1ib3Vyc2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakI7Y0FDVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcmVtYm91cnNlbWVudHMvYWpvdXQtcmVtYm91cnNlbWVudC9ham91dC1yZW1ib3Vyc2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTW9kYWwxIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDEuXG4gICAgNzVyZW0gYXV0bztcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=remboursements-remboursements-module.js.map