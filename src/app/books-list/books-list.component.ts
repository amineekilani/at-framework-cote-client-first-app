import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { Book } from '../model/book';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  title="Listes des livres";
  books = [
    new Book(1,"Inverting the Pyramid","Jonathan Wilson",14),
    new Book(2,"I Am Zlatan Ibrahimović","Zlatan Ibrahimović",12),
    new Book(3,"I Think Therefore I Play","Andrea Pirlo",13),
    new Book(4,"Commitment: My Autobiography","Didier Drogba",15),
    new Book(5,"Mein Kampf","Adolf Hitler",19)
  ];
  action="";
  selectedBook?: Book;
  changeAction(action:string, book?:Book)
  {
    this.action=action;
    this.selectedBook=book;
  }
  addBook(book:Book)
  {
    this.books=[...this.books,book];
    this.changeAction("");
  }
}