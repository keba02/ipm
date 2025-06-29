import { Employe } from "./Employe";
import { Facture } from "./IPM_Facture";
import { Prestataire } from "./Prestataire";
import { Prestation } from "./Prestations";

export class IPM_Details_Facture{
    constructor(
        public idDedtailsFacture?:number,
        public code_acte?:string,
        //public numerofacture?:number,
        //public date_facture?:Date,
        public datePrestation?:Date,
        public matricule?:string,
        public montant_facture?:number,
        public taux_ipm?:number,
        public part_ipm?:number,
        public part_patient?:number,
        public tarification?:number,
        public ipm_prestation?:Prestation,
        public ipm_employe?:Employe,
         public ipmFacture?:Facture ,
        
       // public Details?:Array<Details_Facture> [],

    ){}
}