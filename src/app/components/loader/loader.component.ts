import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader-overlay" [class.hidden]="isHidden">
      <div class="loader-content" [class.fade-out]="isRevealing">
        <div class="logo-box">
          <img src="https://placehold.co/400x400/000000/D4AF37?text=LOGO" alt="Logo" class="w-16 h-16 object-contain animate-pulse">
        </div>
        <div class="loading-bar-container mt-8">
          <div class="loading-bar"></div>
        </div>
        <p class="text-gold text-xs uppercase tracking-[0.3em] mt-4 font-bold">The Gold Standard</p>
      </div>
      
      <!-- Split reveal panels -->
      <div class="panel panel-top" [class.slide-up]="isRevealing"></div>
      <div class="panel panel-bottom" [class.slide-down]="isRevealing"></div>
    </div>
  `,
  styles: [`
    .loader-overlay {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: visibility 0s 1s;
    }
    .loader-overlay.hidden {
      visibility: hidden;
    }
    
    .panel {
      position: absolute;
      left: 0;
      width: 100%;
      height: 50%;
      background-color: #000000;
      z-index: 1;
      transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    }
    .panel-top {
      top: 0;
      border-bottom: 1px solid rgba(212, 175, 55, 0.2);
    }
    .panel-bottom {
      bottom: 0;
    }
    
    .panel-top.slide-up {
      transform: translateY(-100%);
    }
    .panel-bottom.slide-down {
      transform: translateY(100%);
    }

    .loader-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: opacity 0.4s ease, transform 0.4s ease;
    }
    .loader-content.fade-out {
      opacity: 0;
      transform: scale(0.95);
    }
    .loader-overlay.hidden {
      display: none;
    }

    .logo-box {
      border: 2px solid #D4AF37;
      padding: 1rem;
      background: #000;
    }

    .loading-bar-container {
      width: 200px;
      height: 2px;
      background: #333;
      overflow: hidden;
    }

    .loading-bar {
      height: 100%;
      width: 100%;
      background: #D4AF37;
      transform: translateX(-100%);
      animation: load 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
    }

    @keyframes load {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(0); }
    }
  `]
})
export class LoaderComponent implements OnInit {
  isRevealing = false;
  isHidden = false;

  ngOnInit() {
    // Start revealing after the load animation finishes
    setTimeout(() => {
      this.isRevealing = true;
      // Hide completely after reveal transition
      setTimeout(() => {
        this.isHidden = true;
      }, 800);
    }, 1500);
  }
}
