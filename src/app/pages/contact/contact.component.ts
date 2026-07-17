import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="pt-32 pb-24 min-h-screen bg-black relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="text-center mb-20 animate-fade-in">
          <h1 class="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">Contact Us</h1>
          <div class="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Get in touch for inquiries, exclusive bookings, or corporate partnerships.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-slide-up">
          
          <!-- Contact Info & Map -->
          <div>
            <div class="mb-12">
              <h2 class="text-2xl font-bold text-white uppercase tracking-wider mb-6 flex items-center">
                <span class="w-8 h-[2px] bg-gold mr-4"></span> Details
              </h2>
              <ul class="space-y-6 text-gray-300 text-lg">
                <li class="flex items-start">
                  <span class="text-gold mt-1 mr-4">📍</span>
                  <span>Bravion House, Kindaruma Road,<br>Opposite Carrefour Supermarket,<br>Rose Avenue Mall, Next to Listers Car Wash</span>
                </li>
                <li class="flex items-center">
                  <span class="text-gold mr-4">📞</span>
                  <span>+254 700 000 000</span>
                </li>
                <li class="flex items-center">
                  <span class="text-gold mr-4">✉️</span>
                  <a href="mailto:contact&#64;glamoroushub.co.ke" class="hover:text-gold transition-colors">contact&#64;glamoroushub.co.ke</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 class="text-2xl font-bold text-white uppercase tracking-wider mb-6 flex items-center">
                <span class="w-8 h-[2px] bg-gold mr-4"></span> Hours
              </h2>
              <ul class="space-y-3 text-gray-300">
                <li class="flex justify-between border-b border-gray-900 pb-2">
                  <span>Monday - Friday</span>
                  <span class="text-gold">8:00 AM - 8:00 PM</span>
                </li>
                <li class="flex justify-between border-b border-gray-900 pb-2">
                  <span>Saturday</span>
                  <span class="text-gold">9:00 AM - 7:00 PM</span>
                </li>
                <li class="flex justify-between pb-2">
                  <span>Sunday</span>
                  <span class="text-gold">10:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
            
            <!-- Map Placeholder -->
            <div class="mt-12 aspect-[16/9] bg-gray-900 border border-gray-800 flex items-center justify-center p-4">
              <div class="text-center">
                <span class="text-4xl block mb-2">🗺️</span>
                <p class="text-gray-500 uppercase tracking-widest text-sm">Map Integration Placeholder</p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-black-light border border-gray-900 p-6 md:p-12">
            <h2 class="text-2xl font-bold text-white uppercase tracking-wider mb-8">Send a Message</h2>
            
            <form #contactForm="ngForm" action="https://formspree.io/f/YOUR_FORM_ID_HERE" method="POST" (ngSubmit)="onSubmit(contactForm)" class="space-y-6">
              <div>
                <label for="name" class="block text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Name</label>
                <input type="text" id="name" name="name" required ngModel
                       class="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors">
              </div>
              
              <div>
                <label for="email" class="block text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Email</label>
                <input type="email" id="email" name="email" required ngModel
                       class="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors">
              </div>

              <div>
                <label for="subject" class="block text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Subject</label>
                <input type="text" id="subject" name="subject" required ngModel
                       class="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors">
              </div>
              
              <div>
                <label for="message" class="block text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Message</label>
                <textarea id="message" name="message" rows="5" required ngModel
                          class="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
              </div>

              <button type="submit" [disabled]="contactForm.invalid || submitted"
                      class="w-full bg-gold text-black font-bold uppercase tracking-widest py-4 border border-gold hover:bg-black hover:text-gold transition-colors duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                {{ submitted ? 'Sending...' : 'Send Message' }}
              </button>
              
              <p *ngIf="submitted" class="text-green-500 text-center text-sm mt-4">
                Message sent successfully. We'll be in touch!
              </p>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  submitted = false;

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateTags({
      title: 'Contact',
      description: 'Get in touch with Glamorous Hub in Nairobi.'
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      if (form.value.action) {
        form.control.markAsPristine();
      } else {
        setTimeout(() => {
          this.submitted = false;
          form.resetForm();
        }, 3000);
      }
    }
  }
}
