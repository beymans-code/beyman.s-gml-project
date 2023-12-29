import { Routes } from '@angular/router';
import { ProductTableComponent } from '../products/components/product-table/product-table.component';
import { ProductFormComponent } from '../products/components/product-form/product-form.component';

/**
 * Rutas de la aplicacion.
 */
export const routes: Routes = [
    /**
     * Ruta raiz.
     */
    { path: '', redirectTo: '/product-list', pathMatch: 'full' },
    /**
     * Lista de productos.
     */
    { path: 'product-list', component: ProductTableComponent },
    /**
     * Nuevo producto.
     */
    { path: 'product', component: ProductFormComponent },
    /**
     * Editar producto.
     */
    { path: 'product/:edit', component: ProductFormComponent },
];
