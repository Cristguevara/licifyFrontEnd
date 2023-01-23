import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextsComponent } from './pages/texts/texts.component';
import { ImagesComponent } from './pages/images/images.component';
import { VideosComponent } from './pages/videos/videos.component';
//import { IntroComponent } from './pages/intro/intro.component';
import { MultipleChoiseComponent } from './pages/multiple-choise/multiple-choise.component';
import { AcordeonComponent } from './pages/acordeon/acordeon.component';
import { IframeComponent } from './pages/iframe/iframe.component';
import { ImagesGaleryComponent } from './pages/images-galery/images-galery.component';
import { InputTextComponent } from './pages/input-text/input-text.component';
import { MultipleChoiseImagesComponent } from './pages/multiple-choise-images/multiple-choise-images.component';
import { SelectionListsComponent } from './pages/selection-lists/selection-lists.component';
import { SlidePresentationComponent } from './pages/slide-presentation/slide-presentation.component';
import { SliderComponent } from './pages/slider/slider.component';
import { ResultsComponent } from './pages/results/results.component';
import { ConceptualMapComponent } from './pages/texts/conceptual-map/conceptual-map.component';
import { AnimationBoxesComponent } from './pages/texts/animation-boxes/animation-boxes.component';
import { IconsAndButtonsComponent } from './pages/texts/icons-and-buttons/icons-and-buttons.component';
import { InformationBoxesComponent } from './pages/texts/information-boxes/information-boxes.component';
import { ConceptualMapWithButtonsComponent } from './pages/texts/conceptual-map-with-buttons/conceptual-map-with-buttons.component';
import { CheckOptionsComponent } from './pages/check-options/check-options.component';
import { TextsWithImagesComponent } from './pages/texts/texts-with-images/texts-with-images.component';
import { MultipleChoiseSomeComponent } from './pages/multiple-choise-some/multiple-choise-some.component';
import { SelectionListSomeComponent } from './pages/selection-list-some/selection-list-some.component';
import { SelectionListWithTextComponent } from './pages/selection-list-with-text/selection-list-with-text.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {path: 'acordeon', component: AcordeonComponent },
      {path: 'iframe', component: IframeComponent },
      {path: 'imagenes', component: ImagesComponent },
      {path: 'galeria-imagenes', component: ImagesGaleryComponent },
      {path: 'entrada-texto', component: InputTextComponent },
      //{path: 'intro', component: IntroComponent },
      {path: 'seleccion-multiple', component:  MultipleChoiseComponent },
      {path: 'varias-seleccion-multiple', component:  MultipleChoiseSomeComponent },
      {path: 'verificacion-opciones', component:  CheckOptionsComponent },
      {path: 'seleccion-multiple-imagenes', component:  MultipleChoiseImagesComponent },
      {path: 'seleccion-listas', component:  SelectionListsComponent },
      {path: 'varias-seleccion-listas', component:  SelectionListSomeComponent },
      {path: 'parrafo-con-seleccion-listas', component:  SelectionListWithTextComponent },
      {path: 'presentacion-diapositivas', component:  SlidePresentationComponent },
      {path: 'control-deslizante', component:  SliderComponent },
      {path: 'texto',
      //component: TextsComponent,
      children:[
        {path: '', component: TextsComponent },
        {path: 'mapa-conceptual', component: ConceptualMapComponent },
        {path: 'caja-de-texto-animada', component: AnimationBoxesComponent },
        {path: 'iconos-botones-para-desplegar-texto', component: IconsAndButtonsComponent },
        {path: 'cajas-de-informacion', component: InformationBoxesComponent },
        {path: 'mapa-conceptual-con-botones', component: ConceptualMapWithButtonsComponent },
        {path: 'textos-con-imagenes', component: TextsWithImagesComponent },
      ]},
      {path: 'video', component:  VideosComponent },
      {path: 'resultados', component:  ResultsComponent },
      {path: '**', redirectTo:  'texto' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
