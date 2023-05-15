import { Component } from '@angular/core';
import { Product } from './model';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="gridData">
            <kendo-grid-column field="ProductID" title="ID"> </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Name"> </kendo-grid-column>
            <kendo-grid-column field="Category.CategoryName" title="Category"> </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Price"> </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridData: Product[] = [
        {
            ProductID: 1,
            ProductName: 'Chai',
            UnitPrice: 18,
            Category: {
                CategoryID: 1,
                CategoryName: 'Beverages'
            }
        },
        {
            ProductID: 2,
            ProductName: 'Chang',
            UnitPrice: 19,
            Category: {
                CategoryID: 1,
                CategoryName: 'Beverages'
            }
        },
        {
            ProductID: 3,
            ProductName: 'Aniseed Syrup',
            UnitPrice: 10,
            Category: {
                CategoryID: 2,
                CategoryName: 'Condiments'
            }
        }
    ];
}