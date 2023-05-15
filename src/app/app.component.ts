import { Component } from '@angular/core';
import { Customer, Product } from './model';
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { customers } from './customer';



@Component({
  selector: 'my-app',
  template: `
    <kendo-grid
      [kendoGridBinding]="gridData"
      [data]="gridView"
      [pageSize]="pageSize"
      [skip]="skip"
      [pageable]="true"
      (pageChange)="pageChange($event)"
      [sortable]="true"
      [filterable]="true">
      <kendo-grid-column field="ProductID" title="ID"> </kendo-grid-column>
      <kendo-grid-column field="ProductName" title="Name"> </kendo-grid-column>
      <kendo-grid-column field="Category.CategoryName" title="Gender">
      </kendo-grid-column>
      <kendo-grid-column field="UnitPrice" title="Age"> </kendo-grid-column>
    </kendo-grid>
  `,
})
export class AppComponent {
  public gridView!: GridDataResult;
  public pageSize = 4;
  public skip = 0;

  private items: Customer[] = customers;

  constructor() {
      this.loadItems();
  }

  public pageChange(event: PageChangeEvent): void {
      this.skip = event.skip;
      this.loadItems();
  }

  private loadItems(): void {
      this.gridView = {
          data: this.items.slice(this.skip, this.skip + this.pageSize),
          total: this.items.length
      };
  }
  public gridData: Product[] = [
    {
      ProductID: 1,
      ProductName: 'pinky',
      SID: 1,
      EndDate: new Date(),
      StartDate: new Date(),
      UnitsInStock: 10,
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: 'Female',
      },
    },
    {
      ProductID: 2,
      ProductName: 'naznin',
      SID: 2,
      EndDate: new Date(),
      StartDate: new Date(),
      UnitsInStock: 10,
      UnitPrice: 19,
      Category: {
        CategoryID: 1,
        CategoryName: 'Female',
      },
    },
    {
      ProductID: 3,
      ProductName: 'Ulrich',
      SID: 3,
      EndDate: new Date(),
      StartDate: new Date(),
      UnitsInStock: 10,
      UnitPrice: 10,
      Category: {
        CategoryID: 2,
        CategoryName: 'Male',
      },
    },
    {
      ProductID: 4,
      ProductName: 'Martha',
      SID: 4,
      EndDate: new Date(),
      StartDate: new Date(),
      UnitsInStock: 10,
      UnitPrice: 90,
      Category: {
        CategoryID: 2,
        CategoryName: 'Male',
      },
    },
    {
      ProductID: 5,
      ProductName: 'Hulge',
      SID: 5,
      EndDate: new Date(),
      StartDate: new Date(),
      UnitsInStock: 10,
      UnitPrice: 7,
      Category: {
        CategoryID: 2,
        CategoryName: 'Female',
      },
    },
    {
      ProductID: 6,
      ProductName: 'Magnus',
      SID: 6,
      EndDate: new Date(),
      StartDate: new Date(),
      UnitsInStock: 10,
      UnitPrice: 25,
      Category: {
        CategoryID: 2,
        CategoryName: 'Male',
      },
    },
  ];
  
}
