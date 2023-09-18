import { NgModule } from '@angular/core';

import { ComponentsRoutingModule } from './components-routing.module';
import { UnplashImgComponent } from './unplash-img/unplash-img.component';


@NgModule({
  declarations: [
    UnplashImgComponent
  ],
  imports: [
    ComponentsRoutingModule,
  ]
})
export class ComponentsModule { }
