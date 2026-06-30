import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMember } from '../../services/mock-data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="group relative overflow-hidden border border-gray-900">
      <div class="aspect-[3/4] overflow-hidden bg-gray-900 relative">
        <img [src]="member.photoUrl" [alt]="member.name" 
             class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105">
        
        <!-- Overlay gradient -->
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        
        <!-- Content -->
        <div class="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p class="text-gold text-xs font-bold uppercase tracking-widest mb-1">{{ member.role }}</p>
          <h3 class="text-2xl text-white font-bold mb-1">{{ member.name }}</h3>
          <p class="text-gray-400 text-sm mb-4">{{ member.experience }} Experience</p>
          
          <div class="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <div class="flex space-x-3">
              <a [href]="member.instagram" target="_blank" class="text-gray-400 hover:text-gold transition-colors">
                <span class="text-xs uppercase tracking-widest border-b border-transparent hover:border-gold pb-1">IG</span>
              </a>
              <a [href]="member.tiktok" target="_blank" class="text-gray-400 hover:text-gold transition-colors">
                <span class="text-xs uppercase tracking-widest border-b border-transparent hover:border-gold pb-1">TK</span>
              </a>
            </div>
            
            <a routerLink="/booking" [queryParams]="{staff: member.id}" 
               class="text-black bg-gold px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors">
              Book
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class TeamCardComponent {
  @Input({ required: true }) member!: TeamMember;
}
