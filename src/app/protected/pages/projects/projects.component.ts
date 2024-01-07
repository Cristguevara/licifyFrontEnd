import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ProjectsService } from 'src/app/services/projects.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { LoadingModalComponent } from '../../components/loading-modal/loading-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  builder: boolean = true
  loading: boolean = true

  projectList: any[] = []

  constructor(
    private router: Router,
    private projectsService: ProjectsService,
    private authService: AuthService,
    public dialog: MatDialog
    ) {
      this.builder = this.authService.user.builder
     }

  ngOnInit(): void {
    this.getAllProjects()

  }

  getAllProjects(){
    this.projectsService.getAllProjects().subscribe(res=>{
      this.projectList = res.projects
      if(this.authService.user.builder){
        this.loading = false
      }else{
        this.getUserApplications()
      }
    })
  }

  getUserApplications(){
    this.projectsService.getAllApplications(this.authService.user.email).subscribe(res=>{
      console.log('getAllApplications: ',res)
      let applications = res.applications
      let applicationsIds = applications.map((a:any)=>a=a.proyectId)
      this.projectList = this.projectList.map((p:any) =>{
        if(applicationsIds.includes(p._id)){
          return {...p, applyed:true}
        }else{
          return {...p, applyed:false}
        }
      })
      //console.log(this.projectList)
      this.loading = false
    })
  }

  navigate(route:string){
    this.router.navigate([route])
  }

  openWarning(id:string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      autoFocus:false,
      restoreFocus:false,
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'Confirmed'){
        this.deleteProject(id)
      }
    });
  }

  deleteProject(id:string){
    console.log(id)
    this.dialog.open(LoadingModalComponent, {
      autoFocus:false,
      restoreFocus:false,
      data: {},
      disableClose:true
    });
    this.projectsService.deleteProyect(id).subscribe(res=>{
      if(res){
        this.dialog.closeAll()
        this.getAllProjects()
      }
    })
  }

  openProjectApplication(id:string){
    this.router.navigate(['/aplicar-proyecto/',id])
  }

  openApplication(id:string){
    this.router.navigate(['/detalles-aplicacion/',id])
  }

  openDetailsProject(id:string){
    this.router.navigate(['/detalles-proyecto/',id])
  }

}
