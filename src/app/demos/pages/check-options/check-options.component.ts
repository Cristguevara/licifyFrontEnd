import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-options',
  templateUrl: './check-options.component.html',
  styleUrls: ['./check-options.component.scss']
})
export class CheckOptionsComponent implements OnInit {

  btn01:boolean=false
  btn02:boolean=false
  btn03:boolean=false
  btn04:boolean=false
  btn05:boolean=false
  btn06:boolean=false
  btn07:boolean=false

  congrat:boolean=false


  constructor() { }

  ngOnInit(): void {
  }

  handleBtn01(){
    this.btn01=true
    this.handleCongrat()
  }

  handleBtn02(){
    this.btn02=true
    this.handleCongrat()
  }

  handleBtn03(){
    this.btn03=true
    this.handleCongrat()
  }

  handleBtn04(){
    this.btn04=true
    this.handleCongrat()
  }

  handleCongrat(){
    if( this.btn01 && this.btn02 && this.btn03 && this.btn04){
      this.congrat=true
    }
  }

  handleBtn05(){
    if(!this.congrat){
      this.btn05=true
    }
  }

  handleBtn06(){
    if(!this.congrat){
      this.btn06=true
    }
  }

  handleBtn07(){
    if(!this.congrat){
      this.btn07=true
    }
  }

}
