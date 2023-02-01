import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesibility',
  templateUrl: './accesibility.component.html',
  styleUrls: ['./accesibility.component.scss']
})
export class AccesibilityComponent implements OnInit {

  countText:number=0
  Tema:string= 'Tema normal'
  countContrast:number = 0


  constructor() { }

  ngOnInit(): void {
  }

  reducir(){

      if(this.countText===-3){return}

      this.countText+=-1
      console.log(this.countText)
      let h1=document.querySelectorAll("h1")
      h1.forEach(e=>{
          let font:any=getComputedStyle(e).getPropertyValue('font-size')
          let px=(Number(font.slice(0,font.length-2)*0.9)).toString()+'px'
          e.style.setProperty('font-size',px,"important")
      })

      let ptitle:any=document.querySelectorAll("mat-panel-title")
      ptitle.forEach((e:any)=>{
          let font:any=getComputedStyle(e).getPropertyValue('font-size')
          let px=(Number(font.slice(0,font.length-2)*0.9)).toString()+'px'
          e.style.setProperty('font-size',px,"important")
      })

      let p=document.querySelectorAll("p")
      p.forEach(e=>{
          let font:any=getComputedStyle(e).getPropertyValue('font-size')
          let px=(Number(font.slice(0,font.length-2)*0.9)).toString()+'px'
          e.style.setProperty('font-size',px,"important")
      })

      let span=document.querySelectorAll("span")
      span.forEach(e=>{
          let font:any=getComputedStyle(e).getPropertyValue('font-size')
          let px=(Number(font.slice(0,font.length-2)*0.9)).toString()+'px'
          e.style.setProperty('font-size',px,"important")
      })

      let div=document.querySelectorAll("div")
      div.forEach(e=>{
          let font:any=getComputedStyle(e).getPropertyValue('font-size')
          let px=(Number(font.slice(0,font.length-2)*0.9)).toString()+'px'
          e.style.setProperty('font-size',px,"important")
      })

      let link=document.querySelectorAll("link")
      link.forEach(e=>{
          let font:any=getComputedStyle(e).getPropertyValue('font-size')
          let px=(Number(font.slice(0,font.length-2)*0.9)).toString()+'px'
          e.style.setProperty('font-size',px,"important")
      })

      let button=document.querySelectorAll("button")
      button.forEach(e=>{
          let font:any=getComputedStyle(e).getPropertyValue('font-size')
          let px=(Number(font.slice(0,font.length-2)*0.9)).toString()+'px'
          e.style.setProperty('font-size',px,"important")
      })

      let e=document.documentElement
      let font:any=getComputedStyle(e).getPropertyValue('font-size')
      let px=(Number(font.slice(0,font.length-2)*0.9)).toString()+'px'
      e.style.setProperty('font-size',px,"important")

  }

  aumentar(){

    if(this.countText===6){return}

    this.countText+=1
    //console.log(countText)

    let h1=document.querySelectorAll("h1")
    h1.forEach(e=>{
        let font:any=getComputedStyle(e).getPropertyValue('font-size')
        let px=(Number(font.slice(0,font.length-2)*1.1)).toString()+'px'
        e.style.setProperty('font-size',px,"important")
    })

    let Ptitle:any=document.querySelectorAll("mat-panel-title")
    Ptitle.forEach((e:any)=>{
        let font:any=getComputedStyle(e).getPropertyValue('font-size')
        let px=(Number(font.slice(0,font.length-2)*1.1)).toString()+'px'
        e.style.setProperty('font-size',px,"important")
    })

    let p=document.querySelectorAll("p")
    p.forEach(e=>{
        let font:any=getComputedStyle(e).getPropertyValue('font-size')
        let px=(Number(font.slice(0,font.length-2)*1.1)).toString()+'px'
        e.style.setProperty('font-size',px,"important")
    })

    let btn:any=document.querySelectorAll("button")
    btn.forEach((e:any)=>{
        let font:any=getComputedStyle(e).getPropertyValue('font-size')
        let px=(Number(font.slice(0,font.length-2)*1.1)).toString()+'px'
        e.style.setProperty('font-size',px,"important")
    })

    let div=document.querySelectorAll("div")
    div.forEach(e=>{
        let font:any=getComputedStyle(e).getPropertyValue('font-size')
        let px=(Number(font.slice(0,font.length-2)*1.1)).toString()+'px'
        e.style.setProperty('font-size',px,"important")
    })

    let button=document.querySelectorAll("button")
    button.forEach(e=>{
        let font:any=getComputedStyle(e).getPropertyValue('font-size')
        let px=(Number(font.slice(0,font.length-2)*1.1)).toString()+'px'
        e.style.setProperty('font-size',px,"important")
    })

    let e=document.documentElement
    let font:any=getComputedStyle(e).getPropertyValue('font-size')
    //console.log(font)
    let px=(Number(font.slice(0,font.length-2)*1.1)).toString()+'px'
    e.style.setProperty('font-size',px,"important")

  }

  contraste(){

      if(this.countContrast===0){
          document.documentElement.style.setProperty('filter', "saturate(3)")
          this.countContrast=1
          this.Tema='Contraste'
      }
      else if(this.countContrast===1){
          document.documentElement.style.setProperty('filter', "invert(2)")
          this.countContrast=2
          this.Tema='Invertido'
      }
      else if(this.countContrast===2){
          document.documentElement.style.setProperty('filter', "contrast(1.5)")
          this.countContrast=3
          this.Tema='Saturación'
      }
      else if(this.countContrast===3){
          document.documentElement.style.setProperty('filter', "grayscale(1)")
          this.countContrast=4
          this.Tema='Escala de grises'
      }
      else if(this.countContrast===4){
          document.documentElement.style.removeProperty('filter')
          this.countContrast=0
          this.Tema='Tema normal'
      }
      //console.log(countContrast)
  }



}
