import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { UserService } from "./user.service";
import { User } from "../models/user.model";

describe('UserService', () => {
    let service: UserService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService]
        });

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(UserService);
    });

    describe('getUsers', () => {
        it('should retrieve users', () => {
            service.getUsers().subscribe();

            const request = httpTestingController.expectOne('https://calculator-643a5-default-rtdb.europe-west1.firebasedatabase.app/users.json');
            request.flush(new User('John', 'Doe', ''));
            httpTestingController.verify();
        });
    });
});