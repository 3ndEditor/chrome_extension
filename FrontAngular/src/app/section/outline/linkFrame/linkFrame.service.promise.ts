import { handleError } from '../../../async-handling.promise';
import { Http, Jsonp, Request, RequestMethod, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable()
export class LinkFrameService {


    constructor(private jsonp: Jsonp, private http:Http) {


    }
    // 클라이언트쪽에서 직접 웹 자료를 긁으려고 했으나 라이브러리가 있는지도 모르겠고,,, 실패! 비동기 json 데이터는 가져 올수 있을 것 같다.
    connectUrl(inputUrl: string) {

        let params = new URLSearchParams();
        //params.set('search', 'korea');
        // params.set('action', 'opensearch');
        
        return this.http
            .get(inputUrl)
            .map(this.extractData)
            .catch(handleError);

    }


    // connectUrl(inputUrl: string):void {
    //     var request = require('request');
    //     request(inputUrl, function (error, response, body) {
    //         if (!error && response.statusCode == 200) {
    //             console.log(body) // Show the HTML for the Google homepage. 
    //         }
    //     })
    // }

    // connectUrl(inputUrl:string):Promise<any>{
    //     return this.http.get(inputUrl)
    //     .toPromise()
    //     .then(this.extractData);
    // }

    private extractData(res:Response){
        let body = res.json();
        console.log(body);
        return body.data || {};
    }
}