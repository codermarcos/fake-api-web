import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MainHeaderComponent } from './main-header';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { RouterHeaderComponent } from './router-header/router-header.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  declarations: [MainHeaderComponent, MainSidebarComponent, RouterHeaderComponent],
  exports: [MainHeaderComponent, MainSidebarComponent, RouterHeaderComponent]
})
export class ComponentsModule { }
