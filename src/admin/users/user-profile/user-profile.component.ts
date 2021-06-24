import { Component } from '@angular/core';

export interface ILeaveUserProfileComponent {
  canDeactive: () => boolean;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements ILeaveUserProfileComponent {
  canDeactive(): boolean {
    console.log('Come User Profile Leave Check');
    return false;
  }
}
