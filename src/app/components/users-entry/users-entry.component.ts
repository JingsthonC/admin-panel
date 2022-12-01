import { Component, Input,Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { USERS } from 'src/app/mock-users';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users-entry',
  templateUrl: './users-entry.component.html',
  styleUrls: ['./users-entry.component.css']
})
export class UsersEntryComponent {
  @Output() onDeleteUser: EventEmitter<User> = new EventEmitter();
  @Input() user!: User;
  users: User[] = USERS;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private userService: UserService) {

  }

  onDelete(user: any){
    this.onDeleteUser.emit(user);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(() =>(this.users = this.users.filter((u) => u.id !== user.id)));
  }


}
