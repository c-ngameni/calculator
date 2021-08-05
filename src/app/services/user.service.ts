import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model'

@Injectable()
export class UserService {

    private USERS_URL = '/rest/users';

    private users: User[] = [];

    userSubject = new Subject<User[]>();

    constructor(private httpClient: HttpClient) {
    }

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    saveUser(user: User): Observable<User> {
        this.users.push(user);
        return this.saveUsers();
    }

    saveUsers(): Observable<any> {
        return this.httpClient.put(this.USERS_URL, this.users);
    }

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.USERS_URL);
    }

    deleteUsers(): Observable<any> {
        return this.httpClient.delete(this.USERS_URL);
    }

}