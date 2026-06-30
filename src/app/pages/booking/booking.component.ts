import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="pt-32 pb-24 min-h-screen bg-black relative">
      <div class="absolute inset-0 bg-[url('/assets/pattern-bg.svg')] opacity-5 bg-repeat bg-center"></div>
      
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="text-center mb-12 animate-fade-in">
          <h1 class="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">Book Appointment</h1>
          <div class="w-16 h-1 bg-gold mx-auto"></div>
        </div>

        <div class="bg-black-light border border-gray-900 p-8 md:p-12 animate-slide-up shadow-2xl">
          <!-- Update the ACTION attribute below with your Formspree/EmailJS endpoint -->
          <form #bookingForm="ngForm" action="https://formspree.io/f/YOUR_FORM_ID_HERE" method="POST" (ngSubmit)="onSubmit(bookingForm)" class="space-y-6">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" id="name" name="name" required ngModel #name="ngModel"
                       class="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                       [class.border-red-500]="name.invalid && (name.dirty || name.touched)">
              </div>
              
              <!-- Phone -->
              <div>
                <label for="phone" class="block text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" required ngModel #phone="ngModel"
                       class="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                       [class.border-red-500]="phone.invalid && (phone.dirty || phone.touched)">
              </div>
            </div>

            <!-- Service Selection -->
            <div>
              <label for="service" class="block text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Service</label>
              <select id="service" name="service" required [(ngModel)]="selectedService" #serviceCtrl="ngModel"
                      class="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                      [class.border-red-500]="serviceCtrl.invalid && (serviceCtrl.dirty || serviceCtrl.touched)">
                <option value="" disabled selected>Select a service</option>
                <option *ngFor="let s of mockData.services()" [value]="s.id">{{ s.name }} - KES {{ s.priceKes }}</option>
              </select>
            </div>

            <!-- Staff Selection -->
            <div>
              <label for="staff" class="block text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Preferred Specialist</label>
              <select id="staff" name="staff" [(ngModel)]="selectedStaff"
                      class="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none">
                <option value="any" selected>Anyone Available</option>
                <option *ngFor="let m of mockData.team()" [value]="m.name">{{ m.name }} - {{ m.role }}</option>
              </select>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Date -->
              <div>
                <label for="date" class="block text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Date</label>
                <input type="date" id="date" name="date" required ngModel #date="ngModel"
                       class="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                       [class.border-red-500]="date.invalid && (date.dirty || date.touched)">
              </div>
              
              <!-- Time -->
              <div>
                <label for="time" class="block text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Time</label>
                <input type="time" id="time" name="time" required ngModel #time="ngModel"
                       class="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                       [class.border-red-500]="time.invalid && (time.dirty || time.touched)">
              </div>
            </div>

            <!-- Notes -->
            <div>
              <label for="notes" class="block text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Special Requests / Notes</label>
              <textarea id="notes" name="notes" rows="3" ngModel
                        class="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
            </div>

            <!-- Submit -->
            <button type="submit" [disabled]="bookingForm.invalid || submitted"
                    class="w-full bg-gold text-black font-bold uppercase tracking-widest py-4 border border-gold hover:bg-black hover:text-gold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4">
              {{ submitted ? 'Processing...' : 'Confirm Booking' }}
            </button>
            
            <p *ngIf="submitted" class="text-green-500 text-center text-sm mt-4">
              Booking request received. We will contact you shortly to confirm!
            </p>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    input[type="date"]::-webkit-calendar-picker-indicator,
    input[type="time"]::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  `]
})
export class BookingComponent implements OnInit {
  selectedService: string = '';
  selectedStaff: string = 'any';
  submitted = false;

  constructor(
    public mockData: MockDataService,
    private route: ActivatedRoute,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.updateTags({
      title: 'Book Appointment',
      description: 'Schedule your next grooming session at Glamorous Milliards Lifestyle Hub.'
    });

    this.route.queryParams.subscribe(params => {
      if (params['service']) {
        this.selectedService = params['service'];
      }
      if (params['staff']) {
        const staff = this.mockData.team().find(t => t.id === params['staff']);
        if (staff) {
          this.selectedStaff = staff.name;
        }
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Formspree or normal submit action handles the redirect/email.
      // For mock validation visually:
      this.submitted = true;
      
      // Real form submission would normally happen via the action attribute natively,
      // but to prevent default if needed, we'd handle HTTP post here.
      // Since it's client-side mockup + formspree, we allow normal HTML form submission if we want.
      if (form.value.action) {
        form.control.markAsPristine();
      } else {
        // Mock success
        setTimeout(() => {
          this.submitted = false;
          form.resetForm();
          this.selectedStaff = 'any';
          this.selectedService = '';
        }, 3000);
      }
    }
  }
}
