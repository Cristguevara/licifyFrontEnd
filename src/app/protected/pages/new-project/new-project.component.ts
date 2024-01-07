import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { LoadingModalComponent } from '../../components/loading-modal/loading-modal.component';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  @ViewChild('filePicker') filePicker!: ElementRef;

  imagesUrls: string[] = [];
  errors  : boolean = false
  msgError: string = ''


  form:FormGroup =this.fb.group({
    name      : ['',Validators.required],
    startDate : ['',Validators.required],
    endDate   : ['',Validators.required],
    images     : this.fb.array([this.fb.group({
      image: [null,Validators.required],
    })]),
    items     : this.fb.array([this.fb.group({
      name: ['',Validators.required],
      value: ['',Validators.required]
    })])
  })

  getControls() {
    return (this.form.get('items') as FormArray).controls;
  }

  getImages() {
    return (this.form.get('images') as FormArray).value;
  }

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private projectsService: ProjectsService,
    public dialog: MatDialog
     ) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(val=>{
      this.errors=false
    })
  }

  navigate(route:string){
    this.router.navigate([route])
  }

  addNewItemGroup() {
    const add = this.form.get('items') as FormArray;
    add.push(this.fb.group({
      name: ['',Validators.required],
      value: ['',Validators.required]
    }))
  }

  deleteItemGroup(index: number) {
    const add = this.form.get('items') as FormArray;
    add.removeAt(index)
  }

  selectFiles(){
    this.filePicker.nativeElement.click();
  }

  onImagePicked(event: any) {
    const files = event.target?.files;
    if (files) {
      this.imagesUrls = [];
      const imagesControl = this.form.get('images') as FormArray;
      imagesControl.clear()
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagesUrls.push(e.target.result);
        };
        reader.readAsDataURL(files[i]);
        imagesControl.push(this.fb.group({
          image: [files[i],Validators.required],
        }))
      }
    }
  }

  openWarning(): void {
    console.log(this.form.value)
    if(this.form.valid){
      const dialogRef = this.dialog.open(ModalComponent, {
        autoFocus:false,
        restoreFocus:false,
        data: {},
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result === 'Confirmed'){
          this.createProject()
        }
      });
    }else{
      this.msgError = 'Faltan campos por llenar'
      this.errors = true
    }
  }

  createProject(){
    const loadingDialog = this.dialog.open(LoadingModalComponent, {
      autoFocus:false,
      restoreFocus:false,
      data: {},
      disableClose:true
    });
    this.projectsService.createProyect(this.form.value).subscribe(res=>{
      if(res){
        loadingDialog.close()
        loadingDialog.afterClosed().subscribe(res =>{
          this.dialog.open(ModalComponent, {
            autoFocus:false,
            restoreFocus:false,
            data: {type:'success'},
            disableClose:true
          });
          setTimeout(()=>{
            this.dialog.closeAll()
            this.navigate('/')
          },3000)
        })
      }
    })
  }

}
