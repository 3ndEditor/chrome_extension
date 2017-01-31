import { Observable } from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {CanDeactivate, Router} from '@angular/router';
export interface CanComponentDeactivate {
    canDeactivate : (window)=>Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    
    constructor(private _router:Router) { }

    canDeactivate(){
        console.log("test");
        return window.confirm("저장되지 않았습니다. 나가시겠습니까")
    }

}