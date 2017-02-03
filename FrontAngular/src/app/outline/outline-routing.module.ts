import { LoginComponent } from '../header/login/login.component';
import { HeaderComponent } from '../header/header.component';
import { EditorComponent } from '../editor/editor.component';
import { AuthGuard } from '../auth-guard/auth-guard.service';
import { CanDeactivateGuard } from '../auth-guard/can-deactivate-guard.service';
import { OutlineComponent } from './outline.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'index',
    component: OutlineComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: 'login',
        component:LoginComponent

      },
      {
        path:'editor',
        component:HeaderComponent
      }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutlineRoutingModule { }

export const routedComponents = [OutlineComponent];