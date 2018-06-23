import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;
  isbn = '';
  title = '';
  description = '';
  author = '';
  publisher = '';
  published_year = '';

  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      isbn: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
      author: [null, Validators.required],
      publisher: [null, Validators.required],
      published_year: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.postBook(form).subscribe(
      res => {
        const id = res['id'];
        this.router.navigate(['/book-details', id]);
      },
      err => {
        console.error(err);
      }
    );
  }
}
