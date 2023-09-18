import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { UnplashImgComponent } from './unplash-img/unplash-img.component';


@NgModule({
  declarations: [
    UnplashImgComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
  ]
})
export class ComponentsModule { }
