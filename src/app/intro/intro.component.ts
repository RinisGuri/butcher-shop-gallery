import { Component, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    gsap.registerEffect({
      name: "textAnimation",
      defaults: { duration: 2 },
      effect: (targets: gsap.TweenTarget, config: { delay: number; }) => {
        return gsap
          .timeline()
          .from(
            targets,
            {
              duration: 0.5,
              opacity: 0,
              scale: 0,
              y: 80,
              rotationX: 180,
              transformOrigin: "0% 50% -50",
              ease: "back",
              stagger: 0.01,
              delay: config.delay / 25
            },
            "+=0"
          )
          .to(".sub-title", { opacity: 1, y: 0, duration: 1, delay: 0.1 });
      }
    });

    this.elRef.nativeElement.querySelectorAll(".word").forEach((box: any, index: any) => {
      gsap.effects['textAnimation'](box, { delay: index });
    });
  }

}
