import { IPM_Utilisateur } from 'src/app/Models/Utilisateur';
//import { IPM_Role } from './Role';
import { IPM_Role } from 'src/app/Models/Role';
export class roleUser{
    constructor(
        
        public ipm_utilisateur?:IPM_Utilisateur,
        public ipm_role?:IPM_Role,
        ){}
}