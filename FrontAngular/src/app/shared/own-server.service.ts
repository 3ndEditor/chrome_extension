import { Injectable } from '@angular/core';

@Injectable()
export class OwnServerService {

    private SERVER_URL: string = 'https://threendeditor-own.herokuapp.com/userInfo/'

    constructor() {
        // this.URLSELECT(1);
    }

    private URLSELECT(DEV) {
        if (DEV) {
            this.SERVER_URL = "http://localhost:3000";
        } else {

        }
    }

    getUserData(userId: string) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', this.SERVER_URL + userId, true);
            xhr.onload = (result: any) => {
                // console.log(result.currentTarget.response);
                
                if (result.currentTarget.response.nothing) {
                    reject();
                } else {
                    resolve(result.currentTarget.response);
                }
            }
            xhr.send();
        });
    }


    postUserInfo(userInfo: Object) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', this.SERVER_URL, true);
            xhr.onload = (result) => {
                console.log(result);
            };
            xhr.send(userInfo);
        })
    }



}