import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { USER_MODEL } from '../models/user.model'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    /* BASE URL */
    private BASE_URL = `http://localhost:3000`;

    constructor(private HTTP: HttpClient) { }

    getUsers(): Observable<USER_MODEL[]> {
        console.log('Fetching Users...');
        return this.HTTP.get<USER_MODEL[]>(this.BASE_URL + '/users');
    }







    /**************************
    **** CUSTOM VALIDATORS ****
    **************************/
    // EMAIL PATTERN VALIDATOR
    EMAIL_PATTERN_VALIDATOR(): ValidatorFn {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return Validators.pattern(emailPattern);
    }

    // PASSWORD PATTERN VALIDATOR
    PASSWORD_PATTERN_VALIDATOR(): ValidatorFn {
        const passwordPattern = /^(?=.*[A-Za-z])[A-Za-z\d\S]{8,}$/;
        return Validators.pattern(passwordPattern);
    }
}