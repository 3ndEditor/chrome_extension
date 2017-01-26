import { LoginModule } from '../auth-guard/login/login.module';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [LoginModule],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [],
})
export class HeaderModule { }
