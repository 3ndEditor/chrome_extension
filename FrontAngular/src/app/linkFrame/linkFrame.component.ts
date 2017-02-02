import { Observable } from 'rxjs/Observable';

import { LinkFrameService } from './linkFrame.service.promise';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
    animate,
    Component,
    ElementRef,
    OnInit,
    Renderer,
    state,
    style,
    transition,
    trigger,
    ViewChild
} from '@angular/core';

import { DragulaService,dragula } from 'ng2-dragula/ng2-dragula';

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

  @ViewChild('somevar') iframeCmp : ElementRef;
  @ViewChild('makeit') makeit: ElementRef;
  test: string;
  result: Observable<string[]>;
  private state: string = 'close';
  private trustResourceURL: SafeResourceUrl;
  private linkUrl: string = '';
  constructor(private _sanitizer: DomSanitizer, private connectService: LinkFrameService,private rd : Renderer,
  private dragulaService:DragulaService) {
    let defaultUrl = "http://www.tistory.com/";

    this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(defaultUrl);
    

    
  }

  onEnter(inputUrl: string) {
    this.linkUrl = inputUrl;
    this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.linkUrl);

  }

  ngOnInit() {

  }

  private menuState: string = 'in';

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  testtt() {
    this.test = "first-bag";
    console.log(this.iframeCmp) ;
    let drake = dragula([this.iframeCmp,this.makeit]);
    // this.dragulaService.add("first-bag",drake);
    console.log(drake);
    
  }

  ngAfterViewInit() {
  }

}