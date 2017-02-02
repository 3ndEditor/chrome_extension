import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }
    isLogin: boolean = false;
    redirectUrl: string;
    userId: string;

    

}