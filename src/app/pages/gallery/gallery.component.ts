import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
          </div>
        </div>

        <!-- Static Gallery -->
        <div class="animate-slide-up" style="animation-delay: 0.2s">
          <h2 class="text-3xl font-bold text-white uppercase tracking-wider mb-8 flex items-center">
            <span class="text-gold mr-4">02</span> The Hub
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <!-- Mock gallery images -->
            <div *ngFor="let item of mockData.gallery()" 
                 class="aspect-square bg-gray-900 border border-gray-800 hover:border-gold transition-colors duration-300 relative group overflow-hidden block"
                 [ngClass]="item.gridClasses || ''">
              
              <!-- Instagram post/reel page url -->
              <ng-container *ngIf="isInstagram(item.thumbnail); else standardImage">
                <iframe 
                  [src]="getSafeEmbed(item.thumbnail)" 
                  class="absolute inset-0 w-full h-full border-0 z-10"
                  scrolling="no" 
                  allowtransparency="true" 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
              </ng-container>

              <!-- Standard Image / Direct Image URL -->
              <ng-template #standardImage>
                <a [href]="item.fullImage" target="_blank" class="w-full h-full block">
                  <img [src]="item.thumbnail" 
                       [alt]="item.alt" 
                       referrerpolicy="no-referrer"
                       class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700">
                </a>
              </ng-template>
              
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
    private seo: SeoService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.seo.updateTags({
      title: 'Gallery & Reels',
      description: 'View the premium cuts, styles, and luxury atmosphere at Glamorous Hub.'
    });
  }

  isInstagram(url: string): boolean {
    if (!url) return false;
    return /instagram\.com\/(p|reel)\//.test(url);
  }

  getSafeEmbed(url: string): SafeResourceUrl {
    const pMatch = url.match(/\/p\/([A-Za-z0-9_-]+)/);
    const reelMatch = url.match(/\/reel\/([A-Za-z0-9_-]+)/);
    let embedUrl = '';
    if (pMatch && pMatch[1]) {
      embedUrl = `https://www.instagram.com/p/${pMatch[1]}/embed/`;
    } else if (reelMatch && reelMatch[1]) {
      embedUrl = `https://www.instagram.com/reel/${reelMatch[1]}/embed/`;
    } else {
      const cleanUrl = url.replace(/\/+$/, '');
      embedUrl = `${cleanUrl}/embed/`;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
