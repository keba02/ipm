import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Employe } from '../Models/Employe';
import { IPM_StatutEmploye } from '../Models/IPM_StatutEmploye';

@Injectable({
  providedIn: 'root'
})
export class StatutEmployeService {

  constructor(private http:HttpClient ,private toastr: ToastrService) { }

  public getStatutEmploye():Observable<IPM_StatutEmploye[]>{
    
    return this.http.get<IPM_StatutEmploye[]>(environment.URL+'statutEmploye');
  }
  public modifierStatut(codes:Employe){
    return this.http.put(environment.URL+'employe',codes).pipe(
      catchError((this.erroHandler)
    ));;
   
  }
  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'erreur de chargement');
  }
}
