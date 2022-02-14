import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private url = `${environment.serviceUrl}/member`;

  constructor(private http: HttpClient) { }

  getMembers() : any{
    return this.http.get<any>(this.url);
  }

  getMemberById(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }

  getMemberByMemberId(id: any){
    let getUrl = `${this.url}/memberId/${id}`;
    return this.http.get<any>(getUrl);
  }

  updateMember(member: any,id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl,member)
    .pipe(map((res)=>{
      return res;
    }));
  }

  addMember(member: any){
    let getUrl = `${this.url}/add`;
    return this.http.post<any>(getUrl,member)
    .pipe(map((res)=>{
      return res;
    }));
  }

  deleteMember(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.delete<any>(getUrl);
  }
}
