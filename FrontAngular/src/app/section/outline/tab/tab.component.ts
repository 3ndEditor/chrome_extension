import { Link } from './linkTab/link/link';
import { LinkSenderService } from '../../../shared/link-sender.service';
import { MockService } from '../../../shared/mock/mock.service';
import { LinkComponent } from './linkTab/link/linkTab.link.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { animate, Component, EventEmitter, Input, OnInit, Output, state, style, transition, trigger } from '@angular/core';

@Component({
    selector: 'tab',
    templateUrl: 'tab.component.html',
    styleUrls:['tab.component.css'],
    animations: [
        trigger(
            'showLinks',
            [
                state('false', style({ height: '0%'})),
                state('true', style({ height: '99%' })),
                transition('false <=> true', animate(500))
            ]
        )
    ]
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

    @Output() driveWindowOpen = new EventEmitter();

    // 부모 컴포넌트 바인딩을 통해 usage의 값을 정확히 해야함.
    @Input() usage : string;
    private isClicked : boolean[] = [];
    private links : Link[] = [];
    private folder : any[] = [];
    private showLinks : string = "false";

    constructor(
        private mockService : MockService,
        private linkSendService : LinkSenderService){
            this.links = mockService.getLinks();

            for(var i=0; i < this.links.length; i++){
                if(this.links[i].GROUP[0] == )

                // 그룹의 이름을 담을 변수가 필요.
            }


            this.folder[]

            this.isClicked[0] = false;
            console.log(this.isClicked[0]);

            // folder의 갯수만큼 isClicked변수를 생성.
            for(var i=0; i<this.links.length; i++){
                this.isClicked[i] = false;
            }

            console.log(this.links[0].GROUP + ", " + this.links[0].URL);
        }

    openWindow(){
        this.driveWindowOpen.emit();
    }

    ngOnInit(){

    }

    // url을 LinkSenderService를 통해 iframe으로 전달함.
    sendURL(url:string){
        this.linkSendService.sendAction(url);
    }

    openFolder(links:Link[], i:number){
        this.isClicked[i] = true;
        this.links = links;
        this.showLinks = 'true';
        console.log(this.links[0].GROUP + ",  " + this.links[0].URL + ",  " + this.isClicked[0] + ",  " + this.isClicked[1] + ",  " + this.isClicked[2] + ",  " + this.isClicked[3] + ",  " + i);
    }
}