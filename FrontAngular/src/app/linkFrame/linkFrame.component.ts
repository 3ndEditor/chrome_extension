import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'linkFrame',
    templateUrl: 'linkFrame.component.html',
    styleUrls:['linkFrame.component.css']
})
export class linkFrameComponent implements OnInit {

    private trustResourceURL: SafeResourceUrl;
    private linkUrl:string = '';
    constructor(private _sanitizer: DomSanitizer) {
        let defaultUrl ="http://www.naver.com?:embed=y";
        
        this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(defaultUrl);

    }

    onEnter(inputUrl:string){
        this.linkUrl=inputUrl;
        this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.linkUrl);
    }

    ngOnInit() {

    }

}