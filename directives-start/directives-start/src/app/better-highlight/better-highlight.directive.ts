import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
   // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
