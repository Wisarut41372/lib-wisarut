import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './components/pages/book-add/book-add.component';
import { BookEditComponent } from './components/pages/book-edit/book-edit.component';
import { BookComponent } from './components/pages/book/book.component';
import { BorrowAddComponent } from './components/pages/borrow-add/borrow-add.component';
import { BorrowComponent } from './components/pages/borrow/borrow.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { MemberAddComponent } from './components/pages/member-add/member-add.component';
import { MemberEditComponent } from './components/pages/member-edit/member-edit.component';
import { MemberComponent } from './components/pages/member/member.component';
import { ReturnComponent } from './components/pages/return/return.component';
import { StaffAddComponent } from './components/pages/staff-add/staff-add.component';
import { StaffEditComponent } from './components/pages/staff-edit/staff-edit.component';
import { StaffComponent } from './components/pages/staff/staff.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: "", component: MainComponent},
  { path: "login", component: LoginComponent},
  { path: "book", component: BookComponent, canActivate: [AuthGuard] },
  { path: "book/add",component: BookAddComponent, canActivate: [AuthGuard] },
  { path: "book/edit/:id",component: BookEditComponent, canActivate: [AuthGuard] },
  { path: "member", component: MemberComponent, canActivate: [AuthGuard] },
  { path: "member/add", component: MemberAddComponent, canActivate: [AuthGuard] },
  { path: "member/edit/:id", component: MemberEditComponent, canActivate: [AuthGuard] },
  { path: "staff", component: StaffComponent, canActivate: [AuthGuard] },
  { path: "staff/add", component: StaffAddComponent, canActivate: [AuthGuard] },
  { path: "staff/edit/:id", component: StaffEditComponent, canActivate: [AuthGuard] },
  { path: "borrow", component: BorrowComponent, canActivate: [AuthGuard] },
  { path: "borrow/add", component: BorrowAddComponent, canActivate: [AuthGuard] },
  { path: "return/:id", component: ReturnComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
