import { Remboursement } from './IPM_Remboursement';
import { Employe } from './Employe';

export class IPM_DetaRembourse{
    constructor(
        public idDetail?:number,
        public matricule?:string,
        public montant?:number,
        public ipm_employe?:Employe,
        public ipmRemboursement?:Remboursement
        
    ){

    }
}