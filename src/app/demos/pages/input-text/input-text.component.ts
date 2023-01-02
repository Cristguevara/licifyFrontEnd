import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from '../../components/feedback/feedback.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {


  feedbackContainer:boolean=false

  check:boolean=true
  form =new FormControl('',Validators.required)

  textFeedback:string=''

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  askQuestion(){
    this.form.disable()
    if(this.form.value?.toLowerCase()==='yellow'){
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
      data: this.textFeedback,
      panelClass: 'custom-dialog-container'
    });
  }

}
