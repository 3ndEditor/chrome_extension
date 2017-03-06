import { LinkSenderService } from '../../../shared/link-sender.service';
import { Observable } from 'rxjs/Observable';

import { LinkFrameService } from './linkFrame.service.promise';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import {
  animate,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer,
  state,
  style,
  transition,
  trigger,
  ViewChild
} from '@angular/core';

import { DragulaService, dragula } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'linkFrame',
  templateUrl: 'linkFrame.component.html',
  styleUrls: ['linkFrame.component.css'],
  providers: [LinkFrameService],
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
  @Input() iframeHeight: string;
  @Input() iframeOpacity: number;
  result: Observable<string[]>;
  private state: string = 'close';

  //  sanitization 을 통과한 url을 만들기 위한 변수
  private trustResourceURL: SafeResourceUrl;
  private linkUrl: string = '';
  private urlChecker : string;

  constructor(private _sanitizer: DomSanitizer, private connectService: LinkFrameService, private rd: Renderer,
    private dragulaService: DragulaService, private linkSendService : LinkSenderService) {

    // 맨 처음 띄워줄 화면
    let defaultUrl = "http://www.tistory.com/";
    this.urlChecker = defaultUrl;

    // sanitization 을 통과해야 angular app 에서 쓸 수 있다.
    this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(defaultUrl);
    

  }

  // iframe의 url을 바꾼다.
  onEnter(inputUrl: string) {
    this.linkUrl = inputUrl;    
    var urlPattern = new RegExp('^(?:https?):\/\/');
    if (urlPattern.test(inputUrl)) {
      this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.linkUrl);
    } else {
      this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl("http://"+this.linkUrl);
    }
  }

  ngOnInit() {
  }


  private menuState: string = 'in';

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }


  // this.trustHtml= this._sanitizer.bypassSecurityTrustHtml(
  // this.rd.selectRootElement(this.iframeCmp.nativeElement).contentWindow.postMessage('','*'));
  // let drake = dragula([this.trustHtml,this.makeit.nativeElement]);
  //  iframe 내부로 접근하는 방법은 현재 막혀 있다. 보안 문제를 더 공부하고 도전해야 겠다.


  ngAfterViewInit() { }
  
  ngAfterContentChecked() {
    // console.log(this.linkSendService.sendURL);
    if(this.urlChecker !== this.linkSendService.sendURL){
      var urlPattern = new RegExp('^(?:https?):\/\/');
      console.log(this.linkSendService.sendURL);
      this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl("http://"+this.linkSendService.sendURL);
      this.urlChecker = this.linkSendService.sendURL;
    }
  }
}