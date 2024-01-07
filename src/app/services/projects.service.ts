import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, of, tap, Observable } from 'rxjs';

interface Project {
  name: string,
  startDate:string,
  endDate:string,
  images:{url:string,id:string}[],
  items: {name:string,value:string}[]
}

interface AllProjectsResponse {
  res: boolean,
  projects:Project[]
}

interface Application{
  projectId:string,
  applicant:string
  items: {name:string,value:number,newValue:number}[]
}

interface AllApplicationsResponse {
  ok: boolean,
  applications:Application[]
}


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private baseUrl:string=environment.baseUrl

  constructor(private http:HttpClient) { }

  getAllProjects(){
    const url  = `${this.baseUrl}/projects`
    return this.http.get<AllProjectsResponse>(url)
  }

  getProjectById(id:string){
    const url  = `${this.baseUrl}/projects`
    return this.http.post<{res: boolean,project:Project}>(url,{id:id})
  }

  createProyect(info:any){

    const images = info.images
    const projectInfo = {
      name:info.name,
      startDate:info.startDate,
      endDate:info.endDate ,
      items:info.items
    }

    const url  = `${this.baseUrl}/projects/new`

    const formData = new FormData()
    formData.append('projectInfo',JSON.stringify(projectInfo))
    images.map((img:{image:File})=>{
      formData.append('images',img.image)
    })

    return this.http.post<any>(url, formData).pipe(
      map( res => res.ok ),
      catchError( err => of(err.error.msg) )
    )
  }

  deleteProyect(id:string){

    const body = {id}

    const url  = `${this.baseUrl}/projects/delete`

    return this.http.post<any>(url, body).pipe(
      map( res => res.ok ),
      catchError( err => of(err.error.msg) )
    )
  }

  getAllApplications(email:string){
    const url  = `${this.baseUrl}/projects/applications`
    return this.http.post<AllApplicationsResponse>(url,{email:email})
  }

  createApplication(info:any){

    const url  = `${this.baseUrl}/projects/newApplication`

    return this.http.post<any>(url, info).pipe(
      map( res => res.ok ),
      catchError( err => of(err.error.msg) )
    )

  }

  getUserAplication(id:string,email:string){
    const url  = `${this.baseUrl}/projects/userAplication`
    return this.http.post<{
      ok: boolean,
      application:Application[]
    }>(url,{id:id,email:email})
  }

  getProjectApplications(id:string){
    const url  = `${this.baseUrl}/projects/proyectApplications`
    return this.http.post<AllApplicationsResponse>(url,{id:id})
  }
}
