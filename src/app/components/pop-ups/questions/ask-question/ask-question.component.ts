// DEFAULT FORM DATA
const DEFAULT_FORM_DATA = {
    question: "Type question here..." as string,
    additional_info: "Additional information here..." as string,
    category: "Enter category(e.g javascript, debugging etc)" as string
};

import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconDefinition, faQuestion, faClose, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { PopUpService } from "src/app/shared/services/pop-up.service";

@Component({
    selector: 'ask-question',
    templateUrl: 'ask-question.component.html',
    styleUrls: ['ask-question.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule]
})
export class AskQuestionComponent implements OnInit {
    /* DEFAULT PROPERTIES */
    // SET isActive STATE TO false
    isActive: boolean = false;
    DEFAULT_FORM_DATA = DEFAULT_FORM_DATA;
    ASK_QUESTION_FORM!: FormGroup;
    /* ICONS */
    closeIcon: IconDefinition = faClose;
    questionMarkIcon: IconDefinition = faQuestion;
    warningIcon: IconDefinition = faExclamationTriangle;

    constructor(private formBuilder: FormBuilder, private popUpService: PopUpService) { }

    ngOnInit() {
        this.ASK_QUESTION_FORM = this.formBuilder.group({
            question: ['', Validators.required],
            additional_info: ['', Validators.required],
            category: ['', Validators.required]
        });

        this.popUpService.askQuestionForm$.subscribe(active => this.isActive = active);
    }

    // CLOSE FORM
    close_ASK_QUESTION_FORM(): void {
        // EMITS A BOOLEAN VALUE, false
        this.popUpService.closeAskQuestionForm();
    }
}