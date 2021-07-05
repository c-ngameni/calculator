import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { User } from "../models/user.model";

@Injectable()
export class AuthenticationService {
    isAuthenticated = false;

    isAuthenticatedSubject = new Subject<boolean>();

    constructor(private httpClient: HttpClient) {
    }

    emitAuthenticationStatus() {
        this.isAuthenticatedSubject.next(this.isAuthenticated);
    }

    signUpUser(user: User) {
        return this.httpClient.post('/users/registration', user);
    }

    logIn(credentials?: any) {
        let headers = new HttpHeaders({});
        if (credentials) {
            // Encoding the username and password to Base64.
            headers = new HttpHeaders({
                'Authorization': 'Basic ' + btoa(credentials.username + ':' + credentials.password)
            });
        }
        this.httpClient.get('/users/login', { headers: headers })
            .subscribe(
                response => {
                    if (response && response['name']) {
                        this.isAuthenticated = true;
                    } else {
                        // this.isAuthenticated = false;
                        this.isAuthenticated = true;
                    }
                    this.emitAuthenticationStatus();
                },
                (error: any) => console.error('Une erreur s\'est produite:', error));
    }

    logOut() {
        this.isAuthenticated = false;
    }

}