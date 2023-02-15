import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title-with-lsc',
  templateUrl: './title-with-lsc.component.html',
  styleUrls: ['./title-with-lsc.component.scss']
})
export class TitleWithLSCComponent implements OnInit {

  @Input() title:string=''
  @Input() nameVideo:string=''

  @ViewChild("videoElement") videoElement!: ElementRef;
  video:any = {};

  btnLSC:boolean=true

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.video = this.videoElement.nativeElement;
    this.video.addEventListener('leavepictureinpicture', () => {
        this.btnLSC=true
        this.video.pause()
    });
  }

  ngOnDestroy(): void {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture()
    }
  }

  ShowLSC(){
    this.btnLSC=!this.btnLSC
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture()
    } else {
      this.video.requestPictureInPicture().then((pictureInPictureWindow:any) => {
        //console.log('pic',document.pictureInPictureElement)
      });
    }
  }

}
