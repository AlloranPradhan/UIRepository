import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imagesUrl: any;
  startIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.Repeat();
  
  }


  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 1500);
  }

  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mySlides'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      if(slide && slide.style!=null){
      slide.style.display = 'block';
      this.startIndex++;}
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }
}
