import { AfterViewInit, Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements AfterViewInit {

  slideIndex: number = 1;
  @Input() slidesSet: string[];
  @Input() slidesId: string;
  slides = [];

  constructor() {

   }

  ngOnInit(): void{
    console.log(this.slidesId, this.slidesSet);
    this.createSlidesSet(this.slidesSet);
  }




  createSlidesSet(slides){

    let newSlides = slides.map((slide, index) => ({
      source: slide,
      indexOf: index+1
    })
    )
    console.log(newSlides);
    this.slides = newSlides;

  }

  ngAfterViewInit(): void {
    this.showSlides(this.slideIndex);
  }
  plusSlides(n): void {
    this.showSlides(this.slideIndex += n);
  }
  currentSlide(n): void {
    this.showSlides(this.slideIndex = n);
  }
  showSlides(n): void {
    let i;
    const slides = Array.from(document.getElementsByClassName(this.slidesId) as HTMLCollectionOf<HTMLElement>);
    const dots = Array.from(document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>);
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }
}
