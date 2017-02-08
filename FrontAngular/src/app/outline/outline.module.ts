
import { InvalidUrlPageComponent } from '../invalid-url-page.component';
import { SharedModule } from '../shared/shared.module';



import { TabModule } from '../tab/tab.module';


import { linkFrameModule } from '../linkFrame/linkFrame.module';
import { EditorModule } from '../editor/editor.module';
import { OutlineComponent } from './outline.component';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

@NgModule({
    imports: [EditorModule,SharedModule, linkFrameModule, linkFrameModule, DragulaModule, TabModule],
    exports: [],
    declarations: [OutlineComponent],
    providers: [],
})
export class OutlineModule { }
