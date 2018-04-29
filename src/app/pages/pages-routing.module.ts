import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterComponent } from './router';
import { HomeComponent } from './home';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'router',
    component: RouterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
