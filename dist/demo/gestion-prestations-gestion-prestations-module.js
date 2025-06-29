(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gestion-prestations-gestion-prestations-module"],{

/***/ "3tX5":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-prestations/list-prestation/list-prestation.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog cascading-modal\" role=\"document\">\n    <!--Content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modification des  prestations</h4>\n        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"material-icons\">clear</i>\n        </button>\n      </div>\n      <!--Modal cascading tabs-->\n      <div class=\"modal-c-tabs\">\n        <!-- Tab panels -->\n        <div class=\"tab-content\">\n            <!--Body-->\n            <div class=\"modal-body mb-1\">\n              <form>\n<!--              <div class=\"col-md-6 form-group\">                -->\n<!--                <input type=\"text\" id=\"code_prestation\" -->\n<!--                 name=\"code_prestation\"  [(ngModel)]=\"currentprestation.code_prestation\"-->\n<!--                  class=\"form-control\">-->\n<!--              </div>-->\n              <div class=\"col-md-6 form-group\" >\n                  <libelle><b>libelle</b></libelle>\n                <input type=\"text\" id=\"libelle\" name=\"libelle\"\n                 [(ngModel)]=\"currentprestation.libelle\" class=\"form-control\">\n              </div>\n              <div class=\"col-md-6 form-group\"*ngIf=\"!currentprestation.forfait\">\n                  <libelle>T<b>agré</b> </libelle>\n                <input type=\"text\" id=\"taux_agrees\"\n                 name=\"taux_agrees\" [(ngModel)]=\"currentprestation.taux_agrees\" class=\"form-control\">\n              </div>\n              <div class=\"col-md-6 form-group\" *ngIf=\"!currentprestation.forfait\">\n                  <libelle><b>Taux non agré</b></libelle>\n                <input type=\"text\" id=\"taux_non_agrees\"\n                 name=\"taux_non_agrees\" [(ngModel)]=\"currentprestation.taux_non_agrees\" class=\"form-control\">\n              </div>\n                  <div class=\"col-md-6 form-group\" *ngIf=\"currentprestation.forfait\">\n                      <libelle><b>Forfait</b></libelle>\n                      <input type=\"number\" id=\"montant_forfait\"\n                             name=\"montant_forfait\" [(ngModel)]=\"currentprestation.montant_forfait\" class=\"form-control\" placeholder=\"Montant Forfait\">\n                  </div>\n            </form>\n              <div class=\"text-center mt-2\">\n                <button  mat-raised-button class=\"btn btn-info\" \n                data-dismiss=\"modal\" (click)=\"updatePrestation()\">Modifer<i class=\"fas fa-sign-in-alt ml-1\"></i></button>\n              </div>\n            </div>\n            <!--Footer-->\n            <div class=\"modal-footer\">\n              \n              <button type=\"button\" class=\"btn btn-outline-info waves-effect ml-auto btn-round\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n\n      </div>\n    </div>\n    <!--/.Content-->\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"modalLRForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog cascading-modal\" role=\"document\">\n    <!--Content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Prise en Compte des prestations</h4>\n        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"material-icons\">clear</i>\n        </button>\n      </div>\n      <!--Modal cascading tabs-->\n      <div class=\"modal-c-tabs\">\n        <!-- Tab panels -->\n        <div class=\"tab-content\">\n            <!--Body-->\n            <div class=\"modal-body mb-1\">\n                <div class=\"col-md-6 form-group\" style=\"float: right\">\n<!--                    <input type=\"radio\" [(ngModel)]=\"afficheForfait\" value=\"true\" name=\"libelle\">-->\n                    <mat-checkbox [(ngModel)]=\"isForfait\"><b>Forfait</b></mat-checkbox>\n                </div>\n<!--              <div class=\"col-md-6 form-group\">                -->\n<!--                <input type=\"text\" id=\"code_prestation\" -->\n<!--                 name=\"code_prestation\"  [(ngModel)]=\"prestation.code_prestation\" class=\"form-control\" placeholder=\"Code prestation\">-->\n<!--              </div>-->\n              <div class=\"col-md-6 form-group\">\n                <input type=\"text\" id=\"libelle\" name=\"libelle\"\n                 [(ngModel)]=\"prestation.libelle\" class=\"form-control\" placeholder=\"Libelle\">\n              </div>\n              <div class=\"col-md-6 form-group\" *ngIf=\"!isForfait\">\n                <input type=\"number\" id=\"taux_agrees\" \n                 name=\"taux_agrees\" [(ngModel)]=\"prestation.taux_agrees\" class=\"form-control\" placeholder=\"Taux Agree\">\n              </div>\n              <div class=\"col-md-6 form-group\" *ngIf=\"!isForfait\">\n                <input type=\"number\" id=\"taux_non_agrees\" \n                 name=\"taux_non_agrees\" [(ngModel)]=\"prestation.taux_non_agrees\" class=\"form-control\" placeholder=\"Taux Non Agree\">\n              </div>\n                <div class=\"col-md-6 form-group\" *ngIf=\"isForfait\">\n                    <input type=\"number\" id=\"montant_forfait\"\n                           name=\"montant_forfait\" [(ngModel)]=\"prestation.montant_forfait\" class=\"form-control\" placeholder=\"Montant Forfait\">\n                </div>\n\n\n\n\n\n              \n              <div class=\"text-center mt-2\">\n                <button class=\"btn btn-info btn-round\" data-dismiss=\"modal\"\n                (click)=\"ajouterPrestation()\">Enregistrer<i class=\"fas fa-sign-in-alt ml-1\"></i></button>\n              </div>\n            </div>\n            <!--Footer-->\n            <div class=\"modal-footer\">\n              \n      <button mat-raised-button type=\"button\" class=\"btn btn-outline-info waves-effect ml-auto\"\n       data-dismiss=\"modal\">Close</button>\n            </div>\n              \n<!-- <input type=\"date\" (change)=\"refreshPage()\"> -->\n        </div>\n\n      </div>\n    </div>\n    <!--/.Content-->\n  </div>\n</div>\n<!--Modal: Login / Register Form-->\n<!--Fin-->\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon card-header-rose\">\n                        <div class=\"card-icon\">\n                          <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <button mat-raised-button type=\"button\" class=\"btn btn-success\" *ngIf=\"!isSecretaire() && !isOperateur()\">\n                          <i class=\"material-icons\" data-toggle=\"modal\" data-target=\"#modalLRForm\"\n                          >add_circle</i>\n                      </button>  \n                        <h4 class=\"card-title\">Liste des Prestations</h4>\n                        \n                       \n                    </div>\n                        <div class=\"card-body table-full-width\">\n                            <div class=\"material-datatable\">\n                                <table id=\"datatable\" class=\"table table-striped\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\" class=\"table table-hover\">\n                                    <thead class=\"text-primary\"> \n                                    <tr>\n\n                                             <th scope=\"col\">Libelle</th>\n                                             <th scope=\"col\">TAUX AGREES</th>\n                                             <th scope=\"col\">TAUX NON AGREES</th>\n                                             <th scope=\"col\">Montant Forfait</th>\n                                             <th *ngIf=\"!isSecretaire() && !isOperateur()\" scope=\"col\">ACTIONS</th>\n    \n                                           </tr>\n                                    </thead>\n                                    <tbody >\n                                          <tr *ngFor=\" let prestation of  listPrestation\">\n<!--                                              <td >{{prestation.code_prestation}}</td>-->\n                                              <td >{{prestation.libelle}}</td>\n                                              <td >{{prestation.taux_agrees}}</td>\n                                              <td >{{prestation.taux_non_agrees}}</td>\n                                              <td >{{prestation.montant_forfait}}</td>\n\n                          \n                            \n                                              <td class=\"td-actions\" *ngIf=\"!isSecretaire() && !isOperateur()\">\n                                                \n                                                \n\n                                                <button mat-raised-button type=\"button\" class=\"btn btn-primary\">\n                                                    <i class=\"material-icons\" data-toggle=\"modal\" data-target=\"#noticeModal\"\n                                                    (click)=\"getPrestationById(prestation)\">edit</i>\n                                                </button>                                      \n<!--                                                <button mat-raised-button type=\"button\" class=\"btn btn-success\">-->\n<!--                                                  <i class=\"material-icons\" [routerLink]=\"['/gestion-factures/Ajouterfactures/']\" -->\n<!--                                                  >perm_identity</i>-->\n<!--                                              </button>  -->\n                                              </td>\n                                              \n                                        </tr>\n                                       \n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        \n    \n\n");

/***/ }),

/***/ "G9j+":
/*!***********************************************************************************!*\
  !*** ./src/app/gestion-prestations/list-prestation/list-prestation.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tcHJlc3RhdGlvbnMvbGlzdC1wcmVzdGF0aW9uL2xpc3QtcHJlc3RhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "T+hL":
/*!*************************************************************************************!*\
  !*** ./src/app/gestion-prestations/ajout-prestation/ajout-prestation.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tcHJlc3RhdGlvbnMvYWpvdXQtcHJlc3RhdGlvbi9ham91dC1wcmVzdGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "YE5i":
/*!***************************************************************************!*\
  !*** ./src/app/gestion-prestations/gestion-prestations-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PrestationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestationRoutes", function() { return PrestationRoutes; });
/* harmony import */ var _ajout_prestation_ajout_prestation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajout-prestation/ajout-prestation.component */ "zrXC");
/* harmony import */ var _list_prestation_list_prestation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-prestation/list-prestation.component */ "hdU6");


var PrestationRoutes = [
    {
        path: '',
        children: [{
                path: 'AjoutPrestation',
                component: _ajout_prestation_ajout_prestation_component__WEBPACK_IMPORTED_MODULE_0__["AjoutPrestationComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'ListPrestation',
                component: _list_prestation_list_prestation_component__WEBPACK_IMPORTED_MODULE_1__["ListPrestationComponent"]
            }]
    },
];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class GestionPrestationsRoutingModule { }


/***/ }),

/***/ "Z0Mm":
/*!*******************************************************************!*\
  !*** ./src/app/gestion-prestations/gestion-prestations.module.ts ***!
  \*******************************************************************/
/*! exports provided: GestionPrestationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionPrestationsModule", function() { return GestionPrestationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ajout_prestation_ajout_prestation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-prestation/ajout-prestation.component */ "zrXC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gestion_prestations_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gestion-prestations-routing.module */ "YE5i");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.module */ "ZAI4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _list_prestation_list_prestation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-prestation/list-prestation.component */ "hdU6");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var GestionPrestationsModule = /** @class */ (function () {
    function GestionPrestationsModule() {
    }
    GestionPrestationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_ajout_prestation_ajout_prestation_component__WEBPACK_IMPORTED_MODULE_2__["AjoutPrestationComponent"], _list_prestation_list_prestation_component__WEBPACK_IMPORTED_MODULE_9__["ListPrestationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_gestion_prestations_routing_module__WEBPACK_IMPORTED_MODULE_4__["PrestationRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"]
            ]
        })
    ], GestionPrestationsModule);
    return GestionPrestationsModule;
}());



/***/ }),

/***/ "h2Ia":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-prestations/ajout-prestation/ajout-prestation.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6\">\n    <div class=\"card\">\n        <form>\n          <div class=\"card-header card-header-rose card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">mail_outline</i>\n            </div>\n            <h4 class=\"card-title\">Prise en Compte des prestations</h4>\n          </div>\n            <div class=\"card-body\">          \n                <div class=\"col-md-6 form-group\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"TypePrestataire\" name=\"ipm_type_prestataire\" [(ngModel)]=\"pres\"\n                     (selectionChange)=\"selectTypePres()\">\n                      <mat-option *ngFor=\"let pre of typepresta\" [value]=\"pre.id_type_prestataire\">\n                        {{ pre.nom_type_prestaire}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>   \n                </div>\n                <div class=\"col-md-6 form-group\">\n                  <mat-form-field>\n                    <mat-select placeholder=\"Prestataire\" name=\"ipm_prestataire\" [(ngModel)]=\"pres\">\n                      <mat-option *ngFor=\"let pre of prestataire\" [value]=\"pre.code_prestataire\">\n                        {{ pre.nom_prestataire}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>   \n                </div>\n                \n                <!-- <div class=\"category form-category\">* Required fields</div> -->\n                <div class=\"card-footer text-right\">\n                  <!-- <mat-checkbox class=\"example-margin mb-0\">Subscribe to newsletter</mat-checkbox> -->\n                  \n                  <button mat-raised-button type=\"submit\" class=\"btn btn-success\" (click)=\"onRegister()\">Enregistrer</button>\n                </div>\n              </div>\n        </form>\n    </div>\n\n</div>\n\n");

/***/ }),

/***/ "hdU6":
/*!**********************************************************************************!*\
  !*** ./src/app/gestion-prestations/list-prestation/list-prestation.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ListPrestationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPrestationComponent", function() { return ListPrestationComponent; });
/* harmony import */ var _raw_loader_list_prestation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./list-prestation.component.html */ "3tX5");
/* harmony import */ var _list_prestation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-prestation.component.css */ "G9j+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_Models_Prestations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Models/Prestations */ "fnsB");
/* harmony import */ var src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/prestation.service */ "E7Th");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListPrestationComponent = /** @class */ (function () {
    function ListPrestationComponent(prestation_service, router, activatedRoute, formBuilder, toastr, keycloak) {
        this.prestation_service = prestation_service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.keycloak = keycloak;
        this.selectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.prestation = new src_app_Models_Prestations__WEBPACK_IMPORTED_MODULE_6__["Prestation"]();
        this.isForfait = false;
        // Function to reload the application
        //   refreshPage() {
        //     window.location.reload();
        // }
        this.currentprestation = new src_app_Models_Prestations__WEBPACK_IMPORTED_MODULE_6__["Prestation"]();
    }
    ListPrestationComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getAllPrestation();
    };
    ListPrestationComponent.prototype.getAllPrestation = function () {
        var _this = this;
        this.prestation_service.listePrestation().subscribe(function (result) {
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
            _this.listPrestation = result;
        });
    };
    ListPrestationComponent.prototype.initForm = function () {
        this.prestation_service.dataForm = this.formBuilder.group({
            code_prestation: null,
            libelle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            taux_agrees: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8)]],
            taux_non_agrees: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    //Recuperer la prestation correspondant
    ListPrestationComponent.prototype.getPrestationById = function (prestation) {
        var _this = this;
        this.prestation_service.getPrestationById(prestation.code_prestation).subscribe(function (result) {
            _this.currentprestation = result;
            console.log(_this.currentprestation);
        });
    };
    ListPrestationComponent.prototype.updatePrestation = function () {
        var _this = this;
        this.prestation_service.ModifierPrestation(this.currentprestation).subscribe(function () {
            _this.toastr.success('Modification Faite avec Success');
            _this.ngOnInit();
            _this.router.navigate(['/list-prestation']);
        }, function (error) {
            _this.toastr.error("Erreur ");
        });
    };
    /////////////////
    ListPrestationComponent.prototype.ajouterPrestation = function () {
        var _this = this;
        this.prestation.forfait = this.isForfait;
        this.prestation_service.AjoutPrestation(this.prestation).subscribe(function (data) {
            _this.message = data;
            _this.getAllPrestation();
            _this.showNotification('top', 'center', 1, '<b>Prestation ajoutée avec Sucess</b> :');
        });
        // console.log(this.message);
        // this.ngOnInit();
        // this.router.navigate(['/list-prestation']).then(
        //   () =>{
        //     window.location.reload();
        //   }
    };
    ///////////////////////// Notification
    ListPrestationComponent.prototype.showNotification = function (from, align, idtype, note) {
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
    ListPrestationComponent.prototype.isSecretaire = function () {
        this.hasAccess = false;
        if (this.keycloak.getUserRoles().includes("secretaire")) {
            this.hasAccess = true;
        }
        return this.hasAccess;
    };
    ListPrestationComponent.prototype.isOperateur = function () {
        this.hasAccess = false;
        if (this.keycloak.getUserRoles().includes("operateur")) {
            this.hasAccess = true;
        }
        return this.hasAccess;
    };
    ListPrestationComponent.ctorParameters = function () { return [
        { type: src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_7__["PrestationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_8__["KeycloakService"] }
    ]; };
    ListPrestationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list-prestation',
            template: _raw_loader_list_prestation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_list_prestation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_7__["PrestationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], keycloak_angular__WEBPACK_IMPORTED_MODULE_8__["KeycloakService"]])
    ], ListPrestationComponent);
    return ListPrestationComponent;
}());



/***/ }),

/***/ "zrXC":
/*!************************************************************************************!*\
  !*** ./src/app/gestion-prestations/ajout-prestation/ajout-prestation.component.ts ***!
  \************************************************************************************/
/*! exports provided: AjoutPrestationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutPrestationComponent", function() { return AjoutPrestationComponent; });
/* harmony import */ var _raw_loader_ajout_prestation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ajout-prestation.component.html */ "h2Ia");
/* harmony import */ var _ajout_prestation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajout-prestation.component.css */ "T+hL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Models_Prestataire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Models/Prestataire */ "gL+i");
/* harmony import */ var src_app_Models_Prestations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/Prestations */ "fnsB");
/* harmony import */ var src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/prestation.service */ "E7Th");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AjoutPrestationComponent = /** @class */ (function () {
    function AjoutPrestationComponent(prestation_service, router) {
        this.prestation_service = prestation_service;
        this.router = router;
        this.prestation = new src_app_Models_Prestations__WEBPACK_IMPORTED_MODULE_5__["Prestation"](0, "", 0, 0, null);
        this.addPrestataire = new src_app_Models_Prestataire__WEBPACK_IMPORTED_MODULE_4__["Prestataire"](0, "", "", "", "", "", "", "", "");
        // this.percentage = Math.floor(this.myValue / this.value * 100);
    }
    AjoutPrestationComponent.prototype.ngOnInit = function () {
        this.getPrestataire();
        this.getTypeP();
        this.getTypeP();
    };
    AjoutPrestationComponent.prototype.onRegister = function () {
        var _this = this;
        this.addPrestataire.code_prestataire = this.pres;
        this.prestation.ipm_prestataire = JSON.parse(JSON.stringify(this.addPrestataire));
        this.prestation_service.AjoutPrestation(this.prestation).subscribe(function (data) { return _this.message = data; });
        this.router.navigate(['/gestion-prestations/ListPrestation']);
    };
    AjoutPrestationComponent.prototype.getPrestataire = function () {
        var _this = this;
        this.prestation_service.getAllPestataires().subscribe(function (pre) {
            _this.prestataire = pre;
            //this.temptype=pre
        });
    };
    AjoutPrestationComponent.prototype.getTypeP = function () {
        var _this = this;
        this.prestation_service.getTypePrestataire().subscribe(function (serv) {
            // console.log(serv);
            _this.typepresta = serv;
            //this.temptype=serv
            console.log(_this.typepresta);
            console.log(_this.typepresta);
        });
    };
    AjoutPrestationComponent.prototype.selectTypePres = function () {
        var _this = this;
        this.typepresta = this.temptype;
        this.prestataire = this.typepresta.filter(function (serv) { return serv.ipm_type_prestataire.code_prestataire == _this.pres; });
        console.log(this.pres);
        //  console.log(this.service)
    };
    AjoutPrestationComponent.ctorParameters = function () { return [
        { type: src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_6__["PrestationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AjoutPrestationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-ajout-prestation',
            template: _raw_loader_ajout_prestation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ajout_prestation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_6__["PrestationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AjoutPrestationComponent);
    return AjoutPrestationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=gestion-prestations-gestion-prestations-module.js.map