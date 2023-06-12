// FILE PATHS
const logo = "../../../assets/logos/web/png/logo_colored.png" as string;

import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
    IconDefinition,
    faPen,
    faBars,
    faSearch,
    faLifeRing,
    faDesktop,
    faAngleDown,
    faQuestion,
    faBriefcase,
    faFileLines,
    faTag,
    faUser,
    faBookmark,
    faBullhorn,
    faTableCells,
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

@Component({
    selector: "home",
    templateUrl: "QA-panel.component.html",
    styleUrls: ["QA-panel.component.css"],
    standalone: true,
    imports: [CommonModule, RouterModule, FontAwesomeModule, AskQuestionComponent, EditQuestionComponent],
})
export class QAPanelComponent implements OnInit {
    /* DEFAULT PROPERTIES */
    isActive: boolean = false;

    /* ICONS */
    logo = logo;
    menuIcon: IconDefinition = faBars;
    searchIcon: IconDefinition = faSearch;
    helpIcon: IconDefinition = faLifeRing;
    desktopIcon: IconDefinition = faDesktop;
    downIcon: IconDefinition = faAngleDown;
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
    thumbsUpIcon: IconDefinition = faThumbsUp;
    eyeIcon: IconDefinition = faEye;
    penIcon: IconDefinition = faPen;
    pinIcon: IconDefinition = faLocation;
    globeIcon: IconDefinition = faGlobe;

    // INJECT MODULAR SERVICES
    constructor(private popUpService: PopUpService) { }

    ngOnInit() {
        
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
}
