import { Conjoint } from "./Conjoint";
import { Employe } from "./Employe";
import { Enfant } from "./Enfant";
import { IPM_Bon } from "./IPM_Bon";
import { Prestataire } from "./Prestataire";
import { Prestation } from './Prestations';
import {IPM_Utilisateur} from './Utilisateur';

export class IPM_Bon_Lettre_Garantie extends IPM_Bon{
    constructor(
        public idbon:number,
        public total:string,
         public categorie_hospitalisation:string,
         public motif:string,
         public numeroBon:string,
        public ipm_employe:Employe,
        public ipm_prestataire:Prestataire,
        public  ipm_enfant:Enfant,
        public ordonnance:string,
        public  ipm_conjoint:Conjoint,
        public ipm_prestation:Prestation,public dateEtablissement:Date,
        public  ipm_utilisateur:IPM_Utilisateur)
       
        { 
        super(idbon,total,ipm_employe,ipm_prestataire,ipm_enfant,ipm_conjoint,ipm_prestation,dateEtablissement,ipm_utilisateur);
        }
}