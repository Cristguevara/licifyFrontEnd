import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {  Router } from '@angular/router';

interface MenuItem {
  ruta: string,
  text: string,
  select?: boolean
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit{

  menu: MenuItem[] = [
        //{ruta: '/Componentes/texto', text: 'Texto'},
        {ruta: '/Componentes/imagenes', text: 'Imágenes'},
        {ruta: '/Componentes/video', text: 'Videos'},
        {ruta: '/Componentes/seleccion-multiple', text: 'Selección múltiple'},
        {ruta: '/Componentes/varias-seleccion-multiple', text: 'Conjunto de selección múltiple'},
        {ruta: '/Componentes/verificacion-opciones', text: 'Selección de conjunto'},
        {ruta: '/Componentes/acordeon', text: 'Acordeón'},
        {ruta: '/Componentes/iframe', text: 'Iframe'},
        {ruta: '/Componentes/galeria-imagenes', text: 'Galería de imágenes'},
        {ruta: '/Componentes/control-deslizante', text: 'Control deslizante'},
        {ruta: '/Componentes/presentacion-diapositivas', text: 'Presentación de diapositivas'},
        {ruta: '/Componentes/seleccion-listas', text: 'Selección de listas'},
        {ruta: '/Componentes/varias-seleccion-listas', text: 'Conjunto de selección de listas'},
        {ruta: '/Componentes/parrafo-con-seleccion-listas', text: 'Parrafo con selección de listas'},
        {ruta: '/Componentes/seleccion-multiple-imagenes', text: 'Selección múltiple con imágenes'},
        {ruta: '/Componentes/entrada-texto', text: 'Entrada de texto'},
        {ruta: '/Componentes/resultados', text: 'Resultados de evaluación'},
      ]
  menuText: MenuItem[]=[
        {ruta: '/Componentes/texto', text: 'Texto normal' },
        {ruta: '/Componentes/texto/mapa-conceptual', text: 'Mapa conceptual texto' },
        {ruta: '/Componentes/texto/caja-de-texto-animada', text: 'Cajas de texto animadas y audio' },
        {ruta: '/Componentes/texto/iconos-botones-para-desplegar-texto', text: 'Iconos y botones para desplegar texto' },
        {ruta: '/Componentes/texto/cajas-de-informacion', text: 'Botones para desplegar información' },
        {ruta: '/Componentes/texto/mapa-conceptual-con-botones', text: 'Mapa conceptual con botones' },
        {ruta: '/Componentes/texto/textos-con-imagenes', text: 'Textos con imágenes' }
      ]
  menuCharts: MenuItem[]=[
        {ruta: '/Componentes/graficas/lineal', text: 'Lineal' },
        {ruta: '/Componentes/graficas/area', text: 'Área' },
        {ruta: '/Componentes/graficas/columnas', text: 'Columnas' },
        {ruta: '/Componentes/graficas/barras', text: 'Barras' },
        {ruta: '/Componentes/graficas/dona', text: 'Dona' },
        {ruta: '/Componentes/graficas/pie', text: 'pie' }
      ]
  expandPanel:boolean=false
  expandChartPanel:boolean=false
  _location:string=''

  constructor(private location:Location, private router: Router ) { }

  ngOnInit(): void {

    this._location=this.location.path()
    //console.log(this.location.path())

    if(this.location.path().includes('/Componentes/texto')){
      this.expandPanel=true
    }else{
      this.expandPanel=false
    }

    if(this.location.path().includes('/Componentes/graficas')){
      this.expandChartPanel=true
    }else{
      this.expandChartPanel=false
    }

    this.router.events.subscribe(e=>{
      if(this.location.path().includes('/Componentes/texto')){
        this.expandPanel=true
      }else{
        this.expandPanel=false
      }

      if(this.location.path().includes('/Componentes/graficas')){
        this.expandChartPanel=true
      }else{
        this.expandChartPanel=false
      }
    })
  }


}
