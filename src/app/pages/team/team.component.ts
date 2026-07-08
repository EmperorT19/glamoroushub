import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { SeoService } from '../../services/seo.service';
import { TeamCardComponent } from '../../components/team-card/team-card.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, TeamCardComponent],
  template: `
    <div class="pt-32 pb-24 min-h-screen bg-black-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-20 animate-fade-in">
          <h1 class="text-5xl font-bold text-white uppercase tracking-tight mb-4">The Masters</h1>
          <div class="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Meet the expert craftsmen and specialists dedicated to elevating your style.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto animate-slide-up">
          <app-team-card *ngFor="let member of mockData.team()" [member]="member"></app-team-card>
        </div>
        
      </div>
    </div>
  `,
  styles: []
})
export class TeamComponent implements OnInit {
  constructor(
    public mockData: MockDataService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.updateTags({
      title: 'The Team',
      description: 'Meet the expert barbers and grooming specialists at Glamorous Hub.'
    });
  }
}
