import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from '../../components/feedback/feedback.component';

@Component({
  selector: 'app-multiple-choise-images',
  templateUrl: './multiple-choise-images.component.html',
  styleUrls: ['./multiple-choise-images.component.scss']
})
export class MultipleChoiseImagesComponent implements OnInit {
  form:FormGroup= this.fb.group({
    first: ['', Validators.required]
  })

  feedbackContainer:boolean=false

  check:boolean=true

  textFeedback:string=''

  get first(){
    return this.form.get('first')
  }

  constructor(private fb: FormBuilder,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  askQuestion(){
    if(this.form.value.first==='1'){
      this.feedbackContainer=true
      this.check=true
    }else{
      this.feedbackContainer=true
      this.check=false
      this.textFeedback='No lograste aprobar la pregunta, pero esfuerzate para la próxima.'
    }
  }

  openFeedback(): void{
    this.dialog.open(FeedbackComponent, {
      data: {text:this.textFeedback},
      panelClass: 'custom-dialog-container'
    });
  }

}
