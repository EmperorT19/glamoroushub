import { Injectable, signal, computed } from '@angular/core';

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
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
    { 
      id: '1', 
      name: 'Executive Haircut', 
      category: 'Hair', 
      imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop', 
      description: 'Premium cut with hot towel finish' 
    },
    { 
      id: '2', 
      name: 'Beard Trim & Shape', 
      category: 'Grooming', 
      imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop', 
      description: 'Precision beard sculpting' 
    },
    { 
      id: '3', 
      name: 'Hair Color/Dye', 
      category: 'Hair', 
      imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop', 
      description: 'Professional coloring services' 
    },
    { 
      id: '4', 
      name: 'Facial Scrub & Wash', 
      category: 'Grooming', 
      imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop', 
      description: 'Deep cleansing facial' 
    },
    { 
      id: '5', 
      name: 'Kids Haircut', 
      category: 'Hair', 
      imageUrl: 'https://images.unsplash.com/photo-1517832606589-7a598bbd0af3?q=80&w=600&auto=format&fit=crop', 
      description: 'Gentle and stylish cuts for kids' 
    },
    { 
      id: '6', 
      name: 'Luxury Hot Towel Shave', 
      category: 'Grooming', 
      imageUrl: 'https://images.unsplash.com/photo-1634480256802-7cb5b451f99a?q=80&w=600&auto=format&fit=crop', 
      description: 'Classic straight razor shave with soothing hot towel oils' 
    },
    { 
      id: '7', 
      name: 'Buzz Cut & Lineup', 
      category: 'Hair', 
      imageUrl: 'https://images.unsplash.com/photo-1593702295094-aec22597af65?q=80&w=600&auto=format&fit=crop', 
      description: 'Clean buzz cut with precision razor hairline definition' 
    },
    { 
      id: '8', 
      name: 'Charcoal Clay Mask', 
      category: 'Grooming', 
      imageUrl: 'https://images.unsplash.com/photo-1561228987-8e7b77f9ca8f?q=80&w=600&auto=format&fit=crop', 
      description: 'Deep pore detoxifying black charcoal facial mask' 
    },
    { 
      id: '9', 
      name: 'Scalp Massage & Therapy', 
      category: 'Grooming', 
      imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop', 
      description: 'Invigorating massage to stimulate hair follicles and relax' 
    },
    { 
      id: '10', 
      name: 'Premium Hair Treatment', 
      category: 'Hair', 
      imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop', 
      description: 'Deep conditioning treatment to restore moisture and shine' 
    },
    { 
      id: '11', 
      name: 'Nail Grooming & Manicure', 
      category: 'Grooming', 
      imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop', 
      description: 'Professional buffing, shaping, and cuticle care for hands' 
    }
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
      instagram: 'https://instagram.com/glamoroushub',
      tiktok: 'https://tiktok.com/@glamoroushub'
    },
    {
      id: 'barber2',
      name: 'Kevin Ochieng',
      role: 'Fade Specialist',
      experience: '5+ Years',
      photoUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=600&auto=format&fit=crop',
      instagram: 'https://instagram.com/glamoroushub',
      tiktok: 'https://tiktok.com/@glamoroushub'
    },
    {
      id: 'specialist1',
      name: 'Sarah Wanjiku',
      role: 'Wash & Grooming Specialist',
      experience: '6+ Years',
      photoUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop',
      instagram: 'https://instagram.com/glamoroushub',
      tiktok: 'https://tiktok.com/@glamoroushub'
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
