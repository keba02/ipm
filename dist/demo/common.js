(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0WQY":
/*!*********************************************!*\
  !*** ./src/app/Services/facture.service.ts ***!
  \*********************************************/
/*! exports provided: FactureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactureService", function() { return FactureService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FactureService = /** @class */ (function () {
    function FactureService(http) {
        this.http = http;
    }
    FactureService.prototype.AjoutFacture = function (facture) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'facture', facture, { responseType: 'text' });
    };
    FactureService.prototype.AjoutDetailsFacture = function (detailfacture) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'adddetailsfacture', detailfacture, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((this.erroHandler)));
    };
    FactureService.prototype.AjoutRembour = function (Remboursement) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'remboursement', Remboursement, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((this.erroHandler)));
    };
    FactureService.prototype.AjoutdetaRembour = function (listRembourse) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'adddetailsremboursement', listRembourse, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((this.erroHandler)));
    };
    FactureService.prototype.erroHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.message || 'erreur de telechargement de fichier');
    };
    FactureService.prototype.getAllFacture = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'detailsfactures');
    };
    FactureService.prototype.getAllFactureglobale = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'allfacture');
    };
    FactureService.prototype.getAllFactureglobaleByUser = function (idUser) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'allfacture/user/' + idUser);
    };
    FactureService.prototype.getAllRemboursementGlobal = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'remboursement');
    };
    FactureService.prototype.getAllRemboursementGlobalByUser = function (idUser) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'remboursement/user/' + idUser);
    };
    FactureService.prototype.getAllFactbyfactglobale = function (idfac) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'detailsfacture/' + idfac);
    };
    FactureService.prototype.getAllFactbyfactglobale2 = function (idfac) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'detailsfacturebyFacture/' + idfac);
    };
    FactureService.prototype.getAllremboursbyrembourseglobale = function (idremb) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'Detailremboursement/' + idremb);
    };
    FactureService.prototype.Updateremboursement = function (remb) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'remboursement', remb);
    };
    FactureService.prototype.UpdateFacture = function (facture) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'updatefacture', facture, { responseType: 'text' });
    };
    FactureService.prototype.listStatutFac = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'satutFacture/');
    };
    FactureService.prototype.getFactureById = function (idfac) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'getfacture/' + idfac);
    };
    FactureService.prototype.deleteById = function (idfac) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'facture/' + idfac);
    };
    FactureService.prototype.deleterembById = function (idfac) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'remboursement/' + idfac);
    };
    FactureService.prototype.updateLemploye = function (lEmploye) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'updateLEmploye', lEmploye, { responseType: 'text' });
    };
    FactureService.prototype.updateLdetailFacture = function (ldetail) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'updateList', ldetail, { responseType: 'text' });
    };
    FactureService.prototype.updateOnEmploye = function (Employe) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'employesansPhoto', Employe);
    };
    FactureService.prototype.updateOnglobal = function (Empl) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'upremboursement', Empl);
    };
    FactureService.prototype.getEmployeById = function (idemp) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'employesanstof/' + idemp);
    };
    FactureService.prototype.updateDetailfact = function (ipm_detail) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'updateDetail', ipm_detail);
    };
    FactureService.prototype.annulerfacture = function (idfacture) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'facture/' + idfacture);
    };
    FactureService.prototype.annulerfactureGlobles = function (idfacture) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'facture/' + idfacture);
    };
    FactureService.prototype.annullerFacture = function (st) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'updatefacture', st);
    };
    FactureService.prototype.suiviFact = function (sf) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'suiviefacture', sf);
    };
    FactureService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    FactureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], FactureService);
    return FactureService;
}());



/***/ }),

/***/ "3m7+":
/*!*************************************************!*\
  !*** ./src/app/Services/prestataire.service.ts ***!
  \*************************************************/
/*! exports provided: PrestataireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestataireService", function() { return PrestataireService; });
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



var PrestataireService = /** @class */ (function () {
    function PrestataireService(http) {
        this.http = http;
    }
    PrestataireService.prototype.AjouterPrestataire = function (prestataire) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'prestataire', prestataire, { responseType: 'text' });
    };
    PrestataireService.prototype.getPrestataire = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'allprestataire');
    };
    PrestataireService.prototype.getAllPrestataires = function () {
        // debugger
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'allprestataire');
    };
    PrestataireService.prototype.getBon = function () {
        // debugger
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'bon');
    };
    PrestataireService.prototype.getTypePestataires = function (nom) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'listprestataire/' + nom);
    };
    PrestataireService.prototype.getPrestataireById = function (idpres) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'prestataire/' + idpres);
    };
    PrestataireService.prototype.modifier = function (codep) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'prestataireUpdate', codep);
    };
    /////////////Type Prestataire
    PrestataireService.prototype.AjouterTypePrestataire = function (typePrestataire) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'typeprestataire', typePrestataire, { responseType: 'text' });
    };
    PrestataireService.prototype.getAllTypePrestataires = function () {
        // debugger
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'alltypeprestataire');
    };
    PrestataireService.prototype.uploadFileCertif = function (file) {
        var formData = new FormData();
        // console.log("file.name :"+file.name) 
        // console.log("file.size :"+file.size) 
        formData.append('file', file, file.name);
        // formData.append('enfant', enfant);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + "lettreAgrement", formData);
    };
    PrestataireService.prototype.rapportsByPrestataire = function (date1, date2, prestataire_id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'rapport/prestataire/' + date1 + '/' + date2 + '/' + prestataire_id);
    };
    PrestataireService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    PrestataireService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PrestataireService);
    return PrestataireService;
}());



/***/ }),

/***/ "CsMi":
/*!*****************************************************!*\
  !*** ./src/app/Services/rapport-service.service.ts ***!
  \*****************************************************/
/*! exports provided: RapportServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportServiceService", function() { return RapportServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RapportServiceService = /** @class */ (function () {
    function RapportServiceService(http) {
        this.http = http;
    }
    RapportServiceService.prototype.getEntity = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'entity');
    };
    RapportServiceService.prototype.getGlobaleParEntity = function (date1, date2, id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'getCreanceGlobaless/' + date1 + '/' + date2 + '/' + id);
    };
    RapportServiceService.prototype.getCumulCotisationAnnee = function (annee) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'cumulCotisation/' + annee);
    };
    RapportServiceService.prototype.getDetailsCotisationByEmploye = function (details) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'listcotisation/' + details);
    };
    RapportServiceService.prototype.getSituationIndividuel = function (date1, date2) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'getCreanceGlo/' + date1 + '/' + date2);
    };
    RapportServiceService.prototype.getPrestation = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'prestation');
    };
    RapportServiceService.prototype.getSituatonParPrestation = function (date1, date2, id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'getGlobalsPrestations/' + date1 + '/' + date2 + '/' + id);
    };
    RapportServiceService.prototype.getSituatonParindividus = function (date1, date2, id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'getIndividuelPrestations/' + date1 + '/' + date2 + '/' + id);
    };
    RapportServiceService.prototype.getSituatonRemboursement = function (date1, date2, id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'getIndividuelRembour/' + date1 + '/' + date2 + '/' + id);
    };
    RapportServiceService.prototype.getBonByPeriodeAndtypeBon = function (date1, date2, idprestation) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'getBonByPeriodeAndtype/' + date1 + '/' + date2 + '/' + idprestation);
    };
    RapportServiceService.prototype.getBonByPeriodeBon = function (date1, date2, typeBon) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'getBonByPeriode/' + date1 + '/' + date2 + '/' + typeBon);
    };
    RapportServiceService.prototype.CountEmploye = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'employe/count');
    };
    RapportServiceService.prototype.CountConj = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'conjoint/count');
    };
    RapportServiceService.prototype.CountEnf = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'enfant/count');
    };
    RapportServiceService.prototype.CountBons = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'getBonbymonth');
    };
    RapportServiceService.prototype.CountSexeMasculin = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'employe/countSexeM');
    };
    RapportServiceService.prototype.CountSexeFeminin = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'employe/countSexeF');
    };
    RapportServiceService.prototype.CountAgesEnfant = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'allenfant');
    };
    RapportServiceService.prototype.CountSexeFemininConj = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'conjoint/countSexeF');
    };
    RapportServiceService.prototype.CountSexeMasculinConj = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'conjoint/countSexeM');
    };
    //////Bon par prestation
    RapportServiceService.prototype.CountBonPharmacie = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'getBonbypharma');
    };
    RapportServiceService.prototype.CountBonConsultation = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'getBonbycons');
    };
    RapportServiceService.prototype.CountBonLettreGarantie = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'getBonbylettreGarantie');
    };
    RapportServiceService.prototype.CountBonLunetterie = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL + 'getBonbylunetterie');
    };
    RapportServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RapportServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RapportServiceService);
    return RapportServiceService;
}());



/***/ }),

/***/ "E7Th":
/*!************************************************!*\
  !*** ./src/app/Services/prestation.service.ts ***!
  \************************************************/
/*! exports provided: PrestationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestationService", function() { return PrestationService; });
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



var PrestationService = /** @class */ (function () {
    function PrestationService(http) {
        this.http = http;
    }
    PrestationService.prototype.AjoutPrestation = function (prestation) {
        console.log(prestation);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'prestation', prestation, { responseType: 'text' });
    };
    PrestationService.prototype.listePrestation = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'prestation');
    };
    PrestationService.prototype.ModifierPrestation = function (pre) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'prestation', pre);
    };
    PrestationService.prototype.getPrestationById = function (idp) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'prestation/' + idp);
    };
    PrestationService.prototype.getPrestation = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'prestation');
    };
    PrestationService.prototype.getAllPestataires = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'allprestataire');
    };
    PrestationService.prototype.getTypePrestataire = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'alltypeprestataire');
    };
    PrestationService.prototype.getAllPrestation = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'prestation');
    };
    PrestationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    PrestationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PrestationService);
    return PrestationService;
}());



/***/ }),

/***/ "Iab2":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }

  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }

  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);

    try {
      b.send();
    } catch (a) {}

    return 200 <= b.status && 299 >= b.status;
  }

  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }

  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
      a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
      g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
    var i = f.URL || f.webkitURL,
        j = document.createElement("a");
    g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
      i.revokeObjectURL(j.href);
    }, 4E4), setTimeout(function () {
      e(j);
    }, 0));
  } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
    if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
      var i = document.createElement("a");
      i.href = f, i.target = "_blank", setTimeout(function () {
        e(i);
      });
    }
  } : function (b, d, e, g) {
    if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
    var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);

    if ((j || h && i || a) && "undefined" != typeof FileReader) {
      var k = new FileReader();
      k.onloadend = function () {
        var a = k.result;
        a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
      }, k.readAsDataURL(b);
    } else {
      var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
      g ? g.location = m : location.href = m, g = null, setTimeout(function () {
        l.revokeObjectURL(m);
      }, 4E4);
    }
  });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});

/***/ }),

/***/ "IeU+":
/*!*******************************************!*\
  !*** ./src/app/Models/CotisatonGlobal.ts ***!
  \*******************************************/
/*! exports provided: Cotisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cotisation", function() { return Cotisation; });
var Cotisation = /** @class */ (function () {
    function Cotisation(idCotisation, montant_totals, date, ipm_utilisateur) {
        this.idCotisation = idCotisation;
        this.montant_totals = montant_totals;
        this.date = date;
        this.ipm_utilisateur = ipm_utilisateur;
    }
    return Cotisation;
}());



/***/ }),

/***/ "LBNV":
/*!**********************************!*\
  !*** ./src/app/Models/Bareme.ts ***!
  \**********************************/
/*! exports provided: Bareme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bareme", function() { return Bareme; });
var Bareme = /** @class */ (function () {
    function Bareme(idBareme, min, max, montant) {
        this.idBareme = idBareme;
        this.min = min;
        this.max = max;
        this.montant = montant;
    }
    ;
    return Bareme;
}());



/***/ }),

/***/ "MVAf":
/*!*************************************************!*\
  !*** ./src/app/Services/utilisateur.service.ts ***!
  \*************************************************/
/*! exports provided: UtilisateurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilisateurService", function() { return UtilisateurService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UtilisateurService = /** @class */ (function () {
    function UtilisateurService(http) {
        this.http = http;
        //   if (this.keycloak.getKeycloakInstance().authenticated) {
        //     this.email = this.keycloak.getKeycloakInstance().profile.email
        //   }
    }
    UtilisateurService.prototype.SaveUserToRole = function (user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'saveUser', user, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((this.erroHandler)));
    };
    UtilisateurService.prototype.SaveRole = function (role) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'saveRole', role, { responseType: 'text' });
    };
    UtilisateurService.prototype.SaveRoleUser = function (UserRole) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'roleAddUser', UserRole, { responseType: 'text' });
    };
    UtilisateurService.prototype.erroHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.message || 'erreur de telechargement ');
    };
    UtilisateurService.prototype.getAllRoles = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'AllRoles');
    };
    UtilisateurService.prototype.getAllUser = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'allUser');
    };
    UtilisateurService.prototype.getUserByUsername = function (email) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL + 'email/' + email);
    };
    UtilisateurService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    UtilisateurService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UtilisateurService);
    return UtilisateurService;
}());



/***/ }),

/***/ "ajkK":
/*!*****************************************!*\
  !*** ./src/app/Models/CotsatonExcel.ts ***!
  \*****************************************/
/*! exports provided: CotsationExcel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotsationExcel", function() { return CotsationExcel; });
var CotsationExcel = /** @class */ (function () {
    function CotsationExcel() {
    }
    return CotsationExcel;
}());



/***/ }),

/***/ "fnsB":
/*!***************************************!*\
  !*** ./src/app/Models/Prestations.ts ***!
  \***************************************/
/*! exports provided: Prestation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prestation", function() { return Prestation; });
var Prestation = /** @class */ (function () {
    function Prestation(code_prestation, libelle, taux_agrees, taux_non_agrees, ipm_prestataire, forfait, montant_forfait) {
        this.code_prestation = code_prestation;
        this.libelle = libelle;
        this.taux_agrees = taux_agrees;
        this.taux_non_agrees = taux_non_agrees;
        this.ipm_prestataire = ipm_prestataire;
        this.forfait = forfait;
        this.montant_forfait = montant_forfait;
    }
    ;
    return Prestation;
}());



/***/ }),

/***/ "gL+i":
/*!***************************************!*\
  !*** ./src/app/Models/Prestataire.ts ***!
  \***************************************/
/*! exports provided: Prestataire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prestataire", function() { return Prestataire; });
var Prestataire = /** @class */ (function () {
    function Prestataire(code_prestataire, nom_prestataire, adresse_prestataire, email, raison_social, telephone, fax, code_categorie_pretataire, nature, ipm_type_prestataire, typePres, lettreAgrement) {
        this.code_prestataire = code_prestataire;
        this.nom_prestataire = nom_prestataire;
        this.adresse_prestataire = adresse_prestataire;
        this.email = email;
        this.raison_social = raison_social;
        this.telephone = telephone;
        this.fax = fax;
        this.code_categorie_pretataire = code_categorie_pretataire;
        this.nature = nature;
        this.ipm_type_prestataire = ipm_type_prestataire;
        this.typePres = typePres;
        this.lettreAgrement = lettreAgrement;
    }
    return Prestataire;
}());



/***/ }),

/***/ "tLEV":
/*!********************************************!*\
  !*** ./src/app/Services/bareme.service.ts ***!
  \********************************************/
/*! exports provided: BaremeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaremeService", function() { return BaremeService; });
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



var BaremeService = /** @class */ (function () {
    function BaremeService(http) {
        this.http = http;
    }
    BaremeService.prototype.AjoutBareme = function (bareme) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'bareme', bareme, { responseType: 'text' });
    };
    BaremeService.prototype.listeBareme = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'bareme');
    };
    BaremeService.prototype.ModifierBareme = function (pre) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'updatebareme', pre);
    };
    BaremeService.prototype.getBaremeById = function (idp) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL + 'bareme/' + idp);
    };
    BaremeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    BaremeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], BaremeService);
    return BaremeService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map