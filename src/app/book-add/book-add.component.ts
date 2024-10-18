import { Component, Input } from '@angular/core';
import {BooksListComponent} from '../books-list/books-list.component';
@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [BooksListComponent],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  @Input() lastId=0;
  addBook(title:string, author:string, price:number)
  {
    const newBook=
    {
      //id : Math.floor(Math.random()*1000),
      id : this.lastId+1,
      title : title,
      author : author,
      price : price
    };
    console.log(newBook)
  }
}