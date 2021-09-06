import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit, AfterViewInit {
  @Output() resetQuestionForm = new EventEmitter<String>();
  @Input('testResult') examResult: number;
  @Input('passResult') passFlag: boolean;
  @ViewChild('retake') btnRetake: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  resetForm(): void {
    this.resetQuestionForm.emit('reset');
  }

  private onFocus(): void {
    this.btnRetake.nativeElement.focus();
  }

  ngAfterViewInit() {
    this.onFocus();
  }
}
