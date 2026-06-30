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
                <span>Nairobi, Kenya<br>Glamorous Hub Location</span>
              </li>
              <li class="flex items-center">
                <span class="text-gold mr-2">📞</span>
                <span>+254 700 000 000</span>
              </li>
              <li class="flex items-center">
                <span class="text-gold mr-2">✉️</span>
                <span>bookings&#64;glamorousmilliards.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-white font-bold uppercase tracking-wider mb-6 flex items-center">
              <span class="w-8 h-[2px] bg-gold mr-3"></span> Socials
            </h3>
            <div class="flex space-x-4">
              <a href="https://instagram.com/glamorousmilliards" target="_blank" class="w-10 h-10 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gold hover:border-gold transition-all duration-300">
                IG
              </a>
              <a href="https://tiktok.com/@glamorousmilliards" target="_blank" class="w-10 h-10 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gold hover:border-gold transition-all duration-300">
                TK
              </a>
            </div>
          </div>
          
        </div>
        
        <div class="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 text-xs uppercase tracking-widest mb-4 md:mb-0">
            &copy; {{ currentYear }} Glamorous Milliards Lifestyle Hub. All rights reserved.
          </p>
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
