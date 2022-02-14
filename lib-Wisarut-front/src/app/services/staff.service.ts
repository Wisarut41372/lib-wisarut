import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StaffService {
    private url = `${environment.serviceUrl}/staff`
    constructor(private http: HttpClient) { }

    login(login: any) {
        return this.http.post<any>(`${this.url}/login`, login)
            .pipe(map((res) => {
                return res;
            }));
    }

    addStaff(staff: any){
        let getUrl = `${this.url}/add`;
        return this.http.post<any>(getUrl,staff)
        .pipe(map((res)=>{
          return res;
        }));
      }

    getStaffs(): any {
        return this.http.get<any>(this.url);
    }

    getStaffById(id: any) {
        let getUrl = `${this.url}/${id}`;
        return this.http.get<any>(getUrl);
    }

    getStaffByStaffId(id: any) {
        let getUrl = `${this.url}/${id}`;
        return this.http.get<any>(getUrl);
    }

    updateStaff(staff: any, id: any) {
        let getUrl = `${this.url}/${id}`;
        return this.http.put<any>(getUrl, staff)
            .pipe(map((res) => {
                return res;
            }));
    }

    deleteStaff(id: any) {
        let getUrl = `${this.url}/${id}`;
        return this.http.delete<any>(getUrl);
    }
}
