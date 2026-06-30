import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reel } from '../../services/mock-data.service';

@Component({
  selector: 'app-reel-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative group aspect-[9/16] bg-gray-900 border border-gray-800 overflow-hidden cursor-pointer"
         (mouseenter)="playVideo()" (mouseleave)="pauseVideo()">
      
      <!-- Fallback Thumbnail -->
      <img *ngIf="!videoLoaded" [src]="reel.thumbnail" [alt]="reel.title" 
           class="absolute inset-0 w-full h-full object-cover z-0 filter brightness-75">
      
      <!-- Video Element -->
      <video #videoElement 
             class="absolute inset-0 w-full h-full object-cover z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
             loop muted playsinline preload="none"
             (loadeddata)="videoLoaded = true"
             [poster]="reel.thumbnail"
             [src]="reel.videoUrl">
      </video>
      
      <!-- Play Icon Overlay (visible when paused/not hovered) -->
      <div class="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <div class="w-16 h-16 rounded-full border-2 border-gold/50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <svg class="w-6 h-6 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <p class="text-white font-bold text-sm line-clamp-2">{{ reel.title }}</p>
      </div>
    </div>
  `,
  styles: []
})
export class ReelCardComponent {
  @Input({ required: true }) reel!: Reel;
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  
  videoLoaded = false;

  playVideo() {
    if (this.videoElement && this.videoElement.nativeElement) {
      // Catch promise to avoid errors on quick hover in/out
      const playPromise = this.videoElement.nativeElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }

  pauseVideo() {
    if (this.videoElement && this.videoElement.nativeElement) {
      this.videoElement.nativeElement.pause();
    }
  }
}
