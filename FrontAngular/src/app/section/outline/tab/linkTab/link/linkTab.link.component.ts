import { LinkFixed } from './linkFixed';
import { LinkUnfixed } from './linkUnfixed';
import { Link } from './linkA';
import { MockService } from '../mock/mock.service';
import { Component, Provider } from '@angular/core';


@Component({
    selector:"linkPack",
    templateUrl : 'linkTab.link.component.html', 
    styleUrls:['linkTab.link.component.css'],
    providers:[MockService]
})
export class LinkComponent {

    listLink : Link[] = [];

    listLinkFixed : LinkFixed[] = [];
    listLinkUnfixed : LinkUnfixed[] = [];

    constructor(linkService: MockService){
        this.listLink = linkService.getLink();
        
        for(var i = 0; i<this.listLink.length; i++){
            //링크가 고정표시일 경우 링크와 ranking값을 listLinkFixed에 담음
            if(this.listLink[i].fixed[0] == true){
                this.listLinkFixed.push({'link':this.listLink[i],'ranking':this.listLink[i].fixed[1]});
            }
            //링크가 비고정표시일 경우 링크와 ranking값을 listLinkUnfixed에 담음
            if(this.listLink[i].fixed[0] == false){
                this.listLinkUnfixed.push({'link':this.listLink[i],'ranking':this.listLink[i].fixed[1]});
            }
        }
        
        // ranking에 맞게 고정,비고정 배열 재배치
        this.listLinkFixed.sort(function(a,b){
            return a.ranking > b.ranking ? -1 : a.ranking < b.ranking ? 1 : 0;
        })
        this.listLinkUnfixed.sort(function(a,b){
            return a.ranking > b.ranking ? -1 : a.ranking < b.ranking ? 1 : 0;
        })
    }    
}