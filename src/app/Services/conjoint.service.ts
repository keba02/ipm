    import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Conjoint } from '../Models/Conjoint';
import { Employe } from '../Models/Employe';

@Injectable({
  providedIn: 'root'
})
export class ConjointService {

  constructor(private http:HttpClient) {
   }

   public AjoutConjoint(conjoint){
    console.log(conjoint);
    return this.http.post(environment.URL+'conjoint',conjoint,{responseType: 'text' as 'json'})
  }
  listeConjoint(idemp: number) : Observable<any>{
    return this.http.get<any>(environment.URL+'getconjointByid/'+idemp);
  }
  public getConjoint(){
     return this.http.get(environment.URL+'conjoint');
  }
   public getEmploye():Observable<Employe[]>{
     return this.http.get<Employe[]>(environment.URL+'employe');
   }
  public getConjointById(idconj: number):Observable<Conjoint>{
    return this.http.get<Conjoint>(environment.URL+'conjoint/'+idconj) 
   
  }
  public getConjointByIdsansPhoto(idconj: number):Observable<Conjoint>{
    return this.http.get<Conjoint>(environment.URL+'conjointsansphoto/'+idconj) 
   
  }
   uploadFile(file:File):Observable<any>{
    const formData: FormData= new FormData();
    // console.log("file.name :"+file.name) 
    // console.log("file.size :"+file.size) 
    formData.append('image', file,file.name);
   // formData.append('enfant', enfant);
    return this.http.post(environment.URL+"uploade", formData);

  }
  modifConjoint(conjoint:Conjoint){
    return this.http.put(environment.URL+"putconjointsansphoto",conjoint,{responseType: 'text' as 'json'});

  }
  modifPhotoConjoint(conjoint:Conjoint){
    return this.http.put(environment.URL+"putconjoint",conjoint,{responseType: 'text' as 'json'});

  }
  uploadFileCertif(file:File):Observable<any>{
    const formData: FormData= new FormData();
    // console.log("file.name :"+file.name) 
    // console.log("file.size :"+file.size) 
    formData.append('file', file,file.name);
   // formData.append('enfant', enfant);
    return this.http.post(environment.URL+"uploadeCertif", formData);

  }

  /***** Upload attestation de chomage ***/
  uploadAttestationChomage(file:File):Observable<any> {
      console.log(file)
      const formData: FormData = new FormData();
      // console.log("file.name :"+file.name)
      // console.log("file.size :"+file.size)
      formData.append('file', file, file.name);
      // formData.append('enfant', enfant);
      return this.http.post(environment.URL + "upload/attestation", formData);
  }
    modifConjointeAttestChomage(conjoint:Conjoint){
        return this.http.put(environment.URL+"put/conjoint/attestation",conjoint,{responseType: 'text' as 'json'});

    }


}
