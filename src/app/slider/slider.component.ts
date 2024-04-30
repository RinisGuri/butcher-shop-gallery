import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images: string[] = [
    'assets/foto4.png',
    'assets/foto2.png',
    'assets/foto3.png',
    'assets/foto1.png'
  ];

  currentImageIndex = 0;
  totalImages = 0;
  transitionDuration = 0.5;

  ngOnInit(): void {
    this.totalImages = this.images.length;
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 2500);
  }

  nextSlide() {
    const nextIndex = (this.currentImageIndex + 1) % this.totalImages;
    this.transitionToImage(nextIndex);
  }

  transitionToImage(index: number) {
    if (index !== this.currentImageIndex) {
      this.currentImageIndex = index;
    }
  }
}
