import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from '../../components/feedback/feedback.component';

@Component({
  selector: 'app-selection-lists',
  templateUrl: './selection-lists.component.html',
  styleUrls: ['./selection-lists.component.scss']
})
export class SelectionListsComponent implements OnInit {

  disableSelect:boolean=false

  check:boolean=true

  textFeedback:string=''

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Select = new FormControl('',[Validators.required]);

  askQuestion(){
    if(this.Select.value ==='option2'){
      this.disableSelect=true
      this.check=true
      this.textFeedback='Felicitaciones, lo hiciste muy bien.'
    }else{
      this.disableSelect=true
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
