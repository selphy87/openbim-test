import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerContainerComponent } from './viewer-container/viewer-container.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ViewerRoutingModule } from './viewer-routing.module';



@NgModule({
  declarations: [
    ViewerContainerComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    ViewerRoutingModule
  ]
})
export class ViewerModule { }
