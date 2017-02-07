import { Injectable } from '@angular/core';

@Injectable()
export class Keymap {

    
    help_key: number;
    wide_key: number;
    create_frame_key:number;
    header_fixed_key:number;

    

}

let customKeymap = {
    help_key: 112,
    wide_key: 87,
    create_frame_key: 83,
    header_fixed_key: 69
    


}

export let KeymapProvider = {
    provide: Keymap,
    useValue: customKeymap

}

// 값제공자는 상위 모듈에서 한번만 주입하면 그 하위 모듈들도 전부 이용가능하다 
// 이용하는 방법은 그 타입을 가지고 있는 변수를 컴포넌트가 가지고 있기만 하면 자동주입이다. 