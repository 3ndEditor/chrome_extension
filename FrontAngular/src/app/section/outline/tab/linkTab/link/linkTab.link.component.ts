import { FormsModule } from '@angular/forms';
import { LinkFixed } from './linkFixed';
import { LinkUnfixed } from './linkUnfixed';
import { Link } from './linkA';
import { MockService } from '../mock/mock.service';
import { Component, Provider, OnInit } from '@angular/core';
import { DragulaService, dragula } from 'ng2-dragula/ng2-dragula';


@Component({
    selector:"linkPack",
    templateUrl : 'linkTab.link.component.html', 
    styleUrls:['linkTab.link.component.css'],
    providers:[MockService]
})
export class LinkComponent {
    /**
    * @file linkTab.link.component.ts
    * @author KimTaemin 17/02/08
    * @brief to show Link
    * @see 
    * @todo intersect with server, make method
    */

    // 서버 Json을 받는 리스트 맴버
    listLink : Link[] = [];
    value='';

    // 템플릿에 바인딩할 리스트 맴버
    listLinkFixed : LinkFixed[] = [];
    listLinkUnfixed : LinkUnfixed[] = [];

    constructor(linkService: MockService){
        this.listLink = linkService.getLink();
        
        for(var i = 0; i<this.listLink.length; i++){
            // linkPack은 trushed가 false인 값만 사용합니다.
            if(this.listLink[i].trushed == false){
                //링크가 고정표시일 경우 링크와 ranking값을 listLinkFixed에 담음
                if(this.listLink[i].fixed[0] == true){
                    this.listLinkFixed.push({'link':this.listLink[i],'ranking':this.listLink[i].fixed[1]});
                }
                //링크가 비고정표시일 경우 링크와 ranking값을 listLinkUnfixed에 담음
                if(this.listLink[i].fixed[0] == false){
                    this.listLinkUnfixed.push({'link':this.listLink[i],'ranking':this.listLink[i].fixed[1]});
                }
            }
        }
        
        // ranking에 맞게 고정,비고정 배열 재배치
        this.listLinkFixed.sort(function(a,b){
            return a.ranking < b.ranking ? -1 : a.ranking > b.ranking ? 1 : 0;
        })
        this.listLinkUnfixed.sort(function(a,b){
            return a.ranking < b.ranking ? -1 : a.ranking > b.ranking ? 1 : 0;
        })
    }    

    public consoleEvent(){
        console.log("고정링크"+this.listLinkFixed[0].ranking+this.listLinkFixed[0].link.url+"/"+this.listLinkFixed[1].ranking+this.listLinkFixed[1].link.url+"/"+this.listLinkFixed[2].ranking+this.listLinkFixed[2].link.url+"/"+this.listLinkFixed[3].ranking+this.listLinkFixed[3].link.url+"/");
        console.log("//////////////");
        console.log("비고정링크"+this.listLinkUnfixed[0].ranking+this.listLinkUnfixed[0].link.url+"/"+this.listLinkUnfixed[1].ranking+this.listLinkUnfixed[1].link.url+"/"+this.listLinkUnfixed[2].ranking+this.listLinkUnfixed[2].link.url);
    }
}