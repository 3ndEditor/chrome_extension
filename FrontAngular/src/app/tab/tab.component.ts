import { LinkComponent } from '../linkTab/link/linkTab.link.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'tab',
    templateUrl: 'tab.component.html',
    styleUrls:['tab.component.css']
})
export class TabComponent implements OnInit{
    // 부모 컴포넌트 바인딩을 통해 usage의 값을 정확히 해야함.
    @Input() usage : string;

    urlList: LinkComponent[] = [];
    



    // 서버로부터 받은 url로 배열 생성
     constructor(){
        // this.urlList.push(new Link("http://naver.com",true,true))
    }
     
     ngOnInit(){
     }

     getTitle(url:string){
     }


}