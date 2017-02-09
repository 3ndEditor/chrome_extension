
import { AuthGuard } from './auth-guard/auth-guard.service';
import { CanDeactivateGuard } from './auth-guard/can-deactivate-guard.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    // path: 'help',
    // component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule { }

