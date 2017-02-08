import { resolve } from 'url';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { LoginUser, LoginUserService, userPromise } from './user';
import { Resolve } from '@angular/router/src/interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class UserResolveService implements Resolve<LoginUser> {
    
    constructor(private loginUserService : LoginUserService, private router:Router) {


     }
    resolve(route:ActivatedRouteSnapshot):Promise<LoginUser | boolean> {
        let loginUserName:string = route.params['loginUserName'];
        // return Promise.resolve(new LoginUser('kim','kim@editor.com')).then(user=>{return user});
        return this.loginUserService.findByName(loginUserName).then(user=>{
            if(user){
                return user;
            }else{
                this.router.navigate(['dd']);
                return false;
            }
        })
    }

}