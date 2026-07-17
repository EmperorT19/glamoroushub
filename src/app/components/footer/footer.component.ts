import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  template: `
    <footer class="bg-black border-t border-gold/20 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div class="col-span-1 md:col-span-1">
            <app-logo class="mb-6 block"></app-logo>
            <p class="text-gray-400 text-sm leading-relaxed">
              Premium grooming and lifestyle experiences for the modern gentleman. 
              Sharp cuts, precise details, unmatched luxury.
            </p>
          </div>
          
          <div>
            <h3 class="text-white font-bold uppercase tracking-wider mb-6 flex items-center">
              <span class="w-8 h-[2px] bg-gold mr-3"></span> Explore
            </h3>
            <ul class="space-y-3">
              <li><a routerLink="/" class="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wide">Home</a></li>
              <li><a routerLink="/services" class="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wide">Services</a></li>
              <li><a routerLink="/team" class="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wide">The Team</a></li>
              <li><a routerLink="/gallery" class="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wide">Gallery & Reels</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-white font-bold uppercase tracking-wider mb-6 flex items-center">
              <span class="w-8 h-[2px] bg-gold mr-3"></span> Contact
            </h3>
            <ul class="space-y-3 text-sm text-gray-400">
              <li class="flex items-start">
                <span class="text-gold mr-2">📍</span>
                <span>Bravion House, Kindaruma Road,<br>Opposite Carrefour Supermarket,<br>Rose Avenue Mall, Next to Listers Car Wash</span>
              </li>
              <li class="flex items-center">
                <span class="text-gold mr-2">📞</span>
                <span>+254 742 641 574</span>
              </li>
              <li class="flex items-center">
                <span class="text-gold mr-2">✉️</span>
                <a href="mailto:contact&#64;glamoroushub.co.ke" class="hover:text-gold transition-colors">contact&#64;glamoroushub.co.ke</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-white font-bold uppercase tracking-wider mb-6 flex items-center">
              <span class="w-8 h-[2px] bg-gold mr-3"></span> Socials
            </h3>
            <div class="flex space-x-4">
              <a href="https://instagram.com/glamoroushub" target="_blank" class="w-10 h-10 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gold hover:border-gold transition-all duration-300" aria-label="Instagram">
                <svg class="w-4 h-4 text-current" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://tiktok.com/@glamoroushub" target="_blank" class="w-10 h-10 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gold hover:border-gold transition-all duration-300" aria-label="TikTok">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.6-.54 3.23-1.56 4.49-1.28 1.62-3.33 2.54-5.38 2.67-2.23.14-4.57-.49-6.28-2-1.92-1.69-2.85-4.32-2.5-6.85C1.29 8.8 3.19 6.64 5.75 5.92c1.68-.48 3.51-.31 5.09.43.02 1.34-.01 2.68.01 4.02-1.12-.49-2.4-.64-3.56-.25-1.39.45-2.48 1.69-2.67 3.12-.27 2.1 1.25 4.11 3.32 4.54 1.77.38 3.75-.41 4.47-2.07.19-.48.24-.99.23-1.51-.01-4.28 0-8.56-.01-12.84z"/>
                </svg>
              </a>
              <a href="https://facebook.com/glamoroushub" target="_blank" class="w-10 h-10 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gold hover:border-gold transition-all duration-300" aria-label="Facebook">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>
          
        </div>
        
        <div class="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div class="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-gray-600 text-xs uppercase tracking-widest mb-4 md:mb-0">
            <span>&copy; {{ currentYear }} Glamorous Hub. All rights reserved.</span>
            <span>Created by Bravion Technologies</span>
          </div>
          <div class="flex space-x-6 text-xs text-gray-600 uppercase tracking-widest">
            <a href="#" class="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
