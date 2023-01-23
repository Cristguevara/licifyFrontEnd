import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-selection-list-some',
  templateUrl: './selection-list-some.component.html',
  styleUrls: ['./selection-list-some.component.scss']
})
export class SelectionListSomeComponent implements OnInit {

  wrong01:boolean=false
  good01:boolean=false
  wrong02:boolean=false
  good02:boolean=false
  wrong03:boolean=false
  good03:boolean=false
  wrong04:boolean=false
  good04:boolean=false

  form:FormGroup=this.fb.group({
    first:[''],
    second:[''],
    third:[''],
    fourth:[''],
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.first?.valueChanges.subscribe(val=>{
      if(val==='option1'){
        this.wrong01=false
        this.good01=true
      }else if(val==='option2'){
        this.wrong01=true
        this.good01=false
      }else{
        this.wrong01=false
        this.good01=false
      }
    })

    this.second?.valueChanges.subscribe(val=>{
      if(val==='option1'){
        this.wrong02=true
        this.good02=false
      }else if(val==='option2'){
        this.wrong02=false
        this.good02=true
      }else{
        this.wrong02=false
        this.good02=false
      }
    })

    this.third?.valueChanges.subscribe(val=>{
      if(val==='option1'){
        this.wrong03=true
        this.good03=false
      }else if(val==='option2'){
        this.wrong03=false
        this.good03=true
      }else{
        this.wrong03=false
        this.good03=false
      }
    })

    this.fourth?.valueChanges.subscribe(val=>{
      if(val==='option1'){
        this.wrong04=false
        this.good04=true
      }else if(val==='option2'){
        this.wrong04=true
        this.good04=false
      }else{
        this.wrong04=false
        this.good04=false
      }
    })
  }

  get first(){
    return this.form.get('first')
  }
  get second(){
    return this.form.get('second')
  }
  get third(){
    return this.form.get('third')
  }
  get fourth(){
    return this.form.get('fourth')
  }

}
