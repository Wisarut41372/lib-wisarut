import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  id: any;
  memberForm!: FormGroup;
  currentMember: any;

  constructor(private service: MemberService,private router: Router,private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.memberForm = new FormGroup({
      name: new FormControl(),
      studyGroup: new FormControl(),
      tel: new FormControl(),
      address: new FormControl(),
      categoryId: new FormControl()
    });

    this.activatedRouter.params.subscribe((params)=>{
      this.id = params['id'];
    });

    this.service.getMemberById(this.id).subscribe((res)=>{
      this.currentMember = res.data;
      this.memberForm.controls['name'].setValue(this.currentMember.name);
      this.memberForm.controls['studyGroup'].setValue(this.currentMember.studyGroup);
      this.memberForm.controls['tel'].setValue(this.currentMember.tel);
      this.memberForm.controls['address'].setValue(this.currentMember.address);
      this.memberForm.controls['categoryId'].setValue(this.currentMember.categoryId);
    });

  }

  updateMember(){
    let member = {
      name: this.memberForm.value.name,
      studyGroup: this.memberForm.value.studyGroup,
      tel: this.memberForm.value.tel,
      address: this.memberForm.value.address,
      categoryId:this.memberForm.value.categoryId,
    }
    this.service.updateMember(member,this.id).subscribe((res:any)=>{
      window.alert("อัพเดทเรียบร้อบแล้ว");
      this.router.navigate(["/member"]);
    });
  }
}
