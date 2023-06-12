// FILE PATHS
const logo = "../../../assets/logos/web/png/logo_colored.png" as string;

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
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

@Component({
    selector: "home",
    templateUrl: "QA-panel.component.html",
    styleUrls: ["QA-panel.component.css"],
    standalone: true,
    imports: [CommonModule, RouterModule, FontAwesomeModule],
})
export class QAPanelComponent {
    /* DEFAULT PROPERTIES */
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
}
