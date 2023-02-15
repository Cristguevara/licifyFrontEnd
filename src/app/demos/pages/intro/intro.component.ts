import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  textComponents: any[]=[
    {ruta: '/Componentes/texto', text: 'Texto normal' },
    {ruta: '/Componentes/texto/mapa-conceptual', text: 'Mapa conceptual texto' },
    {ruta: '/Componentes/texto/caja-de-texto-animada', text: 'Cajas de texto animadas y audio' },
    {ruta: '/Componentes/texto/iconos-botones-para-desplegar-texto', text: 'Iconos y botones para desplegar texto' },
    {ruta: '/Componentes/texto/cajas-de-informacion', text: 'Botones para desplegar información' },
    {ruta: '/Componentes/texto/mapa-conceptual-con-botones', text: 'Mapa conceptual con botones' },
    {ruta: '/Componentes/texto/textos-con-imagenes', text: 'Textos con imágenes' }
  ]

  imageComponents: any[]=[
    {ruta: '/Componentes/imagenes', text: 'Imágenes'},
    {ruta: '/Componentes/galeria-imagenes', text: 'Galería de imágenes'},
    {ruta: '/Componentes/presentacion-diapositivas', text: 'Presentación de diapositivas'},
  ]

  videoComponents: any[]=[
    {ruta: '/Componentes/video', text: 'Videos'},
  ]

  docsComponents: any[]=[
    {ruta: '/Componentes/iframe', text: 'Iframe'},
  ]

  acordeonComponents: any[]=[
    {ruta: '/Componentes/acordeon', text: 'Acordeón'},
  ]

  questionComponents: any[]=[
    {ruta: '/Componentes/seleccion-multiple', text: 'Selección múltiple'},
    {ruta: '/Componentes/varias-seleccion-multiple', text: 'Conjunto de selección múltiple'},
    {ruta: '/Componentes/verificacion-opciones', text: 'Selección de conjunto'},
    {ruta: '/Componentes/control-deslizante', text: 'Control deslizante'},
    {ruta: '/Componentes/seleccion-listas', text: 'Selección de listas'},
    {ruta: '/Componentes/varias-seleccion-listas', text: 'Conjunto de selección de listas'},
    {ruta: '/Componentes/parrafo-con-seleccion-listas', text: 'Parrafo con selección de listas'},
    {ruta: '/Componentes/seleccion-multiple-imagenes', text: 'Selección múltiple con imágenes'},
    {ruta: '/Componentes/entrada-texto', text: 'Entrada de texto'},
    {ruta: '/Componentes/resultados', text: 'Resultados de evaluación'},
  ]


  chartComponents: any[]=[
    {ruta: '/Componentes/graficas/lineal', text: 'Lineal' },
    {ruta: '/Componentes/graficas/area', text: 'Área' },
    {ruta: '/Componentes/graficas/columnas', text: 'Columnas' },
    {ruta: '/Componentes/graficas/barras', text: 'Barras' },
    {ruta: '/Componentes/graficas/dona', text: 'Dona' },
    {ruta: '/Componentes/graficas/pie', text: 'pie' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
