import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { LoadingModalComponent } from '../../components/loading-modal/loading-modal.component';
import { AuthService } from 'src/app/auth/services/auth.service';

interface Project {
  name: string,
  startDate:string,
  endDate:string,
  images:{url:string,id:string}[],
  items: {name:string,value:string}[]
}

interface ItemsApply {
  name  : string,
  value : number,
  newValue  :number,
}

export interface ApplicationInfo {
  proyectId  : string,
  user : string,
  items  :ItemsApply[],
}

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projectData : Project | undefined = undefined
  items : ItemsApply[] = []
  id:string = ''
  loading : boolean = true
  builder : boolean = true
  aplications : any[] = []

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService
    ) {
      const startPath:string = this.route.snapshot.url[0].path
      if(this.authService.user.builder && startPath==='detalles-aplicacion'){
        this.navigate('/')
      }
      if(!this.authService.user.builder && startPath==='detalles-proyecto'){
        this.navigate('/')
      }
      this.builder = this.authService.user.builder
     }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.projectsService.getProjectById(this.id).subscribe(res=>{
      console.log(res)
      this.projectData = res.project
      if(this.builder){
        this.getProjectApplication()
      }else{
        this.getUserApplication()
      }
    })
  }

  getProjectApplication(){
    this.projectsService.getProjectApplications(this.id).subscribe(res=>{
      console.log('getProjectApplications: ',res)
      if(res.ok){
        this.aplications = res.applications
        this.loading = false
      }
    })
  }

  getUserApplication(){
    this.projectsService.getUserAplication(this.id, this.authService.user.email).subscribe(res=>{
      console.log('getUserAplication: ',res)
      if(res.ok){
        this.items = res.application[0]?.items
        this.loading = false
      }
    })
  }

  navigate(route:string){
    this.router.navigate([route])
  }

  openWarning(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      autoFocus:false,
      restoreFocus:false,
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'Confirmed'){

      }
    });
  }

}
