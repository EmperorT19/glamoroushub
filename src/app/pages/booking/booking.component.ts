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

        <div class="bg-black-light border border-gray-900 p-6 md:p-12 animate-slide-up shadow-2xl">
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
              <div class="relative">
                <select id="service" name="service" required [(ngModel)]="selectedService" #serviceCtrl="ngModel"
                        class="w-full bg-black border border-gray-800 text-white px-4 py-3 pr-10 focus:outline-none focus:border-gold transition-colors appearance-none"
                        [class.border-red-500]="serviceCtrl.invalid && (serviceCtrl.dirty || serviceCtrl.touched)">
                  <option value="" disabled selected>Select a service</option>
                  <option *ngFor="let s of mockData.services()" [value]="s.id">{{ s.name }}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gold">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Address/Location (Only shown for Mobile services) -->
            <div *ngIf="isMobileServiceSelected()" class="animate-fade-in space-y-2">
              <label for="address" class="block text-gold text-sm font-bold uppercase tracking-wider mb-2 flex items-center">
                <span class="mr-2">📍</span> Home Address / Service Location
              </label>
              <textarea id="address" name="address" required ngModel #addressCtrl="ngModel" rows="3"
                        placeholder="Enter the full address where the barber should travel (Street, Apt/Suite #, City, Gate Code, etc.)"
                        class="w-full bg-black border border-gold/50 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-gray-600"
                        [class.border-red-500]="addressCtrl.invalid && (addressCtrl.dirty || addressCtrl.touched)"></textarea>
              <p class="text-xs text-gray-500 italic">Our master barber will travel to this location. Please ensure someone is available at the scheduled time.</p>
            </div>

            <!-- Staff Selection -->
            <div>
              <label for="staff" class="block text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Preferred Specialist</label>
              <div class="relative">
                <select id="staff" name="staff" [(ngModel)]="selectedStaff"
                        class="w-full bg-black border border-gray-800 text-white px-4 py-3 pr-10 focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option value="any" selected>Anyone Available</option>
                  <option *ngFor="let m of mockData.team()" [value]="m.name">{{ m.name }} - {{ m.role }}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gold">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
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

  isMobileServiceSelected(): boolean {
    const service = this.mockData.services().find(s => s.id === this.selectedService);
    return service?.category === 'Mobile';
  }

  constructor(
    public mockData: MockDataService,
    private route: ActivatedRoute,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.seo.updateTags({
      title: 'Book Appointment',
      description: 'Schedule your next grooming session at Glamorous Hub.'
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
