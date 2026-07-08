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
  instagramUrl?: string;
  views?: string;
}

export interface GalleryItem {
  id: string;
  thumbnail: string;
  fullImage: string;
  alt: string;
  gridClasses?: string;
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
      name: 'Obba',
      role: 'Master Barber',
      experience: '23+ Years',
      photoUrl: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1783504188/IMG_20260704_095032_056.jpg_ka67ec.jpg',
      instagram: 'https://instagram.com/glamoroushub',
      tiktok: 'https://tiktok.com/@glamoroushub'
    },
    {
      id: 'barber2',
      name: 'Steve',
      role: 'Fade Specialist',
      experience: '5+ Years',
      photoUrl: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1783504187/IMG_20260701_144805_955.JPG_yn2drv.jpg',
      instagram: 'https://instagram.com/glamoroushub',
      tiktok: 'https://tiktok.com/@glamoroushub'
    },
    {
      id: 'specialist1',
      name: 'Mariam',
      role: 'Wash & Grooming Specialist',
      experience: '6+ Years',
      photoUrl: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1783504189/IMG_20260706_145312_705.jpg_g4psvn.jpg',
      instagram: 'https://instagram.com/glamoroushub',
      tiktok: 'https://tiktok.com/@glamoroushub'
    },
    {
      id: 'barber3',
      name: 'Moha',
      role: 'Senior Stylist & Groomer',
      experience: '7+ Years',
      photoUrl: 'https://images.unsplash.com/photo-1605497746444-ac9dbd340b66?q=80&w=600&auto=format&fit=crop',
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
  // To change the Reels, update the array below:
  // - 'thumbnail': The cover/poster image displayed before hover/play.
  // - 'videoUrl': The direct link to the MP4 video file that plays on hover.
  // - 'instagramUrl': The Instagram post link opened when clicking "View on Instagram".
  // - 'views': The overlay text showing the views count.
  private reelsSignal = signal<Reel[]>([
    {
      id: 'r1',
      thumbnail: 'assets/reels/reel-1.jpg',
      videoUrl: 'https://www.instagram.com/p/Daca8c4tMpA/',
      title: 'Master Barber Precision Shaping',
      instagramUrl: 'https://www.instagram.com/p/Daca8c4tMpA/',
    },
    {
      id: 'r2',
      thumbnail: 'assets/reels/reel-2.jpg',
      videoUrl: 'https://inspireddesignshairsalonandbarber.com/wp-content/uploads/2023/07/Have-you-seen-our-new-video-featuring-Our-Original-Barbershop.mp4',
      title: 'Precision Hair Cut & Fade Styling',
      instagramUrl: 'https://www.instagram.com/glamorouslifestylehub/reel/DaUx9t2Ay0E/',
      views: '53'
    },
    {
      id: 'r3',
      thumbnail: 'glam-logo-1.jpg',
      videoUrl: 'https://goodmansbarberlounge.com/wp-content/uploads/2021/07/haircut.mp4',
      title: 'Glamorous Hub Barbershop Official Logo Reveal',
      instagramUrl: 'https://www.instagram.com/glamorouslifestylehub/reel/DaPQc7at5dG/',
      views: '240'
    },
    {
      id: 'r4',
      thumbnail: 'assets/reels/reel-4.jpg',
      videoUrl: 'https://inspireddesignshairsalonandbarber.com/wp-content/uploads/2023/07/Have-you-seen-our-new-video-featuring-Our-Original-Barbershop.mp4',
      title: 'Classic Low Fade & Beard Styling Session',
      instagramUrl: 'https://www.instagram.com/glamorouslifestylehub/reel/DaK-fgNNWZK/',
      views: '828'
    },
    {
      id: 'r5',
      thumbnail: 'assets/reels/reel-5.jpg',
      videoUrl: 'https://goodmansbarberlounge.com/wp-content/uploads/2021/07/haircut.mp4',
      title: 'POV: It\'s five minutes to closing time! 🤣🤣',
      instagramUrl: 'https://www.instagram.com/glamorouslifestylehub/reel/DZuAsyAtd6p/',
      views: '2.1K'
    },
    {
      id: 'r6',
      thumbnail: 'assets/reels/reel-6.jpg',
      videoUrl: 'https://inspireddesignshairsalonandbarber.com/wp-content/uploads/2023/07/Have-you-seen-our-new-video-featuring-Our-Original-Barbershop.mp4',
      title: 'Premium Styling & Luxury Haircut Service',
      instagramUrl: 'https://www.instagram.com/glamorouslifestylehub/reel/DZrLM0wN44C/',
      views: '159'
    }
  ]);

  readonly reels = this.reelsSignal.asReadonly();

  // --- Gallery Data ---
  private gallerySignal = signal<GalleryItem[]>([
    {
      id: 'g1',
      thumbnail: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop',
      alt: 'Gallery 1'
    },
    {
      id: 'g2',
      thumbnail: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop',
      alt: 'Gallery 2'
    },
    {
      id: 'g3',
      thumbnail: 'https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=600&auto=format&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=1200&auto=format&fit=crop',
      alt: 'Gallery 3',
      gridClasses: 'lg:col-span-2'
    },
    {
      id: 'g4',
      thumbnail: 'https://images.unsplash.com/photo-1512496015851-a1cbf59c363d?q=80&w=600&auto=format&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1512496015851-a1cbf59c363d?q=80&w=1200&auto=format&fit=crop',
      alt: 'Gallery 4',
      gridClasses: 'lg:row-span-2 lg:h-full'
    },
    {
      id: 'g5',
      thumbnail: 'https://images.unsplash.com/photo-1520627581292-1279262cf1b5?q=80&w=600&auto=format&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1520627581292-1279262cf1b5?q=80&w=1200&auto=format&fit=crop',
      alt: 'Gallery 5'
    },
    {
      id: 'g6',
      thumbnail: 'https://images.unsplash.com/photo-1593702288056-cc1ec5712e1f?q=80&w=600&auto=format&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1593702288056-cc1ec5712e1f?q=80&w=1200&auto=format&fit=crop',
      alt: 'Gallery 6'
    }
  ]);

  readonly gallery = this.gallerySignal.asReadonly();

  constructor() {}
}
