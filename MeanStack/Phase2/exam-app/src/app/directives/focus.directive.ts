import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective {
  @Input('focus') focusEvent: EventEmitter<boolean>;

  constructor(
    @Inject(ElementRef) private element: ElementRef,
    private renderer: Renderer2
  ) {}

  private unlistener: () => void;

  ngOnInit() {
    this.unlistener = this.renderer.listen(
      this.element,
      'focusEvent',
      (event) => {
        console.log(`I am detecting mousemove at`);
        this.renderer.selectRootElement(this.element).focus();
      }
    );
  }

  ngOnDestroy() {
    this.unlistener();
  }
}

/*
private unlistener: () => void;

  ngOnInit() {
    this.unlistener = this.renderer2.listen("document", "mousemove", event => {
      console.log(`I am detecting mousemove at ${event.pageX}, ${event.pageY} on Document!`);
    });
  }

  ngOnDestroy() {
    this.unlistener();
  }*/
