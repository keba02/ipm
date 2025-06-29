import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Enfant } from '../Models/Enfant';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  constructor(private http:HttpClient) { }


  public AjoutEnfant(enfant){
    
    return this.http.post(environment.URL+'enfant',enfant,{responseType: 'text' as 'json'})
  }

  listeEnfant(idemp: number) : Observable<any>{
    return this.http.get<any>(environment.URL+'getenfantByid/'+idemp);
  }
  
  public getEnfantByIdsansPhoto(idenf: number):Observable<Enfant>{
    return this.http.get<Enfant>(environment.URL+'enfantsansPhoto/'+idenf) 
   
  }
  public getEnfantById(idenf: number):Observable<Enfant>{
    return this.http.get<Enfant>(environment.URL+'enfant/'+idenf) 
   
  }
  public modifEnfant(enfant:Enfant){
    return this.http.put(environment.URL+'putenfantsansPhoto',enfant,{responseType: 'text' as 'json'})

  }
  
  modifPhotoEnfant(enfant:Enfant){
    return this.http.put(environment.URL+"putenfant",enfant,{responseType: 'text' as 'json'});

  }
  //////////upload photo enfant
  uploadFile(file:File):Observable<any>{
    const formData: FormData= new FormData();
    // console.log("file.name :"+file.name) 
    // console.log("file.size :"+file.size) 
    formData.append('image', file,file.name);
   // formData.append('enfant', enfant);
    return this.http.post(environment.URL+"upload", formData);

  }
  uploadFileExtrait(file:File):Observable<any>{
    const formData: FormData= new FormData();
    // console.log("file.name :"+file.name) 
    // console.log("file.size :"+file.size) 
    formData.append('file', file,file.name);
   // formData.append('enfant', enfant);
    return this.http.post(environment.URL+"uploadExtrait", formData);

  }
 //////////upload piece extrait de naissance uploadExtrait
 uploadExtraitNaiss(file:File):Observable<any>{
  const formData: FormData= new FormData();
  formData.append('file', file,file.name);
  return this.http.post(environment.URL+"ext", formData);

}
}

