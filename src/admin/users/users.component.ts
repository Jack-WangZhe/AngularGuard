import { Component, OnInit, ViewChild } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild('userProfile', { static: true })
  userProfile!: UserProfileComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
