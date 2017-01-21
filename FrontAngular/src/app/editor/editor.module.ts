import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [EditorRoutingModule],
    exports: [EditorComponent],
    // 상위 모듈에 노출시키려면 익스포트시켜야 한다.
    declarations: [EditorComponent],
    providers: [],
})
export class EditorModule { }
