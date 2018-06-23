import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book = {};

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

  getBookDetails(id: any) {
    this.api.getBook(id).subscribe(
      data => {
        console.log(data);
        this.book = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteBook(id: string) {
    this.api.deleteBook(id).subscribe(res => {
      this.router.navigate(['/books']);
    }, err => {
      console.error(err);
    });
  }
}
