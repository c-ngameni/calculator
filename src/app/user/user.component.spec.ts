import { of } from 'rxjs';
import { UserComponent } from "./user.component";

describe('UserComponent', () => {
    let component: UserComponent;
    let mockUserService: any;

    beforeEach(() => {
        mockUserService = jasmine.createSpyObj(['saveUsers', 'deleteUsers']);
        component = new UserComponent(mockUserService);
    });

    describe('onSaveUsers', () => {
        it('should call saveUsers', () => {
            mockUserService.saveUsers.and.returnValue(of(true));
            component.onSaveUsers();

            expect(mockUserService.saveUsers).toHaveBeenCalled();
        });
    });

    describe('onDeleteUsers', () => {
        it('should call deleteUsers', () => {
            mockUserService.deleteUsers.and.returnValue(of(true));
            component.onDeleteUsers();

            expect(mockUserService.deleteUsers).toHaveBeenCalled();
        });
    });
});