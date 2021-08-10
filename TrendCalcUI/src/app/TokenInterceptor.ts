import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { JwtClientService } from "./jwt-client.service";

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor{
    constructor(public jwtServ: JwtClientService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.jwtServ.getJwtToken()){
            req = this.addToken(req, this.jwtServ.getJwtToken());
        }
        return next.handle(req).pipe(catchError(error =>{
                return throwError(error);
        }))
    }
    handle401Error(req: HttpRequest<any>, next: HttpHandler): any {
        throw new Error("Method not implemented.");
    }
    addToken(req: HttpRequest<any>, token: string | null): HttpRequest<any> {
        return req.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

}
