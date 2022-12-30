import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from '../../components/feedback/feedback.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  form = new FormControl(0,[Validators.required])
  disabled:boolean=false

  check:boolean=true

  textFeedback:string=''

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  askQuestion(){
    if(this.form.value === 5){
      this.disabled=true
      this.check=true
      this.textFeedback='Felicitaciones, lo hiciste muy bien.'
    }else{
      this.disabled=true
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
