import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { TextsComponent } from './pages/texts/texts.component';
import { ImagesComponent } from './pages/images/images.component';
import { VideosComponent } from './pages/videos/videos.component';
import { IntroComponent } from './pages/intro/intro.component';
import {MatButtonModule} from '@angular/material/button';
import { MultipleChoiseComponent } from './pages/multiple-choise/multiple-choise.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { IframeComponent } from './pages/iframe/iframe.component';
import { AcordeonComponent } from './pages/acordeon/acordeon.component';
import { MultipleChoiseImagesComponent } from './pages/multiple-choise-images/multiple-choise-images.component';
import { SelectionListsComponent } from './pages/selection-lists/selection-lists.component';
import { SliderComponent } from './pages/slider/slider.component';
import { ImagesGaleryComponent } from './pages/images-galery/images-galery.component';
import { InputTextComponent } from './pages/input-text/input-text.component';
import { SlidePresentationComponent } from './pages/slide-presentation/slide-presentation.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from "swiper/angular";
import { ResultsComponent } from './pages/results/results.component';


@NgModule({
  declarations: [
    TextsComponent,
    ImagesComponent,
    VideosComponent,
    IntroComponent,
    MultipleChoiseComponent,
    FeedbackComponent,
    IframeComponent,
    AcordeonComponent,
    MultipleChoiseImagesComponent,
    SelectionListsComponent,
    SliderComponent,
    ImagesGaleryComponent,
    InputTextComponent,
    SlidePresentationComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    FormsModule,
    SwiperModule
  ]
})
export class DemosModule { }
