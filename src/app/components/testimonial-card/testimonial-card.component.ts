import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../services/mock-data.service';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border border-gray-900 bg-black p-8 relative hover:border-gold/50 transition-colors duration-500">
      <!-- Quote icon -->
      <div class="absolute top-6 right-6 text-gold/10">
        <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <!-- Stars -->
      <div class="flex text-gold mb-6">
        <ng-container *ngFor="let i of [1,2,3,4,5]">
          <svg class="w-5 h-5" [ngClass]="i <= testimonial.rating ? 'text-gold' : 'text-gray-800'" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </ng-container>
      </div>
      
      <p class="text-gray-300 italic mb-8 relative z-10 text-lg leading-relaxed">
        "{{ testimonial.content }}"
      </p>
      
      <div class="border-t border-gray-900 pt-4 mt-auto">
        <p class="text-white font-bold tracking-wider uppercase">{{ testimonial.author }}</p>
      </div>
    </div>
  `,
  styles: []
})
export class TestimonialCardComponent {
  @Input({ required: true }) testimonial!: Testimonial;
}
