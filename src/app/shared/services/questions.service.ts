import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { QUESTION_MODEL } from "../models/question.model";

@Injectable({
    providedIn: "root"
})
export class QuestionService {
    /* BASE URL */
    private BASE_URL = `http://localhost:8000`;

    constructor(private HTTP: HttpClient) { }

    /* GET ALL QUESTIONS */
    getQuestions(): Observable<QUESTION_MODEL[]> {
        return this.HTTP.get<QUESTION_MODEL[]>(this.BASE_URL + '/questions');
    }

    /* GET QUESTION BY ID */
    getQuestionById(payload: number): Observable<QUESTION_MODEL> {
        return this.HTTP.get<QUESTION_MODEL>(this.BASE_URL + `/questions${payload}`);
    }

    /* CREATE QUESTION */
    addQuestion(payload: QUESTION_MODEL): Observable<QUESTION_MODEL> {
        return this.HTTP.post<QUESTION_MODEL>(this.BASE_URL + '/questions', payload);
    }

    /* UPDATE QUESTION */
    updateQuestion(question: QUESTION_MODEL): Observable<QUESTION_MODEL> {
        return this.HTTP.patch<QUESTION_MODEL>(`${this.BASE_URL}/questions/${question.question_id}`,
            question
        );
    }

    /* DELETE QUESTION */
    deleteQuestion(payload: number) {
        return this.HTTP.delete(`${this.BASE_URL}/questions/${payload}`);
    }
}