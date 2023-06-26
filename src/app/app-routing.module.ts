import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LightComponent } from './light/light.component';

const routes: Routes = [
  {
    path: 'light',
    component: LightComponent
  },
  {
    path: '',
    redirectTo: 'light',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
