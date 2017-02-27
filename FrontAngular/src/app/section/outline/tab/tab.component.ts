import { LinkComponent } from './linkTab/link/linkTab.link.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'tab',
    templateUrl: 'tab.component.html',
    styleUrls:['tab.component.css']
})
export class TabComponent implements OnInit{
    /**
    * @file tab.component.ts
    * @author KimTaemin 17/02/14
    * @brief Constitute LinkTab and EditorTab
    * @see must be disabled after first save activity. 
            Need to translate img, since copyright.
    * @todo editorTab hover error
    */


    // 부모 컴포넌트 바인딩을 통해 usage의 값을 정확히 해야함.
    @Input() usage : string;

    constructor(){
    }

    ngOnInit(){

    }
}