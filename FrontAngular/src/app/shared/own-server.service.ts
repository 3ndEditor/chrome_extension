import { Injectable } from '@angular/core';

@Injectable()
export class OwnServerService {

    private SERVER_URL : string = 'https://threendeditor-own.herokuapp.com/userInfo/'
    constructor() { }


    submitUserId(userId: string) {
        let xhr = new XMLHttpRequest();
        
        xhr.open('GET',this.SERVER_URL+userId,true);
        xhr.onload = (result)=>{
            console.log(result)
        }
        xhr.send();
    }

}