import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-boxes',
  templateUrl: './animation-boxes.component.html',
  styleUrls: ['./animation-boxes.component.scss']
})
export class AnimationBoxesComponent implements OnInit {

  div01:boolean=false
  div02:boolean=false
  div03:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

}
