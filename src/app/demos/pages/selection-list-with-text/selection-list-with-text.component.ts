import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from '../../components/feedback/feedback.component';

@Component({
  selector: 'app-selection-list-with-text',
  templateUrl: './selection-list-with-text.component.html',
  styleUrls: ['./selection-list-with-text.component.scss']
})
export class SelectionListWithTextComponent implements OnInit {

  form:FormGroup=this.fb.group({
    first:['', Validators.required],
    second:['', Validators.required],
    third:['', Validators.required],
  })

  disabled:boolean=false

  wrong01:boolean=false
  good01:boolean=false

  wrong02:boolean=false
  good02:boolean=false

  wrong03:boolean=false
  good03:boolean=false

  wellDone:boolean=false
  feedback:boolean=false

  constructor(private fb:FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  checkAnswers(){
    this.form.disable()
    this.disabled=true
    if(this.form.value.first==='lived'){
      this.good01=true
    }else{
      this.wrong01=true
    }

    if(this.form.value.second==='could'){
      this.good02=true
    }else{
      this.wrong02=true
    }

    if(this.form.value.third==='was'){
      this.good03=true
    }else{
      this.wrong03=true
    }

    if(this.good01 && this.good02 && this.good03){
      this.wellDone=true
    }else{
      this.feedback=true
    }
  }

  openFeedback(): void{
    this.dialog.open(FeedbackComponent, {
      data: {title:'', text:'Practice your English'},
      panelClass: 'custom-dialog-container'
    });
  }

}
