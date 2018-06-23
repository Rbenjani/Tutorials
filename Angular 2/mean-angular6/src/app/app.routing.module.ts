import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book/book.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
    },
    {
        path: 'books',
        component: BookComponent,
        data: {title: 'Book List'}
    },
    {
        path: 'book-details/:id',
        component: BookDetailComponent,
        data: {title: 'Book Details'}
    },
    {
        path: 'book-create',
        component: BookCreateComponent,
        data: {title: 'Create Book'}
    },
    {
        path: 'book-edit/:id',
        component: BookEditComponent,
        data: {title: 'Edit Book'}
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
