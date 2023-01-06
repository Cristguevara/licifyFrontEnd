import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent implements OnInit {

  div01:boolean=false
  div02:boolean=false
  div03:boolean=false

  constructor() { }

  ngOnInit(): void {
  }



}
