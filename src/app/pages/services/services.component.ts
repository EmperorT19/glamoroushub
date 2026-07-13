import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { SeoService } from '../../services/seo.service';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  template: `
    <div class="pt-32 pb-24 min-h-screen bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-20 animate-fade-in">
          <h1 class="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">Our Services</h1>
          <div class="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive range of premium grooming services. Experience the gold standard.
          </p>
        </div>

        <div class="animate-slide-up">
          <!-- Hair Category -->
          <div class="mb-20">
            <h2 class="text-3xl font-bold text-white uppercase tracking-wider mb-8 flex items-center">
              <span class="text-gold mr-4">01</span> Hair
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <app-service-card *ngFor="let service of mockData.hairServices()" [service]="service"></app-service-card>
            </div>
          </div>

          <!-- Grooming Category -->
          <div class="mb-20">
            <h2 class="text-3xl font-bold text-white uppercase tracking-wider mb-8 flex items-center">
              <span class="text-gold mr-4">02</span> Grooming & Care
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <app-service-card *ngFor="let service of mockData.groomingServices()" [service]="service"></app-service-card>
            </div>
          </div>

          <!-- Mobile Barbershop Category -->
          <div>
            <h2 class="text-3xl font-bold text-white uppercase tracking-wider mb-8 flex items-center">
              <span class="text-gold mr-4">03</span> Mobile Barbershop (House Call)
            </h2>
            <p class="text-gray-400 mb-8 max-w-3xl leading-relaxed">
              Experience the ultimate convenience. Our master barbers bring the entire premium grooming experience to your home, office, or event venue. We travel to you, fully equipped.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <app-service-card *ngFor="let service of mockData.mobileServices()" [service]="service"></app-service-card>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  `,
  styles: []
})
export class ServicesComponent implements OnInit {
  constructor(
    public mockData: MockDataService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.updateTags({
      title: 'Services',
      description: 'Explore our full range of premium haircuts, grooming, and luxury care services.'
    });
  }
}
