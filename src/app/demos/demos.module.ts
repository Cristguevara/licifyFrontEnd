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
import {MatDividerModule} from '@angular/material/divider';
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
import { LineComponent } from './pages/charts/line/line.component';
import { AreaComponent } from './pages/charts/area/area.component';
import { ColumnComponent } from './pages/charts/column/column.component';
import { BarComponent } from './pages/charts/bar/bar.component';
import { PieComponent } from './pages/charts/pie/pie.component';
import { DonutComponent } from './pages/charts/donut/donut.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { MenuResponsiveComponent } from '../shared/menu-responsive/menu-responsive.component';
import { AccesibilityComponent } from './components/accesibility/accesibility.component';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { TitleWithLSCComponent } from './components/title-with-lsc/title-with-lsc.component';



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
    ResultsComponent,
    ConceptualMapComponent,
    AnimationBoxesComponent,
    IconsAndButtonsComponent,
    InformationBoxesComponent,
    ConceptualMapWithButtonsComponent,
    CheckOptionsComponent,
    TextsWithImagesComponent,
    MultipleChoiseSomeComponent,
    SelectionListSomeComponent,
    SelectionListWithTextComponent,
    LineComponent,
    AreaComponent,
    ColumnComponent,
    BarComponent,
    PieComponent,
    DonutComponent,
    ChartsComponent,
    MainScreenComponent,
    MenuComponent,
    MenuResponsiveComponent,
    AccesibilityComponent,
    TitleWithLSCComponent,
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
    SwiperModule,
    MatDividerModule,
    NgApexchartsModule,
    MatTooltipModule,
    MatListModule,
    HttpClientModule
  ]
})
export class DemosModule { }
