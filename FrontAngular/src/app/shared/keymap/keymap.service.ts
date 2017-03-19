import { NumberFormatter } from '@angular/common/src/pipes/intl';
import { EventEmitter, Injectable, Output } from '@angular/core';





export class ShortKey {
    constructor(private keyName: string, private keyCode: string) {

    }

    getKeyName() {
        return this.keyName;
    }

    getKeyCode() {
        return this.keyCode
    }

    setKeyCode(keyCode:string) {
        this.keyCode  = keyCode;
    }
}


@Injectable()
export class KeymapService {
    private globalKeymap: ShortKey[] = [
        new ShortKey("help_key", '112'), //f1
        new ShortKey("wide_key", '87'), //w
        new ShortKey("create_frame_key", '83'), //s
        new ShortKey("header_fixed_key", '69'), //e
    ]
    // private globalKeymap : object[] = [
    //     {
    //         keyName : 'help_key',
    //         keyCode : 112
    //     },
    //     {
    //         keyName : 'wide_key',
    //         keyCode : 87
    //     },
    //     {
    //         keyName : 'create_frame_key',
    //         keyCode : 83
    //     },
    //     {
    //         keyName : 'header_fixed_key',
    //         keyCode : 69
    //     }
    // ]
    constructor() {

    }

    setKeymap(customKeymap) {

        this.globalKeymap = customKeymap;
    }

    getKeymap() {
        return this.globalKeymap;
    }
}