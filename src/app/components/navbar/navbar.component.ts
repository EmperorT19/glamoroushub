import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LogoComponent],
  template: `
    <nav class="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gold/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <div class="flex-shrink-0">
            <app-logo></app-logo>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              @for (link of navLinks; track link.path) {
                <a [routerLink]="link.path" 
                   routerLinkActive="text-gold border-b-2 border-gold" 
                   [routerLinkActiveOptions]="{exact: link.exact}"
                   class="text-gray-300 hover:text-gold px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300">
                  {{ link.label }}
                </a>
              }
              <a routerLink="/booking" 
                 class="bg-gold text-black px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-gold-light transition-colors duration-300 border border-gold hover:border-gold-light">
                Book Now
              </a>
            </div>
          </div>
          
          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button (click)="toggleMenu()" type="button" class="text-gold hover:text-gold-light focus:outline-none">
              <svg class="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path *ngIf="!isMenuOpen()" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path *ngIf="isMenuOpen()" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div *ngIf="isMenuOpen()" class="md:hidden bg-black border-b border-gold/20 absolute w-full animate-fade-in">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          @for (link of navLinks; track link.path) {
            <a [routerLink]="link.path" 
               routerLinkActive="text-gold bg-black-light"
               [routerLinkActiveOptions]="{exact: link.exact}"
               (click)="closeMenu()"
               class="text-gray-300 hover:text-gold block px-3 py-4 text-base font-semibold uppercase tracking-wider border-b border-gray-800">
              {{ link.label }}
            </a>
          }
          <a routerLink="/booking" 
             (click)="closeMenu()"
             class="block w-full text-center bg-gold text-black px-6 py-4 mt-4 text-base font-bold uppercase tracking-wider hover:bg-gold-light">
            Book Now
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
  isMenuOpen = signal(false);

  navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/services', label: 'Services', exact: false },
    { path: '/team', label: 'Team', exact: false },
    { path: '/gallery', label: 'Gallery', exact: false },
    { path: '/testimonials', label: 'Reviews', exact: false },
    { path: '/contact', label: 'Contact', exact: false }
  ];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
