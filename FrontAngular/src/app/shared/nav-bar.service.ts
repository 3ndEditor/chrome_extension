import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable()
export class NavBarService {

    public action: boolean=false;
    
    public navAction() {
        this.action = this.action === false ? true : false;
        
    }



}