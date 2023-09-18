import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnplashImgComponent } from './unplash-img/unplash-img.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'searchImg', component:UnplashImgComponent
      },
      {
        path:'**', redirectTo:'searchImg',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
