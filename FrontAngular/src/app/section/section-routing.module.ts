import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//해당 라우트 정보는 app-routing.module.ts 에 기술되어있다.
@NgModule({
    imports: [RouterModule],
    exports: [RouterModule],
})
export class SectionRoutingModule { }