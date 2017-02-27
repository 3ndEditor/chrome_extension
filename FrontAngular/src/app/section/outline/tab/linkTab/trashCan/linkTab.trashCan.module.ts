import { ShareModule } from '../../editorTab/share/editorTab.share.module';
import { DragulaModule } from 'ng2-dragula/components/dragular.module';
import { TrashCanComponent } from './linkTab.trashCan.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [DragulaModule, ShareModule],
    exports: [TrashCanComponent],
    declarations: [TrashCanComponent],
    providers: [],
})
export class TrashCanModule { }
