import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {
  memberForm!: FormGroup;

  constructor(private service: MemberService,private router: Router) { }

  ngOnInit(): void {
    this.memberForm = new FormGroup({
      memberId: new FormControl(),
      password: new FormControl(),
      name: new FormControl(),
      studyGroup: new FormControl(),
      tel: new FormControl(),
      address: new FormControl(),
      categoryId: new FormControl()
    });
  }

  addMember(){
    let member = {
      memberId: this.memberForm.value.memberId,
      password: this.memberForm.value.password,
      name: this.memberForm.value.name,
      studyGroup: this.memberForm.value.studyGroup,
      tel: this.memberForm.value.tel,
      address: this.memberForm.value.address,
      categoryId:this.memberForm.value.categoryId,
    }
    this.service.addMember(member).subscribe((res)=>{
      console.log(res);
      if(res.msg="Add a member complete."){
        window.alert("เพิ่มสมาชิกสำเร็จ");
        this.router.navigate(["/member"]);
      }else{
        window.alert("เพิ่มสมาชิกไม่สำเร็จ!");
        this.router.navigate(["/member/add"]);
      }
      
    });
  }

}
