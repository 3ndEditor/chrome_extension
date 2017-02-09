import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Rx';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanDeactivate,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
    

    constructor(private router: Router) { }

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean {
        let url :string = state.url;
        console.log("test");
        // return  this.checkLogin(url);
        return false;
    }
    
    canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean {
        return
    }

    checkLogin(url: string): boolean {

    

    

    return false;
  }

}
