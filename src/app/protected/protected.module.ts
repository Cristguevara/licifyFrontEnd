import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { MainComponent } from './main/main.component';
import {MatButtonModule} from '@angular/material/button';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ModalComponent } from './components/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoadingModalComponent } from './components/loading-modal/loading-modal.component';
import { ApplyProjectComponent } from './pages/apply-project/apply-project.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';


@NgModule({
  declarations: [
    MainComponent,
    ProjectsComponent,
    NewProjectComponent,
    ModalComponent,
    LoadingModalComponent,
    ApplyProjectComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule
  ]
})

export class ProtectedModule { }
