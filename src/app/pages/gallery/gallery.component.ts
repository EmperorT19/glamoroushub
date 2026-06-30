import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { SeoService } from '../../services/seo.service';
import { ReelCardComponent } from '../../components/reel-card/reel-card.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ReelCardComponent],
  template: `
    <div class="pt-32 pb-24 min-h-screen bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-20 animate-fade-in">
          <h1 class="text-5xl font-bold text-white uppercase tracking-tight mb-4">Gallery & Reels</h1>
          <div class="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            A visual showcase of our finest work, cuts, and the luxurious ambiance of the Hub.
          </p>
        </div>

        <!-- Reels Section -->
        <div class="mb-24 animate-slide-up">
          <h2 class="text-3xl font-bold text-white uppercase tracking-wider mb-8 flex items-center">
            <span class="text-gold mr-4">01</span> Latest Reels
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <app-reel-card *ngFor="let reel of mockData.reels()" [reel]="reel"></app-reel-card>
            <!-- Add more dummy reels for grid fill -->
            <app-reel-card *ngFor="let reel of mockData.reels()" [reel]="reel"></app-reel-card>
          </div>
        </div>

        <!-- Static Gallery -->
        <div class="animate-slide-up" style="animation-delay: 0.2s">
          <h2 class="text-3xl font-bold text-white uppercase tracking-wider mb-8 flex items-center">
            <span class="text-gold mr-4">02</span> The Hub
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <!-- Mock gallery images -->
            <div class="aspect-square bg-gray-900 border border-gray-800 hover:border-gold transition-colors duration-300 relative group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop" alt="Gallery 1" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700">
            </div>
            <div class="aspect-square bg-gray-900 border border-gray-800 hover:border-gold transition-colors duration-300 relative group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop" alt="Gallery 2" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700">
            </div>
            <div class="aspect-square bg-gray-900 border border-gray-800 hover:border-gold transition-colors duration-300 relative group overflow-hidden lg:col-span-2">
              <img src="https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=600&auto=format&fit=crop" alt="Gallery 3" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700">
            </div>
            <div class="aspect-square bg-gray-900 border border-gray-800 hover:border-gold transition-colors duration-300 relative group overflow-hidden lg:row-span-2 lg:h-full">
              <img src="https://images.unsplash.com/photo-1512496015851-a1cbf59c363d?q=80&w=600&auto=format&fit=crop" alt="Gallery 4" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700">
            </div>
            <div class="aspect-square bg-gray-900 border border-gray-800 hover:border-gold transition-colors duration-300 relative group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1520627581292-1279262cf1b5?q=80&w=600&auto=format&fit=crop" alt="Gallery 5" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700">
            </div>
            <div class="aspect-square bg-gray-900 border border-gray-800 hover:border-gold transition-colors duration-300 relative group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1593702288056-cc1ec5712e1f?q=80&w=600&auto=format&fit=crop" alt="Gallery 6" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700">
            </div>
          </div>
        </div>
        
      </div>
    </div>
  `,
  styles: []
})
export class GalleryComponent implements OnInit {
  constructor(
    public mockData: MockDataService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.updateTags({
      title: 'Gallery & Reels',
      description: 'View the premium cuts, styles, and luxury atmosphere at Glamorous Milliards Lifestyle Hub.'
    });
  }
}
