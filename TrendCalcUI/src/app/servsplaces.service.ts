import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServsplacesService {
  url: string = "http://localhost:3333/getTourist/";

  safePlace: string ="http://localhost:3333/getSafe";
  warnPlace: string = "http://localhost:3333/getWarn";
  constructor(private http: HttpClient) { }

  getTouristPlaces(item :any):Observable<any>{
    return this.http.get(this.url + item);
  }
  getSafeStates():Observable<any>{
    return this.http.get(this.safePlace);
  }
  getWarnStates():Observable<any>{
    return this.http.get(this.warnPlace);
  }

}
