import { Component,OnInit } from '@angular/core';
import { SLIDER } from 'src/app/types/sliderData';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  sliderInfos=SLIDER;//SLIDER:slider[]=[]

  imgPath = `../../../assets/slider/`;
  
  ngOnInit(): void {  
  }

}
