import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/services/staff.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  id: any;
  staffForm!: FormGroup;
  currentStaff: any;
  constructor(private service: StaffService,private router: Router,private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.staffForm = new FormGroup({
      name: new FormControl(),
      tel: new FormControl(),
      address: new FormControl(),
    });

    this.activatedRouter.params.subscribe((params)=>{
      this.id = params['id'];
    });

    this.service.getStaffById(this.id).subscribe((res)=>{
      this.currentStaff = res.data;
      this.staffForm.controls['name'].setValue(this.currentStaff.name);
      this.staffForm.controls['tel'].setValue(this.currentStaff.tel);
      this.staffForm.controls['address'].setValue(this.currentStaff.address);
    
    });
    
  }
  updateStaff(){
    let staff = {
      name: this.staffForm.value.name,
      tel: this.staffForm.value.tel,
      address: this.staffForm.value.address,
    }
    this.service.updateStaff(staff,this.id).subscribe((res:any)=>{
      window.alert("อัพเดทเรียบร้อบแล้ว");
      this.router.navigate(["/staff"]);
    });
  }
}
