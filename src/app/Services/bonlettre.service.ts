import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BonlettreService {

  constructor(private http:HttpClient) { }
   

  SaveBonLettre(bonlettre){
    return this.http.post(environment.URL+'bonlettre',bonlettre,{responseType: 'text' as 'json'})
  }
  SaveDetailsBonLettre(Detailsbonlettre){
    return this.http.post(environment.URL+'ipm_details_bon_lunetterie',Detailsbonlettre,{responseType: 'text' as 'json'})
  }
  uploadFile(file:File):Observable<any>{
    const formData: FormData= new FormData();
    // console.log("file.name :"+file.name) 
    // console.log("file.size :"+file.size) 
    formData.append('file', file,file.name);
   // formData.append('enfant', enfant);
    return this.http.post(environment.URL+"uploadeOrdonnanceL", formData,{responseType: 'text' as 'json'});

  }
  uploadFileDevit(file:File):Observable<any>{
    const formData: FormData= new FormData();
    // console.log("file.name :"+file.name) 
    // console.log("file.size :"+file.size) 
    formData.append('file', file,file.name);
   // formData.append('enfant', enfant);
    return this.http.post(environment.URL+"uploadeDevitLu", formData,{responseType: 'text' as 'json'});

  }
  
  SaveBonConsultation(bonConsultation){
    return this.http.post(environment.URL+'bonconsult',bonConsultation,{responseType: 'text' as 'json'})
  }
  uploadFileConsult(file:File):Observable<any>{
    const formData: FormData= new FormData();
    // console.log("file.name :"+file.name) 
    // console.log("file.size :"+file.size) 
    formData.append('file', file,file.name);
   // formData.append('enfant', enfant);
    return this.http.post(environment.URL+"uploadeOrdonnanceC", formData,{responseType: 'text' as 'json'});

  }
 // SaveBonLunetterie
 SaveBonLunetterie(SaveBonLunetterie){
    return this.http.post(environment.URL+'bonLunetterie',SaveBonLunetterie,{responseType: 'text' as 'json'})
  }
}
