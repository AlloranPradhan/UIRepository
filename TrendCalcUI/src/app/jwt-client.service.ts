import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: any;

  constructor(private http: HttpClient) { }

  public generateToken(request: any){
    return this.http.post("http://localhost:9000/authenticate",request, {responseType: 'text' as 'json'});
  }

  public welcome(token: any){
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr)
    return this.http.get("http://localhost:9000/",{headers,responseType: 'text' as 'json'});
  }

  public login(request: {userName: string, password: string}): Observable<boolean>{
    return this.http.post<any>("http://localhost:9000/login", request, {responseType: 'text' as 'json'})
      .pipe(
        tap((tokens)=> this.dologinUser(request.userName,tokens)),
        mapTo(true),
        catchError(error =>{
          alert(error.error);
          return of(false);
        }));
  }
  private dologinUser(username: any, tokens: any) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }
  private storeTokens(tokens: any) {
    localStorage.setItem(this.JWT_TOKEN, tokens);
    
  }

  logout(){
    return this.http.post<any>("http://localhost:9000/logout", {
      'token' : this.getToken()
  }).pipe(
      tap(()=> this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
    
  }
  getToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }
  doLogoutUser(): void {
    this.loggedUser = null;
    this.removeTokens();
  }
  removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    // localStorage.removeItem(this.REFRESH_TOKEN);
  }

  isLoggedIn(){
    return !!this.getJwtToken();
  }
  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  // refreshToken(){
  //   return this.http.post<any>("", {
  //     'refreshToken': this.getRefreshToken()
  //   }).pipe(tap((tokens) => {
  //     this.storeJwtToken(tokens.jwt);
  //   }));
  // }
  storeJwtToken(jwt: any) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }
  
}
