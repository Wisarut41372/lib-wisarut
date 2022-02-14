import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books : any;
  searchForm!: FormGroup;


  constructor(private service : BookService, private router : Router) { }

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      searchId: new FormControl()
    });

    this.searchForm = new FormGroup({
      searchName: new FormControl()
    });

    this.service.getBooks().subscribe((res:any)=>{
      this.books = res.data;
    })

  }
 
  searchId(){
    this.service.getBookByBookId(this.searchForm.value.searchId).subscribe((res:any)=>{
      this.books = res.data;
    })
  }

  deleteBook(id:any){
    if(confirm("ต้องการลบ?")){
      this.service.deleteBook(id).subscribe((res)=>{
        this.router.navigateByUrl('/',{skipLocationChange:true})
        .then(()=>{
          this.router.navigate(['/book']);
        });
      });
    }
  }
 

}
