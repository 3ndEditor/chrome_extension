import { LinkSenderService } from '../../../../../shared/link-sender.service';
import { Links } from './links';
import { FormsModule } from '@angular/forms';
import { Link } from './link';
<<<<<<< HEAD
import { Component, EventEmitter, Input, OnInit, Output, Provider } from '@angular/core';
=======
import { MockService } from '../mock/mock.service';
import { Component, EventEmitter, OnInit, Output, Provider } from '@angular/core';
>>>>>>> 98c6d493650dadb093b7de09defab61c21e22d29
import { DragulaService, dragula } from 'ng2-dragula/ng2-dragula';


@Component({
    selector:"linkPack",
    templateUrl : 'linkTab.link.component.html', 
    styleUrls:['linkTab.link.component.css'],
})
export class LinkComponent {
    /**
    * @file linkTab.link.component.ts
    * @author KimTaemin 17/02/08
    * @brief to show Link
    * @see 
    * @todo intersect with server, make method
    */

    // 상위컴포넌트로부터 링크를 받는 리스트 맴버
    @Input() linkList : Links;
    linkListToBind : Links;
    // 템플릿에 binding할 리스트 맴버
    // listLinkFixed : Link[];
    // listLinkUnfixed : Link[];
    title : string;

    constructor(
        private linkSendService : LinkSenderService){
            console.log("하위컴포넌트에 값이들어왔는가" + this.linkList[0].url);
            this.linkListToBind = this.linkList;
            console.log("하위컴포넌트에 값이들어왔니" + this.linkList[0].url);
        // 목객체의 정보를 받음.
        // this.listLinks = linkService.getLink();
        // this.listLinkFixed = this.listLinks[0].links;
        // this.listLinkUnfixed = this.listLinks[1].links;

    }    

    public consoleEvent(){
        // console.log("고정링크"+this.listLinkFixed[0].fixed[1]+this.listLinkFixed[0].url+"/"+this.listLinkFixed[1].fixed[1]+this.listLinkFixed[1].url);
        console.log("//////////////");
        // console.log("비고정링크"+this.listLinkUnfixed[0].fixed[1]+this.listLinkUnfixed[0].url+"/"+this.listLinkFixed[1].fixed[1]+this.listLinkFixed[1].url);
    }

    getTitle(url:string){
        
    }

    // openURL(url:string){
    //     console.log(url+"을 로드합니다.")
    // }

    // url을 LinkSenderService를 통해 iframe으로 전달함.
    sendURL(url:string){
        this.linkSendService.sendAction(url);
    }
}