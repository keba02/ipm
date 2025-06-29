import { Conjoint } from "./Conjoint";
import { Employe } from "./Employe";
import { Enfant } from "./Enfant";
import { Prestataire } from "./Prestataire";
import { Prestation } from './Prestations';
import {IPM_Utilisateur} from './Utilisateur';
export class IPM_Bon{
  
  constructor(
        public idbon: number,
         public total:string,
         public ipm_employe:Employe,
        public ipm_prestataire:Prestataire,
        public  ipm_enfant:Enfant,
        public  ipm_conjoint:Conjoint ,
        public ipm_prestation:Prestation,
        public dateEtablissement:Date,
        public ipm_utilisateur:IPM_Utilisateur
  ){}

}