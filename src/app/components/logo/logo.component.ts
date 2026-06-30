import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="flex items-center gap-3 group">
      <div class="h-10 w-10 border border-gold flex items-center justify-center bg-black group-hover:bg-gold/10 transition-colors duration-300">
        <img src="https://placehold.co/400x400/000000/D4AF37?text=LOGO" alt="GMLH Logo" class="h-8 w-8 object-contain">
      </div>
      <span class="font-bold text-lg tracking-wider uppercase text-white group-hover:text-gold transition-colors duration-300 hidden sm:block">
        Glamorous Milliards
      </span>
    </a>
  `,
  styles: []
})
export class LogoComponent {}
