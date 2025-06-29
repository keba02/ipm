import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employe } from '../Models/Employe';
import { IPM_Bon } from '../Models/IPM_Bon';

@Injectable({
  providedIn: 'root'
})
export class BonService {

  constructor(private http: HttpClient) { }

  public AjoutBon(bon) {
    console.log(bon);
    return this.http.post(environment.URL + 'bon', bon, {responseType: 'text' as 'json'});
  }
  // public getBonById(idbon: number):Observable<IPM_Bon>{
  //   return this.http.get<IPM_Bon>(environment.URL+"/bon/{id}/"+idbon) ;

  // }
  public getEmploye(): Observable<Employe> {
    return this.http.get<Employe>(environment.URL + 'employe');
  }

  public getEmployeById(idemp: number): Observable<Employe> {
    return this.http.get<Employe>(environment.URL + 'employe/' + idemp);

  }
  listeBon(idbon: number): Observable<IPM_Bon> {
    return this.http.get<IPM_Bon>(environment.URL + 'getbonByid/' + idbon);
  }
// Consulter les informations du bon de l'employé
  public getEmpBonById(idemp: number): Observable<IPM_Bon[]> {
    return this.http.get<IPM_Bon[]>(environment.URL + 'getbonByid/' + idemp);

  }

  // recuperer le dernier bon de lunetterie
  public getLastBonLunetterieByIpm_employe(idemp) {
    return this.http.get<IPM_Bon[]>(environment.URL + 'bon/lunetterie/last/' + idemp);
  }
  public ipm_details_bon_lunetterie(idbon) {
    return this.http.get<IPM_Bon[]>(environment.URL + 'ipm_details_bon_lunetterie/idbon/' + idbon);
  }

}
