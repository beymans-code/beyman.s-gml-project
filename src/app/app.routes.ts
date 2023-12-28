import { Routes } from '@angular/router';
import { ProductTableComponent } from '../products/components/product-table/product-table.component';
import { ProductFormComponent } from '../products/components/product-form/product-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/product-list', pathMatch: 'full' },
    { path: 'product-list', component: ProductTableComponent },
    { path: 'product-list/:edit', component: ProductTableComponent },
    { path: 'product', component: ProductFormComponent },
    { path: 'product/:edit', component: ProductFormComponent },
];
