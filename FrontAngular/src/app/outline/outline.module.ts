import { SharedModule } from '../shared/shared.module';
import { KeymapProvider } from '../keymap/keymap.provider';
import { KeymapDirective } from '../keymap/keymap.directive';
import { OutlineRoutingModule } from './outline-routing.module';

import { linkFrameModule } from '../linkFrame/linkFrame.module';
import { EditorModule } from '../editor/editor.module';
import { OutlineComponent } from './outline.component';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

@NgModule({
    imports: [EditorModule, SharedModule, linkFrameModule, OutlineRoutingModule, DragulaModule],
    exports: [],
    declarations: [OutlineComponent],
    providers: [],
})
export class OutlineModule { }
