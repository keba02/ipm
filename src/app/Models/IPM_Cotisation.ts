import { Cotisation } from "./CotisatonGlobal";
import { Employe } from "./Employe";
//import { CotisationGlobal } from './CotisatonGlobal';

export class DetailCotisation{
    
    constructor(
        public id_Det_Coti?:number,
        public montant?:number,
        //public matricule?:string;
        public ipm_employe?:Employe,
        public ipm_cotisation?:Cotisation
        
        
    ){}
}