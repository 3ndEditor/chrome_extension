import { OutlineRoutingModule } from './outline-routing.module';
import { linkTabModule } from '../linkTab/linkTab.module';
import { linkFrameModule } from '../linkFrame/linkFrame.module';
import { CommonModule } from '@angular/common';
import { EditorModule } from '../editor/editor.module';
import { OutlineComponent } from './outline.component';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [EditorModule,CommonModule,linkFrameModule,linkTabModule,OutlineRoutingModule],
    exports: [],
    declarations: [OutlineComponent],
    providers: [],
})
export class OutlineModule { }
