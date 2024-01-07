import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import warning from '../../../../assets/animations/warning.json';
import successAnimation from '../../../../assets/animations/success.json';
import lottie from 'lottie-web';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  type?: 'success';
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit,AfterViewInit {

  type:string = ''
  animation:any = warning

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.type = data.type??''
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(this.type==='success'){
      this.animation = successAnimation
    }
    const container = document.getElementById('lottie-container-modal');
    if (container) {
      lottie.loadAnimation({
        container: container,
        animationData: JSON.parse(JSON.stringify(this.animation)),
        renderer: 'svg',
        loop: false,
      });
    }
  }

}
