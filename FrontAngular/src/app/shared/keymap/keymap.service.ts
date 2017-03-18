import { NumberFormatter } from '@angular/common/src/pipes/intl';
import { EventEmitter, Injectable, Output } from '@angular/core';





export class ShortKey {
    constructor(private keyName: string, private keyAlias: string, private keyCode: string) {

    }

    getKeyName() {
        return this.keyName;
    }

    getKeyAlias() {
        return this.keyAlias;
    }

    getKeyCode() {
        return this.keyCode
    }

    setKeyAlias(keyAlias: string) {
        this.keyAlias = keyAlias;
    }

    setKeyCode(keyCode: string) {
        this.keyCode = keyCode;
    }
}


@Injectable()
export class KeymapService {
    private globalKeymap: ShortKey[] = [
        new ShortKey("help_key", 'F1', '112'), //f1
        new ShortKey("wide_key", 'W', '87'), //w
        new ShortKey("create_frame_key", 'S', '83'), //s
        new ShortKey("header_fixed_key", "E", '69'), //e
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