export class LoginUser {
    constructor(
        public name: string,
        public email: string) { }
}


// 테스트용 목객체 데이터
const LOGINUSERS = [
    new LoginUser('kim','kim@editor.com'),
    new LoginUser('lee','lee@editor.com'),
    new LoginUser('park','park@editor.com'),
]

export let userPromise = Promise.resolve(LOGINUSERS);

import { Injectable } from '@angular/core';

@Injectable()
export class LoginUserService {
    
    constructor() { }
    findByName(name:string):Promise<LoginUser>{
        return userPromise.then(users=>{return users.find(user=>user.name === name)});
    }

}