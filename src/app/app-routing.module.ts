import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo: 'apiUnplash/searchImg', pathMatch:'full',
  },
  {
    path:'apiUnplash',
    loadChildren: ()=> import('./components/components.module').then(m=>m.ComponentsModule)
  },
  {
    path:'**',redirectTo: 'apiUnplash/searchImg', pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
