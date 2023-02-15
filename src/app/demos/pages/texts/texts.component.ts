import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent implements OnInit {

  // @ViewChild("videoElement") videoElement!: ElementRef;
  // video:any = {};

  // btnLSC:boolean=true

  constructor() { }

  ngOnInit(): void {
  }

  // ngAfterViewInit(){
  //   this.video = this.videoElement.nativeElement;
  //   this.video.addEventListener('leavepictureinpicture', () => {
  //       this.btnLSC=true
  //       this.video.pause()
  //   });
  // }

  // ngOnDestroy(): void {
  //   if (document.pictureInPictureElement) {
  //     document.exitPictureInPicture()
  //   }
  // }

  // ShowLSC(){
  //   this.btnLSC=!this.btnLSC
  //   if (document.pictureInPictureElement) {
  //     document.exitPictureInPicture()
  //   } else {
  //     this.video.requestPictureInPicture().then((pictureInPictureWindow:any) => {
  //       console.log('pic',document.pictureInPictureElement)
  //     });
  //   }
  // }



}
