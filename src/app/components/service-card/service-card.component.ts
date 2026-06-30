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
      <div class="absolute top-0 right-0 w-16 h-16 bg-gold/5 group-hover:bg-gold/10 transition-colors duration-500 rounded-bl-[100%] pointer-events-none"></div>
      
      <div class="flex justify-between items-start mb-4 relative z-10">
        <h3 class="text-xl text-white font-bold group-hover:text-gold transition-colors duration-300">
          {{ service.name }}
        </h3>
        <div class="text-right flex-shrink-0 ml-4">
          <div class="text-gold font-bold text-lg">KES {{ service.priceKes | number }}</div>
          <div class="text-gray-500 text-sm">(\${{ service.priceUsd }})</div>
        </div>
      </div>
      
      <p *ngIf="service.description" class="text-gray-400 text-sm mb-6 flex-grow relative z-10">
        {{ service.description }}
      </p>
      
      <a routerLink="/booking" [queryParams]="{service: service.id}" 
         class="inline-block border-b border-gray-700 text-gray-300 text-sm uppercase tracking-wider pb-1 mt-auto group-hover:border-gold group-hover:text-gold transition-colors duration-300 relative z-10 w-fit">
        Book This Service
      </a>
    </div>
  `,
  styles: []
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceItem;
}
