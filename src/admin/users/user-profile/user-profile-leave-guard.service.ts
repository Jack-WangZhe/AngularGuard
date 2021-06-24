import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { UsersComponent } from "../users.component";

@Injectable({
    providedIn: 'root'
})
export class UserProfileLeaveGuard implements CanDeactivate<UsersComponent> {
    canDeactivate(component: UsersComponent): boolean {
        return component.userProfile.canDeactive();
    }
}