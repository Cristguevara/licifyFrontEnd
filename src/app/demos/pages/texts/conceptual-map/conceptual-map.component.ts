import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conceptual-map',
  templateUrl: './conceptual-map.component.html',
  styleUrls: ['./conceptual-map.component.scss']
})
export class ConceptualMapComponent implements OnInit {

  div01:boolean=false
  div02:boolean=false
  div03:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

}
