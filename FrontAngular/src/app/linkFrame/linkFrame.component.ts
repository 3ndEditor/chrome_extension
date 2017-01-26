import { Observable } from 'rxjs/Observable';

import { LinkFrameService } from './linkFrame.service.promise';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';

@Component({
    selector: 'linkFrame',
    templateUrl: 'linkFrame.component.html',
    styleUrls:['linkFrame.component.css'],
    providers:[LinkFrameService],
    animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    ] 
})
export class linkFrameComponent implements OnInit {
    result:Observable<string[]>;
    private state:string = 'close';
    private trustResourceURL: SafeResourceUrl;
    private linkUrl:string = '';
    constructor(private _sanitizer: DomSanitizer, private connectService:LinkFrameService) {
        let defaultUrl ="http://www.tistory.com/";
        
        this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(defaultUrl);
    }

    onEnter(inputUrl:string){
        this.linkUrl=inputUrl;
        this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.linkUrl);
        
    }

    ngOnInit() {

    }

    private menuState:string = 'in';

    toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}