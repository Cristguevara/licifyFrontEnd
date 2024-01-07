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
  value : string,
  newValue  :string,
}

export interface ApplicationInfo {
  proyectId  : string,
  user : string,
  items  :ItemsApply[],
}

@Component({
  selector: 'app-apply-project',
  templateUrl: './apply-project.component.html',
  styleUrls: ['./apply-project.component.scss']
})
export class ApplyProjectComponent implements OnInit {

  projectData : Project | undefined = undefined
  items : ItemsApply[] = []
  id:string = ''
  loading : boolean = true

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.projectsService.getProjectById(this.route.snapshot.params['id']).subscribe(res=>{
      console.log(res)
      this.projectData = res.project
      this.items = this.projectData.items.map(i=>{
        return {
        name:i.name,
        value:i.value ,
        newValue: '',
        }
      })
      this.loading = false
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
        this.createapplication()
      }
    });
  }

  createapplication(){
    const body = {
      proyectId: this.id,
      applicant: this.authService.user.email,
      items:this.items
    }
    //console.log(body)
    const loadingDialog = this.dialog.open(LoadingModalComponent, {
      autoFocus:false,
      restoreFocus:false,
      data: {},
      disableClose:true
    });

    this.projectsService.createApplication(body).subscribe(res=>{
      if(res){
        loadingDialog.close()
        loadingDialog.afterClosed().subscribe(res =>{
          const successDialog = this.dialog.open(ModalComponent, {
            autoFocus:false,
            restoreFocus:false,
            data: {type:'success'},
            disableClose:true
          });
          setTimeout(()=>{
            successDialog.close()
            this.navigate('/')
          },3000)
        })
      }
    })
  }

}
