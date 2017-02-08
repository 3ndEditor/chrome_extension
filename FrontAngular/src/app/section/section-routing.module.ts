import { HeaderComponent } from '../header/header.component';
import { UserResolveService } from '../user/user-resolve.service';
import { OutlineComponent } from '../outline/outline.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [
//     {
//         path: '11',
//         component: HeaderComponent
//     }
// ];

@NgModule({
    imports: [RouterModule],
    exports: [RouterModule],
})
export class SectionRoutingModule { }