import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: any;
  bookForm!: FormGroup;
  currentBook: any;

  constructor(private service: BookService,private router: Router,private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      name: new FormControl(),
      author: new FormControl(),
      publicher: new FormControl(),
      price: new FormControl(),
      studentBorrow: new FormControl(),
      teacherBorrow: new FormControl()
    });

    this.activatedRouter.params.subscribe((params)=>{
      this.id = params['id'];
    });

    this.service.getBookById(this.id).subscribe((res)=>{
      this.currentBook = res.data;
      this.bookForm.controls['name'].setValue(this.currentBook.name);
      this.bookForm.controls['author'].setValue(this.currentBook.author);
      this.bookForm.controls['publicher'].setValue(this.currentBook.publicher);
      this.bookForm.controls['price'].setValue(this.currentBook.price);
      this.bookForm.controls['studentBorrow'].setValue(this.currentBook.studentBorrow);
      this.bookForm.controls['teacherBorrow'].setValue(this.currentBook.teacherBorrow);
    });

  }

  updateBook(){
    let product = {
      name: this.bookForm.value.name,
      author: this.bookForm.value.author,
      publicher: this.bookForm.value.publicher,
      price: this.bookForm.value.price,
      studentBorrow: this.bookForm.value.studentBorrow,
      teacherBorrow: this.bookForm.value.teacherBorrow,
    }
    this.service.updateBook(product,this.id).subscribe((res:any)=>{
      window.alert("แก้ไขเรียบร้อย");
      this.router.navigate(["/book"]);
    });
  }
}
