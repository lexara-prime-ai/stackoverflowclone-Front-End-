// FILE PATHS
const logo = "../../../assets/logos/web/png/logo_colored.png" as string;

import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
    IconDefinition,
    faPen,
    faPencilAlt,
    faBars,
    faSearch,
    faLifeRing,
    faDesktop,
    faAngleUp,
    faAngleDown,
    faCheckCircle,
    faQuestion,
    faBriefcase,
    faFileLines,
    faTag,
    faUser,
    faBookmark,
    faBullhorn,
    faTableCells,
    faPaperPlane,
    faMessage,
    faThumbsUp,
    faEye,
    faLocation,
    faGlobe,
    faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { AskQuestionComponent } from "../../pop-ups/questions/ask-question/ask-question.component";
import { PopUpService } from "src/app/shared/services/pop-up.service";
import { EditQuestionComponent } from "../../pop-ups/questions/edit-question/edit-question.component";
import { Observable } from "rxjs";
import { QUESTION_MODEL } from "src/app/shared/models/question.model";
import { Store, select } from "@ngrx/store";

import * as fromQuestion from '../QA-panel/state/question.reducer';
import * as questionActions from '../QA-panel/state/question.actions'
import { MessageBoxComponent } from "../../message-box/message-box.component";
import { MessageBoxService } from "src/app/shared/services/message-box.service";

@Component({
    selector: "home",
    templateUrl: "QA-panel.component.html",
    styleUrls: ["QA-panel.component.css"],
    standalone: true,
    imports: [CommonModule, RouterModule, FontAwesomeModule, AskQuestionComponent, EditQuestionComponent, MessageBoxComponent],
})
export class QAPanelComponent implements OnInit {
    /* DEFAULT PROPERTIES */
    isActive: boolean = false;
    questions$!: Observable<QUESTION_MODEL[]>;
    error$!: Observable<string>;

    /* ICONS */
    logo = logo;
    menuIcon: IconDefinition = faBars;
    searchIcon: IconDefinition = faSearch;
    helpIcon: IconDefinition = faLifeRing;
    desktopIcon: IconDefinition = faDesktop;
    upIcon: IconDefinition = faAngleUp;
    downIcon: IconDefinition = faAngleDown;
    checkIcon: IconDefinition = faCheckCircle;
    questionMarkIcon: IconDefinition = faQuestion;
    questionMarkIconAlt: IconDefinition = faQuestionCircle;
    briefCaseIcon: IconDefinition = faBriefcase;
    documentIcon: IconDefinition = faFileLines;
    tagIcon: IconDefinition = faTag;
    userIcon: IconDefinition = faUser;
    bookmarkIcon: IconDefinition = faBookmark;
    bullHornIcon: IconDefinition = faBullhorn;
    tableIcon: IconDefinition = faTableCells;
    inboxIcon: IconDefinition = faMessage;
    paperPlaneIcon: IconDefinition = faPaperPlane;
    thumbsUpIcon: IconDefinition = faThumbsUp;
    eyeIcon: IconDefinition = faEye;
    penIcon: IconDefinition = faPen;
    pencilIcon: IconDefinition = faPencilAlt;
    pinIcon: IconDefinition = faLocation;
    globeIcon: IconDefinition = faGlobe;

    // INJECT MODULAR SERVICES
    constructor(private popUpService: PopUpService, private store: Store, private messageBoxService: MessageBoxService) { }

    ngOnInit() {
        this.displayQuestions();
        this.error$ = this.store.pipe(select(fromQuestion.getError));
    }

    displayQuestions() {
        this.store.dispatch(new questionActions.LoadQuestions());
        this.questions$ = this.store.pipe(select(fromQuestion.getQuestions));

        // SHOW WELCOME MESSAGE WHEN
        if (this.questions$) {
            this.messageBoxService.SHOW_SUCCESS_MESSAGE("Embrace curiosity, ignite your mind.");
        }
    }  

    // FORMAT SQL DATE OBJECT
    formatDate(dateStr: string): string {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" };
        // RETURN FORMATTED DATE
        return date.toLocaleDateString("en-US", options);
    }

    // CHANGE isActive STATE TO true
    alter_ASK_QUESTION_FORM_state(): void {
        // EMITS A BOOLEAN VALUE, true
        this.popUpService.openAskQuestionForm();
    }

    // CHANGE isActive STATE TO true
    alter_EDIT_QUESTION_FORM_state(): void {
        // EMITS A BOOLEAN VALUE true
        this.popUpService.openEditQuestionForm();
    }

    addAnswer(question_id: number) {
        this.messageBoxService.SHOW_SUCCESS_MESSAGE("Adding answer...");
        console.log(question_id);
    }

    UPVOTE() {
        this.messageBoxService.SHOW_SUCCESS_MESSAGE("Answer upvoted...");
    }

    DOWNVOTE() {
        this.messageBoxService.SHOW_SUCCESS_MESSAGE("Answer downvoted...");
    }

    MARK_AS_PREFERRED() {
        this.messageBoxService.SHOW_SUCCESS_MESSAGE("Answer marked as preferred...");
    }
}                                                                                                                                                        
