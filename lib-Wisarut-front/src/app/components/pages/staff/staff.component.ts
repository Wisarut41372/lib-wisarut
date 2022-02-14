import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staffs : any;
  searchForm!: FormGroup;

  constructor(private service : StaffService, private router : Router) { }

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      searchId: new FormControl()
    });

    this.service.getStaffs().subscribe((res:any)=>{
      this.staffs = res.data;
    })
  }

  searchId(){
    this.service.getStaffByStaffId(this.searchForm.value.searchId).subscribe((res:any)=>{
      this.staffs = res.data;
    })
  }

  deleteStaff(id:any){
    if(confirm("Comfirm Delete")){
      this.service.deleteStaff(id).subscribe((res)=>{
        this.router.navigateByUrl('/',{skipLocationChange:true})
        .then(()=>{
          this.router.navigate(['/staff']);
        });
      });
    }
  }

}
