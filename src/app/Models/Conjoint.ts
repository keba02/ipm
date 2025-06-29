import { Employe } from "./Employe";

export class Conjoint{  
    constructor(
        public idconj?:number,
        public nom_conjoint?:string,
       public  prenom_conjoint?:string,
       public sexe_conjoint?:string,
       public ipm_employe?: Employe,
       public date_naiss_conj?:Date,
       public lieu_naiss_conj?:string,
       public telephone?:string,
       public photos?:string,
       public certificat?:string,
       public attestationDeChomage ?: string,
    )
        {}
}
