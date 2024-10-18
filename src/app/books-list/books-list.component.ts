import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";

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
    {id : 1, title : "2014", author : "Ramos", price : 10},
    {id : 2, title : "2016", author : "Zidane", price : 11},
    {id : 3, title : "2017", author : "Ronaldo", price : 12},
    {id : 4, title : "2018", author : "Bale", price : 13},
    {id : 5, title : "2022", author : "Benzema", price : 14},
    {id : 6, title : "2024", author : "Ancelotti", price : 15}
];
  action="";
  changeAction(action:string)
  {
    this.action=action;
  }
}