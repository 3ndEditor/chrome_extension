import { Observable } from 'rxjs/Rx';
import { handleError } from '../../../../../async-handling.promise';
import { Http, Jsonp, ResponseContentType, URLSearchParams } from '@angular/http';
import { Keymap } from '../../../../../shared/keymap/keymap.provider';
import { animate, Component, OnInit, state, style, transition, trigger } from '@angular/core';

@Component({
    selector:"export",
    templateUrl : 'editorTab.export.component.html',
    styleUrls:['editorTab.export.component.css'],
    animations:[
        trigger(
            'exportActive',[
                state('deActive', style({ height: '0' })),
                state('active', style({})),
                transition('deActive <=> active', animate(300)),
            ]
        ),
    
    ]
})
export class ExportComponent{
    /**
    * @file editorTab.export.component.ts
    * @author KimTaemin 17/02/09
    * @brief Exporting PDF File
    * @see Need to translate img, since copyright.
    * @todo intersect with server
    */

    private isExportActive: boolean;
    constructor(private keymap: Keymap, private jsonp : Jsonp ,private http:Http  ) {
        this.isExportActive = false;   
    }

    openExport() {
        this.isExportActive = this.isExportActive ? false : true;
        console.log("openExport클릭됨")
    }

    connectServerTest() {
        let testUrl="http://localhost:8080/hello?callback=JSONP_CALLBACK";
        let params = new URLSearchParams();
        // params.set('format','json');
        // params.set('callback','JSONP_CALLBACK');
        
        console.log("서버호출");
        // jsonp은 json을 콜백으로 한번 감싼 형태이다. http://dev.epiloum.net/1311 참고 사이트.
        //
        return this.jsonp.get(testUrl).toPromise().then(response=>console.log(response.json()));
        // return this.http.get(testUrl).toPromise().then(response=>{console.log(JSON.parse(response.text()).name +"ttt111t///"+response.text())});
        
        
    }


}
