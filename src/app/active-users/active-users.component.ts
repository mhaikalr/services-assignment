import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{

  users: string[];

  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
    this.users = this._userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this._userService.setToInactive(id);
  }
}
