import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conceptual-map-with-buttons',
  templateUrl: './conceptual-map-with-buttons.component.html',
  styleUrls: ['./conceptual-map-with-buttons.component.scss']
})
export class ConceptualMapWithButtonsComponent implements OnInit {

  btn01:boolean=false
  div01:boolean=false

  btn02:boolean=false
  div02:boolean=false

  btn03:boolean=false
  div03:boolean=false

  btn04:boolean=false
  div04:boolean=false

  btn05:boolean=false
  div05:boolean=false

  btn06:boolean=false
  div06:boolean=false

  btn07:boolean=false
  div07:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
  handleDiv01(){
    this.btn01=!this.btn01
    if(this.div01){
      setTimeout(()=>{this.div01=false},500)
    }else{
      this.div01=true
    }
  }

  handleDiv02(){
    this.btn02=!this.btn02
    if(this.div02){
      setTimeout(()=>{this.div02=false},500)
    }else{
      this.div02=true
    }
  }

  handleDiv03(){
    this.btn03=!this.btn03
    if(this.div03){
      setTimeout(()=>{this.div03=false},500)
    }else{
      this.div03=true
    }
  }

  handleDiv04(){
    this.btn04=!this.btn04
    if(this.div04){
      setTimeout(()=>{this.div04=false},500)
    }else{
      this.div04=true
    }
  }

  handleDiv05(){
    this.btn05=!this.btn05
    if(this.div05){
      setTimeout(()=>{this.div05=false},500)
    }else{
      this.div05=true
    }
  }

  handleDiv06(){
    this.btn06=!this.btn06
    if(this.div06){
      setTimeout(()=>{this.div06=false},500)
    }else{
      this.div06=true
    }
  }

  handleDiv07(){
    this.btn07=!this.btn07
    if(this.div07){
      setTimeout(()=>{this.div07=false},500)
    }else{
      this.div07=true
    }
  }

}
