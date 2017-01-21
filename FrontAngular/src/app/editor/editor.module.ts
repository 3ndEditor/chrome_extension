import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [EditorRoutingModule],
    exports: [],
    declarations: [EditorComponent],
    providers: [],
})
export class EditorModule { }
