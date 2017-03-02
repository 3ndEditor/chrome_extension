import { Observable, Subject } from 'rxjs/Rx';
import { handleError } from '../../../../../async-handling.promise';
import { Http, Jsonp, ResponseContentType, URLSearchParams } from '@angular/http';
import { Keymap } from '../../../../../shared/keymap/keymap.provider';
import { animate, Component, ElementRef, OnInit, Renderer, state, style, transition, trigger } from '@angular/core';

@Component({
    selector:"export",
    templateUrl : 'editorTab.export.component.html',
    styleUrls:['editorTab.export.component.css']
})
export class ExportComponent {
    /**
    * @file editorTab.export.component.ts
    * @author KimTaemin 17/02/09
    * @brief Exporting PDF File
    * @see Need to translate img, since copyright.
    * @todo intersect with server
    */

    private isExportActive: boolean;
    constructor(private keymap: Keymap, private jsonp: Jsonp, private http: Http, private el: ElementRef, private renderer: Renderer) {
        this.isExportActive = false;
    }

    openExportBoard() {
        this.isExportActive = this.isExportActive ? false : true;
        console.log("openExport클릭됨")
    }

    connectPreTest() {
        let testUrl = "http://www.google.com";
        let params = new URLSearchParams();
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        console.log("서버호출");
        // jsonp은 json을 콜백으로 한번 감싼 형태이다. http://dev.epiloum.net/1311 참고 사이트.
        //

        return this.jsonp.get(testUrl).toPromise().then((response)=>
            this.renderer.selectRootElement(this.el.nativeElement).insertAdjacentHTML('beforeend', response.json().name)
            );
        // return this.http.get(testUrl)
    }


        operator: Observable<string>;
        testStream = new Subject<string>();
        connectServerTest() {
            // let testUrl="http://www.naver.com";
            // let params = new URLSearchParams();
            // params.set('format','json');
            // params.set('callback','JSONP_CALLBACK');

            this.connectPreTest()
            // .subscribe((info)=>{
            //     console.log(info)
            };
            // // jsonp은 json을 콜백으로 한번 감싼 형태이다. http://dev.epiloum.net/1311 참고 사이트.
            // //

            // // return this.jsonp.get(testUrl).toPromise().then((response)=>
            // //     this.renderer.selectRootElement(this.el.nativeElement).insertAdjacentHTML('beforeend', response.json().name)
            // //     );
            // return this.jsonp.get(testUrl,params).map(response=>{console.log("("+response.json() +")")}).;
            // // return this.http.get(testUrl).toPromise().then(response=>{console.log(JSON.parse(response.text()).name +"ttt111t///"+response.text())});


            //  this.operator
            // JSON.parse(this.operator.to)   
        }


    
