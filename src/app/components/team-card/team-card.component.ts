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
        <a routerLink="/booking" [queryParams]="{staff: member.id}" class="absolute inset-0 block z-10">
          <img [src]="member.photoUrl" [alt]="member.name" 
               class="w-full h-full object-cover filter md:grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105">
          <!-- Overlay gradient -->
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300"></div>
        </a>
        
        <!-- Content -->
        <div class="absolute bottom-0 left-0 w-full p-6 md:translate-y-4 translate-y-0 group-hover:translate-y-0 transition-transform duration-500 z-20 pointer-events-none">
          <p class="text-gold text-xs font-bold uppercase tracking-widest mb-1">{{ member.role }}</p>
          <a routerLink="/booking" [queryParams]="{staff: member.id}" class="group/name pointer-events-auto block w-fit">
            <h3 class="text-2xl text-white font-bold mb-1 group-hover/name:text-gold transition-colors duration-300">{{ member.name }}</h3>
          </a>
          <p class="text-gray-400 text-sm mb-4">{{ member.experience }} Experience</p>
          
          <div class="flex items-center justify-end md:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <a routerLink="/booking" [queryParams]="{staff: member.id}" 
               class="text-black bg-gold px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors pointer-events-auto">
              Book
            </a>
          </div>
        </div>
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
export class TeamCardComponent {
  @Input({ required: true }) member!: TeamMember;
}
