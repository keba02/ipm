import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Observable} from "rxjs/internal/Observable";
import {Conjoint} from "../Models/Conjoint";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TelechargerFichierService {

  constructor( private http : HttpClient,private toastr: ToastrService) { }


  public getTelechargementFichier(fileName: string):Observable<any>{
    return this.http.get<any>(environment.URL+'get/file/'+fileName)

  }

  telechargementfichier():Observable<Blob>{
    return this.http.get(environment.URL+'get/file/',{responseType:'blob'});
  }
}
