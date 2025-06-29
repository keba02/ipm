import { Conjoint } from "./Conjoint";
import { Employe } from "./Employe";
import { Enfant } from "./Enfant";
import { IPM_Bon } from "./IPM_Bon";
import { Prestataire } from "./Prestataire";
import { Prestation } from './Prestations';
import {IPM_Utilisateur} from './Utilisateur';

export class  IPM_Bon_Lunetterie extends IPM_Bon{  
    constructor(
      public idbon:number,
     public nombre_article:string,
     //public service:string,
     public  total:string,
    // public date_etablissement:Date,
      public quantite:number,
      // public designation:string,
      public prix_unitaire:string,
      public  montant:string,
      public ipm_employe:Employe,
      public ipm_prestataire:Prestataire,
      public  ipm_enfant:Enfant,
      public  ipm_prestation:Prestation,
      public numeroBon:string,
      public motif :string,
      public devit:string,
      public ordonnance:string,
      public  ipm_conjoint:Conjoint,
      public dateEtablissement:Date,
      public date_delivrance:Date,
      public  ipm_utilisateur:IPM_Utilisateur,
      public certification:Boolean = true
    )
     
      { 
      super(idbon,total,ipm_employe,ipm_prestataire,ipm_enfant,ipm_conjoint,ipm_prestation,dateEtablissement,ipm_utilisateur);
      }
    }