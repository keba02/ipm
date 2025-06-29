import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Precompte } from '../Models/Precompte';

@Injectable({
  providedIn: 'root'
})
export class PrecomptesService {

  constructor(private http:HttpClient, private toastr: ToastrService) { }

  public SavePrecompte(precompte:Precompte[]){
    
    return this.http.post(environment.URL+'precompte',precompte,{responseType: 'text' as 'json'})
    .pipe(
      catchError((this.erroHandler)
    ));
  }
  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'erreur de chargement');
  }

  public getAllPrecompteDate(datePrecompte:string):Observable<Precompte[]> {
    
    return this.http.get<Precompte[]>(environment.URL+'datePrecompte/'+datePrecompte);
  }

}
