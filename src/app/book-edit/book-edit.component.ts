import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent
{
  @Input() book?:Book;
  @Output() bookEdited=new EventEmitter<Book>();
  editBook()
  {
    //Envoyer le livre modifié vers la liste pour la mise à jour
    this.bookEdited.emit(this.book);
  }
}