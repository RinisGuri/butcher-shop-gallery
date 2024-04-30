import { Component, HostListener } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarVisible = true;
  lastScrollTop = 0;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const st = window.pageYOffset || document.documentElement.scrollTop;


    const opacity = 1 - Math.min(st / 90, 1);


    gsap.to('.navbar', { opacity: opacity, duration: 0.4, ease: 'power2.inOut' });


    this.isNavbarVisible = opacity > 0;

    this.lastScrollTop = st;
  }
}
