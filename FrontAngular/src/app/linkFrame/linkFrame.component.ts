import { Observable } from 'rxjs/Observable';

import { LinkFrameService } from './linkFrame.service.promise';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'linkFrame',
    templateUrl: 'linkFrame.component.html',
    styleUrls:['linkFrame.component.css'],
    providers:[LinkFrameService]
})
export class linkFrameComponent implements OnInit {
    result:Observable<string[]>;
    private trustResourceURL: SafeResourceUrl;
    private linkUrl:string = '';
    constructor(private _sanitizer: DomSanitizer, private connectService:LinkFrameService) {
        let defaultUrl ="http://www.naver.com";
        
        
        
        this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(defaultUrl);

    }

    onEnter(inputUrl:string){
        this.linkUrl=inputUrl;
        this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.linkUrl);
        
        
        
    }

    ngOnInit() {

    }

}