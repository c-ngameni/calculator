import { Router } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthenticationService } from "./services/authentication.service";

describe('AppComponent', () => {
    let component: AppComponent;
    let mockAuthenticationService: AuthenticationService;
    let mockRouter: Router;

    beforeEach(() => {
        mockAuthenticationService = jasmine.createSpyObj(['logOut']);
        mockRouter = jasmine.createSpyObj(['navigate', 'navigateByUrl']);
        component = new AppComponent(mockAuthenticationService, mockRouter);
    });

    it('should isAuthenticated equal to false', () => {
        expect(component.isAuthenticated).toBeFalse();
    });

    describe('onLogIn', () => {
        it('should call navigate with correct route', () => {
            component.onLogIn();

            expect(mockRouter.navigate).toHaveBeenCalledWith(['/connexion']);
        });
    });

    describe('onLogOut', () => {
        it('should call logOut', () => {
            component.onLogOut();

            expect(mockAuthenticationService.logOut).toHaveBeenCalled();
        });

        it('should call navigateByUrl with correct route', () => {
            component.onLogOut();

            expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/connexion');
        });
    });
});