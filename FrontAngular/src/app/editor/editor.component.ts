import { EditorModule } from './editor.module';
import { Component, ElementRef, OnInit, Renderer } from '@angular/core';


//head에 선언된 medium_editor 자바스크립트를 역참조한다.
declare var MediumEditor: any;


@Component({
    moduleId: 'EditorModule',
    selector: 'editor',
    templateUrl: 'editor.component.html',
    styleUrls: ['editor.component.css']
})

// 에디터 컴포넌트 부분으로 역참조한 에디터변수를 가져와서 실제 컴포넌트의 태그에 적용을 시킨다.
export class EditorComponent implements OnInit {
    private editor;
    constructor(public el: ElementRef, public renderer: Renderer) {
        
        this.editor = new MediumEditor(renderer.selectRootElement(el.nativeElement), {
            // 에디터 옵션 부여 객체  // 
            activeButtonClass: false,
            // 개행불가 기능
            disableReturn: false,
            // 수정불가 기능
            disableEditing: false,
            // 문서 작성시 커서 안보임 기능
            targetBlank: true,
            // 버튼 레이블 폰트설정(?)
            buttonLabels: false,
            // 미확인 기본 옵션
            allowMultiParagraphSelection: true,
            contentWindow: window,
            delay: 0,
            disableDoubleReturn: false,
            disableExtraSpaces: true,
            elementsContainer: false,
            extensions: {},
            ownerDocument: document,
            spellcheck: true,

            // 플레이스 홀더 기능 
            placeholder: {
                text: 'Type your text',
                hideOnClick: true
            },

            //  에디터 키보드 매핑
            keyboardCommands: {
                commands: [
                    {
                        command: 'bold',
                        key: 'b',
                        meta: true,
                        shift: false
                    },
                    {
                        command: 'italic',
                        key: 'i',
                        meta: true,
                        shift: false
                    },
                    {
                        command: 'underline',
                        key: 'u',
                        meta: true,
                        shift: false
                    }
                ],
            },
            //  툴바 옵션
            toolbar: {
                allowMultiParagraphSelection: true,
                buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
                diffLeft: 0,
                diffTop: -10,
                firstButtonClass: 'medium-editor-button-first',
                lastButtonClass: 'medium-editor-button-last',
                relativeContainer: null,
                standardizeSelectionStart: false,
                static: false,

                /* options which only apply when static is true */
                align: 'center',
                sticky: true,
                updateOnEmptySelection: true
            },
            //붙여 넣기 옵션
            paste: {
                /* This example includes the default options for paste,
                   if nothing is passed this is what it used */
                forcePlainText: true,
                cleanPastedHTML: true,
                cleanReplacements: [],
                cleanAttrs: ['class', 'style', 'dir'],
                cleanTags: ['meta'],
                unwrapTags: []
            }
        });


        // 에디터에 대한 커스텀 이벤트 리스너 추가 
        this.el.nativeElement.addEventListener('drop', ($event:DragEvent)=>{
            $event.preventDefault();
            var data = $event.dataTransfer.getData
        } )


    }

    ngOnInit() { }
}