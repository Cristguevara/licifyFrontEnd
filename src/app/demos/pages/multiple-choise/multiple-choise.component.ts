import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from '../../components/feedback/feedback.component';

@Component({
  selector: 'app-multiple-choise',
  templateUrl: './multiple-choise.component.html',
  styleUrls: ['./multiple-choise.component.scss']
})
export class MultipleChoiseComponent implements OnInit {

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
    if(this.form.value.first==='2'){
      this.feedbackContainer=true
      this.check=true
      this.textFeedback='Felicitaciones, lo hiciste muy bien.'
    }else{
      this.feedbackContainer=true
      this.check=false
      this.textFeedback='No lograste aprobar la pregunta, pero esfuerzate para la próxima.'
    }
  }

  openFeedback(): void{
    this.dialog.open(FeedbackComponent, {
      data: this.textFeedback,
    });
  }

}
