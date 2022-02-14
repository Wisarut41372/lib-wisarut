import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';
@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.css']
})
export class StaffAddComponent implements OnInit {
  staffForm!: FormGroup;

  constructor(private service: StaffService,private router: Router) { }

  ngOnInit(): void {
    this.staffForm = new FormGroup({
      staffId: new FormControl(),
      password: new FormControl(),
      name: new FormControl(),
      tel: new FormControl(),
      address: new FormControl(),
     
    });
  }
  addStaff(){
    let staff = {
      staffId: this.staffForm.value.staffId,
      password: this.staffForm.value.password,
      name: this.staffForm.value.name,
      tel: this.staffForm.value.tel,
      address: this.staffForm.value.address,
    }
    this.service.addStaff(staff).subscribe((res)=>{
      console.log(res);
      if(res.msg="Add a staff complete."){
        window.alert("เพิ่มเจ้าหน้าที่สำเร็จ");
        this.router.navigate(["/member"]);
      }else{
        window.alert("เพิ่มเจ้าหน้าที่ไม่สำเร็จ!");
        this.router.navigate(["/member/add"]);
      }
      
    });
  }
}
