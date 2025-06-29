(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gestion-bons-gestion-bons-module"],{

/***/ "3Io9":
/*!**************************************************************************!*\
  !*** ./src/app/gestion-bons/bon-lunetterie/bon-lunetterie.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tYm9ucy9ib24tbHVuZXR0ZXJpZS9ib24tbHVuZXR0ZXJpZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "4q9j":
/*!************************************************!*\
  !*** ./src/app/Models/IPM_Bon_Consultation.ts ***!
  \************************************************/
/*! exports provided: IPM_Bon_Consultation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPM_Bon_Consultation", function() { return IPM_Bon_Consultation; });
/* harmony import */ var _IPM_Bon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IPM_Bon */ "WQyP");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IPM_Bon_Consultation = /** @class */ (function (_super) {
    __extends(IPM_Bon_Consultation, _super);
    function IPM_Bon_Consultation(idbon, nombre_article, service, total, numeroBon, 
    // public date_etablissement:Date,
    quantite, designation, prix_unitaire, ipm_employe, ipm_prestataire, ipm_prestation, ipm_enfant, 
    // public ordonnance:string,
    motif, ipm_conjoint, dateEtablissement, ipm_utilisateur) {
        var _this = _super.call(this, idbon, total, ipm_employe, ipm_prestataire, ipm_enfant, ipm_conjoint, ipm_prestation, dateEtablissement, ipm_utilisateur) || this;
        _this.idbon = idbon;
        _this.nombre_article = nombre_article;
        _this.service = service;
        _this.total = total;
        _this.numeroBon = numeroBon;
        _this.quantite = quantite;
        _this.designation = designation;
        _this.prix_unitaire = prix_unitaire;
        _this.ipm_employe = ipm_employe;
        _this.ipm_prestataire = ipm_prestataire;
        _this.ipm_prestation = ipm_prestation;
        _this.ipm_enfant = ipm_enfant;
        _this.motif = motif;
        _this.ipm_conjoint = ipm_conjoint;
        _this.dateEtablissement = dateEtablissement;
        _this.ipm_utilisateur = ipm_utilisateur;
        return _this;
    }
    return IPM_Bon_Consultation;
}(_IPM_Bon__WEBPACK_IMPORTED_MODULE_0__["IPM_Bon"]));



/***/ }),

/***/ "6d5C":
/*!**********************************************!*\
  !*** ./src/app/Models/IPM_Bon_Lunetterie.ts ***!
  \**********************************************/
/*! exports provided: IPM_Bon_Lunetterie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPM_Bon_Lunetterie", function() { return IPM_Bon_Lunetterie; });
/* harmony import */ var _IPM_Bon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IPM_Bon */ "WQyP");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IPM_Bon_Lunetterie = /** @class */ (function (_super) {
    __extends(IPM_Bon_Lunetterie, _super);
    function IPM_Bon_Lunetterie(idbon, nombre_article, 
    //public service:string,
    total, 
    // public date_etablissement:Date,
    quantite, 
    // public designation:string,
    prix_unitaire, montant, ipm_employe, ipm_prestataire, ipm_enfant, ipm_prestation, numeroBon, motif, devit, ordonnance, ipm_conjoint, dateEtablissement, date_delivrance, ipm_utilisateur) {
        var _this = _super.call(this, idbon, total, ipm_employe, ipm_prestataire, ipm_enfant, ipm_conjoint, ipm_prestation, dateEtablissement, ipm_utilisateur) || this;
        _this.idbon = idbon;
        _this.nombre_article = nombre_article;
        _this.total = total;
        _this.quantite = quantite;
        _this.prix_unitaire = prix_unitaire;
        _this.montant = montant;
        _this.ipm_employe = ipm_employe;
        _this.ipm_prestataire = ipm_prestataire;
        _this.ipm_enfant = ipm_enfant;
        _this.ipm_prestation = ipm_prestation;
        _this.numeroBon = numeroBon;
        _this.motif = motif;
        _this.devit = devit;
        _this.ordonnance = ordonnance;
        _this.ipm_conjoint = ipm_conjoint;
        _this.dateEtablissement = dateEtablissement;
        _this.date_delivrance = date_delivrance;
        _this.ipm_utilisateur = ipm_utilisateur;
        return _this;
    }
    return IPM_Bon_Lunetterie;
}(_IPM_Bon__WEBPACK_IMPORTED_MODULE_0__["IPM_Bon"]));



/***/ }),

/***/ "Atm+":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-bons/liste-bons/liste-bons.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Types Bons -->\n\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row tab-content tab-space\" style=\"margin-top:-5.5cm;\">\n\n\n\n    </div>\n    <div class=\"card-body\">\n      <ul class=\"nav nav-pills nav-pills-warning\" role=\"tablist\">\n\n      </ul>\n      <div class=\"tab-content tab-space\">\n\n          <!----> \n            \n        <div class=\"col-md-11 tab-pane active\" id=\"link0\" *ngIf=\"mess1\">\n          <div class=\"card \" style=\"margin-left:1cm;\">\n            <div class=\"card-header  card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">search</i>\n              </div>\n              <h3 class=\"card-title\"\n                style=\"background-color:whitesmoke; font-weight: 400; color: black; padding: 4px; width: 35%;\">\n                Rechercher Employe</h3>\n            </div>\n            <div class=\"card-body \">\n              <form class=\"navbar-form\">\n                <span class=\"bmd-form-group\">\n                  <div class=\"input-group no-border\">\n                    <input type=\"text\" name=\"matricule\" class=\"form-control\" placeholder=\"Matricule\" id=\"matricule\"\n                      [(ngModel)]=\"matricule\">\n\n                  </div>\n                </span>\n\n\n              </form>\n            </div>\n\n            \n            <div class=\"card-footer\" style=\"padding-left: 80%;\">\n              <button mat-raised-button type=\"submit\" class=\"nav-link\" data-toggle=\"tab\" href=\"#link1\"\n                (click)=\"findByMatricule()\" class=\"btn btn-fill btn-success\"><i\n                  class=\"material-icons\">search</i>Rechercher</button>\n            </div>\n          </div>\n        </div>\n\n\n\n            \n         <!-- --> \n\n\n        <div class=\"col-md-11 tab-pane active\" id=\"link0\">\n          <div class=\"card \" style=\"margin-left:1cm;\">\n            <div class=\"card-header  card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">search</i>\n              </div>\n              <h3 class=\"card-title\"\n                style=\"background-color:whitesmoke; font-weight: 400; color: black; padding: 4px; width: 35%;\">\n                Rechercher Employe</h3>\n            </div>\n            <div class=\"card-body \">\n              <form class=\"navbar-form\">\n                <span class=\"bmd-form-group\">\n                  <div class=\"input-group no-border\">\n                    <input type=\"text\" name=\"matricule\" class=\"form-control\" placeholder=\"Matricule\" id=\"matricule\"\n                      [(ngModel)]=\"matricule\">\n\n                  </div>\n                </span>\n\n\n              </form>\n            </div>\n\n            <!--[disabled]=\"!searchForm.form.invalid\"-->\n            <div class=\"card-footer\" style=\"padding-left: 80%;\">\n              <button mat-raised-button type=\"submit\" class=\"nav-link \" data-toggle=\"tab\" href=\"#link1\"\n                (click)=\"findByMatricule()\" class=\"btn btn-fill btn-success\"><i\n                  class=\"material-icons\">search</i>Rechercher</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"tab-pane\" id=\"link1\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-header  card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">assignment</i>\n              </div>\n              <h3 class=\"card-title\"\n                style=\"background-color:whitesmoke; font-weight: 400; color: black; padding: 4px; width: 40%;\">Bon\n                Pharmaceutique Employé</h3>\n            </div>\n\n            <div class=\"card p-4\" style=\"font-weight:500 ;\">\n              <form>\n                <div>\n                  <style>\n                    label {\n                      font-weight: bold;\n                      color: black;\n                    }\n                  </style>\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label>Prénom :</label>\n                        {{message.prenom}}\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label> Nom :</label>\n                        {{message.nom}}\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Numero Carnet:</label>\n                        {{message.numero_carnet}}\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Age :</label>\n                        <b> {{ageE}}</b>\n                        \n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Date Naissance:</label>\n                      {{message.date_nais}}\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Sexe:</label>\n                      {{message.sexe}}\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Lieu de Naissance:</label>\n                      {{message.lieu_nais}}\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Services:</label>\n                      {{message.ipmService?.type_service}}\n                    </div>\n                  </div>\n                </div>\n                <hr>\n\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\" style=\"margin-top: 5px;font-weight:bold;color: black\">\n                    <mat-form-field>\n                      <label for=\"lPrestataires\">lPrestataires</label>\n                      <mat-select name=\"prestataires\" [(ngModel)]=\"code_presta\">\n                        <mat-option *ngFor=\"let prest of lprestataires\" [value]=\"prest.code_prestataire\"\n                          (click)=\"getnom(prest)\">\n                          {{ prest.nom_prestataire }}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-2 form-group\">\n                    <label>Nombre d'article</label>\n                    <input type=\"number\" class=\"form-control\" id=\"nombre_article\" [(ngModel)]=\"nombre_article\"\n                      name=\"nombre_article\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Designation</label>\n                    <input type=\"text\" class=\"form-control\" id=\"designation\" [(ngModel)]=\"designation\"\n                      name=\"designation\">\n                  </div>\n                  <div class=\"col-md-2 form-group\">\n                    \n                    <label class=\"bmd-label-floating\">Nombre de Bon :</label>\n                    \n                    <b> {{listBon.length}}</b>\n                    \n                  </div>\n                </div>\n                <hr>\n                \n                <div class=\"row\">\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Joindre Ordonnance\n                    <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectOrdonn($event)\">\n                    <!-- <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\"> -->\n  \n                </div>\n                  <br/>\n                  <span> <b style=\"color: #00b0ff\">{{nomOrdon}}</b></span>\n\n<!--                  <b class=\"text-danger\">-->\n<!--                    ordonnance obligatoire !!!-->\n<!--                  </b>-->\n                  <!-----Row Vide   data-toggle=\"modal\"\n                          data-target=\"#modalconjoints\"----------------------------->\n                </div>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-6\" style=\"font-weight:bold;color: black\">\n                    <mat-form-field appearance=\"fill\">\n                      <mat-select placeholder=\"Choisir Conjoints\" name=\"conjoints\" ([ngModel])=\"id_conjoint\">\n                        <mat-option *ngFor=\"let conjoint of conjoints\" [value]=\"conjoint.idconj\" class=\"nav-link \"\n                          data-toggle=\"tab\" href=\"#link2\" role=\"tablist\" (click)=\"getconjointbon(conjoint)\">\n                          {{ conjoint.prenom_conjoint}} {{ conjoint.nom_conjoint}}\n                        </mat-option>\n                      </mat-select>\n\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\" style=\"font-weight:bold;color: black\">\n                    <mat-form-field appearance=\"fill\">\n                      <mat-select placeholder=\"Choisir Enfants\" name=\"enfants\" ([ngModel])=\"id_enfant\">\n                        <mat-option *ngFor=\"let enfant of enfants\" [value]=\"enfant.idenf\" class=\"nav-link \"\n                          data-toggle=\"tab\" href=\"#link3\" role=\"tablist\" (click)=\"getenfantbon(enfant)\">\n                          {{ enfant.prenom_enfant}} {{ enfant.nom_enfant}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"modal-footer justify-content-center\">\n                  <button mat-raised-button type=\"button\" (click)=\"BonNow()\" class=\"btn btn-success btn-round\"\n                    data-dismiss=\"modal\">\n                    Enregistrer</button>\n                </div>\n                <div class=\"modal-footer justify-content-center\">\n                  <!-- <button mat-raised-button type=\"button\" (click)=\"upload()\" class=\"btn btn-green btn-round\" data-dismiss=\"modal\">\n                    Exporter</button> -->\n                    <div class=\"col-md-6\" style=\"font-weight:bold;color: black;float: right;\">\n                      <i mat-raised-button type=\"button\" class=\"nav-link\"\n                      data-toggle=\"tab\"  style=\"width: 100px;\" (click)=\"retourserach()\"  role=\"tablist\" class=\"btn btn-info btn-round\">\n                      <span class=\"material-icons\">arrow_back</span></i>\n                    \n                    </div>\n                </div> \n\n                <!-- <div class=\"modal-footer justify-content-center\">\n                  <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\"\n                    data-target=\"#noticeModal\">Voir Bon Pharmaceutique</button>\n\n                </div> -->\n                <div>\n                  <!-- <h4>{{message}} </h4> -->\n                </div>\n\n              </form>\n\n\n              <!-- </div>\n                        </div>\n                      </div>\n          \n                    </div>\n                  </div> -->\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane\" id=\"link2\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">assignment</i>\n              </div>\n              <h3 class=\"text-center\"\n                style=\"background-color:whitesmoke; color: black; padding: 2px; width: 45%; font-weight: 500;\">Bon\n                Pharmaceutique conjoint</h3>\n            </div>\n            <button mat-raised-button type=\"submit\" class=\"nav-link\" data-toggle=\"tab\" href=\"#link1\"\n        class=\"btn btn-fill btn-success\" style=\"width: 4cm\" (click)=\"viderConjoint()\"><i\n         class=\"material-icons\">search</i>Participant</button>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"card-header card-header-icon card-header-info\" class=\"btn-btn primary\">\n\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label>Prénom Conjoint :</label>\n                        <b> {{messageconjoint?.prenom_conjoint}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label> Sexe :</label>\n                        <b> {{messageconjoint?.sexe_conjoint}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label> Nom Conjoint :</label>\n                        <b> {{messageconjoint?.nom_conjoint}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Date Naissance :</label>\n                        <b> {{messageconjoint?.date_naiss_conj | date: 'dd/MM/yyyy'}}</b>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Matricule :</label>\n                      <b> {{message?.matricule}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Lieu de Naissance :</label>\n                      <b> {{messageconjoint?.lieu_naiss_conj}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Age :</label>\n                      <b> {{Ageconjoin}}</b>\n                    </div>\n                  </div>\n\n                </div>\n\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\" style=\"margin-top:1px;\">\n                    <label class=\"bmd-label-floating\">Prestataires Conjoints :</label>\n                    <mat-form-field>\n                      <mat-select name=\"lprestataires\" [(ngModel)]=\"code_presta\">\n                        <mat-option *ngFor=\"let prest of lprestataires\" [value]=\"prest.code_prestataire\"\n                          (click)=\"getnom(prest)\">\n                          <b> {{ prest.nom_prestataire }}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Nombre d'article</label>\n                    <input type=\"number\" class=\"form-control\" id=\"nombre_article\" [(ngModel)]=\"nombre_article\"\n                      name=\"nombre_article\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Designation</label>\n                    <input type=\"text\" class=\"form-control\" id=\"designation\" [(ngModel)]=\"designation\"\n                      name=\"designation\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Joindre Ordonnance\n                    <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectOrdonnConj($event)\">\n                    <!-- <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\"> -->\n                </div>\n                  <span><b style=\"color: #00b0ff\">{{nomOrdonConj}}</b></span>\n\n                  <!-----Row Vide   data-toggle=\"modal\"\n                          data-target=\"#modalconjoints\"----------------------------->\n                </div>\n\n\n\n\n\n\n                <div class=\"modal-footer justify-content-center\">\n                  <button mat-raised-button type=\"button\" (click)=\"BonConjoint()\" class=\"btn btn-success btn-round\"\n                    data-dismiss=\"modal\">\n                    Enregistrer</button>\n                </div>\n                <!-- <div class=\"modal-footer justify-content-center\">\n                  <button mat-raised-button type=\"button\" (click)=\"uploadConjoint()\" class=\"btn btn-green btn-round\" data-dismiss=\"modal\">\n                    Exporter</button>\n                </div> -->\n                <!-- <div class=\"modal-footer justify-content-center\">\n                  <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\"\n                    data-target=\"#noticeConjoint\"> Details Conjoint</button>\n\n                </div> -->\n                <div>\n\n                </div>\n\n              </form>\n\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane\" id=\"link3\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">assignment</i>\n              </div>\n              <h3 class=\"text-center\"\n                style=\"background-color:whitesmoke; color: black; padding: 2px; width: 45%; font-weight: 500;\">Bon\n                Pharmaceutique Enfant </h3>\n            </div>\n            <div class=\"card-body\">\n              <button mat-raised-button type=\"submit\" class=\"nav-link\" data-toggle=\"tab\" href=\"#link1\"\n                 class=\"btn btn-fill btn-success\"(click)=\"viderEnfant()\"><i\n                  class=\"material-icons\">search</i>Participant</button>\n              <form>\n\n                <style>\n                  b {\n                    color: black;\n                    font-weight: 500;\n                  }\n                </style>\n                <div class=\"row\">\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label>Prénom Enfant : </label>\n                      <b> {{messageenfant?.prenom_enfant}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label> Nom Enfant : </label>\n                      <b> {{messageenfant?.nom_enfant}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Sexe:</label>\n                      <b> {{messageenfant?.sexe_enfant}}</b>\n                    </div>\n                  </div>\n                  \n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Age:</label>\n                      <b> {{AgeEnfant}}</b>\n                    </div>\n                  </div>\n                </div>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Date Naissance : </label>\n                      <b> {{messageenfant?.date_nais_enfant | date: 'dd/MM/yyyy'}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Lieu de Naissance : </label>\n                      <b> {{messageenfant?.lieu_nais_enfant}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Nombre d'article</label>\n                    <input type=\"number\" class=\"form-control\" id=\"nombre_article\" [(ngModel)]=\"nombre_article\"\n                      name=\"nombre_article\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Designation</label>\n                    <input type=\"text\" class=\"form-control\" id=\"designation\" [(ngModel)]=\"designation\"\n                      name=\"designation\">\n                  </div>\n\n                </div>\n\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <mat-form-field>\n                      <label for=\"Prestataires Enfants\">Prestataires Enfants</label>\n                      <mat-select name=\"prestataires\" [(ngModel)]=\"code_presta\">\n                        <mat-option *ngFor=\"let prest of lprestataires\" [value]=\"prest.code_prestataire\"\n                          (click)=\"getnom(prest)\">\n                          {{ prest.nom_prestataire }}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n\n                </div>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Joindre Ordonnance\n                    <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectOrdonnEnf($event)\">\n                    <!-- <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\"> -->\n                </div>\n                  <span> <b style=\"color: #00b0ff\">{{nomOrdonEnf}}</b></span>\n                  <!-----Row Vide   data-toggle=\"modal\"\n                          data-target=\"#modalconjoints\"----------------------------->\n                </div>\n\n\n                <!-- \n                                    <div class=\"col-md-6 form-group\">\n                                      <label>Prix Unitaire</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"prix_unitaire\" [(ngModel)]=\"prix_unitaire\"\n                                        name=\"prix_unitaire\">\n                                    </div> -->\n\n\n\n\n                                    <div class=\"modal-footer justify-content-center\">\n                                      <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\" [disabled]=\"desactive\"\n                                        (click)=\"BonEnfant()\">Enregistrer\n                                      </button>\n                                      <!-- <button mat-raised-button type=\"button\" (click)=\"uploadEnfant()\" class=\" btn btn-raised btn-round btn btn-danger btn-round\"\n                                        >\n                                        Exporter</button> -->\n                    \n                                    </div>                     \n                <!-- <div class=\"modal-footer justify-content-center\">\n                  <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\"\n                    data-target=\"#noticeenfant\">Details Enfant</button>\n\n                </div> -->\n                <div>\n                  <!-- <h4>{{message}} </h4> -->\n                </div>\n\n              </form>\n\n\n              <!-- </div>\n                        </div>\n                      </div>\n          \n                    </div>\n                  </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Fin Types Bons -->\n<!-- <div class=\"col-md-12\"> -->\n\n<!-- Exemple ngTemplate-->\n\n<!-- Fin Exemple ngTemplate-->\n<!-- notice modal -->\n<div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"\n  *ngIf=\"message\">\n  <div class=\"modal-dialog modal-notice\">\n    <div class=\"modal-content\" style=\"width: 600px;\">\n      <div class=\"modal-header\">\n        <!-- <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5> -->\n        <button mat-button type=\"button\" class=\"close \" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i style=\"margin-top: -1.3cm; color: red; font-size: 30px;\" class=\"material-icons\">close</i>\n        </button>\n\n\n      </div>\n      <div class=\"modal-body\">\n\n\n        <div class=\"\" style=\"margin-top: -1cm;\">\n          <div>\n            <img src=\"/assets/img_poste/header1.png\" style=\"width: 100%;\" alt=\"Thumbnail Image\" alt=\"\" />\n          </div>\n        </div>\n        <div class=\"row\">\n\n          <div class=\"col-md-12\">\n            <h4 style=\"text-align:right; font-weight: bold; margin-top: 25px;\">Dakar le:{{jstoday}}</h4>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Prénom :</label>\n              <b> {{message.prenom}}</b>\n            </div>\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Nom :</label>\n              <b> {{message.nom}}</b>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <hr>\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Prestataire :</label>\n              <b>{{p}}</b>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Numero Carnet:</label>\n              {{message.idemp}}\n            </div>\n          </div> -->\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Services:</label>\n              <b> {{message.ipm_service?.type_service}}</b>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"card-body table-full-width\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover table-bordered\">\n              <thead class=\"\">\n                <tr style=\"background-color: whitesmoke;\">\n                  <th style=\"font-weight: 600px\">Matricule Participant</th>\n                  <th style=\"font-weight: 600px\">Designation</th>\n                  <th style=\"font-weight: 600px\">Nombre D'article</th>\n\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>{{message.matricule}}</td>\n                  <td>{{designation}}</td>\n                  <td>{{nombre_article}}</td>\n\n              </tbody>\n\n            </table>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer justify-content-center\">\n        <button mat-raised-button type=\"button\" (click)=\"BonNow()\" class=\"btn btn-success btn-round\"\n          data-dismiss=\"modal\">\n          Enregistrer</button>\n      </div>\n      <!-- <div class=\"modal-footer justify-content-center\">\n        <button mat-raised-button type=\"button\" (click)=\"upload()\" class=\"btn btn-green btn-round\" data-dismiss=\"modal\">\n          Exporter</button>\n      </div> -->\n\n    </div>\n\n\n  </div>\n</div>\n<!-- end notice modal -->\n\n\n<!--modal Conjoints  -->\n<div class=\"modal fade\" id=\"noticeConjoint\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\" *ngIf=\"message\">\n  <div class=\"modal-dialog modal-notice\">\n    <div class=\"modal-content\" style=\"width: 600px;\">\n      <div class=\"modal-header\">\n        <!-- <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5> -->\n        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"material-icons\">close</i>\n        </button>\n\n\n      </div>\n      <div class=\"modal-body\">\n        \n\n        <div class=\"\" style=\"margin-top: -1cm;\">\n          <div>\n            <img src=\"/assets/img_poste/header1.png\" style=\"width: 100%;\" alt=\"Thumbnail Image\" alt=\"\" />\n          </div>\n        </div>\n        <div class=\"row\">\n\n          <div class=\"col-md-12\">\n            <h4 style=\"text-align:right; font-weight: bold; margin-top: 25px;\">Dakar le:{{jstoday}}</h4>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Matricule Participant:</label>\n              <b> {{message.matricule}}</b>\n            </div>\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Prénom Conjoint :</label>\n              <b> {{messageconjoint?.prenom_conjoint}}</b>\n            </div>\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Nom Conjoint :</label>\n              <b> {{messageconjoint?.nom_conjoint}}</b>\n            </div>\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Date Naissance :</label>\n              <b> {{messageconjoint?.date_naiss_conj | date: 'dd/MM/yyyy'}}</b>\n            </div>\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Lieu de Naissance :</label>\n              <b> {{messageconjoint?.lieu_naiss_conj}}</b>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-6 form-group\">\n              <div class=\"form-group\">\n                <label class=\"bmd-label-floating\">Services:</label>\n                {{message.ipm_service?.type_service}}\n              </div>\n            </div> -->\n        </div>\n        <hr>\n        <div class=\"card-body table-full-width\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover table-bordered\">\n              <thead class=\"text-black\">\n                <tr>\n\n                  <th style=\"font-weight:600;\">Prestataire</th>\n                  <th style=\"font-weight:600;\">Designation</th>\n                  <th style=\"font-weight:600;\">Nombre D'article</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>{{p}}</td>\n                  <td>{{designation}}</td>\n                  <td>{{nombre_article}}</td>\n\n              </tbody>\n\n            </table>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button mat-raised-button type=\"button\" (click)=\"BonConjoint()\" class=\"btn btn-success btn-round\"\n          data-dismiss=\"modal\">\n          Enregistrer Bon Conjoint</button>\n      </div>\n      <!-- <div class=\"modal-footer justify-content-center\">\n        <button mat-raised-button type=\"button\" (click)=\"uploadConjoint()\" class=\"btn btn-green btn-round\"\n          data-dismiss=\"modal\">\n          Exporter</button>\n      </div> -->\n    </div>\n\n\n  </div>\n</div>\n<!-- end notice modal -->\n\n\n\n<!--modal Enfants -->\n<div class=\"modal fade\" id=\"noticeenfant\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"\n  *ngIf=\"message\">\n  <div class=\"modal-dialog modal-notice\">\n    <div class=\"modal-content\" style=\"width: 600px;\">\n      <div class=\"modal-header\">\n        <!-- <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5> -->\n        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"material-icons\">close</i>\n        </button>\n\n\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"\" style=\"margin-top: -1cm;\">\n          <div>\n            <img src=\"/assets/img_poste/header1.png\" style=\"width: 100%;\" alt=\"Thumbnail Image\" alt=\"\" />\n          </div>\n        </div>\n        <div class=\"row\">\n\n          <div class=\"col-md-12\">\n            <h4 style=\"text-align:right; font-weight: bold; margin-top: 25px;\">Dakar le:{{jstoday}}</h4>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Matricule Participant :</label>\n              <b> {{message.matricule}}</b>\n            </div>\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Prénom Enfant:</label>\n              <b> {{messageenfant?.prenom_enfant}}</b>\n            </div>\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Nom Enfant :</label>\n              <b> {{messageenfant?.nom_enfant}}</b>\n            </div>\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Date Naissance :</label>\n              <b> {{messageenfant?.date_nais_enfant | date: 'dd/MM/yyyy'}}</b>\n            </div>\n          </div>\n          <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Lieu de Naissance :</label>\n              <b> {{messageenfant?.lieu_nais_enfant}}</b>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-6 form-group\">\n              <div class=\"form-group\">\n                <label class=\"bmd-label-floating\">Services:</label>\n                {{message.ipm_service?.type_service}}\n              </div>\n            </div> -->\n        </div>\n        <div class=\"card-body table-full-width\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-hover table-bordered\">\n              <thead class=\"text-black\">\n                <tr style=\"background-color: whitesmoke\">\n\n                  <th style=\"font-weight: 600px ;\">Prestataire</th>\n                  <th style=\"font-weight: 600px ;\">Nombre d'article</th>\n                  <th style=\"font-weight: 600px ;\">Designation</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>{{p}}</td>\n                  <td>{{nombre_article}}</td>\n                  <td>{{designation}}</td>\n\n              </tbody>\n\n            </table>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button mat-raised-button type=\"button\" (click)=\"BonEnfant()\" class=\"btn btn-success btn-round\"\n          data-dismiss=\"modal\">\n          Enregistrer Bon Enfant</button>\n      </div>\n      <!-- <div class=\"modal-footer justify-content-center\">\n        <button mat-raised-button type=\"button\" (click)=\"uploadEnfant()\" class=\"btn btn-green btn-round\"\n          data-dismiss=\"modal\">\n          Exporter</button>\n      </div> -->\n    </div>\n\n\n  </div>\n</div>\n<!-- end notice modal -->");

/***/ }),

/***/ "E+bH":
/*!*****************************************************************!*\
  !*** ./src/app/gestion-bons/bon-lettre/bon-lettre.component.ts ***!
  \*****************************************************************/
/*! exports provided: BonLettreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonLettreComponent", function() { return BonLettreComponent; });
/* harmony import */ var _raw_loader_bon_lettre_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./bon-lettre.component.html */ "OakW");
/* harmony import */ var _bon_lettre_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bon-lettre.component.css */ "TGFl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_Models_Conjoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Models/Conjoint */ "4uqQ");
/* harmony import */ var src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Models/Employe */ "5GYJ");
/* harmony import */ var src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Models/Enfant */ "yLBP");
/* harmony import */ var src_app_Models_IPM_Bon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Models/IPM_Bon */ "WQyP");
/* harmony import */ var src_app_Models_IPM_Bon_Lettre_Garantie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Models/IPM_Bon_Lettre_Garantie */ "Meco");
/* harmony import */ var src_app_Models_Prestataire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Models/Prestataire */ "gL+i");
/* harmony import */ var src_app_Services_bon_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Services/bon.service */ "AhZP");
/* harmony import */ var src_app_Services_bonlettre_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/Services/bonlettre.service */ "gkPT");
/* harmony import */ var src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/Services/conjoint.service */ "NbTU");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/Services/enfant.service */ "ABBt");
/* harmony import */ var src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/Services/prestataire.service */ "3m7+");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../Services/utilisateur.service */ "MVAf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var BonLettreComponent = /** @class */ (function () {
    ///////////////////////
    function BonLettreComponent(emp_service, router, pres_service, bont, route, conj_service, bon_lettreService, enf_service, toastr, datePipe, keycloak, user_Service) {
        var _this = this;
        this.emp_service = emp_service;
        this.router = router;
        this.pres_service = pres_service;
        this.bont = bont;
        this.route = route;
        this.conj_service = conj_service;
        this.bon_lettreService = bon_lettreService;
        this.enf_service = enf_service;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.keycloak = keycloak;
        this.user_Service = user_Service;
        this.employes = [];
        this.conjoints = [];
        //////////////////////-----Recuperation Conjoints/////////////////////
        this.conjoint = new src_app_Models_Conjoint__WEBPACK_IMPORTED_MODULE_8__["Conjoint"]();
        this.currentprestataire = new src_app_Models_Prestataire__WEBPACK_IMPORTED_MODULE_13__["Prestataire"]();
        this.enfant = new src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_10__["Enfant"]();
        this.currentemploye = new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_9__["Employe"]();
        this.enfants = [];
        this.today = new Date();
        this.jstoday = '';
        this.bons = [];
        this.dateform = new Date();
        this.b = new src_app_Models_IPM_Bon__WEBPACK_IMPORTED_MODULE_11__["IPM_Bon"](0, "", null, null, null, null, null, null, null);
        this.bonlettre = new src_app_Models_IPM_Bon_Lettre_Garantie__WEBPACK_IMPORTED_MODULE_12__["IPM_Bon_Lettre_Garantie"](0, "", "", "", null, null, null, null, null, null, null, null, null);
        this.desactive = false;
        this.maDate = new Date();
        this.keycloak.loadUserProfile().then(function (res) {
            console.log(res);
            _this.user = res;
            _this.getUserByUsernameF(res.username);
        });
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.dateform, 'dd-MM-yyyy', 'en-US', '+0530');
        this.addPrestataire = new src_app_Models_Prestataire__WEBPACK_IMPORTED_MODULE_13__["Prestataire"]();
        this.addconjoint = new src_app_Models_Conjoint__WEBPACK_IMPORTED_MODULE_8__["Conjoint"]();
        this.addenfant = new src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_10__["Enfant"]();
    }
    BonLettreComponent.prototype.getUserByUsernameF = function (username) {
        var _this = this;
        console.log(username);
        return this.user_Service.getUserByUsername(username).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user.prenom);
        });
    };
    BonLettreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pres_service.getTypePestataires('Hopital').subscribe(function (pres) {
            // console.log(cat);
            _this.lprestataires = pres;
            console.log(_this.lprestataires);
        });
        this.id = this.route.snapshot.params['id'];
        this.emp_service.getEmployeById(this.id).subscribe(function (result) {
            _this.currentemploye = result;
        });
        this.pres_service.getBon().subscribe(function (pres) {
            // console.log(cat);
            _this.listB = pres;
            console.log(_this.listB[_this.listB.length - 1].numeroBon.slice(4));
            _this.numero = _this.listB[_this.listB.length - 1].numeroBon.slice(4);
            _this.numero++;
            // console.log(this.numero);
        });
    };
    ////////////////////Rechercher par matricule 
    BonLettreComponent.prototype.findByMatricule = function () {
        var _this = this;
        ///////Rechercher l'employé
        this.emp_service.getEmployeByMatricule(this.matricule).subscribe(function (data) {
            _this.mess = data;
            if (_this.mess) {
                console.log(_this.mess);
            }
            else {
                _this.mess1 = "yess";
                _this.mess1 = '';
                console.log("charlessssssssssssss");
                _this.showNotification('top', 'center', 3, "<b>matricule n'existe pas</b> :");
            }
            if (data.statut == true) {
                _this.message = data;
                _this.showNotification('top', 'center', 1, '<b>agent existe</b> :');
            }
            else {
                console.log("age");
                _this.mess1 = "yess";
                _this.mess1 = '';
                _this.showNotification('top', 'center', 3, "<b>agent de numero matricule " + _this.matricule + " ne beneficie plus de L'IPM</b> :");
            }
            _this.matr = _this.message.idemp;
            console.log(_this.matr);
            _this.enfant = _this.message;
            console.log(_this.enfant);
            var date = _this.message.date_nais;
            //this.datePipe.transform(this.message.date_nais, "dd-MM-yyyy");
            //const date =this.message.date_nais
            console.log(date);
            var b = new Date(date);
            var ttoday = new Date();
            _this.AgeEmploye = ttoday.getFullYear() - b.getFullYear();
            var m = ttoday.getMonth() - b.getMonth();
            // console.log(this.message.date_nais);
            // console.log(m);
            if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
                _this.AgeEmploye--;
                // console.log(this.messageconjoint.date_naiss_conj);
            }
            console.log(_this.AgeEmploye);
            ///////Rechercher les enfants en fontion de l'employé
            _this.enf_service.listeEnfant(_this.message.idemp).subscribe(function (enfs) {
                _this.enfants = enfs;
                _this.enfants.forEach(function (ele) {
                    if (ele.date_nais_enfant) {
                        //convert date again to type Date
                        var bdate = new Date(ele.date_nais_enfant);
                        var timeDiff = Math.abs(Date.now() - bdate.getTime());
                        _this.agenft = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                    }
                    console.log(_this.agenft);
                    if (_this.agenft > 21) {
                        console.log("Age atteinte impossible de ce beneficier à l'ipm :", _this.agenft);
                        ele.active = false;
                        console.log(ele.active);
                        console.log("age depasse");
                    }
                    else if (_this.agenft < 21) {
                        console.log("Voici l'age :", _this.agenft);
                        ele.active = true;
                        console.log(ele.active);
                        console.log("age non depasse");
                    }
                });
                console.log(_this.enfants);
                _this.enfants = _this.enfants.filter(function (serv) { return serv.active == true; });
                console.log(_this.enfants);
            });
            ///////Rechercher les conjoints en fontion de l'employé
            _this.conj_service.listeConjoint(_this.message.idemp).subscribe(function (conjs) {
                _this.conjoints = conjs;
                // console.log(this.conjoints)
            });
            //   if(this.message){
            //     this.showNotification('top','center',1,'<b>agent existe</b> :')
            //     console.log(this.message);
            //   }
            // else if(!this.message){
            //     console.log("not existe");
            //     //this.showNotification('top','center',3,"<b>agent n'existe pas</b> :")
            //   }
        });
    };
    BonLettreComponent.prototype.getnom = function (prest) {
        var _this = this;
        this.pres_service.getAllPrestataires().subscribe(function (pres) {
            console.log(prest.code_prestataire);
            console.log(prest.nom_prestataire);
            _this.prestataires = pres;
            _this.p = prest.nom_prestataire;
            _this.idp = prest.code_prestataire;
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
        });
    };
    BonLettreComponent.prototype.selectOrdonn = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrdonne = event.target.files[0];
        this.nomOrdon = this.selectOrdonne.name;
        console.log(this.nomOrdon);
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    BonLettreComponent.prototype.selectOrdonnConj = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrdonne = event.target.files[0];
        this.nomOrdonConj = this.selectOrdonne.name;
        console.log(this.nomOrdon);
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    BonLettreComponent.prototype.selectOrdonnEnf = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrdonne = event.target.files[0];
        this.nomOrdonEnf = this.selectOrdonne.name;
        console.log(this.nomOrdon);
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    BonLettreComponent.prototype.showNotification = function (from, align, idtype, note) {
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
    /////////////////////////////////Save Lettre de Garantie
    BonLettreComponent.prototype.BonNowLettre = function () {
        var _this = this;
        var _a;
        // this.nom=this.bon.ipm_employe.prenom
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        this.bonlettre.ipm_employe = this.message;
        this.bonlettre.dateEtablissement = new Date();
        this.addPrestataire.code_prestataire = this.idp;
        this.bonlettre.ipm_prestataire = JSON.parse(JSON.stringify(this.addPrestataire));
        this.bonlettre.ipm_utilisateur = this.user;
        this.bonlettre.motif = this.motif;
        if (this.enfChoisi) {
            this.bonlettre.ipm_enfant = this.enfChoisi;
        }
        if (this.conjChoisi) {
            this.bonlettre.ipm_conjoint = this.conjChoisi;
        }
        this.bonlettre.ordonnance = (_a = this.selectOrdonne) === null || _a === void 0 ? void 0 : _a.name;
        this.bonlettre.numeroBon = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        if (this.bonlettre.ipm_employe && this.bonlettre.ipm_prestataire && this.bonlettre.numeroBon &&
            this.bonlettre.dateEtablissement) {
            this.bon_lettreService.SaveBonLettre(this.bonlettre).subscribe(function (data) {
                _this.upload();
            });
            this.bon_lettreService.uploadFile(this.selectOrdonne).subscribe(function (data) { });
            //this.toastr.success( 'Ajouter Faite avec Success');
            console.log(this.b);
            console.log(this.b.ipm_employe);
            console.log(this.b.ipm_prestataire);
            this.showNotification('top', 'center', 1, '<b>bon lunetterie ajouté avec succées!!!</b> :');
        }
        else {
            this.showNotification('top', 'center', 3, "<b>bon lunetterie non ajouté</b> :");
        }
        // this.router.navigate(['/gestion-bons/Listebons']);
        console.log(this.motif);
    };
    /////////////////Save Bon Conjoint
    BonLettreComponent.prototype.BonConjoint = function () {
        var _this = this;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        // this.nom=this.bon.ipm_employe.prenom
        this.bonlettre.ipm_employe = this.message;
        this.bonlettre.dateEtablissement = new Date();
        this.addPrestataire.code_prestataire = this.idp;
        this.bonlettre.ipm_prestataire = JSON.parse(JSON.stringify(this.addPrestataire));
        this.addconjoint.idconj = this.idbconj;
        this.bonlettre.ipm_conjoint = JSON.parse(JSON.stringify(this.addconjoint));
        this.bonlettre.ipm_utilisateur = this.user;
        console.log(this.bonlettre.ipm_conjoint);
        console.log(this.b);
        console.log(this.b.ipm_employe);
        console.log(this.b.ipm_prestataire);
        this.bonlettre.ordonnance = this.selectOrdonne.name;
        //this.bon.prix_unitaire=this.prix_unitaire;
        this.bonlettre.numeroBon = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        if (this.bonlettre.ipm_employe && this.bonlettre.ipm_prestataire && this.bonlettre.numeroBon &&
            this.bonlettre.dateEtablissement && this.bonlettre.ordonnance) {
            this.bon_lettreService.SaveBonLettre(this.bonlettre).subscribe(function (data) {
                _this.uploadConjoint();
            });
            this.bon_lettreService.uploadFile(this.selectOrdonne).subscribe(function (data) { });
            console.log(this.bonlettre.ipm_prestataire);
            console.log(this.bonlettre);
            this.showNotification('top', 'center', 1, '<b>bon lunetterie ajouté avec succées!!!</b> :');
        }
        else {
            this.showNotification('top', 'center', 3, "<b>bon lunetterie non ajouté</b> :");
        }
    };
    /////////////////Save Bon Enfants
    BonLettreComponent.prototype.BonEnfant = function () {
        var _this = this;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        // this.nom=this.bon.ipm_employe.prenom
        this.bonlettre.ipm_employe = this.message;
        this.bonlettre.dateEtablissement = new Date();
        this.addPrestataire.code_prestataire = this.idp;
        this.bonlettre.ipm_prestataire = JSON.parse(JSON.stringify(this.addPrestataire));
        this.addenfant.idenf = this.idbenf;
        this.bonlettre.ipm_utilisateur = this.user;
        //this.bonlettre.ipm_enfant=JSON.parse(JSON.stringify(this.addenfant))
        console.log(this.bonlettre.ipm_enfant);
        console.log(this.b);
        console.log(this.b.ipm_employe);
        console.log(this.b.ipm_prestataire);
        this.bonlettre.ordonnance = this.selectOrdonne.name;
        this.bonlettre.numeroBon = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        if (this.bonlettre.ipm_employe && this.bonlettre.ipm_prestataire && this.bonlettre.numeroBon &&
            this.bonlettre.dateEtablissement && this.bonlettre.ordonnance) {
            this.bon_lettreService.SaveBonLettre(this.bonlettre).subscribe(function (data) {
                _this.uploadEnfant();
            });
            this.bon_lettreService.uploadFile(this.selectOrdonne).subscribe(function (data) { });
            console.log(this.bonlettre.ipm_prestataire);
            console.log(this.bonlettre);
            this.showNotification('top', 'center', 1, '<b>bon lunetterie ajouté avec succées!!!</b> :');
        }
        else {
            this.showNotification('top', 'center', 3, "<b>bon lunetterie non ajouté</b> :");
        }
    };
    /////////////Recuperer un enfant pour lui choisir bon
    BonLettreComponent.prototype.getenfantbon = function (enfant) {
        var _this = this;
        this.idbenf = enfant.idenf;
        this.enfChoisi = enfant;
        this.enf_service.getEnfantById(enfant.idenf).subscribe(function (data) {
            _this.messageenfant = data;
            console.log(_this.messageenfant);
            var date = _this.messageenfant.date_nais_enfant;
            console.log(date);
            var b = new Date(date);
            var ttoday = new Date();
            _this.AgeEnfant = ttoday.getFullYear() - b.getFullYear();
            var m = ttoday.getMonth() - b.getMonth();
            console.log(_this.message.date_nais);
            console.log(ttoday);
            if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
                _this.AgeEnfant--;
                // console.log(this.messageconjoint.date_naiss_conj);
            }
            console.log(_this.AgeEnfant);
        });
    };
    /////////////Recuperer un coinjoint pour lui choisir bon
    BonLettreComponent.prototype.getconjointbon = function (conjoint) {
        var _this = this;
        this.conjChoisi = conjoint;
        this.idbconj = conjoint.idconj;
        this.conj_service.getConjointById(conjoint.idconj).subscribe(function (data) {
            _this.messageconjoint = data;
            console.log(_this.messageconjoint);
            var date = _this.messageconjoint.date_naiss_conj;
            console.log(date);
            var b = new Date(date);
            var ttoday = new Date();
            _this.AgeConjoint = ttoday.getFullYear() - b.getFullYear();
            var m = ttoday.getMonth() - b.getMonth();
            console.log(_this.message.date_nais);
            console.log(m);
            if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
                _this.AgeConjoint--;
                // console.log(this.messageconjoint.date_naiss_conj);
            }
            console.log(_this.AgeConjoint);
        });
    };
    BonLettreComponent.prototype.retourserach = function () {
        console.log('************************************');
        window.location.reload();
    };
    /////////////////Imprimer Lettre de G
    BonLettreComponent.prototype.upload = function () {
        var _a, _b, _c, _d, _e, _f;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        var imgData = '/ipm-fronte/assets/img_poste/header1.png';
        var col = [["Quantité", "Designation", "P.unitaire", "Montant"]];
        var rows = [];
        var ipm1 = (_a = this.message) === null || _a === void 0 ? void 0 : _a.prenom;
        var ipm2 = (_b = this.message) === null || _b === void 0 ? void 0 : _b.nom;
        var sexe = (_c = this.message) === null || _c === void 0 ? void 0 : _c.sexe;
        console.log(ipm2);
        var prestataire = this.p;
        var ageE = this.AgeEmploye;
        var Ncarnet = this.message.numero_carnet;
        var ipm3 = (_d = this.message.ipmService) === null || _d === void 0 ? void 0 : _d.type_service;
        var ipm4 = (_e = this.message) === null || _e === void 0 ? void 0 : _e.matricule;
        var ipm5 = (_f = this.message) === null || _f === void 0 ? void 0 : _f.reference;
        var numBonEm = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            //   startY:75,
            //   head:col,
            //    body:rows,
            //   margin:{ horizontal:10},
            //   styles:{overflow:"linebreak"},
            //   bodyStyles:{valign:"top"},
            //   theme:"grid",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                doc.addImage(imgData, 'JPEG', 15, 5, 180, 20);
                doc.setFontSize(15);
                doc.text("", 72, 46);
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(60, 30, 105, 20);
                doc.setFillColor(240, 240, 240);
                doc.rect(13, 65, 185, 35, 'F');
                //RECTANGLE PAGE
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(10, 100, 190, 170);
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("BON DE COMMANDE", 85, 36);
                doc.text("POUR LETTRE DE GARANTIE", 70, 45);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 60);
                doc.text("Dakar, le :", 150, 60);
                doc.text("N° Bon : " + numBonEm, 13, 60);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 60);
                doc.setFontSize(12);
                doc.text("Malade : " + ipm1 + " " + ipm2, 15, 75);
                //doc.text(ipm1+ " " +ipm2,40,75)
                //doc.text(,80,75) 
                doc.text("Matricule : " + ipm4, 120, 75);
                doc.text("Sexe : " + sexe, 163, 75);
                doc.setFontSize(12);
                doc.text("N Carnet :", 15, 85);
                doc.text("" + Ncarnet, 40, 85);
                doc.text("Age : " + ageE, 80, 85);
                // doc.text("Nombre D'article :",120,85)
                // doc.text(""+Narticle,160,85)
                // doc.text("Malade:",15,95)
                // doc.text(ipm5,40,95)
                // doc.text(ipm6,80,95)
                doc.text("Service :", 113, 85);
                doc.text(ipm3, 130, 85);
                doc.text("Prestataire :", 15, 95);
                doc.text(prestataire, 40, 95);
                //  doc.text("N° Ref:",15,95)
                //  doc.text(ipm5,50,95)
                doc.setFontSize(12);
                doc.text("Monsieur,", 15, 110);
                doc.text("Nous avons l'honneur de vous signaler que les frais de versement sont garantis par notre ", 15, 125);
                //  doc.text("de:",15,125)
                //  doc.text("----------------------",15,130)
                doc.text("  institution :", 15, 130);
                doc.text("Nous vous serions reconnaissant de bien vouloir nous faire parvenir votre facture dans un délai", 15, 143);
                doc.text(" n'excédant pas deux (02) mois après la date d'établissement de la présente lettre", 15, 150);
                doc.text("Veuillez agréer ,Monsieur,l'expression de notre considération distinguée", 15, 168);
                doc.text("Le Gérant National", 150, 200);
                doc.setTextColor("#8C1C13");
                doc.text("NB:Nous retourner deux exemplaires avec la facture", 15, 240);
                doc.text("--------------------------------------------------------------------------", 15, 250);
                doc.setTextColor("");
                doc.setFontSize(10);
                doc.text("Siège Social:Immeuble Direction Générale Rez de Chaussée", 100, 260);
                doc.text("8.Rue Abd.6.M.Paraine BP:11002 Dakar (Sénégal)", 100, 265);
            }
        });
        doc.output("dataurlnewwindow");
        // let data = document.getElementById('noticeModal'); 
        // const printContents = document.getElementById('noticeModal').innerHTML;
        //    const originalContents = document.body.innerHTML;
        //    document.body.innerHTML = printContents;
        //    window.print();
        //    document.body.innerHTML = originalContents;
    };
    BonLettreComponent.prototype.uploadConjoint = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        var imgData = '/ipm-fronte/assets/img_poste/header1.png';
        var col = [["Quantité", "Designation", "P.unitaire", "Montant"]];
        var rows = [];
        var ipm1 = (_a = this.message) === null || _a === void 0 ? void 0 : _a.prenom;
        var ipm2 = (_b = this.message) === null || _b === void 0 ? void 0 : _b.nom;
        console.log(ipm2);
        var prestataire = this.p;
        var ageC = this.AgeConjoint;
        var Ncarnet = this.message.numero_carnet;
        var ipm3 = (_c = this.message.ipmService) === null || _c === void 0 ? void 0 : _c.type_service;
        var ipm4 = (_d = this.message) === null || _d === void 0 ? void 0 : _d.matricule;
        var ipm5 = (_e = this.messageconjoint) === null || _e === void 0 ? void 0 : _e.prenom_conjoint;
        var ipm6 = (_f = this.messageconjoint) === null || _f === void 0 ? void 0 : _f.nom_conjoint;
        var sexe = (_g = this.messageconjoint) === null || _g === void 0 ? void 0 : _g.sexe_conjoint;
        var numBonConj = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            //   startY:75,
            //   head:col,
            //    body:rows,
            //   margin:{ horizontal:10},
            //   styles:{overflow:"linebreak"},
            //   bodyStyles:{valign:"top"},
            //   theme:"grid",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                doc.addImage(imgData, 'JPEG', 15, 5, 180, 20);
                doc.setFontSize(15);
                doc.text("", 72, 46);
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(60, 30, 105, 20);
                doc.setFillColor(240, 240, 240);
                doc.rect(13, 65, 185, 35, 'F');
                //RECTANGLE PAGE
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(10, 100, 190, 170);
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("BON DE COMMANDE", 85, 36);
                doc.text("POUR LETTRE DE GARANTIE", 70, 45);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 60);
                doc.text("N° BON : " + numBonConj, 13, 60);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 60);
                doc.setFontSize(12);
                doc.text("Participant :  " + ipm1 + " " + ipm2, 15, 75);
                //doc.text(ipm1,40,75)
                //doc.text(ipm2,80,75) 
                doc.text("Matricule:", 120, 75);
                doc.text(ipm4, 140, 75);
                doc.text("Malade :  " + ipm5 + " " + ipm6, 15, 85);
                doc.text("Sexe :  " + sexe, 145, 85);
                //doc.text(ipm5,40,85)
                //doc.text(ipm6,80,85) 
                doc.setFontSize(12);
                doc.text("N Carnet : " + Ncarnet, 120, 85);
                doc.text("Age : " + ageC, 80, 85);
                //doc.text(""+Ncarnet,140,85)
                // doc.text("Nombre D'article :",120,85)
                // doc.text(""+Narticle,160,85)
                // doc.text("Malade:",15,95)
                // doc.text(ipm5,40,95)
                // doc.text(ipm6,80,95)
                doc.text("Service :", 100, 95);
                doc.text(ipm3, 120, 95);
                doc.text("Prestataire :", 15, 95);
                doc.text(prestataire, 40, 95);
                //  doc.text("N° Ref:",15,95)
                //  doc.text(ipm5,50,95)
                doc.setFontSize(12);
                doc.text("Monsieur,", 15, 110);
                doc.text("Nous avons l'honneur de vous signaler que les frais de versement sont garantis par notre ", 15, 125);
                //  doc.text("de:",15,125)
                //  doc.text("----------------------",15,130)
                doc.text("  institution :", 15, 130);
                doc.text("Nous vous serions reconnaissant de bien vouloir nous faire parvenir votre facture dans un délai", 15, 143);
                doc.text(" n'excédant pas deux (02) mois après la date d'établissement de la présente lettre", 15, 150);
                doc.text("Veuillez agréer ,Monsieur,l'expression de notre considération distinguée", 15, 168);
                doc.text("Le Gérant National", 150, 200);
                doc.setTextColor("#8C1C13");
                doc.text("NB:Nous retourner deux exemplaires avec la facture", 15, 240);
                doc.text("--------------------------------------------------------------------------", 15, 250);
                doc.setTextColor("");
                doc.setFontSize(10);
                doc.text("Siège Social:Immeuble Direction Générale Rez de Chaussée", 100, 260);
                doc.text("8.Rue Abd.6.M.Paraine BP:11002 Dakar (Sénégal)", 100, 265);
            }
        });
        doc.output("dataurlnewwindow");
        // let data = document.getElementById('noticeModal'); 
        // const printContents = document.getElementById('noticeModal').innerHTML;
        //    const originalContents = document.body.innerHTML;
        //    document.body.innerHTML = printContents;
        //    window.print();
        //    document.body.innerHTML = originalContents;
    };
    BonLettreComponent.prototype.viderConjoint = function () {
        this.findByMatricule();
    };
    BonLettreComponent.prototype.viderEnfant = function () {
        this.findByMatricule();
    };
    BonLettreComponent.prototype.uploadEnfant = function () {
        var _a, _b, _c, _d, _e, _f;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        var imgData = '/ipm-fronte/assets/img_poste/header1.png';
        var col = [["Quantité", "Designation", "P.unitaire", "Montant"]];
        var rows = [];
        var ipm1 = (_a = this.message) === null || _a === void 0 ? void 0 : _a.prenom;
        var ipm2 = (_b = this.message) === null || _b === void 0 ? void 0 : _b.nom;
        console.log(ipm2);
        var prestataire = this.p;
        var ageEn = this.AgeEnfant;
        var Ncarnet = this.message.numero_carnet;
        var ipm3 = (_c = this.message.ipmService) === null || _c === void 0 ? void 0 : _c.type_service;
        var ipm4 = (_d = this.message) === null || _d === void 0 ? void 0 : _d.matricule;
        var ipm5 = this.messageenfant.prenom_enfant;
        var ipm6 = (_e = this.messageenfant) === null || _e === void 0 ? void 0 : _e.nom_enfant;
        var sexe = (_f = this.messageenfant) === null || _f === void 0 ? void 0 : _f.sexe_enfant;
        var numBonEnf = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            //   startY:75,
            //   head:col,
            //    body:rows,
            //   margin:{ horizontal:10},
            //   styles:{overflow:"linebreak"},
            //   bodyStyles:{valign:"top"},
            //   theme:"grid",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                doc.addImage(imgData, 'JPEG', 15, 5, 180, 20);
                doc.setFontSize(15);
                doc.text("", 72, 46);
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(60, 30, 105, 20);
                doc.setFillColor(240, 240, 240);
                doc.rect(13, 65, 185, 35, 'F');
                //RECTANGLE PAGE
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(10, 100, 190, 170);
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("BON DE COMMANDE", 85, 36);
                doc.text("POUR LETTRE DE GARANTIE", 70, 45);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 60);
                doc.text("N° BON : " + numBonEnf, 13, 60);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 60);
                doc.setFontSize(12);
                doc.text("Participant : " + ipm1 + " " + ipm2, 15, 75);
                //doc.text(ipm1,40,75)
                //doc.text(ipm2,80,75) 
                doc.text("Matricule:", 120, 75);
                doc.text(ipm4, 140, 75);
                doc.text("Malade : " + ipm5 + " " + ipm6, 15, 85);
                doc.text("Sexe : " + sexe, 100, 85);
                //doc.text(ipm5,40,85)
                //doc.text(ipm6,80,85) 
                doc.setFontSize(12);
                doc.text("N Carnet : " + Ncarnet, 140, 85);
                doc.text("Age : " + ageEn, 80, 85);
                doc.text("Service :", 100, 95);
                doc.text(ipm3, 120, 95);
                doc.text("Prestataire :", 15, 95);
                doc.text(prestataire, 40, 95);
                //  doc.text("N° Ref:",15,95)
                //  doc.text(ipm5,50,95)
                doc.setFontSize(12);
                doc.text("Monsieur,", 15, 110);
                doc.text("Nous avons l'honneur de vous signaler que les frais de versement sont garantis par notre ", 15, 125);
                //  doc.text("de:",15,125)
                //  doc.text("----------------------",15,130)
                doc.text("  institution :", 15, 130);
                doc.text("Nous vous serions reconnaissant de bien vouloir nous faire parvenir votre facture dans un délai", 15, 143);
                doc.text(" n'excédant pas deux (02) mois après la date d'établissement de la présente lettre", 15, 150);
                doc.text("Veuillez agréer ,Monsieur,l'expression de notre considération distinguée", 15, 168);
                doc.text("Le Gérant National", 150, 200);
                doc.setTextColor("#8C1C13");
                doc.text("NB:Nous retourner deux exemplaires avec la facture", 15, 240);
                doc.text("--------------------------------------------------------------------------", 15, 250);
                doc.setTextColor("");
                doc.setFontSize(10);
                doc.text("Siège Social:Immeuble Direction Générale Rez de Chaussée", 100, 260);
                doc.text("8.Rue Abd.6.M.Paraine BP:11002 Dakar (Sénégal)", 100, 265);
            }
        });
        doc.output("dataurlnewwindow");
        // let data = document.getElementById('noticeModal'); 
        // const printContents = document.getElementById('noticeModal').innerHTML;
        //    const originalContents = document.body.innerHTML;
        //    document.body.innerHTML = printContents;
        //    window.print();
        //    document.body.innerHTML = originalContents;
    };
    BonLettreComponent.ctorParameters = function () { return [
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_17__["EmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_19__["PrestataireService"] },
        { type: src_app_Services_bon_service__WEBPACK_IMPORTED_MODULE_14__["BonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_16__["ConjointService"] },
        { type: src_app_Services_bonlettre_service__WEBPACK_IMPORTED_MODULE_15__["BonlettreService"] },
        { type: src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_18__["EnfantService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_20__["KeycloakService"] },
        { type: _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_21__["UtilisateurService"] }
    ]; };
    BonLettreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-bon-lettre',
            template: _raw_loader_bon_lettre_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_bon_lettre_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_17__["EmployeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_19__["PrestataireService"], src_app_Services_bon_service__WEBPACK_IMPORTED_MODULE_14__["BonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_16__["ConjointService"],
            src_app_Services_bonlettre_service__WEBPACK_IMPORTED_MODULE_15__["BonlettreService"],
            src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_18__["EnfantService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], keycloak_angular__WEBPACK_IMPORTED_MODULE_20__["KeycloakService"], _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_21__["UtilisateurService"]])
    ], BonLettreComponent);
    return BonLettreComponent;
}());



/***/ }),

/***/ "F4X4":
/*!******************************************************************************!*\
  !*** ./src/app/gestion-bons/bon-consultation/bon-consultation.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tYm9ucy9ib24tY29uc3VsdGF0aW9uL2Jvbi1jb25zdWx0YXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "FJeX":
/*!*****************************************************************************!*\
  !*** ./src/app/gestion-bons/bon-consultation/bon-consultation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BonConsultationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonConsultationComponent", function() { return BonConsultationComponent; });
/* harmony import */ var _raw_loader_bon_consultation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./bon-consultation.component.html */ "ibBo");
/* harmony import */ var _bon_consultation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bon-consultation.component.css */ "F4X4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/Employe */ "5GYJ");
/* harmony import */ var src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Models/Enfant */ "yLBP");
/* harmony import */ var src_app_Services_bonlettre_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/bonlettre.service */ "gkPT");
/* harmony import */ var src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/conjoint.service */ "NbTU");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Services/enfant.service */ "ABBt");
/* harmony import */ var src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Services/prestataire.service */ "3m7+");
/* harmony import */ var src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Services/prestation.service */ "E7Th");
/* harmony import */ var _Models_IPM_Bon_Consultation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Models/IPM_Bon_Consultation */ "4q9j");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Services/utilisateur.service */ "MVAf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var BonConsultationComponent = /** @class */ (function () {
    function BonConsultationComponent(emp_service, router, pres_service, route, conj_service, enf_service, datePipe, Serviceprestation, bon_lettreService, keycloak, user_Service) {
        var _this = this;
        this.emp_service = emp_service;
        this.router = router;
        this.pres_service = pres_service;
        this.route = route;
        this.conj_service = conj_service;
        this.enf_service = enf_service;
        this.datePipe = datePipe;
        this.Serviceprestation = Serviceprestation;
        this.bon_lettreService = bon_lettreService;
        this.keycloak = keycloak;
        this.user_Service = user_Service;
        this.employes = [];
        this.enfant = new src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_8__["Enfant"]();
        this.enfants = [];
        this.conjoints = [];
        this.currentemploye = new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_7__["Employe"]();
        this.bonlettre = new _Models_IPM_Bon_Consultation__WEBPACK_IMPORTED_MODULE_15__["IPM_Bon_Consultation"](0, "", "", "", "", null, null, null, null, null, null, null, null, null, null, null);
        this.desactive = false;
        this.maDate = new Date();
        this.keycloak.loadUserProfile().then(function (res) {
            console.log(res);
            _this.user = res;
            _this.MonUser = _this.user;
            _this.getUserByUsernameF(res.username);
        });
    }
    BonConsultationComponent.prototype.getUserByUsernameF = function (username) {
        var _this = this;
        console.log(username);
        return this.user_Service.getUserByUsername(username).subscribe(function (data) {
            console.log(data);
            _this.user = data;
            console.log(_this.user.prenom);
            console.log(_this.user.nom);
        });
    };
    BonConsultationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pres_service.getTypePestataires('Hopital').subscribe(function (pres) {
            // console.log(cat);
            _this.lprestataires = pres;
            console.log(_this.lprestataires);
        });
        this.id = this.route.snapshot.params['id'];
        this.emp_service.getEmployeById(this.id).subscribe(function (result) {
            _this.currentemploye = result;
        });
        this.Serviceprestation.getAllPrestation().subscribe(function (pres) {
            // console.log(cat);
            _this.listPrestation = pres;
            // for (let i = 0; i < this.listPrestation.length; i++) {
            //   let emmployesdansPanier = this.listPrestation[i].code_prestation;
            //   //mettre les employes  dans la variable tableau avec tous les employes
            //   AllPrestations.push(emmployesdansPanier);
            //   console.log(AllPrestations);
            // }
            //  this.listPrestation.forEach(element =>{
            //    element.code_prestation
            //    console.log(element.code_prestation);
            //  })
            //console.log(this.listPrestation);
        });
        this.pres_service.getBon().subscribe(function (pres) {
            // console.log(cat);
            _this.listB = pres;
            console.log(_this.listB[_this.listB.length - 1].numeroBon.slice(4));
            _this.numero = _this.listB[_this.listB.length - 1].numeroBon.slice(4);
            _this.numero++;
            console.log(_this.numero);
        });
    };
    ////////////////////Rechercher par matricule 
    BonConsultationComponent.prototype.findByMatricule = function () {
        var _this = this;
        ///////Rechercher l'employé
        this.emp_service.getEmployeByMatricule(this.matricule).subscribe(function (data) {
            _this.mess = data;
            if (_this.mess) {
                console.log(_this.mess);
            }
            else {
                _this.mess1 = "yess";
                console.log("charlessssssssssssss");
                _this.showNotification('top', 'center', 3, "<b>matricule n'existe pas</b> :");
            }
            if (data.statut == true) {
                _this.message = data;
            }
            else {
                console.log("age");
                _this.mess1 = "yess";
                _this.showNotification('top', 'center', 3, "<b>agent de numero matricule " + _this.matricule + " ne beneficie plus de L'IPM</b> :");
            }
            _this.matr = _this.message.idemp;
            console.log(_this.matr);
            _this.enfant = _this.message;
            console.log(_this.enfant);
            var date = _this.message.date_nais;
            //this.datePipe.transform(this.message.date_nais, "dd-MM-yyyy");
            //const date =this.message.date_nais
            console.log(date);
            var b = new Date(date);
            var ttoday = new Date();
            _this.AgeEmploye = ttoday.getFullYear() - b.getFullYear();
            var m = ttoday.getMonth() - b.getMonth();
            console.log(_this.message.date_nais);
            console.log(m);
            if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
                _this.AgeEmploye--;
                // console.log(this.messageconjoint.date_naiss_conj);
            }
            console.log(_this.message);
            _this.emp_service.getlistBonConsult(_this.message.idemp).subscribe(function (res) {
                _this.listBon = res;
                console.log(_this.listBon);
            });
            console.log(_this.AgeEmploye);
            ///////Rechercher les enfants en fontion de l'employé
            _this.enf_service.listeEnfant(_this.message.idemp).subscribe(function (enfs) {
                _this.enfants = enfs;
                _this.enfants.forEach(function (ele) {
                    if (ele.date_nais_enfant) {
                        //convert date again to type Date
                        var bdate = new Date(ele.date_nais_enfant);
                        var timeDiff = Math.abs(Date.now() - bdate.getTime());
                        _this.agenft = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                    }
                    console.log(_this.agenft);
                    if (_this.agenft > 21) {
                        console.log("Age atteinte impossible de ce beneficier à l'ipm :", _this.agenft);
                        ele.active = false;
                        console.log(ele.active);
                        console.log("age depasse");
                    }
                    else if (_this.agenft < 21) {
                        console.log("Voici l'age :", _this.agenft);
                        ele.active = true;
                        console.log(ele.active);
                        console.log("age non depasse");
                    }
                });
                console.log(_this.enfants);
                _this.enfants = _this.enfants.filter(function (serv) { return serv.active == true; });
            });
            ///////Rechercher les conjoints en fontion de l'employé
            _this.conj_service.listeConjoint(_this.message.idemp).subscribe(function (conjs) {
                _this.conjoints = conjs;
                console.log(_this.conjoints);
            });
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
    /////////////Recuperer un enfant pour lui choisir bon
    BonConsultationComponent.prototype.getenfantbon = function (enfant) {
        var _this = this;
        this.idbenf = enfant.idenf;
        this.enfChoisi = enfant;
        this.enf_service.getEnfantById(enfant.idenf).subscribe(function (data) {
            _this.messageenfant = data;
            console.log(_this.messageenfant);
            var date = _this.messageenfant.date_nais_enfant;
            console.log(date);
            var b = new Date(date);
            var ttoday = new Date();
            _this.AgeEnfant = ttoday.getFullYear() - b.getFullYear();
            var m = ttoday.getMonth() - b.getMonth();
            console.log(_this.message.date_nais);
            console.log(ttoday);
            if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
                _this.AgeEnfant--;
                // console.log(this.messageconjoint.date_naiss_conj);
            }
            console.log(_this.AgeEnfant);
        });
    };
    /////////////Recuperer un coinjoint pour lui choisir bon
    BonConsultationComponent.prototype.getconjointbon = function (conjoint) {
        var _this = this;
        this.conjChoisi = conjoint;
        this.idbconj = conjoint.idconj;
        this.conj_service.getConjointById(conjoint.idconj).subscribe(function (data) {
            _this.messageconjoint = data;
            console.log(_this.messageconjoint);
            var date = _this.messageconjoint.date_naiss_conj;
            console.log(date);
            var b = new Date(date);
            var ttoday = new Date();
            _this.AgeConjoint = ttoday.getFullYear() - b.getFullYear();
            var m = ttoday.getMonth() - b.getMonth();
            console.log(_this.message.date_nais);
            console.log(m);
            if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
                _this.AgeConjoint--;
                // console.log(this.messageconjoint.date_naiss_conj);
            }
            console.log(_this.AgeConjoint);
        });
    };
    BonConsultationComponent.prototype.getPrestation = function (pret) {
        this.prestation = pret;
        this.motif = this.prestation.libelle;
        this.prestationC = this.prestation.libelle;
        console.log(this.prestation, pret);
    };
    BonConsultationComponent.prototype.getnom = function (prest) {
        var _this = this;
        this.prestatair = prest;
        console.log(this.prestatair);
        this.pres_service.getAllPrestataires().subscribe(function (pres) {
            console.log(prest.nom_prestataire);
            _this.p = prest.nom_prestataire;
            _this.idp = prest.code_prestataire;
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
        });
    };
    BonConsultationComponent.prototype.selectOrdonn = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrdonne = event.target.files[0];
        this.nomOrdon = this.selectOrdonne.name;
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    BonConsultationComponent.prototype.selectOrdonnConj = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrdonne = event.target.files[0];
        this.nomOrdonConj = this.selectOrdonne.name;
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    BonConsultationComponent.prototype.selectOrdonnEnf = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrdonne = event.target.files[0];
        this.nomOrdonEnf = this.selectOrdonne.name;
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    /////////////////////////////////Save Lettre de Garantie
    BonConsultationComponent.prototype.BonConsultation = function () {
        var _this = this;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        this.numBEm = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        //=0+''+dayBEm.getDate()+''+this.mois+''+this.strBEm.charAt(2)+''+this.strBEm.charAt(3)+''+this.AgeEmploye
        console.log(this.numBEm);
        this.bonlettre.numeroBon = this.numBEm;
        // this.nom=this.bon.ipm_employe.prenom
        this.bonlettre.ipm_employe = this.message;
        //this.addPrestataire.code_prestataire=this.idp;
        this.bonlettre.ipm_prestataire = this.prestatair;
        this.bonlettre.ipm_prestation = this.prestation;
        this.bonlettre.dateEtablissement = new Date();
        this.bonlettre.motif = this.motif;
        this.bonlettre.ipm_utilisateur = this.user;
        if (this.enfChoisi) {
            this.bonlettre.ipm_enfant = this.enfChoisi;
        }
        if (this.conjChoisi) {
            this.bonlettre.ipm_conjoint = this.conjChoisi;
        }
        //this.bonlettre.ordonnance=this.selectOrdonne.name
        console.log(this.bonlettre);
        if (this.bonlettre.ipm_prestataire && this.bonlettre.ipm_employe && this.bonlettre.ipm_prestation && this.bonlettre.dateEtablissement) {
            this.bon_lettreService.SaveBonConsultation(this.bonlettre).subscribe(function (data) {
                _this.upload();
            });
            this.showNotification('top', 'center', 1, '<b>bon Consultation ajouté avec succées!!!</b> :');
        }
        else {
            this.showNotification('top', 'center', 3, "<b>bon Consultation non ajouté</b> :");
        }
    };
    BonConsultationComponent.prototype.retourserach = function () {
        console.log('************************************');
        window.location.reload();
    };
    BonConsultationComponent.prototype.viderConjoint = function () {
        this.findByMatricule();
    };
    BonConsultationComponent.prototype.viderEnfant = function () {
        this.findByMatricule();
    };
    /////////////////Save Bon Conjoint
    BonConsultationComponent.prototype.BonConjoint = function () {
        var _this = this;
        // this.nom=this.bon.ipm_employe.prenom
        this.bonlettre.ipm_employe = this.message;
        //  this.addPrestataire.code_prestataire=this.idp;
        //  this.bonlettre.ipm_prestataire=JSON.parse(JSON.stringify(this.addPrestataire));
        //  this.addconjoint.idconj=this.idbconj
        //  this.bonlettre.ipm_conjoint=JSON.parse(JSON.stringify(this.addconjoint))
        this.bonlettre.ipm_prestataire = this.prestatair;
        this.bonlettre.ipm_prestation = this.prestation;
        this.bonlettre.dateEtablissement = new Date();
        console.log(this.bonlettre.ipm_conjoint);
        this.bonlettre.ipm_conjoint = this.conjChoisi;
        this.bonlettre.ipm_utilisateur = this.user;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        // console.log( this.b.ipm_employe);
        //console.log(this.b.ipm_prestataire);
        // this.bonlettre.ordonnance=this.selectOrdonne.name
        //this.bon.prix_unitaire=this.prix_unitaire;
        this.numBonConj = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        this.bonlettre.numeroBon = this.numBonConj;
        if (this.bonlettre.dateEtablissement && this.bonlettre.ipm_conjoint && this.bonlettre.ipm_prestataire && this.bonlettre.ipm_prestation) {
            this.bon_lettreService.SaveBonConsultation(this.bonlettre).subscribe(function (data) {
                _this.uploadConjoint();
            });
            console.log(this.bonlettre.ipm_prestataire);
            console.log(this.bonlettre);
            this.showNotification('top', 'center', 1, '<b>bon Consultation ajouté avec succées!!!</b> :');
        }
        else {
            this.showNotification('top', 'center', 3, "<b>bon Consultation non ajouté</b> :");
        }
    };
    /////////////////Save Bon Enfants
    BonConsultationComponent.prototype.BonEnfant = function () {
        var _this = this;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        // this.nom=this.bon.ipm_employe.prenom
        this.bonlettre.ipm_employe = this.message;
        //  this.addPrestataire.code_prestataire=this.idp;
        //  this.bonlettre.ipm_prestataire=JSON.parse(JSON.stringify(this.addPrestataire));
        // this.addenfant.idenf=this.enfChoisi
        this.bonlettre.ipm_enfant = this.enfChoisi;
        this.bonlettre.ipm_prestataire = this.prestatair;
        this.bonlettre.ipm_prestation = this.prestation;
        console.log(this.bonlettre.ipm_prestataire, this.bonlettre.ipm_enfant);
        console.log(this.bonlettre.ipm_prestation);
        //console.log( this.b.ipm_employe);
        //console.log(this.b.ipm_prestataire);
        this.bonlettre.dateEtablissement = new Date();
        this.bonlettre.ipm_utilisateur = this.user;
        //this.bonlettre.ordonnance=this.selectOrdonne.name
        this.bonlettre.numeroBon = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        if (this.bonlettre.ipm_prestataire && this.bonlettre.ipm_enfant &&
            this.bonlettre.dateEtablissement && this.bonlettre.ipm_prestation) {
            this.bon_lettreService.SaveBonConsultation(this.bonlettre).subscribe(function (data) {
                _this.uploadEnfant();
            });
            console.log(this.bonlettre.ipm_prestataire);
            console.log(this.bonlettre);
            this.showNotification('top', 'center', 1, '<b>bon Consultation ajouté avec succées!!!</b> :');
        }
        else {
            this.showNotification('top', 'center', 3, "<b>bon Consultation non ajouté</b> :");
        }
    };
    BonConsultationComponent.prototype.showNotification = function (from, align, idtype, note) {
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
    ///////////////////////// Imprimer Bon Employé
    BonConsultationComponent.prototype.upload = function () {
        var _a;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        console.log(this.message);
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        var imgData = '/ipm-fronte/assets/img_poste/header1.png';
        var col = [["Consultation", "Designation", "Tarif", "Montant"]];
        var rows = [];
        //let tmp=[this.designation,this.nombre_article]
        for (var index = 1; index < 10; index++) {
            var tmp = [];
            rows.push(tmp);
            //rows.push(tmp)
            //rows.push()
        }
        var ipm1 = this.message.prenom;
        var ipm2 = this.message.nom;
        var ipm3 = this.p;
        var ageE = this.AgeEmploye;
        var prestatio = this.prestationC;
        var Pmalade = this.message.prenom;
        var Narticle = this.nombre_article;
        var Ncarnet = this.message.numero_carnet;
        var ipm4 = (_a = this.message.ipmService) === null || _a === void 0 ? void 0 : _a.type_service;
        var ipm = this.message.matricule;
        var sexe = this.message.sexe;
        var numBon = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        var prenonConnec = this.user.prenom;
        var nomConnec = this.user.nom;
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 100,
            head: col,
            body: rows,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "grid",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                doc.addImage(imgData, 'JPEG', 15, 5, 180, 20);
                doc.setFontSize(15);
                doc.text("", 72, 46);
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(60, 30, 105, 20);
                doc.setFillColor(240, 240, 240);
                doc.rect(13, 65, 185, 35, 'F');
                //doc.setFillColor(240,240,240)
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("BON DE COMMANDE", 85, 36);
                doc.text("POUR CONSULTATION", 84, 45);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 60);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 60);
                doc.setFontSize(12);
                doc.text("Malade : " + ipm1 + " " + ipm2, 15, 75);
                // doc.text(ipm1+" "+ipm,240,75)
                doc.setFontSize(12);
                //doc.text("",90,75)
                //doc.text(ipm2,80,75)
                doc.text("Matricule : " + ipm, 120, 75);
                doc.text("Sexe : " + sexe, 160, 75);
                doc.text("Prestation :", 120, 85);
                doc.text(prestatio, 143, 85);
                doc.text("N° Carnet :", 15, 85);
                doc.text("Age : " + ageE, 80, 85);
                doc.text("" + Ncarnet, 40, 85);
                doc.text("N° Bon : ", 15, 60);
                doc.text("" + numBon, 35, 60);
                //  doc.text("Nombre D'article :",120,85)
                //  doc.text(""+Narticle,160,85)
                //  doc.setFontSize(12)
                //  doc.text("MALADE :",15,85)
                //  doc.text(ipm1,40,85)
                //  doc.text("",15,85)
                //  doc.text(ipm2,80,85)
                doc.setFontSize(12);
                doc.text("Prestataire :", 15, 95);
                doc.text(ipm3, 40, 95);
                doc.setFontSize(12);
                doc.text("Services :", 93, 95);
                doc.text(ipm4, 113, 95);
                doc.text("Total :", 140, 180);
                doc.text("Demandeur", 150, 250);
                doc.text("" + prenonConnec + "   " + nomConnec, 15, 250);
            }
        });
        doc.output('dataurlnewwindow');
        // let data = document.getElementById('noticeModal'); 
        // const printContents = document.getElementById('noticeModal').innerHTML;
        //    const originalContents = document.body.innerHTML;
        //    document.body.innerHTML = printContents;
        //    window.print();
        //    document.body.innerHTML = originalContents;
    };
    BonConsultationComponent.prototype.uploadConjoint = function () {
        var _a, _b, _c, _d, _e, _f;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        var imgData = '/ipm-fronte/assets/img_poste/header1.png';
        var col = [["Consultation", "Designation", "Tarif", "Montant"]];
        var rows = [];
        // if(this.bon.ipm_employe=this.message.idemp){
        //let tmp=[this.designation,this.nombre_article]
        for (var index = 1; index < 10; index++) {
            var tmp = [];
            rows.push(tmp);
            // }
        }
        var ipm1 = (_a = this.message) === null || _a === void 0 ? void 0 : _a.prenom;
        var ipm2 = (_b = this.message) === null || _b === void 0 ? void 0 : _b.nom;
        var ipm3 = this.p;
        var sexe = (_c = this.messageconjoint) === null || _c === void 0 ? void 0 : _c.sexe_conjoint;
        var ageC = this.AgeConjoint;
        var ipm4 = (_d = this.message.ipmService) === null || _d === void 0 ? void 0 : _d.type_service;
        var ipm5 = (_e = this.messageconjoint) === null || _e === void 0 ? void 0 : _e.prenom_conjoint;
        var ipm6 = (_f = this.messageconjoint) === null || _f === void 0 ? void 0 : _f.nom_conjoint;
        var ipm = this.message.matricule;
        var prestatio = this.prestationC;
        var Ncarnet = this.message.numero_carnet;
        var numBon = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 100,
            head: col,
            body: rows,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "grid",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                doc.addImage(imgData, 'JPEG', 15, 5, 180, 20);
                doc.setFontSize(15);
                doc.text("", 72, 46);
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(60, 30, 105, 20);
                doc.setFillColor(240, 240, 240);
                doc.rect(13, 65, 185, 35, 'F');
                //doc.setFillColor(240,240,240)
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("BON DE COMMANDE", 85, 36);
                doc.text("POUR CONSULTATION", 85, 45);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 60);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 60);
                doc.setFontSize(12);
                doc.text("Participant : " + ipm1 + " " + ipm2, 15, 75);
                // doc.text(ipm1,40,75)
                //doc.text(ipm2,80,75) 
                doc.text("Matricule : " + ipm, 120, 75);
                doc.setFontSize(12);
                doc.text("N Carnet :", 15, 85);
                doc.text("Age : " + ageC, 80, 85);
                doc.text("N Bon :", 55, 85);
                doc.text("" + numBon, 75, 85);
                doc.text("" + Ncarnet, 40, 85);
                doc.text("Prestation :", 120, 85);
                doc.text(prestatio, 160, 85);
                doc.text("Malade :" + ipm5 + " " + ipm6, 15, 95);
                ////doc.text(ipm5,40,95)
                //doc.text(ipm6,80,95)
                doc.text("Sexe : " + sexe, 90, 95);
                doc.text("Prestataire :", 125, 95);
                doc.text(ipm3, 145, 95);
                doc.text("Total :", 140, 180);
            }
        });
        doc.output('dataurlnewwindow');
        // let data = document.getElementById('noticeModal'); 
        // const printContents = document.getElementById('noticeModal').innerHTML;
        //    const originalContents = document.body.innerHTML;
        //    document.body.innerHTML = printContents;
        //    window.print();
        //    document.body.innerHTML = originalContents;
    };
    BonConsultationComponent.prototype.uploadEnfant = function () {
        var _a, _b, _c, _d, _e;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        var imgData = '/ipm-fronte/assets/img_poste/header1.png';
        var col = [["Consultation", "Designation", "Tarif", "Montant"]];
        var rows = [];
        // if(this.bon.ipm_employe=this.message.idemp){
        //let tmp=[this.designation,this.nombre_article]
        for (var index = 1; index < 10; index++) {
            var tmp = [];
            rows.push(tmp);
            // }
        }
        var ipm1 = (_a = this.message) === null || _a === void 0 ? void 0 : _a.prenom;
        var ipm2 = (_b = this.message) === null || _b === void 0 ? void 0 : _b.nom;
        var ipm3 = this.p;
        var ageEn = this.AgeEnfant;
        var sexe = (_c = this.messageenfant) === null || _c === void 0 ? void 0 : _c.sexe_enfant;
        var ipm4 = (_d = this.message.ipmService) === null || _d === void 0 ? void 0 : _d.type_service;
        var ipm5 = this.messageenfant.prenom_enfant;
        var ipm6 = (_e = this.messageenfant) === null || _e === void 0 ? void 0 : _e.nom_enfant;
        var ipm = this.message.matricule;
        var prestatio = this.prestationC;
        var Ncarnet = this.message.numero_carnet;
        var numBon = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 100,
            head: col,
            body: rows,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "grid",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                doc.addImage(imgData, 'JPEG', 15, 5, 180, 20);
                doc.setFontSize(15);
                doc.text("", 72, 46);
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(60, 30, 105, 20);
                doc.setFillColor(240, 240, 240);
                doc.rect(13, 65, 185, 35, 'F');
                //doc.setFillColor(240,240,240)
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("BON DE COMMANDE", 85, 36);
                doc.text("POUR CONSULTATION", 85, 45);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 60);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 60);
                doc.setFontSize(12);
                doc.text("Participant : " + ipm1 + " " + ipm2, 15, 75);
                // doc.text(ipm1,40,75)
                //doc.text(ipm2,75,75) 
                doc.text("Matricule : " + ipm, 120, 75);
                doc.setFontSize(12);
                doc.text("N° Carnet :", 15, 85);
                doc.text("Age : " + ageEn, 80, 85);
                doc.text("" + Ncarnet, 40, 85);
                doc.text("N° Bon : ", 15, 60);
                doc.text("" + numBon, 35, 60);
                doc.text("Prestation :", 120, 85);
                doc.text(prestatio, 150, 85);
                doc.text("Malade :" + ipm5 + " " + ipm6, 15, 95);
                // doc.text(ipm5,40,95)
                //doc.text(ipm6,80,95)
                doc.text("Sexe : " + sexe, 90, 95);
                doc.text("Prestataire :" + ipm3, 125, 95);
                //doc.text(ipm3,145,95)
                doc.text("Total :", 140, 180);
            }
        });
        doc.output('dataurlnewwindow');
        // let data = document.getElementById('noticeModal'); 
        // const printContents = document.getElementById('noticeModal').innerHTML;
        //    const originalContents = document.body.innerHTML;
        //    document.body.innerHTML = printContents;
        //    window.print();
        //    document.body.innerHTML = originalContents;
    };
    BonConsultationComponent.ctorParameters = function () { return [
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_11__["EmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_13__["PrestataireService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_10__["ConjointService"] },
        { type: src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_12__["EnfantService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_14__["PrestationService"] },
        { type: src_app_Services_bonlettre_service__WEBPACK_IMPORTED_MODULE_9__["BonlettreService"] },
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_16__["KeycloakService"] },
        { type: _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_17__["UtilisateurService"] }
    ]; };
    BonConsultationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-bon-consultation',
            template: _raw_loader_bon_consultation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_bon_consultation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_11__["EmployeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_13__["PrestataireService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_10__["ConjointService"], src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_12__["EnfantService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], src_app_Services_prestation_service__WEBPACK_IMPORTED_MODULE_14__["PrestationService"],
            src_app_Services_bonlettre_service__WEBPACK_IMPORTED_MODULE_9__["BonlettreService"], keycloak_angular__WEBPACK_IMPORTED_MODULE_16__["KeycloakService"], _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_17__["UtilisateurService"]])
    ], BonConsultationComponent);
    return BonConsultationComponent;
}());



/***/ }),

/***/ "LmSd":
/*!*************************************************************!*\
  !*** ./src/app/gestion-bons/gestion-bons-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BonRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonRoutes", function() { return BonRoutes; });
/* harmony import */ var _ajout_bons_ajout_bons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajout-bons/ajout-bons.component */ "Mb6n");
/* harmony import */ var _bon_consultation_bon_consultation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bon-consultation/bon-consultation.component */ "FJeX");
/* harmony import */ var _bon_lettre_bon_lettre_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bon-lettre/bon-lettre.component */ "E+bH");
/* harmony import */ var _bon_lunetterie_bon_lunetterie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bon-lunetterie/bon-lunetterie.component */ "MgQi");
/* harmony import */ var _liste_bons_liste_bons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./liste-bons/liste-bons.component */ "k4JN");





var BonRoutes = [
    {
        path: '',
        children: [{
                path: 'Ajouterbons/:id',
                component: _ajout_bons_ajout_bons_component__WEBPACK_IMPORTED_MODULE_0__["AjoutBonsComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'Listebons',
                component: _liste_bons_liste_bons_component__WEBPACK_IMPORTED_MODULE_4__["ListeBonsComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'BonLettre',
                component: _bon_lettre_bon_lettre_component__WEBPACK_IMPORTED_MODULE_2__["BonLettreComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'BonConsultation',
                component: _bon_consultation_bon_consultation_component__WEBPACK_IMPORTED_MODULE_1__["BonConsultationComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'BonLunetterie',
                component: _bon_lunetterie_bon_lunetterie_component__WEBPACK_IMPORTED_MODULE_3__["BonLunetterieComponent"]
            }]
    },
];


/***/ }),

/***/ "MSLL":
/*!**************************************************!*\
  !*** ./src/app/Models/IPM_Bon_Pharmaceutique.ts ***!
  \**************************************************/
/*! exports provided: IPM_Bon_Pharmaceutique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPM_Bon_Pharmaceutique", function() { return IPM_Bon_Pharmaceutique; });
/* harmony import */ var _IPM_Bon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IPM_Bon */ "WQyP");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IPM_Bon_Pharmaceutique = /** @class */ (function (_super) {
    __extends(IPM_Bon_Pharmaceutique, _super);
    function IPM_Bon_Pharmaceutique(idbon, nombre_article, service, total, 
    //public date_etablissement:Date,
    quantite, designation, prix_unitaire, ipm_employe, ipm_prestataire, ipm_enfant, ordonnance, ipm_conjoint, ipm_prestation, numeroBon, dateEtablissement, ipm_utilisateur) {
        var _this = _super.call(this, idbon, total, ipm_employe, ipm_prestataire, ipm_enfant, ipm_conjoint, ipm_prestation, dateEtablissement, ipm_utilisateur) || this;
        _this.idbon = idbon;
        _this.nombre_article = nombre_article;
        _this.service = service;
        _this.total = total;
        _this.quantite = quantite;
        _this.designation = designation;
        _this.prix_unitaire = prix_unitaire;
        _this.ipm_employe = ipm_employe;
        _this.ipm_prestataire = ipm_prestataire;
        _this.ipm_enfant = ipm_enfant;
        _this.ordonnance = ordonnance;
        _this.ipm_conjoint = ipm_conjoint;
        _this.ipm_prestation = ipm_prestation;
        _this.numeroBon = numeroBon;
        _this.dateEtablissement = dateEtablissement;
        _this.ipm_utilisateur = ipm_utilisateur;
        return _this;
    }
    return IPM_Bon_Pharmaceutique;
}(_IPM_Bon__WEBPACK_IMPORTED_MODULE_0__["IPM_Bon"]));



/***/ }),

/***/ "Mb6n":
/*!*****************************************************************!*\
  !*** ./src/app/gestion-bons/ajout-bons/ajout-bons.component.ts ***!
  \*****************************************************************/
/*! exports provided: AjoutBonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutBonsComponent", function() { return AjoutBonsComponent; });
/* harmony import */ var _raw_loader_ajout_bons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ajout-bons.component.html */ "m1DS");
/* harmony import */ var _ajout_bons_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajout-bons.component.css */ "gzP8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/Employe */ "5GYJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var src_app_Services_bon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/bon.service */ "AhZP");
/* harmony import */ var src_app_Models_IPM_Bon_Pharmaceutique__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/IPM_Bon_Pharmaceutique */ "MSLL");
/* harmony import */ var src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/conjoint.service */ "NbTU");
/* harmony import */ var src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Models/Enfant */ "yLBP");
/* harmony import */ var src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/enfant.service */ "ABBt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Services/prestataire.service */ "3m7+");
/* harmony import */ var src_app_Models_Prestataire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Models/Prestataire */ "gL+i");
/* harmony import */ var src_app_Services_bon_pharmacie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Services/bon-pharmacie.service */ "xDD7");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AjoutBonsComponent = /** @class */ (function () {
    function AjoutBonsComponent(emp_service, fb, router, bon_service, conj_service, enf_service, route, pres_service, bonpharma) {
        this.emp_service = emp_service;
        this.router = router;
        this.bon_service = bon_service;
        this.conj_service = conj_service;
        this.enf_service = enf_service;
        this.route = route;
        this.pres_service = pres_service;
        this.bonpharma = bonpharma;
        this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](false);
        this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('auto');
        this.currentemploye = new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_3__["Employe"]();
        this.radio = 1;
        this.conjoints = [];
        this.currentprestataire = new src_app_Models_Prestataire__WEBPACK_IMPORTED_MODULE_13__["Prestataire"](0, "", "", "", "", "", "", "", "");
        this.enfants = [];
        this.enfant = new src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_9__["Enfant"](0, "", "", null, "", "", null, "");
        //bon:any
        this.bon = new src_app_Models_IPM_Bon_Pharmaceutique__WEBPACK_IMPORTED_MODULE_7__["IPM_Bon_Pharmaceutique"](0, 0, null, "", null, null, "", null, null, null, null, null, null, "", null, null);
        //  public makePDF():void{
        //   var element=document.getElementById('contente');
        //   html2canvas(element).then((canvas)=>{
        //     console.log(canvas);
        //    var imgData =canvas.toDataURL();
        //     var doc =new jsPDF("p","mm","a4");
        //     var imaHeight=canvas.height *208/canvas.width;
        //    doc.addImage(imgData,0,0,208,imaHeight);
        //     doc.save("bonpharmacie.pdf");
        //   });
        // }
        this.selectedConjoints = '';
        this.conjs = [];
        this.options = fb.group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl,
        });
    }
    AjoutBonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.bon={}
        // this.getEmploye();
        this.getPrestat();
        this.id = this.route.snapshot.params['id'];
        this.emp_service.getEmployeById(this.id).subscribe(function (result) {
            _this.currentemploye = result;
        });
        //lister les conjoints en fonction de leur employe
        this.ide = this.route.snapshot.params['id'];
        this.conj_service.listeConjoint(this.ide).subscribe(function (conjs) {
            console.log(conjs);
            _this.conjoints = conjs;
            // this.bonss=this.conjoints;
            console.log(_this.conjoints);
        });
        //lister les enfants en fonction de leur employe
        this.iden = this.route.snapshot.params['id'];
        this.enf_service.listeEnfant(this.iden).subscribe(function (enfs) {
            console.log(enfs);
            _this.enfants = enfs;
            console.log(_this.enfants);
        });
    };
    AjoutBonsComponent.prototype.BonNow = function () {
        var _this = this;
        this.bon.ipm_employe = this.currentemploye;
        this.bon.ipm_prestataire = this.currentprestataire;
        console.log(this.bon);
        this.bonpharma.AjouterBonPharmacie(this.bon).subscribe(function (data) { return _this.message = data; });
        //console.log(this.employe);
        this.router.navigate(['/gestion-bons/Listebons']);
    };
    // public getEmploye(){
    //   this.bon_service.getEmploye().subscribe(
    //    bons=>{
    //     this.currentemploye=bons;
    //    }
    //   )
    //  }
    AjoutBonsComponent.prototype.getEmployeById = function (employe) {
        var _this = this;
        this.emp_service.getEmployeById(employe.idemp).subscribe(function (result) {
            _this.currentemploye = result;
        });
    };
    ///////////////////Recuperer les prestataires
    AjoutBonsComponent.prototype.getPrestat = function () {
        var _this = this;
        this.pres_service.getAllPrestataires().subscribe(function (pres) {
            // console.log(cat);
            _this.prestataire = pres;
            // console.log(this.categorie)
        });
    };
    AjoutBonsComponent.prototype.getPrestBy = function (prestataire) {
        var _this = this;
        this.pres_service.getPrestataireById(prestataire.idpres).subscribe(function (result) {
            _this.currentprestataire = result;
            _this.router.navigate(['/gestion-bons/Ajouterbons/' + prestataire.idpres]);
        });
    };
    AjoutBonsComponent.prototype.radioChangeHandler = function (event) {
        this.bonss = this.enfants;
    };
    AjoutBonsComponent.ctorParameters = function () { return [
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_5__["EmployeService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_Services_bon_service__WEBPACK_IMPORTED_MODULE_6__["BonService"] },
        { type: src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_8__["ConjointService"] },
        { type: src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_10__["EnfantService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_12__["PrestataireService"] },
        { type: src_app_Services_bon_pharmacie_service__WEBPACK_IMPORTED_MODULE_14__["BonPharmacieService"] }
    ]; };
    AjoutBonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-ajout-bons',
            template: _raw_loader_ajout_bons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ajout_bons_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_5__["EmployeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_Services_bon_service__WEBPACK_IMPORTED_MODULE_6__["BonService"],
            src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_8__["ConjointService"], src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_10__["EnfantService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_12__["PrestataireService"], src_app_Services_bon_pharmacie_service__WEBPACK_IMPORTED_MODULE_14__["BonPharmacieService"]])
    ], AjoutBonsComponent);
    return AjoutBonsComponent;
}());



/***/ }),

/***/ "Meco":
/*!***************************************************!*\
  !*** ./src/app/Models/IPM_Bon_Lettre_Garantie.ts ***!
  \***************************************************/
/*! exports provided: IPM_Bon_Lettre_Garantie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPM_Bon_Lettre_Garantie", function() { return IPM_Bon_Lettre_Garantie; });
/* harmony import */ var _IPM_Bon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IPM_Bon */ "WQyP");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IPM_Bon_Lettre_Garantie = /** @class */ (function (_super) {
    __extends(IPM_Bon_Lettre_Garantie, _super);
    function IPM_Bon_Lettre_Garantie(idbon, total, categorie_hospitalisation, motif, numeroBon, ipm_employe, ipm_prestataire, ipm_enfant, ordonnance, ipm_conjoint, ipm_prestation, dateEtablissement, ipm_utilisateur) {
        var _this = _super.call(this, idbon, total, ipm_employe, ipm_prestataire, ipm_enfant, ipm_conjoint, ipm_prestation, dateEtablissement, ipm_utilisateur) || this;
        _this.idbon = idbon;
        _this.total = total;
        _this.categorie_hospitalisation = categorie_hospitalisation;
        _this.motif = motif;
        _this.numeroBon = numeroBon;
        _this.ipm_employe = ipm_employe;
        _this.ipm_prestataire = ipm_prestataire;
        _this.ipm_enfant = ipm_enfant;
        _this.ordonnance = ordonnance;
        _this.ipm_conjoint = ipm_conjoint;
        _this.ipm_prestation = ipm_prestation;
        _this.dateEtablissement = dateEtablissement;
        _this.ipm_utilisateur = ipm_utilisateur;
        return _this;
    }
    return IPM_Bon_Lettre_Garantie;
}(_IPM_Bon__WEBPACK_IMPORTED_MODULE_0__["IPM_Bon"]));



/***/ }),

/***/ "MgQi":
/*!*************************************************************************!*\
  !*** ./src/app/gestion-bons/bon-lunetterie/bon-lunetterie.component.ts ***!
  \*************************************************************************/
/*! exports provided: BonLunetterieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonLunetterieComponent", function() { return BonLunetterieComponent; });
/* harmony import */ var _raw_loader_bon_lunetterie_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./bon-lunetterie.component.html */ "z0Xg");
/* harmony import */ var _bon_lunetterie_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bon-lunetterie.component.css */ "3Io9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Models/Employe */ "5GYJ");
/* harmony import */ var src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Models/Enfant */ "yLBP");
/* harmony import */ var src_app_Models_IPM_Bon_Lunetterie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Models/IPM_Bon_Lunetterie */ "6d5C");
/* harmony import */ var src_app_Services_bonlettre_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/bonlettre.service */ "gkPT");
/* harmony import */ var src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Services/conjoint.service */ "NbTU");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Services/enfant.service */ "ABBt");
/* harmony import */ var src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Services/prestataire.service */ "3m7+");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Services/utilisateur.service */ "MVAf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Models_IPM_Details_Bon_Lunetterie__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Models/IPM_Details_Bon_Lunetterie */ "NvpY");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var BonLunetterieComponent = /** @class */ (function () {
    function BonLunetterieComponent(emp_service, router, pres_service, route, conj_service, enf_service, datePipe, bon_lettreService, keycloak, user_Service, fb, builder, builderConj, buildeEnfant, datepipe) {
        var _this = this;
        this.emp_service = emp_service;
        this.router = router;
        this.pres_service = pres_service;
        this.route = route;
        this.conj_service = conj_service;
        this.enf_service = enf_service;
        this.datePipe = datePipe;
        this.bon_lettreService = bon_lettreService;
        this.keycloak = keycloak;
        this.user_Service = user_Service;
        this.fb = fb;
        this.builder = builder;
        this.builderConj = builderConj;
        this.buildeEnfant = buildeEnfant;
        this.datepipe = datepipe;
        this.employes = [];
        this.desactive = false;
        this.enfant = new src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_8__["Enfant"]();
        this.enfants = [];
        this.conjoints = [];
        this.currentemploye = new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_7__["Employe"]();
        this.bonlettre = new src_app_Models_IPM_Bon_Lunetterie__WEBPACK_IMPORTED_MODULE_9__["IPM_Bon_Lunetterie"](0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
        this.maDate = new Date();
        this.listDetailBon = [];
        this.listDetailBonConjoint = [];
        this.listDetailBonEnfant = [];
        this.FormGroup = _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroup"];
        this.idBon = new _Models_IPM_Details_Bon_Lunetterie__WEBPACK_IMPORTED_MODULE_18__["IPM_Details_Bon_Lunetterie"]();
        this.keycloak.loadUserProfile().then(function (res) {
            console.log(res);
            _this.user = res;
            _this.MonUser = _this.user;
            _this.getUserByUsernameF(res.username);
        });
    }
    BonLunetterieComponent.prototype.getUserByUsernameF = function (username) {
        var _this = this;
        console.log(username);
        return this.user_Service.getUserByUsername(username).subscribe(function (data) {
            console.log(data);
            _this.user = data;
            console.log(_this.user.prenom);
            console.log(_this.user.nom);
        });
    };
    BonLunetterieComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.MonUser);
        this.pres_service.getAllPrestataires().subscribe(function (pres) {
            // console.log(cat);
            _this.lprestataires = pres;
            console.log(_this.lprestataires);
        });
        this.id = this.route.snapshot.params['id'];
        this.emp_service.getEmployeById(this.id).subscribe(function (result) {
            _this.currentemploye = result;
        });
        this.pres_service.getBon().subscribe(function (pres) {
            // console.log(cat);
            _this.listB = pres;
            console.log(_this.listB[_this.listB.length - 1].numeroBon.slice(4));
            _this.numero = _this.listB[_this.listB.length - 1].numeroBon.slice(4);
            _this.numero++;
            console.log(_this.numero);
        });
        this.bonIpmForm = this.fb.group({
            devit: this.fb.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required]),
            montan: this.fb.control(null),
            designation: this.fb.control(null),
            date_delivrance: this.fb.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required])
        });
        /******** Conjoint */
        this.bonIpmFormConjoin = this.fb.group({
            // devit: this.fb.control(null, [Validators.required]),
            montanConjoin: this.builderConj.control(null),
            designationConjoin: this.builderConj.control(null),
        });
        /******** Enfant */
        this.bonIpmForEnfant = this.fb.group({
            // devit: this.fb.control(null, [Validators.required]),
            montanEnfant: this.builderConj.control(null),
            designationEnfant: this.builderConj.control(null),
        });
        this.factureBon = this.builder.group({
            montan: this.builder.control(null),
            designation: this.builder.control(null)
        });
    };
    ////////////////////Rechercher par matricule 
    BonLunetterieComponent.prototype.findByMatricule = function () {
        var _this = this;
        ///////Rechercher l'employé
        this.emp_service.getEmployeByMatricule(this.matricule).subscribe(function (data) {
            _this.mess = data;
            if (_this.mess) {
                console.log(_this.mess);
            }
            else {
                _this.mess1 = "yess";
                console.log("charlessssssssssssss");
                _this.showNotification('top', 'center', 3, "<b>matricule n'existe pas</b> :");
            }
            if (data.statut == true) {
                _this.message = data;
                console.log(_this.message);
            }
            else {
                console.log(_this.message);
                _this.mess1 = "yess";
                _this.showNotification('top', 'center', 3, "<b>agent de numero matricule " + _this.matricule + " ne beneficie plus de L'IPM</b> :");
            }
            _this.matr = _this.message.idemp;
            var date = _this.message.date_nais;
            //this.datePipe.transform(this.message.date_nais, "dd-MM-yyyy");
            //const date =this.message.date_nais
            console.log(date);
            var b = new Date(date);
            var ttoday = new Date();
            _this.AgeEmploye = ttoday.getFullYear() - b.getFullYear();
            var m = ttoday.getMonth() - b.getMonth();
            console.log(_this.message.date_nais);
            console.log(m);
            if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
                _this.AgeEmploye--;
                // console.log(this.messageconjoint.date_naiss_conj);
            }
            console.log(_this.AgeEmploye);
            ///////Rechercher les enfants en fontion de l'employé
            _this.enf_service.listeEnfant(_this.message.idemp).subscribe(function (enfs) {
                _this.enfants = enfs;
                _this.enfants.forEach(function (ele) {
                    if (ele.date_nais_enfant) {
                        //convert date again to type Date
                        var bdate = new Date(ele.date_nais_enfant);
                        var timeDiff = Math.abs(Date.now() - bdate.getTime());
                        _this.agenft = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                    }
                    console.log(_this.agenft);
                    if (_this.agenft > 21) {
                        console.log("Age atteinte impossible de ce beneficier à l'ipm :", _this.agenft);
                        ele.active = false;
                        console.log(ele.active);
                        console.log("age depasse");
                    }
                    else if (_this.agenft < 21) {
                        console.log("Voici l'age :", _this.agenft);
                        ele.active = true;
                        console.log(ele.active);
                        console.log("age non depasse");
                    }
                });
                console.log(_this.enfants);
                _this.enfants = _this.enfants.filter(function (serv) { return serv.active == true; });
                console.log(_this.enfants);
            });
            ///////Rechercher les conjoints en fontion de l'employé
            _this.conj_service.listeConjoint(_this.message.idemp).subscribe(function (conjs) {
                _this.conjoints = conjs;
                console.log(_this.conjoints);
            });
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
    BonLunetterieComponent.prototype.DetailsBon_Linetterie = function () {
        var ipm_details_bon = new _Models_IPM_Details_Bon_Lunetterie__WEBPACK_IMPORTED_MODULE_18__["IPM_Details_Bon_Lunetterie"]();
        this.MontantBon = this.bonIpmForm.get('montan').value;
        this.DesignationBon = this.bonIpmForm.get('designation').value;
        console.log(this.MontantBon, this.DesignationBon, this.motif);
        ipm_details_bon.montant = this.bonIpmForm.get('montan').value;
        ipm_details_bon.designation = this.bonIpmForm.get('designation').value;
        console.log(ipm_details_bon);
        if (this.listDetailBon.length != null) {
            this.listDetailBon.push(ipm_details_bon);
            console.log(this.listDetailBon);
        }
        this.ngOnInit();
    };
    BonLunetterieComponent.prototype.DetailsBon_LinetterieConjoin = function () {
        var ipm_details_bon = new _Models_IPM_Details_Bon_Lunetterie__WEBPACK_IMPORTED_MODULE_18__["IPM_Details_Bon_Lunetterie"]();
        this.MontantBonConj = this.bonIpmFormConjoin.get('montanConjoin').value;
        this.DesignationBonConj = this.bonIpmFormConjoin.get('designationConjoin').value;
        ipm_details_bon.montant = this.bonIpmFormConjoin.get('montanConjoin').value;
        ipm_details_bon.designation = this.bonIpmFormConjoin.get('designationConjoin').value;
        console.log(ipm_details_bon);
        if (this.listDetailBonConjoint.length != null) {
            this.listDetailBonConjoint.push(ipm_details_bon);
            console.log(this.listDetailBonConjoint);
        }
        //this.listDetailBonConjoint =null
        this.ngOnInit();
        //this.montanConjoin.reset()
    };
    BonLunetterieComponent.prototype.DetailsBon_LinetterieEnfant = function () {
        var ipm_details_bon = new _Models_IPM_Details_Bon_Lunetterie__WEBPACK_IMPORTED_MODULE_18__["IPM_Details_Bon_Lunetterie"]();
        this.MontantBonEnf = this.bonIpmForEnfant.get('montanEnfant').value;
        this.DesignationBonEnf = this.bonIpmForEnfant.get('designationEnfant').value;
        console.log(this.MontantBonEnf, this.DesignationBonEnf, this.motif);
        ipm_details_bon.montant = this.bonIpmForEnfant.get('montanEnfant').value;
        ipm_details_bon.designation = this.bonIpmForEnfant.get('designationEnfant').value;
        console.log(ipm_details_bon);
        if (this.listDetailBon.length != null) {
            this.listDetailBonEnfant.push(ipm_details_bon);
            console.log(this.listDetailBonEnfant);
        }
        this.ngOnInit();
    };
    /////////////Recuperer un enfant pour lui choisir bon
    BonLunetterieComponent.prototype.getenfantbon = function (enfant) {
        var _this = this;
        this.idbenf = enfant.idenf;
        this.enfChoisi = enfant;
        this.enf_service.getEnfantById(enfant.idenf).subscribe(function (data) {
            _this.messageenfant = data;
            console.log(_this.messageenfant);
            //const date = this.datePipe.transform(this.enfant.date_nais_enfant, "dd-MM-yyyy");
            var date = _this.messageenfant.date_nais_enfant;
            console.log(date);
            var b = new Date(date);
            var ttoday = new Date();
            _this.AgeEnfant = ttoday.getFullYear() - b.getFullYear();
            var m = ttoday.getMonth() - b.getMonth();
            console.log(_this.message.date_nais);
            console.log(ttoday);
            if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
                _this.AgeEnfant--;
                // console.log(this.messageconjoint.date_naiss_conj);
            }
            console.log(_this.AgeEnfant);
        });
    };
    /////////////Recuperer un coinjoint pour lui choisir bon
    BonLunetterieComponent.prototype.getconjointbon = function (conjoint) {
        var _this = this;
        this.conjChoisi = conjoint;
        this.idbconj = conjoint.idconj;
        this.conj_service.getConjointById(conjoint.idconj).subscribe(function (data) {
            _this.messageconjoint = data;
            console.log(_this.messageconjoint);
            //const date = this.datePipe.transform(this.messageconjoint.date_naiss_conj, "dd-MM-yyyy");
            var date = _this.messageconjoint.date_naiss_conj;
            console.log(date);
            var b = new Date(date);
            var ttoday = new Date();
            _this.AgeConjoint = ttoday.getFullYear() - b.getFullYear();
            var m = ttoday.getMonth() - b.getMonth();
            console.log(_this.message.date_nais);
            console.log(m);
            if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
                _this.AgeConjoint--;
                // console.log(this.messageconjoint.date_naiss_conj);
            }
            console.log(_this.AgeConjoint);
        });
    };
    BonLunetterieComponent.prototype.getnom = function (prest) {
        var _this = this;
        this.prestatair = prest;
        console.log(prest);
        this.prestat = prest;
        this.idp = prest.code_prestataire;
        this.pres_service.getAllPrestataires().subscribe(function (pres) {
            console.log(prest.nom_prestataire);
            _this.p = prest.nom_prestataire;
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
        });
    };
    BonLunetterieComponent.prototype.selectDevit = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrDevit = event.target.files[0];
        this.nomOrdon = this.selectOrDevit.name;
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    BonLunetterieComponent.prototype.selectDevitConj = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrDevit = event.target.files[0];
        this.nomOrdonConj = this.selectOrDevit.name;
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    BonLunetterieComponent.prototype.selectDevitEnf = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrDevit = event.target.files[0];
        this.nomOrdonEnf = this.selectOrDevit.name;
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    BonLunetterieComponent.prototype.selectOrdonn = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrOrdon = event.target.files[0];
        this.nomOrdonnance = this.selectOrOrdon.name;
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    BonLunetterieComponent.prototype.selectOrdonnConj = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrOrdon = event.target.files[0];
        this.nomOrdonnanceConj = this.selectOrOrdon.name;
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    BonLunetterieComponent.prototype.selectOrdonnEnf = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrOrdon = event.target.files[0];
        this.nomOrdonnanceEnf = this.selectOrOrdon.name;
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    /////////////////////////////////Save Lettre de Garantie
    BonLunetterieComponent.prototype.BonConsultation = function () {
        var _this = this;
        var _a, _b;
        this.DateDelivrance = this.bonIpmForm.get('date_delivrance').value;
        console.log(this.DateDelivrance);
        this.DateDelivranc = this.datepipe.transform(this.DateDelivrance, 'dd-MM-yyyy');
        console.log(this.DateDelivranc);
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        // this.nom=this.bon.ipm_employe.prenom
        this.bonlettre.ipm_employe = this.message;
        this.bonlettre.dateEtablissement = new Date();
        //this.addPrestataire.code_prestataire=this.idp;
        this.bonlettre.ipm_prestataire = this.prestatair;
        this.bonlettre.devit = (_a = this.selectOrDevit) === null || _a === void 0 ? void 0 : _a.name;
        this.bonlettre.ordonnance = (_b = this.selectOrOrdon) === null || _b === void 0 ? void 0 : _b.name;
        console.log(this.bonlettre.ordonnance);
        this.bonlettre.motif = this.motif;
        this.bonlettre.date_delivrance = this.DateDelivranc;
        this.bonlettre.ipm_utilisateur = this.user;
        // this.bonlettre.montant= this.montan
        // this.bonlettre.designation=this.designation
        if (this.enfChoisi) {
            this.bonlettre.ipm_enfant = this.enfChoisi;
        }
        if (this.conjChoisi) {
            this.bonlettre.ipm_conjoint = this.conjChoisi;
        }
        //this.bonlettre.ordonnance=this.selectOrdonne.name
        console.log(this.bonlettre);
        this.bonlettre.numeroBon = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        if (this.bonlettre.ipm_employe && this.bonlettre.ipm_prestataire && this.bonlettre.numeroBon &&
            this.bonlettre.dateEtablissement && this.bonlettre.devit && this.bonlettre.ordonnance) {
            this.bon_lettreService.SaveBonLunetterie(this.bonlettre).subscribe(function (data) {
                _this.BonLun = data;
                _this.BonLun = JSON.parse((_this.BonLun));
                console.log(_this.BonLun);
                console.log(_this.BonLun.idbon);
                _this.idBon.ipm_bon_lunetterie = _this.BonLun;
                console.log(_this.idBon);
                _this.saveDetailsBon(_this.listDetailBon);
                _this.upload();
            });
            this.bon_lettreService.uploadFileDevit(this.selectOrDevit).subscribe(function (data) { });
            this.desactive = true;
            console.log(this.motif);
            this.showNotification('top', 'center', 1, '<b>bon lunetterie ajouté avec succées!!!</b> :');
        }
        else {
            this.showNotification('top', 'center', 3, "<b>bon lunetterie non ajouté</b> :");
        }
    };
    BonLunetterieComponent.prototype.saveDetailsBon = function (listDetailConj) {
        console.log(this.BonLun);
        this.BonLun.ipm_bon_lunetterie = JSON.parse(JSON.stringify(this.BonLun));
        for (var _i = 0, listDetailConj_1 = listDetailConj; _i < listDetailConj_1.length; _i++) {
            var ele = listDetailConj_1[_i];
            ele.ipm_bon_lunetterie = this.BonLun.ipm_bon_lunetterie;
            console.log(ele);
            // this.idBon.ipm_bon_lunetterie=JSON.parse(JSON.stringify(this.idBon));
            // console.log(ele)
            this.bon_lettreService.SaveDetailsBonLettre(ele).subscribe(function (data) {
                console.log(data);
            });
        }
    };
    /////////////////Save Bon Conjoint
    BonLunetterieComponent.prototype.BonConjoint = function () {
        var _this = this;
        var _a;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        // this.nom=this.bon.ipm_employe.prenom
        this.bonlettre.ipm_employe = this.message;
        this.bonlettre.dateEtablissement = new Date();
        // this.addPrestataire.code_prestataire=this.idp;
        this.bonlettre.ipm_prestataire = JSON.parse(this.idp);
        console.log(this.bonlettre.ipm_prestataire);
        this.bonlettre.devit = this.selectOrDevit.name;
        this.bonlettre.ordonnance = (_a = this.selectOrOrdon) === null || _a === void 0 ? void 0 : _a.name;
        this.bonlettre.motif = this.motif;
        // this.bonlettre.ipm_prestataire=JSON.parse(JSON.stringify(this.addPrestataire));
        // this.addconjoint.idconj=this.idbconj
        // this.bonlettre.ipm_conjoint=JSON.parse(JSON.stringify(this.idbconj))
        this.bonlettre.ipm_conjoint = this.messageconjoint;
        this.bonlettre.ipm_utilisateur = this.user;
        // this.bonlettre.ipm_conjoint=JSON.parse((this.idbconj))
        console.log(this.bonlettre.ipm_conjoint);
        console.log(this.bonlettre);
        this.bonlettre.numeroBon = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        console.log(this.bonlettre.ipm_conjoint);
        this.bonlettre.ipm_prestataire = this.prestatair;
        // console.log( this.b.ipm_employe);
        //console.log(this.b.ipm_prestataire);
        // this.bonlettre.ordonnance=this.selectOrdonne.name
        //this.bon.prix_unitaire=this.prix_unitaire;
        if (this.bonlettre.ipm_employe && this.bonlettre.ipm_prestataire && this.bonlettre.numeroBon &&
            this.bonlettre.dateEtablissement && this.bonlettre.devit) {
            this.bon_lettreService.SaveBonLunetterie(this.bonlettre).subscribe(function (data) {
                _this.BonLun = data;
                _this.BonLun = JSON.parse((_this.BonLun));
                console.log(_this.BonLun);
                console.log(_this.BonLun.idbon);
                _this.idBon.ipm_bon_lunetterie = _this.BonLun;
                console.log(_this.idBon);
                _this.saveDetailsBon(_this.listDetailBonConjoint);
                _this.uploadConjoint();
            });
            this.bon_lettreService.uploadFileDevit(this.selectOrDevit).subscribe(function (data) { });
            this.desactive = true;
            console.log(this.bonlettre.ipm_prestataire);
            console.log(this.bonlettre);
            this.showNotification('top', 'center', 1, '<b>bon lunetterie ajouté avec succées!!!</b> :');
        }
        else {
            this.showNotification('top', 'center', 3, "<b>bon lunetterie non ajouté</b> :");
        }
    };
    /////////////////Save Bon Enfants
    BonLunetterieComponent.prototype.BonEnfant = function () {
        var _this = this;
        var _a;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        // this.nom=this.bon.ipm_employe.prenom
        console.log(this.idp);
        this.bonlettre.ipm_employe = this.message;
        this.bonlettre.motif = this.motif;
        this.bonlettre.dateEtablissement = new Date();
        this.bonlettre.devit = this.selectOrDevit.name;
        this.bonlettre.ordonnance = (_a = this.selectOrOrdon) === null || _a === void 0 ? void 0 : _a.name;
        // this.addPrestataire.code_prestataire=this.idp;
        this.bonlettre.ipm_prestataire = this.prestat;
        // this.addenfant.idenf=this.idbenf
        this.bonlettre.ipm_enfant = this.enfChoisi;
        this.bonlettre.ipm_utilisateur = this.user;
        console.log(this.bonlettre);
        //console.log( this.b.ipm_employe);
        //console.log(this.b.ipm_prestataire);
        //this.bonlettre.ordonnance=this.selectOrdonne.name
        this.bonlettre.numeroBon = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        if (this.bonlettre.ipm_employe && this.bonlettre.ipm_prestataire && this.bonlettre.numeroBon &&
            this.bonlettre.dateEtablissement && this.bonlettre.devit) {
            this.bon_lettreService.SaveBonLunetterie(this.bonlettre).subscribe(function (data) {
                _this.BonLun = data;
                _this.BonLun = JSON.parse((_this.BonLun));
                console.log(_this.BonLun);
                console.log(_this.BonLun.idbon);
                _this.idBon.ipm_bon_lunetterie = _this.BonLun;
                console.log(_this.idBon);
                _this.saveDetailsBon(_this.listDetailBon);
                _this.uploadEnfant();
            });
            this.bon_lettreService.uploadFileDevit(this.selectOrDevit).subscribe(function (data) { });
            console.log(this.bonlettre.ipm_prestataire);
            console.log(this.bonlettre);
            this.showNotification('top', 'center', 1, '<b>bon lunetterie ajouté avec succées!!!</b> :');
        }
        else {
            this.showNotification('top', 'center', 3, "<b>bon lunetterie non ajouté</b> :");
        }
    };
    BonLunetterieComponent.prototype.retourserach = function () {
        console.log('************************************');
        window.location.reload();
    };
    BonLunetterieComponent.prototype.viderConjoint = function () {
        this.findByMatricule();
    };
    BonLunetterieComponent.prototype.viderEnfant = function () {
        this.findByMatricule();
    };
    BonLunetterieComponent.prototype.upload = function () {
        var _a, _b, _c, _d, _e, _f;
        // console.log(this.user.prenom, this.user.nom);
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        var imgData = '/ipm-fronte/assets/img_poste/header1.png';
        var col = [["Designation", "Montant"]];
        var rows = [];
        for (var _i = 0, _g = this.listDetailBonEnfant; _i < _g.length; _i++) {
            var detailbon = _g[_i];
            var tmp = [detailbon.designation, detailbon.montant];
            rows.push(tmp);
            console.log(rows);
        }
        var ipm1 = (_a = this.message) === null || _a === void 0 ? void 0 : _a.prenom;
        var ipm2 = (_b = this.message) === null || _b === void 0 ? void 0 : _b.nom;
        console.log(ipm2);
        var prestataire = this.p;
        var Ncarnet = this.message.numero_carnet;
        var ipm3 = (_c = this.message.ipmService) === null || _c === void 0 ? void 0 : _c.type_service;
        var ipm4 = (_d = this.message) === null || _d === void 0 ? void 0 : _d.matricule;
        var ipm5 = (_e = this.message) === null || _e === void 0 ? void 0 : _e.reference;
        var ageE = this.AgeEmploye;
        var sexe = (_f = this.message) === null || _f === void 0 ? void 0 : _f.sexe;
        var prenonConnec = this.user.prenom;
        var nomConnec = this.user.nom;
        var numBonEmp = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 100,
            head: col,
            body: rows,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "grid",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                doc.addImage(imgData, 'JPEG', 15, 5, 180, 20);
                doc.setFontSize(15);
                doc.text("", 72, 46);
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(60, 30, 105, 20);
                doc.setFillColor(240, 240, 240);
                doc.rect(13, 65, 185, 35, 'F');
                //RECTANGLE PAGE
                //doc.setLineWidth(2)
                //doc.setDrawColor("#3A6EA5")
                //doc.rect(10,100,190,170)
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("BON DE COMMANDE", 85, 36);
                doc.text("POUR LUNETTERIE", 85, 45);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 60);
                doc.text("N° Bon:", 13, 60);
                doc.text("" + numBonEmp, 30, 60);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 60);
                doc.setFontSize(12);
                doc.text("Malade : " + ipm1 + " " + ipm2, 15, 75);
                //doc.text(ipm1,40,75)
                //doc.text(ipm2,80,75) 
                doc.text("Matricule : " + ipm4, 140, 75);
                doc.text("Sexe : " + sexe, 140, 85);
                doc.setFontSize(12);
                doc.text("N Carnet :", 15, 85);
                doc.text("" + Ncarnet, 40, 85);
                doc.text("Age : " + ageE, 80, 85);
                // doc.text("Nombre D'article :",120,85)
                // doc.text(""+Narticle,160,85)
                // doc.text("Malade:",15,95)
                // doc.text(ipm5,40,95)
                // doc.text(ipm6,80,95)
                doc.text("Service :", 100, 95);
                doc.text(ipm3, 120, 95);
                doc.text("Prestataire :", 15, 95);
                doc.text(prestataire, 40, 95);
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
                doc.text("Demandeur", 150, 250);
                doc.text("" + prenonConnec + "   " + nomConnec, 15, 250);
                //  doc.setTextColor("#8C1C13")
                //  doc.text("NB:Nous retourner deux exemplaires avec la facture",15,240)
                //  doc.text("--------------------------------------------------------------------------",15,250)
                //  doc.setTextColor("")
                //  doc.setFontSize(10)
                //  doc.text("Siège Social:Immeuble Direction Générale Rez de Chaussée",100,260)
                //  doc.text("8.Rue Abd.6.M.Paraine BP:11002 Dakar (Sénégal)",100,265)
            }
        });
        doc.output('dataurlnewwindow'); // let data = document.getElementById('noticeModal'); 
        // const printContents = document.getElementById('noticeModal').innerHTML;
        //    const originalContents = document.body.innerHTML;
        //    document.body.innerHTML = printContents;
        //    window.print();
        //    document.body.innerHTML = originalContents;
    };
    BonLunetterieComponent.prototype.uploadConjoint = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        var imgData = '/ipm-fronte/assets/img_poste/header1.png';
        var col = [["Designation", "Montant"]];
        var rows = [];
        for (var _i = 0, _h = this.listDetailBonConjoint; _i < _h.length; _i++) {
            var ele = _h[_i];
            var tmp = [ele.designation, ele.montant];
            rows.push(tmp);
        }
        var ipm1 = (_a = this.message) === null || _a === void 0 ? void 0 : _a.prenom;
        var ipm2 = (_b = this.message) === null || _b === void 0 ? void 0 : _b.nom;
        console.log(ipm2);
        var prestataire = this.p;
        var ageC = this.AgeConjoint;
        var Ncarnet = this.message.numero_carnet;
        var ipm3 = (_c = this.message.ipmService) === null || _c === void 0 ? void 0 : _c.type_service;
        var ipm4 = (_d = this.message) === null || _d === void 0 ? void 0 : _d.matricule;
        var ipm5 = (_e = this.messageconjoint) === null || _e === void 0 ? void 0 : _e.prenom_conjoint;
        var ipm6 = (_f = this.messageconjoint) === null || _f === void 0 ? void 0 : _f.nom_conjoint;
        var sexe = (_g = this.messageconjoint) === null || _g === void 0 ? void 0 : _g.sexe_conjoint;
        var numBonConj = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 100,
            head: col,
            body: rows,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "grid",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                doc.addImage(imgData, 'JPEG', 15, 5, 180, 20);
                doc.setFontSize(15);
                doc.text("", 72, 46);
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(60, 30, 105, 20);
                doc.setFillColor(240, 240, 240);
                doc.rect(13, 65, 185, 35, 'F');
                //RECTANGLE PAGE
                //   doc.setLineWidth(2)
                //  doc.setDrawColor("#3A6EA5")
                //  doc.rect(10,100,190,170)
                //   doc.setFontSize(15)
                //   doc.setTextColor("#3A6EA5")
                doc.text("BON DE COMMANDE", 85, 36);
                doc.text("POUR LUNETTERIE", 85, 45);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 60);
                doc.text("N° Bon:", 13, 60);
                doc.text("" + numBonConj, 30, 60);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 60);
                doc.setFontSize(12);
                doc.text("Participant : " + ipm1 + " " + ipm2, 15, 75);
                //doc.text(ipm1,40,75)
                // doc.text(ipm2,80,75) 
                doc.text("Matricule : " + ipm4, 120, 75);
                doc.text("Malade : " + ipm5 + " " + ipm6, 15, 85);
                //doc.text(ipm5,40,85)
                //doc.text(ipm6,80,85) 
                doc.setFontSize(12);
                doc.text("Sexe : " + sexe, 95, 85);
                doc.text("N Carnet :" + " " + Ncarnet, 135, 85);
                doc.text("Age : " + ageC, 175, 85);
                //doc.text(,140,85)
                // doc.text("Nombre D'article :",120,85)
                // doc.text(""+Narticle,160,85)
                // doc.text("Malade:",15,95)
                // doc.text(ipm5,40,95)
                // doc.text(ipm6,80,95)
                doc.text("Service :", 100, 95);
                doc.text(ipm3, 120, 95);
                doc.text("Prestataire :", 15, 95);
                doc.text(prestataire, 40, 95);
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
        });
        doc.output('dataurlnewwindow'); // let data = document.getElementById('noticeModal'); 
        // const printContents = document.getElementById('noticeModal').innerHTML;
        //    const originalContents = document.body.innerHTML;
        //    document.body.innerHTML = printContents;
        //    window.print();
        //    document.body.innerHTML = originalContents;
    };
    BonLunetterieComponent.prototype.uploadEnfant = function () {
        var _a, _b, _c, _d, _e, _f;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        var imgData = '/ipm-fronte/assets/img_poste/header1.png';
        var col = [["Designation", "Montant"]];
        var rows = [];
        for (var _i = 0, _g = this.listDetailBon; _i < _g.length; _i++) {
            var details = _g[_i];
            var tmp = [details.designation, details.montant];
            rows.push(tmp);
        }
        var ipm1 = (_a = this.message) === null || _a === void 0 ? void 0 : _a.prenom;
        var ipm2 = (_b = this.message) === null || _b === void 0 ? void 0 : _b.nom;
        console.log(ipm2);
        var prestataire = this.p;
        var ageEn = this.AgeEnfant;
        var Ncarnet = this.message.numero_carnet;
        var ipm3 = (_c = this.message.ipmService) === null || _c === void 0 ? void 0 : _c.type_service;
        var ipm4 = (_d = this.message) === null || _d === void 0 ? void 0 : _d.matricule;
        var ipm5 = this.messageenfant.prenom_enfant;
        var ipm6 = (_e = this.messageenfant) === null || _e === void 0 ? void 0 : _e.nom_enfant;
        var sexe = (_f = this.messageenfant) === null || _f === void 0 ? void 0 : _f.sexe_enfant;
        var numBonEnf = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 100,
            head: col,
            body: rows,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "grid",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                doc.addImage(imgData, 'JPEG', 15, 5, 180, 20);
                doc.setFontSize(15);
                doc.text("", 72, 46);
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(60, 30, 105, 20);
                doc.setFillColor(240, 240, 240);
                doc.rect(13, 65, 185, 35, 'F');
                //RECTANGLE PAGE
                //   doc.setLineWidth(2)
                //  doc.setDrawColor("#3A6EA5")
                //  doc.rect(10,100,190,170)
                //   doc.setFontSize(15)
                //   doc.setTextColor("#3A6EA5")
                doc.text("BON DE COMMANDE", 85, 36);
                doc.text("POUR LUNETTERIE", 85, 45);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 60);
                doc.text("N° Bon:", 13, 60);
                doc.text("" + numBonEnf, 30, 60);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 60);
                doc.setFontSize(12);
                doc.text("Participant : " + ipm1 + " " + ipm2, 15, 75);
                //doc.text(ipm1,40,75)
                // doc.text(ipm2,80,75) 
                doc.text("Matricule : " + ipm4, 120, 75);
                doc.text("Malade : " + ipm5 + " " + ipm6, 15, 85);
                //doc.text(ipm5,40,85)
                //doc.text(ipm6,80,85) 
                doc.setFontSize(12);
                doc.text("Sexe : " + sexe, 95, 85);
                doc.text("N Carnet :" + " " + Ncarnet, 135, 85);
                doc.text("Age : " + ageEn, 175, 85);
                //doc.text(""+Ncarnet,140,85)
                // doc.text("Nombre D'article :",120,85)
                // doc.text(""+Narticle,160,85)
                // doc.text("Malade:",15,95)
                // doc.text(ipm5,40,95)
                // doc.text(ipm6,80,95)
                doc.text("Service :", 100, 95);
                doc.text(ipm3, 120, 95);
                doc.text("Prestataire :", 15, 95);
                doc.text(prestataire, 40, 95);
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
        });
        doc.output('dataurlnewwindow');
        // let data = document.getElementById('noticeModal'); 
        // const printContents = document.getElementById('noticeModal').innerHTML;
        //    const originalContents = document.body.innerHTML;
        //    document.body.innerHTML = printContents;
        //    window.print();
        //    document.body.innerHTML = originalContents;
    };
    BonLunetterieComponent.prototype.showNotification = function (from, align, idtype, note) {
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
    BonLunetterieComponent.ctorParameters = function () { return [
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_12__["EmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_14__["PrestataireService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_11__["ConjointService"] },
        { type: src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_13__["EnfantService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: src_app_Services_bonlettre_service__WEBPACK_IMPORTED_MODULE_10__["BonlettreService"] },
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_15__["KeycloakService"] },
        { type: _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_16__["UtilisateurService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    BonLunetterieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-bon-lunetterie',
            template: _raw_loader_bon_lunetterie_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_bon_lunetterie_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_12__["EmployeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_14__["PrestataireService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_11__["ConjointService"], src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_13__["EnfantService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            src_app_Services_bonlettre_service__WEBPACK_IMPORTED_MODULE_10__["BonlettreService"], keycloak_angular__WEBPACK_IMPORTED_MODULE_15__["KeycloakService"], _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_16__["UtilisateurService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], BonLunetterieComponent);
    return BonLunetterieComponent;
}());



/***/ }),

/***/ "NvpY":
/*!******************************************************!*\
  !*** ./src/app/Models/IPM_Details_Bon_Lunetterie.ts ***!
  \******************************************************/
/*! exports provided: IPM_Details_Bon_Lunetterie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPM_Details_Bon_Lunetterie", function() { return IPM_Details_Bon_Lunetterie; });
var IPM_Details_Bon_Lunetterie = /** @class */ (function () {
    function IPM_Details_Bon_Lunetterie(id, montant, designation, ipm_bon_lunetterie) {
        this.id = id;
        this.montant = montant;
        this.designation = designation;
        this.ipm_bon_lunetterie = ipm_bon_lunetterie;
    }
    return IPM_Details_Bon_Lunetterie;
}());



/***/ }),

/***/ "OakW":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-bons/bon-lettre/bon-lettre.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Types Bons -->\n\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row tab-content tab-space\" style=\"margin-top:-5.5cm;\">\n\n    </div>\n\n    <div class=\"card-body \">\n      <ul class=\"nav nav-pills nav-pills-warning\" role=\"tablist\">\n\n      </ul>\n\n      <div class=\" tab-content tab-space \">\n\n        <!------>\n        <div class=\" col-md-11 tab-pane active \" id=\"link0\" *ngIf=\"mess1\">\n          <div class=\"card \" style=\"margin-left:1cm;\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">search</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; font-weight: 500; width:40%;\">Rechercher un\n                Employe</h3>\n            </div>\n            <div class=\"card-body \">\n              <form class=\"navbar-form\">\n                <span class=\"bmd-form-group\">\n                  <div class=\"input-group p-2\">\n                    <input type=\"text\" name=\"matricule\" class=\"form-control\" placeholder=\"Matricule\" id=\"matricule\"\n                      [(ngModel)]=\"matricule\">\n\n                  </div>\n                </span>\n              </form>\n            </div>\n\n            <!--[disabled]=\"!searchForm.form.invalid\"-->\n            <div class=\"card-footer\">\n              <button mat-raised-button type=\"submit\" (click)=\"findByMatricule()\" class=\"nav-link \" data-toggle=\"tab\"\n                href=\"#link1\" class=\"btn btn-fill btn-success\" style=\"margin-left: 80%;\"><i\n                  class=\"material-icons\">search</i>Rechercher</button>\n            </div>\n          </div>\n        </div>\n\n        <!------->\n        <div class=\" col-md-11 tab-pane active \" id=\"link0\">\n          <div class=\"card \" style=\"margin-left:1cm;\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">search</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; font-weight: 500; width:40%;\">Rechercher un\n                Employe</h3>\n            </div>\n            <div class=\"card-body \">\n              <form class=\"navbar-form\">\n                <span class=\"bmd-form-group\">\n                  <div class=\"input-group p-2\">\n                    <input type=\"text\" name=\"matricule\" class=\"form-control\" placeholder=\"Matricule\" id=\"matricule\"\n                      [(ngModel)]=\"matricule\">\n\n                  </div>\n                </span>\n              </form>\n            </div>\n\n            <!--[disabled]=\"!searchForm.form.invalid\"-->\n            <div class=\"card-footer\">\n              <button mat-raised-button type=\"submit\" (click)=\"findByMatricule()\" class=\"nav-link \" data-toggle=\"tab\"\n                href=\"#link1\" class=\"btn btn-fill btn-success\" style=\"margin-left: 80%;\"><i\n                  class=\"material-icons\">search</i>Rechercher</button>\n            </div>\n          </div>\n        </div>\n\n        <!-- <div class=\"col-md-6\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-body\">\n              <br>\n  \n              <h4>l'agent {{message.matricule}} existe !!!</h4><br>\n              <table class=\"table table-hover\">\n  \n                <thead class=\"text-primary\">\n  \n                  <th>Nom</th>\n                  <th>Prenom</th>\n                  <th>Sexe</th>\n                  <th>Matricule</th>\n                  <th>Reference</th>\n  \n                </thead>\n                <tbody>\n                  <tr>\n                    <td>{{message.nom}}</td>\n                    <td>{{message.prenom}}</td>\n                    <td>{{message.sexe}}</td>\n                    <td>{{message.matricule}}</td>\n                    <td>{{message.reference}}</td>\n  \n                  </tr>\n                </tbody>\n              </table>\n            </div>\n  \n          </div>\n        </div> -->\n\n\n\n\n        <div class=\"tab-pane \" id=\"link1\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n              <i class=\"material-icons \" >assignment</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; width:40%; font-weight: 500;\">Lettre de\n                Garantie Agent</h3>\n            </div>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"card-header card-header-icon card-header-info\" class=\"btn-btn primary\">\n                  <style>\n                    b,\n                    label {\n                      color: black;\n                      font-size: 18px;\n                    }\n                  </style>\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label>Prénom :</label>\n                        <b> {{message.prenom}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label> Nom :</label>\n                        <b> {{message.nom}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Numero Carnet:</label>\n                        <b> {{message.numero_carnet}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Age:</label>\n                        <b> {{AgeEmploye}}</b>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Sexe:</label>\n                      <b> {{message.sexe}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Date Naissance:</label>\n                      <b> {{message.date_nais}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Lieu de Naissance:</label>\n                      <b> {{message.lieu_nais}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Services:</label>\n                      <b> {{message.ipmService?.type_service}}</b>\n                    </div>\n                  </div>\n                </div>\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <mat-form-field>\n                      <mat-select placeholder=\"lPrestataires\" name=\"prestataires\" [(ngModel)]=\"code_presta\">\n                        <mat-option *ngFor=\"let prest of lprestataires\" [value]=\"prest.code_prestataire\"\n                          (click)=\"getnom(prest)\">\n                          <b> {{ prest.nom_prestataire }}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n\n                  <!-- <div class=\"col-md-8 form-group\">\n                  <label>Motif</label>\n                  <textarea cols=\"5\" rows=\"2\" style=\"background-color:whitesmoke; margin-top: -1cm;\" type=\"text\"\n                    class=\"form-control p-2\" id=\"motif\" [(ngModel)]=\"motif\" name=\"motif\"></textarea>\n                </div> -->\n                  <div class=\"col-md-8 form-group\">\n                    <label>Motif</label>\n                    <textarea cols=\"5\" rows=\"5\" style=\"background-color:rgb(243, 237, 237);\" type=\"text\"\n                      class=\"form-control\" id=\"motif\" [(ngModel)]=\"motif\" name=\"motif\"></textarea>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <!-----Row Vide   data-toggle=\"modal\"\n                    data-target=\"#modalconjoints\"----------------------------->\n                </div>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Joindre Ordonnance\n                    <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectOrdonn($event)\">\n                    <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\">\n                  </div>\n                  <span style=\"float: right\"><b style=\"color: #00b0ff\">{{nomOrdon}}</b></span>\n                </div>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <mat-form-field appearance=\"fill\">\n                      <mat-select placeholder=\"Choisir Conjoints\" name=\"conjoints\" ([ngModel])=\"id_conjoint\">\n                        <mat-option *ngFor=\"let conjoint of conjoints\" [value]=\"conjoint.idconj\" class=\"nav-link \"\n                          data-toggle=\"tab\" href=\"#link2\" role=\"tablist\" (click)=\"getconjointbon(conjoint)\">\n                          <b> {{ conjoint.prenom_conjoint}} {{ conjoint.nom_conjoint}}</b>\n                        </mat-option>\n                      </mat-select>\n\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <mat-form-field appearance=\"fill\">\n                      <mat-select placeholder=\"Choisir Enfants\" name=\"enfants\" ([ngModel])=\"id_enfant\">\n                        <mat-option *ngFor=\"let enfant of enfants\" [value]=\"enfant.idenf\" class=\"nav-link \"\n                          data-toggle=\"tab\" href=\"#link3\" role=\"tablist\" (click)=\"getenfantbon(enfant)\">\n                          <b>{{ enfant.prenom_enfant}} {{ enfant.nom_enfant}}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n\n                <div class=\"modal-footer justify-content-center\">\n                  <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\"\n                    (click)=\"BonNowLettre()\">Enregistrer\n                  </button>\n\n                  <div class=\"col-md-6\" style=\"font-weight:bold;color: black;float: right;\">\n                    <i mat-raised-button type=\"button\" class=\"nav-link\"\n                    data-toggle=\"tab\"  style=\"width: 100px;\" (click)=\"retourserach()\"  role=\"tablist\" class=\"btn btn-info btn-round\">\n                    <span class=\"material-icons\">arrow_back</span></i>\n                  \n                  </div>\n                  <!-- <button mat-raised-button type=\"button\" (click)=\"upload()\" class=\" btn btn-raised btn-round btn btn-danger btn-round\"\n                  >\n                  Exporter</button> -->\n\n                </div>\n\n                <!-- <div class=\"modal-footer justify-content-center\">\n                <button mat-raised-button class=\"btn btn-raised btn-round btn-btn\" (click)=\"upload()\">Exporter Lettre\n                  de Grantie\n                </button>\n\n              </div> -->\n                <div>\n                  <!-- <h4>{{message}} </h4> -->\n                </div>\n\n              </form>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane\" id=\"link2\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">assignment</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; width:45%; font-weight: 500;\">Bon\n                Lettre de Garantie conjoint </h3>\n            </div>\n            <div class=\"card-body\">\n              <button mat-raised-button type=\"submit\"  class=\"nav-link \" data-toggle=\"tab\"\n                href=\"#link1\" class=\"btn btn-fill btn-success\" style=\"\"(click)=\"viderConjoint()\"><i\n                  class=\"material-icons\">search</i>Participant</button>\n              <form>\n                <div class=\"card-header card-header-icon card-header-info\" class=\"btn-btn primary\">\n\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label>Prénom Conjoint :</label>\n                        <b>{{messageconjoint?.prenom_conjoint}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label> Nom Conjoint:</label>\n                        <b>{{messageconjoint?.nom_conjoint}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label> Sexe:</label>\n                        <b>{{messageconjoint?.sexe_conjoint}}</b>\n                      </div>\n                    </div>\n                    <!-- <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Date Naissance:</label>\n                        <b>{{messageconjoint?.date_naiss_conj}}</b>\n                      </div>\n                    </div> -->\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Age:</label>\n                        <b> {{AgeConjoint}}</b>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"message\">\n                  <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Date Naissance:</label>\n                      <b>{{messageconjoint?.date_naiss_conj | date: 'dd/MM/yyyy'}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Lieu de Naissance:</label>\n                      <b>{{messageconjoint?.lieu_naiss_conj}}</b>\n                    </div>\n                  </div>\n\n                </div>\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <mat-form-field>\n                      <mat-select placeholder=\"Prestataires Conjoints\" name=\"lprestataires\" [(ngModel)]=\"code_presta\">\n                        <mat-option *ngFor=\"let prest of lprestataires\" [value]=\"prest.code_prestataire\"\n                          (click)=\"getnom(prest)\">\n                          <b>{{ prest.nom_prestataire }}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-8 form-group\">\n                    <label>Motif</label>\n                    <textarea cols=\"5\" rows=\"5\" style=\"background-color:rgb(243, 237, 237);\" type=\"text\"\n                      class=\"form-control\" id=\"motif\" [(ngModel)]=\"motif\" name=\"motif\"></textarea>\n                  </div>\n                </div>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Joindre Ordonnance\n                    <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectOrdonnConj($event)\">\n                    <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\">\n\n                  </div>\n                  <span style=\"float: right\"><b style=\"color: #00b0ff\">{{nomOrdonConj}}</b></span>\n                </div>\n\n                <div class=\"modal-footer\">\n                  <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" (click)=\"BonConjoint()\"> Enregistrer</button>\n\n                  <!-- <button mat-raised-button type=\"button\" (click)=\"uploadConjoint()\" class=\" btn btn-raised btn-round btn btn-danger btn-round\"\n                    >\n                    Exporter</button> -->\n                </div>\n                \n\n              </form>\n\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane\" id=\"link3\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">assignment</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; width:40%; font-weight: 500;\">Bon\n                Lettre de Garantie Enfant </h3>\n            </div>\n            <div class=\"card-body\">\n              <button mat-raised-button type=\"submit\"  class=\"nav-link \" data-toggle=\"tab\"\n                href=\"#link1\" class=\"btn btn-fill btn-success\" style=\"\"(click)=\"viderEnfant()\"><i\n                  class=\"material-icons\">search</i>Participant</button>\n              <form>\n                <div class=\"card-header card-header-icon card-header-info\" class=\"btn-btn primary\">\n\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label>Prénom Enfant :</label>\n                        <b>{{messageenfant?.prenom_enfant}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label> Nom Enfant:</label>\n                        <b>{{messageenfant?.nom_enfant}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Sexe:</label>\n                        <b>{{messageenfant?.sexe_enfant}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Age:</label>\n                        <b> {{AgeEnfant}}</b>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"message\">\n                  <!-- <div class=\"col-md-4 form-group\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Date Naissance:</label>\n                    <b>{{messageenfant.date_nais}}</b>\n                  </div>\n                </div> -->\n                <div class=\"col-md-3 form-group\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Date Naissance:</label>\n                    <b>{{messageenfant?.date_nais_enfant | date: 'dd/MM/yyyy'}}</b>\n                  </div>\n                </div>\n                  <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Lieu de Naissance:</label>\n                      <b>{{messageenfant?.lieu_nais_enfant}}</b>\n                    </div>\n                  </div>\n\n                </div>\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <mat-form-field>\n                      <mat-select placeholder=\"Prestataires Enfant\" name=\"lprestataires\" [(ngModel)]=\"code_presta\">\n                        <mat-option *ngFor=\"let prest of lprestataires\" [value]=\"prest.code_prestataire\"\n                          (click)=\"getnom(prest)\">\n                          <b>{{ prest.nom_prestataire }}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-8 form-group\">\n                    <label>Motif</label>\n                    <textarea cols=\"5\" rows=\"5\" style=\"background-color:rgb(243, 237, 237);\" type=\"text\"\n                      class=\"form-control\" id=\"motif\" [(ngModel)]=\"motif\" name=\"motif\"></textarea>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Joindre Ordonnance\n                    <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectOrdonnEnf($event)\">\n                    <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\">\n\n                  </div>\n                  <span style=\"float: right\"><b style=\"color: #00b0ff\">{{nomOrdonEnf}}</b></span>\n                </div>\n\n\n\n\n\n\n\n                  <div class=\"modal-footer\">\n                    <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\"\n                      data-target=\"#noticeConjoint\" (click)=\"BonEnfant()\"> Enregistrer</button>\n                    <!-- <button mat-raised-button type=\"button\" (click)=\"uploadEnfant()\" class=\"btn btn-green btn-round\"\n                      data-dismiss=\"modal\">\n                      Exporter</button> -->\n                  </div>\n                  <div>\n\n                  </div>\n\n              </form>\n\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- notice modal -->\n    <div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n      aria-hidden=\"true\" *ngIf=\"message\">\n      <div class=\"modal-dialog modal-notice\">\n        <div class=\"modal-content\" style=\"width: 600px;\">\n          <div class=\"modal-header\">\n            <!-- <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5> -->\n            <button mat-button type=\"button\" class=\"close \" data-dismiss=\"modal\" aria-hidden=\"true\">\n              <i style=\"margin-top: -1.3cm; color: red; font-size: 30px;\" class=\"material-icons\">close</i>\n            </button>\n\n\n          </div>\n          <div class=\"modal-body\">\n\n\n            <div class=\"\" style=\"margin-top: -1cm;\">\n              <div>\n                <img src=\"/assets/img_poste/header1.png\" style=\"width: 100%;\" alt=\"Thumbnail Image\" alt=\"\" />\n              </div>\n            </div>\n            <div class=\"row\">\n\n              <div class=\"col-md-12\">\n                <h4 style=\"text-align:right; font-weight: bold; margin-top: 25px;\">Dakar le:{{jstoday}}</h4>\n              </div>\n            </div>\n            <hr>\n            <div class=\"row\">\n              <div class=\"col-md-6 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Prénom :</label>\n                  <b> {{message.prenom}}</b>\n                </div>\n              </div>\n              <div class=\"col-md-6 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Nom :</label>\n                  <b> {{message.nom}}</b>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <hr>\n              <div class=\"col-md-6 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Prestataire :</label>\n                  <b>{{p}}</b>\n                </div>\n              </div>\n              <!-- <div class=\"col-md-6 form-group\">\n          <div class=\"form-group\">\n            <label class=\"bmd-label-floating\">Numero Carnet:</label>\n            {{message.idemp}}\n          </div>\n        </div> -->\n              <div class=\"col-md-6 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Services:</label>\n                  <b> {{message.ipm_service?.type_service}}</b>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"card-body table-full-width\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-hover table-bordered\">\n                  <thead class=\"\">\n                    <tr style=\"background-color: whitesmoke;\">\n                      <th style=\"font-weight: 600px\">Matricule Participant</th>\n                      <th style=\"font-weight: 600px\">Designation</th>\n                      <th style=\"font-weight: 600px\">Nombre D'article</th>\n\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>{{message.matricule}}</td>\n                      <td>{{designation}}</td>\n                      <td>{{nombre_article}}</td>\n\n                  </tbody>\n\n                </table>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"modal-footer justify-content-center\">\n            <button mat-raised-button type=\"button\" (click)=\"BonNowLettre()\" class=\"btn btn-success btn-round\"\n              data-dismiss=\"modal\">\n              Enregistrer</button>\n          </div>\n          <div class=\"modal-footer justify-content-center\">\n            <button mat-raised-button type=\"button\" (click)=\"upload()\" class=\"btn btn-green btn-round\"\n              data-dismiss=\"modal\">\n              Exporter</button>\n          </div>\n\n        </div>\n\n\n      </div>\n    </div>\n    <!-- end notice modal -->\n  </div>\n</div>\n<!-- Exemple ngTemplate-->\n\n<!-- <div class=\"card\" *ngIf=\"message\">\n    <div class=\"card-header\">\n      <h4 class=\"card-title\">Lettre de Garantie</h4>\n    </div>\n<form class=\"form-horizontal\">\n    <input type=\"hidden\" class=\"form-control\" >\n    <div class=\"form-group row card-header\">\n      <h3 >Dakar,le  </h3>\n      \n      <div class=\"col-md-12 form-group\">\n        <label>Nom du Patient</label>\n        <input type=\"text\" class=\"form-control\" id=\"Nom du Patient\" [(ngModel)]=\"bon.nom_du_patient\" name=\"nom\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label>Numero_Carnet_De_Sante</label>\n        <input type=\"text\" class=\"form-control\" id=\"numero_carnet_de_sante\" [(ngModel)]=\"bon.numero_carnet_de_sante\" name=\"numero_carnet_de_sante\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label>Service</label>\n        <input type=\"text\" class=\"form-control\" id=\"service\" [(ngModel)]=\"bon.service\" name=\"service\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label>Mle de Solde</label>\n        <input type=\"text\" class=\"form-control\" id=\"solde\" [(ngModel)]=\"bon.solde\" name=\"solde\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label>Numero_De_Reference</label>\n        <input type=\"text\" class=\"form-control\" id=\"numero_de_reference\" [(ngModel)]=\"bon.numero_de_reference\" name=\"numero_de_reference\">\n\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <p>Monsieur,</p>\n        <p>Nous avons l'honnneur de vous signaler que les frais de versement de</p>\n        <p>............................................................................................................................................................................................\n        </p>\n        <p>............................................................................................................................................................................................\n        </p>\n        <p>............................................................................................................................................................................................\n          sont garantis par notre institution. </p>\n        <p>Nous vous serons reconnaissants de bien vouloir parvenir votre facture dans un délai \n          n'excédant pas deux(02) mois aprés la date d'établissement de la présente lettre.\n          Veuillez agréer,Monsieur, l'expression de notre considération distinguée.\n\n        </p>\n      </div>\n \n     <div>\n      <h4>{{message}} </h4>\n    </div>\n    </div>\n  </form>\n\n  <div class=\"modal-footer justify-content-center\">\n    <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Enregistrer</button>\n  </div>\n</div> -->");

/***/ }),

/***/ "TGFl":
/*!******************************************************************!*\
  !*** ./src/app/gestion-bons/bon-lettre/bon-lettre.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tYm9ucy9ib24tbGV0dHJlL2Jvbi1sZXR0cmUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "WQyP":
/*!***********************************!*\
  !*** ./src/app/Models/IPM_Bon.ts ***!
  \***********************************/
/*! exports provided: IPM_Bon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPM_Bon", function() { return IPM_Bon; });
var IPM_Bon = /** @class */ (function () {
    function IPM_Bon(idbon, total, ipm_employe, ipm_prestataire, ipm_enfant, ipm_conjoint, ipm_prestation, dateEtablissement, ipm_utilisateur) {
        this.idbon = idbon;
        this.total = total;
        this.ipm_employe = ipm_employe;
        this.ipm_prestataire = ipm_prestataire;
        this.ipm_enfant = ipm_enfant;
        this.ipm_conjoint = ipm_conjoint;
        this.ipm_prestation = ipm_prestation;
        this.dateEtablissement = dateEtablissement;
        this.ipm_utilisateur = ipm_utilisateur;
    }
    return IPM_Bon;
}());



/***/ }),

/***/ "gkPT":
/*!***********************************************!*\
  !*** ./src/app/Services/bonlettre.service.ts ***!
  \***********************************************/
/*! exports provided: BonlettreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonlettreService", function() { return BonlettreService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BonlettreService = /** @class */ (function () {
    function BonlettreService(http) {
        this.http = http;
    }
    BonlettreService.prototype.SaveBonLettre = function (bonlettre) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'bonlettre', bonlettre, { responseType: 'text' });
    };
    BonlettreService.prototype.SaveDetailsBonLettre = function (Detailsbonlettre) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'ipm_details_bon_lunetterie', Detailsbonlettre, { responseType: 'text' });
    };
    BonlettreService.prototype.uploadFile = function (file) {
        var formData = new FormData();
        // console.log("file.name :"+file.name) 
        // console.log("file.size :"+file.size) 
        formData.append('file', file, file.name);
        // formData.append('enfant', enfant);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + "uploadeOrdonnanceL", formData, { responseType: 'text' });
    };
    BonlettreService.prototype.uploadFileDevit = function (file) {
        var formData = new FormData();
        // console.log("file.name :"+file.name) 
        // console.log("file.size :"+file.size) 
        formData.append('file', file, file.name);
        // formData.append('enfant', enfant);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + "uploadeDevitLu", formData, { responseType: 'text' });
    };
    BonlettreService.prototype.SaveBonConsultation = function (bonConsultation) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'bonconsult', bonConsultation, { responseType: 'text' });
    };
    BonlettreService.prototype.uploadFileConsult = function (file) {
        var formData = new FormData();
        // console.log("file.name :"+file.name) 
        // console.log("file.size :"+file.size) 
        formData.append('file', file, file.name);
        // formData.append('enfant', enfant);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + "uploadeOrdonnanceC", formData, { responseType: 'text' });
    };
    // SaveBonLunetterie
    BonlettreService.prototype.SaveBonLunetterie = function (SaveBonLunetterie) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'bonLunetterie', SaveBonLunetterie, { responseType: 'text' });
    };
    BonlettreService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    BonlettreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], BonlettreService);
    return BonlettreService;
}());



/***/ }),

/***/ "gzP8":
/*!******************************************************************!*\
  !*** ./src/app/gestion-bons/ajout-bons/ajout-bons.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    \n.modal-dialog {\n        max-width:800px;\n        margin: 1.75rem auto;\n} \n  \n  h3{\n        text-align: left;\n  } \n  \n  .mat-radio-button ~ .mat-radio-button {\n      margin-left: 16px;\n    } \n  \n  .mat-radio-button.checked[type=\"radio\"]\n    {visibility:hidden;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VzdGlvbi1ib25zL2Fqb3V0LWJvbnMvYWpvdXQtYm9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7UUFDUSxlQUFlO1FBQ2Ysb0JBQW9CO0FBQzVCOztFQUVFO1FBQ00sZ0JBQWdCO0VBQ3RCOztFQUNBO01BQ0ksaUJBQWlCO0lBQ25COztFQUNBO0tBQ0MsaUJBQWlCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9nZXN0aW9uLWJvbnMvYWpvdXQtYm9ucy9ham91dC1ib25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBcbi5tb2RhbC1kaWFsb2cge1xuICAgICAgICBtYXgtd2lkdGg6ODAwcHg7XG4gICAgICAgIG1hcmdpbjogMS43NXJlbSBhdXRvO1xufSBcbiAgXG4gIGgze1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuICAgIC5tYXQtcmFkaW8tYnV0dG9uLmNoZWNrZWRbdHlwZT1cInJhZGlvXCJdXG4gICAge3Zpc2liaWxpdHk6aGlkZGVuO30iXX0= */");

/***/ }),

/***/ "ibBo":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-bons/bon-consultation/bon-consultation.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Types Bons -->\n\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row tab-content tab-space\" style=\"margin-top:-5.5cm;\">\n\n    </div>\n\n    <div class=\"card-body \">\n      <ul class=\"nav nav-pills nav-pills-warning\" role=\"tablist\">\n\n      </ul>\n      <div class=\" tab-content tab-space \">\n\n        <!------>\n        <div class=\" col-md-11 tab-pane active \" id=\"link0\"  *ngIf=\"mess1\">\n          <div class=\"card \" style=\"margin-left:1cm;\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">search</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; font-weight: 500; width:40%;\">Rechercher un\n                Participant</h3>\n            </div>\n            <div class=\"card-body \">\n              <form class=\"navbar-form\">\n                <span class=\"bmd-form-group\">\n                  <div class=\"input-group p-2\">\n                    <input type=\"text\" name=\"matricule\" class=\"form-control\" placeholder=\"Matricule\" id=\"matricule\"\n                      [(ngModel)]=\"matricule\">\n\n                  </div>\n                </span>\n              </form>\n            </div>\n\n            <!--[disabled]=\"!searchForm.form.invalid\"-->\n            <div class=\"card-footer\">\n              <button mat-raised-button type=\"submit\" (click)=\"findByMatricule()\" class=\"nav-link \" data-toggle=\"tab\"\n                href=\"#link1\" class=\"btn btn-fill btn-success\" style=\"margin-left: 80%;\"><i\n                  class=\"material-icons\">search</i>Rechercher</button>\n            </div>\n          </div>\n        </div>\n        <!------>\n        <div class=\" col-md-11 tab-pane active \" id=\"link0\">\n          <div class=\"card \" style=\"margin-left:1cm;\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">search</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; font-weight: 500; width:40%;\">Rechercher un\n                Employe</h3>\n            </div>\n            <div class=\"card-body \">\n              <form class=\"navbar-form\">\n                <span class=\"bmd-form-group\">\n                  <div class=\"input-group p-2\">\n                    <input type=\"text\" name=\"matricule\" class=\"form-control\" placeholder=\"Matricule\" id=\"matricule\"\n                      [(ngModel)]=\"matricule\">\n\n                  </div>\n                </span>\n              </form>\n            </div>\n\n            <!--[disabled]=\"!searchForm.form.invalid\"-->\n            <div class=\"card-footer\">\n              <button mat-raised-button type=\"submit\" (click)=\"findByMatricule()\" class=\"nav-link \" data-toggle=\"tab\"\n                href=\"#link1\" class=\"btn btn-fill btn-success\" style=\"margin-left: 80%;\"><i\n                  class=\"material-icons\">search</i>Rechercher</button>\n            </div>\n          </div>\n        </div>\n\n        <!-- <div class=\"col-md-6\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-body\">\n              <br>\n  \n              <h4>l'agent {{message.matricule}} existe !!!</h4><br>\n              <table class=\"table table-hover\">\n  \n                <thead class=\"text-primary\">\n  \n                  <th>Nom</th>\n                  <th>Prenom</th>\n                  <th>Sexe</th>\n                  <th>Matricule</th>\n                  <th>Reference</th>\n  \n                </thead>\n                <tbody>\n                  <tr>\n                    <td>{{message.nom}}</td>\n                    <td>{{message.prenom}}</td>\n                    <td>{{message.sexe}}</td>\n                    <td>{{message.matricule}}</td>\n                    <td>{{message.reference}}</td>\n  \n                  </tr>\n                </tbody>\n              </table>\n            </div>\n  \n          </div>\n        </div> -->\n\n\n\n\n        <div class=\"tab-pane \" id=\"link1\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">assignment</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; width:35%; font-weight: 500;\">Bon Consultation Agent</h3>\n            </div>\n            <div class=\"card-body\">\n\n              <form>\n                <div class=\"card-header card-header-icon card-header-info\" class=\"btn-btn primary\">\n                  <style>\n                    b,\n                    label {\n                      color: black;\n                      font-size: 18px;\n                    }\n                  </style>\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label>Prénom :</label>\n                        <b> {{message.prenom}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label> Nom :</label>\n                        <b> {{message.nom}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Numero Carnet:</label>\n                        <b> {{message.numero_carnet}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Age :</label>\n                        <b> {{AgeEmploye}}</b>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Sexe:</label>\n                      <b> {{message.sexe}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Date Naissance:</label>\n                      <b> {{message.date_nais}}</b>\n                    </div>\n                  </div>\n                  \n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Lieu de Naissance:</label>\n                      <b> {{message.lieu_nais}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Services:</label>\n                      <b> {{message.ipmService?.type_service}}</b>\n                    </div>\n                  </div>\n                </div>\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <mat-form-field>\n                      <label for=\"Prestataires\"><b>Choisir une Prestataire</b> </label>\n                      <mat-select  name=\"prestataires\" [(ngModel)]=\"code_presta\">\n                        <mat-option *ngFor=\"let prest of lprestataires\" [value]=\"prest.code_prestataire\"\n                          (click)=\"getnom(prest)\">\n                          <b> {{ prest.nom_prestataire }}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n\n                 \n                  <div class=\"col-md-4 form-group\" >\n                    <mat-form-field>\n                      <label for=\"Prestataires\"><b>Choisir une Prestation</b> </label>\n                      <mat-select  name=\"Prestation\" [(ngModel)]=\"Prestation\">\n                        <mat-option *ngFor=\"let pret of listPrestation\" [value]=\"pret.code_prestation\" (click)=\"getPrestation(pret)\">\n                        <b> {{ pret.libelle }}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-2 form-group\">\n                    \n                    <label class=\"bmd-label-floating\">Nombre de Bon :</label>\n                    <b> {{listBon.length}}</b>\n                    \n                  </div>\n                </div>\n                <hr>\n<!--                <div class=\"row\">-->\n<!--                  &lt;!&ndash;-&#45;&#45;Row Vide   data-toggle=\"modal\"-->\n<!--                    data-target=\"#modalconjoints\"-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->\n<!--                </div>-->\n\n                <div class=\"row\">\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Joindre Ordonnance\n                    <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectOrdonn($event)\">\n                    <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\">\n                  </div>\n                  <span style=\"float: right\"><b style=\"color: #00b0ff\">{{nomOrdon}}</b></span>\n                </div>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <mat-form-field appearance=\"fill\">\n                      <mat-select placeholder=\"Choisir Conjoints\" name=\"conjoints\" ([ngModel])=\"id_conjoint\">\n                        <mat-option *ngFor=\"let conjoint of conjoints\" [value]=\"conjoint.idconj\" class=\"nav-link \"\n                          data-toggle=\"tab\" href=\"#link2\" role=\"tablist\" (click)=\"getconjointbon(conjoint)\">\n                          <b> {{ conjoint.prenom_conjoint}} {{ conjoint.nom_conjoint}}</b>\n                        </mat-option>\n                      </mat-select>\n\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <mat-form-field appearance=\"fill\">\n                      <mat-select placeholder=\"Choisir Enfants\" name=\"enfants\" ([ngModel])=\"id_enfant\">\n                        <mat-option *ngFor=\"let enfant of enfants\" [value]=\"enfant.idenf\" class=\"nav-link \"\n                          data-toggle=\"tab\" href=\"#link3\" role=\"tablist\" (click)=\"getenfantbon(enfant)\">\n                          <b>{{ enfant.prenom_enfant}} {{ enfant.nom_enfant}}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n\n                <div class=\"modal-footer justify-content-center\">\n                  <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\"\n                    (click)=\"BonConsultation()\">Enregistrer\n                  </button>\n\n                  <div class=\"col-md-6\" style=\"font-weight:bold;color: black;float: right;\">\n                    <i mat-raised-button type=\"button\" class=\"nav-link\"\n                    data-toggle=\"tab\"  style=\"width: 100px;\" (click)=\"retourserach()\"  role=\"tablist\" class=\"btn btn-info btn-round\">\n                    <span class=\"material-icons\">arrow_back</span></i>\n                  \n                  </div>\n                  <!-- <button mat-raised-button type=\"button\" (click)=\"upload()\" class=\" btn btn-raised btn-round btn btn-danger btn-round\"\n                    >\n                    Exporter</button> -->\n\n                </div>\n\n                <!-- <div class=\"modal-footer justify-content-center\">\n                <button mat-raised-button class=\"btn btn-raised btn-round btn-btn\" (click)=\"upload()\">Exporter Lettre\n                  de Grantie\n                </button>\n\n              </div> -->\n                <div>\n                  <!-- <h4>{{message}} </h4> -->\n                </div>\n\n              </form>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane\" id=\"link2\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">assignment</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; width:40%; font-weight: 500;\">Bon Consultation Conjoint  </h3>\n            </div>\n            <div class=\"card-body\">\n              <button mat-raised-button type=\"submit\"  class=\"nav-link \" data-toggle=\"tab\"\n                href=\"#link1\" class=\"btn btn-fill btn-success\" style=\"\"(click)=\"viderConjoint()\"><i\n                  class=\"material-icons\">search</i>Participant</button>\n              <form>\n                <div class=\"card-header card-header-icon card-header-info\" class=\"btn-btn primary\">\n\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label>Prénom Conjoint :</label>\n                        <b>{{messageconjoint?.prenom_conjoint}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label> Nom Conjoint:</label>\n                        <b>{{messageconjoint?.nom_conjoint}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Sexe:</label>\n                        <b>{{messageconjoint?.sexe_conjoint}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Age :</label>\n                        <b> {{AgeConjoint}}</b>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"message\">\n                  <!-- <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Date Naissance:</label>\n                      <b>{{message.date_nais}}</b>\n                    </div>\n                  </div> -->\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Date Naissance:</label>\n                      <b>{{messageconjoint?.date_naiss_conj | date: 'dd/MM/yyyy'}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Lieu de Naissance:</label>\n                      <b>{{messageconjoint?.lieu_naiss_conj}}</b>\n                    </div>\n                  </div>\n\n                </div>\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <mat-form-field>\n                      <label for=\"Prestataires\"><b>Choisir une Prestataire</b> </label>\n                      <mat-select name=\"lprestataires\" [(ngModel)]=\"code_presta\">\n                        <mat-option *ngFor=\"let prest of lprestataires\" [value]=\"prest.code_prestataire\"\n                          (click)=\"getnom(prest)\">\n                          <b>{{ prest.nom_prestataire }}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4 form-group\" >\n                    <mat-form-field>\n                      <label for=\"Prestataires\"><b>Choisir une Prestation</b> </label>\n                      <mat-select  name=\"Prestation\" [(ngModel)]=\"Prestation\">\n                        <mat-option *ngFor=\"let pret of listPrestation\" [value]=\"pret.code_prestation\" (click)=\"getPrestation(pret)\">\n                        <b> {{ pret.libelle }}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <!-- <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Joindre Ordonnance\n                    <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectOrdonn($event)\">\n                    <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\">\n\n                  </div>\n                </div> -->\n\n                <div class=\"modal-footer\">\n                  <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\"\n                    data-target=\"#noticeConjoint\" (click)=\"BonConsultation()\"> Enregistrer</button>\n                    <!-- <button mat-raised-button type=\"button\" (click)=\"uploadConjoint()\" class=\" btn btn-raised btn-round btn btn-danger btn-round\"\n                    >\n                    Exporter</button> -->\n                </div>\n                \n\n              </form>\n\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane\" id=\"link3\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">assignment</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; width:40%; font-weight: 500;\">Bon Consultation Enfant </h3>\n            </div>\n            <div class=\"card-body\">\n              <button mat-raised-button type=\"submit\"  class=\"nav-link \" data-toggle=\"tab\"\n                href=\"#link1\" class=\"btn btn-fill btn-success\" style=\"\" (click)=\"viderEnfant()\"><i\n                  class=\"material-icons\">search</i>Participant</button>\n              <form>\n                <div class=\"card-header card-header-icon card-header-info\" class=\"btn-btn primary\">\n\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label>Prénom Enfant :</label>\n                        <b>{{messageenfant?.prenom_enfant}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label> Nom Enfant:</label>\n                        <b>{{messageenfant?.nom_enfant}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Sexe:</label>\n                        <b>{{messageenfant?.sexe_enfant}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Age :</label>\n                        <b> {{AgeEnfant}}</b>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"message\">\n                  <!-- <div class=\"col-md-4 form-group\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Date Naissance:</label>\n                    <b>{{messageenfant.date_nais}}</b>\n                  </div>\n                </div> -->\n                <div class=\"col-md-3 form-group\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Date Naissance:</label>\n                    <b>{{messageenfant?.date_nais_enfant | date: 'dd/MM/yyyy'}}</b>\n                  </div>\n                </div>\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Lieu de Naissance:</label>\n                      <b>{{messageenfant?.lieu_nais_enfant}}</b>\n                    </div>\n                  </div>\n\n                </div>\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <mat-form-field>\n                      <label for=\"Prestataires\"><b>Choisir une Prestataire</b> </label>\n                      <mat-select  name=\"lprestataires\" [(ngModel)]=\"code_presta\">\n                        <mat-option *ngFor=\"let prest of lprestataires\" [value]=\"prest.code_prestataire\"\n                          (click)=\"getnom(prest)\">\n                          <b>{{ prest.nom_prestataire }}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4 form-group\" >\n                    <mat-form-field>\n                      \n                      <label for=\"Prestataires\"><b>Choisir une Prestation</b> </label>\n                      <mat-select  name=\"Prestation\" [(ngModel)]=\"Prestation\">\n                        <mat-option *ngFor=\"let pret of listPrestation\" [value]=\"pret.code_prestation\" (click)=\"getPrestation(pret)\">\n                        <b> {{ pret.libelle }}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <!-- <div class=\"row\">\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Joindre Ordonnance\n                    <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectOrdonn($event)\">\n                    <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\">\n\n                  </div>\n                </div> -->\n\n\n\n\n\n\n\n                  <div class=\"modal-footer\">\n                    <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\"\n                      data-target=\"#noticeConjoint\" (click)=\"BonEnfant()\"> Enregistrer</button>\n                      <!-- <button mat-raised-button type=\"button\" (click)=\"uploadEnfant()\" class=\" btn btn-raised btn-round btn btn-danger btn-round\"\n                      >\n                      Exporter</button> -->\n                  </div>\n                  <div>\n\n                  </div>\n\n              </form>\n\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- notice modal -->\n    <div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n      aria-hidden=\"true\" *ngIf=\"message\">\n      <div class=\"modal-dialog modal-notice\">\n        <div class=\"modal-content\" style=\"width: 600px;\">\n          <div class=\"modal-header\">\n            <!-- <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5> -->\n            <button mat-button type=\"button\" class=\"close \" data-dismiss=\"modal\" aria-hidden=\"true\">\n              <i style=\"margin-top: -1.3cm; color: red; font-size: 30px;\" class=\"material-icons\">close</i>\n            </button>\n\n\n          </div>\n          <div class=\"modal-body\">\n\n\n            <div class=\"\" style=\"margin-top: -1cm;\">\n              <div>\n                <img src=\"/assets/img_poste/header1.png\" style=\"width: 100%;\" alt=\"Thumbnail Image\" alt=\"\" />\n              </div>\n            </div>\n            <div class=\"row\">\n\n              <div class=\"col-md-12\">\n                <h4 style=\"text-align:right; font-weight: bold; margin-top: 25px;\">Dakar le:{{jstoday}}</h4>\n              </div>\n            </div>\n            <hr>\n            <div class=\"row\">\n              <div class=\"col-md-6 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Prénom :</label>\n                  <b> {{message.prenom}}</b>\n                </div>\n              </div>\n              <div class=\"col-md-6 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Nom :</label>\n                  <b> {{message.nom}}</b>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <hr>\n              <div class=\"col-md-6 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Prestataire :</label>\n                  <b>{{p}}</b>\n                </div>\n              </div>\n              <!-- <div class=\"col-md-6 form-group\">\n          <div class=\"form-group\">\n            <label class=\"bmd-label-floating\">Numero Carnet:</label>\n            {{message.idemp}}\n          </div>\n        </div> -->\n              <div class=\"col-md-6 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Services:</label>\n                  <b> {{message.ipm_service?.type_service}}</b>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"card-body table-full-width\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-hover table-bordered\">\n                  <thead class=\"\">\n                    <tr style=\"background-color: whitesmoke;\">\n                      <th style=\"font-weight: 600px\">Matricule Participant</th>\n                      <th style=\"font-weight: 600px\">Designation</th>\n                      <th style=\"font-weight: 600px\">Nombre D'article</th>\n\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>{{message.matricule}}</td>\n                      <td>{{designation}}</td>\n                      <td>{{nombre_article}}</td>\n\n                  </tbody>\n\n                </table>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"modal-footer justify-content-center\">\n            <button mat-raised-button type=\"button\" (click)=\"BonNowLettre()\" class=\"btn btn-success btn-round\"\n              data-dismiss=\"modal\">\n              Enregistrer</button>\n          </div>\n          <div class=\"modal-footer justify-content-center\">\n            <button mat-raised-button type=\"button\" (click)=\"upload()\" class=\"btn btn-green btn-round\"\n              data-dismiss=\"modal\">\n              Exporter</button>\n          </div>\n\n        </div>\n\n\n      </div>\n    </div>\n    <!-- end notice modal -->\n  </div>\n</div>\n<!-- Exemple ngTemplate-->\n\n<!-- <div class=\"card\" *ngIf=\"message\">\n    <div class=\"card-header\">\n      <h4 class=\"card-title\">Lettre de Garantie</h4>\n    </div>\n<form class=\"form-horizontal\">\n    <input type=\"hidden\" class=\"form-control\" >\n    <div class=\"form-group row card-header\">\n      <h3 >Dakar,le  </h3>\n      \n      <div class=\"col-md-12 form-group\">\n        <label>Nom du Patient</label>\n        <input type=\"text\" class=\"form-control\" id=\"Nom du Patient\" [(ngModel)]=\"bon.nom_du_patient\" name=\"nom\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label>Numero_Carnet_De_Sante</label>\n        <input type=\"text\" class=\"form-control\" id=\"numero_carnet_de_sante\" [(ngModel)]=\"bon.numero_carnet_de_sante\" name=\"numero_carnet_de_sante\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label>Service</label>\n        <input type=\"text\" class=\"form-control\" id=\"service\" [(ngModel)]=\"bon.service\" name=\"service\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label>Mle de Solde</label>\n        <input type=\"text\" class=\"form-control\" id=\"solde\" [(ngModel)]=\"bon.solde\" name=\"solde\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label>Numero_De_Reference</label>\n        <input type=\"text\" class=\"form-control\" id=\"numero_de_reference\" [(ngModel)]=\"bon.numero_de_reference\" name=\"numero_de_reference\">\n\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <p>Monsieur,</p>\n        <p>Nous avons l'honnneur de vous signaler que les frais de versement de</p>\n        <p>............................................................................................................................................................................................\n        </p>\n        <p>............................................................................................................................................................................................\n        </p>\n        <p>............................................................................................................................................................................................\n          sont garantis par notre institution. </p>\n        <p>Nous vous serons reconnaissants de bien vouloir parvenir votre facture dans un délai \n          n'excédant pas deux(02) mois aprés la date d'établissement de la présente lettre.\n          Veuillez agréer,Monsieur, l'expression de notre considération distinguée.\n\n        </p>\n      </div>\n \n     <div>\n      <h4>{{message}} </h4>\n    </div>\n    </div>\n  </form>\n\n  <div class=\"modal-footer justify-content-center\">\n    <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Enregistrer</button>\n  </div>\n</div> -->");

/***/ }),

/***/ "k4JN":
/*!*****************************************************************!*\
  !*** ./src/app/gestion-bons/liste-bons/liste-bons.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListeBonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeBonsComponent", function() { return ListeBonsComponent; });
/* harmony import */ var _raw_loader_liste_bons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./liste-bons.component.html */ "Atm+");
/* harmony import */ var _liste_bons_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liste-bons.component.css */ "v8SR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_Models_Conjoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Models/Conjoint */ "4uqQ");
/* harmony import */ var src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Models/Employe */ "5GYJ");
/* harmony import */ var src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Models/Enfant */ "yLBP");
/* harmony import */ var src_app_Models_IPM_Bon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Models/IPM_Bon */ "WQyP");
/* harmony import */ var src_app_Models_IPM_Bon_Pharmaceutique__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Models/IPM_Bon_Pharmaceutique */ "MSLL");
/* harmony import */ var src_app_Models_Prestataire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Models/Prestataire */ "gL+i");
/* harmony import */ var src_app_Services_bon_pharmacie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Services/bon-pharmacie.service */ "xDD7");
/* harmony import */ var src_app_Services_bon_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/Services/bon.service */ "AhZP");
/* harmony import */ var src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/Services/conjoint.service */ "NbTU");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/Services/enfant.service */ "ABBt");
/* harmony import */ var src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/Services/prestataire.service */ "3m7+");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../Services/utilisateur.service */ "MVAf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var ListeBonsComponent = /** @class */ (function () {
    function ListeBonsComponent(dateform, emp_service, router, route, pres_service, bonpharma, bont, conj_service, enf_service, toastr, datePipe, keycloak, user_Service) {
        var _this = this;
        this.dateform = dateform;
        this.emp_service = emp_service;
        this.router = router;
        this.route = route;
        this.pres_service = pres_service;
        this.bonpharma = bonpharma;
        this.bont = bont;
        this.conj_service = conj_service;
        this.enf_service = enf_service;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.keycloak = keycloak;
        this.user_Service = user_Service;
        this.employes = [];
        this.conjoints = [];
        //////////////////////-----Recuperation Conjoints/////////////////////
        this.conjoint = new src_app_Models_Conjoint__WEBPACK_IMPORTED_MODULE_8__["Conjoint"]();
        this.currentprestataire = new src_app_Models_Prestataire__WEBPACK_IMPORTED_MODULE_13__["Prestataire"]();
        this.enfant = new src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_10__["Enfant"]();
        this.currentemploye = new src_app_Models_Employe__WEBPACK_IMPORTED_MODULE_9__["Employe"]();
        this.messageconjoint = new src_app_Models_Conjoint__WEBPACK_IMPORTED_MODULE_8__["Conjoint"]();
        this.enfants = [];
        this.today = new Date();
        this.jstoday = '';
        this.bons = [];
        this.nombre_article = 0;
        //dateform =new Date();
        this.b = new src_app_Models_IPM_Bon__WEBPACK_IMPORTED_MODULE_11__["IPM_Bon"](0, "", null, null, null, null, null, null, null);
        this.bon = new src_app_Models_IPM_Bon_Pharmaceutique__WEBPACK_IMPORTED_MODULE_12__["IPM_Bon_Pharmaceutique"](0, 0, null, "", null, null, "", null, null, null, null, null, null, "", null, null);
        this.desactive = false;
        this.maDate = new Date();
        this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(Date.now(), 'dd-MM-yyyy', this.dateform);
        this.addPrestataire = new src_app_Models_Prestataire__WEBPACK_IMPORTED_MODULE_13__["Prestataire"]();
        this.addconjoint = new src_app_Models_Conjoint__WEBPACK_IMPORTED_MODULE_8__["Conjoint"]();
        this.addenfant = new src_app_Models_Enfant__WEBPACK_IMPORTED_MODULE_10__["Enfant"]();
        this.keycloak.loadUserProfile().then(function (res) {
            console.log(res);
            _this.user = res;
            _this.MonUser = _this.user;
            _this.getUserByUsernameF(res.username);
        });
    }
    ListeBonsComponent.prototype.getUserByUsernameF = function (username) {
        var _this = this;
        console.log(username);
        return this.user_Service.getUserByUsername(username).subscribe(function (data) {
            console.log(data);
            _this.user = data;
            console.log(_this.user.prenom);
            console.log(_this.user.nom);
        });
    };
    ListeBonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getPrestat();
        // debugger
        this.pres_service.getTypePestataires('Pharmacie').subscribe(function (pres) {
            // console.log(cat);
            _this.lprestataires = pres;
            console.log(_this.lprestataires);
        });
        this.pres_service.getBon().subscribe(function (pres) {
            // console.log(cat);
            _this.listB = pres;
            console.log(_this.listB);
            console.log(_this.listB[_this.listB.length - 1].numeroBon);
            console.log(_this.listB[_this.listB.length - 1].numeroBon.slice(4));
            _this.numero = _this.listB[_this.listB.length - 1].numeroBon.slice(4);
            _this.numero++;
            console.log(_this.numero);
        });
        // this.b.ipm_employe=this.currentemploye;
        this.b.ipm_prestataire = this.currentprestataire;
        this.ide = this.route.snapshot.params['id'];
        this.bont.listeBon(this.ide).subscribe(function (bonsss) {
            console.log(bonsss);
            _this.b = bonsss;
            _this.b.ipm_employe = JSON.parse(JSON.stringify(_this.currentemploye));
            console.log(_this.bons);
        });
        this.id = this.route.snapshot.params['id'];
        this.emp_service.getEmployeById(this.id).subscribe(function (result) {
            _this.currentemploye = result;
        });
    };
    ListeBonsComponent.prototype.getnom = function (prest) {
        var _this = this;
        this.prestatair = prest;
        this.pres_service.getTypePestataires('Pharmacie').subscribe(function (pres) {
            console.log(prest.code_prestataire);
            console.log(prest.nom_prestataire);
            _this.prestataires = pres;
            _this.p = prest.nom_prestataire;
            _this.idp = prest.code_prestataire;
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
        });
    };
    ListeBonsComponent.prototype.selectOrdonn = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrdonne = event.target.files[0];
        this.nomOrdon = this.selectOrdonne.name;
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    ListeBonsComponent.prototype.selectOrdonnConj = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrdonne = event.target.files[0];
        this.nomOrdonConj = this.selectOrdonne.name;
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    ListeBonsComponent.prototype.selectOrdonnEnf = function (event) {
        var _this = this;
        //selectCertif
        this.selectOrdonne = event.target.files[0];
        this.nomOrdonEnf = this.selectOrdonne.name;
        var readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = function (event) {
            _this.OrdonnanceURL = readerr.result;
        };
    };
    ListeBonsComponent.prototype.viderConjoint = function () {
        this.findByMatricule();
    };
    ListeBonsComponent.prototype.viderEnfant = function () {
        this.findByMatricule();
    };
    /////////////Recuperer un enfant pour lui choisir bon
    ListeBonsComponent.prototype.getenfantbon = function (enfant) {
        var _this = this;
        this.idbenf = enfant.idenf;
        this.enf_service.getEnfantById(enfant.idenf).subscribe(function (data) {
            _this.messageenfant = data;
            console.log(_this.messageenfant);
            // const date = this.datePipe.transform(this.enfant.date_nais_enfant, "dd-MM-yyyy");
            var date = _this.messageenfant.date_nais_enfant;
            console.log(date);
            var b = new Date(date);
            var ttoday = new Date();
            _this.AgeEnfant = ttoday.getFullYear() - b.getFullYear();
            var m = ttoday.getMonth() - b.getMonth();
            console.log(_this.message.date_nais);
            console.log(ttoday);
            if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
                _this.AgeEnfant--;
                // console.log(this.messageconjoint.date_naiss_conj);
            }
            console.log(_this.AgeEnfant);
        });
    };
    /////////////Recuperer un coinjoint pour lui choisir bon
    ListeBonsComponent.prototype.getconjointbon = function (conjoint) {
        var _this = this;
        this.idbconj = conjoint.idconj;
        this.conj_service.getConjointById(conjoint.idconj).subscribe(function (data) {
            _this.messageconjoint = data;
            console.log(data);
            var dateC = _this.messageconjoint.date_naiss_conj;
            console.log(dateC);
            var bC = new Date(dateC);
            var today = new Date();
            _this.AgeConjoint = today.getFullYear() - bC.getFullYear();
            var mC = today.getMonth() - bC.getMonth();
            console.log(_this.message.date_nais);
            console.log(mC);
            if (mC < 0 || (mC === 0 && today.getDate() < bC.getDate())) {
                _this.AgeConjoint--;
                // console.log(this.messageconjoint.date_naiss_conj);
            }
            console.log(_this.AgeConjoint);
            // if (this.messageconjoint.date_naiss_conj) {
            //convert date again to type Date
            //convert date again to type Date
            var date = _this.messageconjoint.date_naiss_conj;
            console.log(date);
            var b = new Date(date);
            console.log(b);
            console.log(date);
            console.log(b);
            var ttoday = new Date();
            // const timeDiff = Math.abs(Date.now() - bdate.getTime());
            //this.agemploye= Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
            _this.Ageconjoin = ttoday.getFullYear() - b.getFullYear();
            var m = ttoday.getMonth() - b.getMonth();
            console.log(_this.messageconjoint.date_naiss_conj);
            console.log(_this.message.date_naiss_conj);
            if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
                _this.Ageconjoin--;
                // console.log(this.messageconjoint.date_naiss_conj);
            }
            console.log(_this.Ageconjoin);
        });
    };
    ListeBonsComponent.prototype.getEmployeById = function (employe) {
        var _this = this;
        this.emp_service.getEmployeById(employe.idemp).subscribe(function (result) {
            _this.currentemploye = result;
            _this.router.navigate(['/gestion-bons/Ajouterbons/' + employe.idemp]);
        });
    };
    ListeBonsComponent.prototype.getPrestBy = function (prest) {
        var _this = this;
        this.pres_service.getPrestataireById(prest.code_prestataire).subscribe(function (result) {
            _this.currentprestataire = result;
            console.log(_this.currentprestataire.nom_prestataire);
            _this.router.navigate(['/gestion-bons/Ajouterbons/' + prest.idpres]);
        });
    };
    ///////////////////Recuperer les prestataires
    // public getPrestat(){
    //   this.pres_service.getAllPestataires().subscribe(
    //     pres => {
    //      // console.log(cat);
    //       this.prestataires = pres;
    //       console.log(this.prestataires);
    //     }
    //   )
    // }
    ListeBonsComponent.prototype.findByMatricule = function () {
        var _this = this;
        ///////Rechercher l'employé
        // debugger
        console.log(this.matricule);
        this.emp_service.getEmployeByMatricule(this.matricule).subscribe(function (data) {
            _this.mess = data;
            if (_this.mess) {
                console.log(_this.mess);
            }
            else {
                _this.mess1 = "yess";
                console.log("charlessssssssssssss");
                _this.showNotification('top', 'center', 3, "<b>matricule n'existe pas</b> :");
            }
            if (data.statut == true) {
                _this.message = data;
                _this.idemploye = _this.message.idemp;
                console.log(_this.message);
            }
            else {
                console.log(_this.message);
                _this.mess1 = "yess";
                _this.showNotification('top', 'center', 3, "<b>agent de numero matricule " + _this.matricule + " ne beneficie plus de L'IPM</b> :");
            }
            _this.emp_service.getlistBon(_this.message.idemp).subscribe(function (res) {
                _this.listBon = res;
                console.log(_this.listBon);
            });
            var date = _this.message.date_nais;
            console.log(date);
            var b = new Date(date);
            console.log(_this.message.date_nais);
            console.log(date);
            console.log(b);
            var ttoday = new Date();
            // const timeDiff = Math.abs(Date.now() - bdate.getTime());
            //this.agemploye= Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
            _this.ageE = ttoday.getFullYear() - b.getFullYear();
            var m = ttoday.getMonth() - b.getMonth();
            console.log(_this.message.date_nais);
            if (m < 0 || (m === 0 && ttoday.getDate() < b.getDate())) {
                _this.ageE--;
            }
            _this.matr = _this.message.idemp;
            console.log(_this.ageE);
            _this.enfant = _this.message;
            console.log(_this.enfant);
            ///////Rechercher les enfants en fontion de l'employé
            _this.enf_service.listeEnfant(_this.message.idemp).subscribe(function (enfs) {
                _this.enfants = enfs;
                _this.enfants.forEach(function (ele) {
                    if (ele.date_nais_enfant) {
                        //convert date again to type Date
                        var bdate = new Date(ele.date_nais_enfant);
                        var timeDiff = Math.abs(Date.now() - bdate.getTime());
                        _this.agenft = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                    }
                    console.log(_this.agenft);
                    if (_this.agenft > 21) {
                        console.log("Age atteinte impossible de ce beneficier à l'ipm :", _this.agenft);
                        ele.active = false;
                        console.log(ele.active);
                        console.log("age depasse");
                    }
                    else if (_this.agenft < 21) {
                        console.log("Voici l'age :", _this.agenft);
                        ele.active = true;
                        console.log(ele.active);
                        console.log("age non depasse");
                    }
                });
                console.log(_this.enfants);
                _this.enfants = _this.enfants.filter(function (serv) { return serv.active == true; });
                console.log(_this.enfants);
            });
            ///////Rechercher les conjoints en fontion de l'employé
            _this.conj_service.listeConjoint(_this.message.idemp).subscribe(function (conjs) {
                _this.conjoints = conjs;
                console.log(_this.conjoints);
            });
            //   if(this.message){
            //     this.showNotification('top','center',1,'<b>agent existe</b> :')
            //     console.log(this.message);
            //   }
            // else if(!this.message){
            //     console.log("not existe");
            //     this.showNotification('top','center',3,"<b>agent n'existe pas</b> :")
            //   }
        }, function (err) {
            console.log(err);
            console.log('*************************************');
            _this.showNotification('top', 'center', 3, "<b>matricule n'existe pas</b> :");
        });
    };
    ListeBonsComponent.prototype.showNotification = function (from, align, idtype, note) {
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
    /////////////////Save Bon Employé
    ListeBonsComponent.prototype.BonNow = function () {
        var _this = this;
        var _a;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        //let strBEm=dayBEm.getFullYear().toString()
        // this.numBEm=0+''+dayBEm.getDate()+''+this.mois+''+this.strBEm.charAt(2)+''+this.strBEm.charAt(3)+''+this.valInt
        // console.log(this.numBEm);
        this.numBEm = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        this.bon.ipm_employe = this.message;
        this.addPrestataire.code_prestataire = this.idp;
        this.bon.ipm_prestataire = this.prestatair;
        this.bon.numeroBon = this.numBEm;
        console.log(this.bon.numeroBon);
        // this.bont.AjoutBon(this.b).subscribe(
        //   (data)=>{this.message=data});
        console.log(this.b);
        console.log(this.b.ipm_employe);
        console.log(this.b.ipm_prestataire);
        // this.router.navigate(['/gestion-bons/Listebons']);
        console.log(this.designation, this.nombre_article);
        this.bon.designation = this.designation;
        this.bon.dateEtablissement = new Date();
        this.bon.nombre_article = this.nombre_article;
        this.bon.ipm_utilisateur = this.user;
        //this.bon.prix_unitaire=this.prix_unitaire;
        this.bon.ordonnance = (_a = this.selectOrdonne) === null || _a === void 0 ? void 0 : _a.name;
        if (this.bon.ipm_prestataire
            && this.bon.numeroBon && this.bon.dateEtablissement) {
            console.log(this.bon);
            this.bonpharma.AjouterBonPharmacie(this.bon).subscribe(function (data) {
                _this.upload();
                //this.router.navigate(['/gestion-bons/Listebons'])
            });
            console.log(this.selectOrdonne);
            this.bonpharma.uploadFile(this.selectOrdonne).subscribe(function (data) {
                //imprimer bon pharmacie
                //Fin //////////////////
            });
            console.log(this.bon.ipm_prestataire);
            console.log(this.bon);
            this.showNotification('top', 'center', 1, '<b>bon pharmacie ajouté avec succées!!!</b> :');
        }
        else {
            this.showNotification('top', 'center', 3, "<b>bon pharmacie non ajouté</b> :");
        }
    };
    ListeBonsComponent.prototype.retourserach = function () {
        console.log('************************************');
        window.location.reload();
    };
    /////////////////Save Bon Conjoint
    ListeBonsComponent.prototype.BonConjoint = function () {
        var _this = this;
        var dayBEm = new Date();
        //   this.prenomEm=this.message.prenom
        // this.nomEm=this.message.nom
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        // this.nom=this.bon.ipm_employe.prenom
        this.bon.ipm_employe = this.message;
        this.addPrestataire.code_prestataire = this.idp;
        this.bon.ipm_prestataire = JSON.parse(JSON.stringify(this.addPrestataire));
        this.addconjoint.idconj = this.idbconj;
        this.bon.ipm_conjoint = JSON.parse(JSON.stringify(this.addconjoint));
        this.bon.dateEtablissement = new Date();
        this.bon.ipm_utilisateur = this.user;
        console.log(this.bon.ipm_conjoint);
        console.log(this.b);
        console.log(this.b.ipm_employe);
        console.log(this.b.ipm_prestataire);
        // this.router.navigate(['/gestion-bons/Listebons']);
        console.log(this.designation, this.nombre_article);
        this.bon.designation = this.designation;
        this.bon.nombre_article = this.nombre_article;
        //this.bon.prix_unitaire=this.prix_unitaire;
        this.bon.ordonnance = this.selectOrdonne.name;
        this.bon.numeroBon = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        //  this.bon.numeroBon=(Math.floor(Math.random() * 100) + 1 +'' +((this.maDate.getMonth() + 1))+ '' 
        //  +this.maDate.getFullYear().toString().charAt(2)+''+this.maDate.getFullYear().toString().charAt(3)+ 
        //  '' +this.Ageconjoin);
        if (this.bon.ipm_prestataire && this.bon.nombre_article && this.bon.ordonnance && this.bon.dateEtablissement) {
            this.bonpharma.AjouterBonPharmacie(this.bon).subscribe(function (data) {
                _this.uploadConjoint();
            });
            this.bonpharma.uploadFile(this.selectOrdonne).subscribe(function (data) {
            });
            console.log(this.bon.ipm_prestataire);
            console.log(this.bon);
            this.showNotification('top', 'center', 1, '<b>bon pharmacie ajouté avec succées!!!</b> :');
        }
        else {
            this.showNotification('top', 'center', 3, "<b>bon pharmacie non ajouté</b> :");
        }
    };
    /////////////////Save Bon Enfants
    ListeBonsComponent.prototype.BonEnfant = function () {
        var _this = this;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        // this.nom=this.bon.ipm_employe.prenom
        this.bon.ipm_employe = this.message;
        this.addPrestataire.code_prestataire = this.idp;
        this.bon.ipm_prestataire = JSON.parse(JSON.stringify(this.addPrestataire));
        this.addenfant.idenf = this.idbenf;
        this.bon.ipm_enfant = JSON.parse(JSON.stringify(this.addenfant));
        this.bon.dateEtablissement = new Date();
        this.bon.ipm_utilisateur = this.user;
        console.log(this.mois);
        console.log(this.strBEm.charAt(2));
        console.log(this.strBEm.charAt(3));
        console.log(this.numero.toString());
        this.bon.numeroBon = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        console.log(this.bon.ipm_enfant);
        console.log(this.b);
        console.log(this.b.ipm_employe);
        console.log(this.b.ipm_prestataire);
        // this.router.navigate(['/gestion-bons/Listebons']);
        console.log(this.designation, this.nombre_article);
        this.bon.designation = this.designation;
        this.bon.nombre_article = this.nombre_article;
        //this.bon.prix_unitaire=this.prix_unitaire;
        this.bon.ordonnance = this.selectOrdonne.name;
        if (this.bon.ipm_prestataire
            && this.bon.numeroBon && this.bon.nombre_article && this.bon.ordonnance && this.bon.dateEtablissement) {
            this.bonpharma.AjouterBonPharmacie(this.bon).subscribe(function (data) {
                _this.uploadEnfant();
            });
            this.bonpharma.uploadFile(this.selectOrdonne).subscribe(function (data) { });
            console.log(this.bon.ipm_prestataire);
            console.log(this.bon);
            this.showNotification('top', 'center', 1, '<b>bon pharmacie ajouté avec succées!!!</b> :');
        }
        else {
            this.showNotification('top', 'center', 3, "<b>bon pharmacie non ajouté</b> :");
        }
    };
    ///////////////////////// Imprimer Bon Employé
    ListeBonsComponent.prototype.upload = function () {
        var _a;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        console.log(this.message);
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        var imgData = '/ipm-fronte/assets/img_poste/header1.png';
        var col = [["Quantité", "Designation", "P.unitaire", "Montant"]];
        var rows = [];
        if (this.bon.ipm_employe = this.message.idemp) {
            //let tmp=[this.designation,this.nombre_article]
            for (var index = 1; index < 10; index++) {
                var tmp = [];
                rows.push(tmp);
            }
            //rows.push(tmp)
            //rows.push()
        }
        var ipm1 = this.message.prenom;
        var ipm2 = this.message.nom;
        var sexe = this.message.sexe;
        var ipm3 = this.p;
        var age = this.ageE;
        var Pmalade = this.message.prenom;
        var Narticle = this.nombre_article;
        var Ncarnet = this.message.numero_carnet;
        var ipm4 = (_a = this.message.ipmService) === null || _a === void 0 ? void 0 : _a.type_service;
        var ipm = this.message.matricule;
        var numBon = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        var prenonConnec = this.user.prenom;
        var nomConnec = this.user.nom;
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 100,
            head: col,
            body: rows,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "grid",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.mes²sage;
                doc.addImage(imgData, 'JPEG', 15, 5, 180, 20);
                doc.setFontSize(15);
                doc.text("", 72, 46);
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(60, 30, 105, 20);
                doc.setFillColor(240, 240, 240);
                doc.rect(13, 65, 185, 35, 'F');
                //doc.setFillColor(240,240,240)
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("BON DE COMMANDE", 85, 36);
                doc.text("POUR PRODUIT PHARMACEUTIQUE", 70, 45);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 60);
                doc.text("N° BON : ", 13, 60);
                doc.text(" " + numBon, 30, 60);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 60);
                doc.setFontSize(12);
                doc.text("Malade :" + ipm1 + " " + ipm2, 15, 75);
                //doc.text(ipm1+" "+ipm2,50,75)
                doc.setFontSize(12);
                //  doc.text("",90,75)
                //  doc.text(ipm2,80,75)
                doc.text("Matricule :" + ipm, 120, 75);
                doc.text("Sexe :" + sexe, 163, 75);
                doc.text("N Carnet :", 15, 85);
                doc.text("" + Ncarnet, 40, 85);
                doc.text("Age : " + age, 80, 85);
                //doc.text(""+age,30,85)
                //  doc.text("N Bon :",55,85)
                //  doc.text(""+numBon,75,85)
                doc.text("Nombre D'article :", 120, 85);
                doc.text("" + Narticle, 160, 85);
                //  doc.setFontSize(12)
                //  doc.text("MALADE :",15,85)
                //  doc.text(ipm1,40,85)
                //  doc.text("",15,85)
                //  doc.text(ipm2,80,85)
                doc.setFontSize(12);
                doc.text("Prestataire :", 15, 95);
                doc.text(ipm3, 40, 95);
                doc.setFontSize(12);
                doc.text("Services :", 93, 95);
                doc.text(ipm4, 113, 95);
                doc.text("Total :", 140, 180);
                doc.text("Demandeur", 150, 250);
                doc.text("" + prenonConnec + "   " + nomConnec, 15, 250);
            }
        });
        doc.output('dataurlnewwindow');
        // let data = document.getElementById('noticeModal'); 
        // const printContents = document.getElementById('noticeModal').innerHTML;
        //    const originalContents = document.body.innerHTML;
        //    document.body.innerHTML = printContents;
        //    window.print();
        //    document.body.innerHTML = originalContents;
    };
    ///////////////////////// Imprimer Bon Conjoint
    ListeBonsComponent.prototype.uploadConjoint = function () {
        var _a, _b, _c, _d, _e, _f;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        var imgData = '/ipm-fronte/assets/img_poste/header1.png';
        var col = [["Quantité", "Designation", "P.unitaire", "Montant"]];
        var rows = [];
        if (this.bon.ipm_employe = this.message.idemp) {
            //let tmp=[this.designation,this.nombre_article]
            for (var index = 1; index < 10; index++) {
                var tmp = [];
                rows.push(tmp);
            }
        }
        var ipm1 = (_a = this.message) === null || _a === void 0 ? void 0 : _a.prenom;
        var ipm2 = (_b = this.message) === null || _b === void 0 ? void 0 : _b.nom;
        var ipm3 = this.p;
        var ageC = this.Ageconjoin;
        var ipm4 = (_c = this.message.ipmService) === null || _c === void 0 ? void 0 : _c.type_service;
        var ipm5 = (_d = this.messageconjoint) === null || _d === void 0 ? void 0 : _d.prenom_conjoint;
        var ipm6 = (_e = this.messageconjoint) === null || _e === void 0 ? void 0 : _e.nom_conjoint;
        var ipm = this.message.matricule;
        var Narticle = this.nombre_article;
        var Ncarnet = this.message.numero_carnet;
        var sexe = (_f = this.messageconjoint) === null || _f === void 0 ? void 0 : _f.sexe_conjoint;
        var numBonConj = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 100,
            head: col,
            body: rows,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "grid",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                doc.addImage(imgData, 'JPEG', 15, 5, 180, 20);
                doc.setFontSize(15);
                doc.text("", 72, 46);
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(60, 30, 105, 20);
                doc.setFillColor(240, 240, 240);
                doc.rect(13, 65, 185, 35, 'F');
                //doc.setFillColor(240,240,240)
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("BON DE COMMANDE", 85, 36);
                doc.text("POUR PRODUIT PHARMACEUTIQUE", 70, 45);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 60);
                doc.text("N° BON: ", 13, 60);
                doc.text("" + numBonConj, 30, 60);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 60);
                doc.setFontSize(12);
                doc.text("Participant:", 15, 75);
                doc.text(ipm1 + " " + ipm2, 40, 75);
                //  doc.text(ipm2,80,75) 
                doc.text("Matricule:", 120, 75);
                doc.text(ipm, 140, 75);
                doc.setFontSize(12);
                doc.text("N Carnet :", 15, 85);
                doc.text("" + Ncarnet, 40, 85);
                doc.text("Age : " + ageC, 80, 85);
                doc.text("Nombre D'article :", 120, 85);
                doc.text("" + Narticle, 160, 85);
                doc.text("Malade :" + ipm5 + " " + ipm6, 15, 95);
                //doc.text(ipm5+" "+ipm6,40,95)
                doc.text("Sexe :" + sexe, 90, 95);
                doc.text("Prestataire :", 125, 95);
                doc.text(ipm3, 145, 95);
                doc.text("Total :", 140, 180);
            }
        });
        doc.output('dataurlnewwindow');
        // let data = document.getElementById('noticeModal'); 
        // const printContents = document.getElementById('noticeModal').innerHTML;
        //    const originalContents = document.body.innerHTML;
        //    document.body.innerHTML = printContents;
        //    window.print();
        //    document.body.innerHTML = originalContents;
    };
    ///////////////////////// Imprimer Bon Enfant
    ListeBonsComponent.prototype.uploadEnfant = function () {
        var _a, _b, _c, _d, _e;
        var dayBEm = new Date();
        if (dayBEm.getMonth() < 10) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            this.mois = 0 + '' + m;
            console.log('infer', this.mois, this.strBEm);
        }
        else if (dayBEm.getMonth() > 9) {
            this.strBEm = dayBEm.getFullYear().toString();
            var m = dayBEm.getMonth() + 1;
            console.log('sup', this.mois);
            this.mois = m;
        }
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
        var imgData = '/ipm-fronte/assets/img_poste/header1.png';
        var col = [["Quantité", "Designation", "P.unitaire", "Montant"]];
        var rows = [];
        if (this.bon.ipm_employe = this.message.idemp) {
            //let tmp=[this.designation,this.nombre_article]
            for (var index = 1; index < 10; index++) {
                var tmp = [];
                rows.push(tmp);
            }
        }
        var ipm1 = (_a = this.message) === null || _a === void 0 ? void 0 : _a.prenom;
        var ipm2 = (_b = this.message) === null || _b === void 0 ? void 0 : _b.nom;
        var ipm3 = this.p;
        var ageE = this.AgeEnfant;
        var ipm4 = (_c = this.message.ipm_service) === null || _c === void 0 ? void 0 : _c.type_service;
        var ipm5 = this.messageenfant.prenom_enfant;
        var ipm6 = (_d = this.messageenfant) === null || _d === void 0 ? void 0 : _d.nom_enfant;
        var sexe = (_e = this.messageenfant) === null || _e === void 0 ? void 0 : _e.sexe_enfant;
        var ipm = this.message.matricule;
        var Narticle = this.nombre_article;
        var Ncarnet = this.message.numero_carnet;
        var numBonEnf = this.mois + '' + this.strBEm.charAt(2) + '' + this.strBEm.charAt(3) + '' + this.numero;
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default()(doc, {
            startY: 100,
            head: col,
            body: rows,
            margin: { horizontal: 10 },
            styles: { overflow: "linebreak" },
            bodyStyles: { valign: "top" },
            theme: "grid",
            didDrawPage: function (data) {
                //this.bon.ipm_employe=this.message;
                doc.addImage(imgData, 'JPEG', 15, 5, 180, 20);
                doc.setFontSize(15);
                doc.text("", 72, 46);
                // doc.text("Bon Pharmacie:Institut prévoyance de maladie de la poste",50,30)
                doc.setLineWidth(2);
                doc.setDrawColor("#3A6EA5");
                doc.rect(60, 30, 105, 20);
                doc.setFillColor(240, 240, 240);
                doc.rect(13, 65, 185, 35, 'F');
                //doc.setFillColor(240,240,240)
                doc.setFontSize(15);
                doc.setTextColor("#3A6EA5");
                doc.text("BON DE COMMANDE", 85, 36);
                doc.text("POUR PRODUIT PHARMACEUTIQUE", 70, 45);
                doc.setTextColor("");
                var date = new Date();
                doc.setFontSize(13);
                doc.text("Dakar, le :", 150, 60);
                doc.text("N° BON: ", 13, 60);
                doc.text(" " + numBonEnf, 30, 60);
                doc.text(date.toLocaleDateString("fr-FR"), 172, 60);
                doc.setFontSize(12);
                doc.text("Participant:", 15, 75);
                doc.text(ipm1 + " " + ipm2, 40, 75);
                //  doc.text(ipm2,80,75) 
                doc.text("Matricule:", 120, 75);
                doc.text(ipm, 140, 75);
                doc.setFontSize(12);
                doc.text("N Carnet :", 15, 85);
                doc.text("" + Ncarnet, 40, 85);
                doc.text("Age : " + ageE, 80, 85);
                doc.text("Nombre D'article :", 120, 85);
                doc.text("" + Narticle, 160, 85);
                doc.text("Malade :" + ipm5 + " " + ipm6, 15, 95);
                //doc.text(ipm5+" "+ipm6,40,95)
                doc.text("Sexe :" + sexe, 90, 95);
                //  doc.text(ipm6,80,95)
                doc.text("Prestataire :", 125, 95);
                doc.text(ipm3, 145, 95);
                doc.text("Total :", 140, 180);
            }
        });
        doc.output('dataurlnewwindow');
        // let data = document.getElementById('noticeModal'); 
        // const printContents = document.getElementById('noticeModal').innerHTML;
        //    const originalContents = document.body.innerHTML;
        //    document.body.innerHTML = printContents;
        //    window.print();
        //    document.body.innerHTML = originalContents;
    };
    ListeBonsComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"],] }] },
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_17__["EmployeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_19__["PrestataireService"] },
        { type: src_app_Services_bon_pharmacie_service__WEBPACK_IMPORTED_MODULE_14__["BonPharmacieService"] },
        { type: src_app_Services_bon_service__WEBPACK_IMPORTED_MODULE_15__["BonService"] },
        { type: src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_16__["ConjointService"] },
        { type: src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_18__["EnfantService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_20__["KeycloakService"] },
        { type: _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_21__["UtilisateurService"] }
    ]; };
    ListeBonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-liste-bons',
            template: _raw_loader_liste_bons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_liste_bons_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [String, src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_17__["EmployeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_Services_prestataire_service__WEBPACK_IMPORTED_MODULE_19__["PrestataireService"],
            src_app_Services_bon_pharmacie_service__WEBPACK_IMPORTED_MODULE_14__["BonPharmacieService"], src_app_Services_bon_service__WEBPACK_IMPORTED_MODULE_15__["BonService"],
            src_app_Services_conjoint_service__WEBPACK_IMPORTED_MODULE_16__["ConjointService"], src_app_Services_enfant_service__WEBPACK_IMPORTED_MODULE_18__["EnfantService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], keycloak_angular__WEBPACK_IMPORTED_MODULE_20__["KeycloakService"], _Services_utilisateur_service__WEBPACK_IMPORTED_MODULE_21__["UtilisateurService"]])
    ], ListeBonsComponent);
    return ListeBonsComponent;
}());



/***/ }),

/***/ "m1DS":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-bons/ajout-bons/ajout-bons.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                <h4 class=\"card-title\">Bienvenue dans la page d'ajout des bons</h4>\n                \n                </div>\n                <div class=\"card-body\">\n                <div id=\"accordion\" role=\"tablist\">\n                    <div class=\"card-collapse\">\n                        <button mat-raised-button style=\"float: right;\" class=\"btn btn-raised btn-round btn-info\" data-toggle=\"modal\" data-target=\"#bon_pharmacie\">\n                            Ajout_bon_pharmacie\n                        </button>\n                    <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                        <h5 class=\"mb-0\">  \n                        <a data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\" class=\"collapsed\">\n                            Bon_Pharmaceutique    \n                        </a>\n                        </h5>\n                    </div>\n                    <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\" style=\"\">\n                        <div class=\"card-body\">\n                        \n                        </div>\n                    </div>\n                    </div>\n                    <div class=\"card-collapse\">\n                        <button mat-raised-button style=\"float: right;\" class=\"btn btn-raised btn-round btn-info\" data-toggle=\"modal\" data-target=\"#bon_consultation\">\n                            Ajout_bon_consult\n                        </button>\n                    <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n                        <h5 class=\"mb-0\">\n                        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                            Bon_Consultation\n                        </a>\n                        </h5>\n                    </div>\n                    <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                        \n                    </div>\n                    </div>\n                    <div class=\"card-collapse\">\n                      <button mat-raised-button style=\"float: right;\" class=\"btn btn-raised btn-round btn-info\" data-toggle=\"modal\" data-target=\"#bon_de_lunetterie\">\n                          Ajout_bon_lunette\n                      </button>\n                  <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n                      <h5 class=\"mb-0\">\n                      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                          Bon_De_Lunetterie \n                      </a>\n                      </h5>\n                  </div>\n                  <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                      \n                  </div>\n                  </div>\n                    <div class=\"card-collapse\">\n                        <button mat-raised-button style=\"float: right;\" class=\"btn btn-raised btn-round btn-info\" data-toggle=\"modal\" data-target=\"#bon_lettre_de_garantie\">\n                            Ajout_bon_lettre\n                        </button>\n                    <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n                        <h5 class=\"mb-0\">\n                        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                            Bon_Lettre_de_Garantie\n                        </a>\n                        </h5>\n                    </div>\n                    <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n                        \n                    </div>\n                    </div>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- bon_pharmacie -->\n\n<div class=\"modal fade\" id=\"bon_pharmacie\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div id=\"content\">  <div class=\"modal-dialog modal-notice \" id=\"contente\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"myModalLabel\">Ajout des Bons Pharmaceutique</h5>\n          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n            <i class=\"material-icons\">close</i>\n          </button>\n        </div>\n        <form class=\"form-horizontal\">\n            <input type=\"hidden\" class=\"form-control\" >\n            <div class=\"form-group row card-header \">\n              <div class=\"card-header card-header-icon card-header-info\"  class=\"btn-btn primary\">\n         \n          \n            <div class=\"col-md-6 form-group\">\n            <div class=\"form-group\">\n              <label class=\"bmd-label-floating\">Prénom Nom:</label>\n              {{currentemploye.prenom}} {{currentemploye.nom}}\n            </div>\n          </div>\n              <div class=\"col-md-4 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Matricule:</label>  \n                  {{currentemploye.matricule}}        \n               </div>\n              </div>\n              <div class=\"col-md-4 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Numero Carnet:</label>  \n                  {{currentemploye.idemp}}        \n               </div>\n              </div>\n              <div class=\"col-md-4 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Services:</label>  \n                  {{currentemploye.ipm_service?.type_service}}        \n               </div>\n              </div>\n              </div>\n            \n              <div class=\"col-md-4 form-group\">\n                <div class=\"form-group\">\n                <label>Nombre_D'Article</label>\n              <input type=\"text\" class=\"form-control\" id=\"nombre_article\" [(ngModel)]=\"bon.nombre_article\" name=\"nombre_article\">\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <mat-form-field>\n                <mat-select placeholder=\"Prestataires\" name=\"prestataire\">\n                  <mat-option *ngFor=\"let pres of prestataire\" [value]=\"pres.code_categorie_pretataire\">\n                    {{ pres.nom_prestataire }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>   \n            </div>\n            <!--  <div class=\"example-container\">\n                <form [formGroup]=\"options\">\n              <div class=\"col-md-6 form-group\">\n                    <label>Malade</label>\n               \n                <mat-radio-group [formControl]=\"floatLabelControl\">\n                  <mat-radio-button  value=\"auto\">Conjoint</mat-radio-button>\n                  <mat-radio-button (change)=\"radioChangeHandler($event)\" value=\"always\">Enfant</mat-radio-button>\n                </mat-radio-group>\n             \n                \n              </div>\n              <div class=\"col-md-6 form-group\">\n                <mat-form-field appearance=\"fill\"\n                [hideRequiredMarker]=\"hideRequiredControl.value\"\n                [floatLabel]=\"floatLabelControl.value\">\n                    <mat-select placeholder=\"Choisir Conjoints\"  [(ngModel)]=\"conjoint\"> \n                      <mat-option *ngFor=\"let conjoint of conjoints\"  [value]=\"conjoint.nom_conjoint\"  [value]=\"conjoint.prenom_conjoint\">\n                       {{ conjoint.prenom_conjoint}}   {{ conjoint.nom_conjoint}}  \n                      </mat-option>\n                    </mat-select>\n                </mat-form-field>\n          \n          </div>\n          </form> \n          </div>  -->\n        \n              <div class=\"col-md-6 form-group\">\n                  <label>Quantite</label>\n                <input type=\"text\" class=\"form-control\" id=\"quantite\" [(ngModel)]=\"bon.quantite\" name=\"quantite\">\n              </div>\n              <div class=\"col-md-6 form-group\">\n                <label>Designation</label>\n              <input type=\"text\" class=\"form-control\" id=\"designation\" [(ngModel)]=\"bon.designation\" name=\"designation\">\n            </div>\n          </div>\n            <div class=\"row\">\n              <div class=\"col-md-8 ml-auto mr-auto\">\n                <div class=\"page-categories\">\n                  <h4 class=\"title text-center\">Choisir Conjoints ou Enfants</h4>\n                  <br />\n                  <ul class=\"nav nav-pills nav-pills-warning nav-pills-icons justify-content-center\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\n                        <i class=\"material-icons\">person</i> Conjoints\n                      </a>\n                    </li>\n  \n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\n                        <i class=\"material-icons\">person</i> Enfants\n                      </a>\n                    </li>\n                   \n                  </ul>\n                  <div class=\"tab-content tab-space tab-subcategories\">\n                    <div class=\"tab-pane\" id=\"link7\">\n                      <div class=\"card\">\n                       \n                        <div class=\"card-body\">\n                           \n          \n          \n                    <label>Malade</label>\n             \n                <mat-form-field appearance=\"fill\"> \n                    <mat-select placeholder=\"Choisir Conjoints\"  [(ngModel)]=\"conjoint\"> \n                      <mat-option *ngFor=\"let conjoint of conjoints\"  [value]=\"conjoint.nom_conjoint\"  [value]=\"conjoint.prenom_conjoint\">\n                       {{ conjoint.prenom_conjoint}}   {{ conjoint.nom_conjoint}}  \n                      </mat-option>\n                    </mat-select>\n                </mat-form-field>\n        \n     \n       \n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"tab-pane active\" id=\"link8\">\n                      <div class=\"card\">\n                        <div class=\"card-header\">\n                          \n                         \n                        </div>\n                        <div class=\"card-body\">\n                          Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                          <br>\n                          <br> Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                        </div>\n                      </div>\n                    </div>\n                   \n                 \n                  </div>\n                </div>\n              </div>\n            </div>\n          \n              <!-- <div class=\"card-body table-full-width\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover\">\n                        <thead class=\"text-primary\">\n                            <tr>\n                              <th>Code_Remb, 64800</th>\n                              <th >Code P Non Remb, 64801</th>\n                              <th >Quantite</th>\n                              <th >Designation</th>\n                              <th >P.Unitaire</th>\n                              <th >Total</th>\n                            </tr>\n                        </thead>\n                        <tbody >\n                              <tr *ngFor=\" let bon of bons\">\n                                  <td>{{bon.code_remb_64800}}</td>\n                                  <td >{{bon.code_p_non_Remb_64801}}</td>\n                                  <td >{{bon.quantite}}</td>\n                                  <td >{{bon.designation}}</td>\n                                  <td >{{bon.prix_unitaire}}</td>\n                                  <td>{{bon.total}}</td>\n                                  <td >{{employe.lieu_nais}}</td>\n                                  <td >{{employe.telephone}}</td>\n                                  <td >{{employe.date_recrutement}}</td>\n                                  <td >{{employe.matricule}}</td>\n                                  <td>{{employe.reference}}</td>\n                                  <td >{{employe.numero_carnet}}</td>\n                                  <td >{{employe.situation_familial}}</td>\n                                  <td >{{employe.solde}}</td>\n                                  <td >{{employe.cumul_charge}}</td>\n                                  <td >{{employe.niveau_salarial}}</td>\n                                  <td>\n                                    <a  class=\"btn btn-success\" [routerLink]=\"['/gestion-employes/ModifierEmployes/'+employe.idemp]\">\n                                        Modifier\n                                    </a>\n                                  </td>\n                                  <td>\n                                    <a  class=\"btn btn-danger\" (click)=\"supprimerEmploye(employe)\">\n                                        supprimer\n                                    </a>\n                                  </td>\n                                  \n                            </tr>\n                           \n                        </tbody>\n                    </table>\n                    </div>\n                    </div> -->\n              \n             <div>\n              <h4>{{message}} </h4>\n            </div>\n            </div>\n          </form>\n        \n        <div class=\"modal-footer justify-content-center\">\n          <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\" (click)=\"BonNow();\">Enregistrer Bon Pharmaceutique</button>\n        </div>\n        <div class=\"modal-footer justify-content-center\">\n          <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Annuler</button>\n        </div>\n    </div>\n  </div>\n</div>\n  <!-- bon_consultation -->\n  <div class=\"modal fade\" id=\"bon_consultation\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-notice \">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"myModalLabel\">feuille de maladie</h5>\n          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n            <i class=\"material-icons\">close</i>\n          </button>\n        </div>\n        <form class=\"form-horizontal\">\n            <input type=\"hidden\" class=\"form-control\" >\n            <div class=\"form-group row card-header\">\n              \n              <div class=\"col-md-12 form-group\">\n                <label>Numero_Carnet</label>\n              <input type=\"text\" class=\"form-control\" id=\"numero_carnet\" [(ngModel)]=\"bon.numero_carnet\" name=\"numero_carnet\">\n            </div>\n              <div class=\"col-md-8 form-group\">\n                  <label>Code de Fournisseur</label>\n                <input type=\"text\" class=\"form-control\" id=\"code_fournisseur\" [(ngModel)]=\"bon.code_fournisseur\" name=\"code_fournisseur\">\n              </div>\n              <div class=\"col-md-4 form-group\">\n                  <label>Numero Saisie Facture</label>\n                <input type=\"text\" class=\"form-control\" id=\"n_saisie_facture\" [(ngModel)]=\"bon.n_saisie_facture\" name=\"n_saisie_facture\">\n              </div>\n              <div class=\"col-md-12 form-group\">\n                  <label>Prénom de/des Malade(s)</label>\n                <input type=\"text\" class=\"form-control\" id=\"prenom_malade\" [(ngModel)]=\"bon.prenom_malade\" name=\"prenom_malade\">\n              </div>\n              <div class=\"col-md-4 form-group\">\n                  <label>Date de Demande</label>\n                <input type=\"date\" class=\"form-control\" id=\"date_demande\" [(ngModel)]=\"bon.date_demande\" name=\"date_demande\">\n              </div>\n              <div class=\"col-md-4 form-group\">\n                  <label>Date de Reception de Facture</label>\n                <input type=\"date\" class=\"form-control\" id=\"date_reception_facture\" [(ngModel)]=\"bon.date_reception_facture\" name=\"date_reception_facture\">\n              </div>\n                \n              <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto\">\n                  <div class=\"page-categories\">\n                    <h4 class=\"title text-center\">Choisir Conjoints ou Enfants</h4>\n                    <br />\n                    <ul class=\"nav nav-pills nav-pills-warning nav-pills-icons justify-content-center\" role=\"tablist\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\n                          <i class=\"material-icons\">person</i> Conjoints\n                        </a>\n                      </li>\n    \n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\n                          <i class=\"material-icons\">person</i> Enfants\n                        </a>\n                      </li>\n                     \n                    </ul>\n                    <div class=\"tab-content tab-space tab-subcategories\">\n                      <div class=\"tab-pane\" id=\"link7\">\n                        <div class=\"card\">\n                          <div class=\"card-header\">\n                            <h4 class=\"card-title\">Description about product</h4>\n                            <p class=\"card-category\">\n                              More information here\n                            </p>\n                          </div>\n                          <div class=\"card-body\">\n                            Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                            <br>\n                            <br> Dramatically visualize customer directed convergence without revolutionary ROI.\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"tab-pane active\" id=\"link8\">\n                        <div class=\"card\">\n                          <div class=\"card-header\">\n                            <h4 class=\"card-title\">Location of the product</h4>\n                            <p class=\"card-category\">\n                              More information here\n                            </p>\n                          </div>\n                          <div class=\"card-body\">\n                            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                            <br>\n                            <br> Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                          </div>\n                        </div>\n                      </div>\n                     \n                   \n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-body table-full-width\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover\">\n                        <thead class=\"text-primary\">\n                            <tr>\n                              <th>Date Prestation</th>\n                              <th >Code Prestation</th>\n                              <th >Nature Prestation</th>\n                              <th >Montant</th>\n                              <th >T.P.S</th>\n                            </tr>\n                        </thead>\n                        <tbody >\n                              <tr *ngFor=\" let bon of bons\">\n                                  <td>{{bon.code_remb_64800}}</td>\n                                  <td >{{bon.code_p_non_Remb_64801}}</td>\n                                  <td >{{bon.quantite}}</td>\n                                  <td >{{bon.designation}}</td>\n                                  <td >{{bon.prix_unitaire}}</td>\n                                  <td>{{bon.total}}</td>\n                                  <td >{{employe.lieu_nais}}</td>\n                                  <td >{{employe.telephone}}</td>\n                                  <td >{{employe.date_recrutement}}</td>\n                                  <td >{{employe.matricule}}</td>\n                                  <td>{{employe.reference}}</td>\n                                  <td >{{employe.numero_carnet}}</td>\n                                  <td >{{employe.situation_familial}}</td>\n                                  <td >{{employe.solde}}</td>\n                                  <td >{{employe.cumul_charge}}</td>\n                                  <td >{{employe.niveau_salarial}}</td>\n                                  <td>\n                                    <a  class=\"btn btn-success\" [routerLink]=\"['/gestion-employes/ModifierEmployes/'+employe.idemp]\">\n                                        Modifier\n                                    </a>\n                                  </td>\n                                  <td>\n                                    <a  class=\"btn btn-danger\" (click)=\"supprimerEmploye(employe)\">\n                                        supprimer\n                                    </a>\n                                  </td>\n                                  \n                            </tr>\n                           \n                        </tbody>\n                    </table>\n                    </div>\n                    </div>\n              \n             <div>\n              <h4>{{message}} </h4>\n            </div>\n            </div>\n          </form>\n        <div class=\"modal-footer justify-content-center\">\n          <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\" (click)=\"makePDF();\">Valider</button>\n        </div>\n      </div>\n    </div>\n  </div>\n<!-- bon_de_lunetterie -->\n<div class=\"modal fade\" id=\"bon_de_lunetterie\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-notice \">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"myModalLabel\"> Bon_De_Lunetterie</h5>\n        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"material-icons\">close</i>\n        </button>\n      </div>\n      <form class=\"form-horizontal\">\n          <input type=\"hidden\" class=\"form-control\" >\n          <div class=\"form-group row card-header\">\n            \n            <div class=\"col-md-12 form-group\">\n              <label>Numero_Carnet</label>\n            <input type=\"text\" class=\"form-control\" id=\"numero_carnet\" [(ngModel)]=\"bon.numero_carnet\" name=\"numero_carnet\">\n          </div>\n            <div class=\"col-md-8 form-group\">\n                <label>Code de Fournisseur</label>\n              <input type=\"text\" class=\"form-control\" id=\"code_fournisseur\" [(ngModel)]=\"bon.code_fournisseur\" name=\"code_fournisseur\">\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <label>Numero Saisie Facture</label>\n              <input type=\"text\" class=\"form-control\" id=\"n_saisie_facture\" [(ngModel)]=\"bon.n_saisie_facture\" name=\"n_saisie_facture\">\n            </div>\n            <div class=\"col-md-12 form-group\">\n                <label>Prénom de/des Malade(s)</label>\n              <input type=\"text\" class=\"form-control\" id=\"prenom_malade\" [(ngModel)]=\"bon.prenom_malade\" name=\"prenom_malade\">\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <label>Date de Demande</label>\n              <input type=\"date\" class=\"form-control\" id=\"date_demande\" [(ngModel)]=\"bon.date_demande\" name=\"date_demande\">\n            </div>\n            <div class=\"col-md-4 form-group\">\n                <label>Date de Reception de Facture</label>\n              <input type=\"date\" class=\"form-control\" id=\"date_reception_facture\" [(ngModel)]=\"bon.date_reception_facture\" name=\"date_reception_facture\">\n            </div>\n            \n            <div class=\"card-body table-full-width\">\n              <div class=\"table-responsive\">\n                  <table class=\"table table-hover\">\n                      <thead class=\"text-primary\">\n                          <tr>\n                            <th>Date Prestation</th>\n                            <th >Code Prestation</th>\n                            <th >Nature Prestation</th>\n                            <th >Montant</th>\n                            <th >T.P.S</th>\n                          </tr>\n                      </thead>\n                      <tbody >\n                            <tr *ngFor=\" let bon of bons\">\n                                <td>{{bon.code_remb_64800}}</td>\n                                <td >{{bon.code_p_non_Remb_64801}}</td>\n                                <td >{{bon.quantite}}</td>\n                                <td >{{bon.designation}}</td>\n                                <td >{{bon.prix_unitaire}}</td>\n                                <td>{{bon.total}}</td>\n                                <td >{{employe.lieu_nais}}</td>\n                                <td >{{employe.telephone}}</td>\n                                <td >{{employe.date_recrutement}}</td>\n                                <td >{{employe.matricule}}</td>\n                                <td>{{employe.reference}}</td>\n                                <td >{{employe.numero_carnet}}</td>\n                                <td >{{employe.situation_familial}}</td>\n                                <td >{{employe.solde}}</td>\n                                <td >{{employe.cumul_charge}}</td>\n                                <td >{{employe.niveau_salarial}}</td>\n                                <td>\n                                  <a  class=\"btn btn-success\" [routerLink]=\"['/gestion-employes/ModifierEmployes/'+employe.idemp]\">\n                                      Modifier\n                                  </a>\n                                </td>\n                                <td>\n                                  <a  class=\"btn btn-danger\" (click)=\"supprimerEmploye(employe)\">\n                                      supprimer\n                                  </a>\n                                </td>\n                                \n                          </tr>\n                         \n                      </tbody>\n                  </table>\n                  </div>\n                  </div>\n            \n           <div>\n            <h4>{{message}} </h4>\n          </div>\n          </div>\n        </form>\n      <div class=\"modal-footer justify-content-center\">\n        <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Valider</button>\n      </div>\n    </div>\n  </div>\n</div>\n  <!-- Bon_Lettre_de_Garantie -->\n<div class=\"modal fade\" id=\"bon_lettre_de_garantie\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-notice\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"myModalLabel\">INSTITUTION DE PREVOYANCE MALADIE DU PERSONNEL DE LA POSTE</h5>\n          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n            <i class=\"material-icons\">close</i>\n          </button>\n        </div>\n        <form class=\"form-horizontal\">\n            <input type=\"hidden\" class=\"form-control\" >\n            <div class=\"form-group row card-header\">\n              <h3 >Dakar,le  </h3>\n              \n              <div class=\"col-md-12 form-group\">\n                <label>Nom du Patient</label>\n                <input type=\"text\" class=\"form-control\" id=\"Nom du Patient\" [(ngModel)]=\"bon.nom_du_patient\" name=\"nom\">\n              </div>\n              <div class=\"col-md-12 form-group\">\n                <label>Numero_Carnet_De_Sante</label>\n                <input type=\"text\" class=\"form-control\" id=\"numero_carnet_de_sante\" [(ngModel)]=\"bon.numero_carnet_de_sante\" name=\"numero_carnet_de_sante\">\n              </div>\n              <div class=\"col-md-12 form-group\">\n                <label>Service</label>\n                <input type=\"text\" class=\"form-control\" id=\"service\" [(ngModel)]=\"bon.service\" name=\"service\">\n              </div>\n              <div class=\"col-md-12 form-group\">\n                <label>Mle de Solde</label>\n                <input type=\"text\" class=\"form-control\" id=\"solde\" [(ngModel)]=\"bon.solde\" name=\"solde\">\n              </div>\n              <div class=\"col-md-12 form-group\">\n                <label>Numero_De_Reference</label>\n                <input type=\"text\" class=\"form-control\" id=\"numero_de_reference\" [(ngModel)]=\"bon.numero_de_reference\" name=\"numero_de_reference\">\n\n              </div>\n              <div class=\"col-md-12 form-group\">\n                <p>Monsieur,</p>\n                <p>Nous avons l'honnneur de vous signaler que les frais de versement de</p>\n                <p>............................................................................................................................................................................................\n                </p>\n                <p>............................................................................................................................................................................................\n                </p>\n                <p>............................................................................................................................................................................................\n                  sont garantis par notre institution. </p>\n                <p>Nous vous serons reconnaissants de bien vouloir parvenir votre facture dans un délai \n                  n'excédant pas deux(02) mois aprés la date d'établissement de la présente lettre.\n                  Veuillez agréer,Monsieur, l'expression de notre considération distinguée.\n\n                </p>\n              </div>\n              <!-- <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"EmployeNow()\">Enregistrer</button>\n             </div> -->\n             <div>\n              <h4>{{message}} </h4>\n            </div>\n            </div>\n          </form>\n        <div class=\"modal-footer justify-content-center\">\n          <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Sounds good!</button>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "qLYx":
/*!*****************************************************!*\
  !*** ./src/app/gestion-bons/gestion-bons.module.ts ***!
  \*****************************************************/
/*! exports provided: GestionBonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionBonsModule", function() { return GestionBonsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gestion_bons_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gestion-bons-routing.module */ "LmSd");
/* harmony import */ var _liste_bons_liste_bons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liste-bons/liste-bons.component */ "k4JN");
/* harmony import */ var _ajout_bons_ajout_bons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajout-bons/ajout-bons.component */ "Mb6n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.module */ "ZAI4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _bon_lettre_bon_lettre_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bon-lettre/bon-lettre.component */ "E+bH");
/* harmony import */ var _bon_lunetterie_bon_lunetterie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bon-lunetterie/bon-lunetterie.component */ "MgQi");
/* harmony import */ var _bon_consultation_bon_consultation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bon-consultation/bon-consultation.component */ "FJeX");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var GestionBonsModule = /** @class */ (function () {
    function GestionBonsModule() {
    }
    GestionBonsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_liste_bons_liste_bons_component__WEBPACK_IMPORTED_MODULE_3__["ListeBonsComponent"], _ajout_bons_ajout_bons_component__WEBPACK_IMPORTED_MODULE_4__["AjoutBonsComponent"], _bon_lettre_bon_lettre_component__WEBPACK_IMPORTED_MODULE_10__["BonLettreComponent"], _bon_lunetterie_bon_lunetterie_component__WEBPACK_IMPORTED_MODULE_11__["BonLunetterieComponent"], _bon_consultation_bon_consultation_component__WEBPACK_IMPORTED_MODULE_12__["BonConsultationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(_gestion_bons_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        })
    ], GestionBonsModule);
    return GestionBonsModule;
}());



/***/ }),

/***/ "v8SR":
/*!******************************************************************!*\
  !*** ./src/app/gestion-bons/liste-bons/liste-bons.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tYm9ucy9saXN0ZS1ib25zL2xpc3RlLWJvbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "xDD7":
/*!***************************************************!*\
  !*** ./src/app/Services/bon-pharmacie.service.ts ***!
  \***************************************************/
/*! exports provided: BonPharmacieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonPharmacieService", function() { return BonPharmacieService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BonPharmacieService = /** @class */ (function () {
    function BonPharmacieService(http) {
        this.http = http;
    }
    BonPharmacieService.prototype.AjouterBonPharmacie = function (bon_pharmacie) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'bonpharma', bon_pharmacie, { responseType: 'text' });
    };
    BonPharmacieService.prototype.uploadFile = function (file) {
        var formData = new FormData();
        // console.log("file.name :"+file.name) 
        // console.log("file.size :"+file.size) 
        formData.append('file', file, file.name);
        // formData.append('enfant', enfant);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + "uploadeOrdonnance", formData);
    };
    BonPharmacieService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    BonPharmacieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], BonPharmacieService);
    return BonPharmacieService;
}());



/***/ }),

/***/ "z0Xg":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-bons/bon-lunetterie/bon-lunetterie.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Types Bons -->\n<!--<p>test </p>-->\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row tab-content tab-space\" style=\"margin-top:-5.5cm;\">\n\n    </div>\n\n    <div class=\"card-body \">\n      <ul class=\"nav nav-pills nav-pills-warning\" role=\"tablist\">\n\n      </ul>\n        <!------>\n      <div class=\" tab-content tab-space \">\n        <div class=\" col-md-11 tab-pane active \" id=\"link0\" *ngIf=\"mess1\">\n          <div class=\"card \" style=\"margin-left:1cm;\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">search</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; font-weight: 500; width:40%;\">Rechercher un\n                Employe</h3>\n            </div>\n            <div class=\"card-body \">\n              <form class=\"navbar-form\">\n                <span class=\"bmd-form-group\">\n                  <div class=\"input-group p-2\">\n                    <input type=\"text\" name=\"matricule\" class=\"form-control\" placeholder=\"Matricule\" id=\"matricule\"\n                      [(ngModel)]=\"matricule\">\n\n                  </div>\n                </span>\n              </form>\n            </div>\n\n            <!--[disabled]=\"!searchForm.form.invalid\"-->\n            <div class=\"card-footer\">\n              <button mat-raised-button type=\"submit\" (click)=\"findByMatricule()\" class=\"nav-link \" data-toggle=\"tab\"\n                href=\"#link1\" class=\"btn btn-fill btn-success\" style=\"margin-left: 80%;\"><i\n                  class=\"material-icons\">search</i>Rechercher</button>\n            </div>\n          </div>\n        </div>\n\n        <!------>\n        <div class=\" col-md-11 tab-pane active \" id=\"link0\">\n          <div class=\"card \" style=\"margin-left:1cm;\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">search</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; font-weight: 500; width:40%;\">Rechercher un\n                Employe</h3>\n            </div>\n            <div class=\"card-body \">\n              <form class=\"navbar-form\">\n                <span class=\"bmd-form-group\">\n                  <div class=\"input-group p-2\">\n                    <input type=\"text\" name=\"matricule\" class=\"form-control\" placeholder=\"Matricule\" id=\"matricule\"\n                      [(ngModel)]=\"matricule\">\n\n                  </div>\n                </span>\n              </form>\n            </div>\n\n            <!--[disabled]=\"!searchForm.form.invalid\"-->\n            <div class=\"card-footer\">\n              <button mat-raised-button type=\"submit\" (click)=\"findByMatricule()\" class=\"nav-link \" data-toggle=\"tab\"\n                href=\"#link1\" class=\"btn btn-fill btn-success\" style=\"margin-left: 80%;\"><i\n                  class=\"material-icons\">search</i>Rechercher</button>\n            </div>\n          </div>\n        </div>\n\n        <!-- <div class=\"col-md-6\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-body\">\n              <br>\n  \n              <h4>l'agent {{message.matricule}} existe !!!</h4><br>\n              <table class=\"table table-hover\">\n  \n                <thead class=\"text-primary\">\n  \n                  <th>Nom</th>\n                  <th>Prenom</th>\n                  <th>Sexe</th>\n                  <th>Matricule</th>\n                  <th>Reference</th>\n  \n                </thead>\n                <tbody>\n                  <tr>\n                    <td>{{message.nom}}</td>\n                    <td>{{message.prenom}}</td>\n                    <td>{{message.sexe}}</td>\n                    <td>{{message.matricule}}</td>\n                    <td>{{message.reference}}</td>\n  \n                  </tr>\n                </tbody>\n              </table>\n            </div>\n  \n          </div>\n        </div> -->\n\n\n\n\n        <div class=\"tab-pane \" id=\"link1\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">assignment</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; width:30%; font-weight: 500;\">Bon Lunetterie Agent</h3>\n            </div>\n            <div class=\"card-body\">\n              <form [formGroup]=\"bonIpmForm\">\n                <div class=\"card-header card-header-icon card-header-info\" class=\"btn-btn primary\">\n                  <style>\n                    b,\n                    label {\n                      color: black;\n                      font-size: 18px;\n                    }\n                  </style>\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label>Prénom :</label>\n                        <b> {{message.prenom}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label> Nom :</label>\n                        <b> {{message.nom}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Numero Carnet:</label>\n                        <b> {{message.numero_carnet}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Age:</label>\n                        <b> {{AgeEmploye}}</b>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Sexe:</label>\n                      <b> {{message.sexe}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Date Naissance:</label>\n                      <b> {{message.date_nais}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Lieu de Naissance:</label>\n                      <b> {{message.lieu_nais}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Services:</label>\n                      <b> {{message.ipmService?.type_service}}</b>\n                    </div>\n                  </div>\n                </div>\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <mat-form-field>\n                      <mat-select placeholder=\"lPrestataires\" name=\"prestataires\" [(ngModel)]=\"code_presta\">\n                        <mat-option *ngFor=\"let prest of lprestataires\" [value]=\"prest.code_prestataire\"\n                          (click)=\"getnom(prest)\">\n                          <b> {{ prest.nom_prestataire }}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n\n                  <!-- <div class=\"col-md-8 form-group\">\n                  <label>Motif</label>\n                  <textarea cols=\"5\" rows=\"2\" style=\"background-color:whitesmoke; margin-top: -1cm;\" type=\"text\"\n                    class=\"form-control p-2\" id=\"motif\" [(ngModel)]=\"motif\" name=\"motif\"></textarea>\n                </div> -->\n                  <div class=\"col-md-8 form-group\">\n                    <label>Motif</label>\n                    <textarea cols=\"5\" rows=\"5\" style=\"background-color:rgb(243, 237, 237);\" type=\"text\"\n                      class=\"form-control\" id=\"motif\" [(ngModel)]=\"motif\" name=\"motif\"></textarea>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <!-----Row Vide   data-toggle=\"modal\"\n                    data-target=\"#modalconjoints\"----------------------------->\n                </div>\n\n\n                 <hr>\n                <div class=\"row\">\n                  <div class=\"form-group  col-md-3\" style=\"margin-top: -20px;\">\n                    <label for=\"date_facture\"><b>Date Délivrance</b>\n                    </label>\n                    <input type=\"date\" class=\"form-control\" id=\"date_delivrance\" name=\"date_delivrance\" placeholder=\"date delivrance\"\n                           formControlName=\"date_delivrance\"   >\n                    <!--          [disabled]=\"true\"-->\n                  </div>\n\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:10% ;\">Joindre Devis\n                    <input type=\"file\" class=\"form-control\" formControlName=\"devit\" name=\"image\" (change)=\"selectDevit($event)\">\n                    <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\">\n\n                  </div>\n                  <b class=\"text-danger\" >\n<!--                    devis obligatoire !!!-->\n                    *\n                  </b>\n                    <span style=\"float: right\"><b style=\"color:#00b0ff\">{{nomOrdon}}</b></span>\n                  <div class=\"row\">\n                    <!-----Row Vide   data-toggle=\"modal\"\n                      data-target=\"#modalconjoints\"----------------------------->\n                  </div>\n                  <hr>\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:45%;\">Joindre Ordonnance\n                    <input type=\"file\"  class=\"form-control\" name=\"image\" (change)=\"selectOrdonn($event)\">\n                    <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\">\n                  </div>\n                  <b class=\"text-danger\" >\n                    <!--                    devis obligatoire !!!-->\n                    *\n                  </b>\n                  <span style=\"float: right\"><b style=\"color:#00b0ff\">{{nomOrdonnance}}</b></span>\n\n                  <hr>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"input-group p-2\">\n                      <input type=\"text\" name=\"designation\" class=\"form-control\" placeholder=\"Designation\" id=\"designation\"\n                             formControlName=\"designation\" >\n\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"input-group p-2\">\n                      <input type=\"text\" name=\"montan\" class=\"form-control\" placeholder=\"Montant\" id=\"montan\"\n                             formControlName=\"montan\">\n\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"input-group p-2\" *ngIf=\"this.bonIpmForm.get('montan').value\">\n                      <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\"\n                              (click)=\"DetailsBon_Linetterie()\">Ajouter\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card-body\">\n\n                  <table class=\"table table-hover table-bordered\">\n\n                    <thead style=\"font-weight:bold; background: #0d47a1; color: white;width=20%\">\n                    <th>Designation</th>\n                    <th>Montant</th>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let element of listDetailBon\">\n                      <td>{{element.designation}}</td>\n                      <td> {{element.montant}}</td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <mat-form-field appearance=\"fill\">\n                      <mat-select placeholder=\"Choisir Conjoints\" name=\"conjoints\" [(ngModel)]=\"id_conjoint\">\n                        <mat-option *ngFor=\"let conjoint of conjoints\" [value]=\"conjoint.idconj\" class=\"nav-link \"\n                          data-toggle=\"tab\" href=\"#link2\" role=\"tablist\" (click)=\"getconjointbon(conjoint)\">\n                          <b> {{ conjoint.prenom_conjoint}} {{ conjoint.nom_conjoint}}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <mat-form-field appearance=\"fill\">\n                      <mat-select placeholder=\"Choisir Enfants\" name=\"enfants\" [(ngModel)]=\"id_enfant\">\n                        <mat-option *ngFor=\"let enfant of enfants\" [value]=\"enfant.idenf\" class=\"nav-link \"\n                          data-toggle=\"tab\" href=\"#link3\" role=\"tablist\" (click)=\"getenfantbon(enfant)\">\n                          <b>{{ enfant.prenom_enfant}} {{ enfant.nom_enfant}}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"modal-footer justify-content-center\">\n                  <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\"\n                   (click)=\"BonConsultation()\">Enregistrer\n                  </button>\n                  <!-- <button mat-raised-button type=\"button\" (click)=\"upload()\" class=\" btn btn-raised btn-round btn btn-danger btn-round\"\n                    >\n                    Exporter</button> -->\n                    <div class=\"col-md-6\" style=\"font-weight:bold;color: black;float: right;\">\n                      <i mat-raised-button type=\"button\" class=\"nav-link\"\n                      data-toggle=\"tab\"  style=\"width: 100px;\" (click)=\"retourserach()\"  role=\"tablist\" class=\"btn btn-info btn-round\">\n                      <span class=\"material-icons\">arrow_back</span></i>\n                    \n                    </div>\n\n                </div>\n\n                <!-- <div class=\"modal-footer justify-content-center\">\n                <button mat-raised-button class=\"btn btn-raised btn-round btn-btn\" (click)=\"upload()\">Exporter Lettre\n                  de Grantie\n                </button>\n\n              </div> -->\n                <div>\n                  <!-- <h4>{{message}} </h4> -->\n                </div>\n\n              </form>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane\" id=\"link2\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">assignment</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; width:40%; font-weight: 500;\">Bon Lunetterie Conjoint  </h3>\n            </div>\n            <div class=\"card-body\">\n              <button mat-raised-button type=\"submit\"  class=\"nav-link \" data-toggle=\"tab\"\n                href=\"#link1\" class=\"btn btn-fill btn-success\" style=\"\"(click)=\"viderConjoint()\"><i\n                  class=\"material-icons\">search</i>Participant</button>\n              <form  [formGroup]=\"bonIpmFormConjoin\">\n                <div class=\"card-header card-header-icon card-header-info\" class=\"btn-btn primary\">\n\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label>Prénom Conjoint :</label>\n                        <b>{{messageconjoint?.prenom_conjoint}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label> Nom Conjoint:</label>\n                        <b>{{messageconjoint?.nom_conjoint}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Sexe:</label>\n                        <b>{{messageconjoint?.sexe_conjoint}}</b>\n                      </div>\n                    </div>\n                    \n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Age:</label>\n                        <b> {{AgeConjoint}}</b>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"message\">\n                  <!-- <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Date Naissance:</label>\n                      <b>{{message.date_nais}}</b>\n                    </div>\n                  </div> -->\n                  <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Date Naissance:</label>\n                      <b>{{messageconjoint?.date_naiss_conj | date: 'dd/MM/yyyy'}}</b>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Lieu de Naissance:</label>\n                      <b>{{messageconjoint?.lieu_naiss_conj}}</b>\n                    </div>\n                  </div>\n\n                </div>\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <mat-form-field>\n                      <mat-select placeholder=\"Prestataires Conjoints\" name=\"lprestataires\" [(ngModel)]=\"code_presta\">\n                        <mat-option *ngFor=\"let prest of lprestataires\" [value]=\"prest.code_prestataire\"\n                          (click)=\"getnom(prest)\">\n                          <b>{{ prest.nom_prestataire }}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-8 form-group\">\n                    <label>Motif</label>\n                    <textarea cols=\"5\" rows=\"5\" style=\"background-color:rgb(243, 237, 237);\" type=\"text\"\n                      class=\"form-control\" id=\"motif\" [(ngModel)]=\"motif\" name=\"motif\"></textarea>\n                  </div>\n                </div>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Joindre Devit\n                    <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectDevitConj($event)\">\n                    <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\">\n\n                  </div>\n                  <b class=\"text-danger\" >\n                    <!--                    devis obligatoire !!!-->\n                    *\n                  </b>\n                  <span style=\"float: right\"><b style=\"color: #00b0ff\">{{nomOrdonConj}}</b></span>\n                </div>\n                <!-- <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Joindre Ordonnance\n                    <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectOrdonn($event)\">\n                    <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\">\n\n                  </div>\n                </div> -->\n                <hr>\n                <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30%;\">Joindre Ordonnance\n                  <input type=\"file\"  class=\"form-control\" name=\"image\" (change)=\"selectOrdonnConj($event)\">\n                  <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\">\n                </div>\n                <b class=\"text-danger\" >\n                  <!--                    devis obligatoire !!!-->\n                  *\n                </b>\n                <span style=\"margin-right:20%;\"><b style=\"color:#00b0ff\">{{nomOrdonnanceConj}}</b></span>\n\n                <hr>\n                <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"input-group p-2\">\n                    <input type=\"text\" name=\"designationConjoin\" class=\"form-control\" placeholder=\"Designation\" id=\"designationConjoin\"\n                           formControlName=\"designationConjoin\">\n\n                  </div>\n                </div>\n\n\n\n                <div class=\"col-md-4\">\n                  <div class=\"input-group p-2\">\n                    <input type=\"text\" name=\"montanConjoin\" class=\"form-control\" placeholder=\"Montant\" id=\"montanConjoin\"\n                          formControlName=\"montanConjoin\">\n\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"input-group p-2\" *ngIf=\"this.bonIpmFormConjoin.get('montanConjoin').value\">\n                    <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\"\n                            (click)=\"DetailsBon_LinetterieConjoin()\">Ajouter\n                    </button>\n                  </div>\n                </div>\n              </div>\n                <div class=\"card-body\">\n\n                  <table class=\"table table-hover table-bordered\">\n                    <thead style=\"font-weight:bold; background: #0d47a1; color: white;width=20%\">\n                    <th>Designation</th>\n                    <th>Montant</th>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let element of listDetailBonConjoint\">\n                      <td>{{element.designation}}</td>\n                      <td> {{element.montant}}</td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n\n                <div class=\"modal-footer\">\n                  <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\"\n                    data-target=\"#noticeConjoint\" (click)=\"BonConjoint()\"> Enregistrer</button>\n                  <!-- <button mat-raised-button type=\"button\" (click)=\"uploadConjoint()\" class=\"btn btn-green btn-round\"\n                    data-dismiss=\"modal\">\n                    Exporter</button> -->\n                </div>\n                \n\n              </form>\n\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane\" id=\"link3\">\n          <div class=\"card\" *ngIf=\"message\">\n            <div class=\"card-header card-header-icon\">\n              <div class=\"card-icon\" style=\"background-color:rgba(17, 17, 227, 0.88)\">\n                <i class=\"material-icons\">assignment</i>\n              </div>\n              <h3 class=\"card-title p-2\" style=\"background-color:whitesmoke; width:40%; font-weight: 500;\">Bon Lunetterie Enfant </h3>\n            </div>\n            <div class=\"card-body\">\n              <button mat-raised-button type=\"submit\"  class=\"nav-link \" data-toggle=\"tab\"\n                href=\"#link1\" class=\"btn btn-fill btn-success\" style=\"\"(click)=\"viderEnfant()\"><i\n                  class=\"material-icons\">search</i>Participant</button>\n\n              <form [formGroup]=\"bonIpmForEnfant\">\n                <div class=\"card-header card-header-icon card-header-info\" class=\"btn-btn primary\">\n\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label>Prénom Enfant :</label>\n                        <b>{{messageenfant?.prenom_enfant}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label> Nom Enfant:</label>\n                        <b>{{messageenfant?.nom_enfant}}</b>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Sexe:</label>\n                        <b>{{messageenfant?.sexe_enfant}}</b>\n                      </div>\n                    </div>\n                    \n                    <div class=\"col-md-3 form-group\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Age:</label>\n                        <b> {{AgeEnfant}}</b>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"message\">\n                  <!-- <div class=\"col-md-4 form-group\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Date Naissance:</label>\n                    <b>{{messageenfant.date_nais}}</b>\n                  </div>\n                </div> -->\n                <div class=\"col-md-3 form-group\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Date Naissance:</label>\n                    <b>{{messageenfant?.date_nais_enfant}}</b>\n                  </div>\n                </div>\n                  <div class=\"col-md-4 form-group\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Lieu de Naissance:</label>\n                      <b>{{messageenfant?.lieu_nais_enfant}}</b>\n                    </div>\n                  </div>\n\n                </div>\n\n\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <mat-form-field>\n                      <mat-select placeholder=\"Prestataires Enfant\" name=\"lprestataires\" [(ngModel)]=\"code_presta\">\n                        <mat-option *ngFor=\"let prest of lprestataires\" [value]=\"prest.code_prestataire\"\n                          (click)=\"getnom(prest)\">\n                          <b>{{ prest.nom_prestataire }}</b>\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-8 form-group\">\n                    <label>Motif</label>\n                    <textarea cols=\"5\" rows=\"5\" style=\"background-color:rgb(243, 237, 237);\" type=\"text\"\n                      class=\"form-control\" id=\"motif\" [(ngModel)]=\"motif\" name=\"motif\"></textarea>\n                  </div>\n                </div>\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30% ;\">Joindre Devit\n                    <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectDevitEnf($event)\">\n                    <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\">\n\n                  </div>\n                  <b class=\"text-danger\" >\n                    <!--                    devis obligatoire !!!-->\n                    *\n                  </b>\n                  <span style=\"float: right\"><b  style=\"color: #00b0ff\">{{nomOrdonEnf}}</b></span>\n                </div>\n                <hr>\n\n\n                <div class=\"col-md-4 btn btn-file\" style=\"margin-left:30%;\">Joindre Ordonnance\n                  <input type=\"file\"  class=\"form-control\" name=\"image\" (change)=\"selectOrdonnEnf($event)\">\n                  <img [src]=\"OrdonnanceURL\" height=\" 100\" width=\"100\" *ngIf=\"OrdonnancefURL\">\n                </div>\n                <b class=\"text-danger\">\n                  <!--                    devis obligatoire !!!-->\n                  *\n                </b>\n                <span style=\"margin-right:20%;\"><b style=\"color:#00b0ff\">{{nomOrdonnanceEnf}}</b></span>\n\n                <hr>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"input-group p-2\">\n                      <input type=\"text\" name=\"designationConjoin\" class=\"form-control\" placeholder=\"Designation\" id=\"designationConjoin\"\n                             formControlName=\"designationEnfant\">\n\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-md-4\">\n                    <div class=\"input-group p-2\">\n                      <input type=\"text\" name=\"montanConjoin\" class=\"form-control\" placeholder=\"Montant\" id=\"montanConjoin\"\n                             formControlName=\"montanEnfant\">\n\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"input-group p-2\" *ngIf=\"this.bonIpmForEnfant.get('montanEnfant').value\">\n                      <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" data-toggle=\"modal\"\n                              (click)=\"DetailsBon_LinetterieEnfant()\">Ajouter\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card-body\">\n\n                  <table class=\"table table-hover table-bordered\">\n                    <thead style=\"font-weight:bold; background: #0d47a1; color: white;width=20%\">\n                    <th>Designation</th>\n                    <th>Montant</th>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let element of listDetailBonEnfant\">\n                      <td>{{element.designation}}</td>\n                      <td> {{element.montant}}</td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n\n\n\n\n\n\n\n                  <div class=\"modal-footer\">\n                    <button mat-raised-button class=\"btn btn-raised btn-round btn-success\" \n                       (click)=\"BonEnfant()\"> Enregistrer</button>\n                    <!-- <button mat-raised-button type=\"button\" (click)=\"uploadEnfant()\" class=\"btn btn-green btn-round\"\n                      data-dismiss=\"modal\">\n                      Exporter</button> -->\n                  </div>\n                  <div>\n\n                  </div>\n\n              </form>\n\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- notice modal -->\n    <div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n      aria-hidden=\"true\" *ngIf=\"message\">\n      <div class=\"modal-dialog modal-notice\">\n        <div class=\"modal-content\" style=\"width: 600px;\">\n          <div class=\"modal-header\">\n            <!-- <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5> -->\n            <button mat-button type=\"button\" class=\"close \" data-dismiss=\"modal\" aria-hidden=\"true\">\n              <i style=\"margin-top: -1.3cm; color: red; font-size: 30px;\" class=\"material-icons\">close</i>\n            </button>\n\n\n          </div>\n          <div class=\"modal-body\">\n\n\n            <div class=\"\" style=\"margin-top: -1cm;\">\n              <div>\n                <img src=\"/assets/img_poste/header1.png\" style=\"width: 100%;\" alt=\"Thumbnail Image\" alt=\"\" />\n              </div>\n            </div>\n            <div class=\"row\">\n\n              <div class=\"col-md-12\">\n                <h4 style=\"text-align:right; font-weight: bold; margin-top: 25px;\">Dakar le:{{jstoday}}</h4>\n              </div>\n            </div>\n            <hr>\n            <div class=\"row\">\n              <div class=\"col-md-6 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Prénom :</label>\n                  <b> {{message.prenom}}</b>\n                </div>\n              </div>\n              <div class=\"col-md-6 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Nom :</label>\n                  <b> {{message.nom}}</b>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <hr>\n              <div class=\"col-md-6 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Prestataire :</label>\n                  <b>{{p}}</b>\n                </div>\n              </div>\n              <!-- <div class=\"col-md-6 form-group\">\n          <div class=\"form-group\">\n            <label class=\"bmd-label-floating\">Numero Carnet:</label>\n            {{message.idemp}}\n          </div>\n        </div> -->\n              <div class=\"col-md-6 form-group\">\n                <div class=\"form-group\">\n                  <label class=\"bmd-label-floating\">Services:</label>\n                  <b> {{message.ipm_service?.type_service}}</b>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"card-body table-full-width\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-hover table-bordered\">\n                  <thead class=\"\">\n                    <tr style=\"background-color: whitesmoke;\">\n                      <th style=\"font-weight: 600px\">Matricule Participant</th>\n                      <th style=\"font-weight: 600px\">Designation</th>\n                      <th style=\"font-weight: 600px\">Nombre D'article</th>\n\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>{{message.matricule}}</td>\n                      <td>{{designation}}</td>\n                      <td>{{nombre_article}}</td>\n\n                  </tbody>\n\n                </table>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"modal-footer justify-content-center\">\n            <button mat-raised-button type=\"button\" (click)=\"BonNowLettre()\" class=\"btn btn-success btn-round\"\n              data-dismiss=\"modal\">\n              Enregistrer</button>\n          </div>\n          <div class=\"modal-footer justify-content-center\">\n            <button mat-raised-button type=\"button\" (click)=\"upload()\" class=\"btn btn-green btn-round\"\n              data-dismiss=\"modal\">\n              Exporter</button>\n          </div>\n\n        </div>\n\n\n      </div>\n    </div>\n    <!-- end notice modal -->\n  </div>\n</div>\n<!-- Exemple ngTemplate-->\n\n<!-- <div class=\"card\" *ngIf=\"message\">\n    <div class=\"card-header\">\n      <h4 class=\"card-title\">Lettre de Garantie</h4>\n    </div>\n<form class=\"form-horizontal\">\n    <input type=\"hidden\" class=\"form-control\" >\n    <div class=\"form-group row card-header\">\n      <h3 >Dakar,le  </h3>\n      \n      <div class=\"col-md-12 form-group\">\n        <label>Nom du Patient</label>\n        <input type=\"text\" class=\"form-control\" id=\"Nom du Patient\" [(ngModel)]=\"bon.nom_du_patient\" name=\"nom\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label>Numero_Carnet_De_Sante</label>\n        <input type=\"text\" class=\"form-control\" id=\"numero_carnet_de_sante\" [(ngModel)]=\"bon.numero_carnet_de_sante\" name=\"numero_carnet_de_sante\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label>Service</label>\n        <input type=\"text\" class=\"form-control\" id=\"service\" [(ngModel)]=\"bon.service\" name=\"service\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label>Mle de Solde</label>\n        <input type=\"text\" class=\"form-control\" id=\"solde\" [(ngModel)]=\"bon.solde\" name=\"solde\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <label>Numero_De_Reference</label>\n        <input type=\"text\" class=\"form-control\" id=\"numero_de_reference\" [(ngModel)]=\"bon.numero_de_reference\" name=\"numero_de_reference\">\n\n      </div>\n      <div class=\"col-md-12 form-group\">\n        <p>Monsieur,</p>\n        <p>Nous avons l'honnneur de vous signaler que les frais de versement de</p>\n        <p>............................................................................................................................................................................................\n        </p>\n        <p>............................................................................................................................................................................................\n        </p>\n        <p>............................................................................................................................................................................................\n          sont garantis par notre institution. </p>\n        <p>Nous vous serons reconnaissants de bien vouloir parvenir votre facture dans un délai \n          n'excédant pas deux(02) mois aprés la date d'établissement de la présente lettre.\n          Veuillez agréer,Monsieur, l'expression de notre considération distinguée.\n\n        </p>\n      </div>\n \n     <div>\n      <h4>{{message}} </h4>\n    </div>\n    </div>\n  </form>\n\n  <div class=\"modal-footer justify-content-center\">\n    <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Enregistrer</button>\n  </div>\n</div> -->\n<!-- <form class=\"form-horizontal\">\n    <input type=\"hidden\" class=\"form-control\" >\n    <div class=\"form-group row card-header\">\n      \n      <div class=\"col-md-12 form-group\">\n        <label>Numero_Carnet</label>\n      <input type=\"text\" class=\"form-control\" id=\"numero_carnet\" [(ngModel)]=\"bon.numero_carnet\" name=\"numero_carnet\">\n    </div>\n      <div class=\"col-md-8 form-group\">\n          <label>Code de Fournisseur</label>\n        <input type=\"text\" class=\"form-control\" id=\"code_fournisseur\" [(ngModel)]=\"bon.code_fournisseur\" name=\"code_fournisseur\">\n      </div>\n      <div class=\"col-md-4 form-group\">\n          <label>Numero Saisie Facture</label>\n        <input type=\"text\" class=\"form-control\" id=\"n_saisie_facture\" [(ngModel)]=\"bon.n_saisie_facture\" name=\"n_saisie_facture\">\n      </div>\n      <div class=\"col-md-12 form-group\">\n          <label>Prénom de/des Malade(s)</label>\n        <input type=\"text\" class=\"form-control\" id=\"prenom_malade\" [(ngModel)]=\"bon.prenom_malade\" name=\"prenom_malade\">\n      </div>\n      <div class=\"col-md-4 form-group\">\n          <label>Date de Demande</label>\n        <input type=\"date\" class=\"form-control\" id=\"date_demande\" [(ngModel)]=\"bon.date_demande\" name=\"date_demande\">\n      </div>\n      <div class=\"col-md-4 form-group\">\n          <label>Date de Reception de Facture</label>\n        <input type=\"date\" class=\"form-control\" id=\"date_reception_facture\" [(ngModel)]=\"bon.date_reception_facture\" name=\"date_reception_facture\">\n      </div>\n      \n      <div class=\"card-body table-full-width\">\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover\">\n                <thead class=\"text-primary\">\n                    <tr>\n                      <th>Date Prestation</th>\n                      <th >Code Prestation</th>\n                      <th >Nature Prestation</th>\n                      <th >Montant</th>\n                      <th >T.P.S</th>\n                    </tr>\n                </thead>\n                <tbody >\n                      <tr *ngFor=\" let bon of bons\">\n                          <td>{{bon.code_remb_64800}}</td>\n                          <td >{{bon.code_p_non_Remb_64801}}</td>\n                          <td >{{bon.quantite}}</td>\n                          <td >{{bon.designation}}</td>\n                          <td >{{bon.prix_unitaire}}</td>\n                          <td>{{bon.total}}</td>\n                          <td >{{employe.lieu_nais}}</td>\n                          <td >{{employe.telephone}}</td>\n                          <td >{{employe.date_recrutement}}</td>\n                          <td >{{employe.matricule}}</td>\n                          <td>{{employe.reference}}</td>\n                          <td >{{employe.numero_carnet}}</td>\n                          <td >{{employe.situation_familial}}</td>\n                          <td >{{employe.solde}}</td>\n                          <td >{{employe.cumul_charge}}</td>\n                          <td >{{employe.niveau_salarial}}</td>\n                          <td>\n                            <a  class=\"btn btn-success\" [routerLink]=\"['/gestion-employes/ModifierEmployes/'+employe.idemp]\">\n                                Modifier\n                            </a>\n                          </td>\n                          <td>\n                            <a  class=\"btn btn-danger\" (click)=\"supprimerEmploye(employe)\">\n                                supprimer\n                            </a>\n                          </td>\n                          \n                    </tr>\n                   \n                </tbody>\n            </table>\n            </div>\n            </div>\n      \n     <div>\n      <h4>{{message}} </h4>\n    </div>\n    </div>\n  </form>\n  <div class=\"modal-footer justify-content-center\">\n    <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Valider</button>\n  </div> -->\n");

/***/ })

}]);
//# sourceMappingURL=gestion-bons-gestion-bons-module.js.map