import { Component, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);


    const innerContainer = this.elementRef.nativeElement.querySelector('.inner-container');


    gsap.from(innerContainer, {
      opacity: 0,
      y: 50,
      duration: 2,
      scrollTrigger: {
        trigger: innerContainer,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  }

}
