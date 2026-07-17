import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItem } from '../../services/mock-data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="group border border-gray-900 bg-black-light p-6 hover:border-gold transition-colors duration-500 flex flex-col h-full relative overflow-hidden">
      <!-- Image Container -->
      <a routerLink="/booking" [queryParams]="{service: service.id}" 
         class="relative block overflow-hidden aspect-[16/10] mb-6 border border-gray-800/60 group-hover:border-gold/30 transition-colors duration-500 z-10">
        <img [src]="service.imageUrl" [alt]="service.name" 
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out">
        <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
      </a>
      
      <!-- Category Badge -->
      <span class="text-gold text-xs uppercase tracking-widest font-semibold mb-2 block">{{ service.category }}</span>
      
      <div class="flex justify-between items-start mb-3 relative z-10">
        <a routerLink="/booking" [queryParams]="{service: service.id}" class="group/title">
          <h3 class="text-xl text-white font-bold group-hover:text-gold group-hover/title:text-gold transition-colors duration-300">
            {{ service.name }}
          </h3>
        </a>
      </div>
      
      <p *ngIf="service.description" class="text-gray-400 text-sm mb-6 flex-grow relative z-10 leading-relaxed">
        {{ service.description }}
      </p>
      
      <a routerLink="/booking" [queryParams]="{service: service.id}" 
         class="inline-block border-b border-gray-700 text-gray-300 text-sm uppercase tracking-wider pb-1 mt-auto group-hover:border-gold group-hover:text-gold transition-colors duration-300 relative z-10 w-fit">
        Book This Service
      </a>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceItem;
}
