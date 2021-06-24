import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileLeaveGuard } from './user-profile/user-profile-leave-guard.service';
import { UsersComponent } from './users.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  canDeactivate: [UserProfileLeaveGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
