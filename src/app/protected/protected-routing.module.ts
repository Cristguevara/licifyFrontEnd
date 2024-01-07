import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { ApplyProjectComponent } from './pages/apply-project/apply-project.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

const routes: Routes = [
  {
    path      : '',
    component : MainComponent,
    children  : [
      {path:'', component: ProjectsComponent},
      {path:'nuevo-proyecto', component: NewProjectComponent},
      {path:'aplicar-proyecto/:id', component: ApplyProjectComponent},
      {path:'detalles-proyecto/:id', component: ProjectDetailsComponent},
      {path:'detalles-aplicacion/:id', component: ProjectDetailsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
