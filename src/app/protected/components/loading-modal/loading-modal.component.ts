import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import loading from '../../../../assets/animations/loading2.json';
import lottie from 'lottie-web';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.scss']
})
export class LoadingModalComponent implements OnInit,AfterViewInit {

  constructor(
    public dialogRef: MatDialogRef<LoadingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const container = document.getElementById('lottie-container-loadingModal');
    if (container) {
      lottie.loadAnimation({
        container: container,
        animationData: JSON.parse(JSON.stringify(loading)),
        renderer: 'svg',
        loop: true,
      });
    }
  }

}
