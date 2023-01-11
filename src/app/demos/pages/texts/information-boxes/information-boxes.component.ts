import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-boxes',
  templateUrl: './information-boxes.component.html',
  styleUrls: ['./information-boxes.component.scss']
})
export class InformationBoxesComponent implements OnInit {

  div01:boolean=false
  div02:boolean=false
  div03:boolean=false
  div04:boolean=false
  div05:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

}
