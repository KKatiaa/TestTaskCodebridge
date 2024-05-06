import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTruncate]'
})
export class TruncateDirective implements OnInit {
  @Input() maxLength: number = 130;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    let text = this.el.nativeElement.innerText;
    if (text.length > this.maxLength) {
      text = text.substring(0, this.maxLength) + '...';
      this.el.nativeElement.innerText = text;
    }
  }
}

