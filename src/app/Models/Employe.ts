import { Categorie } from "./Categorie";
import { Entity } from "./Entity";
import { IPM_StatutEmploye } from "./IPM_StatutEmploye";
import { Service } from "./Service";

export class Employe{
    constructor(
       public  idemp?: number,
       public nom?:string,
       public prenom?:string,
       public sexe?:string,
       public adresse_domicile?:string,
       public date_nais?:Date,
       public lieu_nais?:string,
       public telephone?:string,
       public date_recrutement?: Date,
       public date_debut_suspension?:Date,
       public date_fin_suspension?:Date,
       public motifStatut?:string,
       public matricule?:string,
       public reference?:string,
       public numero_carnet?:number,
       public situation_familial?:string,
       public solde?:number,
       public cumul_charge?:number,
       public niveau_salarial?:string,
       public ipm_categorie?:Categorie,
       public ipmService?:Service,
       public ipmEntity?:Entity,
       public photo?:string,
      public statut?:boolean,
      public ipmStatutEmploye?:IPM_StatutEmploye,
      public justificatif?:string,
      public Echelonnage?:string
      //public certifier?:boolean,

    ){}
}