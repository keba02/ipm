import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bareme } from '../Models/Bareme';

@Injectable({
  providedIn: 'root'
})
export class BaremeService {
  public dataForm:FormGroup;
  constructor(private http:HttpClient) { }

  public AjoutBareme(bareme:Object):Observable<Object>{
    return this.http.post(environment.URL+'bareme',bareme,{responseType: 'text' as 'json'})
  }
  public  listeBareme():Observable<any>{
    return this.http.get<any>(environment.URL+'bareme');
  }
  public ModifierBareme(pre:Bareme){
    return this.http.put<Bareme>(environment.URL+'updatebareme',pre);
   
  }

  public getBaremeById(idp: number):Observable<Bareme>{
    return this.http.get<Bareme>(environment.URL+'bareme/'+idp) 
   
  }
}

