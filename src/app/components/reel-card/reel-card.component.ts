import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Reel } from '../../services/mock-data.service';

@Component({
  selector: 'app-reel-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative group aspect-[9/16] bg-black border border-gray-900 overflow-hidden w-full h-full flex flex-col justify-between">
      
      <!-- Video / Iframe Player Container -->
      <div class="w-full h-full relative overflow-hidden bg-black flex-grow">
        
        <!-- Pre-play cover (Shown when not playing) -->
        <div *ngIf="!isPlaying()" 
             (click)="playVideo()"
             class="absolute inset-0 z-10 cursor-pointer block">
          <!-- Thumbnail cover image -->
          <img [src]="reel.thumbnail" [alt]="reel.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
          <!-- Dark overlay gradient -->
          <div class="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition-colors duration-300"></div>
          <!-- Play Button Icon -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-14 h-14 bg-black/70 border border-gold/45 hover:border-gold hover:scale-110 flex items-center justify-center rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <svg class="w-6 h-6 text-gold ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Active Player (Shown once playing is clicked) -->
        <ng-container *ngIf="isPlaying()">
          <!-- Direct MP4 Video Player -->
          <video 
            *ngIf="isMp4(reel.videoUrl); else instagramIframe"
            [src]="reel.videoUrl" 
            class="absolute inset-0 w-full h-full object-cover" 
            controls 
            autoplay 
            playsinline>
          </video>
          
          <!-- Instagram Iframe Player fallback -->
          <ng-template #instagramIframe>
            <iframe 
              *ngIf="safeUrl"
              [src]="safeUrl" 
              class="absolute inset-0 w-full h-full border-0"
              scrolling="no" 
              allowtransparency="true" 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
          </ng-template>
        </ng-container>

      </div>
      
      <!-- Premium Overlay Title (Matches website aesthetic) -->
      <div class="p-3 bg-black-light border-t border-gray-900 relative z-20">
        <p class="text-white font-bold text-xs line-clamp-1 mb-0.5">{{ reel.title }}</p>
        <a [href]="reel.instagramUrl" target="_blank" class="text-[10px] text-gold/80 hover:text-gold flex items-center gap-1 font-semibold pointer-events-auto">
          View on Instagram
          <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class ReelCardComponent implements OnInit {
  @Input({ required: true }) reel!: Reel;
  
  safeUrl!: SafeResourceUrl;
  isPlaying = signal(false);

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.reel.instagramUrl) {
      const url = this.reel.instagramUrl;
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
      
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
  }

  isMp4(url: string | undefined): boolean {
    if (!url) return false;
    return url.toLowerCase().endsWith('.mp4') || url.includes('.mp4');
  }

  playVideo() {
    this.isPlaying.set(true);
  }
}
