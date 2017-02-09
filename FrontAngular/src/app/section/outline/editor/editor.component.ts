import { EditorModule } from './editor.module';
import { Component, ElementRef, OnInit, Renderer,Input } from '@angular/core';
import * as UsingEditor from 'medium-editor';

//head에 선언된 medium_editor 자바스크립트를 역참조한다.


@Component({
    moduleId: 'EditorModule',
    selector: 'editor',
    templateUrl: 'editor.component.html',
    styleUrls: ['editor.component.css']
})

// 에디터 컴포넌트 부분으로 역참조한 에디터변수를 가져와서 실제 컴포넌트의 태그에 적용을 시킨다.
export class EditorComponent implements OnInit {
    @Input() routeData : string;
    editorOptions: MediumEditor.CoreOptions = {
        activeButtonClass: 'medium-editor-button-active',
        // 에디터 사용유무
        disableEditing: false,
        // 툴바 옵션
        toolbar: {
            /* These are the default options for the toolbar,
               if nothing is passed this is what is used */
            allowMultiParagraphSelection: true,
            // 버튼 옵션
            buttons: [
                'bold',
                'italic',
                'underline',
                'anchor',
                'h2', 'h3',
                'quote', {
                    name: 'h1',
                    action: 'append-h2',
                    aria: 'header type 1',
                    tagNames: ['h2'],
                    contentDefault: '<b>H1</b>',
                    classList: ['custom-class-h1'],
                    attrs: {
                        'data-custom-attr': 'attr-value-h1'
                    }
                },

            ],

            diffLeft: 0,
            diffTop: -10,
            firstButtonClass: 'medium-editor-button-first',
            lastButtonClass: 'medium-editor-button-last',
            relativeContainer: null,
            standardizeSelectionStart: false,
            static: false,
            /* options which only apply when static is true */
            align: 'center',
            sticky: false,
            updateOnEmptySelection: false
        },
        placeholder: {
            /* This example includes the default options for placeholder,
               if nothing is passed this is what it used */
            text: 'Type your text',
            hideOnClick: true
        },
        paste: {
            /* This example includes the default options for paste,
               if nothing is passed this is what it used */
            forcePlainText: true,
            cleanPastedHTML: false,
            cleanReplacements: [],
            cleanAttrs: ['class', 'style', 'dir'],
            cleanTags: ['meta'],
            unwrapTags: []
        },
        keyboardCommands: {
            /* This example includes the default options for keyboardCommands,
               if nothing is passed this is what it used */
            commands: [
                {
                    command: 'bold',
                    key: 'B',
                    meta: true,
                    shift: false,
                    alt: false
                },
                {
                    command: 'italic',
                    key: 'I',
                    meta: true,
                    shift: false,
                    alt: false
                },
                {
                    command: 'underline',
                    key: 'U',
                    meta: true,
                    shift: false,
                    alt: false
                }
            ],
        }


    }



    constructor(public el: ElementRef, public renderer: Renderer) {
        //  에디터 생성!!
        // @types 에 타입을 지정해준다. 다만 사용법이 다 달라서 해당 내부를 뜯어봐야 어떻게 가져다 쓸지 보인다.
        new UsingEditor(renderer.selectRootElement(el.nativeElement), this.editorOptions);




        // 에디터에 대한 커스텀 이벤트 리스너 추가 
        this.el.nativeElement.addEventListener('drop', ($event: DragEvent) => {
            $event.preventDefault();
            var data = $event.dataTransfer.getData
        })
    }

    ngOnInit() { }
}