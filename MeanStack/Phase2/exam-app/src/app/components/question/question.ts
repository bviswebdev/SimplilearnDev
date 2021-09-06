import { Answer } from './answer';

export class Question {
  /*answers: Array<Answer> = new Array<Answer>();
  questionName: string;
  correctAnswer: string;*/

  constructor(
    public questionLabelId: string,
    public question: string,
    public questionName: string,
    public answers: Array<Answer>,
    public selectedAnswer: string,
    public correctAnswerId: string
  ) {}
}
