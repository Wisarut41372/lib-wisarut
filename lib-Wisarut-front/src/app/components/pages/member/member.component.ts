import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  members : any;
  searchForm!: FormGroup;

  constructor(private service : MemberService, private router : Router) { }

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      searchId: new FormControl()
    });

    this.service.getMembers().subscribe((res:any)=>{
      this.members = res.data;
    })
  }

  searchId(){
    this.service.getMemberByMemberId(this.searchForm.value.searchId).subscribe((res:any)=>{
      this.members = res.data;
    })
  }

  deleteMember(id:any){
    if(confirm("ต้องการลบหรือไม่?")){
      this.service.deleteMember(id).subscribe((res)=>{
        this.router.navigateByUrl('/',{skipLocationChange:true})
        .then(()=>{
          this.router.navigate(['/member']);
        });
      });
    }
  }

}
