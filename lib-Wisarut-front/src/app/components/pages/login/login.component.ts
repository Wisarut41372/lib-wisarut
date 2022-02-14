import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errMessage = "";
  isLoginFailed = false;
  isLoggedIn = false;

  constructor(private service: StaffService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.loginForm = new FormGroup({
        staffId: new FormControl(),
        password: new FormControl()
      });
    }
  }

  doLogin() {
    let login = {
      staffId: this.loginForm.value.staffId,
      password: this.loginForm.value.password
    };

    // window.alert(login.email + login.password);

    this.service.login(login).subscribe((res)=>{
      this.tokenStorage.saveToken(res.token);
      this.tokenStorage.saveUser(res.userCredentials);
      this.isLoggedIn = true;
      window.location.reload();
    },err => {
      this.errMessage = err.error.msg;
      this.isLoginFailed = true;
      console.log(this.errMessage);
    });

  }

}
