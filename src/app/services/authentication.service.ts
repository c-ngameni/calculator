export class AuthenticationService {
    isAuthenticated = false;

    logIn() {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    this.isAuthenticated = true;
                    resolve(true);
                }, 2000
            );
        });
    }

    logOut() {
        this.isAuthenticated = false;
    }

}