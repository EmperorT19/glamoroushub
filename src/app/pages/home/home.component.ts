import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { SeoService } from '../../services/seo.service';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { TeamCardComponent } from '../../components/team-card/team-card.component';
import { ReelCardComponent } from '../../components/reel-card/reel-card.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { StaggerTextDirective } from '../../directives/stagger-text.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ServiceCardComponent, TeamCardComponent, ReelCardComponent, ScrollRevealDirective, StaggerTextDirective],
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 bg-[url('/assets/pattern-bg.svg')] opacity-10 bg-repeat bg-center"></div>
      
      <!-- Content -->
      <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 [appStaggerText]="0.1" class="text-4xl sm:text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-6 leading-tight">
          Redefining The Standard
        </h1>
        <p appScrollReveal class="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Experience premium grooming at Glamorous Hub. Sharp cuts, precise detailing, and an unmatched atmosphere designed for the modern gentleman.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a routerLink="/booking" class="bg-gold text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 w-full sm:w-auto text-center shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] border border-gold hover:border-white">
            Book Appointment
          </a>
          <a routerLink="/services" class="border border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-300 w-full sm:w-auto text-center">
            View Services
          </a>
        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="py-24 bg-black border-t border-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div appScrollReveal class="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <p class="text-gold uppercase tracking-widest font-bold text-sm mb-2">Our Expertise</p>
            <h2 class="text-4xl font-bold text-white uppercase tracking-tight">Premium Services</h2>
          </div>
          <a routerLink="/services" class="hidden md:inline-flex border-b border-gold text-gold uppercase tracking-widest text-sm pb-1 hover:text-white hover:border-white transition-colors mt-6 md:mt-0">
            View Full Menu
          </a>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div appScrollReveal *ngFor="let service of (mockData.services() | slice:0:3); let i = index" [style.transition-delay]="(i * 0.1) + 's'">
            <app-service-card [service]="service"></app-service-card>
          </div>
        </div>
        
        <div class="mt-12 text-center md:hidden">
          <a routerLink="/services" class="inline-block border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold hover:text-black transition-colors w-full">
            View Full Menu
          </a>
        </div>
      </div>
    </section>

    <!-- Mobile Barbershop House Call Promo Section -->
    <section class="py-24 relative bg-black overflow-hidden border-t border-gray-900">
      <!-- Background overlay with high quality abstract image/pattern -->
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593702295094-aec22597af65?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A]/85 to-black"></div>
      
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div appScrollReveal class="space-y-6">
          <p class="text-gold uppercase tracking-widest font-bold text-sm">Glamorous Hub House Calls</p>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight leading-tight">
            The Luxury Barbershop,<br>
            <span class="text-gold">At Your Doorstep.</span>
          </h2>
          <div class="w-20 h-1 bg-gold mx-auto my-6"></div>
          <p class="text-gray-300 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
            Can't make it to our studio? Experience our gold standard of grooming from the comfort and privacy of your home, office, or luxury hotel suite. Our master barbers travel fully equipped with professional mobile stations, sanitization kits, and premium products to deliver the ultimate private grooming session.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a routerLink="/booking" [queryParams]="{service: '12'}" class="bg-gold text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] border border-gold hover:border-white w-full sm:w-auto text-center">
              Book a House Call
            </a>
            <a routerLink="/services" class="border border-gray-700 text-gray-300 hover:text-gold hover:border-gold px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-300 w-full sm:w-auto text-center">
              View Mobile Menu
            </a>
          </div>
        </div>
      </div>
    </section>


    <!-- Team Strip Section -->
    <section class="py-24 bg-black-light border-y border-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div appScrollReveal class="text-center mb-16">
          <p class="text-gold uppercase tracking-widest font-bold text-sm mb-2">Master Craftsmen</p>
          <h2 class="text-4xl font-bold text-white uppercase tracking-tight">The Team</h2>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div appScrollReveal *ngFor="let member of mockData.team(); let i = index" [style.transition-delay]="(i * 0.1) + 's'">
            <app-team-card [member]="member"></app-team-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Reels Teaser Section -->
    <section class="py-24 bg-black overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div appScrollReveal class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-4xl font-bold text-white uppercase tracking-tight">Latest Work</h2>
          </div>
          <a routerLink="/gallery" class="text-gold uppercase tracking-widest text-sm hover:text-white transition-colors">
            See More &rarr;
          </a>
        </div>
        
        <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
          <div *ngFor="let reel of mockData.reels()" class="snap-start shrink-0 w-[280px] md:w-[320px]">
            <app-reel-card [reel]="reel"></app-reel-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `]
})
export class HomeComponent implements OnInit {
  constructor(
    public mockData: MockDataService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.updateTags({
      title: 'Home',
      description: 'Experience premium grooming at Glamorous Hub. Sharp cuts, precise detailing, and an unmatched atmosphere.'
    });
  }
}
