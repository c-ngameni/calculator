import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model'

@Injectable()
export class UserService {

    private users: User[];

    userSubject = new Subject<User[]>();

    constructor(private httpClient: HttpClient) {

    }

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.saveUsers();
        this.emitUsers;
    }

    saveUsers() {
        this.httpClient.put('https://calculator-643a5-default-rtdb.europe-west1.firebasedatabase.app/users.json', this.users)
        .subscribe(
            () => {
                console.log('Enregistrement des utilisateurs terminé.');
            },
            (error) => {
                console.error('Une erreur s\'est produite:', error);
            }
        );
    }

    getUsers() {
        this.httpClient.get<User[]>('https://calculator-643a5-default-rtdb.europe-west1.firebasedatabase.app/users.json')
        .subscribe(
            (response) => {
                this.users = response;
                this.emitUsers();
            },
            (error) => {
                console.error('Une erreur s\'est produite:', error);
            }
        );
    }

}