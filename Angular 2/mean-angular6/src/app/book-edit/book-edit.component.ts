import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  bookForm: FormGroup;
  id = '';
  isbn = '';
  title = '';
  description = '';
  author = '';
  published = '';
  published_year = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
    this.bookForm = this.fb.group({
      'isbn': [null, Validators.required],
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'author': [null, Validators.required],
      'publisher': [null, Validators.required],
      'published_year': [null, Validators.required],
    });
  }

  getBook(id: string) {
    this.api.getBook(id).subscribe(
      data => {
        this.id = data['_id'];
        this.bookForm.setValue({
          isbn: data.isbn,
          title: data.title,
          description: data.description,
          author: data.author,
          publisher: data.publisher,
          published_year: data.published_year,
        });
      }
    );
  }

  onFormSubmit(form: NgForm) {
    this.api.updateBook(this.id, form).subscribe(
      res => {
        const id = res['_id'];
        this.router.navigate(['/book-details', id]);
      }, err => {
        console.error(err);
      }
    );
  }

  bookDetails() {
    this.router.navigate(['/book-details', this.id]);
  }

}
