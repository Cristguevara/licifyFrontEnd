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
      {path: 'seleccion-multiple-imagenes', component:  MultipleChoiseImagesComponent },
      {path: 'seleccion-listas', component:  SelectionListsComponent },
      {path: 'presentacion-diapositivas', component:  SlidePresentationComponent },
      {path: 'control-deslizante', component:  SliderComponent },
      {path: 'texto', component: TextsComponent },
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
