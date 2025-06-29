import { Bareme } from "./Bareme";
import { Employe } from "./Employe";

export class Precompte{
    constructor(
    public IdPrecompte?:number,
    public ipm_employe?:Employe,
    public montantRembou?:number,
    public datePrecompte?:string
    )
    {};
}