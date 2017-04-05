import { Injectable } from '@angular/core';

@Injectable()
export class OwnServerService {

    private SERVER_URL : string = 'https://threendeditor-own.herokuapp.com/userInfo/'
    constructor() { }


    submitUserInfo(userInfo : Object) {
        let xhr = new XMLHttpRequest();
        
        xhr.open('GET',this.SERVER_URL+userInfo,true);
        xhr.onload = (result)=>{
            console.log(result)
        }
        xhr.send();
    }

}