import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtClientService } from './jwt-client.service';
import { SecurityComponent } from './security/security.component';

@Injectable({
  providedIn: 'root'
})
export class CovitourismGuard implements CanActivate {
  constructor(private serv: JwtClientService, private router: Router){}
  canActivate() : any{
    if(this.serv.isLoggedIn())
    {
      return true;
    }
    else{
      alert("Permission denied for this Page!!")
      return this.router.navigate(['/']);
    }
  }
  
}
