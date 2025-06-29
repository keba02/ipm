import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prestataire } from '../Models/Prestataire';
import { Prestation } from '../Models/Prestations';
import { TypePrestataire } from '../Models/TypePrestataire';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  public dataForm:FormGroup;
  constructor(private http:HttpClient) {

   }
   public AjoutPrestation(prestation:Object):Observable<Object>{
    console.log(prestation);
    return this.http.post(environment.URL+'prestation',prestation,{responseType: 'text' as 'json'})
  }
  
 public  listePrestation():Observable<any>{
    return this.http.get<any>(environment.URL+'prestation');
  }


   public ModifierPrestation(pre:Prestation){
     return this.http.put<Prestation>(environment.URL+'prestation',pre);
    
   }

   public getPrestationById(idp: number):Observable<Prestation>{
     return this.http.get<Prestation>(environment.URL+'prestation/'+idp) 
    
   }
   public getPrestation():Observable<any>{
    return this.http.get<any>(environment.URL+'prestation');
  }
  public getAllPestataires():Observable<Prestataire[]>{
    return this.http.get<Prestataire[]>(environment.URL+'allprestataire');
  }
  public getTypePrestataire():Observable<TypePrestataire[]>{
            return this.http.get<TypePrestataire[]>(environment.URL+'alltypeprestataire');
  }
  public getAllPrestation():Observable<Prestation[]>{
    return this.http.get<Prestation[]>(environment.URL+'prestation');
  } 
}
