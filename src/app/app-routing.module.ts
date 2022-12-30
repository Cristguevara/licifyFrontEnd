import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Componentes',
    loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule)
  },
  {
    path: '**', redirectTo: 'Componentes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
