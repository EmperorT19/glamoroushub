import { Injectable, signal, computed } from '@angular/core';

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  priceKes: number;
  priceUsd: number;
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  photoUrl: string;
  instagram: string;
  tiktok: string;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  content: string;
}

export interface Reel {
  id: string;
  thumbnail: string;
  videoUrl: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  // --- Services Data ---
  private servicesSignal = signal<ServiceItem[]>([
    { id: '1', name: 'Executive Haircut', category: 'Hair', priceKes: 1500, priceUsd: 11, description: 'Premium cut with hot towel finish' },
    { id: '2', name: 'Beard Trim & Shape', category: 'Grooming', priceKes: 800, priceUsd: 6, description: 'Precision beard sculpting' },
    { id: '3', name: 'Hair Color/Dye', category: 'Hair', priceKes: 2500, priceUsd: 18, description: 'Professional coloring services' },
    { id: '4', name: 'Facial Scrub & Wash', category: 'Grooming', priceKes: 1200, priceUsd: 9, description: 'Deep cleansing facial' },
    { id: '5', name: 'Kids Haircut', category: 'Hair', priceKes: 800, priceUsd: 6, description: 'Gentle and stylish cuts for kids' }
  ]);

  readonly services = this.servicesSignal.asReadonly();
  
  readonly hairServices = computed(() => this.servicesSignal().filter(s => s.category === 'Hair'));
  readonly groomingServices = computed(() => this.servicesSignal().filter(s => s.category === 'Grooming'));

  // --- Team Data ---
  private teamSignal = signal<TeamMember[]>([
    {
      id: 'barber1',
      name: 'James Mwangi',
      role: 'Master Barber',
      experience: '8+ Years',
      photoUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop',
      instagram: 'https://instagram.com/glamorousmilliards',
      tiktok: 'https://tiktok.com/@glamorousmilliards'
    },
    {
      id: 'barber2',
      name: 'Kevin Ochieng',
      role: 'Fade Specialist',
      experience: '5+ Years',
      photoUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=600&auto=format&fit=crop',
      instagram: 'https://instagram.com/glamorousmilliards',
      tiktok: 'https://tiktok.com/@glamorousmilliards'
    },
    {
      id: 'specialist1',
      name: 'Sarah Wanjiku',
      role: 'Wash & Grooming Specialist',
      experience: '6+ Years',
      photoUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop',
      instagram: 'https://instagram.com/glamorousmilliards',
      tiktok: 'https://tiktok.com/@glamorousmilliards'
    }
  ]);

  readonly team = this.teamSignal.asReadonly();

  // --- Testimonials Data ---
  private testimonialsSignal = signal<Testimonial[]>([
    { id: 't1', author: 'David K.', rating: 5, content: 'Best haircut I have ever had. The attention to detail is unmatched.' },
    { id: 't2', author: 'Michael R.', rating: 5, content: 'Premium service from start to finish. Highly recommend James.' },
    { id: 't3', author: 'Brian N.', rating: 4, content: 'Great atmosphere and professional staff. Will definitely be back.' }
  ]);
  
  readonly testimonials = this.testimonialsSignal.asReadonly();

  // --- Reels Data ---
  private reelsSignal = signal<Reel[]>([
    { id: 'r1', thumbnail: 'https://images.unsplash.com/photo-1605497787864-46700c25d81b?q=80&w=400&auto=format&fit=crop', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'The Executive Fade' },
    { id: 'r2', thumbnail: 'https://images.unsplash.com/photo-1595089332560-f5a6f2b7f7ce?q=80&w=400&auto=format&fit=crop', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Beard Sculpting Masterclass' },
    { id: 'r3', thumbnail: 'https://images.unsplash.com/photo-1622288432450-277d0f658c11?q=80&w=400&auto=format&fit=crop', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Premium Wash & Care' }
  ]);

  readonly reels = this.reelsSignal.asReadonly();

  constructor() {}
}
