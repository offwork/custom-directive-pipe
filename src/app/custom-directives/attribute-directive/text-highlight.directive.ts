import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective implements OnChanges {
  @Input('appTextHighlight') textToHighlight: string;
  @Input() color = 'yellow';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.elementRef.nativeElement.innerText) {
      return;
    }

    const innerText = this.elementRef.nativeElement.innerText;
    const markElement = `<mark style="background-color: ${this.color};">${
      this.textToHighlight
    }</mark>`;
    const html = innerText.split(this.textToHighlight).join(markElement);
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
  }
}
