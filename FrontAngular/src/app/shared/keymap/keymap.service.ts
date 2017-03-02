import { EventEmitter, Injectable, Output } from '@angular/core';


export class Keymap {

    
    help_key: number;
    wide_key: number;
    create_frame_key:number;
    header_fixed_key:number;

    

}


@Injectable()
export class KeymapService {

    private globalKeymap: Keymap;
    private defaultKeymap:Keymap = {
        help_key: 112, //f1
        wide_key: 87, // w
        create_frame_key: 83, //s
        header_fixed_key: 69  //e
    }

    constructor() {
        this.globalKeymap =  this.defaultKeymap;
    }

    setKeymap(customKeymap:Keymap) {
        this.globalKeymap = customKeymap;
    }

    getKeymap() {
        return this.globalKeymap; 
    }


}