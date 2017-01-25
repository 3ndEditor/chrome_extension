import { linkTabComponent } from '../linkTab/linkTab.component';
import { linkTabModule } from '../linkTab/linkTab.module';
import { linkFrameComponent } from './linkFrame.component';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [linkTabModule],
    exports: [linkFrameComponent],
    declarations: [linkFrameComponent],
    providers: [],
})
export class linkFrameModule { }
