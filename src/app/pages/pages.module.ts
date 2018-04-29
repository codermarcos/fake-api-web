import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { ComponentsModule } from '../components/index';
import { RouterComponent } from './router';
import { HomeComponent } from './home';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule
  ],
  declarations: [HomeComponent, RouterComponent]
})
export class PagesModule { }
