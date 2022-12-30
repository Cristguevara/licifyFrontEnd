import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";
SwiperCore.use([Keyboard, Pagination, Navigation]);

@Component({
  selector: 'app-slide-presentation',
  templateUrl: './slide-presentation.component.html',
  styleUrls: ['./slide-presentation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlidePresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
