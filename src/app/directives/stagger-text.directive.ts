import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appStaggerText]',
  standalone: true
})
export class StaggerTextDirective implements OnInit, OnDestroy {
  @Input('appStaggerText') delayBase: number = 0.05; // Base delay per word in seconds
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const text = this.el.nativeElement.innerText;
    this.el.nativeElement.innerText = '';
    
    // Split by words and spaces
    const words = text.split(/(\s+)/);
    
    let wordIndex = 0;
    words.forEach((word: string) => {
      if (word.trim() === '') {
        // Just append spaces directly
        this.renderer.appendChild(this.el.nativeElement, this.renderer.createText(word));
      } else {
        // Create a wrapper for the word
        const span = this.renderer.createElement('span');
        this.renderer.addClass(span, 'stagger-word');
        
        // Apply animation delay
        this.renderer.setStyle(span, 'animation-delay', `${wordIndex * this.delayBase}s`);
        
        const innerSpan = this.renderer.createElement('span');
        this.renderer.addClass(innerSpan, 'stagger-inner');
        this.renderer.appendChild(innerSpan, this.renderer.createText(word));
        
        this.renderer.appendChild(span, innerSpan);
        this.renderer.appendChild(this.el.nativeElement, span);
        wordIndex++;
      }
    });

    // Observe element for triggering animation
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'is-animating');
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.1 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
