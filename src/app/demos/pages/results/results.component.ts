import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from '../../components/feedback/feedback.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  form:FormGroup=this.fb.group({
    first: ['', Validators.required],
    second: ['', Validators.required],
    third: ['', Validators.required]
  })

  disabled:boolean=false
  score:number=0

  checkFirst:boolean=false
  checkSecond:boolean=false
  checkThird:boolean=false

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
    ) {

  }

  ngOnInit(): void {
  }

  get third(){
    return this.form.get('third')
  }

  answerQuestions(){
    if(this.form.value.first==='1'){
      this.score+=5
      this.checkFirst=true
    }
    if(this.form.value.second==='option2'){
      this.score+=5
      this.checkSecond=true
    }
    if(this.form.value.third.toLowerCase()==='yellow'){
      this.score+=5
      this.checkThird=true
    }
    this.disabled=true
    this.third?.disable()
  }

  openFeedback(value:number){
    let textFeedback=''
    if(value===1){
      textFeedback='El pug es el perro con ojos más grandes.'
    }else if(value===2){
      textFeedback='El color rojo en inglés es RED.'
    }else if(value===3){
      textFeedback='El color amarillo en inglés es YELLOW.'
    }
    this.dialog.open(FeedbackComponent, {
      data: textFeedback,
    });
  }

}
