export class IPM_Statut_Facture {
    constructor(
        public idStatutFacture?: number,
        public statutFacture?: string,
        public etape0?: boolean,
        public etape1?: boolean,
        public etape2?:boolean


    ) {
    }
}