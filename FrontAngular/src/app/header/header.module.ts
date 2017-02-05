import { SharedModule } from '../shared/shared.module';
import { KeymapDirective } from '../keymap/keymap.directive';
import { LoginModule } from './login/login.module';

import { HelpComponent } from './help/help.component';
import { HeaderRoutingModule } from './header-routing.module';

import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [LoginModule, SharedModule],
    exports: [HeaderComponent],
    declarations: [HeaderComponent, HelpComponent],
    providers: [],
})
export class HeaderModule { }
