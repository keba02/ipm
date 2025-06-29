export class Remboursement{
    constructor(
        public idRemboursement?:number,
        public montantRemboursement?:number,
        public dateRemboursement?:Date,
        public certifier?:boolean,
        // public idfacture?:number,
        // public idfacture?:number,
        public ipm_utilisateur?:any
    ){

    }
}