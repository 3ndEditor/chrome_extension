import { linkFrameModule } from '../linkFrame/linkFrame.module';
import { CommonModule } from '@angular/common';
import { EditorModule } from '../editor/editor.module';
import { OutlineComponent } from './outline.component';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [EditorModule,CommonModule,linkFrameModule],
    exports: [OutlineComponent],
    declarations: [OutlineComponent],
    providers: [],
})
export class OutlineModule { }
