import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-floating-socials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 flex flex-col items-center space-y-4 animate-fade-in">
      
      <!-- Desktop-only Vertical Social Stack -->
      <div class="hidden md:flex flex-col items-center space-y-4">
        <!-- Instagram -->
        <a href="https://instagram.com/glamoroushub" target="_blank" 
           class="w-12 h-12 bg-black border border-gray-800 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gold hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 group relative">
          <svg class="w-5 h-5 text-current" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <!-- Tooltip -->
          <span class="absolute right-full mr-4 bg-black border border-gold text-gold text-xs font-bold uppercase tracking-widest py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Instagram
          </span>
        </a>
        
        <!-- TikTok -->
        <a href="https://tiktok.com/@glamoroushub" target="_blank" 
           class="w-12 h-12 bg-black border border-gray-800 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gold hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 group relative">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.6-.54 3.23-1.56 4.49-1.28 1.62-3.33 2.54-5.38 2.67-2.23.14-4.57-.49-6.28-2-1.92-1.69-2.85-4.32-2.5-6.85C1.29 8.8 3.19 6.64 5.75 5.92c1.68-.48 3.51-.31 5.09.43.02 1.34-.01 2.68.01 4.02-1.12-.49-2.4-.64-3.56-.25-1.39.45-2.48 1.69-2.67 3.12-.27 2.1 1.25 4.11 3.32 4.54 1.77.38 3.75-.41 4.47-2.07.19-.48.24-.99.23-1.51-.01-4.28 0-8.56-.01-12.84z"/>
          </svg>
          <span class="absolute right-full mr-4 bg-black border border-gold text-gold text-xs font-bold uppercase tracking-widest py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            TikTok
          </span>
        </a>

        <!-- Facebook -->
        <a href="https://facebook.com/glamoroushub" target="_blank" 
           class="w-12 h-12 bg-black border border-gray-800 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gold hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 group relative">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
          </svg>
          <span class="absolute right-full mr-4 bg-black border border-gold text-gold text-xs font-bold uppercase tracking-widest py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Facebook
          </span>
        </a>

        <!-- Divider -->
        <div class="w-[1px] h-8 bg-gray-800"></div>
      </div>

      <!-- WhatsApp Button (Green circular bubble with pulse) -->
      <a href="https://wa.me/+254742641574" target="_blank" 
         class="relative w-12 h-12 md:w-14 md:h-14 bg-[#25D366] flex items-center justify-center text-white hover:bg-white hover:text-[#25D366] hover:-translate-y-1 transition-all duration-300 group shadow-[0_0_20px_rgba(37,211,102,0.4)] animate-fade-in"
         style="border-radius: 50%;">
        
        <!-- Circular Pulse effect -->
        <span class="absolute inset-0 border border-[#25D366] opacity-50 animate-ping" style="border-radius: 50%;"></span>
        <span class="absolute inset-0 border border-[#25D366] opacity-30 animate-ping" style="border-radius: 50%; animation-delay: 0.5s;"></span>

        <!-- WhatsApp Icon (Sharp vector) -->
        <svg class="w-6 h-6 md:w-7 md:h-7 text-current" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>

        <!-- Hover Tooltip -->
        <span class="absolute right-full mr-4 bg-black border border-[#25D366] text-[#25D366] text-xs font-bold uppercase tracking-widest py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg flex items-center">
          <span class="w-1 h-4 bg-[#25D366] mr-2"></span> Book via WhatsApp
        </span>
      </a>
    </div>
  `,
  styles: []
})
export class FloatingSocialsComponent {}
