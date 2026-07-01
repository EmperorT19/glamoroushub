import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="flex items-center gap-3 group">
      <div class="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <img src="glam-logo-1.jpg" alt="GMLH Logo" class="h-16 w-auto object-contain">
      </div>
      <span class="font-bold text-lg tracking-wider uppercase text-white group-hover:text-gold transition-colors duration-300 hidden sm:block">
        Glamorous Hub
      </span>
    </a>
  `,
  styles: []
})
export class LogoComponent {}
