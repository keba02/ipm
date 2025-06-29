import { Employe } from "./Employe";
import { IPM_Statut_Facture } from "./IPM_Statut_Facture";
import { Prestataire } from "./Prestataire";
import { Prestation } from "./Prestations";
import {IPM_Utilisateur} from './Utilisateur';

export class Facture{
    constructor(
        public idfacture?:number,
        // public code_acte?:string,
         public numerofacture?:number,
         public dateFacture?:Date,
         public dateSaisie?:Date,
         public DateReception?:Date,
         public nombJour?:number,
         public reglement?:boolean,
         public part_ipm?:number,
         public part_patient?:number,
        // public tarification?:number,
        public ipm_prestataire?:Prestataire,
        // public ipm_prestation?:Prestation,
        // public ipm_employe?:Employe ,
        public certifier?:boolean ,
        //public ipm_details_factures?:any,
        public montantTotal?:number,
        public  ipmStatutFacture?:IPM_Statut_Facture,
        public observations?: string,
        public ipm_utilisateur?:any


){}
}