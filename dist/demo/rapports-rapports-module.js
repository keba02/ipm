(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rapports-rapports-module"],{

/***/ "0a5w":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapports/charges-individuel/charges-individuel.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!---->\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      \n  <div class=\"card\">\n      <div class=\"card-header card-header-icon\" >\n        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n          <i class=\"material-icons\">search</i>\n        </div>\n        <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 70%;\">situation des individus par péroide </h2>\n    </div>\n      <div class=\"card-body\">\n        <form #form=\"ngForm\">\n  \n          <div class=\"row\">\n          \n  \n          \n          \n          <!-- <div class=\"col-md-3 form-group\" style=\"margin-top: -12px;\">\n            <label for=\"Numéro\"><b>Numéro Facture</b></label>\n            \n            <input type=\"number\" class=\"form-control\" id=\"Numéro\" name=\"Numéro\" [(ngModel)]=\"NumeroFacture\">\n          </div> -->\n          <div class=\"col-md-3\" style=\"margin-top: 0px;\">\n              <!-- <legend>date Facture</legend> -->\n              <mat-form-field>\n              <input matInput [matDatepicker]=\"picker\" placeholder=\" la date du\" id=\"date1\" name=\"date1\" [(ngModel)]=\"date1\" (click)=\"picker.open()\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker startView=\"year\"></mat-datepicker>\n              </mat-form-field>\n          </div>\n          <div class=\"col-md-3\" style=\"margin-top: 0px;\">\n            <!-- <legend>date Facture</legend> -->\n            <mat-form-field>\n            <input matInput [matDatepicker]=\"picker1\" placeholder=\"Au\" id=\"date2\" name=\"date2\" [(ngModel)]=\"date2\" (click)=\"picker1.open()\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\n            </mat-form-field>\n        </div>\n        \n        <div class=\"card-footer\" style=\"padding-left: 40%;\">\n          <button mat-raised-button type=\"submit\" \n           (click)=\"getSituation();form.resetForm()\" class=\"btn btn-fill btn-success\"><i\n              class=\"material-icons\">search</i>Rechercher</button>\n        </div>\n          \n        </div>\n        </form>\n        </div>\n        </div>\n        \n        <!--liste creances-->\n  <div *ngIf=\"listCharge\">\n      <div class=\"card\">\n        <div class=\"card-header card-header-icon\">\n          <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n            <i class=\"material-icons\">list</i>\n    \n          </div >\n          <h2 class=\"text-center\" \n          style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">liste des situatons individuelle du {{d1}} au {{d2}}\n          </h2>\n        </div >\n        <div class=\"material-datatable\">\n        <div class=\"card-body\">\n          \n          <table id=\"donne\" class=\"table table-striped\">\n    \n            <thead>\n              <tr>\n    \n              <th> Matricule</th>\n              <th>Nom Participant</th>\n              <th>Prenom Participant</th>\n              \n              <th>MontantFacture</th>\n              <th>ChargeIpm</th>\n              <th>ChargeAgent</th>\n          \n              <!-- <th>Action</th> -->\n            </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let element of listCharge\">\n                <td><b>{{element.ipm_employe?.matricule}}</b></td>\n                <td><b>{{element.ipm_employe?.nom}}</b></td>\n                <td><b>{{element.ipm_employe?.prenom}}</b></td>\n                <td><b>{{element.montant_facture}}</b></td>\n                <!-- <td>{{element.ipm_prestation?.code_prestation}}</td> -->\n                <td><b>{{element.part_ipm}}</b></td>\n                <td><b>{{element.part_patient}}</b></td>\n                \n                <!-- <td class=\"td_actions\">\n                  <i class=\"material-icons\" class=\"btn btn-danger\" ><span\n                      class=\"fa fa-trash-o\"></span></i>\n                </td> -->\n                <!-- <td>\n                  <button class=\"btn btn-info btn-block\" \n                 data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\n                  </button></td> -->\n    \n    \n              </tr>\n            </tbody>\n            <!-- <tfoot style=\"font-weight:bold;\">\n              <tr>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td>\n                  <h4>TOTAL</h4>\n                </td>\n                <td>{{}}</td>\n                <td>{{}}</td>\n                <td>{{}}</td>\n                <td></td>\n                <td></td>\n                <td></td>\n    \n              </tr>\n            </tfoot> -->\n    \n          </table>\n        </div>\n          <!-- <div class=\"modal-footer justify-content-center\">\n            <button class=\"btn btn-raised btn-round btn-success\" [disabled]=\"validerFact\" >Valider facture\n            </button>\n          </div> -->\n        </div>\n    \n      </div>\n    </div>\n    </div>\n  </div>\n  \n    <!--fin liste-->\n    \n    \n  \n  \n  \n");

/***/ }),

/***/ "7ZWq":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapports/creances-gbales/creances-gbales.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!---->\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n\n    <div class=\"card\">\n      <div class=\"card-header card-header-icon\">\n<!--        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">-->\n<!--          <i class=\"material-icons\">search</i>-->\n<!--        </div>-->\n        <h3 class=\"text-center\" style=\"background-color:rgba(17, 17, 227, 0.88);font-weight: bold;color: whitesmoke; pading: 8px; width: 40%;\">Rapport\n          global </h3>\n      </div>\n      <div class=\"card-body\">\n        <form #form=\"ngForm\">\n\n          <div class=\"row\">\n\n\n\n\n            <!-- <div class=\"col-md-3 form-group\" style=\"margin-top: -12px;\">\n          <label for=\"Numéro\"><b>Numéro Facture</b></label>\n          \n          <input type=\"number\" class=\"form-control\" id=\"Numéro\" name=\"Numéro\" [(ngModel)]=\"NumeroFacture\">\n        </div> -->\n            <div class=\"col-md-3\" style=\"margin-top: 0px;\">\n              <!-- <legend>date Facture</legend> -->\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker\" placeholder=\" la date du\" id=\"date1\" name=\"date1\"\n                  [(ngModel)]=\"date1\" (click)=\"picker.open()\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker startView=\"year\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n            <div class=\"col-md-3\" style=\"margin-top: 0px;\">\n              <!-- <legend>date Facture</legend> -->\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker1\" placeholder=\"Au\" id=\"date2\" name=\"date2\" [(ngModel)]=\"date2\"\n                  (click)=\"picker1.open()\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\n              </mat-form-field>\n            </div>\n            <div class=\"col-md-3 form-group\" style=\"margin-top: -1px;\">\n              <mat-form-field>\n                <mat-select placeholder=\"Entité\" name=\"entity\" [(ngModel)]=\"entity\">\n\n\n                  <mat-option [value]=\"tout\" (click)=\"getEntout()\">\n                    {{\"tout\" }}\n\n\n                  </mat-option>\n\n                  <mat-option *ngFor=\"let ent of listEntiy\" [value]=\"ent.idEntity\" (click)=\"getEntity(ent)\">\n\n\n                    {{ ent.nom_entity }}\n                  </mat-option>\n\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div class=\"card-footer\" style=\"padding-left: 40%;\">\n              <button mat-raised-button type=\"submit\" (click)=\"getCreanceglobale();form.resetForm()\"\n                class=\"btn btn-fill btn-success\"><i class=\"material-icons\">search</i>Rechercher</button>\n            </div>\n\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <!--liste creances-->\n    <div class=\"col-md-12\" *ngIf=\"listCreanceEntites else test\">\n      <div class=\"card\" *ngIf=\"affiche\">\n        <div class=\"card-header card-header-icon\">\n          <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n            <i class=\"material-icons\">list</i>\n\n          </div>\n          <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">liste\n            creance {{attente}} du {{d1}} au {{d2}} </h2>\n\n        </div>\n        <div class=\"card-body\">\n          <div class=\"material-datatable\">\n            <table id=\"datatable\" class=\"table table-bordered \" #TABLE cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n\n              <thead style=\"font-weight:bold;\">\n\n\n\n\n\n                <tr>\n\n                  <th cope=\"col\"> Matricule</th>\n                  <th cope=\"col\">Nom Participant</th>\n                  <th cope=\"col\">Prenom Participant</th>\n\n                  <th cope=\"col\">MontantFacture</th>\n                  <th cope=\"col\">ChargeIpm</th>\n                  <th cope=\"col\">ChargeAgent</th>\n\n\n\n                </tr>\n              </thead>\n\n              <tbody>\n                <tr *ngFor=\"let element of listCreanceEntites; let i=index\">\n                  <td><b>{{element.ipm_employe?.matricule}}</b></td>\n                  <td><b>{{element.ipm_employe?.nom}}</b></td>\n                  <td><b>{{element.ipm_employe?.prenom}}</b></td>\n                  <td><b>{{element.montant_facture}}</b></td>\n                  <!-- <td>{{element.ipm_prestation?.code_prestation}}</td> -->\n                  <td><b>{{element.part_ipm}}</b></td>\n                  <td><b>{{element.part_patient}}</b></td>\n\n                  <!-- <td class=\"td_actions\">\n                <i class=\"material-icons\" class=\"btn btn-danger\" ><span\n                    class=\"fa fa-trash-o\"></span></i>\n              </td> -->\n                  <!-- <td>\n                <button class=\"btn btn-info btn-block\" \n               data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\n                </button></td> -->\n\n\n                </tr>\n              </tbody>\n              <!-- <tfoot style=\"font-weight:bold;\">\n            <tr>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td>\n                <h4>TOTAL</h4>\n              </td>\n              <td>{{}}</td>\n              <td>{{}}</td>\n              <td>{{}}</td>\n              <td></td>\n              <td></td>\n              <td></td>\n  \n            </tr>\n          </tfoot> -->\n\n            </table>\n          </div>\n          <button class=\"btn btn-raised btn-round btn-success\" (click)=\"imprimer() \">imprimer\n          </button>\n          <!-- <div class=\"modal-footer justify-content-center\">\n          <button class=\"btn btn-raised btn-round btn-success\" [disabled]=\"validerFact\" >Valider facture\n          </button>\n        </div> -->\n          <div class=\"col-md-6\" style=\"font-weight:bold;color: black;float: right;\">\n            <i mat-raised-button type=\"button\" class=\"nav-link\"\n               data-toggle=\"tab\"  style=\"width: 100px;\" (click)=\"retourserach()\"  role=\"tablist\" class=\"btn btn-info btn-round\">\n              <span class=\"material-icons\">arrow_back</span></i>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <ng-template #test>\n      <div class=\"col-md-12\" *ngIf=\"listCreanceGlobales\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-icon\">\n            <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n              <i class=\"material-icons\">list</i>\n\n            </div>\n            <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">liste\n              creance {{attente}} du {{d1}} au {{d2}}\n            </h2>\n\n          </div>\n          <div class=\"card-body\">\n            <div class=\"material-datatable\">\n              <table id=\"datatable\" class=\"table table-bordered \" #TABLE cellspacing=\"0\" width=\"100%\"\n                style=\"width:100%\">\n\n                <thead style=\"font-weight:bold;\">\n\n                  <tr>\n\n\n                    <th cope=\"col\"> Matricule</th>\n                    <th cope=\"col\">Nom Participant</th>\n                    <th cope=\"col\">Prenom Participant</th>\n\n                    <th cope=\"col\">MontantFacture</th>\n                    <th cope=\"col\">ChargeIpm</th>\n                    <th cope=\"col\">ChargeAgent</th>\n\n\n                  </tr>\n                </thead>\n\n                <tbody>\n                  <tr *ngFor=\"let element of listCreanceGlobales; let i=index\">\n                    <td><b>{{element.ipm_employe?.matricule}}</b></td>\n                    <td><b>{{element.ipm_employe?.nom}}</b></td>\n                    <td><b>{{element.ipm_employe?.prenom}}</b></td>\n                    <td><b>{{element.montant_facture}}</b></td>\n                    <!-- <td>{{element.ipm_prestation?.code_prestation}}</td> -->\n                    <td><b>{{element.part_ipm}}</b></td>\n                    <td><b>{{element.part_patient}}</b></td>\n\n                    <!-- <td class=\"td_actions\">\n                <i class=\"material-icons\" class=\"btn btn-danger\" ><span\n                    class=\"fa fa-trash-o\"></span></i>\n              </td> -->\n                    <!-- <td>\n                <button class=\"btn btn-info btn-block\"\n               data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\n                </button></td> -->\n\n\n                  </tr>\n                </tbody>\n                <!-- <tfoot style=\"font-weight:bold;\">\n            <tr>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td>\n                <h4>TOTAL</h4>\n              </td>\n              <td>{{}}</td>\n              <td>{{}}</td>\n              <td>{{}}</td>\n              <td></td>\n              <td></td>\n              <td></td>\n\n            </tr>\n          </tfoot> -->\n\n              </table>\n            </div>\n            <!-- <div class=\"modal-footer justify-content-center\">\n          <button class=\"btn btn-raised btn-round btn-success\" [disabled]=\"validerFact\" >Valider facture\n          </button>\n        </div> -->\n            <button class=\"btn btn-raised btn-round btn-success\" (click)=\"imprimerTout() \">imprimer\n            </button>\n          </div>\n\n        </div>\n      </div>\n\n    </ng-template>\n\n    <!--liste creances-->\n   \n\n    <!--fin liste2-->\n  </div>\n</div>\n");

/***/ }),

/***/ "8n7b":
/*!******************************************************************************!*\
  !*** ./src/app/rapports/situation-des-bons/situation-des-bons.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnRzL3NpdHVhdGlvbi1kZXMtYm9ucy9zaXR1YXRpb24tZGVzLWJvbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AxGv":
/*!*****************************************************!*\
  !*** ./src/app/rapports/rapports-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _charges_individuel_charges_individuel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charges-individuel/charges-individuel.component */ "PdVo");
/* harmony import */ var _creances_gbales_creances_gbales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creances-gbales/creances-gbales.component */ "r5eF");
/* harmony import */ var _situation_annuelle_situation_annuelle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./situation-annuelle/situation-annuelle.component */ "dwU9");
/* harmony import */ var _situation_des_bons_situation_des_bons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./situation-des-bons/situation-des-bons.component */ "gh0Y");
/* harmony import */ var _situation_par_prestation_situation_par_prestation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./situation-par-prestation/situation-par-prestation.component */ "IaBU");
/* harmony import */ var _situation_prestation_situation_prestation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./situation-prestation/situation-prestation.component */ "QESj");






var routes = [
    {
        path: '',
        children: [{
                path: 'ChargesIndividuel',
                component: _charges_individuel_charges_individuel_component__WEBPACK_IMPORTED_MODULE_0__["ChargesIndividuelComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'CreancesGlobales',
                component: _creances_gbales_creances_gbales_component__WEBPACK_IMPORTED_MODULE_1__["CreancesGbalesComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'SituationAnnuelle',
                component: _situation_annuelle_situation_annuelle_component__WEBPACK_IMPORTED_MODULE_2__["SituationAnnuelleComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'SituationPrestation',
                component: _situation_prestation_situation_prestation_component__WEBPACK_IMPORTED_MODULE_5__["SituationPrestationComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'situation-par-prestation',
                component: _situation_par_prestation_situation_par_prestation_component__WEBPACK_IMPORTED_MODULE_4__["SituationParPrestationComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'Situation-des-bons',
                component: _situation_des_bons_situation_des_bons_component__WEBPACK_IMPORTED_MODULE_3__["SituationDesBonsComponent"]
            }]
    }
];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class RapportsRoutingModule { }


/***/ }),

/***/ "IaBU":
/*!*****************************************************************************************!*\
  !*** ./src/app/rapports/situation-par-prestation/situation-par-prestation.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SituationParPrestationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituationParPrestationComponent", function() { return SituationParPrestationComponent; });
/* harmony import */ var _raw_loader_situation_par_prestation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./situation-par-prestation.component.html */ "xMcM");
/* harmony import */ var _situation_par_prestation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./situation-par-prestation.component.css */ "hHNi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/rapport-service.service */ "CsMi");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var _Services_prestataire_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/prestataire.service */ "3m7+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SituationParPrestationComponent = /** @class */ (function () {
    function SituationParPrestationComponent(dateAdapter, datepipe, rapportServ, router, pres_service) {
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.rapportServ = rapportServ;
        this.router = router;
        this.pres_service = pres_service;
        this.dateAdapter.setLocale('en-GB');
    }
    SituationParPrestationComponent.prototype.ngOnInit = function () {
        this.getAllPrestations();
        this.getAllPrestataires();
    };
    SituationParPrestationComponent.prototype.getAllPrestations = function () {
        var _this = this;
        this.rapportServ.getPrestation().subscribe(function (data) {
            _this.listPrestation = data;
            console.log(_this.listPrestation);
        });
    };
    SituationParPrestationComponent.prototype.getSituationParPrestation = function () {
        var _this = this;
        var _a;
        console.log(this.prestationChoisi);
        this.rapportServ.getSituatonParPrestation(this.d1, this.d2, (_a = this.prestationChoisi) === null || _a === void 0 ? void 0 : _a.code_prestation).subscribe(function (data) {
            _this.list = data;
            _this.clearDataTable();
            _this.initDataTable();
            console.log(_this.list);
            _this.somme1 = _this.list.reduce(function (sum, current) { return sum + current.part_ipm; }, 0);
            _this.somme2 = _this.list.reduce(function (sum, current) { return sum + current.part_patient; }, 0);
            _this.somme3 = _this.list.reduce(function (sum, current) { return sum + current.montant_facture; }, 0);
        });
    };
    SituationParPrestationComponent.prototype.imprimer = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_8__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Facture", "Prenom", "Nom", "Matricule", "Prestataire", "Date Prestation ", "Charge IPM", "Charge Agent", "Montant Facture"]];
        var rows = [];
        //let tmp=[this.designation,this.nombre_article]
        for (var _i = 0, _j = this.list; _i < _j.length; _i++) {
            var liste = _j[_i];
            var tmp = [(_a = liste.ipmFacture) === null || _a === void 0 ? void 0 : _a.numerofacture, (_b = liste.ipm_employe) === null || _b === void 0 ? void 0 : _b.prenom, (_c = liste.ipm_employe) === null || _c === void 0 ? void 0 : _c.nom, (_d = liste.ipm_employe) === null || _d === void 0 ? void 0 : _d.matricule, (_e = liste.ipmFacture) === null || _e === void 0 ? void 0 : _e.ipm_prestataire.nom_prestataire, (_f = liste.ipmFacture) === null || _f === void 0 ? void 0 : _f.dateSaisie, liste.part_ipm, liste.part_patient, liste.montant_facture];
            rows.push(tmp);
            var ipm2 = (_g = liste.ipm_employe) === null || _g === void 0 ? void 0 : _g.prenom;
            var ipm3 = (_h = liste.ipm_employe) === null || _h === void 0 ? void 0 : _h.matricule;
        }
        var somme1 = this.list.reduce(function (sum, current) { return sum + current.part_ipm; }, 0);
        var somme2 = this.list.reduce(function (sum, current) { return sum + current.part_patient; }, 0);
        var somme3 = this.list.reduce(function (sum, current) { return sum + current.montant_facture; }, 0);
        // var prestation=this.prestationChoisi
        // var prestataire = this.prestataireChoisi
        var typedeRapportChoisi = this.prestationChoisi ? this.prestationChoisi.libelle : this.prestataireChoisi.nom_prestataire;
        var titreDeRapportChoisi = this.prestationChoisi ? "prestation" : "prestataire";
        var date1 = this.d1;
        var date2 = this.d2;
        var f = [["", "", "", "", "", "Total ", somme1, somme2, somme3]];
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default()(doc, {
            startY: 70,
            head: col,
            body: rows,
            foot: f,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "striped",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                if (doc.getNumberOfPages() == 1) {
                    doc.addImage(imgData, 'JPEG', 15, 5, 30, 30);
                    doc.setFontSize(15);
                    doc.text("", 72, 46);
                    // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                    doc.setLineWidth(2);
                    doc.setDrawColor("#3A6EA5");
                    doc.rect(60, 30, 105, 20);
                    //doc.setFillColor(240,240,240)
                    //doc.rect(13,65,185,23,'F')
                    //doc.setFillColor(240,240,240)
                    doc.setFontSize(15);
                    doc.setTextColor("#3A6EA5");
                    doc.text("Rapport par " + titreDeRapportChoisi, 85, 42);
                    // doc.text("la prestation  " + prestation + " du " + date1 + " au " + date2, 20, 60)
                    //new
                    doc.text(titreDeRapportChoisi + " : " + typedeRapportChoisi + " du " + date1 + " au " + date2, 20, 60);
                    //doc.text("POUR PRODUIT PHARMACEUTIQUE",70,45)
                    doc.setTextColor("");
                    var date = new Date();
                    doc.setFontSize(12);
                    doc.text("Dakar, le :", 150, 10);
                    doc.setFontSize(12);
                    doc.text("Institut de Prévoyance Maladie ", 50, 10);
                    doc.text("du personnel de la Poste ", 60, 17);
                    doc.text(date.toLocaleDateString("fr-FR"), 172, 10);
                }
                var str = "Page " + doc.getNumberOfPages();
            }
        });
        doc.output("dataurlnewwindow");
    };
    //ajout partie rapport par prestataire
    SituationParPrestationComponent.prototype.getAllPrestataires = function () {
        var _this = this;
        this.pres_service.getAllPrestataires().subscribe(function (data) {
            _this.listeDesPrestataires = data;
            console.log(_this.listeDesPrestataires);
        });
    };
    SituationParPrestationComponent.prototype.rapportsParPrestataire = function () {
        var _this = this;
        var _a;
        console.log(this.prestataireChoisi);
        this.pres_service.rapportsByPrestataire(this.d1, this.d2, (_a = this.prestataireChoisi) === null || _a === void 0 ? void 0 : _a.code_prestataire).subscribe(function (data) {
            console.log(data);
            _this.list = data;
            _this.clearDataTable();
            _this.initDataTable();
            console.log(_this.list);
            _this.somme1 = _this.list.reduce(function (sum, current) { return sum + current.part_ipm; }, 0);
            _this.somme2 = _this.list.reduce(function (sum, current) { return sum + current.part_patient; }, 0);
            _this.somme3 = _this.list.reduce(function (sum, current) { return sum + current.montant_facture; }, 0);
        });
    };
    SituationParPrestationComponent.prototype.gestionDesChoix = function () {
        if (!this.d1 || !this.d2) {
            this.d1 = this.datepipe.transform(this.date1, 'dd-MM-yyyy');
            this.d2 = this.datepipe.transform(this.date2, 'dd-MM-yyyy');
        }
        if (this.prestationChoisi) {
            console.log("PRESTATIONS");
            this.getSituationParPrestation();
        }
        else if (this.prestataireChoisi) {
            console.log("PRESTATAIRES");
            this.rapportsParPrestataire();
        }
    };
    SituationParPrestationComponent.prototype.clearDataTable = function () {
        var dataTable = $('#datatable').DataTable();
        dataTable.destroy();
    };
    SituationParPrestationComponent.prototype.initDataTable = function () {
        $(function () {
            $('#datatable').DataTable({
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
    };
    SituationParPrestationComponent.ctorParameters = function () { return [
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_5__["RapportServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _Services_prestataire_service__WEBPACK_IMPORTED_MODULE_9__["PrestataireService"] }
    ]; };
    SituationParPrestationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-situation-par-prestation',
            template: _raw_loader_situation_par_prestation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_situation_par_prestation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_5__["RapportServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_prestataire_service__WEBPACK_IMPORTED_MODULE_9__["PrestataireService"]])
    ], SituationParPrestationComponent);
    return SituationParPrestationComponent;
}());



/***/ }),

/***/ "PdVo":
/*!*****************************************************************************!*\
  !*** ./src/app/rapports/charges-individuel/charges-individuel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChargesIndividuelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargesIndividuelComponent", function() { return ChargesIndividuelComponent; });
/* harmony import */ var _raw_loader_charges_individuel_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./charges-individuel.component.html */ "0a5w");
/* harmony import */ var _charges_individuel_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charges-individuel.component.css */ "SQQb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/rapport-service.service */ "CsMi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChargesIndividuelComponent = /** @class */ (function () {
    function ChargesIndividuelComponent(dateAdapter, datepipe, rapportServ) {
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.rapportServ = rapportServ;
        this.dateAdapter.setLocale('en-GB');
    }
    ChargesIndividuelComponent.prototype.ngOnInit = function () {
    };
    ChargesIndividuelComponent.prototype.getSituation = function () {
        var _this = this;
        this.d1 = this.datepipe.transform(this.date1, 'dd-MM-yyyy');
        this.d2 = this.datepipe.transform(this.date2, 'dd-MM-yyyy');
        this.rapportServ.getSituationIndividuel(this.d1, this.d2).subscribe(function (data) {
            $(function () {
                $('#donne').DataTable({
                    "pagingType": "full_numbers",
                    "lengthMenu": [
                        [10, 25, 50, -1],
                        [10, 25, 50, "All"]
                    ],
                    responsive: true,
                    retreive: true,
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
            _this.listCharge = data;
            console.log(_this.listCharge);
            if (_this.listCharge.length == 0) {
                _this.showNotification('top', 'center', 3, "<b> verifer la date ou l'entite</b> :");
            }
        });
    };
    ChargesIndividuelComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        //const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: note
        }, {
            type: type[idtype],
            timer: 10000,
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
    ChargesIndividuelComponent.ctorParameters = function () { return [
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_5__["RapportServiceService"] }
    ]; };
    ChargesIndividuelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-charges-individuel',
            template: _raw_loader_charges_individuel_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_charges_individuel_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_5__["RapportServiceService"]])
    ], ChargesIndividuelComponent);
    return ChargesIndividuelComponent;
}());



/***/ }),

/***/ "QESj":
/*!*********************************************************************************!*\
  !*** ./src/app/rapports/situation-prestation/situation-prestation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SituationPrestationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituationPrestationComponent", function() { return SituationPrestationComponent; });
/* harmony import */ var _raw_loader_situation_prestation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./situation-prestation.component.html */ "wzYM");
/* harmony import */ var _situation_prestation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./situation-prestation.component.css */ "QyZh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/rapport-service.service */ "CsMi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SituationPrestationComponent = /** @class */ (function () {
    function SituationPrestationComponent(dateAdapter, datepipe, rapportServ, router) {
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.rapportServ = rapportServ;
        this.router = router;
        this.listRemboursement = [];
        this.dateAdapter.setLocale('en-GB');
    }
    SituationPrestationComponent.prototype.ngOnInit = function () {
        // this.rapportServ.getPrestation().subscribe(data=>{
        //   this.listPrestation=data
        //   //console.log(this.prestatonChoisi,presta.code_prestation)
        // })
    };
    SituationPrestationComponent.prototype.getPrestation = function (presta) {
        this.prestatonChoisi = presta;
        console.log(this.prestatonChoisi, presta.code_prestation);
    };
    SituationPrestationComponent.prototype.getSituation = function () {
        var _this = this;
        this.d1 = this.datepipe.transform(this.date1, 'dd-MM-yyyy');
        this.d2 = this.datepipe.transform(this.date2, 'dd-MM-yyyy');
        this.matr = this.matricule;
        this.rapportServ.getSituatonParindividus(this.d1, this.d2, this.matricule).subscribe(function (result) {
            var _a, _b;
            _this.listPrestatio = result;
            console.log(_this.listPrestatio);
            _this.listPrestatio = _this.listPrestatio.filter((function (list) { var _a, _b; return ((_b = (_a = list === null || list === void 0 ? void 0 : list.ipmFacture) === null || _a === void 0 ? void 0 : _a.ipmStatutFacture) === null || _b === void 0 ? void 0 : _b.etape0) != true; }));
            console.log(_this.listPrestatio);
            for (var _i = 0, _c = _this.listPrestatio; _i < _c.length; _i++) {
                var liste = _c[_i];
                _this.nom = (_a = liste.ipm_employe) === null || _a === void 0 ? void 0 : _a.nom;
                _this.prenom = (_b = liste.ipm_employe) === null || _b === void 0 ? void 0 : _b.prenom;
            }
        });
        this.rapportServ.getSituatonRemboursement(this.d1, this.d2, this.matr).subscribe(function (result) {
            console.log(_this.d1, _this.d2, _this.matr);
            console.log(result);
            _this.listRemboursement = result;
            _this.listRemboursement = _this.listRemboursement.filter(function (list) { var _a; return ((_a = list === null || list === void 0 ? void 0 : list.ipmRemboursement) === null || _a === void 0 ? void 0 : _a.certifier) == true; });
            _this.totalMontant = _this.listRemboursement.reduce(function (sum, current) { return sum + current.montant; }, 0);
            console.log(_this.listRemboursement);
        });
    };
    SituationPrestationComponent.prototype.getPrestaton = function (element) {
        console.log(element);
        this.id = element.ipm_prestation.code_prestation;
        // this.rapportServ.getSituatonParPrestation(this.d1,this.d2,element.ipm_prestation.code_prestation).subscribe(
        //   result=>{
        //     this.list=result
        //     console.log(this.list)
        //   })
        this.router.navigate(['/rapports/situation-par-prestation/' + this.d1 + '/' + this.d2 + '/' + element.ipm_prestation.code_prestation]);
        console.log('/situation-par-prestation/' + this.d1 + '/' + this.d2 + '/' + this.id);
    };
    SituationPrestationComponent.prototype.imprimer = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Facture", "Prestataire", "Traitement", "Date Prestation ", "Charge IPM", "Charge Agent", "Montant Facture"]];
        var rows = [];
        //let tmp=[this.designation,this.nombre_article]
        for (var _i = 0, _k = this.listPrestatio; _i < _k.length; _i++) {
            var liste = _k[_i];
            var tmp = [(_a = liste.ipmFacture) === null || _a === void 0 ? void 0 : _a.numerofacture, (_b = liste.ipmFacture) === null || _b === void 0 ? void 0 : _b.ipm_prestataire.nom_prestataire, (_c = liste.ipm_prestation) === null || _c === void 0 ? void 0 : _c.libelle, liste.ipmFacture.dateSaisie, liste.part_ipm, liste.part_patient, liste.montant_facture];
            rows.push(tmp);
            var ipm1 = (_d = liste.ipm_employe) === null || _d === void 0 ? void 0 : _d.nom;
            this.nom = (_e = liste.ipm_employe) === null || _e === void 0 ? void 0 : _e.nom;
            this.prenom = (_f = liste.ipm_employe) === null || _f === void 0 ? void 0 : _f.prenom;
            var ipm2 = (_g = liste.ipm_employe) === null || _g === void 0 ? void 0 : _g.prenom;
            var ipm3 = (_h = liste.ipm_employe) === null || _h === void 0 ? void 0 : _h.matricule;
            var solde = (_j = liste.ipm_employe) === null || _j === void 0 ? void 0 : _j.solde;
        }
        var somme1 = this.listPrestatio.reduce(function (sum, current) { return sum + current.part_ipm; }, 0);
        var somme2 = this.listPrestatio.reduce(function (sum, current) { return sum + current.part_patient; }, 0);
        var somme3 = this.listPrestatio.reduce(function (sum, current) { return sum + current.montant_facture; }, 0);
        var f = [["", "", "", "Total ", somme1, somme2, somme3]];
        var cols = [["Date Remboursement", "Montant Remboursement"]];
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default()(doc, {
            startY: 95,
            head: col,
            body: rows,
            foot: f,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "striped",
            didDrawPage: function (data) {
                if (doc.getNumberOfPages() == 1) {
                    //this.bon.ipm_employe=this.message;
                    doc.addImage(imgData, 'JPEG', 15, 5, 30, 30);
                    doc.setFontSize(15);
                    doc.text("", 72, 46);
                    // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                    doc.setLineWidth(2);
                    doc.setDrawColor("#3A6EA5");
                    doc.rect(60, 30, 105, 20);
                    //doc.setFillColor(240,240,240)
                    //doc.rect(13,65,185,23,'F')
                    //doc.setFillColor(240,240,240)
                    doc.setFontSize(15);
                    doc.setTextColor("#3A6EA5");
                    doc.text("RELEVE  PARTICIPANT", 85, 42);
                    //doc.text("POUR PRODUIT PHARMACEUTIQUE",70,45)
                    doc.setTextColor("");
                    var date = new Date();
                    doc.setFontSize(12);
                    doc.text("Dakar, le :", 150, 10);
                    doc.setFontSize(12);
                    doc.text("Institut de Prévoyance Maladie ", 50, 10);
                    doc.text("du personnel de la Poste ", 60, 17);
                    doc.text(date.toLocaleDateString("fr-FR"), 172, 10);
                    doc.setFontSize(12);
                    doc.text("Matricule Participant:", 15, 75);
                    doc.text(ipm3, 60, 75);
                    //  doc.text(ipm2,80,75) 
                    doc.text("Prenom & Nom:", 15, 85);
                    doc.text("" + ipm2 + " " + " " + " " + ipm1, 60, 85);
                    doc.text("Solde: " + solde, 145, 85);
                }
                var str = "Page " + doc.getNumberOfPages();
                doc.setFontSize(12);
            }
        });
        doc.output("dataurlnewwindow");
    };
    SituationPrestationComponent.prototype.getremboursement = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        console.log(this.listRemboursement);
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        //var imgData ='/ipm-fronte/assets/img_poste/laposte.png'
        var col = [["Date Remboursement", "Montant Remboursement"]];
        var rows = [];
        //let tmp=[this.designation,this.nombre_article]
        for (var _i = 0, _h = this.listRemboursement; _i < _h.length; _i++) {
            var liste = _h[_i];
            var tmp = [(_a = liste.ipmRemboursement) === null || _a === void 0 ? void 0 : _a.dateRemboursement, liste.montant];
            rows.push(tmp);
            var ipm1 = (_b = liste.ipm_employe) === null || _b === void 0 ? void 0 : _b.nom;
            this.nom = (_c = liste.ipm_employe) === null || _c === void 0 ? void 0 : _c.nom;
            this.prenom = (_d = liste.ipm_employe) === null || _d === void 0 ? void 0 : _d.prenom;
            var ipm2 = (_e = liste.ipm_employe) === null || _e === void 0 ? void 0 : _e.prenom;
            var ipm3 = (_f = liste.ipm_employe) === null || _f === void 0 ? void 0 : _f.matricule;
            var solde = (_g = liste.ipm_employe) === null || _g === void 0 ? void 0 : _g.solde;
        }
        var somme1 = this.listRemboursement.reduce(function (sum, current) { return sum + current.montant; }, 0);
        var f = [["Total ", somme1]];
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default()(doc, {
            startY: 95,
            head: col,
            body: rows,
            foot: f,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "striped",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                // doc.addImage(imgData ,'JPEG',15,5,30,30)
                if (doc.getNumberOfPages() == 1) {
                    doc.setFontSize(15);
                    doc.text("", 72, 46);
                    // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                    doc.setLineWidth(2);
                    doc.setDrawColor("#3A6EA5");
                    doc.rect(60, 30, 105, 20);
                    //doc.setFillColor(240,240,240)
                    //doc.rect(13,65,185,23,'F')
                    //doc.setFillColor(240,240,240)
                    doc.setFontSize(15);
                    doc.setTextColor("#3A6EA5");
                    doc.text("Relevé remboursement par participant", 71, 42);
                    //doc.text("POUR PRODUIT PHARMACEUTIQUE",70,45)
                    doc.setTextColor("");
                    var date = new Date();
                    doc.setFontSize(12);
                    doc.text("Dakar, le :", 150, 10);
                    doc.setFontSize(12);
                    doc.text("Institut de Prévoyance Maladie ", 50, 10);
                    doc.text("du personnel de la Poste ", 60, 17);
                    doc.text(date.toLocaleDateString(), 172, 10);
                    doc.setFontSize(12);
                    doc.text("Matricule Participant:", 15, 75);
                    doc.text(ipm3, 60, 75);
                    //  doc.text(ipm2,80,75)
                    doc.text("Prenom & Nom:", 15, 85);
                    doc.text("Solde : " + solde, 145, 85);
                    doc.text("" + ipm2 + " " + " " + " " + ipm1, 60, 85);
                }
                var str = "Page " + doc.getNumberOfPages();
                doc.setFontSize(12);
            }
        });
        doc.output("dataurlnewwindow");
    };
    SituationPrestationComponent.ctorParameters = function () { return [
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_8__["RapportServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    SituationPrestationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-situation-prestation',
            template: _raw_loader_situation_prestation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_situation_prestation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_8__["RapportServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SituationPrestationComponent);
    return SituationPrestationComponent;
}());



/***/ }),

/***/ "QyZh":
/*!**********************************************************************************!*\
  !*** ./src/app/rapports/situation-prestation/situation-prestation.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnRzL3NpdHVhdGlvbi1wcmVzdGF0aW9uL3NpdHVhdGlvbi1wcmVzdGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "SQQb":
/*!******************************************************************************!*\
  !*** ./src/app/rapports/charges-individuel/charges-individuel.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnRzL2NoYXJnZXMtaW5kaXZpZHVlbC9jaGFyZ2VzLWluZGl2aWR1ZWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "VeOI":
/*!******************************************************************************!*\
  !*** ./src/app/rapports/situation-annuelle/situation-annuelle.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-month-picker .mat-calendar-period-button {\n    pointer-events: none;\n  }\n  \n  .example-month-picker .mat-calendar-arrow {\n    display: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFwcG9ydHMvc2l0dWF0aW9uLWFubnVlbGxlL3NpdHVhdGlvbi1hbm51ZWxsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvcmFwcG9ydHMvc2l0dWF0aW9uLWFubnVlbGxlL3NpdHVhdGlvbi1hbm51ZWxsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbW9udGgtcGlja2VyIC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLW1vbnRoLXBpY2tlciAubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9Il19 */");

/***/ }),

/***/ "dwU9":
/*!*****************************************************************************!*\
  !*** ./src/app/rapports/situation-annuelle/situation-annuelle.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SituationAnnuelleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituationAnnuelleComponent", function() { return SituationAnnuelleComponent; });
/* harmony import */ var _raw_loader_situation_annuelle_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./situation-annuelle.component.html */ "wPeT");
/* harmony import */ var _situation_annuelle_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./situation-annuelle.component.css */ "VeOI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/rapport-service.service */ "CsMi");
/* harmony import */ var _Services_employe_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/employe.service */ "WxxJ");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Models_CotsatonExcel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Models/CotsatonExcel */ "ajkK");
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











var SituationAnnuelleComponent = /** @class */ (function () {
    function SituationAnnuelleComponent(dateAdapter, datepipe, rapportServ, emp_service) {
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.rapportServ = rapportServ;
        this.emp_service = emp_service;
        this.years = [];
        this.listOfMonths = [{ id: 1, value: 'Janvier' }, { id: 2, value: 'Février' }, { id: 3, value: 'Mars' }, { id: 4, value: 'Avril' }, { id: 5, value: 'Mai' }, { id: 6, value: 'Juin' },
            { id: 7, value: 'Juillet' }, { id: 8, value: 'Aout' }, { id: 9, value: 'Septembre' }, { id: 10, value: 'Octobre' }, { id: 11, value: 'Novembre' }, { id: 12, value: 'Décembre' }];
        this.isCotisationEffectiveLancee = false;
        this.loading = false;
        this.isCotisationEffectiveTrouvee = false;
        this.CotisationExcels = [];
        this.CotisationExcel = new _Models_CotsatonExcel__WEBPACK_IMPORTED_MODULE_10__["CotsationExcel"]();
        this.selectedYear = new Date().getFullYear();
        var y = this.selectedYear - 9;
        console.log(this.selectedYear);
        for (var year = this.selectedYear; year >= y; year--) {
            this.years.push(year);
        }
        this.dateAdapter.setLocale('en-GB');
    }
    SituationAnnuelleComponent.prototype.ngOnInit = function () {
    };
    SituationAnnuelleComponent.prototype.getChoixAnne = function (year) {
        this.selectedY = year;
    };
    SituationAnnuelleComponent.prototype.getCumulAnnee = function () {
        var _this = this;
        this.desactive = false;
        this.rapportServ.getCumulCotisationAnnee(this.selectedY).subscribe(function (result) {
            var _a, _b;
            _this.detailsCotisations = result;
            // console.log(this.detailsCotisations);
            if (_this.detailsCotisations.length == 0) {
                _this.desactive = true;
                _this.showNotification('top', 'center', 3, "<b> verifer la date ou l'entite</b> :");
            }
            _this.mois = new Date((_a = _this.detailsCotisations[0].ipm_cotisation) === null || _a === void 0 ? void 0 : _a.date).getMonth() + 1;
            console.log(_this.mois, new Date((_b = _this.detailsCotisations[0].ipm_cotisation) === null || _b === void 0 ? void 0 : _b.date));
            _this.detailsCotisations.forEach(function (element) {
                _this.listOfMonths.forEach(function (lmt) {
                    var _a;
                    if (new Date((_a = element.ipm_cotisation) === null || _a === void 0 ? void 0 : _a.date).getMonth() + 1 == lmt.id) {
                        // console.log(lmt.value,new Date(element.ipm_cotisation?.date).getMonth(),lmt.id)
                        element.ipm_employe.justificatif = lmt.value;
                        // console.log(element.ipm_employe.justificatif);
                        // console.log(element.ipm_employe?.justificatif);
                    }
                });
            });
            console.log(_this.detailsCotisations.length);
            // console.table(this.detailsCotisations);
        });
    };
    SituationAnnuelleComponent.prototype.getDetailsCotisation = function (element) {
        var _this = this;
        var _a, _b;
        console.log((_a = element.ipm_cotisation) === null || _a === void 0 ? void 0 : _a.idCotisation);
        this.rapportServ.getDetailsCotisationByEmploye((_b = element.ipm_cotisation) === null || _b === void 0 ? void 0 : _b.idCotisation).subscribe(function (result) {
            _this.listCotisations = result;
            // console.log(element);
            _this.mois1 = element.ipm_employe.justificatif;
        });
    };
    SituationAnnuelleComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        //const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: note
        }, {
            type: type[idtype],
            timer: 600,
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
    //Imprimer Situation Annuelle
    SituationAnnuelleComponent.prototype.printSituationAnnuelle = function () {
        var _a, _b, _c, _d, _e;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Matricule", "Prenom", "Nom", "Montant Cotisé", "Date Cotisation"]];
        var rows = [];
        for (var _i = 0, _f = this.listCotisations; _i < _f.length; _i++) {
            var situAnnee = _f[_i];
            var tmp = [(_a = situAnnee.ipm_employe) === null || _a === void 0 ? void 0 : _a.matricule, (_b = situAnnee.ipm_employe) === null || _b === void 0 ? void 0 : _b.prenom, (_c = situAnnee.ipm_employe) === null || _c === void 0 ? void 0 : _c.nom, situAnnee.montant, (_d = situAnnee.ipm_cotisation) === null || _d === void 0 ? void 0 : _d.date];
            rows.push(tmp);
            var montantCotisa = (_e = situAnnee.ipm_cotisation) === null || _e === void 0 ? void 0 : _e.montant_totals;
            var mois = this.mois1;
            // console.log(this.mois1);
        }
        // var somme=this.listFactures.reduce((sum,current)=>sum+current.montant_facture,0)
        // var sommeCharagent=this.listFactures.reduce((sum,current)=>sum+current.part_ipm,0)
        // var sommeChargeIPM=this.listFactures.reduce((sum,current)=>sum+current.part_patient,0)
        // console.log(somme);
        // let f=[["","","","Total Montants",somme,sommeCharagent,sommeChargeIPM]]
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 75,
            head: col,
            body: rows,
            // foot:f,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "striped",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                if (doc.getNumberOfPages() == 1) {
                    doc.addImage(imgData, 'JPEG', 15, 5, 30, 30);
                    doc.setFontSize(15);
                    doc.text("", 72, 46);
                    // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                    doc.setLineWidth(2);
                    doc.setDrawColor("#3A6EA5");
                    doc.rect(60, 30, 100, 15);
                    doc.setFillColor(240, 240, 240);
                    //  doc.rect(13,40,185,32,'F')
                    //  doc.setFillColor(240,240,240)
                    doc.setTextColor("");
                    doc.text("Institut de Prévoyance Maladie", 50, 10);
                    doc.text("du personnel de la Poste", 60, 17);
                    doc.setFontSize(15);
                    doc.setTextColor("#3A6EA5");
                    doc.text("Rapport Situation Annuelle", 77, 40);
                    doc.setTextColor("");
                    var date = new Date();
                    doc.setFontSize(13);
                    doc.text("Dakar, le :", 150, 18);
                    doc.text("Mois de:", 15, 60);
                    doc.text('' + mois, 35, 60);
                    doc.text("Montant Totals:", 15, 72);
                    doc.text("" + montantCotisa, 50, 72);
                    doc.text(date.toLocaleDateString("fr-FR"), 172, 18);
                }
                var str = "Page " + doc.getNumberOfPages();
                doc.setFontSize(12);
            }
        });
        doc.output('dataurlnewwindow');
    };
    // NOUVEAU : ON RECUPERER TOUS LES CUMULS MEME POUR LES EMPLOYES QUI N'ONT PAS COTISÉ
    SituationAnnuelleComponent.prototype.getCumulCotisationByEmploye = function () {
        var _this = this;
        this.isCotisationEffectiveLancee = true;
        this.loading = true;
        // this.isCotisationEffectiveTrouvee = false
        this.emp_service.getCumulCotisationByEmploye().subscribe(function (data) {
            // console.log(data);
            _this.cumulCotisationEmploye = data;
            _this.loading = false;
            if (_this.cumulCotisationEmploye.length > 0) {
                _this.isCotisationEffectiveTrouvee = true;
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
            }
            else {
                _this.isCotisationEffectiveTrouvee = false;
            }
            // this.employe = data;
        });
    };
    SituationAnnuelleComponent.prototype.detailCotisation = function (employ) {
        var _this = this;
        console.log(employ);
        // this.somme=null
        // this.DetailCoti=[]
        this.emp_service.getDetailsCotisationByIdEmp(employ.ipm_employe.idemp).subscribe(function (data) {
            _this.listCotisations = data;
            console.log(_this.listCotisations);
            _this.sommeDetailCotisation = employ.montant;
        });
    };
    SituationAnnuelleComponent.prototype.exportationCotisationEffective = function () {
        var _this = this;
        this.CotisationExcels = null;
        this.CotisationExcels = [];
        for (var i = 0; i < this.cumulCotisationEmploye.length; i++) {
            this.CotisationExcel.Matricule = this.cumulCotisationEmploye[i].ipm_employe.matricule;
            this.CotisationExcel.Prenom = this.cumulCotisationEmploye[i].ipm_employe.prenom;
            this.CotisationExcel.nom = this.cumulCotisationEmploye[i].ipm_employe.nom;
            this.CotisationExcel.Catégorie = this.cumulCotisationEmploye[i].ipm_employe.ipm_categorie.libelle;
            this.CotisationExcel.solde = this.cumulCotisationEmploye[i].ipm_employe.solde;
            this.CotisationExcel.MontantAcotiser = this.cumulCotisationEmploye[i].ipm_employe.ipm_categorie.montant;
            this.CotisationExcel.CotisationAnnuelle = this.cumulCotisationEmploye[i].montant;
            this.CotisationExcels.push(__assign({}, this.CotisationExcel));
        }
        // console.log(this.CotisationExcels)
        // @ts-ignore
        __webpack_require__.e(/*! import() | xlsx */ "default~cotisation-cotisation-module~gestion-employes-gestion-employes-module~gestion-factures-gesti~bd115e67").then(__webpack_require__.bind(null, /*! xlsx */ "JcrP")).then(function (xlsx) {
            var worksheet = xlsx.utils.json_to_sheet(_this.CotisationExcels);
            var workbook = { Sheets: { 'fichier_excel': worksheet }, SheetNames: ['fichier_excel'] };
            var excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            _this.saveAsExcelFile(excelBuffer, "CotisationExcel");
            //this.CotisationExcels=null
        });
    };
    SituationAnnuelleComponent.prototype.saveAsExcelFile = function (buffer, fileName) {
        var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        var EXCEL_EXTENSION = '.xlsx';
        var data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    SituationAnnuelleComponent.ctorParameters = function () { return [
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_7__["RapportServiceService"] },
        { type: _Services_employe_service__WEBPACK_IMPORTED_MODULE_8__["EmployeService"] }
    ]; };
    SituationAnnuelleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-situation-annuelle',
            template: _raw_loader_situation_annuelle_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_situation_annuelle_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_7__["RapportServiceService"], _Services_employe_service__WEBPACK_IMPORTED_MODULE_8__["EmployeService"]])
    ], SituationAnnuelleComponent);
    return SituationAnnuelleComponent;
}());



/***/ }),

/***/ "gHaW":
/*!*********************************************!*\
  !*** ./src/app/rapports/rapports.module.ts ***!
  \*********************************************/
/*! exports provided: RapportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportsModule", function() { return RapportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _creances_gbales_creances_gbales_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creances-gbales/creances-gbales.component */ "r5eF");
/* harmony import */ var _charges_individuel_charges_individuel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charges-individuel/charges-individuel.component */ "PdVo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _rapports_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rapports-routing.module */ "AxGv");
/* harmony import */ var _situation_annuelle_situation_annuelle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./situation-annuelle/situation-annuelle.component */ "dwU9");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.module */ "ZAI4");
/* harmony import */ var _situation_par_prestation_situation_par_prestation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./situation-par-prestation/situation-par-prestation.component */ "IaBU");
/* harmony import */ var _situation_prestation_situation_prestation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./situation-prestation/situation-prestation.component */ "QESj");
/* harmony import */ var _situation_des_bons_situation_des_bons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./situation-des-bons/situation-des-bons.component */ "gh0Y");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { RapportsModule } from './rapports.module';
var RapportsModule = /** @class */ (function () {
    function RapportsModule() {
    }
    RapportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_creances_gbales_creances_gbales_component__WEBPACK_IMPORTED_MODULE_2__["CreancesGbalesComponent"], _charges_individuel_charges_individuel_component__WEBPACK_IMPORTED_MODULE_3__["ChargesIndividuelComponent"], _situation_annuelle_situation_annuelle_component__WEBPACK_IMPORTED_MODULE_9__["SituationAnnuelleComponent"], _situation_par_prestation_situation_par_prestation_component__WEBPACK_IMPORTED_MODULE_11__["SituationParPrestationComponent"],
                _situation_prestation_situation_prestation_component__WEBPACK_IMPORTED_MODULE_12__["SituationPrestationComponent"],
                _situation_des_bons_situation_des_bons_component__WEBPACK_IMPORTED_MODULE_13__["SituationDesBonsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_rapports_routing_module__WEBPACK_IMPORTED_MODULE_8__["routes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        })
    ], RapportsModule);
    return RapportsModule;
}());



/***/ }),

/***/ "gh0Y":
/*!*****************************************************************************!*\
  !*** ./src/app/rapports/situation-des-bons/situation-des-bons.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SituationDesBonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SituationDesBonsComponent", function() { return SituationDesBonsComponent; });
/* harmony import */ var _raw_loader_situation_des_bons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./situation-des-bons.component.html */ "yBa3");
/* harmony import */ var _situation_des_bons_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./situation-des-bons.component.css */ "8n7b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/rapport-service.service */ "CsMi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SituationDesBonsComponent = /** @class */ (function () {
    function SituationDesBonsComponent(dateAdapter, datepipe, rapportServ, router) {
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.rapportServ = rapportServ;
        this.router = router;
        this.listypeBon = [{ id: 1, value: "pharmacie" }, { id: 2, value: "consultation" },
            { id: 3, value: "lettregrantie" }, { id: 4, value: "lunetterie" }
        ];
        this.dateAdapter.setLocale('en-GB');
    }
    SituationDesBonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rapportServ.getPrestation().subscribe(function (data) {
            _this.listPrestation = data;
            //console.log(this.prestatonChoisi,presta.code_prestation)
        });
        console.log(this.typeBons);
    };
    //Prestation Choisi
    SituationDesBonsComponent.prototype.getPrestation = function (presta) {
        console.log(presta);
        this.idpres = presta;
    };
    SituationDesBonsComponent.prototype.getBonsPeriode = function () {
        var _this = this;
        this.d1 = this.datepipe.transform(this.date1, 'dd-MM-yyyy');
        this.d2 = this.datepipe.transform(this.date2, 'dd-MM-yyyy');
        console.log(this.d1, this.d2, this.typeBons);
        this.d3 = this.typeBons;
        this.rapportServ.getBonByPeriodeBon(this.d1, this.d2, this.typeBons).subscribe(function (result) {
            $(function () {
                $('#datatable').DataTable({
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
            _this.listBonGlobalsPrestation = result;
            console.log(_this.listBonGlobalsPrestation);
            if (_this.listBonGlobalsPrestation.length == 0) {
                _this.showNotification('top', 'center', 3, "<b> Il n'existe pas de  bon dans cette période</b> :");
            }
        });
    };
    //Notification
    SituationDesBonsComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        //const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: note
        }, {
            type: type[idtype],
            timer: 10000,
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
    SituationDesBonsComponent.prototype.getDetBon = function (element) {
        console.log(element);
    };
    //Imprimer Situation Annuelle
    SituationDesBonsComponent.prototype.printSituationBons = function () {
        var _a, _b, _c, _d;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Matricule", "Prenom", "Nom", "Prestataire"]];
        var rows = [];
        for (var _i = 0, _e = this.listBonGlobalsPrestation; _i < _e.length; _i++) {
            var situBons = _e[_i];
            var tmp = [(_a = situBons.ipm_employe) === null || _a === void 0 ? void 0 : _a.matricule, (_b = situBons.ipm_employe) === null || _b === void 0 ? void 0 : _b.prenom, (_c = situBons.ipm_employe) === null || _c === void 0 ? void 0 : _c.nom, (_d = situBons.ipm_prestataire) === null || _d === void 0 ? void 0 : _d.nom_prestataire];
            rows.push(tmp);
            var nomP = this.d3;
            var datedebut = this.d1;
            var datefin = this.d2;
        }
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default()(doc, {
            startY: 75,
            head: col,
            body: rows,
            // foot:f,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "striped",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                if (doc.getNumberOfPages() == 1) {
                    doc.addImage(imgData, 'JPEG', 15, 5, 30, 30);
                    doc.setFontSize(15);
                    doc.text("", 72, 46);
                    // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                    doc.setLineWidth(2);
                    doc.setDrawColor("#3A6EA5");
                    doc.rect(60, 30, 100, 15);
                    doc.setFillColor(240, 240, 240);
                    //  doc.rect(13,40,185,32,'F')
                    //  doc.setFillColor(240,240,240)
                    doc.setFontSize(20);
                    doc.setTextColor("#3A6EA5");
                    doc.text("Situation Bon " + nomP, 74, 40);
                    // doc.text(''+nomP,106,40)
                    //  doc.setTextColor("")
                    var date = new Date();
                    doc.setFontSize(13);
                    doc.setTextColor("");
                    doc.text("Institut de Prévoyance Maladie", 50, 10);
                    doc.text("du personnel de la Poste", 60, 17);
                    doc.text("Dakar, le :", 150, 18);
                    doc.text(date.toLocaleDateString("fr-FR"), 172, 18);
                    doc.setTextColor("blue");
                    doc.setFontSize(15);
                    doc.text("Bon de " + nomP + " du " + datedebut + " au " + datefin, 15, 60);
                }
                var str = "Page " + doc.getNumberOfPages();
                doc.setFontSize(12);
            }
        });
        doc.output('dataurlnewwindow');
    };
    SituationDesBonsComponent.ctorParameters = function () { return [
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_8__["RapportServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    SituationDesBonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-situation-des-bons',
            template: _raw_loader_situation_des_bons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_situation_des_bons_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_8__["RapportServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SituationDesBonsComponent);
    return SituationDesBonsComponent;
}());



/***/ }),

/***/ "hHNi":
/*!******************************************************************************************!*\
  !*** ./src/app/rapports/situation-par-prestation/situation-par-prestation.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnRzL3NpdHVhdGlvbi1wYXItcHJlc3RhdGlvbi9zaXR1YXRpb24tcGFyLXByZXN0YXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "hcEB":
/*!************************************************************************!*\
  !*** ./src/app/rapports/creances-gbales/creances-gbales.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnRzL2NyZWFuY2VzLWdiYWxlcy9jcmVhbmNlcy1nYmFsZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "r5eF":
/*!***********************************************************************!*\
  !*** ./src/app/rapports/creances-gbales/creances-gbales.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreancesGbalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreancesGbalesComponent", function() { return CreancesGbalesComponent; });
/* harmony import */ var _raw_loader_creances_gbales_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./creances-gbales.component.html */ "7ZWq");
/* harmony import */ var _creances_gbales_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creances-gbales.component.css */ "hcEB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/rapport-service.service */ "CsMi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { EmployeService } from 'src/app/Services/employe.service';

var CreancesGbalesComponent = /** @class */ (function () {
    function CreancesGbalesComponent(dateAdapter, datepipe, rapportServ) {
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.rapportServ = rapportServ;
        this.listCreanceEntites = [];
        this.DesatverBouton = false;
        this.tout = "tout";
        this.affiche = false;
        this.dateAdapter.setLocale('en-GB');
    }
    CreancesGbalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rapportServ.getEntity().subscribe(function (data) {
            _this.listEntiy = data;
            console.log(_this.listEntiy);
        });
        // this.getCreanceglobale()
    };
    CreancesGbalesComponent.prototype.getCreanceglobale = function () {
        var _this = this;
        this.d1 = this.datepipe.transform(this.date1, 'dd-MM-yyyy');
        this.d2 = this.datepipe.transform(this.date2, 'dd-MM-yyyy');
        if (this.enti && this.d1 && this.d2) {
            this.rapportServ.getGlobaleParEntity(this.d1, this.d2, this.enti.idEntity).subscribe(function (result) {
                _this.listCreanceEntites = result;
                //this.list=this.listCreanceGlobales.length
                console.log(_this.listCreanceEntites.length);
                console.log(_this.listCreanceEntites);
                _this.listCreanceEntites = _this.listCreanceEntites.filter((function (list) { var _a, _b; return ((_b = (_a = list === null || list === void 0 ? void 0 : list.ipmFacture) === null || _a === void 0 ? void 0 : _a.ipmStatutFacture) === null || _b === void 0 ? void 0 : _b.etape0) != true; }));
                console.log(_this.listCreanceEntites);
                _this.affiche = true;
                $(function () {
                    $('#datatable').DataTable({
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
            });
            if (this.listCreanceEntites.length == null) {
                this.showNotification('top', 'center', 3, "<b> verifer la date ou l'entite</b> :");
            }
        }
        else
            this.rapportServ.getSituationIndividuel(this.d1, this.d2).subscribe(function (result) {
                $(function () {
                    $('#datatable').DataTable({
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
                _this.listCreanceGlobales = result;
                //this.list=this.listCreanceGlobales.length
                console.log(_this.listCreanceGlobales.length);
            });
    };
    CreancesGbalesComponent.prototype.retourserach = function () {
        console.log('************************************');
        window.location.reload();
    };
    CreancesGbalesComponent.prototype.getEntity = function (ent) {
        console.log(ent);
        this.enti = ent;
        this.attente = this.enti.nom_entity;
    };
    CreancesGbalesComponent.prototype.getEntout = function () {
        this.attente = "";
    };
    CreancesGbalesComponent.prototype.imprimer = function () {
        var _a, _b, _c, _d, _e, _f;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Matricule", "Nom", "Prénom", "Montant ", "Charge IPM", "Charge Agent"]];
        var rows = [];
        //let tmp=[this.designation,this.nombre_article]
        for (var _i = 0, _g = this.listCreanceEntites; _i < _g.length; _i++) {
            var liste = _g[_i];
            var tmp = [(_a = liste.ipm_employe) === null || _a === void 0 ? void 0 : _a.matricule, (_b = liste.ipm_employe) === null || _b === void 0 ? void 0 : _b.nom, (_c = liste.ipm_employe) === null || _c === void 0 ? void 0 : _c.prenom, liste.montant_facture, liste.part_ipm, liste.part_patient];
            rows.push(tmp);
            var ipm1 = (_d = liste.ipm_employe) === null || _d === void 0 ? void 0 : _d.nom;
            var ipm2 = (_e = liste.ipm_employe) === null || _e === void 0 ? void 0 : _e.prenom;
            var ipm3 = (_f = liste.ipm_employe) === null || _f === void 0 ? void 0 : _f.matricule;
        }
        var somme1 = this.listCreanceEntites.reduce(function (sum, current) { return sum + current.part_ipm; }, 0);
        console.log(somme1);
        var somme2 = this.listCreanceEntites.reduce(function (sum, current) { return sum + current.part_patient; }, 0);
        var somme3 = this.listCreanceEntites.reduce(function (sum, current) { return sum + current.montant_facture; }, 0);
        var entite = this.attente;
        var date1 = this.d1;
        var date2 = this.d2;
        var f = [["", "", "Total ", somme3, somme1, somme2]];
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 70,
            head: col,
            body: rows,
            foot: f,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "striped",
            pageBreak: "auto",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                if (doc.getNumberOfPages() == 1) {
                    doc.addImage(imgData, 'JPEG', 15, 5, 30, 30);
                    doc.setFontSize(15);
                    doc.text("", 72, 46);
                    // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                    doc.setLineWidth(2);
                    doc.setDrawColor("#3A6EA5");
                    doc.rect(60, 30, 105, 20);
                    //doc.setFillColor(240,240,240)
                    //doc.rect(13,65,185,23,'F')
                    //doc.setFillColor(240,240,240)
                    doc.setFontSize(15);
                    doc.setTextColor("#3A6EA5");
                    doc.text("Créance globale périodique ", 85, 40);
                    doc.text("de " + entite, 105, 47);
                    doc.text("rapport périodique du " + date1 + " au " + date2, 20, 65);
                    doc.setTextColor("");
                    var date = new Date();
                    doc.setFontSize(12);
                    doc.text("Dakar, le :", 150, 10);
                    doc.setFontSize(12);
                    doc.text("Institut de Prévoyance Maladie ", 50, 10);
                    doc.text("du personnel de la Poste ", 60, 17);
                    doc.text(date.toLocaleDateString("fr-FR"), 172, 10);
                }
                var str = "Page " + doc.getNumberOfPages();
                doc.setFontSize(12);
            }
        });
        doc.output("dataurlnewwindow");
    };
    CreancesGbalesComponent.prototype.imprimerTout = function () {
        var _a, _b, _c, _d, _e, _f;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]('p', 'mm', 'a4');
        //var imgData = '/assets/img_poste/laposte.png'
        var imgData = '/ipm-fronte/assets/img_poste/laposte.png';
        var col = [["Matricule", "Nom", "Prénom", "Montant ", "Charge IPM", "Charge Agent"]];
        var rows = [];
        //let tmp=[this.designation,this.nombre_article]
        for (var _i = 0, _g = this.listCreanceGlobales; _i < _g.length; _i++) {
            var liste = _g[_i];
            var tmp = [(_a = liste.ipm_employe) === null || _a === void 0 ? void 0 : _a.matricule, (_b = liste.ipm_employe) === null || _b === void 0 ? void 0 : _b.nom, (_c = liste.ipm_employe) === null || _c === void 0 ? void 0 : _c.prenom, liste.montant_facture, liste.part_ipm, liste.part_patient];
            rows.push(tmp);
            var ipm1 = (_d = liste.ipm_employe) === null || _d === void 0 ? void 0 : _d.nom;
            var ipm2 = (_e = liste.ipm_employe) === null || _e === void 0 ? void 0 : _e.prenom;
            var ipm3 = (_f = liste.ipm_employe) === null || _f === void 0 ? void 0 : _f.matricule;
        }
        var somme1 = this.listCreanceGlobales.reduce(function (sum, current) { return sum + current.part_ipm; }, 0);
        var somme2 = this.listCreanceGlobales.reduce(function (sum, current) { return sum + current.part_patient; }, 0);
        var somme3 = this.listCreanceGlobales.reduce(function (sum, current) { return sum + current.montant_facture; }, 0);
        var date1 = this.d1;
        var date2 = this.d2;
        var f = [["", "", "Total ", somme3, somme1, somme2]];
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 70,
            head: col,
            body: rows,
            foot: f,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "striped",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                if (doc.getNumberOfPages() == 1) {
                    doc.addImage(imgData, 'JPEG', 15, 5, 30, 30);
                    doc.setFontSize(15);
                    doc.text("", 72, 46);
                    // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                    doc.setLineWidth(2);
                    doc.setDrawColor("#3A6EA5");
                    doc.rect(60, 30, 105, 20);
                    //doc.setFillColor(240,240,240)
                    //doc.rect(13,65,185,23,'F')
                    //doc.setFillColor(240,240,240)
                    doc.setFontSize(15);
                    doc.setTextColor("#3A6EA5");
                    doc.text("Créance globale périodique ", 85, 42);
                    doc.text("rapport périodique du " + date1 + " au " + date2, 20, 60);
                    doc.setTextColor("");
                    var date = new Date();
                    doc.setFontSize(12);
                    doc.text("Dakar, le :", 150, 10);
                    doc.setFontSize(12);
                    doc.text("Institut de Prévoyance Maladie ", 50, 10);
                    doc.text("du personnel de la Poste ", 60, 17);
                    doc.text(date.toLocaleDateString("fr-FR"), 172, 10);
                }
                var str = "Page " + doc.getNumberOfPages();
                doc.setFontSize(12);
            }
        });
        doc.output("dataurlnewwindow");
    };
    CreancesGbalesComponent.prototype.showNotification = function (from, align, idtype, note) {
        var type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];
        //const color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: note
        }, {
            type: type[idtype],
            timer: 10000,
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
    CreancesGbalesComponent.ctorParameters = function () { return [
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_7__["RapportServiceService"] }
    ]; };
    CreancesGbalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-creances-gbales',
            template: _raw_loader_creances_gbales_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_creances_gbales_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], src_app_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_7__["RapportServiceService"]])
    ], CreancesGbalesComponent);
    return CreancesGbalesComponent;
}());



/***/ }),

/***/ "wPeT":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapports/situation-annuelle/situation-annuelle.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!---->\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      \n  <div class=\"card\">\n      <div class=\"card-header card-header-icon\" >\n        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n          <i class=\"material-icons\">search</i>\n        </div>\n\n        <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 80%;\">Rapport annuel des cotisations </h2>\n\n       \n    </div>\n      <div class=\"card-body\">\n        <form #form=\"ngForm\">\n  \n          <div class=\"row\">\n\n       \n          <div class=\"col-md-3\" style=\"margin-bottom: 2px;\">\n            <mat-form-field>\n            <mat-select  placeholder=\"Choisir une année\">\n              <mat-option *ngFor=\"let year of years\" [value]=\"year\"  (click)=\"getChoixAnne(year)\">{{ year }} </mat-option> \n              \n            </mat-select>\n    \n          </mat-form-field>\n          </div>\n        <div class=\"card-footer\" style=\"padding-left: 40%;\">\n          <button mat-raised-button type=\"submit\" \n           (click)=\"getCumulCotisationByEmploye()\" class=\"btn btn-fill btn-success\"><i\n              class=\"material-icons\">search</i>Rechercher</button>\n\n            <button mat-raised-button type=\"submit\" *ngIf=\"isCotisationEffectiveTrouvee\"\n                    (click)=\"exportationCotisationEffective()\" class=\"btn btn-fill btn-success\"><i\n                    class=\"material-icons\">search</i>Exporter</button>\n            <mat-spinner *ngIf=\"loading\"></mat-spinner>\n        </div>\n\n          \n        </div>\n        </form>\n        <div class=\"card\" *ngIf=\"isCotisationEffectiveLancee &&  !loading &&!isCotisationEffectiveTrouvee \">\n          <p style=\"text-align:center; color:red;font-size: 30px;\">Cotisations introuvales pour cette année</p>\n      </div> \n        </div>\n        \n        </div>\n        \n        <!--liste creances-->\n  <div class=\"col-md-12\" *ngIf=\"isCotisationEffectiveTrouvee\">\n      <div class=\"card\" >\n        <div class=\"card-header card-header-icon\">\n          <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n            <i class=\"material-icons\">list</i>\n    \n          </div>\n          <h2 class=\"text-center\" \n          style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\"> Cotisations pour l'année{{selectedY}}\n          </h2>\n        </div>\n        <div class=\"card-body\">\n<!--            <div class=\"text-center\">-->\n<!--                <mat-spinner *ngIf=\"!detailsCotisations\" style=\"margin-left: 15cm;\"></mat-spinner>-->\n\n<!--            </div>-->\n          <div class=\"material-datatable\">\n          <table id=\"datatable\" class=\"table table-bordered \" \n           #TABLE cellspacing=\"0\" width=\"100%\" style=\"width:100%\" >\n    \n            <thead style=\"font-weight:bold;\">\n    \n              <th cope=\"col\">Prenom/Nom</th>\n              <th cope=\"col\">Matricule</th>\n              <th cope=\"col\">Cotisation Annuelle</th>\n              <th cope=\"col\">Details</th>\n    \n            </thead>\n            <tbody>\n              <tr *ngFor=\"let element of cumulCotisationEmploye;\">\n                <td>{{element.ipm_employe?.prenom + element.ipm_employe?.nom}}<b></b></td>\n                  <td>{{element.ipm_employe?.matricule}}<b></b></td>\n                  <td>{{element?.montant}}<b></b></td>\n              \n\n                \n                <td class=\"td_actions\">\n              \n                  <i class=\"material-icons\" class=\"btn btn-info\" (click)=\"detailCotisation(element)\" data-toggle=\"modal\"\n                  data-target=\"#noticeModal\"><span \n                      class=\"fa fa-plus fa-fw\"></span> </i>\n                </td>\n                <!-- <td>\n                  <button class=\"btn btn-info btn-block\" \n                 data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\n                  </button></td> -->\n    \n    \n              </tr>\n            </tbody>\n            <!-- <tfoot style=\"font-weight:bold;\">\n              <tr>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td>\n                  <h4>TOTAL</h4>\n                </td>\n                <td>{{}}</td>\n                <td>{{}}</td>\n                <td>{{}}</td>\n                <td></td>\n                <td></td>\n                <td></td>\n    \n              </tr>\n            </tfoot> -->\n    \n          </table>\n        </div>\n         \n        </div>\n    \n      </div>\n    </div>\n    </div>\n  </div>\n  \n    <!--fin liste-->\n\n           <!--modal list service-->\n           <div class=\"modal fade\" id=\"noticeModal\" style=\"margin-left: -10%;\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n           aria-hidden=\"true\">\n           <div class=\"modal-dialog\" >\n               <div class=\"modal-content\"style=\"width: 1000px;\">\n                   <div class=\"modal-header\" style=\"background-color: whitesmoke;\">\n                       <h3 class=\"modal-title\" id=\"noticeModal\"\n                        style=\"font-weight:bold; padding-bottom: 10px;\">Details Cotisations\n                       \n                       </h3>\n                       <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                           <i class=\"material-icons\">close</i>\n                       </button>\n                   </div>\n                   <div class=\"modal-body\" style=\"width: 1000px;\">\n\n                       <div class=\"row\">\n                               <table class=\"table table-hover table-bordered col-md-12\">\n                                   <thead>\n                                       <tr style=\"background-color:rgb(213, 213, 213);\">\n<!--                                           <th style=\"font-weight: 500;\">Matricule</th>-->\n<!--                                           <th  style=\"font-weight: 500;\">Nom</th>-->\n<!--                                           <th  style=\"font-weight: 250;\">Prénom Nom</th>-->\n                                           <th  style=\"font-weight: 250;\">Date</th>\n                                           <th  style=\"font-weight: 250;\">Montant Cotisation</th>\n<!--                                           <th  style=\"font-weight: 500;\">Action</th>-->\n                                       </tr>\n                                   </thead>\n                                   <tbody>\n                                       <tr *ngFor=\"let listelement of listCotisations\" style=\"font-weight: 300;\">\n<!--                                        <td>{{listelement.ipm_employe?.matricule}}</td>-->\n<!--                                        <td>{{listelement.ipm_employe?.nom}}</td>-->\n<!--                                        <td>{{listelement.ipm_employe?.prenom + listelement.ipm_employe?.nom}}</td>-->\n                                           <td>{{listelement.ipm_cotisation.date}}</td>\n                                           <td>{{listelement.montant}}</td>\n\n<!--                                           <td class=\"td_actions text-right\">-->\n<!--                                               <button mat-raised-button type=\"button\" class=\"btn btn-warning  btn-round btn-xs\"-->\n<!--                                                   id=\"edit\">-->\n<!--                                                   <i class=\"fa fa-home\"></i></button>-->\n<!--                                           </td>-->\n                                       </tr>\n                                   <tr style=\"font-weight: 300;\">\n                                       Montant total : <b>{{sommeDetailCotisation}}</b>\n                                   </tr>\n                                   </tbody>\n                               </table>\n                           </div>\n<!--                           <div class=\"modal-footer justify-content-center\">-->\n<!--                            <button mat-raised-button class=\"btn btn-fill btn-success btn-round\" -->\n<!--                                  (click)=\"printSituationAnnuelle()\">imprimer-->\n<!--                                 </button>-->\n<!--                            </div> -->\n                       \n                   </div>\n                   \n               </div>\n           </div>\n       </div>\n\n       <!--fin modal-->\n    \n    \n  \n  \n  \n");

/***/ }),

/***/ "wzYM":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapports/situation-prestation/situation-prestation.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!---->\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      \n  <div class=\"card\">\n      <div class=\"card-header card-header-icon\" >\n        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n          <i class=\"material-icons\">search</i>\n        </div>\n        <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 80%;\">Situation individuelle des prestations</h2>\n    </div>\n      <div class=\"card-body\">\n        <form #form=\"ngForm\">\n  \n          <div class=\"row\">\n          \n  \n          <!-- <div class=\"col-md-3 form-group\" style=\"margin-top: -12px;\">\n            <label for=\"Numéro\"><b>Numéro Facture</b></label>\n            \n            <input type=\"number\" class=\"form-control\" id=\"Numéro\" name=\"Numéro\" [(ngModel)]=\"NumeroFacture\">\n          </div> -->\n          <div class=\"col-md-3\" style=\"margin-top: 0px;\">\n              <!-- <legend>date Facture</legend> -->\n              <mat-form-field>\n              <input matInput [matDatepicker]=\"picker\" placeholder=\" la date du\" id=\"date1\" name=\"date1\" [(ngModel)]=\"date1\" (click)=\"picker.open()\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker startView=\"year\"></mat-datepicker>\n              </mat-form-field>\n          </div>\n          <div class=\"col-md-3\" style=\"margin-top: 0px;\">\n            <!-- <legend>date Facture</legend> -->\n            <mat-form-field>\n            <input matInput [matDatepicker]=\"picker1\" placeholder=\"Au\" id=\"date2\" name=\"date2\" [(ngModel)]=\"date2\" (click)=\"picker1.open()\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <!-- <div class=\"col-md-3 form-group\" style=\"margin-top: -1px;\">\n          <mat-form-field>\n            <mat-select placeholder=\"Prestation\" name=\"Prestation\"\n              >\n              <mat-option *ngFor=\"let presta of listPrestation\" [value]=\"presta.code_prestation\" (click)=\"getPrestation(presta)\">\n                {{ presta.libelle }} \n              </mat-option>\n  \n            </mat-select>\n          </mat-form-field>\n        </div> -->\n        <div class=\"col-md-6\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput type=\"text\" placeholder=\"Matricule\" id=\"Matricule\"\n                name=\"Matricule\" [(ngModel)]=\"matricule\" >\n            </mat-form-field>\n          </div>\n        <div class=\"card-footer\" style=\"padding-left: 40%;\">\n          <button mat-raised-button type=\"submit\" \n           (click)=\"getSituation();form.resetForm()\" class=\"btn btn-fill btn-success\"><i\n              class=\"material-icons\">search</i>Rechercher</button>\n        </div>\n          \n        </div>\n        </form>\n        </div>\n        </div>\n        \n        <!--liste creances-->\n  <div class=\"col-md-12\" *ngIf=\"listPrestatio\">\n      <div class=\"card\">\n          <div style=\"text-align: center;background-color: #0d47a1;color: white;width: auto \">\n              <h2>Prestations</h2>\n          </div>\n<!--        <div class=\"card-header card-header-icon\">-->\n          <div  style=\"background-color:rgba(17, 17, 227, 0.88);\">\n              <!--                      <i class=\"material-icons\">list</i>-->\n              <h3 class=\"text-center\"\n                  style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">Liste des prestations de {{prenom}} {{nom}} du {{d1}} au {{d2}}\n              </h3>\n\n          </div>\n<!--        </div>-->\n        <div class=\"card-body\">\n          <div class=\"material-datatable\">\n          <table id=\"datatable\" class=\"table table-bordered \" \n           #TABLE cellspacing=\"0\" width=\"100%\" style=\"width:100%\" >\n    \n            <thead style=\"font-weight:bold;\">\n    \n              <th cope=\"col\"> Facture</th>\n              <th cope=\"col\">Prestataire</th>\n              <th cope=\"col\">Traitement</th>\n              <th cope=\"col\">Date Prestation</th>\n\n              <th cope=\"col\">ChargeIpm</th>\n              <th cope=\"col\">ChargeAgent</th>\n              <th cope=\"col\">MontantFacture</th>\n\n          \n              <!-- <th cope=\"col\">Action</th> -->\n    \n            </thead>\n            <tbody>\n              <tr *ngFor=\"let element of listPrestatio; let i=index\">\n                <td><b>{{element.ipmFacture?.numerofacture}}</b></td>\n                <td><b>{{element.ipmFacture?.ipm_prestataire.nom_prestataire}}</b></td>\n                \n                <td><b>{{element.ipm_prestation?.libelle}}</b></td>\n                <!-- <td>{{element.ipm_prestation?.code_prestation}}</td> -->\n                <td><b>{{element.ipmFacture.dateSaisie | date:'d MMM,y'}}</b></td>\n                <td><b>{{element.part_ipm}}</b></td>\n                <td><b>{{element.part_patient}}</b></td>\n                <td><b>{{element.montant_facture}}</b></td>\n\n\n                \n                <!-- <td class=\"td_actions\">\n                    <button mat-raised-button style=\"margin:2px;\" type=\"button\" class=\"btn btn-info\" (click)=\"getPrestaton(element)\">\n                        <i class=\"material-icons\"\n                          >person</i>\n                      </button>\n                </td> -->\n                <!-- <td>\n                  <button class=\"btn btn-info btn-block\" \n                 data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\n                  </button></td> -->\n    \n    \n              </tr>\n\n            </tbody>\n            <!-- <tfoot style=\"font-weight:bold;\">\n              <tr>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td>\n                  <h4>TOTAL</h4>\n                </td>\n                <td>{{}}</td>\n                <td>{{}}</td>\n                <td>{{}}</td>\n                <td></td>\n                <td></td>\n                <td></td>\n    \n              </tr>\n            </tfoot> -->\n\n    \n          </table>\n              <div style=\"text-align: center;background-color: #0d47a1;color: white;width: auto \">\n                  <h2>Remboursements</h2>\n              </div>\n                  <div  style=\"background-color:rgba(17, 17, 227, 0.88);\">\n                      <!--                      <i class=\"material-icons\">list</i>-->\n                      <h3 class=\"text-center\"\n                          style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">Relevé remboursement de {{prenom}} {{nom}} du {{d1}} au {{d2}}\n                      </h3>\n\n                  </div>\n\n              <div class=\"card-body\">\n                  <div class=\"material-datatable\">\n                      <table id=\"datatable\" class=\"table table-bordered \"\n                             #TABLE cellspacing=\"0\" width=\"100%\" style=\"width:100%\" >\n\n                          <thead style=\"font-weight:bold;\">\n\n\n                          <th cope=\"col\">Date Remboursement</th>\n\n\n                          <th cope=\"col\">Montant Remboursement</th>\n\n\n\n\n                          </thead>\n                          <tbody>\n                          <tr *ngFor=\"let element of listRemboursement; let i=index\">\n\n\n                              <td><b>{{element.ipmRemboursement.dateRemboursement | date:'d MMM,y' }}</b></td>\n                              <td><b>{{element.montant}}</b></td>\n\n\n\n\n\n\n                          </tr>\n                          </tbody>\n                          <tfoot style=\"font-weight:bold;\">\n                          <tr>\n\n                              <td>\n                                  <h4>TOTAL</h4>\n                              </td>\n                              <td>{{totalMontant}}</td>\n\n                              <!-- <td>{{}}</td>\n                              <td>{{}}</td>\n                              <td>{{}}</td> -->\n\n\n                          </tr>\n                          </tfoot>\n\n                      </table>\n                  </div>\n                  <!-- <div class=\"modal-footer justify-content-center\"></div> -->\n\n\n              </div>\n\n\n        </div>\n          <!-- <div class=\"modal-footer justify-content-center\"></div> -->\n            <button class=\"btn btn-raised btn-round btn-success\"  (click)=\"imprimer() \">imprimer prestation\n            </button>\n            <button class=\"btn btn-raised btn-round btn-info\" style=\"margin-left: 78%; margin-top: -2cm;\"  data-toggle=\"modal\" data-target=\"#noticeModal\"\n                    (click)=\"getremboursement()\"> imprimer remboursement\n            </button>\n<!--            <div class=\"modal-footer\">-->\n<!--                <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-success btn-round\" data-dismiss=\"modal\"-->\n<!--                        (click)=\"getremboursement()\">imprimer remboursement</button>-->\n<!--            </div>-->\n          \n        </div>\n    \n      </div>\n    </div>\n\n    <!-- Relevé du remboursement participant-->\n<!--<div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">-->\n<!--  <div class=\"modal-dialog\">-->\n<!--    <div class=\"modal-content\" style=\"width: 800px;\">-->\n<!--      <div class=\"modal-header\">-->\n<!--        <h4 class=\"modal-title\">Relevé du remboursement participant</h4>-->\n<!--        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">-->\n<!--          <i class=\"material-icons\">clear</i>-->\n<!--        </button>-->\n<!--      </div>-->\n<!--      <div class=\"modal-body\">-->\n\n       \n          \n            \n          \n         \n          \n         \n         \n<!--                &lt;!&ndash;liste remboursement&ndash;&gt;-->\n<!--  <div class=\"col-md-12\" >-->\n<!--    <div class=\"card\">-->\n<!--      <div class=\"card-header card-header-icon\">-->\n<!--        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">-->\n<!--          <i class=\"material-icons\">list</i>-->\n<!--  -->\n<!--        </div>-->\n<!--        <h3 class=\"text-center\" -->\n<!--        style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">Relevé remboursement de {{prenom}} {{nom}} du {{d1}} au {{d2}}-->\n<!--        </h3>-->\n<!--      </div>-->\n<!--      <div class=\"card-body\">-->\n<!--        <div class=\"material-datatable\">-->\n<!--       <table id=\"datatable\" class=\"table table-bordered \" -->\n<!--         #TABLE cellspacing=\"0\" width=\"100%\" style=\"width:100%\" >-->\n<!--  -->\n<!--          <thead style=\"font-weight:bold;\">-->\n<!--  -->\n<!--            -->\n<!--            <th cope=\"col\">Date Remboursement</th>-->\n\n<!--           -->\n<!--            <th cope=\"col\">Montant Remboursement</th>-->\n\n<!--        -->\n<!--            -->\n<!--  -->\n<!--          </thead>-->\n<!--          <tbody>-->\n<!--            <tr *ngFor=\"let element of listRemboursement; let i=index\">-->\n<!--              -->\n<!--              -->\n<!--              <td><b>{{element.ipmRemboursement.dateRemboursement | date:'d MMM,y' }}</b></td>-->\n<!--              <td><b>{{element.montant}}</b></td>-->\n\n<!--              -->\n\n\n<!--              -->\n<!--              -->\n<!--            </tr>-->\n<!--          </tbody>-->\n<!--          <tfoot style=\"font-weight:bold;\">-->\n<!--            <tr>-->\n<!--              -->\n<!--              <td>-->\n<!--                <h4>TOTAL</h4>-->\n<!--              </td>-->\n<!--              <td>{{totalMontant}}</td>-->\n<!--              -->\n<!--              &lt;!&ndash; <td>{{}}</td>-->\n<!--              <td>{{}}</td>-->\n<!--              <td>{{}}</td> &ndash;&gt;-->\n<!--              -->\n<!--  -->\n<!--            </tr>-->\n<!--          </tfoot>-->\n<!--  -->\n<!--        </table> -->\n<!--      </div>-->\n<!--        &lt;!&ndash; <div class=\"modal-footer justify-content-center\"></div> &ndash;&gt;-->\n<!--          -->\n<!--        -->\n<!--      </div>-->\n<!--  -->\n<!--    </div>-->\n<!--  </div>-->\n\n\n       \n\n\n\n\n<!--      </div>-->\n\n<!--    </div>-->\n<!--  </div>-->\n<!--</div>-->\n<!--Ajouter prestataire-->\n    </div>\n  </div>\n  \n    <!--fin liste-->\n    \n    \n  \n  \n  ");

/***/ }),

/***/ "xMcM":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapports/situation-par-prestation/situation-par-prestation.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    \n  <div class=\"card\">\n    <div class=\"card-header card-header-icon\" >\n      <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n        <i class=\"material-icons\">search</i>\n      </div>\n      <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width: 70%;\">Rapport pérodique prestation/prestataire </h2>\n  </div>\n    <div class=\"card-body\">\n      <form #form=\"ngForm\">\n\n        <div class=\"row\">\n        \n\n        \n        \n        <!-- <div class=\"col-md-3 form-group\" style=\"margin-top: -12px;\">\n          <label for=\"Numéro\"><b>Numéro Facture</b></label>\n          \n          <input type=\"number\" class=\"form-control\" id=\"Numéro\" name=\"Numéro\" [(ngModel)]=\"NumeroFacture\">\n        </div> -->\n        <div class=\"col-md-3\" style=\"margin-top: 0px;\">\n            <!-- <legend>date Facture</legend> -->\n            <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\" la date du\" id=\"date1\" name=\"date1\" [(ngModel)]=\"date1\" (click)=\"picker.open()\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker startView=\"year\"></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3\" style=\"margin-top: 0px;\">\n          <!-- <legend>date Facture</legend> -->\n          <mat-form-field>\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"Au\" id=\"date2\" name=\"date2\" [(ngModel)]=\"date2\" (click)=\"picker1.open()\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\n          </mat-form-field>\n      </div>\n      <div class=\"col-md-3 form-group\" style=\"margin-top: -1px;\">\n        <mat-form-field>\n          <mat-select placeholder=\"prestation\" name=\"prestation\" [(ngModel)]=\"prestationChoisi\">\n            <mat-option *ngFor=\"let presta of listPrestation\" [value]=\"presta\" (click)=\"this.prestataireChoisi = null\">\n<!--                 -->\n              {{ presta.libelle }} \n            </mat-option>\n\n          </mat-select>\n        </mat-form-field>\n      </div>\n<!--             partie prestataire-->\n\n            <div class=\"col-md-3 form-group\" style=\"margin-top: -1px;\">\n                <mat-form-field>\n                    <mat-select placeholder=\"prestataire\" name=\"prestataire\" [(ngModel)]=\"prestataireChoisi\">\n                        <mat-option *ngFor=\"let prestataire of listeDesPrestataires\" [value]=\"prestataire\" (click)=\"this.prestationChoisi = null\" >\n<!--                            -->\n                            {{ prestataire?.nom_prestataire }}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n\n\n\n\n\n\n\n\n\n\n      <!-- <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"text\" placeholder=\"Matricule\" id=\"Matricule\"\n              name=\"Matricule\" [(ngModel)]=\"matricule\" >\n          </mat-form-field>\n        </div> -->\n      <div class=\"card-footer\" style=\"padding-left: 40%;\">\n        <button mat-raised-button type=\"submit\" \n         (click)=\"gestionDesChoix()\" class=\"btn btn-fill btn-success\">\n            <!--                form.resetForm()-->\n            <i class=\"material-icons\">search</i>Rechercher</button>\n      </div>\n        \n      </div>\n      </form>\n      </div>\n      </div>\n              <!--liste creances-->\n  <div class=\"col-md-12\" *ngIf=\"list\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-icon\">\n        <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n          <i class=\"material-icons\">list</i>\n  \n        </div>\n        <h2 class=\"text-center\" \n        style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">{{prestationChoisi!=null ? prestationChoisi?.libelle : prestataireChoisi?.nom_prestataire}} du {{d1}} au {{d2}}\n        </h2>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"material-datatable\">\n        <table id=\"datatable\" class=\"table table-bordered \" \n         #TABLE cellspacing=\"0\" width=\"100%\" style=\"width:100%\" >\n  \n          <thead style=\"font-weight:bold;\">\n            <tr>\n  \n            <th cope=\"col\"> Facture</th>\n            <th cope=\"col\"> Prenom</th>\n            <th cope=\"col\"> Nom</th>\n            <th cope=\"col\"> matricule</th>\n            <th cope=\"col\">Prestataire</th>\n            <th cope=\"col\">Date Prestation</th>\n            <th cope=\"col\">ChargeIpm</th>\n            <th cope=\"col\">ChargeAgent</th>\n            <th cope=\"col\">MontantFacture</th>\n\n        \n            \n            </tr>\n  \n          </thead>\n          <tbody>\n            <tr *ngFor=\"let element of list; let i=index\">\n              <td><b>{{element.ipmFacture?.numerofacture}}</b></td>\n              <td><b>{{element.ipm_employe?.prenom}}</b></td>\n              <td><b>{{element.ipm_employe?.nom}}</b></td>\n              <td><b>{{element.ipm_employe?.matricule}}</b></td>\n              <td><b>{{element.ipmFacture?.ipm_prestataire.nom_prestataire}}</b></td>\n<!--               <td>{{element.ipmFacture?.ipm_prestataire.}}</td>-->\n              <td><b>{{element.datePrestation}}</b></td>\n              <td><b>{{element.part_ipm}}</b></td>\n              <td><b>{{element.part_patient}}</b></td>\n              <td><b>{{element.montant_facture}}</b></td>\n\n\n              \n              <!-- <td class=\"td_actions\">\n                  <button mat-raised-button style=\"margin:2px;\" type=\"button\" class=\"btn btn-info\" (click)=\"getPrestaton(element)\">\n                      <i class=\"material-icons\"\n                        >person</i>\n                    </button>\n              </td> -->\n              <!-- <td>\n                <button class=\"btn btn-info btn-block\" \n               data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\n                </button></td> -->\n  \n  \n            </tr>\n          </tbody>\n         <tfoot style=\"font-weight:bold;\">\n            <tr>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td>\n                <h4>TOTAL</h4>\n              </td>\n              <td>{{somme1}}</td>\n              <td>{{somme2}}</td>\n              <td>{{somme3}}</td>\n\n\n            </tr>\n          </tfoot>\n  \n        </table>\n      </div>\n      <button class=\"btn btn-raised btn-round btn-success\"  (click)=\"imprimer() \">imprimer\n    </button>\n        <!-- <div class=\"modal-footer justify-content-center\">\n          <button class=\"btn btn-raised btn-round btn-success\" [disabled]=\"validerFact\" >Valider facture\n          </button>\n        </div> -->\n      </div>\n  \n    </div>\n  </div>");

/***/ }),

/***/ "yBa3":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapports/situation-des-bons/situation-des-bons.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    \n  <div class=\"card\">\n    <div class=\"card-header card-header-icon\" >\n      <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n        <i class=\"material-icons\">search</i>\n      </div>\n      <h2 class=\"text-center\" style=\"background-color:whitesmoke; color: black; pading: 2px; width:   60%;\">Rapport Pérodique par type de Bon</h2>\n  </div>\n    <div class=\"card-body\">\n      <form #form=\"ngForm\">\n\n        <div class=\"row\">\n        \n        <div class=\"col-md-3\" style=\"margin-top: 0px;\">\n            <!-- <legend>date Facture</legend> -->\n            <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\" la date du\" id=\"date1\" name=\"date1\" [(ngModel)]=\"date1\" (click)=\"picker.open()\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker startView=\"year\"></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-md-3\" style=\"margin-top: 0px;\">\n          <!-- <legend>date Facture</legend> -->\n          <mat-form-field>\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"Au\" id=\"date2\" name=\"date2\" [(ngModel)]=\"date2\" (click)=\"picker1.open()\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\n          </mat-form-field>\n      </div>\n       <div class=\"col-md-3 form-group\" style=\"margin-top: -1px;\">\n        <mat-form-field>\n          <mat-select placeholder=\"Type Bons\" name=\"typeBons\" [(ngModel)]=\"typeBons\"\n            >\n            <mat-option *ngFor=\"let typeB of listypeBon\" [value]=\"typeB.value\">\n              {{ typeB.value }} \n            </mat-option>\n\n          </mat-select>\n        </mat-form-field>\n      </div> \n      <!-- <div class=\"col-md-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"text\" placeholder=\"Matricule\" id=\"Matricule\"\n              name=\"Matricule\" [(ngModel)]=\"matricule\" >\n          </mat-form-field>\n        </div> -->\n      <div class=\"card-footer\" style=\"padding-left: 40%;\">\n        <button mat-raised-button type=\"submit\" \n         (click)=\" getBonsPeriode();form.resetForm()\" class=\"btn btn-fill btn-success\"><i\n            class=\"material-icons\">search</i>Rechercher</button>\n      </div>\n        \n      </div>\n      </form>\n      </div>\n      </div>\n      <!---Liste Bon-->\n      <div class=\"col-md-12\" *ngIf=\"listBonGlobalsPrestation\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-icon\">\n            <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n              <i class=\"material-icons\">list</i>\n      \n            </div>\n            <h2 class=\"text-center\" \n            style=\"background-color:whitesmoke; color: black; pading: 0px; width: 100%;\">Bon de {{d3}} du {{d1}} au {{d2}}\n            </h2>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"material-datatable\">\n            <table id=\"datatable\" class=\"table table-bordered \" \n             #TABLE cellspacing=\"0\" width=\"100%\" style=\"width:100%\" >\n      \n              <thead style=\"font-weight:bold;\">\n           <tr>\n                <th cope=\"col\"> Matricule</th>\n                <th cope=\"col\">Nom Participant</th>\n                <th cope=\"col\">Prenom Participant</th>\n                <th cope=\"col\">Prestataire </th>\n                <!-- <th cope=\"col\">Action</th> -->\n      \n            \n              </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let element of listBonGlobalsPrestation; let i=index\">\n                  <td><b>{{element.ipm_employe?.matricule}}</b></td>\n                  <td><b>{{element.ipm_employe?.nom}}</b></td>\n                  <td><b>{{element.ipm_employe?.prenom}}</b></td>\n                  <td><b>{{element.ipm_prestataire?.nom_prestataire}}</b></td>\n                  <!-- <td><button  mat-raised-button (click)=\"getDetBon(element)\" type=\"button\" class=\"btn btn-round btn-info\" id=\"edit\">\n                    <i class=\"material-icons\" >help</i></button> </td> -->\n                  <!-- <td><b>{{element.part_ipm}}</b></td>\n                  <td><b>{{element.part_patient}}</b></td> -->\n                \n                  <!-- <td>\n                    <button class=\"btn btn-info btn-block\" \n                   data-toggle=\"modal\" data-target=\"#noticeModal\" (click)=\"editDetails(i)\"><span class=\"fa fa-edit fa-lg\"></span>\n                    </button></td> -->\n      \n      \n                </tr>\n              </tbody>\n              <!-- <tfoot style=\"font-weight:bold;\">\n                <tr>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td>\n                    <h4>TOTAL</h4>\n                  </td>\n                  <td>{{}}</td>\n                  <td>{{}}</td>\n                  <td>{{}}</td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n      \n                </tr>\n              </tfoot> -->\n      \n            </table>\n          </div>\n          <div class=\"modal-footer justify-content-center\">\n            <button mat-raised-button class=\"btn btn-fill btn-success btn-round\" \n                  (click)=\"printSituationBons()\">imprimer\n                 </button>\n            </div> \n          </div>\n      \n        </div>\n      </div>\n\n   <!---Liste Bon-->");

/***/ })

}]);
//# sourceMappingURL=rapports-rapports-module.js.map