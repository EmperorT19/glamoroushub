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
      imageUrl: 'https://images.unsplash.com/photo-1596362601603-b74f6ef166e4?fm=jpg&q=80&w=600&auto=format&fit=crop', 
      description: 'Premium cut with hot towel finish' 
    },
    { 
      id: '2', 
      name: 'Beard Trim & Shape', 
      category: 'Grooming', 
      imageUrl: 'https://images.unsplash.com/photo-1632072907857-d2cae8f52888?fm=jpg&q=80&w=600&auto=format&fit=crop', 
      description: 'Precision beard sculpting' 
    },
    { 
      id: '3', 
      name: 'Hair Color/Dye', 
      category: 'Hair', 
      imageUrl: 'https://images.unsplash.com/photo-1584906755531-f83be6b88d6b?fm=jpg&q=80&w=600&auto=format&fit=crop', 
      description: 'Professional coloring services' 
    },
    { 
      id: '4', 
      name: 'Facial Scrub & Wash', 
      category: 'Grooming', 
      imageUrl: 'https://www.byrdie.com/thmb/hVybIRXXPqRCSkuzx1K3XcOyC5Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/byr-primary-facial-cleansing-brushes-tstaples-303-be2ed7a551f04e6ca5f54c6a07bdf7bc.jpg', 
      description: 'Deep cleansing facial' 
    },
    { 
      id: '5', 
      name: 'Kids Haircut', 
      category: 'Hair', 
      imageUrl: 'https://i.pinimg.com/1200x/0d/07/10/0d071030352e925db1c764351312759d.jpg', 
      description: 'Gentle and stylish cuts for kids' 
    },
    { 
      id: '6', 
      name: 'Luxury Hot Towel Shave', 
      category: 'Grooming', 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQlFiZxWoLWV9albeq_npRjZSOqrgKtENPIYMgui7Yg&s=10', 
      description: 'Classic straight razor shave with soothing hot towel oils' 
    },
    { 
      id: '7', 
      name: 'Buzz Cut & Lineup', 
      category: 'Hair', 
      imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?fm=jpg&q=80&w=600&auto=format&fit=crop', 
      description: 'Clean buzz cut with precision razor hairline definition' 
    },
    { 
      id: '8', 
      name: 'Charcoal Clay Mask', 
      category: 'Grooming', 
      imageUrl: 'https://images.unsplash.com/photo-1619153709656-b2cf605b819b?fm=jpg&q=80&w=600&auto=format&fit=crop', 
      description: 'Deep pore detoxifying black charcoal facial mask' 
    },
    { 
      id: '9', 
      name: 'Scalp Massage & Therapy', 
      category: 'Grooming', 
      imageUrl: 'https://t4.ftcdn.net/jpg/01/09/27/77/360_F_109277740_u9NA3PkFeCcCVmBxKSvwHdAWt4Egzbbk.jpg', 
      description: 'Invigorating massage to stimulate hair follicles and relax' 
    },
    { 
      id: '10', 
      name: 'Premium Hair Treatment', 
      category: 'Hair', 
      imageUrl: 'https://images.unsplash.com/photo-1637777292536-27a13272dbea?fm=jpg&q=80&w=600&auto=format&fit=crop', 
      description: 'Deep conditioning treatment to restore moisture and shine' 
    },
    { 
      id: '11', 
      name: 'Nail Grooming & Manicure', 
      category: 'Grooming', 
      imageUrl: 'https://images.unsplash.com/photo-1595320378041-72f4c1490773?fm=jpg&q=80&w=600&auto=format&fit=crop', 
      description: 'Professional buffing, shaping, and cuticle care for hands' 
    },
    { 
      id: '12', 
      name: 'VIP House Call Grooming', 
      category: 'Mobile', 
      imageUrl: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?fm=jpg&q=80&w=600&auto=format&fit=crop', 
      description: 'Our master barber travels directly to your residence, fully equipped with a mobile studio. Includes executive haircut, hot towel finish, and beard sculpting.' 
    },
    { 
      id: '13', 
      name: 'At-Home Executive Haircut', 
      category: 'Mobile', 
      imageUrl: 'https://images.unsplash.com/photo-1612214070495-ffc6b69cda4b?fm=jpg&q=80&w=600&auto=format&fit=crop', 
      description: 'Premium executive haircut in the comfort and privacy of your own home or office. Includes shampoo, styling, and scalp massage.' 
    },
    { 
      id: '14', 
      name: 'Elite Beard & Shave (At-Home)', 
      category: 'Mobile', 
      imageUrl: 'https://images.unsplash.com/photo-1632072907857-d2cae8f52888?fm=jpg&q=80&w=600&auto=format&fit=crop', 
      description: 'Luxury straight razor hot towel shave or beard shape-up with therapeutic oils, performed right at your location.' 
    },
    { 
      id: '15', 
      name: 'Event & Wedding Grooming VIP', 
      category: 'Mobile', 
      imageUrl: 'https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?fm=jpg&q=80&w=600&auto=format&fit=crop', 
      description: 'Bespoke grooming packages for groomsmen or corporate events. We bring multiple master barbers to style your group on-site.' 
    }
  ]);

  readonly services = this.servicesSignal.asReadonly();
  
  readonly hairServices = computed(() => this.servicesSignal().filter(s => s.category === 'Hair'));
  readonly groomingServices = computed(() => this.servicesSignal().filter(s => s.category === 'Grooming'));
  readonly mobileServices = computed(() => this.servicesSignal().filter(s => s.category === 'Mobile'));

  // --- Team Data ---
  private teamSignal = signal<TeamMember[]>([
    {
      id: 'barber1',
      name: 'Obba',
      role: 'Master Barber',
      experience: '20+ Years',
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
      experience: '3+ Years',
      photoUrl: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1783504189/IMG_20260706_145312_705.jpg_g4psvn.jpg',
      instagram: 'https://instagram.com/glamoroushub',
      tiktok: 'https://tiktok.com/@glamoroushub'
    },
    {
      id: 'barber3',
      name: 'Moha',
      role: 'Senior Stylist & Groomer',
      experience: '7+ Years',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
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
      thumbnail: 'assets/gallery/gal1-placeholder.jpg',
      fullImage: 'https://www.instagram.com/p/DaQAVhItOhH/',
      alt: 'Gallery 1'
    },
    {
      id: 'g2',
      thumbnail: 'assets/gallery/gal2-placeholder.jpg',
      fullImage: 'https://www.instagram.com/p/DaNODl6NBq2/',
      alt: 'Gallery 2'
    },
    {
      id: 'g3',
      thumbnail: 'assets/gallery/gal3-placeholder.jpg',
      fullImage: 'https://www.instagram.com/p/DZy_3H2jT9v/?img_index=1',
      alt: 'Gallery 3',
      gridClasses: 'lg:col-span-2'
    },
    {
      id: 'g4',
      thumbnail: 'assets/gallery/gal4-placeholder.jpg',
      fullImage: 'https://www.instagram.com/p/DZ4QiBet8rg/',
      alt: 'Gallery 4',
      gridClasses: 'lg:row-span-2 lg:h-full'
    },
    {
      id: 'g5',
      thumbnail: 'assets/gallery/gal5-placeholder.jpg',
      fullImage: 'https://www.instagram.com/p/DaKJLQwDUbx/?img_index=1',
      alt: 'Gallery 5'
    },
    {
      id: 'g6',
      thumbnail: 'assets/gallery/gal6-placeholder.jpg',
      fullImage: 'https://www.instagram.com/glamorouslifestylehub/',
      alt: 'Gallery 6'
    }
  ]);

  readonly gallery = this.gallerySignal.asReadonly();

  constructor() {}
}
