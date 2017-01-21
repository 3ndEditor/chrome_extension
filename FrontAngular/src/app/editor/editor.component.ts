import { EditorModule } from './editor.module';
import { Component, ElementRef, OnInit, Renderer } from '@angular/core';


//CDN으로 가져온 medium_editor 자바스크립트를 역참조한다.
declare var MediumEditor:any;


@Component({
    moduleId: 'EditorModule',
    selector: 'editor',
    templateUrl: 'editor.component.html'
})

// 에디터 컴포넌트 부분으로 역참조한 에디터변수를 가져와서 실제 컴포넌트의 태그에 적용을 시킨다.
export class EditorComponent implements OnInit {
    private edit;
    constructor(public el:ElementRef,public renderer:Renderer) {
        this.edit = new MediumEditor(renderer.selectRootElement(el.nativeElement),{
            

        });


     }

    ngOnInit() { }
}