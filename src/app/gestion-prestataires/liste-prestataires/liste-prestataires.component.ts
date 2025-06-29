import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {element} from 'protractor';
import {Subject} from 'rxjs';

import {TableData} from 'src/app/md/md-table/md-table.component';
import {Prestataire} from 'src/app/Models/Prestataire';
import {TypePrestataire} from 'src/app/Models/TypePrestataire';
import {PrestataireService} from 'src/app/Services/prestataire.service';
import {KeycloakService} from 'keycloak-angular';

declare const $: any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-liste-prestataires',
    templateUrl: './liste-prestataires.component.html',
    styleUrls: ['./liste-prestataires.component.css']
})

export class ListePrestatairesComponent implements OnInit {
    selectFormControl = new FormControl('', Validators.required);

    /////////////////////
    private _refreshpage = new Subject<void>();
    isValidFormSubmitted = null;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    userForm = this.formBuilder.group({
        primaryEmail: ['', Validators.email],
        secondaryEmail: '',
        officialEmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    });
    ///////////////////////
    id: number;
    public tableData: TableData;
    currentprestataire: Prestataire = new Prestataire();
    prestataire: Prestataire = new Prestataire();
    public dataTable: DataTable;
    addPrestataire: TypePrestataire;
    listPrestataire: Prestataire;
    listTypePrestataire: TypePrestataire[];
    code_presta: number
    cur: TypePrestataire[];
    selectLettre: any;
    selctLettreAg: any;
    AgrementURL: string | ArrayBuffer;
    selectLettreAg: any;
    el: boolean = false;
    private activerButton: boolean = false;
    prestataireForm!: FormGroup;
    hasAccess: boolean;
    constructor(public pres_service: PrestataireService, private formBuilder: FormBuilder
        , private router: Router, private toastr: ToastrService, private route: ActivatedRoute,
                private ref: ChangeDetectorRef,public keycloak: KeycloakService
    ) {
        this.addPrestataire = new TypePrestataire();
        this.listPrestataire = new Prestataire();
    }

    ngOnInit(): void {
        // this.getPres();
        this.getTable();
        this.initForm();
        //  this.dataTable = {
        //   headerRow: [ 'Nom Prestataire', 'Adresse', , 'Email', 'Type Prestataire', 'Telephone','Nature','Actions'],
        //   footerRow: [ 'Name', 'Position', 'Office', 'Age', 'Start Date', 'Actions' ],
        //   dataRows: []
        // }
        this.prestataireForm = this.formBuilder.group({
            nom_pestataire: this.formBuilder.control(null, [Validators.required]),
            adresse_prest: this.formBuilder.control(null, [Validators.required, Validators.maxLength(5)]),
            email: this.formBuilder.control([null]),
            raison_sociale: this.formBuilder.control(null),
            telephone: this.formBuilder.control(null),
            typePrest: this.formBuilder.control(null, [Validators.required]),
            codePrest: this.formBuilder.control(null, [Validators.required])

        })


    }

    //////////////////
    getTable() {
        this.id = this.route.snapshot.params['id'];
        this.pres_service.getPrestataire().subscribe(
            result => {
                $(function () {
                    (<any>$('#datatable')).DataTable({
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

                })
                this.listPrestataire = result;
                //this.listTypePrestataire=result;
                // console.log(this.listPrestataire.ipm_type_prestataire?.nom_type_prestaire)
                console.log(this.listPrestataire)
            });


        this.pres_service.getAllTypePrestataires().subscribe(
            result => {
                this.listTypePrestataire = result;
                console.log(this.listTypePrestataire);


            });
    }

    initForm() {
        this.pres_service.dataForm = this.formBuilder.group({
            code_prestataire: null,
            nom_prestataire: ['', [Validators.required]],
            adresse_prestataire: ['', [Validators.required, Validators.maxLength(5)]],
            email: [null],
            raison_social: [null],
            telephone: [null],
            fax: ['', [Validators.required, Validators.maxLength(8)]],
            code_categorie_pretataire: ['', [Validators.required]],
            nature: ['', [Validators.required]],
        })
    }

    get refreshpage() {
        return this._refreshpage;
    }

    //Recuperer le prestataire correspondant
    getPrestaById(prestataire) {

        this.pres_service.getPrestataireById(prestataire.code_prestataire).subscribe(
            result => {
                this.currentprestataire = result;
                console.log(this.currentprestataire.ipm_type_prestataire?.nom_type_prestaire);
                this.pres_service.getAllTypePrestataires().subscribe(
                    data => {
                        // prestataire.ipm_type_prestataire?.nom_type_prestaire
                        this.cur = data;
                        console.log(this.cur);

                    }
                )


            });
    }

    getTypePrest() {
        this.currentprestataire.ipm_type_prestataire.nom_type_prestaire = null

    }

    update() {
        this.addPrestataire.id_type_prestataire = this.code_presta;
        this.currentprestataire.ipm_type_prestataire = JSON.parse(JSON.stringify(this.addPrestataire));
        // this.currentprestataire.code_prestataire=this.listPrestataire.code_prestataire
        this.pres_service.modifier(this.currentprestataire).subscribe(
            () => {
                this.toastr.success('Modification Faite avec Success');
                this.ngOnInit();
                this.router.navigate(['/gestion-prestataires/Listeprestataires'])
            });
        //this.showNotification1('top','center')
        // this._refreshpage.next();
        //this.ref.detectChanges();
        //  console.log( this.ref.detectChanges());

    }

//////////////////////////////////////Notification Update
    showNotification1(from: any, align: any) {
        const type = ['', 'success', 'warning', 'danger', 'info', 'rose', 'primary'];

        // const color = Math.floor((Math.random() * 6) + 1);

        $.notify({
            icon: 'notifications',
        }, {
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
    }

    ajouterPres() {
        this.addPrestataire.id_type_prestataire = this.code_presta;
        this.prestataire.ipm_type_prestataire = JSON.parse(JSON.stringify(this.addPrestataire));
        this.prestataire.lettreAgrement = this.selectLettreAg?.name;
        if (this.prestataireForm.valid) {

            this.pres_service.AjouterPrestataire(this.prestataire).subscribe(() => {
                //this.ngOnInit()
                console.log(this.prestataire)
                //this.router.navigate(['/Listeprestataires'])
               // this.toastr.success('Ajouter Faite avec Success');
                console.log(this.selectLettreAg)
                if(this.selectLettreAg!=null) {
                    this.pres_service.uploadFileCertif(this.selectLettreAg).subscribe(
                        () => {
                            console.log(this.selctLettreAg);
                            this.selectLettreAg==null
                            this.ngOnInit()

                        },error => {
                            this.ngOnInit()
                        })
                }
                this.ngOnInit();
            })

            this.toastr.success('Ajouter Faite avec Success');
        } else
            this.toastr.error('Error : Ajout incorrect');
    }

//Choisir la lettre
    selctLettreAgre(event: any) {
        this.selectLettreAg = event.target.files[0];

        let readerr = new FileReader();
        readerr.readAsDataURL(event.target.files[0]);
        readerr.onload = (event) => {
            this.AgrementURL = readerr.result;
        };

    }
    isSecretaire() {
        this.hasAccess = false
        if (this.keycloak.getUserRoles().includes("secretaire")) {
            this.hasAccess = true

        }

        return this.hasAccess


    }
    isOperateur() {
        this.hasAccess = false
        if (this.keycloak.getUserRoles().includes("operateur")) {
            this.hasAccess = true

        }

        return this.hasAccess


    }
}
