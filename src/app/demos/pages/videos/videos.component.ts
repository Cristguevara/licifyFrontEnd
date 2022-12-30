import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  btn01:boolean=true
  initBtn:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  changeBtn01(){
    this.btn01=!this.btn01
    this.initBtn=true
  }
}
