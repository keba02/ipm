(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "H/d9":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n  #menu{font-size: 16px; letter-spacing: 1.3px; font-weight: 500;}\n</style>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n<!--       \n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-chart\">\n            <div class=\"card-header card-header-rose\" data-header-animation=\"true\">\n              <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-info btn-link\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">refresh</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">Website Views</h4>\n              <p class=\"card-category\">Last Campaign Performance</p>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-chart\">\n            <div class=\"card-header card-header-success\" data-header-animation=\"true\">\n              <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-info btn-link\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">refresh</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">Daily Sales</h4>\n              <p class=\"card-category\">\n                <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.</p>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-chart\">\n            <div class=\"card-header card-header-info\" data-header-animation=\"true\">\n              <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-info btn-link\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">refresh</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">Completed Tasks</h4>\n              <p class=\"card-category\">Last Campaign Performance</p>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header card-header-warning card-header-icon\">\n              <div class=\"card-icon\">\n                <!-- <i class=\"material-icons\">weekend</i> -->\n                <i class=\"material-icons\">person</i>\n              </div>\n              <!-- <p class=\"card-category\">Bookings</p> \n             <h3 class=\"card-title\">184</h3> -->\n           \n              <p class=\"card-category\" style=\"font-size: 26px\">Total Participant</p>\n              <h3 class=\"card-title\" style=\"font-size: 26px;\">{{nbre}}</h3>\n          \n            \n              \n            </div>\n            \n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <!-- <i class=\"material-icons text-danger\">warning</i> -->\n                <button mat-raised-button data-toggle=\"modal\"\n                data-target=\"#statu\" style=\"margin:10px;\" type=\"button\"  style=\"background-color: rgb(47, 47, 201);\">\n                 <i class=\"fa fa-user-times\" aria-hidden=\"true\" style=\"color: rgb(251, 252, 253)\"></i>\n                   \n                </button>\n                <!-- <a href=\"#pablo\">Get More Space...</a> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header card-header-rose card-header-icon\">\n              <div class=\"card-icon\">\n                <!-- <i class=\"material-icons\">equalizer</i> -->\n                <i class=\"material-icons\">person</i>\n              </div>\n              <!-- <p class=\"card-category\">Website Visits</p>\n              <h3 class=\"card-title\">75.521</h3> -->\n              <p class=\"card-category\" style=\"font-size: 26px\">Conjoints</p>\n              <h3 class=\"card-title\" style=\"font-size: 26px;\">{{nbreconjoint}}</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <button mat-raised-button data-toggle=\"modal\"\n                data-target=\"#sexeConjoint\" style=\"margin:10px;\" type=\"button\"  style=\"background-color: rgb(47, 47, 201);\">\n                 <i class=\"fa fa-user-times\" aria-hidden=\"true\" style=\"color: rgb(251, 252, 253)\"></i>\n                   \n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header card-header-success card-header-icon\">\n              <div class=\"card-icon\">\n                <!-- <i class=\"material-icons\">store</i> -->\n                <i class=\"material-icons\">person</i>\n              </div>\n              <!-- <p class=\"card-category\">Revenue</p>\n              <h3 class=\"card-title\">$34,245</h3> -->\n              <p class=\"card-category\" style=\"font-size: 26px\">Enfants</p>\n              <h3 class=\"card-title\" style=\"font-size: 26px;\">{{nbrenfant}}</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <button mat-raised-button data-toggle=\"modal\"\n                data-target=\"#enfa\" style=\"margin:10px;\" type=\"button\"  style=\"background-color: rgb(47, 47, 201);\">\n                 <i class=\"fa fa-user-times\" aria-hidden=\"true\" style=\"color: rgb(251, 252, 253)\"></i>\n                   \n                </button>\n                <!-- <i class=\"material-icons\">date_range</i> Last 24 Hours -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header card-header-info card-header-icon\">\n              <div class=\"card-icon\">\n                <i class=\"fa fa-twitter\"></i>\n              </div>\n              <p class=\"card-category\" style=\"font-size: 23px\">Nombre de Bons Par Mois</p>\n              <h3 class=\"card-title\">{{nombreBons}}</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <div class=\"stats\">\n                  <button mat-raised-button data-toggle=\"modal\"\n                  data-target=\"#bons\" style=\"margin:10px;\" type=\"button\"  style=\"background-color: rgb(47, 47, 201);\">\n                   <i class=\"fa fa-user-times\" aria-hidden=\"true\" style=\"color: rgb(251, 252, 253)\"></i>\n                     \n                  </button>\n                  <!-- <i class=\"material-icons\">date_range</i> Last 24 Hours -->\n                </div>\n                <!-- <i class=\"material-icons\">update</i> Just Updated -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n</div>\n\n\n<!--modal dahsbord -->\n<div class=\"modal fade\" id=\"statu\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\naria-hidden=\"true\">\n<div class=\"modal-dialog modal-lg\" >\n    <div class=\"modal-content\" style=\"background-color: whitesmoke;color: black;\">\n        <div class=\"modal-header\" style=\"background-color: whitesmoke;\"\n        >\n            <h3 class=\"modal-title\" id=\"noticeModal\" style=\"font-weight:bold; padding-bottom: 10px;\">\n                Totals Hommes: <span style=\"color:blue\">{{nombreHommes}}</span><br>\n                Totals Femmes: <span style=\"color:blue\">{{nombreFemmes}}</span>\n            </h3>\n            <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                <i class=\"material-icons\">close</i>\n            </button>\n        </div>\n    </div>\n\n</div>\n</div>\n\n<!--fin modal-->\n\n<!--modal categories ages enfants -->\n<div class=\"modal fade\" id=\"enfa\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\naria-hidden=\"true\">\n<div class=\"modal-dialog modal-lg\" >\n    <div class=\"modal-content\" style=\"background-color: whitesmoke;color: black;\">\n        <div class=\"modal-header\" style=\"background-color: whitesmoke;\"\n        >\n            <h3 class=\"modal-title\" id=\"noticeModal\" style=\"font-weight:bold; padding-bottom: 10px;\">\n                Totals Enfants moins de 5 ans:  <span style=\"color:blue\">{{this.agenfan}}</span><br>\n                Totals Enfants plus de 5 ans:  <span style=\"color:blue\">{{this.agenfa}}</span>\n            </h3>\n            <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                <i class=\"material-icons\">close</i>\n            </button>\n        </div>\n        <div class=\"container-fluid\">\n          <form class=\"form-horizontal\">\n        <div class=\"modal-body\" style=\"width: 700px;\">\n      \n            \n        </div>\n        <div class=\"text-center\" style=\"margin-top: 40px; padding-bottom: 1cm;\">\n      \n        </div>\n      </form>\n      </div>\n    </div>\n\n</div>\n</div>\n\n<!--fin modal-->\n\n<!--modal sexe conjoint -->\n<div class=\"modal fade\" id=\"sexeConjoint\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\naria-hidden=\"true\">\n<div class=\"modal-dialog modal-lg\" >\n    <div class=\"modal-content\" style=\"background-color: whitesmoke;color: black;\">\n        <div class=\"modal-header\" style=\"background-color: whitesmoke;\"\n        >\n        <h3 class=\"modal-title\" id=\"noticeModal\" style=\"font-weight:bold; padding-bottom: 10px;\">\n          Totals Hommes: <span style=\"color:blue\">{{nombreHommeConj}}</span><br>\n          Totals Femmes: <span style=\"color:blue\">{{nombreFemmeConj}}</span>\n      </h3>\n            <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                <i class=\"material-icons\">close</i>\n            </button>\n        </div>\n        <div class=\"container-fluid\">\n          <form class=\"form-horizontal\">\n        <div class=\"modal-body\" style=\"width: 700px;\">\n      \n            \n        </div>\n        <div class=\"text-center\" style=\"margin-top: 40px; padding-bottom: 1cm;\">\n      \n        </div>\n      </form>\n      </div>\n    </div>\n\n</div>\n</div>\n\n<!--fin modal-->\n\n<!--modal bon par prestattions -->\n<div class=\"modal fade\" id=\"bons\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\naria-hidden=\"true\">\n<div class=\"modal-dialog modal-lg\" >\n    <div class=\"modal-content\" style=\"background-color: whitesmoke;color: black;\">\n        <div class=\"modal-header\" style=\"background-color: whitesmoke;\"\n        >\n            <h3 class=\"modal-title\" id=\"noticeModal\" style=\"font-weight:bold; padding-bottom: 10px;\">\n                <p style=\"color:blue\">Nombre de Bons </p>\n                 Pharmacie:  <span style=\"color:blue\">{{this.nombreph}}</span><br>\n                 Consultation:  <span style=\"color:blue\">{{this.nombrecons}}</span><br>\n                 Lettre De Garantie:  <span style=\"color:blue\">{{this.nombrelettre}}</span><br>\n               Lunetterie:  <span style=\"color:blue\">{{this.nombrebonlunette}}</span>\n            </h3>\n            <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                <i class=\"material-icons\">close</i>\n            </button>\n        </div>\n        <div class=\"container-fluid\">\n          <form class=\"form-horizontal\">\n        <div class=\"modal-body\" style=\"width: 700px;\">\n      \n            \n        </div>\n        <div class=\"text-center\" style=\"margin-top: 40px; padding-bottom: 1cm;\">\n      \n        </div>\n      </form>\n      </div>\n    </div>\n\n</div>\n</div>\n\n<!--fin modal-->");

/***/ }),

/***/ "I3w1":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");

var DashboardRoutes = [
    {
        path: '',
        children: [{
                path: 'dashboard',
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
            }]
    }
];


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "H/d9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartist */ "uki+");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/rapport-service.service */ "CsMi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(rapportrSer) {
        this.rapportrSer = rapportrSer;
        this.agenfa = 0;
        this.agenfan = 0;
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: chartist__WEBPACK_IMPORTED_MODULE_2__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    // constructor(private navbarTitleService: NavbarTitleService) { }
    DashboardComponent.prototype.ngOnInit = function () {
        //  Nbre d'"mpoloyé "
        this.countEmploye();
        this.countConoint();
        this.countEnfant();
        this.countBon();
        this.countM();
        this.countF();
        this.countEnfantAge();
        this.countBonPhar();
        this.countBonCons();
        this.countBonlettre();
        this.countBonLunette();
        this.countHommeFemmeConjoints();
        this.tableData = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['US', 'USA', '2.920	', '53.23%'],
                ['DE', 'Germany', '1.300', '20.43%'],
                ['AU', 'Australia', '760', '10.35%'],
                ['GB', 'United Kingdom	', '690', '7.87%'],
                ['RO', 'Romania', '600', '5.94%'],
                ['BR', 'Brasil', '550', '4.34%']
            ]
        };
        /* ----------==========     Daily Sales Chart initialization    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_2__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new chartist__WEBPACK_IMPORTED_MODULE_2__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_2__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            // look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new chartist__WEBPACK_IMPORTED_MODULE_2__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataWebsiteViewsChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsWebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var websiteViewsChart = new chartist__WEBPACK_IMPORTED_MODULE_2__["Bar"]('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);
        this.startAnimationForBarChart(websiteViewsChart);
        $('#worldMap').vectorMap({
            map: 'world_en',
            backgroundColor: 'transparent',
            borderColor: '#818181',
            borderOpacity: 0.25,
            borderWidth: 1,
            color: '#b3b3b3',
            enableZoom: true,
            hoverColor: '#eee',
            hoverOpacity: null,
            normalizeFunction: 'linear',
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedColor: '#c9dfaf',
            selectedRegions: null,
            showTooltip: true,
            onRegionClick: function (element, code, region) {
                var message = 'You clicked "'
                    + region
                    + '" which has the code: '
                    + code.toUpperCase();
                alert(message);
            }
        });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var breakCards = true;
        if (breakCards === true) {
            // We break the cards headers if there is too much stress on them :-)
            $('[data-header-animation="true"]').each(function () {
                var $fix_button = $(this);
                var $card = $(this).parent('.card');
                $card.find('.fix-broken-card').click(function () {
                    var $header = $(this).parent().parent().siblings('.card-header, .card-image');
                    $header.removeClass('hinge').addClass('fadeInDown');
                    $card.attr('data-count', 0);
                    setTimeout(function () {
                        $header.removeClass('fadeInDown animate');
                    }, 480);
                });
                $card.mouseenter(function () {
                    var $this = $(this);
                    var hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                    $this.attr('data-count', hover_count);
                    if (hover_count >= 20) {
                        $(this).children('.card-header, .card-image').addClass('hinge animated');
                    }
                });
            });
        }
    };
    DashboardComponent.prototype.countEmploye = function () {
        var _this = this;
        this.rapportrSer.CountEmploye().subscribe(function (data) {
            _this.nbre = data;
            // console.log(this.nbre);
        });
    };
    DashboardComponent.prototype.countConoint = function () {
        var _this = this;
        this.rapportrSer.CountConj().subscribe(function (data) {
            _this.nbreconjoint = data;
            // console.log(this.nbreconjoint);
        });
    };
    DashboardComponent.prototype.countEnfant = function () {
        var _this = this;
        this.rapportrSer.CountEnf().subscribe(function (data) {
            _this.nbrenfant = data;
            // console.log(this.nbrenfant);
        });
    };
    // Nombre de Bon par Mois
    DashboardComponent.prototype.countBon = function () {
        var _this = this;
        this.rapportrSer.CountBons().subscribe(function (data) {
            _this.nombreBons = data;
            // console.log(this.nombreBons);
        });
    };
    // Count nombre d'hommes
    DashboardComponent.prototype.countM = function () {
        var _this = this;
        this.rapportrSer.CountSexeMasculin().subscribe(function (data) {
            _this.nombreHommes = data;
            // console.log(this.nombreHommes);
        });
    };
    // Count nombre de femmes
    DashboardComponent.prototype.countF = function () {
        var _this = this;
        this.rapportrSer.CountSexeFeminin().subscribe(function (data) {
            _this.nombreFemmes = data;
            // console.log(this.nombreFemmes);
        });
    };
    DashboardComponent.prototype.countHommeFemmeConjoints = function () {
        var _this = this;
        this.rapportrSer.CountSexeFemininConj().subscribe(function (data) {
            _this.nombreFemmeConj = data;
            // console.log(this.nombreFemmeConj);
        });
        this.rapportrSer.CountSexeMasculinConj().subscribe(function (data) {
            _this.nombreHommeConj = data;
            // console.log(this.nombreHommeConj);
        });
    };
    // Count enfant mois et plus de 5 ans
    DashboardComponent.prototype.countEnfantAge = function () {
        var _this = this;
        this.rapportrSer.CountAgesEnfant().subscribe(function (data) {
            _this.nombreEnfantsAges = data;
            _this.nombreEnfantsAges.forEach(function (ele) {
                ele.date_nais_enfant;
                // convert date again to type Date
                var bdate = new Date(ele.date_nais_enfant);
                var timeDiff = Math.abs(Date.now() - bdate.getTime());
                _this.agenfant = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
                // console.log(this.agenfant)
                if (_this.agenfant > 5) {
                    // console.log("Age plus de 5 ans :" ,this.agenfant)
                    _this.agenfa++;
                    // console.log(this.agenfa);
                }
                else if (_this.agenfant <= 5) {
                    // console.log('Age moins de 5 ans :', this.agenfant);
                    _this.agenfan++;
                    // console.log(this.agenfan);
                }
            });
        });
    };
    // Count nombre de bon par prestation
    DashboardComponent.prototype.countBonPhar = function () {
        var _this = this;
        this.rapportrSer.CountBonPharmacie().subscribe(function (data) {
            _this.nombreph = data;
            // console.log(this.nombreph);
        });
    };
    DashboardComponent.prototype.countBonCons = function () {
        var _this = this;
        this.rapportrSer.CountBonConsultation().subscribe(function (data) {
            _this.nombrecons = data;
            // console.log(this.nombrecons);
        });
    };
    DashboardComponent.prototype.countBonlettre = function () {
        var _this = this;
        this.rapportrSer.CountBonLettreGarantie().subscribe(function (data) {
            _this.nombrelettre = data;
            // console.log(this.nombrelettre);
        });
    };
    DashboardComponent.prototype.countBonLunette = function () {
        var _this = this;
        this.rapportrSer.CountBonLunetterie().subscribe(function (data) {
            _this.nombrebonlunette = data;
            // console.log(this.nombrebonlunette);
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_3__["RapportServiceService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_Services_rapport_service_service__WEBPACK_IMPORTED_MODULE_3__["RapportServiceService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _md_md_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../md/md.module */ "OsiS");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.module */ "ZAI4");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.routing */ "I3w1");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _md_md_module__WEBPACK_IMPORTED_MODULE_4__["MdModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map