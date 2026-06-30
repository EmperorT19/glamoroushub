import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { SeoService } from '../../services/seo.service';
import { TestimonialCardComponent } from '../../components/testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TestimonialCardComponent],
  template: `
    <div class="pt-32 pb-24 min-h-screen bg-black-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-20 animate-fade-in">
          <h1 class="text-5xl font-bold text-white uppercase tracking-tight mb-4">Client Reviews</h1>
          <div class="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Hear from gentlemen who have experienced the gold standard.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          <app-testimonial-card *ngFor="let t of mockData.testimonials()" [testimonial]="t"></app-testimonial-card>
        </div>
        
      </div>
    </div>
  `,
  styles: []
})
export class TestimonialsComponent implements OnInit {
  constructor(
    public mockData: MockDataService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.updateTags({
      title: 'Reviews',
      description: 'Read what our clients have to say about their premium grooming experience.'
    });
  }
}
