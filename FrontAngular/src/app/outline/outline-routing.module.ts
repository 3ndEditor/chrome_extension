import { OutlineComponent } from './outline.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'index', component: OutlineComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutlineRoutingModule { }

export const routedComponents = [OutlineComponent];