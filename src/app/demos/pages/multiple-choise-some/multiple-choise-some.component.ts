import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from '../../components/feedback/feedback.component';

@Component({
  selector: 'app-multiple-choise-some',
  templateUrl: './multiple-choise-some.component.html',
  styleUrls: ['./multiple-choise-some.component.scss']
})
export class MultipleChoiseSomeComponent implements OnInit {

  wrong01:boolean=false
  good01:boolean=false
  wrong02:boolean=false
  good02:boolean=false
  wrong03:boolean=false
  good03:boolean=false
  wrong04:boolean=false
  good04:boolean=false

  form:FormGroup=this.fb.group({
    first:['',Validators.required],
    second:['',Validators.required],
    third:['',Validators.required],
    fourth:['',Validators.required],
  })

  disableQuestions:boolean=false

  constructor(private fb:FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFeedback(id:number){
    let data={
      title:'',
      text:''
    }
    if(id===1){
      data.title='Ejercicio A'
      data.text='2+2 es igual a 4'
    }else if(id===2){
      data.title='Ejercicio B'
      data.text='4+6 es igual a 10'
    }else if(id===3){
      data.title='Ejercicio C'
      data.text='3+2 es igual a 5'
    }else if(id===4){
      data.title='Ejercicio D'
      data.text='7+1 es igual a 8'
    }

    this.dialog.open(FeedbackComponent, {
      data: data,
      panelClass: 'custom-dialog-container'
    });

  }

  checkAnswers(){
    this.disableQuestions=true

    if(this.form.value.first==="4"){
      this.good01=true
    }else{
      this.wrong01=true
    }

    if(this.form.value.second==="2"){
      this.good02=true
    }else{
      this.wrong02=true
    }

    if(this.form.value.third==="4"){
      this.good03=true
    }else{
      this.wrong03=true
    }

    if(this.form.value.fourth==="3"){
      this.good04=true
    }else{
      this.wrong04=true
    }
  }

}
