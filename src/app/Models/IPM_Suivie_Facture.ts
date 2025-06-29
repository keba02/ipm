import {Facture} from './IPM_Facture';
import {IPM_Statut_Facture} from './IPM_Statut_Facture';
import {IPM_Utilisateur} from './Utilisateur';

export class IPM_Suivie_Facture{
    constructor(
        public id_suivie_facture?:any,
        public ipm_facture?:Facture,
        public ipm_utilisateur?: IPM_Utilisateur,
        public ipm_statut_facture?: IPM_Statut_Facture,
    ){}
}