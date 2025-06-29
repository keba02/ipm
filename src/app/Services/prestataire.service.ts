import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prestataire } from '../Models/Prestataire';
import { TypePrestataire } from '../Models/TypePrestataire';
import { Employe } from '../Models/Employe';
import {IPM_Details_Facture} from '../Models/IPM_Details_Factures';


@Injectable({
  providedIn: 'root'
})
export class PrestataireService {
  public dataForm:FormGroup;
  constructor(private http:HttpClient) { }


  AjouterPrestataire(prestataire:Object):Observable<Object>{
return this.http.post(environment.URL+'prestataire',prestataire,{responseType: 'text' as 'json'});
  }
  getPrestataire():Observable<any>{
    return this.http.get<any>(environment.URL+'allprestataire')
  }
  public getAllPrestataires():Observable<Prestataire[]>{
   // debugger
    return this.http.get<Prestataire[]>(environment.URL+'allprestataire');
  }
  public getBon(){
    // debugger
     return this.http.get(environment.URL+'bon');
   }
  public getTypePestataires(nom:string):Observable<Prestataire[]>{
     return this.http.get<Prestataire[]>(environment.URL+'listprestataire/'+nom);
   }
  public getPrestataireById(idpres: number):Observable<Prestataire>{
    return this.http.get<Prestataire>(environment.URL+'prestataire/'+idpres) ;
   
  }
  public modifier(codep: Prestataire){
    return this.http.put(environment.URL+'prestataireUpdate',codep)

     
  }
 /////////////Type Prestataire
 AjouterTypePrestataire(typePrestataire:TypePrestataire):Observable<TypePrestataire>{
  return this.http.post(environment.URL+'typeprestataire',typePrestataire,{responseType: 'text' as 'json'});
    }
    public getAllTypePrestataires():Observable<TypePrestataire[]>{
      // debugger
       return this.http.get<TypePrestataire[]>(environment.URL+'alltypeprestataire');
     }

     uploadFileCertif(file:File):Observable<any>{
      const formData: FormData= new FormData();
      // console.log("file.name :"+file.name) 
      // console.log("file.size :"+file.size) 
      formData.append('file', file,file.name);
     // formData.append('enfant', enfant);
      return this.http.post(environment.URL+"lettreAgrement", formData);
  
    }

    rapportsByPrestataire(date1,date2,prestataire_id):any{
        return this.http.get<IPM_Details_Facture[]>(environment.URL+'rapport/prestataire/'+date1+'/'+date2+'/'+prestataire_id);
    }
    
     
}
