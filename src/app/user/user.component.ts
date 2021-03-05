import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.getUsers()
      .subscribe(
        (response: User[]) => this.users = response,
        (error) => handleError(error)
      );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onSaveUsers() {
    this.userService.saveUsers()
      .subscribe(
        () => console.log('Enregistrement des utilisateurs terminé.'),
        (error) => handleError(error)
      );
  }

  onDeleteUsers() {
    this.userService.deleteUsers()
      .subscribe(
        (response: User[]) => this.users = response,
        (error) => handleError(error)
      );
  }

}

function handleError(error: any) {
  console.error('Une erreur s\'est produite:', error);
}
