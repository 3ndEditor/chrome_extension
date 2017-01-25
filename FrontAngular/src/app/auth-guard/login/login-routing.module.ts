import { LoginComponent } from './login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    // 라우트 기능을 불러오는 것은 앱 컴포넌트에서만 가능하다. 즉 화면을 아예 바꾸고자 할때 필요한것이다 
//   { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule { }

export const routedComponents = [LoginComponent];