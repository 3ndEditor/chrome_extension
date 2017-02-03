import { LinkComponent } from '../linkTab/link/linkTab.link.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tab',
    templateUrl: 'linkTab.component.html',
    styleUrls:['linkTab.component.css']
})
export class TabComponent implements OnInit{
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