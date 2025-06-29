import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BonPharmacieService {

  constructor(private http:HttpClient) { }
  AjouterBonPharmacie(bon_pharmacie){
    return this.http.post(environment.URL+'bonpharma',bon_pharmacie,{responseType: 'text' as 'json'})
  }
  uploadFile(file:File):Observable<any>{
    const formData: FormData= new FormData();
    // console.log("file.name :"+file.name) 
    // console.log("file.size :"+file.size) 
    formData.append('file', file,file.name);
   // formData.append('enfant', enfant);
    return this.http.post(environment.URL+"uploadeOrdonnance", formData);

  }
}
