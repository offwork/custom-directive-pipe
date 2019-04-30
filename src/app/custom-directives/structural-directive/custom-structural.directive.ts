import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface RangeContext {
  $implicit: number;
  index: number;
  first: boolean;
  last: boolean;
}

@Directive({
  selector: '[appCustomFor]'
})
export class CustomForDirective {
  @Input()
  set appCustomFor(value: [number, number] | number) {
    this.viewContainerRef.clear();

    const [from, to] = Array.isArray(value) ? value : [0, value];
    const range = this.generateRange(from, to);

    range.forEach((itemNum, index) =>
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: itemNum,
        index,
        first: index === 0,
        last: index + 1 === range.length
      })
    );
  }

  constructor(
    private templateRef: TemplateRef<RangeContext>,
    private viewContainerRef: ViewContainerRef
  ) {}

  private generateRange(from: number = 0, to: number): number[] {
    return Array.from({ length: to - from }, (_, index) => index + from);
  }
}
