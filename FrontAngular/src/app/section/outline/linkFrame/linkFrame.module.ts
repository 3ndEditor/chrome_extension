import { CommonModule } from '@angular/common';
import { Jsonp } from '@angular/http';
import { LinkFrameService } from './linkFrame.service.promise';
import { linkFrameComponent } from './linkFrame.component';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';


@NgModule({
    imports: [CommonModule,DragulaModule],
    exports: [linkFrameComponent],
    declarations: [linkFrameComponent],
    providers: [LinkFrameService],
})
export class linkFrameModule { }
