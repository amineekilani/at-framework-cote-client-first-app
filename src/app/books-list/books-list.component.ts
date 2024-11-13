import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { Book } from '../model/book';
import { BookEditComponent } from "../book-edit/book-edit.component";

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent, BookEditComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent
{
  title="Listes des livres";
  books=[
    new Book(1,"Inverting the Pyramid","Jonathan Wilson",14),
    new Book(2,"I Am Zlatan Ibrahimović","Zlatan Ibrahimović",12),
    new Book(3,"I Think Therefore I Play","Andrea Pirlo",13),
    new Book(4,"Commitment: My Autobiography","Didier Drogba",15),
    new Book(5,"Mein Kampf","Adolf Hitler",19)
  ];
  action="";
  selectedBook?:Book;
  bookToEdit=new Book(0,"","",0);
  changeAction(action:string, book?:Book)
  {
    this.action=action;
    this.bookToEdit=book;
  }
  addBook(book:Book)
  {
    this.books=[...this.books,book];
    this.changeAction("");
  }
  showEditForm(book:Book)
  {
    this.changeAction("edit");
    this.bookToEdit=book;
    console.log(this.bookToEdit);
  }
  editBook(book:Book)
  {
    this.books=this.books.map(currentBook=>currentBook.id===book.id?book:currentBook)
    this.changeAction("");
  }
  deleteBook(id:number)
  {
    if(confirm("Êtes-vous sûr de vouloir supprimer le livre ?"))
      this.books=this.books.filter(currentBook=>currentBook.id!==id)
  }
}