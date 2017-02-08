import { SharedModule } from '../shared/shared.module';
import { LoginModule } from './login/login.module';

import { HelpComponent } from './help/help.component';
import { HeaderRoutingModule } from './header-routing.module';

import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';



@NgModule({
    imports: [
        LoginModule,
        SharedModule,
        //  MaterialModule
    ],
    exports: [HeaderComponent],
    declarations: [HeaderComponent, HelpComponent],
    providers: [],
})
export class HeaderModule { }
