










// let KeymapFactory = (userKeymap:Keymap)=>{

//     return userKeymap;
// }

// export let KeymapsProvier = {
//     provide: Keymap,
//     useFactory: KeymapFactory,
//     deps:[
//         Keymap
//     ]
// }

// 값제공자는 상위 모듈에서 한번만 주입하면 그 하위 모듈들도 전부 이용가능하다 
// 이용하는 방법은 그 타입을 가지고 있는 변수를 컴포넌트가 가지고 있기만 하면 자동주입이다. 