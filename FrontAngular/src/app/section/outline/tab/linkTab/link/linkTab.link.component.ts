import { LinkSenderService } from '../../../../../shared/link-sender.service';
import { Links } from './links';
import { FormsModule } from '@angular/forms';
import { Link } from './link';
import { Component, EventEmitter, Input, OnInit, Output, Provider } from '@angular/core';
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
    title : string;

    constructor(
        private linkSendService : LinkSenderService){
            // console.log("하위컴포넌트에 값이들어왔는가" + this.linkList[0].url);
            // this.linkListToBind = this.linkList;
            // console.log("하위컴포넌트에 값이들어왔니" + this.linkList[0].url);
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