import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable()
export class NavBarService {

    public action: boolean = false;
    public isInput: boolean = false;
    public navAction() {
        this.action = this.action === false ? true : false;

    }
    public navInputFrame() {
        this.isInput = this.isInput === false ? true : false;
    }
}