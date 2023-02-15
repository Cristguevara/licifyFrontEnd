import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateTokenGuard } from './guards/validate-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'Componentes',
    loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule),
    // canActivate: [ValidateTokenGuard],
    // canLoad: [ValidateTokenGuard]
  },
  {
    //path: '**', redirectTo: 'Componentes'
    path: '**', redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
