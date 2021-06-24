import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { ILeaveProductsComponent } from "./products.component";

@Injectable({
    providedIn: 'root'
})
export class ProductsLeaveGuard implements CanDeactivate<ILeaveProductsComponent> {
    canDeactivate(component: ILeaveProductsComponent): boolean {
        return component.canDeactive();
    }

}