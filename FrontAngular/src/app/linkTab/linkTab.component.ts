import { Link } from './link';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'linkTab',
    templateUrl: 'linkTab.component.html',
    styleUrls:['linkTab.component.css']
})
export class linkTabComponent implements OnInit{
     urlList: Link[] = [];
    
    // 서버로부터 받은 url로 배열 생성
     constructor(){
        this.urlList.push(new Link("http://naver.com",true,false))
        this.urlList.push(new Link("http://google.com",true,true))
        this.urlList.push(new Link("http://daum.net",true,true))
        this.urlList.push(new Link("http://naver.com",true,true))
     }
     
     ngOnInit(){
     }

     getTitle(url:string){
     }


}