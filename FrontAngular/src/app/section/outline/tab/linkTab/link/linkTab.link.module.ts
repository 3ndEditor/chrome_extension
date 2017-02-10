import { SharedModule } from '../../../../../shared/shared.module';
import { LinkComponent } from './linkTab.link.component';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

@NgModule({
    imports: [DragulaModule, SharedModule],
    exports: [LinkComponent],
    declarations: [LinkComponent],
    providers: [],
})
export class LinkModule { }
