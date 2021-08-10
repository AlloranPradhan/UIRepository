import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusData } from './StatusData';

@Injectable({
  providedIn: 'root'
})
export class ServDashboardService {
  // private url: string = "http://localhost:3333/status";
  private url: string = "http://localhost:3333/getAllStats";
  constructor(private http: HttpClient) { }

  getStatus() : Observable<StatusData[]>{
    return this.http.get<StatusData[]>(this.url);
  }
}
