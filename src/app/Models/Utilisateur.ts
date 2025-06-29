import { IPM_Role } from "./Role";

export class IPM_Utilisateur{
    constructor(
        public id?:number,
        public login?:string,
        public password?:string,
        public nom?:string,
        public prenom?:string,
        public email?:string,
        public fonction?:string,
        public isEnable?:boolean,
        public roles?:IPM_Role,
        ){}
}