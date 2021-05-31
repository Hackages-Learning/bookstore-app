import { Component } from '@angular/core';
import { Book } from '../types/book';
import { books as mockBooks } from '../mocks/books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  headerTitle = 'Bookstore by Hackages';

  // Use mock data
  books: Book[] = mockBooks;

  search() {
    // Search books by category and by filter
  }

  reset() {
    // Implement the reset button
  }
}
