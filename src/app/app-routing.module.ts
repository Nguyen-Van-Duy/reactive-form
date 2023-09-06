import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InAppFormComponent } from './in-app-form/in-app-form.component';

const routes: Routes = [
  {path: '', component: InAppFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
