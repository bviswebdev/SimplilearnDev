import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionService } from 'src/app/Services/question.service';
import { Question } from './Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  questions: Array<Question> = new Array<Question>();
  currentQuestion: Question;
  examResult: number;
  passFlag: boolean = false;
  formSubmitted: boolean = false;
  submitBtnFlag: boolean = false;
  qForm: NgForm;

  constructor(
    private questionService: QuestionService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.questionService.getJSON().subscribe((data) => {
      console.log(data);
      this.questions = data;
    });
  }

  onSubmit(qForm: NgForm): void {
    let formValue = qForm.control.value;
    console.log(qForm);
    this.qForm = qForm;
    this.examResult = this.questions.reduce<number>((acc, q, i, arr) => {
      if (q.correctAnswerId === formValue[q.questionName]) acc = acc + 1;
      return acc;
    }, 0);
    if (this.examResult > 6) this.passFlag = true;
    this.formSubmitted = true;
    this.submitBtnFlag = true;
  }

  private setFormFocus(): void {
    window.scrollTo(0, 0);
  }

  resetFormData(name: string): void {
    this.passFlag = false;
    this.formSubmitted = false;
    this.submitBtnFlag = false;
    this.qForm.resetForm();
    this.setFormFocus();
  }
}
