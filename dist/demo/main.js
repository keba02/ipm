(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+2Nd":
/*!***************************************************!*\
  !*** ./src/app/md/md-table/md-table.component.ts ***!
  \***************************************************/
/*! exports provided: MdTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTableComponent", function() { return MdTableComponent; });
/* harmony import */ var _raw_loader_md_table_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./md-table.component.html */ "V/by");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MdTableComponent = /** @class */ (function () {
    function MdTableComponent() {
    }
    MdTableComponent.ctorParameters = function () { return []; };
    MdTableComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cardClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    MdTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-md-table',
            template: _raw_loader_md_table_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], MdTableComponent);
    return MdTableComponent;
}());



/***/ }),

/***/ "/27J":
/*!***************************************************!*\
  !*** ./src/app/md/md-chart/md-chart.component.ts ***!
  \***************************************************/
/*! exports provided: ChartType, MdChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartType", function() { return ChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChartComponent", function() { return MdChartComponent; });
/* harmony import */ var _raw_loader_md_chart_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./md-chart.component.html */ "WC68");
/* harmony import */ var _md_chart_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md-chart.component.css */ "IQ47");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartist */ "uki+");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType || (ChartType = {}));
var MdChartComponent = /** @class */ (function () {
    function MdChartComponent() {
    }
    MdChartComponent_1 = MdChartComponent;
    MdChartComponent.prototype.ngOnInit = function () {
        this.chartId = "md-chart-" + MdChartComponent_1.currentId++;
    };
    MdChartComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                new chartist__WEBPACK_IMPORTED_MODULE_3__["Pie"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                new chartist__WEBPACK_IMPORTED_MODULE_3__["Line"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                new chartist__WEBPACK_IMPORTED_MODULE_3__["Bar"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    var MdChartComponent_1;
    MdChartComponent.currentId = 1;
    MdChartComponent.ctorParameters = function () { return []; };
    MdChartComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        chartClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        chartType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        chartData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        chartOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        chartResponsive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        footerIconClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        footerText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        legendItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        withHr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    MdChartComponent = MdChartComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-md-chart',
            template: _raw_loader_md_chart_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_md_chart_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], MdChartComponent);
    return MdChartComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/Desktop/projet-ipm-ma_branche/src/main.ts */"zUnb");


/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "zvoc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Menu Items
var ROUTES = [{
        path: '/',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    },
    {
        path: '/gestion-employes',
        title: 'Participants',
        type: 'sub',
        icontype: 'group',
        collapse: 'gestionemployes',
        children: [
            { path: 'rechercheEmploye', title: 'Liste des participants', ab: 'RE' },
            // {path: 'carnetEmploye', title: 'Carnet Employé', ab:'CE'},
            { path: 'Liste-des-Employes', title: 'Liste Par Entités', ab: 'AE' },
            { path: 'ListeEmployes', title: 'Carnets', ab: 'CE' },
        ]
    },
    {
        path: '/gestion-bons',
        title: 'Bons',
        type: 'sub',
        icontype: 'description',
        collapse: 'gestionbons',
        children: [
            // {path: 'Ajouterbons', title: 'Ajouter Bons', ab:'AB'},
            { path: 'Listebons', title: 'Bon de Pharmacie', ab: 'PH' },
            // {path: 'ModifierEmployes/:id', title: 'ModifierEmploye', ab:'ME'},
            // {path: 'SupprimerEmployes', title: 'SupprimerEmploye', ab:'SE'}
            { path: 'BonLettre', title: 'Lettre de Garantie', ab: 'LG' },
            { path: 'BonLunetterie', title: 'Bon Lunetterie ', ab: 'BL' },
            { path: 'BonConsultation', title: 'Bon de Consultation', ab: 'BC' },
        ]
    },
    {
        path: '/gestion-factures',
        title: 'Factures',
        type: 'sub',
        icontype: 'note_alt',
        collapse: 'gestionfactures',
        children: [
            { path: 'Ajouterfactures', title: 'Facturer par import', ab: 'FI' },
            { path: 'FactureEmployes', title: 'Facturer Par saisie', ab: 'FS' },
            { path: 'ListeFacture', title: 'Liste de Factures', ab: 'LF' },
        ]
    },
    {
        path: '/gestion-prestataires',
        title: 'Prestataires',
        type: 'sub',
        icontype: 'roofing',
        collapse: 'gestionprestataires',
        children: [
            { path: 'Ajouterprestataires', title: 'Ajouter Types prestataires', ab: 'AP' },
            { path: 'Listeprestataires', title: 'Listes Prestataires', ab: 'LP' },
        ]
    },
    {
        path: '/gestion-prestations',
        title: 'Prestations',
        type: 'sub',
        icontype: 'bloodtype',
        collapse: 'gestionprestations',
        children: [
            //1 {path: 'AjoutPrestation', title: 'Ajouter Prestations', ab:'AP'},
            // {path: 'AjoutPrestation', title: 'Ajouter Prestations', ab:'AP'},
            { path: 'ListPrestation', title: 'Liste Prestations', ab: 'LP' },
        ]
    },
    {
        path: '/bareme',
        title: 'Bareme',
        type: 'sub',
        icontype: 'money',
        collapse: 'bareme',
        children: [
            { path: 'SaveBareme', title: 'Liste Bareme', ab: 'LB' },
        ]
    },
    {
        path: '/precomptes',
        title: 'Precomptes',
        type: 'sub',
        icontype: 'payment',
        collapse: 'precomptes',
        children: [
            { path: 'Saveprecomptes', title: 'Precomptes', ab: 'PE' },
            { path: 'Listprecomptesmois', title: 'Precompte Par Date', ab: 'PD' },
        ]
    },
    {
        path: '/remboursements',
        title: 'Remboursement',
        type: 'sub',
        icontype: 'paid',
        collapse: 'remboursements',
        children: [
            { path: 'AjoutRemboursement', title: 'Remboursement', ab: 'AR' },
            { path: 'Listremboursements', title: 'Liste des Remboursements', ab: 'LB' },
        ]
    },
    {
        path: '/cotisation',
        title: 'Cotisation',
        type: 'sub',
        icontype: 'group_user',
        collapse: 'cotisation',
        children: [
            { path: 'AjoutCotisation', title: 'Ajout Cotisation', ab: 'CE' },
            { path: 'ListeCotisation', title: 'Liste des cotisations  ', ab: 'CP' },
        ]
    },
    {
        path: '/utilisateur',
        title: 'Utilisateur',
        type: 'sub',
        icontype: 'group_user',
        collapse: 'utilisateur',
        children: [
            { path: 'Connexion', title: 'Utilisateur', ab: 'GU' },
        ]
    },
    {
        path: '/rapports',
        title: 'Rapports',
        type: 'sub',
        icontype: 'group_user',
        collapse: 'rapports',
        children: [
            // {path: 'ChargesIndividuel', title: 'situation Individuel', ab:'CI'},
            { path: 'CreancesGlobales', title: 'Créances Globales', ab: 'CG' },
            { path: 'SituationAnnuelle', title: 'situation Annuelle', ab: 'CG' },
            { path: 'SituationPrestation', title: 'situation Individuelle', ab: 'CG' },
            { path: 'Situation-des-bons', title: 'situation-des-bons', ab: 'CG' },
            { path: 'situation-par-prestation', title: 'prestations/prestataires', ab: 'CG' },
        ]
    },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(keycloak) {
        this.keycloak = keycloak;
    }
    //   employe: Employe = new Employ e(0,"","","","",null,"","",null,"","","","","","","",null,null);
    //   matricule:string;
    //   reference:string;
    //   message:Employe;
    // isMobileMenu() {
    //     if ($(window).width() > 991) {
    //         return false;
    //     }
    //     return true;
    // };
    SidebarComponent.prototype.deconnexion = function () {
        this.keycloak.logout();
        return this.keycloak.logout();
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"](elemSidebar);
        }
        this.keycloak.loadUserProfile().then(function (res) {
            _this.username = res.firstName + " " + res.lastName;
            _this.email = res.email;
            console.log(_this.username, _this.email);
            // this.userByEmail(this.email)
        });
    };
    SidebarComponent.prototype.updatePS = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            this.ps.update();
        }
    };
    SidebarComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    ////////////////////
    SidebarComponent.prototype.isGerant = function () {
        this.hasAccess = false;
        if (this.keycloak.getUserRoles().includes("gerant")) {
            this.hasAccess = true;
        }
        return this.hasAccess;
    };
    SidebarComponent.prototype.isComptable = function () {
        this.hasAccess = false;
        if (this.keycloak.getUserRoles().includes("comptable")) {
            this.hasAccess = true;
        }
        return this.hasAccess;
    };
    SidebarComponent.prototype.isAdmin = function () {
        this.hasAccess = false;
        if (this.keycloak.getUserRoles().includes("admin")) {
            this.hasAccess = true;
        }
        return this.hasAccess;
    };
    SidebarComponent.prototype.isAgent = function () {
        this.hasAccess = false;
        if (this.keycloak.getUserRoles().includes("agent")) {
            this.hasAccess = true;
        }
        return this.hasAccess;
    };
    SidebarComponent.prototype.isSecretaire = function () {
        this.hasAccess = false;
        if (this.keycloak.getUserRoles().includes("secretaire")) {
            this.hasAccess = true;
        }
        return this.hasAccess;
    };
    SidebarComponent.prototype.isOperateur = function () {
        this.hasAccess = false;
        if (this.keycloak.getUserRoles().includes("operateur")) {
            this.hasAccess = true;
        }
        return this.hasAccess;
    };
    SidebarComponent.prototype.isGerantLocal = function () {
        this.hasAccess = false;
        if (this.keycloak.getUserRoles().includes("gerantLocal")) {
            this.hasAccess = true;
        }
        return this.hasAccess;
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar-cmp',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        }),
        __metadata("design:paramtypes", [keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "550G":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Fixed Plugin configurator, used just for Demo Purpose\n<div class=\"fixed-plugin\">\n    <div class=\"dropdown show-dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n            <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\"> Sidebar Filters</li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                  <div class=\"ml-auto mr-auto\">\n                    <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                    <span class=\"badge filter badge-azure active\" data-color=\"azure\"></span>\n                    <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                    <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                    <span class=\"badge filter badge-danger\" data-color=\"danger\"></span>\n                    <span class=\"badge filter badge-rose\" data-color=\"rose\"></span>\n                  </div>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line\">\n                <a  class=\"switch-trigger background-color\">\n                    <div >\n                        <span class=\"badge filter badge-white\" data-color=\"white\"></span>\n                        <span class=\"badge filter badge-black\" data-color=\"black\"></span>\n                        <span class=\"badge filter badge-danger\" data-color=\"red\"></span> \n                    </div>\n                    <div ></div>\n                </a>\n            </li>\n            <li class=\"adjustments-line\">\n              <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                  <p>Sidebar Mini</p>\n                  <label class=\"ml-auto\">\n                    <div class=\"togglebutton switch-sidebar-mini\">\n                      <label>\n                          <input type=\"checkbox\">\n                              <span class=\"toggle\"></span>\n                      </label>\n                    </div>\n                  </label>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"ripple-container\"></div>\n              </a>\n            </li>\n            <li class=\"adjustments-line\">\n              <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                  <p>Sidebar Images</p>\n                  <label class=\"switch-mini ml-auto\">\n                    <div class=\"togglebutton switch-sidebar-image\">\n                      <label>\n                          <input type=\"checkbox\" checked=\"\">\n                            <span class=\"toggle\"></span>\n                      </label>\n                    </div>\n                  </label>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"ripple-container\"></div>\n              </a>\n            </li>\n            <li class=\"header-title\">Images</li>\n          <li class=\"active\">\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\" />\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\" />\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\" />\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\" />\n                </a>\n            </li>\n        </ul>\n    </div>\n</div> -->\n");

/***/ }),

/***/ "5My1":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedpluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedpluginModule", function() { return FixedpluginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixedplugin.component */ "Pqk8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FixedpluginModule = /** @class */ (function () {
    function FixedpluginModule() {
    }
    FixedpluginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__["FixedpluginComponent"]],
            exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__["FixedpluginComponent"]]
        })
    ], FixedpluginModule);
    return FixedpluginModule;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // URL : 'http://localhost:8082/'
    URL: 'http://10.6.4.62:8084/ipm-backend/',
};


/***/ }),

/***/ "CpO+":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "EtQq");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.././sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/employe.service */ "WxxJ");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "EjJx");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(keycloak, location, renderer, element, router, emp_service) {
        var _this = this;
        this.keycloak = keycloak;
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.emp_service = emp_service;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.keycloak.loadUserProfile().then(function (res) {
            console.log("************************************");
            _this.username = res.firstName;
            _this.lastname = res.lastName;
            console.log(_this.username, _this.lastname);
        });
        this.keycloak.getToken().then(function (data) {
            _this.connect = data;
            var decode = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_7__["default"])(_this.connect);
            var map = new Map(Object.entries(decode));
        });
    }
    // minimizeSidebar(){
    //   const body = document.getElementsByTagName('body')[0];
    //   if (misc.sidebar_mini_active === true) {
    //       body.classList.remove('sidebar-mini');
    //       misc.sidebar_mini_active = false;
    //   } else {
    //       setTimeout(function() {
    //           body.classList.add('sidebar-mini');
    //           misc.sidebar_mini_active = true;
    //       }, 300);
    //   }
    //   // we simulate the window Resize so the charts will get updated in realtime.
    //   const simulateWindowResize = setInterval(function() {
    //       window.dispatchEvent(new Event('resize'));
    //   }, 180);
    //   // we stop the simulation of Window Resize after the animations are completed
    //   setTimeout(function() {
    //       clearInterval(simulateWindowResize);
    //   }, 1000);
    // }
    // hideSidebar(){
    //   const body = document.getElementsByTagName('body')[0];
    //   const sidebar = document.getElementsByClassName('sidebar')[0];
    //   if (misc.hide_sidebar_active === true) {
    //       setTimeout(function() {
    //           body.classList.remove('hide-sidebar');
    //           misc.hide_sidebar_active = false;
    //       }, 300);
    //       setTimeout(function () {
    //           sidebar.classList.remove('animation');
    //       }, 600);
    //       sidebar.classList.add('animation');
    //   } else {
    //       setTimeout(function() {
    //         body.classList.add('hide-sidebar');
    //           // $('.sidebar').addClass('animation');
    //           misc.hide_sidebar_active = true;
    //       }, 300);
    //   }
    //   // we simulate the window Resize so the charts will get updated in realtime.
    //   const simulateWindowResize = setInterval(function() {
    //       window.dispatchEvent(new Event('resize'));
    //   }, 180);
    //   // we stop the simulation of Window Resize after the animations are completed
    //   setTimeout(function() {
    //       clearInterval(simulateWindowResize);
    //   }, 1000);
    // }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if (body.classList.contains('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    };
    NavbarComponent.prototype.onResize = function (event) {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        setTimeout(function () {
            $toggle.classList.add('toggled');
        }, 430);
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        if (body.querySelectorAll('.main-panel')) {
            document.getElementsByClassName('main-panel')[0].appendChild($layer);
        }
        else if (body.classList.contains('off-canvas-sidebar')) {
            document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
        }
        setTimeout(function () {
            $layer.classList.add('visible');
        }, 100);
        $layer.onclick = function () {
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            this.sidebarVisible = false;
            $layer.classList.remove('visible');
            setTimeout(function () {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
        }.bind(this);
        body.classList.add('nav-open');
        this.mobile_menu_visible = 1;
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
        // $('html').removeClass('nav-open');
        body.classList.remove('nav-open');
        if ($layer) {
            $layer.remove();
        }
        setTimeout(function () {
            $toggle.classList.remove('toggled');
        }, 400);
        this.mobile_menu_visible = 0;
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    // getTitle() {
    //   var titlee = this.location.prepareExternalUrl(this.location.path());
    //   if(titlee.charAt(0) === '#'){
    //       titlee = titlee.slice( 1 );
    //   }
    //     for (let i = 0; i < this.listTitles.length; i++) {
    //         if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
    //             return this.listTitles[i].title;
    //         } else if (this.listTitles[i].type === "sub") {
    //             for (let j = 0; j < this.listTitles[i].children.length; j++) {
    //                 let subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
    //                 // console.log(subtitle)
    //                 // console.log(titlee)
    //                 if (subtitle === titlee) {
    //                     return this.listTitles[i].children[j].title;
    //                 }
    //             }
    //         }
    //     }
    //     return 'Dashboard';
    // }
    // getPath() {
    //     return this.location.prepareExternalUrl(this.location.path());
    // }
    NavbarComponent.prototype.deconnexion = function () {
        this.router.navigateByUrl("/dashboard");
        return this.keycloak.logout();
    };
    NavbarComponent.prototype.isCameraApp = function () {
        return this.keycloak.getUserRoles;
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_6__["KeycloakService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_5__["EmployeService"] }
    ]; };
    NavbarComponent.propDecorators = {
        button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['app-navbar-cmp', { static: false },] }]
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-cmp',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [keycloak_angular__WEBPACK_IMPORTED_MODULE_6__["KeycloakService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_Services_employe_service__WEBPACK_IMPORTED_MODULE_5__["EmployeService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "IQ47":
/*!****************************************************!*\
  !*** ./src/app/md/md-chart/md-chart.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21kL21kLWNoYXJ0L21kLWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "OiN0":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"white\" data-background-color=\"red\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar-cmp></app-sidebar-cmp>\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar-cmp></app-navbar-cmp>\n        <div class=\"main-content\">\n            <div class=\"container-fluid\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n        \n        <div *ngIf=\"!isMap()\">\n            <app-footer-cmp></app-footer-cmp>\n        </div>\n    </div>\n    <app-fixedplugin></app-fixedplugin>\n</div>\n");

/***/ }),

/***/ "OsiS":
/*!*********************************!*\
  !*** ./src/app/md/md.module.ts ***!
  \*********************************/
/*! exports provided: NavItemType, MdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemType", function() { return NavItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdModule", function() { return MdModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./md-table/md-table.component */ "+2Nd");
/* harmony import */ var _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./md-chart/md-chart.component */ "/27J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavItemType;
(function (NavItemType) {
    NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
    NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
    NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType || (NavItemType = {}));
var MdModule = /** @class */ (function () {
    function MdModule() {
    }
    MdModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__["MdTableComponent"],
                _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__["MdChartComponent"]
            ],
            exports: [
                _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__["MdTableComponent"],
                _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__["MdChartComponent"]
            ]
        })
    ], MdModule);
    return MdModule;
}());



/***/ }),

/***/ "Pqk8":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedpluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedpluginComponent", function() { return FixedpluginComponent; });
/* harmony import */ var _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./fixedplugin.component.html */ "550G");
/* harmony import */ var _fixedplugin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fixedplugin.component.css */ "Vki+");
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



var md = {
    misc: {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    }
};
var FixedpluginComponent = /** @class */ (function () {
    function FixedpluginComponent() {
    }
    FixedpluginComponent.prototype.ngOnInit = function () {
        // fixed plugin
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        //
        var $full_page = $('.full-page');
        //
        var $sidebar_responsive = $('body > .navbar-collapse');
        var window_width = $(window).width();
        var fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();
        if (window_width > 767 && fixed_plugin_open === 'Dashboard') {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex: if we click on switch, stop propagation of the event,
            // so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        //   $('.fixed-plugin .active-color span').click(function() {
        //       const $full_page_background = $('.full-page-background');
        //       $(this).siblings().removeClass('active');
        //       $(this).addClass('active');
        //       const new_color = $(this).data('color');
        //       if ($sidebar.length !== 0) {
        //           $sidebar.attr('data-color', new_color);
        //       }
        //       if ($full_page.length !== 0) {
        //           $full_page.attr('filter-color', new_color);
        //       }
        //       if ($sidebar_responsive.length !== 0) {
        //           $sidebar_responsive.attr('data-color', new_color);
        //       }
        //   }
        //   );
        //   $('.fixed-plugin .background-color span').click(function() {
        //       $(this).siblings().removeClass('active');
        //       $(this).addClass('active');
        //       const new_color = $(this).data('color');
        //       if ($sidebar.length !== 0) {
        //           $sidebar.attr('data-background-color', new_color);
        //       }
        //   });
        $('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
            var new_image = $(this).find('img').attr('src');
            if ($sidebar_img_container.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0) {
                var new_image_full_page_1 = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image_full_page_1 + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($('.switch-sidebar-image input:checked').length === 0) {
                new_image = $('.fixed-plugin li.active .img-holder').find('img').attr('src');
                var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
            }
            if ($sidebar_responsive.length !== 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
        $('.switch-sidebar-image input').change(function () {
            var $full_page_background = $('.full-page-background');
            var $input = $(this);
            if ($input.is(':checked')) {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar_img_container.fadeIn('fast');
                    $sidebar.attr('data-image', '#');
                }
                if ($full_page_background.length !== 0) {
                    $full_page_background.fadeIn('fast');
                    $full_page.attr('data-image', '#');
                }
                var background_image = true;
            }
            else {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar.removeAttr('data-image');
                    $sidebar_img_container.fadeOut('fast');
                }
                if ($full_page_background.length !== 0) {
                    $full_page.removeAttr('data-image', '#');
                    $full_page_background.fadeOut('fast');
                }
                var background_image = false;
            }
        });
        $('.switch-sidebar-mini input').change(function () {
            var $body = $('body');
            var $input = $(this);
            if (md.misc.sidebar_mini_active === true) {
                $('body').removeClass('sidebar-mini');
                md.misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    $('.sidebar .collapse').css('height', 'auto');
                    md.misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    FixedpluginComponent.ctorParameters = function () { return []; };
    FixedpluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-fixedplugin',
            template: _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_fixedplugin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FixedpluginComponent);
    return FixedpluginComponent;
}());



/***/ }),

/***/ "QpQ6":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-primary navbar-transparent navbar-absolute\" color-on-scroll=\"500\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <a class=\"navbar-brand d-none d-sm-none d-md-block\" [routerLink]=\"['/dashboard']\">Material Dashboard Pro Angular</a>\n      <a class=\"navbar-brand d-block d-sm-block d-md-none\" [routerLink]=\"['/dashboard']\">MD Pro Angular</a>\n    </div>\n    <button mat-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\n            <i class=\"material-icons\">dashboard</i> Dashboard\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/pages/register']\">\n            <i class=\"material-icons\">person_add</i> Register\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/pages/login']\">\n            <i class=\"material-icons\">fingerprint</i> Login\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/pages/lock']\">\n            <i class=\"material-icons\">lock_open</i> Lock\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n  <router-outlet></router-outlet>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            var body = document.getElementsByTagName('body')[0];
            var modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
            if (body.classList.contains('modal-open')) {
                body.classList.remove('modal-open');
                modalBackdrop.remove();
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-app',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "V/by":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/md/md-table/md-table.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"content table-responsive\">\n    <table class=\"table\">\n      <tbody>\n          <tr *ngFor=\"let row of data.dataRows\">\n            <!-- <td *ngFor=\"let cell of row\">{{ cell }}</td> -->\n            <td>\n                <div class=\"flag\">\n                    <img src=\"./assets/img/flags/{{row[0]}}.png\" alt=\"\">\n                </div>\n            </td>\n            <td>\n                {{row[1]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[2]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[3]}}\n            </td>\n          </tr>\n      </tbody>\n    </table>\n\n  </div>\n");

/***/ }),

/***/ "Vki+":
/*!**************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9maXhlZHBsdWdpbi9maXhlZHBsdWdpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "WC68":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/md/md-chart/md-chart.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">{{ title }}</h4>\n    <p class=\"category\">{{ subtitle }}</p>\n  </div>\n  <div class=\"content\">\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\n\n    <div class=\"footer\">\n      <div class=\"legend\">\n        <span *ngFor=\"let item of legendItems\">\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\n        </span>\n      </div>\n      <hr *ngIf=\"withHr\">\n      <div class=\"stats\">\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "WxxJ":
/*!*********************************************!*\
  !*** ./src/app/Services/employe.service.ts ***!
  \*********************************************/
/*! exports provided: EmployeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeService", function() { return EmployeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeService = /** @class */ (function () {
    function EmployeService(http) {
        this.http = http;
    }
    //private baseUrl = '/ipm/employe';
    EmployeService.prototype.AjoutEmploye = function (employe) {
        console.log(employe);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'employe', employe, { responseType: 'text' });
    };
    EmployeService.prototype.listeEmploye = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'employe');
    };
    EmployeService.prototype.ModifierEmploye = function (emp) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'employe', emp);
    };
    EmployeService.prototype.ModifierfichierEmploye = function (emp) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'fichieremploye', emp);
    };
    EmployeService.prototype.ModifierCategorie = function (emp) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'categorie', emp);
    };
    EmployeService.prototype.ModifierEmployeSansphoto = function (emp) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'employesansPhoto', emp);
    };
    EmployeService.prototype.getEmployeById = function (idemp) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'employes/' + idemp);
    };
    EmployeService.prototype.statutInactif = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'statutInactif/' + id);
    };
    EmployeService.prototype.getMotif = function () {
        console.log("entrer*****************");
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'ipm_motif_statut/');
    };
    EmployeService.prototype.getEmployeByIdSanstof = function (idemp) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'employesanstof/' + idemp);
    };
    EmployeService.prototype.deleteEmployeById = function (idemp) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'employe/' + idemp, { responseType: 'text' });
    };
    EmployeService.prototype.getEmploye = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'employe');
    };
    EmployeService.prototype.getListEmploByservice = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'listemployes/' + id);
    };
    EmployeService.prototype.getEmployeByMatricules = function (matricule) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'rechercheM/' + matricule);
    };
    EmployeService.prototype.AjoutCotisation = function (cotisation) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'cotisation', cotisation);
    };
    EmployeService.prototype.AjoutDetaCotisation = function (detailCotsa) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'adddetailscotisation', detailCotsa, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((this.erroHandler)));
    };
    EmployeService.prototype.getDetailsCotisationByIdEmp = function (idemp) {
        var annee = new Date().getFullYear();
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'detailscotisation/employe/' + idemp + "/" + annee);
    };
    EmployeService.prototype.getEmployeByMatricule = function (matricule) {
        matricule = (matricule.toString().replace("/", ""));
        console.log(matricule);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'rechercheM/' + matricule)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((this.erroHandler)));
    };
    EmployeService.prototype.erroHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.message || 'erreur de telechargement de fichier');
    };
    EmployeService.prototype.getlistBon = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'getbonParmByid/' + id);
    };
    EmployeService.prototype.getService = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'service');
    };
    EmployeService.prototype.getlistService = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'listservice/' + id);
    };
    EmployeService.prototype.getlistCategorie = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'categorie');
    };
    EmployeService.prototype.getlistBonConsult = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'getbonConsultByid/' + id);
    };
    EmployeService.prototype.getCategorie = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'categorie');
    };
    EmployeService.prototype.getEntity = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'entity');
    };
    EmployeService.prototype.getEntityByid = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'entity/' + id);
    };
    // upload(file: File): Observable<HttpEvent<any>> {
    //   const formData: FormData = new FormData();
    //   formData.append('file', file);
    //   const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
    //     reportProgress: true,
    //     responseType: 'json'
    //   });
    //   return this.http.request(req);
    // }
    EmployeService.prototype.getFiles = function (idemp) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'employe/' + idemp);
    };
    /*uploadFile(file: File): Observable<HttpEvent<{}>> {
         const formdata: FormData = new FormData();
         formdata.append('file', file);
         const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
               reportProgress: true,
               responseType: 'text'
         });
     
         return this.http.request(req);
    }*/
    EmployeService.prototype.addUploadData = function (file) {
        var formData = new FormData();
        // console.log("file.name :"+file.name) 
        // console.log("file.size :"+file.size) 
        formData.append('image', file, file.name);
        // formData.append('enfant', enfant);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + "uploads", formData);
    };
    EmployeService.prototype.addUploadJustif = function (file) {
        var formData = new FormData();
        // console.log("file.name :"+file.name) 
        // console.log("file.size :"+file.size) 
        formData.append('file', file, file.name);
        // formData.append('enfant', enfant);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + "uploadeJustif", formData);
    };
    EmployeService.prototype.ListFactureByEmploye = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'detailsfactByEmploye/' + id);
    };
    EmployeService.prototype.AjoutPanierService = function (service) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'addPanierService', service, { responseType: 'text' });
    };
    EmployeService.prototype.AjoutPanierCategorie = function (service) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'addPanierCategorie', service, { responseType: 'text' });
    };
    EmployeService.prototype.AjoutPanierEmploye = function (service) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'addPanierEmploye', service, { responseType: 'text' });
    };
    //requete pour recuperer les details de cotisation en cumul par employe
    EmployeService.prototype.getCumulCotisationByEmploye = function () {
        var annee = new Date().getFullYear();
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'detailscotisation/cumul/employe/' + annee);
    };
    EmployeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    EmployeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], EmployeService);
    return EmployeService;
}());



/***/ }),

/***/ "YGuC":
/*!*********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "OiN0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _md_md_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../md/md.module */ "OsiS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, location) {
        this.router = router;
        this.yScrollStack = [];
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        var html = document.getElementsByTagName('html')[0];
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["default"](elemSidebar);
            html.classList.add('perfect-scrollbar-on');
        }
        else {
            html.classList.add('perfect-scrollbar-off');
        }
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            _this.navbar.sidebarClose();
        });
        this.navItems = [
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarRight,
                title: '',
                iconClass: 'fa fa-bell-o',
                numNotifications: 5,
                dropdownItems: [
                    { title: 'Notification 1' },
                    { title: 'Notification 2' },
                    { title: 'Notification 3' },
                    { title: 'Notification 4' },
                    { title: 'Another Notification' }
                ]
            },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarRight,
                title: '',
                iconClass: 'fa fa-list',
                dropdownItems: [
                    { iconClass: 'pe-7s-mail', title: 'Messages' },
                    { iconClass: 'pe-7s-help1', title: 'Help Center' },
                    { iconClass: 'pe-7s-tools', title: 'Settings' },
                    'separator',
                    { iconClass: 'pe-7s-lock', title: 'Lock Screen' },
                    { iconClass: 'pe-7s-close-circle', title: 'Log Out' }
                ]
            },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarLeft, title: 'Account' },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarLeft,
                title: 'Dropdown',
                dropdownItems: [
                    { title: 'Action' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    'separator',
                    { title: 'Separated link' },
                ]
            },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_3__["NavItemType"].NavbarLeft, title: 'Log out' }
        ];
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["default"](elemSidebar);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    AdminLayoutComponent.propDecorators = {
        sidebar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['sidebar', { static: false },] }],
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], { static: false },] }]
    };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "wCP4");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/footer/footer.module */ "cNqA");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "CpO+");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "5My1");
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "YGuC");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "le+r");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var _keycloak_app_init__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./keycloak/app.init */ "vr/J");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_43__["AppRoutes"], {
                    useHash: true
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                MaterialModule,
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_37__["SidebarModule"],
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_39__["NavbarModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_38__["FooterModule"],
                _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_40__["FixedpluginModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_46__["ToastrModule"].forRoot(),
                keycloak_angular__WEBPACK_IMPORTED_MODULE_44__["KeycloakAngularModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_36__["AppComponent"],
                _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_41__["AdminLayoutComponent"],
                _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_42__["AuthLayoutComponent"]
            ],
            providers: [
                // MatNativeDateModule,
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: _keycloak_app_init__WEBPACK_IMPORTED_MODULE_45__["initializeKeycloak"],
                    multi: true,
                    deps: [keycloak_angular__WEBPACK_IMPORTED_MODULE_44__["KeycloakService"]],
                },
                _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                Location, { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_36__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "bCQQ":
/*!****************************************!*\
  !*** ./src/app/keycloak/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthGuard = /** @class */ (function (_super) {
    __extends(AuthGuard, _super);
    function AuthGuard(router, keycloak) {
        var _this = _super.call(this, router, keycloak) || this;
        _this.router = router;
        _this.keycloak = keycloak;
        return _this;
    }
    AuthGuard.prototype.isAccessAllowed = function (route, state) {
        return __awaiter(this, void 0, void 0, function () {
            var requiredRoles;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.authenticated) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.keycloak.login({
                                redirectUri: window.location.origin + "/ipm-fronte",
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        requiredRoles = route.data.roles;
                        // Allow the user to to proceed if no additional roles are required to access the route.
                        if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
                            return [2 /*return*/, true];
                        }
                        /*   let listrole= //JSON.parse(localStorage.getItem("role"))
                              this.keycloak.getKeycloakInstance().realmAccess.roles
                          // return listrole.every((role) => this.roles.includes(role));
                          console.log(requiredRoles)
                          let istrouve=false
                          for( let rol of requiredRoles)
                          {
                              if(listrole.find(role=>role===rol)!=undefined)
                              {
                                  istrouve= true
                              }
                  
                          }
                          return istrouve */
                        // Allow the user to proceed if all the required roles are present.
                        return [2 /*return*/, requiredRoles.every(function (role) { return _this.roles.includes(role); })];
                }
            });
        });
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"]])
    ], AuthGuard);
    return AuthGuard;
}(keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakAuthGuard"]));



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _keycloak_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keycloak/auth.guard */ "bCQQ");
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "YGuC");


var AppRoutes = [
    {
        path: '',
        // redirectTo: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        canActivate: [_keycloak_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        path: '',
        component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'gestion-employes',
                loadChildren: './gestion-employes/gestion-employes.module#GestionEmployesModule'
            },
            {
                path: 'gestion-bons',
                loadChildren: './gestion-bons/gestion-bons.module#GestionBonsModule'
            },
            {
                path: 'gestion-factures',
                loadChildren: './gestion-factures/gestion-factures.module#GestionFacturesModule'
            },
            {
                path: 'gestion-prestataires',
                loadChildren: './gestion-prestataires/gestion-prestataires.module#GestionPrestatairesModule'
            },
            {
                path: 'gestion-prestations',
                loadChildren: './gestion-prestations/gestion-prestations.module#GestionPrestationsModule'
            },
            {
                path: 'remboursements',
                loadChildren: './remboursements/remboursements.module#RemboursementsModule'
            },
            {
                path: 'utilisateur',
                loadChildren: './utilisateur/utilisateur.module#UtilisateurModule'
            },
            {
                path: 'bareme',
                loadChildren: './bareme/bareme.module#BaremeModule'
            },
            {
                path: 'precomptes',
                loadChildren: './precomptes/precomptes.module#PrecomptesModule'
            },
            {
                path: 'cotisation',
                loadChildren: './cotisation/cotisation.module#CotisationModule'
            },
            {
                path: 'rapports',
                loadChildren: './rapports/rapports.module#RapportsModule'
            },
            {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            }
        ]
    }
];


/***/ }),

/***/ "cNqA":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "jQpT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bareme/bareme.module": [
		"3qgr",
		"common",
		"bareme-bareme-module"
	],
	"./cotisation/cotisation.module": [
		"bnfn",
		"default~cotisation-cotisation-module~gestion-employes-gestion-employes-module~gestion-factures-gesti~bd115e67",
		"common",
		"cotisation-cotisation-module"
	],
	"./dashboard/dashboard.module": [
		"TDBs",
		"common",
		"dashboard-dashboard-module"
	],
	"./gestion-bons/gestion-bons.module": [
		"qLYx",
		"default~gestion-bons-gestion-bons-module~gestion-employes-gestion-employes-module~gestion-factures-g~38cf250c",
		"default~gestion-bons-gestion-bons-module~gestion-employes-gestion-employes-module",
		"common",
		"gestion-bons-gestion-bons-module"
	],
	"./gestion-employes/gestion-employes.module": [
		"SO5K",
		"default~cotisation-cotisation-module~gestion-employes-gestion-employes-module~gestion-factures-gesti~bd115e67",
		"default~gestion-bons-gestion-bons-module~gestion-employes-gestion-employes-module~gestion-factures-g~38cf250c",
		"default~gestion-bons-gestion-bons-module~gestion-employes-gestion-employes-module",
		"gestion-employes-gestion-employes-module"
	],
	"./gestion-factures/gestion-factures.module": [
		"z6mg",
		"default~cotisation-cotisation-module~gestion-employes-gestion-employes-module~gestion-factures-gesti~bd115e67",
		"default~gestion-bons-gestion-bons-module~gestion-employes-gestion-employes-module~gestion-factures-g~38cf250c",
		"common",
		"gestion-factures-gestion-factures-module"
	],
	"./gestion-prestataires/gestion-prestataires.module": [
		"f41M",
		"common",
		"gestion-prestataires-gestion-prestataires-module"
	],
	"./gestion-prestations/gestion-prestations.module": [
		"Z0Mm",
		"common",
		"gestion-prestations-gestion-prestations-module"
	],
	"./precomptes/precomptes.module": [
		"f8UU",
		"default~cotisation-cotisation-module~gestion-employes-gestion-employes-module~gestion-factures-gesti~bd115e67",
		"common",
		"precomptes-precomptes-module"
	],
	"./rapports/rapports.module": [
		"gHaW",
		"default~gestion-bons-gestion-bons-module~gestion-employes-gestion-employes-module~gestion-factures-g~38cf250c",
		"common",
		"rapports-rapports-module"
	],
	"./remboursements/remboursements.module": [
		"MTHE",
		"default~cotisation-cotisation-module~gestion-employes-gestion-employes-module~gestion-factures-gesti~bd115e67",
		"common",
		"remboursements-remboursements-module"
	],
	"./timeline/timeline.module": [
		"WQCU",
		"timeline-timeline-module"
	],
	"./userpage/user.module": [
		"hU7q",
		"userpage-user-module"
	],
	"./utilisateur/utilisateur.module": [
		"DQha",
		"common",
		"utilisateur-utilisateur-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\n  <div class=\"container-fluid\">\n    <div class=\"copyright pull-right\">\n      &copy;\n      {{test | date: 'yyyy'}}, développé par la  <i class=\"material-icons\">DSI-POSTE</i> \n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-cmp',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "le+r":
/*!*******************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "QpQ6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, element) {
        this.router = router;
        this.element = element;
        this.mobile_menu_visible = 0;
        this.sidebarVisible = false;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    };
    AuthLayoutComponent.prototype.sidebarOpen = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        setTimeout(function () {
            $toggle.classList.add('toggled');
        }, 430);
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        if (body.querySelectorAll('.wrapper-full-page')) {
            document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
        }
        else if (body.classList.contains('off-canvas-sidebar')) {
            document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
        }
        setTimeout(function () {
            $layer.classList.add('visible');
        }, 100);
        $layer.onclick = function () {
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            this.sidebarVisible = false;
            $layer.classList.remove('visible');
            setTimeout(function () {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
        }.bind(this);
        body.classList.add('nav-open');
        this.mobile_menu_visible = 1;
        this.sidebarVisible = true;
    };
    ;
    AuthLayoutComponent.prototype.sidebarClose = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
        // $('html').removeClass('nav-open');
        body.classList.remove('nav-open');
        if ($layer) {
            $layer.remove();
        }
        setTimeout(function () {
            $toggle.classList.remove('toggled');
        }, 400);
        this.mobile_menu_visible = 0;
    };
    ;
    AuthLayoutComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "vr/J":
/*!**************************************!*\
  !*** ./src/app/keycloak/app.init.ts ***!
  \**************************************/
/*! exports provided: initializeKeycloak */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeKeycloak", function() { return initializeKeycloak; });
function initializeKeycloak(keycloak) {
    return function () {
        return keycloak.init({
            config: {
                // url: 'http://localhost:8180/auth',
                // url:'http://10.14.14.232:8180/auth/',
                url: 'http://10.6.4.62:8180/auth/',
                realm: 'Digital-Poste',
                clientId: 'ipm-fronte',
            },
            initOptions: {
                onLoad: "check-sso",
                checkLoginIframe: false //Verifie l'etat qui a connecté
                // onLoad:"login-required",
            },
        });
    };
}


/***/ }),

/***/ "wCP4":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "47Jg");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav #navbar class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute\">\n  <div class=\"container-fluid\">\n    <div class=\"collapse navbar-collapse justify-content-end\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <!-- <i class=\"material-icons\">notifications</i> -->\n            <span class=\"badge p-2\" style=\"font-size: 12px; background-color: rgb(255, 122, 5);\">{{username}}--{{lastname}}</span>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\n            </p>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" (click)=\"deconnexion()\">Deconnexion</a>\n          </div>\n        </li>\n      </ul> \n    </div>\n    \n  </div>\n</nav>\n<div class=\"container-fluid col-md-12\" style=\"padding-left: 3cm; height:1px;\">\n  <div class=\"logo-img\">\n    <img src=\"/ipm-fronte/assets/img_poste/header1.png\"/>\n  </div>\n</div>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zvoc":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n<style>\n  #menu{font-size: 16px; letter-spacing: 1.3px; font-weight: 500;}\n  #smenu{font-size: 15px; letter-spacing: 1.3px; font-weight: 400;\n          border-bottom: 1px solid rgba(245, 245, 245, 0.806); padding: 5px;}\n        span{font-size: 17px;font-weight: 400;}\n        #titre{font-size: 18px;font-weight: 500;}\n  </style>\n          <div class=\"logo\">\n            <a class=\"simple-text logo-mini\">\n              <div class=\"logo-img\">\n                  <img img src=\"/ipm-fronte/assets/img_poste/laposte.png\"/>\n              </div>\n            </a>\n              <a href=\"/ipm-fronte/assets/img_poste/laposte.png\" class=\"simple-text logo-normal text-white\">\n                IPM-POSTE\n              </a>\n          </div>\n  \n  \n          <div class=\"sidebar-wrapper\">\n  \n              <!-- <div class=\"user\">\n                  <div class=\"photo\">\n                      <img src=\"./assets/img/faces/avatar.jpg\" />\n                  </div>\n                  <div class=\"user-info\">\n                      <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                          <span>\n                              Tania Andrew\n                              <b class=\"caret\"></b>\n                          </span>\n                      </a>\n                      <div class=\"collapse\" id=\"collapseExample\">\n                          <ul class=\"nav\">\n                              <li class=\"nav-item\">\n                                  <a href=\"javascript:void(0)\" class=\"nav-link\">\n                                      <span class=\"sidebar-mini\">MP</span>\n                                      <span class=\"sidebar-normal\">My Profile</span>\n                                  </a>\n                              </li>\n                              <li class=\"nav-item\">\n                                  <a href=\"javascript:void(0)\" class=\"nav-link\">\n                                      <span class=\"sidebar-mini\">EP</span>\n                                      <span class=\"sidebar-normal\">Edit Profile</span>\n                                  </a>\n                              </li>\n                              <li class=\"nav-item\">\n                                  <a href=\"javascript:void(0)\" class=\"nav-link\">\n                                      <span class=\"sidebar-mini\">S</span>\n                                      <span class=\"sidebar-normal\">Settings</span>\n                                  </a>\n                              </li>\n                          </ul>\n                      </div>\n                  </div>\n              </div> -->\n               <div> \n                 \n                <!-- <form class=\"navbar-form\">\n                  <span class=\"bmd-form-group\">\n                        <div class=\"input-group no-border\">\n                           \n                          <button mat-raised-button type=\"submit\" (click)=\"findByMatricule()\" class=\"btn btn-white btn-round btn-just-icon\">                        \n                            <i class=\"material-icons\">search</i>\n                            <div class=\"ripple-container\"></div>\n        \n                          </button>\n                          \n                        </div>\n                      </span>\n                </form> -->\n                <ul class=\"nav navbar-nav nav-mobile-menu\">\n                  <li class=\"nav-item\">\n                    <!-- <a class=\"nav-link\" href=\"#pablo\">\n                      <i class=\"material-icons\">dashboard </i>\n                      <p>\n                        <span class=\"d-lg-none d-md-block\">Stats</span>\n                      </p>\n                    </a> -->\n                  </li>\n                  <!-- <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      <i class=\"material-icons\">notifications</i>\n                      <span class=\"notification\">5</span>\n                      <p>\n                        <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                      </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                      <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                      <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                      <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another One</a>\n                    </div>\n                  </li> -->\n                  <!-- <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#pablo\">\n                      <i class=\"material-icons\">person</i>\n                      <p>\n                        <span class=\"d-lg-none d-md-block\">Account</span>\n                      </p>\n                    </a>\n                  </li> -->\n                </ul>\n              </div> \n              <ul class=\"nav\">\n                  <!-- <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\" class=\"nav-item\">\n                      \n                      <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\" class=\"nav-link\">\n                          <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                          <p>{{menuitem.title}}</p>\n                      </a>\n                      \n                      <a data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\" *ngIf=\"menuitem.type === 'sub'\" (click)=\"updatePS()\" class=\"nav-link\">\n                          <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                          <p id=\"menu\">{{menuitem.title}}<b class=\"caret\"></b></p>\n                      </a>\n  \n                     \n                      <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                          <ul class=\"nav\">\n                              <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\" class=\"nav-item\">\n                                  <a [routerLink]=\"[menuitem.path, childitem.path]\" class=\"nav-link\">\n                                      <span  class=\"sidebar-mini\">{{childitem.ab}}</span>\n                                      <span id=\"smenu\" class=\"sidebar-normal\">{{childitem.title}}</span>\n                                  </a>\n                              </li>\n                          </ul>\n                      </div> \n                  </li>\n                  <li class=\"nav-item\">\n                      \n                  </li> -->\n                  <!--daesbord-->\n                  <li routerLinkActive=\"active\" class=\"nav-item\">\n                    <!--If is a single link-->\n                    <a [routerLink]=\"[menuItems[0].path]\" *ngIf=\"menuItems[0].type === 'link'\" class=\"nav-link\">\n                        <i class=\"material-icons\">{{menuItems[0].icontype}}</i>\n                        <p id=\"titre\">{{menuItems[0].title}}</p>\n                    </a>\n                    <!--If it have a submenu-->\n        \n                    <a data-toggle=\"collapse\" href=\"#{{menuItems[0].collapse}}\" *ngIf=\"menuItems[0].type === 'sub'\"\n                        (click)=\"updatePS()\" class=\"nav-link\">\n        \n                        <i class=\"material-icons\">{{menuItems[0].icontype}}</i>\n                        <p id=\"titre\">{{menuItems[0].title}}<b class=\"caret\"></b></p>\n                    </a>\n        \n                    <!--Display the submenu items-->\n                    <div id=\"{{menuItems[0].collapse}}\" class=\"collapse\" *ngIf=\"menuItems[0].type === 'sub'\">\n                        <ul class=\"nav\">\n                            <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuItems[0].children\" class=\"nav-item\">\n                                <a [routerLink]=\"[menuItems[0].path, childitem.path]\" class=\"nav-link\">\n        \n                                    <span class=\"sidebar-mini\">{{childitem.ab}}</span>\n                                    <span class=\"sidebar-normal\">{{childitem.title}}</span>\n        \n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </li>\n              </ul>\n                 <!--gestion employe-->\n              <ul class=\"nav\" *ngIf=\"isSecretaire() ||  isOperateur() || isGerant() ||  isGerantLocal()\">\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                    \n                    <a [routerLink]=\"[menuItems[1].path]\" *ngIf=\"menuItems[1].type === 'link'\" class=\"nav-link\">\n                        <i class=\"material-icons\">{{menuItems[1].icontype}}</i>\n                        <p >{{menuItems[1].title}}</p>\n                    </a>\n        \n                    <a data-toggle=\"collapse\" href=\"#{{menuItems[1].collapse}}\" *ngIf=\"menuItems[1].type === 'sub'\"\n                        (click)=\"updatePS()\" class=\"nav-link\">\n        \n                        <i class=\"material-icons\">{{menuItems[1].icontype}}</i>\n                        <p id=\"titre\">{{menuItems[1].title}}<b class=\"caret\"></b></p>\n                    </a>\n                    <div id=\"{{menuItems[1].collapse}}\" class=\"collapse\" *ngIf=\"menuItems[1].type === 'sub'\">\n                      <ul class=\"nav\" *ngIf=\"isSecretaire() || isGerant() || isOperateur() ||  isGerantLocal()\">\n                        <li routerLinkActive=\"active\" class=\"nav-item\">\n                            <a [routerLink]=\"[menuItems[1].path,menuItems[1].children[0].path]\" class=\"nav-link\">\n    \n    \n                                <span class=\"sidebar-mini\" >{{menuItems[1].children[0].ab}}</span>\n                                <span class=\"sidebar-normal\" >{{menuItems[1].children[0].title}}</span>\n                                \n                            </a>\n                        </li>\n                        </ul>\n                        <ul class=\"nav\" *ngIf=\" isGerant()\">\n                        <li routerLinkActive=\"active\" class=\"nav-item\">\n                          <a [routerLink]=\"[menuItems[1].path,menuItems[1].children[1].path]\" class=\"nav-link\">\n  \n  \n                              <span class=\"sidebar-mini\">{{menuItems[1].children[1].ab}}</span>\n                              <span class=\"sidebar-normal\">{{menuItems[1].children[1].title}}</span>\n                              \n                          </a>\n                      </li>\n                    </ul>\n  \n                    <ul class=\"nav\" *ngIf=\"isSecretaire() || isGerant() || isOperateur() ||  isGerantLocal()\">\n                      <li routerLinkActive=\"active\" class=\"nav-item\">\n                        <a [routerLink]=\"[menuItems[1].path,menuItems[1].children[2].path]\" class=\"nav-link\">\n  \n  \n                            <span class=\"sidebar-mini\">{{menuItems[1].children[2].ab}}</span>\n                            <span class=\"sidebar-normal\">{{menuItems[1].children[2].title}}</span>\n                            \n                        </a>\n\n                    </li>\n<!--                        <li routerLinkActive=\"active\" class=\"nav-item\">-->\n<!--                            <a [routerLink]=\"[menuItems[1].path,menuItems[1].children[0].path]\" class=\"nav-link\">-->\n\n\n<!--                                <span class=\"sidebar-mini\">{{menuItems[1].children[0].ab}}</span>-->\n<!--                                <span class=\"sidebar-normal\">{{menuItems[1].children[0].title}}</span>-->\n\n<!--                            </a>-->\n\n<!--                        </li>-->\n                  </ul>\n\n                    </div>\n                    </li>\n                    </ul>\n                      <!--gestion bon-->\n              <ul class=\"nav\" *ngIf=\"isSecretaire() || isAgent() || isGerant() || isGerantLocal()\">\n                <li routerLinkActive=\"active\" class=\"nav-item\">\n                    \n                    <a [routerLink]=\"[menuItems[2].path]\" *ngIf=\"menuItems[2].type === 'link'\" class=\"nav-link\">\n                        <i class=\"material-icons\">{{menuItems[2].icontype}}</i>\n                        <p>{{menuItems[2].title}}</p>\n                    </a>\n                    \n        \n                    <a data-toggle=\"collapse\" href=\"#{{menuItems[2].collapse}}\" *ngIf=\"menuItems[2].type === 'sub'\"\n                        (click)=\"updatePS()\" class=\"nav-link\">\n        \n                        <i class=\"material-icons\">{{menuItems[2].icontype}}</i>\n                        <p id=\"titre\">{{menuItems[2].title}}<b class=\"caret\"></b></p>\n                    </a>\n                    <div id=\"{{menuItems[2].collapse}}\" class=\"collapse\" *ngIf=\"menuItems[2].type === 'sub'\">\n                      <ul class=\"nav\" *ngIf=\"isSecretaire() || isGerant() || isAgent() || isGerantLocal()\">\n                        <li routerLinkActive=\"active\" class=\"nav-item\">\n                            <a [routerLink]=\"[menuItems[2].path,menuItems[2].children[0].path]\" class=\"nav-link\">\n    \n    \n                                <span class=\"sidebar-mini\">{{menuItems[2].children[0].ab}}</span>\n                                <span class=\"sidebar-normal\">{{menuItems[2].children[0].title}}</span>\n                                \n                            </a>\n                        </li>\n                        </ul>\n                        <ul class=\"nav\" *ngIf=\"isSecretaire() || isGerant() || isAgent() || isGerantLocal()\">\n                        <li routerLinkActive=\"active\" class=\"nav-item\">\n                          <a [routerLink]=\"[menuItems[2].path,menuItems[2].children[1].path]\" class=\"nav-link\">\n  \n  \n                              <span class=\"sidebar-mini\">{{menuItems[2].children[1].ab}}</span>\n                              <span class=\"sidebar-normal\">{{menuItems[2].children[1].title}}</span>\n                              \n                          </a>\n                      </li>\n                    </ul>\n  \n                    <ul class=\"nav\" *ngIf=\"isSecretaire() || isGerant() || isAgent() || isGerantLocal()\">\n                      <li routerLinkActive=\"active\" class=\"nav-item\">\n                        <a [routerLink]=\"[menuItems[2].path,menuItems[2].children[2].path]\" class=\"nav-link\">\n  \n  \n                            <span class=\"sidebar-mini\">{{menuItems[2].children[2].ab}}</span>\n                            <span class=\"sidebar-normal\">{{menuItems[2].children[2].title}}</span>\n                            \n                        </a>\n                    </li>\n                  </ul>\n                  <ul class=\"nav\" *ngIf=\"isSecretaire() || isGerant() || isAgent()|| isGerantLocal()\">\n                    <li routerLinkActive=\"active\" class=\"nav-item\">\n                      <a [routerLink]=\"[menuItems[2].path,menuItems[2].children[3].path]\" class=\"nav-link\">\n  \n  \n                          <span class=\"sidebar-mini\">{{menuItems[2].children[3].ab}}</span>\n                          <span class=\"sidebar-normal\">{{menuItems[2].children[3].title}}</span>\n                          \n                      </a>\n                  </li>\n                </ul>\n                    </div>\n                    </li>\n                    </ul>\n                      <!--gestion facture-->\n                    <ul class=\"nav\" *ngIf=\"isComptable() || isGerant() || isOperateur() || isGerantLocal()\" >\n                      <li routerLinkActive=\"active\" class=\"nav-item\">\n                          \n                          <a [routerLink]=\"[menuItems[3].path]\" *ngIf=\"menuItems[3].type === 'link'\" class=\"nav-link\">\n                              <i class=\"material-icons\">{{menuItems[3].icontype}}</i>\n                              <p>{{menuItems[3].title}}</p>\n                          </a>\n                          \n              \n                          <a data-toggle=\"collapse\" href=\"#{{menuItems[3].collapse}}\" *ngIf=\"menuItems[3].type === 'sub'\"\n                              (click)=\"updatePS()\" class=\"nav-link\">\n              \n                              <i class=\"material-icons\">{{menuItems[3].icontype}}</i>\n                              <p id=\"titre\">{{menuItems[3].title}}<b class=\"caret\"></b></p>\n                          </a>\n                          \n                          <div id=\"{{menuItems[3].collapse}}\" class=\"collapse\" *ngIf=\"menuItems[3].type === 'sub'\">\n                            <ul class=\"nav\" *ngIf=\"isSecretaire() || isOperateur() || isGerant() || isGerantLocal()\">\n                              <li routerLinkActive=\"active\" class=\"nav-item\">\n                                  <a [routerLink]=\"[menuItems[3].path,menuItems[3].children[0].path]\" class=\"nav-link\">\n          \n          \n                                      <span class=\"sidebar-mini\">{{menuItems[3].children[0].ab}}</span>\n                                      <span class=\"sidebar-normal\">{{menuItems[3].children[0].title}}</span>\n                                      \n                                  </a>\n                              </li>\n                              </ul>\n                              \n                              <ul class=\"nav\" *ngIf=\" isSecretaire() || isOperateur() || isGerant() || isGerantLocal()\">\n                              <li routerLinkActive=\"active\" class=\"nav-item\">\n                                <a [routerLink]=\"[menuItems[3].path,menuItems[3].children[1].path]\" class=\"nav-link\">\n        \n        \n                                    <span class=\"sidebar-mini\">{{menuItems[3].children[1].ab}}</span>\n                                    <span class=\"sidebar-normal\">{{menuItems[3].children[1].title}}</span>\n                                    \n                                </a>\n                            </li>\n                          </ul>\n\n        \n                          <ul class=\"nav\" *ngIf=\"isComptable() || isGerant() || isSecretaire() || isOperateur() || isGerantLocal() \">\n                            <li routerLinkActive=\"active\" class=\"nav-item\">\n                              <a [routerLink]=\"[menuItems[3].path,menuItems[3].children[2].path]\" class=\"nav-link\">\n        \n        \n                                  <span class=\"sidebar-mini\">{{menuItems[3].children[2].ab}}</span>\n                                  <span class=\"sidebar-normal\">{{menuItems[3].children[2].title}}</span>\n                                  \n                              </a>\n                          </li>\n                        </ul>\n                        \n                          </div>\n                          </li>\n                          </ul>\n                              <!--gestion prestataire-->\n                          <!-- secretaire enlever -->\n                          <ul class=\"nav\" *ngIf=\"isSecretaire() || isOperateur() || isGerant() || isGerantLocal()\" >\n                            <li routerLinkActive=\"active\" class=\"nav-item\">\n                                \n                                <a [routerLink]=\"[menuItems[4].path]\" *ngIf=\"menuItems[4].type === 'link'\" class=\"nav-link\">\n                                    <i class=\"material-icons\">{{menuItems[4].icontype}}</i>\n                                    <p>{{menuItems[4].title}}</p>\n                                </a>\n                                \n                    \n                                <a data-toggle=\"collapse\" href=\"#{{menuItems[4].collapse}}\" *ngIf=\"menuItems[4].type === 'sub'\"\n                                    (click)=\"updatePS()\" class=\"nav-link\">\n                    \n                                    <i class=\"material-icons\">{{menuItems[4].icontype}}</i>\n                                    <p id=\"titre\">{{menuItems[4].title}}<b class=\"caret\"></b></p>\n                                </a>\n                                <div id=\"{{menuItems[4].collapse}}\" class=\"collapse\" *ngIf=\"menuItems[4].type === 'sub'\">\n                                  <ul class=\"nav\" *ngIf=\" isGerant()  \">\n                                    <li routerLinkActive=\"active\" class=\"nav-item\">\n                                        <a [routerLink]=\"[menuItems[4].path,menuItems[4].children[0].path]\" class=\"nav-link\">\n                \n                \n                                            <span class=\"sidebar-mini\">{{menuItems[4].children[0].ab}}</span>\n                                            <span class=\"sidebar-normal\">{{menuItems[4].children[0].title}}</span>\n                                            \n                                        </a>\n                                    </li>\n                                    </ul>\n                                    <ul class=\"nav\" *ngIf=\" isGerant() || isOperateur() || isSecretaire() || isGerantLocal()\">\n                                    <li routerLinkActive=\"active\" class=\"nav-item\">\n                                      <a [routerLink]=\"[menuItems[4].path,menuItems[4].children[1].path]\" class=\"nav-link\">\n              \n              \n                                          <span class=\"sidebar-mini\">{{menuItems[4].children[1].ab}}</span>\n                                          <span class=\"sidebar-normal\">{{menuItems[4].children[1].title}}</span>\n                                          \n                                      </a>\n                                  </li>\n                                </ul>\n              \n                                \n                              \n                                </div>\n                                </li>\n                                </ul>\n                                <!--gestion prestation-->\n  \n                                <!-- secretaire enlever -->\n                          <ul class=\"nav\" *ngIf=\"isSecretaire() || isOperateur() || isGerant() || isGerantLocal()\" >\n                            <li routerLinkActive=\"active\" class=\"nav-item\">\n                                \n                                <a [routerLink]=\"[menuItems[5].path]\" *ngIf=\"menuItems[5].type === 'link'\" class=\"nav-link\">\n                                    <i class=\"material-icons\">{{menuItems[5].icontype}}</i>\n                                    <p>{{menuItems[5].title}}</p>\n                                </a>\n                                \n                    \n                                <a data-toggle=\"collapse\" href=\"#{{menuItems[5].collapse}}\" *ngIf=\"menuItems[5].type === 'sub'\"\n                                    (click)=\"updatePS()\" class=\"nav-link\">\n                    \n                                    <i class=\"material-icons\">{{menuItems[5].icontype}}</i>\n                                    <p id=\"titre\">{{menuItems[5].title}}<b class=\"caret\"></b></p>\n                                </a>\n                                <div id=\"{{menuItems[5].collapse}}\" class=\"collapse\" *ngIf=\"menuItems[5].type === 'sub'\">\n                                  <ul class=\"nav\" *ngIf=\" isGerant() || isSecretaire() || isOperateur() || isGerantLocal() \">\n                                    <li routerLinkActive=\"active\" class=\"nav-item\">\n                                        <a [routerLink]=\"[menuItems[5].path,menuItems[5].children[0].path]\" class=\"nav-link\">\n                \n                \n                                            <span class=\"sidebar-mini\">{{menuItems[5].children[0].ab}}</span>\n                                            <span class=\"sidebar-normal\">{{menuItems[5].children[0].title}}</span>\n                                            \n                                        </a>\n                                    </li>\n                                    </ul>\n                                    <!-- <ul class=\"nav\" *ngIf=\"isGerant() || isOperateur() \">\n                                    <li routerLinkActive=\"active\" class=\"nav-item\">\n                                      <a [routerLink]=\"[menuItems[5].path,menuItems[5].children[1].path]\" class=\"nav-link\">\n              \n              \n                                          <span class=\"sidebar-mini\">{{menuItems[5].children[1].ab}}</span>\n                                          <span class=\"sidebar-normal\">{{menuItems[5].children[1].title}}</span>\n                                          \n                                      </a>\n                                  </li>\n                                </ul>  -->\n              \n                                \n                              \n                                </div>\n                                </li>\n                                </ul>\n                                <!--gestion Bareme-->\n                                \n                          <ul class=\"nav\" *ngIf=\"isGerant()\" >\n                            <li routerLinkActive=\"active\" class=\"nav-item\">\n                                \n                                <a [routerLink]=\"[menuItems[6].path]\" *ngIf=\"menuItems[6].type === 'link'\" class=\"nav-link\">\n                                    <i class=\"material-icons\">{{menuItems[6].icontype}}</i>\n                                    <p>{{menuItems[6].title}}</p>\n                                </a>\n                                \n                    \n                                <a data-toggle=\"collapse\" href=\"#{{menuItems[6].collapse}}\" *ngIf=\"menuItems[6].type === 'sub'\"\n                                    (click)=\"updatePS()\" class=\"nav-link\">\n                    \n                                    <i class=\"material-icons\">{{menuItems[6].icontype}}</i>\n                                    <p id=\"titre\">{{menuItems[6].title}}<b class=\"caret\"></b></p>\n                                </a>\n                                <div id=\"{{menuItems[6].collapse}}\" class=\"collapse\" *ngIf=\"menuItems[6].type === 'sub'\">\n                                  <ul class=\"nav\" *ngIf=\" isGerant()\">\n                                    <li routerLinkActive=\"active\" class=\"nav-item\">\n                                        <a [routerLink]=\"[menuItems[6].path,menuItems[6].children[0].path]\" class=\"nav-link\">\n                \n                \n                                            <span class=\"sidebar-mini\">{{menuItems[6].children[0].ab}}</span>\n                                            <span class=\"sidebar-normal\">{{menuItems[6].children[0].title}}</span>\n                                            \n                                        </a>\n                                    </li>\n                                    </ul>\n                                   \n              \n                                \n                              \n                                </div>\n                                </li>\n                                </ul>\n                                <!--gestion remboursement-->\n                                <ul class=\"nav\" *ngIf=\"isSecretaire() ||isOperateur() || isGerant() || isComptable() || isGerantLocal()\"  >\n                                  <li routerLinkActive=\"active\" class=\"nav-item\">\n                                      \n                                      <a [routerLink]=\"[menuItems[7].path]\" *ngIf=\"menuItems[7].type === 'link'\" class=\"nav-link\">\n                                          <i class=\"material-icons\">{{menuItems[7].icontype}}</i>\n                                          <p>{{menuItems[7].title}}</p>\n                                      </a>\n                                      \n                          \n                                      <a data-toggle=\"collapse\" href=\"#{{menuItems[7].collapse}}\" *ngIf=\"menuItems[7].type === 'sub'\"\n                                          (click)=\"updatePS()\" class=\"nav-link\">\n                          \n                                          <i class=\"material-icons\">{{menuItems[7].icontype}}</i>\n                                          <p id=\"titre\">{{menuItems[7].title}}<b class=\"caret\"></b></p>\n                                      </a>\n                                      <div id=\"{{menuItems[7].collapse}}\" class=\"collapse\" *ngIf=\"menuItems[7].type === 'sub'\">\n                                        <ul class=\"nav\" *ngIf=\"isSecretaire() || isOperateur() || isGerant() || isComptable() || isGerantLocal()\">\n                                          <li routerLinkActive=\"active\" class=\"nav-item\">\n                                              <a [routerLink]=\"[menuItems[7].path,menuItems[7].children[0].path]\" class=\"nav-link\">\n                      \n                      \n                                                  <span class=\"sidebar-mini\">{{menuItems[7].children[0].ab}}</span>\n                                                  <span class=\"sidebar-normal\">{{menuItems[7].children[0].title}}</span>\n                                                  \n                                              </a>\n                                          </li>\n                                          </ul>\n                                          <ul class=\"nav\" *ngIf=\"isGerant() || isComptable() \">\n                                            <li routerLinkActive=\"active\" class=\"nav-item\">\n                                                <a [routerLink]=\"[menuItems[7].path,menuItems[7].children[1].path]\" class=\"nav-link\">\n                        \n                        \n                                                    <span class=\"sidebar-mini\">{{menuItems[7].children[1].ab}}</span>\n                                                    <span class=\"sidebar-normal\">{{menuItems[7].children[1].title}}</span>\n                                                    \n                                                </a>\n                                            </li>\n                                            </ul>\n                                         \n                    \n                                      \n                                    \n                                      </div>\n                                      </li>\n                                      </ul>\n  \n                                 <!--remboursements-->      \n                                \n                          <ul class=\"nav\" *ngIf=\"  isOperateur() || isGerant() || isComptable() || isGerantLocal()\"  >\n                            <li routerLinkActive=\"active\" class=\"nav-item\">\n                                \n                                <a [routerLink]=\"[menuItems[8].path]\" *ngIf=\"menuItems[8].type === 'link'\" class=\"nav-link\">\n                                    <i class=\"material-icons\">{{menuItems[8].icontype}}</i>\n                                    <p>{{menuItems[8].title}}</p>\n                                </a>\n                                \n                    \n                                <a data-toggle=\"collapse\" href=\"#{{menuItems[8].collapse}}\" *ngIf=\"menuItems[8].type === 'sub'\"\n                                    (click)=\"updatePS()\" class=\"nav-link\">\n                    \n                                    <i class=\"material-icons\">{{menuItems[8].icontype}}</i>\n                                    <p id=\"titre\">{{menuItems[8].title}}<b class=\"caret\"></b></p>\n                                </a>\n                                <div id=\"{{menuItems[8].collapse}}\" class=\"collapse\" *ngIf=\"menuItems[8].type === 'sub'\">\n                                  <ul class=\"nav\" *ngIf=\" isSecretaire()||isOperateur() || isGerant() || isComptable() || isGerantLocal()\">\n                                    <li routerLinkActive=\"active\" class=\"nav-item\">\n                                        <a [routerLink]=\"[menuItems[8].path,menuItems[8].children[0].path]\" class=\"nav-link\">\n                \n                \n                                            <span class=\"sidebar-mini\">{{menuItems[8].children[0].ab}}</span>\n                                            <span class=\"sidebar-normal\">{{menuItems[8].children[0].title}}</span>\n                                            \n                                        </a>\n                                    </li>\n                                    </ul>\n                                    <ul class=\"nav\" *ngIf=\"isGerant() || isSecretaire() || isOperateur() || isGerantLocal() || isComptable()\">\n                                      <li routerLinkActive=\"active\" class=\"nav-item\">\n                                          <a [routerLink]=\"[menuItems[8].path,menuItems[8].children[1].path]\" class=\"nav-link\">\n                  \n                  \n                                              <span class=\"sidebar-mini\">{{menuItems[8].children[1].ab}}</span>\n                                              <span class=\"sidebar-normal\">{{menuItems[8].children[1].title}}</span>\n                                              \n                                          </a>\n                                      </li>\n                                      </ul>\n                                      <!-- <ul class=\"nav\" *ngIf=\"isGerant() || isOperateur()\">\n                                        <li routerLinkActive=\"active\" class=\"nav-item\">\n                                            <a [routerLink]=\"[menuItems[8].path,menuItems[8].children[2].path]\" class=\"nav-link\">\n                    \n                    \n                                                <span class=\"sidebar-mini\">{{menuItems[8].children[2].ab}}</span>\n                                                <span class=\"sidebar-normal\">{{menuItems[8].children[2].title}}</span>\n                                                \n                                            </a>\n                                        </li>\n                                        </ul> -->\n                                      </div>\n                                    </li>\n                                  </ul>\n                                  <!----Cotisation--------------->\n                                          \n                                                <ul class=\"nav\" *ngIf=\"  isOperateur() || isGerant() || isComptable() || isGerantLocal()\">\n                                                  <li routerLinkActive=\"active\" class=\"nav-item\">\n                                                      \n                                                      <a [routerLink]=\"[menuItems[9].path]\" *ngIf=\"menuItems[9].type === 'link'\" class=\"nav-link\">\n                                                          <i class=\"material-icons\">{{menuItems[9].icontype}}</i>\n                                                          <p>{{menuItems[9].title}}</p>\n                                                      </a>\n                                                      \n                                          \n                                                      <a data-toggle=\"collapse\" href=\"#{{menuItems[9].collapse}}\" *ngIf=\"menuItems[9].type === 'sub'\"\n                                                          (click)=\"updatePS()\" class=\"nav-link\">\n                                          \n                                                          <i class=\"material-icons\">{{menuItems[9].icontype}}</i>\n                                                          <p id=\"titre\">{{menuItems[9].title}}<b class=\"caret\"></b></p>\n                                                      </a>\n                                                      <div id=\"{{menuItems[9].collapse}}\" class=\"collapse\" *ngIf=\"menuItems[9].type === 'sub'\">\n                                                          <!--     Dans Cotisation : ajout cotisations -->\n\n                                                          <ul class=\"nav\" *ngIf=\"isSecretaire() || isOperateur() || isGerant() || isGerantLocal()\">\n                                                          <li routerLinkActive=\"active\" class=\"nav-item\">\n                                                              <a [routerLink]=\"[menuItems[9].path,menuItems[9].children[0].path]\" class=\"nav-link\">\n                                      \n                                      \n                                                                  <span class=\"sidebar-mini\">{{menuItems[9].children[0].ab}}</span>\n                                                                  <span class=\"sidebar-normal\">{{menuItems[9].children[0].title}}</span>\n                                                                  \n                                                              </a>\n                                                          </li>\n                                                          </ul>\n                                                          <!--     Dans Cotisation : liste des cotisations previsionnelles-->\n                                                          <ul class=\"nav\" *ngIf=\"isSecretaire() || isGerant() || isComptable() || isOperateur() || isGerantLocal() \">\n                                                            <li routerLinkActive=\"active\" class=\"nav-item\">\n                                                                <a [routerLink]=\"[menuItems[9].path,menuItems[9].children[1].path]\" class=\"nav-link\">\n                                        \n                                        \n                                                                    <span class=\"sidebar-mini\">{{menuItems[9].children[1].ab}}</span>\n                                                                    <span class=\"sidebar-normal\">{{menuItems[9].children[1].title}}</span>\n                                                                    \n                                                                </a>\n                                                            </li>\n                                                            </ul>\n\n                                                        </div>\n                                          \n                                                      </li>\n                                                    </ul>\n                                  <!---Fin Cotisation------------->\n                                        <!-- utilisateurs -->\n                                        <ul class=\"nav\" *ngIf=\"  isGerant()\" >\n                                          <li routerLinkActive=\"active\" class=\"nav-item\">\n                                              \n                                              <a [routerLink]=\"[menuItems[10].path]\" *ngIf=\"menuItems[10].type === 'link'\" class=\"nav-link\">\n                                                  <i class=\"material-icons\">{{menuItems[10].icontype}}</i>\n                                                  <p>{{menuItems[10].title}}</p>\n                                              </a>\n                                              \n                                  \n                                              <a data-toggle=\"collapse\" href=\"#{{menuItems[10].collapse}}\" *ngIf=\"menuItems[10].type === 'sub'\"\n                                                  (click)=\"updatePS()\" class=\"nav-link\">\n                                  \n                                                  <i class=\"material-icons\">{{menuItems[10].icontype}}</i>\n                                                  <p id=\"titre\">{{menuItems[10].title}}<b class=\"caret\"></b></p>\n                                              </a>\n                                              <div id=\"{{menuItems[10].collapse}}\" class=\"collapse\" *ngIf=\"menuItems[10].type === 'sub'\">\n                                                <ul class=\"nav\" *ngIf=\" isGerant()\">\n                                                  <li routerLinkActive=\"active\" class=\"nav-item\">\n                                                      <a [routerLink]=\"[menuItems[10].path,menuItems[10].children[0].path]\" class=\"nav-link\">\n                              \n                              \n                                                          <span class=\"sidebar-mini\">{{menuItems[10].children[0].ab}}</span>\n                                                          <span class=\"sidebar-normal\">{{menuItems[10].children[0].title}}</span>\n                                                          \n                                                      </a>\n                                                  </li>\n                                                  </ul>\n                                                </div>\n\n                                              </li>\n                                            </ul>\n                                                 \n                                                   \n                           <!--Rapports--->\n                           <ul class=\"nav\" *ngIf=\"isGerant()\" >\n                            <li routerLinkActive=\"active\" class=\"nav-item\">\n                                \n                                <a [routerLink]=\"[menuItems[11].path]\" *ngIf=\"menuItems[11].type === 'link'\" class=\"nav-link\">\n                                    <i class=\"material-icons\">{{menuItems[11].icontype}}</i>\n                                    <p>{{menuItems[11].title}}</p>\n                                </a>\n                                \n                    \n                                <a data-toggle=\"collapse\" href=\"#{{menuItems[11].collapse}}\" *ngIf=\"menuItems[11].type === 'sub'\"\n                                    (click)=\"updatePS()\" class=\"nav-link\">\n                    \n                                    <i class=\"material-icons\">{{menuItems[11].icontype}}</i>\n                                    <p id=\"titre\">{{menuItems[11].title}}<b class=\"caret\"></b></p>\n                                </a>\n                                <div id=\"{{menuItems[11].collapse}}\" class=\"collapse\" *ngIf=\"menuItems[11].type === 'sub'\">\n                                  <ul class=\"nav\" *ngIf=\"isGerant()\">\n                                    <li routerLinkActive=\"active\" class=\"nav-item\">\n                                        <a [routerLink]=\"[menuItems[11].path,menuItems[11].children[0].path]\" class=\"nav-link\">\n                \n                \n                                            <span class=\"sidebar-mini\">{{menuItems[11].children[0].ab}}</span>\n                                            <span class=\"sidebar-normal\">{{menuItems[11].children[0].title}}</span>\n                                            \n                                        </a>\n                                    </li>\n                                    </ul>\n                                    <ul class=\"nav\" *ngIf=\"isGerant()\">\n                                      <li routerLinkActive=\"active\" class=\"nav-item\">\n                                          <a [routerLink]=\"[menuItems[11].path,menuItems[11].children[1].path]\" class=\"nav-link\">\n                  \n                  \n                                              <span class=\"sidebar-mini\">{{menuItems[11].children[1].ab}}</span>\n                                              <span class=\"sidebar-normal\">{{menuItems[11].children[1].title}}</span>\n                                              \n                                          </a>\n                                      </li>\n                                      </ul>\n\n                                      <ul class=\"nav\" *ngIf=\"isGerant()\">\n                                        <li routerLinkActive=\"active\" class=\"nav-item\">\n                                            <a [routerLink]=\"[menuItems[11].path,menuItems[11].children[2].path]\" class=\"nav-link\">\n                    \n                    \n                                                <span class=\"sidebar-mini\">{{menuItems[11].children[2].ab}}</span>\n                                                <span class=\"sidebar-normal\">{{menuItems[11].children[2].title}}</span>\n                                                \n                                            </a>\n                                        </li>\n                                        </ul>\n                                        <ul class=\"nav\" *ngIf=\"isGerant()\">\n                                          <li routerLinkActive=\"active\" class=\"nav-item\">\n                                              <a [routerLink]=\"[menuItems[11].path,menuItems[11].children[3].path]\" class=\"nav-link\">\n                      \n                      \n                                                  <span class=\"sidebar-mini\">{{menuItems[11].children[3].ab}}</span>\n                                                  <span class=\"sidebar-normal\">{{menuItems[11].children[3].title}}</span>\n                                                  \n                                              </a>\n                                          </li>\n                                          </ul>\n                                          <ul class=\"nav\" *ngIf=\"isGerant()\">\n                                            <li routerLinkActive=\"active\" class=\"nav-item\">\n                                                <a [routerLink]=\"[menuItems[11].path,menuItems[11].children[4].path]\" class=\"nav-link\">\n                                                    <span class=\"sidebar-mini\">{{menuItems[11].children[4].ab}}</span>\n                                                    <span class=\"sidebar-normal\">{{menuItems[11].children[4].title}}</span>                          \n                                                </a>\n                                            </li>\n                                            </ul>\n                                            <!-- <ul class=\"nav\" *ngIf=\"isGerant()\">\n                                              <li routerLinkActive=\"active\" class=\"nav-item\">\n                                                  <a [routerLink]=\"[menuItems[11].path,menuItems[11].children[5].path]\" class=\"nav-link\">\n                                                      <span class=\"sidebar-mini\">{{menuItems[11].children[5].ab}}</span>\n                                                      <span class=\"sidebar-normal\">{{menuItems[11].children[5].title}}</span>                          \n                                                  </a>\n                                              </li>\n                                              </ul> -->\n                                  </div>\n\n                                </li>\n                              </ul>\n                                \n            \n                               \n                                <!--Fin Rapports--->\n                           <!-- <ul class=\"nav\" *ngIf=\"isGerant()\">\n                            <li routerLinkActive=\"active\" class=\"nav-item\">\n                                \n                                <a [routerLink]=\"[menuItems[10].path]\" *ngIf=\"menuItems[10].type === 'link'\" class=\"nav-link\">\n                                    <i class=\"material-icons\">{{menuItems[10].icontype}}</i>\n                                    <p>{{menuItems[10].title}}</p>\n                                </a>\n                                \n                    \n                                <a data-toggle=\"collapse\" href=\"#{{menuItems[10].collapse}}\" *ngIf=\"menuItems[10].type === 'sub'\"\n                                    (click)=\"updatePS()\" class=\"nav-link\">\n                    \n                                    <i class=\"material-icons\">{{menuItems[10].icontype}}</i>\n                                    <p id=\"titre\">{{menuItems[10].title}}<b class=\"caret\"></b></p>\n                                </a>\n                                <div id=\"{{menuItems[10].collapse}}\" class=\"collapse\" *ngIf=\"menuItems[10].type === 'sub'\">\n                                  <ul class=\"nav\" *ngIf=\"isGerant()\">\n                                    <li routerLinkActive=\"active\" class=\"nav-item\">\n                                        <a [routerLink]=\"[menuItems[10].path,menuItems[10].children[0].path]\" class=\"nav-link\">\n                \n                \n                                            <span class=\"sidebar-mini\">{{menuItems[10].children[0].ab}}</span>\n                                            <span class=\"sidebar-normal\">{{menuItems[10].children[0].title}}</span>\n                                            \n                                        </a>\n                                    </li>\n                                    </ul>\n                                    <ul class=\"nav\" *ngIf=\"isGerant()\">\n                                      <li routerLinkActive=\"active\" class=\"nav-item\">\n                                          <a [routerLink]=\"[menuItems[10].path,menuItems[10].children[1].path]\" class=\"nav-link\">\n                  \n                  \n                                              <span class=\"sidebar-mini\">{{menuItems[10].children[1].ab}}</span>\n                                              <span class=\"sidebar-normal\">{{menuItems[10].children[1].title}}</span>\n                                              \n                                          </a>\n                                      </li>\n                                      </ul>\n                                      \n                               \n                                </div>\n                                </li>\n                                </ul> -->\n  \n          <!-- </div> -->\n  ");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map