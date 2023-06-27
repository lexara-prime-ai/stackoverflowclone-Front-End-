import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageBoxService } from "./message-box.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AnswerService {
    /* BASE URL */
    private BASE_URL = `http://localhost:8000`;
    private MAILING_SERVICE = `http://localhost:5000`;

    constructor(private HTTP: HttpClient, private messageBoxService: MessageBoxService) { }

    /* ADD ANSWER */
    addAnswer(answer: any) {
        // RETRIEVE TOKEN
        const TOKEN = localStorage.getItem("TOKEN") || "";

        const headers = new HttpHeaders({
            "Content-Type": "application/json",
            "TOKEN": TOKEN
        });

        return this.HTTP.post(`${this.BASE_URL}/answers`, answer, { headers });
    }

    /* DELETE USER */
    markAsPreferred(payload: number): Observable<any> {
        const url = `${this.MAILING_SERVICE}/mark-as-preferred/${payload}`;
        return this.HTTP.post(url, null);
    }
}