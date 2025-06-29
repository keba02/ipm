import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
import { LegendItem, ChartType } from '../md/md-chart/md-chart.component';

import * as Chartist from 'chartist';
import { RapportServiceService } from '../Services/rapport-service.service';
import { Employe } from '../Models/Employe';
import { Conjoint } from '../Models/Conjoint';
import { Enfant } from '../Models/Enfant';
import { IPM_Bon } from '../Models/IPM_Bon';
import { element } from 'protractor';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
nbre: any;
nbreconjoint: any;
nbrenfant: any;
nombreBons: any;
nombreHommes: any;
nombreFemmes: any;
nombreEnfantsAges: Enfant[];
  agenfant: number;
  agenfa = 0;
  agenfan = 0;
  nombreph: any;
  nombrecons: any;
  nombrelettre: any;
  nombrebonlunette: any;
  nombreFemmeConj: any[];
  nombreHommeConj: any[];
  constructor(private rapportrSer: RapportServiceService) { }
  public tableData: TableData;
  startAnimationForLineChart(chart: any) {
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;
      chart.on('draw', function(data: any) {

        if (data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === 'point') {
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
  }
  startAnimationForBarChart(chart: any) {
      let seq2: any, delays2: any, durations2: any;
      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data: any) {
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
  }
  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {

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

      const dataDailySalesChart = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      };

      const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);
      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

      const optionsCompletedTasksChart = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better
          // look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      };

     const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart,
      optionsCompletedTasksChart);

     this.startAnimationForLineChart(completedTasksChart);

      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      const dataWebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      const optionsWebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      const responsiveOptions: any = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      const websiteViewsChart = new Chartist.Bar('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);

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
         onRegionClick: function(element, code, region) {
             let message = 'You clicked "'
                 + region
                 + '" which has the code: '
                 + code.toUpperCase();

             alert(message);
         }
      });
   }
   ngAfterViewInit() {
       const breakCards = true;
       if (breakCards === true) {
           // We break the cards headers if there is too much stress on them :-)
           $('[data-header-animation="true"]').each(function() {
               const $fix_button = $(this);
               const $card = $(this).parent('.card');
               $card.find('.fix-broken-card').click(function() {
                   const $header = $(this).parent().parent().siblings('.card-header, .card-image');
                   $header.removeClass('hinge').addClass('fadeInDown');

                   $card.attr('data-count', 0);

                   setTimeout(function() {
                       $header.removeClass('fadeInDown animate');
                   }, 480);
               });

               $card.mouseenter(function() {
                   const $this = $(this);
                   const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                   $this.attr('data-count', hover_count);
                   if (hover_count >= 20) {
                       $(this).children('.card-header, .card-image').addClass('hinge animated');
                   }
               });
           });
       }
   }
   countEmploye() {
    this.rapportrSer.CountEmploye().subscribe(
     (data) => {
      this.nbre = data;
       // console.log(this.nbre);

     });

 }
  countConoint() {
    this.rapportrSer.CountConj().subscribe(
     (data) => {
      this.nbreconjoint = data;
       // console.log(this.nbreconjoint);

     });

 }
 countEnfant() {
  this.rapportrSer.CountEnf().subscribe(
   (data) => {
    this.nbrenfant = data;
     // console.log(this.nbrenfant);

   });

}
// Nombre de Bon par Mois
countBon() {
  this.rapportrSer.CountBons().subscribe(
   (data) => {
    this.nombreBons = data;
     // console.log(this.nombreBons);

   });

}


// Count nombre d'hommes
countM() {
  this.rapportrSer.CountSexeMasculin().subscribe(
   (data) => {
    this.nombreHommes = data;
     // console.log(this.nombreHommes);

   });

}

// Count nombre de femmes
countF() {
  this.rapportrSer.CountSexeFeminin().subscribe(
   (data) => {
    this.nombreFemmes = data;
     // console.log(this.nombreFemmes);

   });


}
countHommeFemmeConjoints() {
  this.rapportrSer.CountSexeFemininConj().subscribe(
    (data) => {
     this.nombreFemmeConj = data;
      // console.log(this.nombreFemmeConj);

    });
    this.rapportrSer.CountSexeMasculinConj().subscribe(
      (data) => {
       this.nombreHommeConj = data;
        // console.log(this.nombreHommeConj);

      });

}

// Count enfant mois et plus de 5 ans
countEnfantAge() {
  this.rapportrSer.CountAgesEnfant().subscribe(
   (data) => {
    this.nombreEnfantsAges = data;
    this.nombreEnfantsAges.forEach(ele => {
      ele.date_nais_enfant;
        // convert date again to type Date
        const bdate = new Date(ele.date_nais_enfant);
        const timeDiff = Math.abs(Date.now() - bdate.getTime());
        this.agenfant = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        // console.log(this.agenfant)

      if (this.agenfant > 5) {
        // console.log("Age plus de 5 ans :" ,this.agenfant)
        this.agenfa++;
        // console.log(this.agenfa);
      } else if (this.agenfant <= 5) {
        // console.log('Age moins de 5 ans :', this.agenfant);
        this.agenfan++;
        // console.log(this.agenfan);

      }
    });

   });

}

// Count nombre de bon par prestation
countBonPhar() {
  this.rapportrSer.CountBonPharmacie().subscribe(
   (data) => {
    this.nombreph = data;
     // console.log(this.nombreph);

   });

}
countBonCons() {
  this.rapportrSer.CountBonConsultation().subscribe(
   (data) => {
    this.nombrecons = data;
     // console.log(this.nombrecons);

   });

}
countBonlettre() {
  this.rapportrSer.CountBonLettreGarantie().subscribe(
   (data) => {
    this.nombrelettre = data;
     // console.log(this.nombrelettre);

   });

}
countBonLunette() {
  this.rapportrSer.CountBonLunetterie().subscribe(
   (data) => {
    this.nombrebonlunette = data;
     // console.log(this.nombrebonlunette);

   });

}

}
