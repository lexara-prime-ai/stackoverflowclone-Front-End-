import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PopUpService {
    /* DEFINE PROPERTIES TO HOLD THE ACTIVE STATE */

    // ASK QUESTION FORM SUBJECT
    private askQuestionFormSubject = new Subject<boolean>();
    askQuestionForm$ = this.askQuestionFormSubject.asObservable();

    // EDIT QUESTION FORM SUBJECT
    private editQuestionFormSubject = new Subject<boolean>();
    editQuestionForm$ = this.editQuestionFormSubject.asObservable();

    /* METHODS FOR OPENING POP UPS */
    openAskQuestionForm(): void {
        this.askQuestionFormSubject.next(true);
        this.editQuestionFormSubject.next(false);
    }

    openEditQuestionForm(): void {
        this.editQuestionFormSubject.next(true);
        this.askQuestionFormSubject.next(false);
    }

    /* METHODS FOR CLOSING POP UPS */
    closeAskQuestionForm(): void {
        this.askQuestionFormSubject.next(false);
    }

    closeEditQuestionForm(): void {
        this.editQuestionFormSubject.next(false);
    }
}