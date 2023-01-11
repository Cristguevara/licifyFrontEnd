import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

interface MenuItem {
  ruta: string,
  text: string,
  select?: boolean
}

@Component({
  selector: 'app-menu-responsive',
  templateUrl: './menu-responsive.component.html',
  styleUrls: ['./menu-responsive.component.scss']
})
export class MenuResponsiveComponent implements OnInit {


    menu: MenuItem[] = []
    menuText: MenuItem[]=[]
    expandPanel:boolean=false

    constructor(private location:Location, private router: Router ,public dialogRef: MatDialogRef<MenuResponsiveComponent>,
      @Inject(MAT_DIALOG_DATA) public data:string) { }

    ngOnInit(): void {
      //console.log(this.location.path())

        this.expandPanel=false

        let menuText=[
          {ruta: '/Componentes/texto', text: 'Texto normal' },
          {ruta: '/Componentes/texto/mapa-conceptual', text: 'Mapa conceptual texto' },
          {ruta: '/Componentes/texto/caja-de-texto-animada', text: 'Cajas de texto animadas y audio' },
          {ruta: '/Componentes/texto/iconos-botones-para-desplegar-texto', text: 'Iconos y botones para desplegar texto' },
          {ruta: '/Componentes/texto/cajas-de-informacion', text: 'Botones para desplegar información' }
        ]
        menuText=menuText.map((e:any)=>{
          if(e.ruta===this.location.path()){
            this.expandPanel=true
            return {...e, select:true}
          }else{
            return e
          }
        })
        this.menuText=menuText
        
        let menu=[
          //{ruta: '/Componentes/texto', text: 'Texto'},
          {ruta: '/Componentes/imagenes', text: 'Imágenes'},
          {ruta: '/Componentes/video', text: 'Videos'},
          {ruta: '/Componentes/seleccion-multiple', text: 'Selección múltiple'},
          {ruta: '/Componentes/acordeon', text: 'Acordeón'},
          {ruta: '/Componentes/iframe', text: 'Iframe'},
          {ruta: '/Componentes/galeria-imagenes', text: 'Galería de imágenes'},
          {ruta: '/Componentes/control-deslizante', text: 'Control deslizante'},
          {ruta: '/Componentes/presentacion-diapositivas', text: 'Presentación de diapositivas'},
          {ruta: '/Componentes/seleccion-listas', text: 'Selección de listas'},
          {ruta: '/Componentes/seleccion-multiple-imagenes', text: 'Selección múltiple con imágenes'},
          {ruta: '/Componentes/entrada-texto', text: 'Entrada de texto'},
          {ruta: '/Componentes/resultados', text: 'Resultados de evaluación'},
        ]

        menu=menu.map((e:any)=>{
          if(e.ruta===this.location.path()){
            return {...e, select:true}
          }else{
            return e
          }
        })
        this.menu=menu

    }

}
