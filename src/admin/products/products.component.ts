import { Component } from '@angular/core';

export interface ILeaveProductsComponent {
  canDeactive: () => boolean;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements ILeaveProductsComponent {

  canDeactive(): boolean {
    console.log('Come Products Leave Check')
    return true;
  };

}
