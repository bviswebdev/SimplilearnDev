import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../components/question/Question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {
    /*this.getJSON().subscribe((data) => {
      console.log(data);
    });*/
  }

  public getJSON(): Observable<Array<Question>> {
    return this.http.get<Array<Question>>('assets/json/questiondata.json');
  }
}
