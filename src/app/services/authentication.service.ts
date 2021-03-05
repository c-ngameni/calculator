import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class AuthenticationService {
    isAuthenticated = false;

    isAuthenticatedSubject = new Subject<boolean>();

    constructor(private httpClient: HttpClient) {
    }

    emitAuthenticationStatus() {
        this.isAuthenticatedSubject.next(this.isAuthenticated);
    }

    logIn(credentials?: any) {
        let headers = new HttpHeaders({});
        if (credentials) {
            // Encoding the username and password to Base64.
            headers = new HttpHeaders({
                authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
            });
        }
        this.httpClient.get('http://localhost:8081/users', { headers: headers })
            .subscribe(
                response => {
                    if (response && response['name']) {
                        this.isAuthenticated = true;
                    } else {
                        this.isAuthenticated = false;
                    }
                    this.emitAuthenticationStatus();
                },
                (error: any) => console.error('Une erreur s\'est produite:', error));
    }

    logOut() {
        this.isAuthenticated = false;
    }

}