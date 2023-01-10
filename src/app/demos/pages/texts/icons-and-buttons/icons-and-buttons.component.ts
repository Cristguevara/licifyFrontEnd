import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons-and-buttons',
  templateUrl: './icons-and-buttons.component.html',
  styleUrls: ['./icons-and-buttons.component.scss']
})
export class IconsAndButtonsComponent implements OnInit {

  div01:boolean=false
  div02:boolean=false
  div03:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

}
