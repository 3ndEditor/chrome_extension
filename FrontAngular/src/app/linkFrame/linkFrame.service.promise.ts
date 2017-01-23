import { Jsonp, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LinkFrameService {

  
    constructor(private  jsonp:Jsonp) { }

    connectUrl(inputUrl:string){

        let params = new URLSearchParams();

        return this.jsonp
        .get(inputUrl)
        .toPromise()
        .then()
        .catch()
    }
}