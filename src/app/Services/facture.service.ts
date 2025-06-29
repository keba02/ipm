import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Employe } from '../Models/Employe';
import { IPM_Details_Facture } from '../Models/IPM_Details_Factures';
import { Facture } from '../Models/IPM_Facture';
import { Remboursement } from '../Models/IPM_Remboursement';
import { IPM_DetaRembourse } from '../Models/IPM_DetaRembourse';
import {IPM_Suivie_Facture} from "../Models/IPM_Suivie_Facture";

@Injectable({
  providedIn: 'root'
})
export class                                        FactureService {

  constructor(private http:HttpClient) { }

  public AjoutFacture(facture){
    
    return this.http.post(environment.URL+'facture',facture,{responseType: 'text' as 'json'})
  }
  public AjoutDetailsFacture(detailfacture:IPM_Details_Facture[]){
    
    return this.http.post(environment.URL+'adddetailsfacture',detailfacture,{responseType: 'text' as 'json'})
    .pipe(
      catchError((this.erroHandler)
      
      
    ))
  ;
  }
  public AjoutRembour(Remboursement:Remboursement){
    
    return this.http.post(environment.URL+'remboursement',Remboursement,{responseType: 'text' as 'json'})
    .pipe(
      catchError((this.erroHandler)
      
      
    ))
  ;
  }
  
  public AjoutdetaRembour(listRembourse:IPM_DetaRembourse[]){
    
    return this.http.post(environment.URL+'adddetailsremboursement',listRembourse,{responseType: 'text' as 'json'})
    .pipe(
      catchError((this.erroHandler)
      
      
    ))
  ;
  }
  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'erreur de telechargement de fichier');
  }
  
  public getAllFacture():Observable<IPM_Details_Facture[]>{
    return this.http.get<IPM_Details_Facture[]>(environment.URL+'detailsfactures');
  }
  public getAllFactureglobale():Observable<Facture[]>{
    return this.http.get<IPM_Details_Facture[]>(environment.URL+'allfacture');
  }
  public getAllFactureglobaleByUser(idUser:number):Observable<Facture[]>{
    return this.http.get<IPM_Details_Facture[]>(environment.URL+'allfacture/user/'+idUser);
  }


  public getAllRemboursementGlobal():Observable<Remboursement[]>{
    return this.http.get<Remboursement[]>(environment.URL+'remboursement');
  }
  public getAllRemboursementGlobalByUser(idUser: number):Observable<Remboursement[]>{
    return this.http.get<Remboursement[]>(environment.URL+'remboursement/user/'+idUser);
  }

  public getAllFactbyfactglobale(idfac:number):Observable<IPM_Details_Facture[]> {
    
    return this.http.get<IPM_Details_Facture[]>(environment.URL+'detailsfacture/'+idfac);
  }
  public getAllFactbyfactglobale2(idfac:number):Observable<IPM_Details_Facture[]> {
    
    return this.http.get<IPM_Details_Facture[]>(environment.URL+'detailsfacturebyFacture/'+idfac);
  }
  public getAllremboursbyrembourseglobale(idremb:number):Observable<IPM_DetaRembourse[]> {
    
    return this.http.get<IPM_DetaRembourse[]>(environment.URL+'Detailremboursement/'+idremb);
  }
  public Updateremboursement(remb:Remboursement){
    
    return this.http.put(environment.URL+'remboursement',remb)
  }
  public UpdateFacture(facture:Facture){
    
    return this.http.put(environment.URL+'updatefacture',facture,{responseType: 'text' as 'json'})
  }
  public listStatutFac(){

    return this.http.get(environment.URL+'satutFacture/')
  }

  public getFactureById(idfac:number):Observable<Facture>{
    return this.http.get<Facture>(environment.URL+'getfacture/'+idfac) ;}
    public deleteById(idfac:number):Observable<Facture>{
      return this.http.delete<Facture>(environment.URL+'facture/'+idfac) ;}
      
      public deleterembById(idfac:number):Observable<Remboursement>{
        return this.http.delete<Remboursement>(environment.URL+'remboursement/'+idfac) ;}

      public updateLemploye(lEmploye:Employe[]){
    
        return this.http.put(environment.URL+'updateLEmploye',lEmploye,{responseType: 'text' as 'json'})
      }
      public updateLdetailFacture(ldetail:IPM_Details_Facture[]){
    
        return this.http.put(environment.URL+'updateList',ldetail,{responseType: 'text' as 'json'})
      }
      public updateOnEmploye(Employe: Employe){
        return this.http.put(environment.URL+'employesansPhoto',Employe)
    
         
      }
      public updateOnglobal(Empl: Remboursement){
        return this.http.put(environment.URL+'upremboursement',Empl)
    
         
      }
      public getEmployeById(idemp: number):Observable<Employe>{
        return this.http.get<Employe>(environment.URL+'employesanstof/'+idemp) 
       
      }
      public updateDetailfact(ipm_detail: IPM_Details_Facture){
        return this.http.put(environment.URL+'updateDetail',ipm_detail)
    
         
      }
      public annulerfacture(idfacture: number){
        return this.http.delete(environment.URL+'facture/'+idfacture)
    
         
      }
      public annulerfactureGlobles(idfacture: number){
        return this.http.delete(environment.URL+'facture/'+idfacture)
    
         
      }
      public annullerFacture(st:Facture){
        return this.http.put(environment.URL+'updatefacture',st);
    
         
      }
  public suiviFact(sf:IPM_Suivie_Facture){
    return this.http.post(environment.URL+'suiviefacture',sf);


  }

  
}
