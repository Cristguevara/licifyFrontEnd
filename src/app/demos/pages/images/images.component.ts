import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

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
