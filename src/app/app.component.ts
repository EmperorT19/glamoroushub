import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingSocialsComponent } from './components/floating-socials/floating-socials.component';
import { LoaderComponent } from './components/loader/loader.component';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, FloatingSocialsComponent, LoaderComponent],
  template: `
    <app-loader></app-loader>
    <app-navbar></app-navbar>
    <main class="min-h-screen bg-black text-white selection:bg-gold selection:text-black">
      <router-outlet></router-outlet>
    </main>
    <app-floating-socials></app-floating-socials>
    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Poppins', sans-serif;
    }
  `]
})
export class AppComponent implements AfterViewInit {
  title = 'glamorous-hub';

  ngAfterViewInit() {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}
